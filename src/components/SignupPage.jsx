import React, { useState } from 'react';
import PersonalInformationForm from './forms/PersonalInformationForm';
import EmploymentInformationForm from './forms/EmploymentInformationForm';
import LoanDetailsForm from './forms/LoanDetailsForm';
import FinancialInformationForm from './forms/FinancialInformationForm';
import Verify from './Verify'; // Corrected based on the project's structure

function SignupPage() {
	const [currentStep, setCurrentStep] = useState(1);
	const [formData, setFormData] = useState({
		// Example initialization, adjust based on actual fields
		fullName: '',
		email: '',
		employmentStatus: '',
		loanAmount: '',
		loanPurpose: '',
		repaymentTerm: '',
	});
	const [emailVerified, setEmailVerified] = useState(false);

	const nextStep = () => setCurrentStep(currentStep + 1);
	const prevStep = () => setCurrentStep(currentStep - 1);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleEmailVerified = () => {
		setEmailVerified(true);
		nextStep(); // Proceed to the next step after email verification
	};

	// Conditional rendering based on the current step
	const renderStep = () => {
		switch (currentStep) {
			case 1:
				return (
					<PersonalInformationForm
						nextStep={nextStep}
						handleChange={handleChange}
						formData={formData}
					/>
				);
			case 2:
				return (
					<EmploymentInformationForm
						nextStep={nextStep}
						prevStep={prevStep}
						handleChange={handleChange}
						formData={formData}
					/>
				);
			case 3:
				if (!emailVerified) {
					return <Verify onVerified={handleEmailVerified} />;
				} else {
					return (
						<LoanDetailsForm
							nextStep={nextStep}
							prevStep={prevStep}
							handleChange={handleChange}
							formData={formData}
						/>
					);
				}
			case 4:
				if (emailVerified) {
					return (
						<FinancialInformationForm
							nextStep={nextStep}
							prevStep={prevStep}
							handleChange={handleChange}
							formData={formData}
						/>
					);
				} else {
					setCurrentStep(3); // Go back to email verification if not verified
					return null; // Implementing redirection logic or a message could enhance UX
				}
			default:
				return <div>Unknown step</div>;
		}
	};

	return <div>{renderStep()}</div>;
}

export default SignupPage;
