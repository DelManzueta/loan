import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LoanCalculator from './components/LoanCalculator';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route
					path='/login'
					element={<LoginPage />}
				/>
				<Route
					path='/'
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
