function EmploymentInformationForm({
	nextStep,
	prevStep,
	handleChange,
	formData,
}) {
	return (
		<form>
			<h2>Employment Information</h2>
			<div>
				<label htmlFor='currentEmployer'>Current Employer:</label>
				<input
					type='text'
					id='currentEmployer'
					name='currentEmployer'
					value={formData.currentEmployer || ''}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label htmlFor='jobTitle'>Job Title:</label>
				<input
					type='text'
					id='jobTitle'
					name='jobTitle'
					value={formData.jobTitle || ''}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label htmlFor='employmentStartDate'>
					Employment Start Date:
				</label>
				<input
					type='date'
					id='employmentStartDate'
					name='employmentStartDate'
					value={formData.employmentStartDate || ''}
					onChange={handleChange}
				/>
			</div>
			<div>
				<label htmlFor='employmentEndDate'>Employment End Date:</label>
				<input
					type='date'
					id='employmentEndDate'
					name='employmentEndDate'
					value={formData.employmentEndDate || ''}
					onChange={handleChange}
					placeholder='Leave blank if currently employed'
				/>
			</div>
			<div>
				<label htmlFor='monthlyIncome'>Monthly Income:</label>
				<input
					type='number'
					id='monthlyIncome'
					name='monthlyIncome'
					value={formData.monthlyIncome || ''}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label htmlFor='additionalNotes'>Additional Notes:</label>
				<textarea
					id='additionalNotes'
					name='additionalNotes'
					value={formData.additionalNotes || ''}
					onChange={handleChange}
				/>
			</div>
			<div className='form-navigation'>
				<button
					type='button'
					onClick={prevStep}
				>
					Back
				</button>
				<button
					type='button'
					onClick={nextStep}
				>
					Next
				</button>
			</div>
		</form>
	);
}

export default EmploymentInformationForm;
