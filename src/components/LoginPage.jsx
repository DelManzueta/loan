import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		// Here, you would typically handle the login logic, like sending the credentials to your backend
		// For this example, we'll just print them to the console and redirect to the dashboard
		console.log('Login credentials', { username, password });

		// Redirect to the dashboard page after "login"
		// Replace '/dashboard' with the correct path if it's different
		navigate('/dashboard');
	};

	return (
		<div>
			<h1>Login Page</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='username'>Username:</label>
					<input
						type='text'
						id='username'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</div>
				<div>
					<label htmlFor='password'>Password:</label>
					<input
						type='password'
						id='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<button type='submit'>Login</button>
			</form>
		</div>
	);
}

export default LoginPage;
