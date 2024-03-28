import React, { useState } from 'react';

function EmailVerification({ onVerified }) {
	const [code, setCode] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();
		setIsLoading(true);
		try {
			// Simulate an API call to your backend for code verification
			// Replace this with your actual API call
			const response = await fakeApiCall(code);
			if (response.verified) {
				onVerified();
			} else {
				setError(
					'The verification code is incorrect. Please try again.'
				);
			}
		} catch (error) {
			setError(
				'An error occurred during verification. Please try again later.'
			);
		}
		setIsLoading(false);
	};

	return (
		<div>
			<h2>Email Verification</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor='verificationCode'>Verification Code:</label>
				<input
					type='text'
					id='verificationCode'
					value={code}
					onChange={(e) => setCode(e.target.value)}
					disabled={isLoading}
					required
				/>
				<button
					type='submit'
					disabled={isLoading}
				>
					Verify Email
				</button>
			</form>
			{error && <p style={{ color: 'red' }}>{error}</p>}
		</div>
	);
}

export default EmailVerification;

// Simulated API call function for demonstration purposes
async function fakeApiCall(code) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ verified: code === '1234' }); // Assume "1234" is the correct code
		}, 1000); // Simulate network delay
	});
}
