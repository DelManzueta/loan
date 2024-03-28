function LoanDetailsForm({ nextStep, prevStep, handleChange, formData }) {
	return (
		<form>
			<h2>Loan Details</h2>
			<div>
				<label htmlFor='loanAmount'>Loan Amount:</label>
				<input
					type='number'
					id='loanAmount'
					name='loanAmount'
					value={formData.loanAmount || ''}
					min='0'
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label htmlFor='loanPurpose'>Loan Purpose:</label>
				<select
					id='loanPurpose'
					name='loanPurpose'
					value={formData.loanPurpose || ''}
					onChange={handleChange}
					required
				>
					<option value=''>--Select a Purpose--</option>
					<option value='personal'>Personal</option>
					<option value='debtConsolidation'>
						Debt Consolidation
					</option>
					<option value='homeImprovement'>Home Improvement</option>
					<option value='education'>Education</option>
					<option value='business'>Business</option>
					<option value='other'>Other</option>
				</select>
			</div>
			<div>
				<label htmlFor='repaymentTerm'>Repayment Term:</label>
				<select
					id='repaymentTerm'
					name='repaymentTerm'
					value={formData.repaymentTerm || ''}
					onChange={handleChange}
					required
				>
					<option value=''>--Select Term--</option>
					<option value='12'>12 months</option>
					<option value='24'>24 months</option>
					<option value='36'>36 months</option>
					<option value='48'>48 months</option>
					<option value='60'>60 months</option>
					{/* Add more terms as needed */}
				</select>
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

export default LoanDetailsForm;
