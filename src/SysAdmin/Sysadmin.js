import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './Sysadmin.css';
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import UserService from "../components/services/UserService";
import { useNavigate } from 'react-router-dom';

const Sysadmin = () => {
    const navigate = useNavigate();
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
                            
                            <Button  variant="primary" type="submit" onClick={ () => window.location.href = '/UserRegister'}>
                                Introduce User
                            </Button>
                                
                            <Button  variant="primary" type="submit" onClick={ () => window.location.href = '/StaffRegister'}>
                                Introduce Staff
                            </Button>

                            <Button  variant="primary" type="submit" onClick={ () => window.location.href = '/AdminRegister'}>
                                Introduce Admin
                            </Button>

                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default Sysadmin;