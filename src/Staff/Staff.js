import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap';
import './Staff.css';
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import UserService from "../components/services/UserService";

const Staff = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [newUser, setNewUser] = useState({
        userID: '',
        name: '',
        surname: '',
        email: '',
        grossSalary: 0
    });

    useEffect(() => {
        const fetchTaxData = async () => {
            try {
                const response = await fetch('http://localhost:3000/v1/staff/taxes', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': localStorage.getItem('token'),
                    },
                });

                const data = await response.json();
                console.log(data);
                setUsers([...data.taxes]);
            } catch (error) {
                console.error("Error fetching tax data:", error);
            }
        };

        fetchTaxData();
    }, []);


    const loadUsers = async () => {
        const result = await UserService.getUsers();
        setUsers(result.data);
    };

    const updateUser = async () => {
        await UserService.updateUser(selectedUser.id, selectedUser);
        setSelectedUser(null);
    };

    const calculateTax = (user) => {
        const tax = user.taxableIncome * (user.taxRate / 100);
        return tax.toFixed(2);
    };

    return (
        <>
            <Header />
            <Container className="staff-container">
                <Row>
                    <Col>
                        <h1 className="mb-4">Staff Dashboard</h1>
                        {users.length === 0 ? (
                            <>
                                <p>No users found. Here are some demo users:</p>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Surname</th>
                                            <th>Email</th>
                                            <th>grossSalary</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user) => (
                                            <tr key={user.userId._id}>
                                                <td>{user.userId.name}</td>
                                                <td>{user.userId.surname}</td>
                                                <td>{user.userId.email}</td>
                                                <td>{user.grossSalary + 'EUR'}</td>
                                                <td>
                                                    <Button variant="primary" size="sm" className="mr-2">Calculate Tax</Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </>
                        ) : (
                            <>
                                <Button variant="primary" onClick={loadUsers}>Load Users</Button>
                                <Table striped bordered hover className="mt-4">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Surname</th>
                                            <th>Email</th>
                                            <th>Gross Salary</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user) => (
                                            <tr key={user.userId._id}>
                                                <td>{user.userId.name}</td>
                                                <td>{user.userId.surname}</td>
                                                <td>{user.userId.email}</td>
                                                <td>{user.grossSalary + ' €'}</td>
                                                <td>
                                                    <Button variant="primary" size="sm" className="mr-2">Calculate Tax</Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </>
                        )}
                        {selectedUser && (
                            <div className="user-form mt-4">
                                <h2>Edit User</h2>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" value={selectedUser.name} onChange={(e) => setSelectedUser({ ...selectedUser, name: e.target.value })} />
                                </Form.Group>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" value={selectedUser.email} onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })} />
                                </Form.Group>
                                <Form.Group controlId="formTaxId">
                                    <Form.Label>Tax ID</Form.Label>
                                    <Form.Control type="text" placeholder="Enter tax ID" value={selectedUser.taxId} onChange={(e) => setSelectedUser({ ...selectedUser, taxId: e.target.value })} />
                                </Form.Group>
                                <Form.Group controlId="formAddress">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" placeholder="Enter address" value={selectedUser.address} onChange={(e) => setSelectedUser({ ...selectedUser, address: e.target.value })} />
                                </Form.Group>
                                <Form.Group controlId="formTaxableIncome">
                                    <Form.Label>Taxable Income</Form.Label>
                                    <Form.Control type="number" placeholder="Enter taxable income" value={selectedUser.taxableIncome} onChange={(e) => setSelectedUser({ ...selectedUser, taxableIncome: e.target.value })} />
                                </Form.Group>
                                <Form.Group controlId="formTaxRate">
                                    <Form.Label>Tax Rate</Form.Label>
                                    <Form.Control type="number" placeholder="Enter tax rate" value={selectedUser.taxRate} onChange={(e) => setSelectedUser({ ...selectedUser, taxRate: e.target.value })} />
                                </Form.Group>
                                <Button variant="primary" onClick={updateUser}>Save</Button>
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default Staff;
