import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LoanCalculator from './components/LoanCalculator';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import HomePage from './components/HomePage'; // Import the HomePage component

const App = () => {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<HomePage />}
				/>
				<Route
					path='/login'
					element={<LoginPage />}
				/>
				<Route
					path='/signup'
					element={<SignupPage />}
				/>
				<Route
					path='/dashboard'
					element={<Dashboard />}
				/>
				{/* Add more routes as needed */}
			</Routes>
		</Router>
	);
};

export default App;
