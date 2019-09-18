import React from 'react';

export default function Form({ data, handleChange, handleSubmit }) {
	const { name, email, role } = data;
	return (
		<>
			<h1>Add / Edit Team Member</h1>
			<form>
				<label htmlFor="name">Name:</label>
				<input value={name} onChange={handleChange} id="name" name="name" type="text" required />
				<br />
				<label htmlFor="email">Email:</label>
				<input value={email} onChange={handleChange} id="email" name="email" type="email" required />
				<br />
				<label htmlFor="role">Role:</label>
				<input value={role} onChange={handleChange} id="role" name="role" type="text" required />
				<br />
				<button onClick={handleSubmit}>Submit</button>
			</form>
		</>
	)
}