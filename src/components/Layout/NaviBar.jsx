import React, { useState } from 'react'

import { Navbar, Nav, Button, Container, Modal, Form, } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NaviBar() {

    const [ show, setShow ] = useState(false)
    const handleShow = (second) => { setShow(true) }
    const handleClose = (second) => { setShow(false) }

    return (
        <>
            <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' style={{'height': '8vh'}}>
                <Container>
                    <Navbar.Brand>
                        E-commerce
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>

                    <Navbar.Collapse id='responsive-navbar-nav' className='d-flex justify-content-between'>
                        <Nav>
                            <Nav.Link>
                                <Link to='/'>Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to='/about'>About</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to='/users'>Users</Link>    
                            </Nav.Link>
                        </Nav>
                        <Nav className='d-flex align-items center gap-2'>
                            <Button variant='primary' onClick={handleShow}>Log In</Button>
                            <Button variant='primary' onClick={handleShow}>Sign Out</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className='ps-4'>
                    <Modal.Title>Log in</Modal.Title>
                </Modal.Header>
                <Form>
                    <Modal.Body className='ps-4'>
                        <Form.Group className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter your password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formHorizontalCheck">
                            <Form.Check label="Check me out" />
                        </Form.Group>
                    </Modal.Body>

                    <Modal.Footer>
                        <Form.Group className="mb-3 d-flex gap-2">
                            <Button variant='secondary'>Close</Button>
                            <Button type="submit">Sign in</Button>
                        </Form.Group>
                    </Modal.Footer>
                </Form>

            </Modal>
        </>
    )
}
