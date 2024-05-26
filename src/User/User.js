// User.js
import React from 'react';
import { Container, Row, Col, Button, Card, ListGroup } from 'react-bootstrap';
import './User.css';
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const User = () => {
    const cards = [
            { id: 1, header: 'Invoice #12345', amountDue: '$1000', dueDate: '01/01/2023' },
            { id: 2, header: 'Invoice #67890', amountDue: '$2000', dueDate: '01/15/2023' },
            { id: 3, header: 'Invoice #12345', amountDue: '$1000', dueDate: '01/01/2023' },
            { id: 4, header: 'Invoice #24680', amountDue: '$1500', dueDate: '02/01/2023' },
            { id: 5, header: 'Invoice #13579', amountDue: '$1800', dueDate: '02/15/2023' },
            { id: 6, header: 'Invoice #75309', amountDue: '$2200', dueDate: '03/01/2023' },
            { id: 7, header: 'Invoice #86420', amountDue: '$1300', dueDate: '03/15/2023' }
        // Add more cards to this array as needed
    ];

    return (
        <>
            <Header />
            <Container className="user-container">
                <Row>
                    <Col>
                        <h1>Welcome, User!</h1>
                        <p>As a User, you are responsible for:</p>
                        <ul>
                            <li>Receiving invoices</li>
                            <li>Paying invoices</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    {cards.map((card, index) => (
                        <Col key={index} md={4}>
                            <Card className="invoice-card">
                                <Card.Header>{card.header}</Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Amount Due: {card.amountDue}</ListGroup.Item>
                                    <ListGroup.Item>Due Date: {card.dueDate}</ListGroup.Item>
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