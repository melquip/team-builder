import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'

const initialTeam = [
	{
		name: 'Melquisedeque',
		email: 'melqui@gmail.com',
		role: 'User Interface Developer',
	},
	{
		name: 'Oladimegi',
		email: 'oladimegi@gmail.com',
		role: 'Front-end Engineer',
	},
	{
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
		setTeam(
			[
				...team,
				{ ...memberForm }
			]
		);
		setMemberForm(initialMemberForm);
	}
	return (
		<div className="App">
			<div className="team">
				{
					team.map(member => (
						<div key={member.email} className="member">
							{member.name}<br />
							{member.email}<br />
							{member.role}<br />
						</div>
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
