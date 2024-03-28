function FinancialInformationForm({
	nextStep,
	prevStep,
	handleChange,
	formData,
}) {
	return (
		<form>
			<h2>Financial Information</h2>
			<div>
				<label htmlFor='employmentStatus'>Employment Status:</label>
				<select
					id='employmentStatus'
					name='employmentStatus'
					value={formData.employmentStatus || ''}
					onChange={handleChange}
					required
				>
					<option value=''>--Please choose an option--</option>
					<option value='employed'>Employed</option>
					<option value='self-employed'>Self-Employed</option>
					<option value='unemployed'>Unemployed</option>
					<option value='retired'>Retired</option>
					<option value='student'>Student</option>
				</select>
			</div>
			<div>
				<label htmlFor='annualIncome'>Annual Income:</label>
				<input
					type='number'
					id='annualIncome'
					name='annualIncome'
					value={formData.annualIncome || ''}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label htmlFor='otherIncome'>Other Income:</label>
				<input
					type='number'
					id='otherIncome'
					name='otherIncome'
					value={formData.otherIncome || ''}
					onChange={handleChange}
				/>
			</div>
			<div>
				<label htmlFor='currentDebts'>Current Debts:</label>
				<input
					type='number'
					id='currentDebts'
					name='currentDebts'
					value={formData.currentDebts || ''}
					onChange={handleChange}
				/>
			</div>
			<div>
				<label htmlFor='monthlyExpenses'>Monthly Expenses:</label>
				<input
					type='number'
					id='monthlyExpenses'
					name='monthlyExpenses'
					value={formData.monthlyExpenses || ''}
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

export default FinancialInformationForm;
