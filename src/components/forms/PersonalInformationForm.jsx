function PersonalInformationForm({ nextStep, handleChange, formData }) {
	return (
		<form>
			<h2>Personal Information</h2>
			<div>
				<label htmlFor='fullName'>Full Name:</label>
				<input
					type='text'
					id='fullName'
					name='fullName'
					value={formData.fullName || ''}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label htmlFor='dob'>Date of Birth:</label>
				<input
					type='date'
					id='dob'
					name='dob'
					value={formData.dob || ''}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label htmlFor='ssn'>Social Security Number:</label>
				<input
					type='text'
					id='ssn'
					name='ssn'
					value={formData.ssn || ''}
					onChange={handleChange}
					pattern='\d{3}-\d{2}-\d{4}'
					placeholder='123-45-6789'
					required
				/>
			</div>
			<div>
				<label htmlFor='email'>Email:</label>
				<input
					type='email'
					id='email'
					name='email'
					value={formData.email || ''}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label htmlFor='address'>Address:</label>
				<input
					type='text'
					id='address'
					name='address'
					value={formData.address || ''}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label htmlFor='phone'>Phone Number:</label>
				<input
					type='tel'
					id='phone'
					name='phone'
					value={formData.phone || ''}
					onChange={handleChange}
					pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
					placeholder='123-456-7890'
					required
				/>
			</div>
			<button
				type='button'
				onClick={nextStep}
			>
				Next
			</button>
		</form>
	);
}

export default PersonalInformationForm;
