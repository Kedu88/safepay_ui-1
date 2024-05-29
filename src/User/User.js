import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, ListGroup } from 'react-bootstrap'; // Import Card and ListGroup
import './User.css';
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const User = () => {
    const cards = [
        {  header: 'Your Tax', socialIncurance: '$220', healthSystem: '$66.25', incomeTaxes: '$100', totalTax: '$386.25' }
        // Add more cards to this array as needed
    ];

    const [grossSalary, setGrossSalary] = useState('');
    const [submittedSalary, setSubmittedSalary] = useState(null);

    const handleInputChange = (event) => {
        setGrossSalary(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Post gross salary to the API
        fetch('http://localhost:3000/v1/user/gross-salary', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify({ grossSalary }),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            if (data.success) {
                setSubmittedSalary(grossSalary);
            } else {
                throw new Error('Failed to submit gross salary');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <>
            <Header />
            <Container className="user-container">
                <Row>
                    <Col>
                        <h1>Welcome, User!</h1>
                        <p>As a User, you are responsible for:</p>
                        <ul>
                            <li>Enter Gross Salary</li>
                            <li>Paying invoices</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formGrossSalary">
                                <Form.Label>Gross Salary</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Enter your gross salary" 
                                    value={grossSalary} 
                                    onChange={handleInputChange} 
                                />
                            </Form.Group>
                            <br></br>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
                {submittedSalary && (
                    <Row className="mt-3">
                        <Col>
                            <h3>Your Gross Salary is: {submittedSalary}</h3>
                        </Col>
                    </Row>
                )}
                <Row>
                    {cards.map((card, index) => (
                        <Col key={index} md={4}>
                            <Card className="invoice-card">
                                <Card.Header>{card.header}</Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Social Insurance: {card.socialIncurance}</ListGroup.Item>
                                    <ListGroup.Item>Health System: {card.healthSystem}</ListGroup.Item>
                                    <ListGroup.Item>Income Taxes: {card.incomeTaxes}</ListGroup.Item>
                                    <ListGroup.Item>Total Tax: {card.totalTax}</ListGroup.Item>
                                    <ListGroup.Item>
                                        <Button variant="primary" className="action-button">Pay Now</Button>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default User;
