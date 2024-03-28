import React, { useState, useEffect } from 'react';
import EmailVerification from './Verification/EmailVerification';

function Verify({ onNextStep }) {
	const [isVerified, setIsVerified] = useState(false);

	const handleVerificationSuccess = () => {
		setIsVerified(true);
		// Consider adding a slight delay before automatically moving to the next step
		setTimeout(onNextStep, 2000); // Proceed after 2 seconds
	};

	// Automatically proceed when verification is successful
	// useEffect(() => {
	//     if (isVerified) {
	//         onNextStep();
	//     }
	// }, [isVerified, onNextStep]);

	if (!isVerified) {
		return <EmailVerification onVerified={handleVerificationSuccess} />;
	}

	// Keeping the user informed
	return (
		<div>
			<h2>Verification Successful</h2>
			{/* This button can be removed if automatic progression is implemented */}
			<button onClick={onNextStep}>Continue</button>
		</div>
	);
}

export default Verify;
