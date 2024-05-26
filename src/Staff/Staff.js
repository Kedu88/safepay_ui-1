import React, { useState } from 'react';
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap';
import './Staff.css';
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import UserService from "../components/services/UserService";

const Staff = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        taxId: '',
        address: '',
        taxableIncome: 0,
        taxRate: 0,
    });

    const loadUsers = async () => {
        const result = await UserService.getUsers();
        setUsers(result.data);
    };

    const createUser = async () => {
        const result = await UserService.createUser(newUser);
        setUsers([...users, result.data]);
        setNewUser({
            name: '',
            email: '',
            taxId: '',
            address: '',
            taxableIncome: 0,
            taxRate: 0,
        });
    };

    const updateUser = async () => {
        await UserService.updateUser(selectedUser.id, selectedUser);
        setSelectedUser(null);
    };

    const deleteUser = async (id) => {
        await UserService.deleteUser(id);
        setUsers(users.filter((user) => user.id !== id));
    };

    const calculateTax = (user) => {
        const tax = user.taxableIncome * (user.taxRate / 100);
        return tax.toFixed(2);
    };

    const sendInvoice = async (user) => {
        // Generate DES-encrypted invoice
        // Generate RSA digital signature
        // Send invoice to user
    };

    const handleUserSelect = (user) => {
        setSelectedUser(user);
    };

    const demoUsers = [
        {
            id: 1,
            name: 'John Doe',
            email: 'johndoe@example.com',
            taxId: '123456789',
            address: '123 Main St',
            taxableIncome: 50000,
            taxRate: 25,
        },
        {
            id: 2,
            name: 'Jane Doe',
            email: 'janedoe@example.com',
            taxId: '987654321',
            address: '456 Elm St',
            taxableIncome: 75000,
            taxRate: 30,
        },
    ];

    return (
        <>
            <Header/>
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
                                        <th>Tax ID</th>
                                        <th>Address</th>
                                        <th>Taxable Income</th>
                                        <th>Tax Rate</th>
                                        <th>Tax</th>
                                        <th>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {demoUsers.map((user) => (
                                        <tr key={user.id} onClick={() => handleUserSelect(user)}>
                                            <td>{user.name}</td>
                                            <td>{user.taxId}</td>
                                            <td>{user.address}</td>
                                            <td>{user.taxableIncome}</td>
                                            <td>{user.taxRate}</td>
                                            <td>{calculateTax(user)}</td>
                                            <td>
                                                <Button variant="primary" size="sm" className="mr-2">Edit</Button>
                                                <Button variant="danger" size="sm">Delete</Button>
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
                                        <th>Tax ID</th>
                                        <th>Address</th>
                                        <th>Taxable Income</th>
                                        <th>Tax Rate</th>
                                        <th>Tax</th>
                                        <th>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {users.map((user) => (
                                        <tr key={user.id} onClick={() => handleUserSelect(user)}>
                                            <td>{user.name}</td>
                                            <td>{user.taxId}</td>
                                            <td>{user.address}</td>
                                            <td>{user.taxableIncome}</td>
                                            <td>{user.taxRate}</td>
                                            <td>{calculateTax(user)}</td>
                                            <td>
                                                <Button variant="primary" size="sm" className="mr-2">Edit</Button>
                                                <Button variant="danger" size="sm" onClick={() => deleteUser(user.id)}>Delete</Button>
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
                                    <Form.Control type="text" placeholder="Enter name" value={selectedUser.name} onChange={(e) => setSelectedUser({...selectedUser, name: e.target.value})}/>
                                </Form.Group>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" value={selectedUser.email} onChange={(e) => setSelectedUser({...selectedUser, email: e.target.value})}/>
                                </Form.Group>
                                <Form.Group controlId="formTaxId">
                                    <Form.Label>Tax ID</Form.Label>
                                    <Form.Control type="text" placeholder="Enter tax ID" value={selectedUser.taxId} onChange={(e) => setSelectedUser({...selectedUser, taxId: e.target.value})}/>
                                </Form.Group>
                                <Form.Group controlId="formAddress">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" placeholder="Enter address" value={selectedUser.address} onChange={(e) => setSelectedUser({...selectedUser, address: e.target.value})}/>
                                </Form.Group>
                                <Form.Group controlId="formTaxableIncome">
                                    <Form.Label>Taxable Income</Form.Label>
                                    <Form.Control type="number" placeholder="Enter taxable income" value={selectedUser.taxableIncome} onChange={(e) => setSelectedUser({...selectedUser, taxableIncome: e.target.value})}/>
                                </Form.Group>
                                <Form.Group controlId="formTaxRate">
                                    <Form.Label>Tax Rate</Form.Label>
                                    <Form.Control type="number" placeholder="Enter tax rate" value={selectedUser.taxRate} onChange={(e) => setSelectedUser({...selectedUser, taxRate: e.target.value})}/>
                                </Form.Group>
                                <Button variant="primary" onClick={updateUser}>Save</Button>
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>

            <Footer/>
        </>
    );
};

export default Staff;