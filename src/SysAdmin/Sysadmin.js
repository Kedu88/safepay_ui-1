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
                        <p>As a Sysadmin, you are responsible for introducing new users, staffs and admins to the Online Tax Payment System. Use the buttons below to create a new user, staff or admin.</p>
                       
                        <div className='RegisterButton'>
                            <Button href='/UserRegister'  type="submit">   Introduce User  </Button>
                            <Button href='/StaffRegister'  type="submit">   Introduce Staff </Button>
                            <Button href='/AdminRegister'  type="submit">   Introduce Admin  </Button>
                        </div>      
                            
                        
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default Sysadmin;