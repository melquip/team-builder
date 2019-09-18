import React from 'react';

export default function TeamForm({ data, handleChange, handleSubmit }) {
	const { name, email, role } = data;
	const isDisabled = () => {
		const form = document.getElementById('teamMember');
		const isFormValid = form ? (form.reportValidity() || form.checkValidity()) : true;
		return !name || !email || !role || !isFormValid;
	}
	return (
		<>
			<h1>Add / Edit Team Member</h1>
			<form id="teamMember">
				<label htmlFor="name">Name:</label>
				<input
					value={name}
					onChange={handleChange}
					id="name"
					name="name"
					type="text"
					pattern="[^0-9]{2,50}"
					required
				/>
				<br />
				<label htmlFor="email">Email:</label>
				<input
					value={email}
					onChange={handleChange}
					id="email"
					name="email"
					type="email"
					required
				/>
				<br />
				<label htmlFor="role">Role:</label>
				<input
					value={role}
					onChange={handleChange}
					id="role"
					name="role"
					type="text"
					pattern="[^0-9]{2,100}"
					required
				/>
				<br />
				<button
					disabled={isDisabled()}
					onClick={handleSubmit}>
					Submit
				</button>
			</form>
		</>
	)
}