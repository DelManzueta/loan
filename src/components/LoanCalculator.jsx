import React, { useState } from 'react';

function LoanCalculator() {
	const [loanAmount, setLoanAmount] = useState('');
	const [interestRate, setInterestRate] = useState('');
	const [loanTerm, setLoanTerm] = useState('');
	const [monthlyPayment, setMonthlyPayment] = useState(null);

	const calculateMonthlyPayment = (event) => {
		event.preventDefault();

		// Convert annual interest rate to monthly and decimal form
		const monthlyInterestRate = interestRate / 100 / 12;
		// Convert loan term in years to number of monthly payments
		const numberOfPayments = loanTerm * 12;

		// Calculate monthly payment
		const payment =
			loanAmount *
			(monthlyInterestRate /
				(1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments)));

		if (!isNaN(payment)) {
			setMonthlyPayment(payment.toFixed(2));
		} else {
			setMonthlyPayment('Invalid input');
		}
	};

	return (
		<div>
			<h1>Loan Calculator</h1>
			<form onSubmit={calculateMonthlyPayment}>
				<div>
					<label htmlFor='loanAmount'>Loan Amount:</label>
					<input
						type='number'
						id='loanAmount'
						value={loanAmount}
						onChange={(e) => setLoanAmount(e.target.value)}
						required
					/>
				</div>
				<div>
					<label htmlFor='interestRate'>
						Annual Interest Rate (%):
					</label>
					<input
						type='number'
						id='interestRate'
						value={interestRate}
						onChange={(e) => setInterestRate(e.target.value)}
						required
					/>
				</div>
				<div>
					<label htmlFor='loanTerm'>Loan Term (years):</label>
					<input
						type='number'
						id='loanTerm'
						value={loanTerm}
						onChange={(e) => setLoanTerm(e.target.value)}
						required
					/>
				</div>
				<button type='submit'>Calculate</button>
			</form>

			{monthlyPayment !== null && (
				<div>
					<h2>Monthly Payment: ${monthlyPayment}</h2>
				</div>
			)}
		</div>
	);
}

export default LoanCalculator;
