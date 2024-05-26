import React, { useState } from 'react';
import '../Staff/Staff.css'; 
import safelogo from '../images/safepaylogo.png';
import userprofile from '../images/user-profile.png';
import logout from '../images/logout.png';
import Header from '../components/Header/Header';
import Footer from "../components/Footer/Footer";
import Cookies from 'js-cookie';

const AdminRegister = () => {
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
        const adminData = {
            email: email,
            password: password
        };

        console.log(adminData);

        // Example API call to register admin
        fetch('http://localhost:3000/v1/admin/admin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(adminData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');   
            }
            return response.json();
        })
        .then(data => {
            console.log('Response data:', data);
            if (data.message === 'Admin created successfully!') {
                setSuccess('Admin created successfully!');
                // Optionally, clear the form
                setEmail('');
                setPassword('');
            } else {
                setError('Failed to register admin');
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
                <h2 className='header1'>Register Admin</h2>
                <form onSubmit={handleRegister}>
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
                    <button type="submit" style={{alignSelf:'center'}} className="register-button">
                        Register Admin
                    </button>
                </form>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default AdminRegister;
