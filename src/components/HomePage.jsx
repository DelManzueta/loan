// src/components/HomePage.jsx
import { Link } from 'react-router-dom'; // Import Link for navigation

function HomePage() {
	return (
		<div>
			<h1>Welcome to Our Loan Application System</h1>
			<p>Manage your loans with ease.</p>
			<nav>
				<ul>
					<li>
						<Link to='/login'>Login</Link>
					</li>
					<li>
						<Link to='/signup'>Sign Up</Link>
					</li>
					<li>
						<Link to='/dashboard'>Dashboard</Link>
					</li>
					{/* Add more navigation links as needed */}
				</ul>
			</nav>
		</div>
	);
}

export default HomePage;
