// App.js
import React, { useState } from 'react';
import '../App.css';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Container, Row, Col, Button } from 'react-bootstrap';
import {Link} from "react-router-dom"; // Import Bootstrap components

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        // Simulate login logic
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        // Simulate logout logic
        setIsLoggedIn(false);
    };

    return (
        <div className="App">
            <Header />
            <Container className="mt-5">
                <Row>
                    <Col>
                        {isLoggedIn ? (
                            <>
                                <h1>Welcome, User!</h1>
                                <Button variant="danger" onClick={handleLogout}>Logout</Button>
                            </>
                        ) : (
                            <>
                                <h1>Please log in</h1>
                                <Link to="/" className="btn btn-primary">Login</Link>
                            </>
                        )}
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default App;
