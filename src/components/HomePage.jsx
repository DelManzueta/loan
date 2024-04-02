import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './styles/homePage.module.css';

function HomePage() {
	const [isSignUpActive, setIsSignUpActive] = useState(false);

	const slide = useSpring({
		to: {
			transform: isSignUpActive ? 'translateX(-100%)' : 'translateX(0%)',
		},
	});

	return (
		<div className={styles.parent}>
			<div className={`${styles.card} ${styles.div1}`}>big logo</div>
			<div className={`${styles.card} ${styles.div2}`}>cool image</div>
			<div className={`${styles.card} ${styles.div3}`}>quick link</div>
			<animated.div
				className={`${styles.card} ${styles.div4}`}
				style={slide}
			>
				{/* Placeholder for Login and Sign Up forms */}
				{/* The forms should switch depending on the isSignUpActive state */}
				{isSignUpActive ? (
					// Sign Up Form
					<div className={styles.signUpForm}>
						<h2>Create Account</h2>
						{/* Form fields */}
						<button onClick={() => setIsSignUpActive(false)}>
							Already have an account? Login
						</button>
					</div>
				) : (
					// Login Form
					<div className={styles.loginForm}>
						<h2>Welcome Back!</h2>
						{/* Form fields */}
						<button onClick={() => setIsSignUpActive(true)}>
							Need an account? Sign Up
						</button>
					</div>
				)}
			</animated.div>
			<div className={`${styles.card} ${styles.div5}`}>
				Customer Support Card
			</div>
			<div className={`${styles.card} ${styles.div6}`}>
				Social media Links
			</div>
			<div className={`${styles.card} ${styles.div7}`}>
				loan rates ticker/api
			</div>
		</div>
	);
}

export default HomePage;
