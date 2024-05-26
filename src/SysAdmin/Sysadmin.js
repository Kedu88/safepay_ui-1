import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Sysadmin.css';
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import UserService from "../components/services/UserService";

const Sysadmin = () => {
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        taxId: '',
        address: '',
        taxableIncome: 0,
        taxRate: 0,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await UserService.createUser(newUser);
        setNewUser({
            name: '',
            email: '',
            taxId: '',
            address: '',
            taxableIncome: 0,
            taxRate: 0,
        });
    };

    return (
        <>
            <Header />
            <Container className="mt-5">
                <Row>
                    <Col>
                        <h1>Welcome, Sysadmin!</h1>
                        <p>As a Sysadmin, you are responsible for introducing new users to the Online Tax Payment System. Use the form below to create a new user account.</p>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" value={newUser.name} onChange={(e) => setNewUser({...newUser, name: e.target.value})} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder="Email" value={newUser.email} onChange={(e) => setNewUser({...newUser, email: e.target.value})} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="taxId">
                                <Form.Label>Tax ID</Form.Label>
                                <Form.Control type="text" placeholder="Tax ID" value={newUser.taxId} onChange={(e) => setNewUser({...newUser, taxId: e.target.value})} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="address">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Address" value={newUser.address} onChange={(e) => setNewUser({...newUser, address: e.target.value})} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Introduce User
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default Sysadmin;