import React, { useState } from 'react';
import './App.css';
import uuid from 'uuid';
import Team from './components/Team';

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

const allTeams = [];

function App() {
	return (
		<div className="App">
			<Team initialTeam={initialTeam} name={uuid()} />
		</div>
	);
}

export default App;
