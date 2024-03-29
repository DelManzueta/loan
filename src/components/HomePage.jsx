// src/components/HomePage.jsx

import { Link } from 'react-router-dom';
import styles from './styles/homePage.module.css';

function HomePage() {
	return (
		<div className={styles.container}>
			<h1>Welcome to Our Loan Application System</h1>
			<p>Manage your loans with ease.</p>
			<nav>
				<ul className={styles.navList}>
					<li>
						<Link to='/login'>Login</Link>
					</li>
					<li>
						<Link to='/signup'>Sign Up</Link>
					</li>
					<li>
						<Link to='/dashboard'>Dashboard</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default HomePage;
