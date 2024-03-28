import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

function Dashboard() {
	// Placeholder data - you might fetch these details from a backend in a real app
	const loans = [
		{
			id: 1,
			type: 'Personal Loan',
			amount: 500000,
			interestRate: 5.5,
			term: '24 months',
			status: 'Approved',
		},
		{
			id: 2,
			type: 'Home Improvement Loan',
			amount: 10000,
			interestRate: 4.5,
			term: '36 months',
			status: 'Pending',
		},
		// Add more loans as needed
	];

	return (
		<div>
			<h1>Dashboard</h1>
			<h2>Your Loans</h2>
			{loans.length > 0 ? (
				<ul>
					{loans.map((loan) => (
						<li key={loan.id}>
							{loan.type} - ${loan.amount} at {loan.interestRate}%
							interest - {loan.term} - Status: {loan.status}
						</li>
					))}
				</ul>
			) : (
				<p>You currently have no loans.</p>
			)}
			<Link to='/apply'>Apply for a New Loan</Link>
			{/* Add more navigation links or actions as needed */}
		</div>
	);
}

export default Dashboard;
