// User.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './User.css';
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const User = () => {
    const [grossSalary, setGrossSalary] = useState('');
    const [submittedSalary, setSubmittedSalary] = useState(null);
    const [error, setError] = useState(null);

    const handleInputChange = (event) => {
        setGrossSalary(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);

        try {
            const response = await fetch('http://localhost:3000/v1/user/gross-salary', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ grossSalary: grossSalary }),
            });

            if (response.ok) {
                setSubmittedSalary(grossSalary);
                setGrossSalary(''); // Clear the input field after successful submission
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'An error occurred');
            }
        } catch (error) {
            setError('An error occurred: ' + error.message);
        }
    };

    return (
        <>
            <Header/>
            <Container className="user-container">
                <Row className='row-center'>
                    <Col>
                        <h1>Welcome, User!</h1>
                        <p>As a User, you are responsible for:</p>
                       
                            - Enter Gross Salary
                            <br></br>
                            - Paying invoices
                        
                    </Col>
                </Row>
                <Row className='form-center'>
                    <Col md={6}>
                        <Form className='form-center' onSubmit={handleSubmit}>
                            <Form.Group controlId="formGrossSalary">
                                <Form.Label> <h3>Gross Salary :</h3></Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Enter your gross salary" 
                                    value={grossSalary} 
                                    onChange={handleInputChange} 
                                />
                            </Form.Group>
                            <Button className='gross-submit' variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        {error && (
                            <div className="mt-3">
                                <h5 style={{ color: 'red' }}>{error}</h5>
                            </div>
                        )}
                    </Col>
                </Row>
                {submittedSalary && (
                    <Row className="mt-3">
                        <Col>
                            <h5>Your Gross Salary Submitted As: {submittedSalary}</h5>
                        </Col>
                    </Row>
                )}
            </Container>
            <Footer />
        </>
    );
};

export default User;
