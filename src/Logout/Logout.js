// App.js
import React, { useState } from 'react';
import '../App.css';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Container, Row, Col, Button } from 'react-bootstrap';
import {Link} from "react-router-dom"; // Import Bootstrap components

const LogoutBtn = () => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        // Simulate logout logic
        localStorage.clear();
        window.location.href = '/';
        
    };

    return (
        <div className="App">
            <Header />
            <Container className="mt-5">
                See you
                <Row>
                    <Col>
                    <Button variant="danger" onClick={handleLogout}>Logout</Button>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default LogoutBtn;
