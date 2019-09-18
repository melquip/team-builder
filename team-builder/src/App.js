import React, { useState } from 'react';
import './App.css';
import uuid from 'uuid';
import Form from './components/Form';
import TeamMember from './components/TeamMember';

const initialTeam = [
	{
		id: uuid(),
		name: 'Melquisedeque',
		email: 'melqui@gmail.com',
		role: 'User Interface Developer',
	},
	{
		id: uuid(),
		name: 'Oladimegi',
		email: 'oladimegi@gmail.com',
		role: 'Front-end Engineer',
	},
	{
		id: uuid(),
		name: 'Austin',
		email: 'austin@gmail.com',
		role: 'Back-end Developer',
	}
];

const initialMemberForm = {
	name: '',
	email: '',
	role: '',
}

function App() {
	const [team, setTeam] = useState(initialTeam);
	const [memberForm, setMemberForm] = useState(initialMemberForm)
	const [memberToEdit, setMemberToEdit] = useState('');
	const handleInputChange = e => {
		setMemberForm(
			{
				...memberForm,
				[e.target.id]: e.target.value,
			}
		)
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
	return (
		<div className="App">
			<h1>Team</h1>
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
			<Form
				data={memberForm}
				handleChange={handleInputChange}
				handleSubmit={handleMemberFormSubmit}
			/>
		</div>
	);
}

export default App;
