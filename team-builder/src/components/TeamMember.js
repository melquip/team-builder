import React from 'react';

export default function TeamMember({ member, handleEdit }) {
	const { name, email, role } = member;
	return (
		<div className="member">
			{name}<br />
			{email}<br />
			{role}<br />
			<div className="edit-btn" onClick={e => handleEdit(e, member.id)}>Edit</div>
		</div>
	)
}