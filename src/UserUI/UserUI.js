import React, {useState} from 'react';
import './UserUI.css'; // Import your CSS file for styling

const UserUI = () => {
    // Sample user data
    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'john@example.com',
        profileImage: 'user-profile.jpg', // URL to user's profile picture
        taxRecords: [
            { year: 2023, income: 50000, taxesOwed: 10000 },
            { year: 2022, income: 45000, taxesOwed: 9000 },
            // Add more tax records as needed
        ],
        invoices: [
            { id: 1, amount: 2000, status: 'Pending' },
            { id: 2, amount: 1500, status: 'Paid' },
            // Add more invoices as needed
        ],
    });

    const handleLogout = () => {
        // Add your logout logic here
    };

    return (
        <div className="user-ui-container">
            {/* Header */}
            <header className="header">
                <div className="header-logo">
                    <img src="logo.png" alt="Logo" className="logo" />
                    <h1>Website Name</h1>
                </div>
                <div className="header-user">
                    <img src={user.profileImage} alt="User Profile" className="user-profile" />
                    <button className="settings-button">Settings</button>
                    <button className="logout-button" onClick={handleLogout}>Logout</button>
                    {/* Add other action buttons here */}
                </div>
            </header>

            {/* Main Content */}
            <main className="main">
                <h2>Welcome, {user.name}!</h2>

                {/* Tax Records */}
                <section className="tax-records">
                    <h3>Tax Records</h3>
                    <ul>
                        {user.taxRecords.map((record, index) => (
                            <li key={index}>
                                <span>Year: {record.year}</span>
                                <span>Income: ${record.income}</span>
                                <span>Taxes Owed: ${record.taxesOwed}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Invoices */}
                <section className="invoices">
                    <h3>Invoices</h3>
                    <ul>
                        {user.invoices.map((invoice) => (
                            <li key={invoice.id}>
                                <span>ID: {invoice.id}</span>
                                <span>Amount: ${invoice.amount}</span>
                                <span>Status: {invoice.status}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>

            {/* Footer */}
            <footer className="footer">
                <p>© 2024 Website Name. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default UserUI;
