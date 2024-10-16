import React from 'react'

import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NaviBar() {
  return (
    <>
        <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
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
                        <Button variant='primary'>Log In</Button>
                        <Button variant='primary'>Sign Out</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}
