import React, { useState } from 'react';
import './Sysadmin.css'; // Import your CSS file for styling
import safelogo from '../images/safepaylogo.png';
import userprofile from '../images/user-profile.png';
import logout from '../images/logout.png';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const UserRegister = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Prepare data to send to API
        const userData = {
            firstName,
            lastName,
            email,
            password
        };

        console.log('Sending user data:', userData);

        // Example API call to register user
        fetch('http://localhost:3000/v1/admin/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => {
            console.log('Response status:', response.status);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Response data:', data);
            if (data.success) {
                setSuccess('User registered successfully!');
                // Optionally, clear the form
                setFirstName('');
                setLastName('');
                setEmail('');
                setPassword('');
            } else {
                setError('Failed to register user');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            setError('An error occurred. Please try again.');
        });
    };

    const handleLogout = () => {
        // Add your logout logic here
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className="register-container">
            {/* Header */}
            <Header
                handleLogout={handleLogout}
                toggleDropdown={toggleDropdown}
                showDropdown={showDropdown}
                logo={safelogo}
                userProfile={userprofile}
                logout={logout}
            />

            {/* Main Content */}
            <main className="main">
                <h2 className='header1'>Register User</h2>
                <form onSubmit={handleRegister}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    {success && <p className="success-message">{success}</p>}
                    <button type="submit" className="register-button">
                        Register User
                    </button>
                </form>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default UserRegister;
