import React, { useState } from 'react';
import uuid from 'uuid';

import TeamForm from './TeamForm';
import TeamMember from './TeamMember';

const initialMemberForm = {
	name: '',
	email: '',
	role: '',
}

export default function Team({ initialTeam, name }) {

	const [team, setTeam] = useState(initialTeam);
	const [memberForm, setMemberForm] = useState(initialMemberForm)
	const [memberToEdit, setMemberToEdit] = useState('');

	const handleInputChange = e => {
		setMemberForm({
			...memberForm,
			[e.target.id]: e.target.value,
		});
	}

	const handleMemberFormSubmit = e => {
		e.preventDefault();
		if(memberToEdit !== '') {
			const teamMembers = team.filter(member => member.id !== memberToEdit);
			setTeam([ ...teamMembers, memberForm ]);
			
			document.querySelectorAll('.edit-btn')
				.forEach(btn => btn.classList.remove('active'));

			setMemberToEdit('');
		} else {
			setTeam([ ...team, { ...memberForm, id: uuid() } ]);
		}
		setMemberForm(initialMemberForm);
	}

	const handleEditMember = (e, id) => {
		document.querySelectorAll('.edit-btn')
			.forEach(btn => btn.classList.remove('active'));
		e.target.classList.toggle('active');

		setMemberToEdit(id);
		setMemberForm(
			team.find(member => member.id === id)
		);
	}

	return (<>
		<h1>Team {name}</h1>
		<div className="team">
			{
				team.map(member => (
					<TeamMember 
						key={member.id}
						member={member}
						handleEdit={handleEditMember}
					/>
				))
			}
			
		</div>
		<TeamForm
			data={memberForm}
			handleChange={handleInputChange}
			handleSubmit={handleMemberFormSubmit}
		/>
	</>);
}