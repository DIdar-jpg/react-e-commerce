import React from 'react'

import { Container } from 'react-bootstrap'
export default function Footer() {
  return (
    <Container fluid style={{background: '#212529', color: '#fff'}}>
        <Container className='d-flex justify-content-center p-5'>
            <p>Mim micro test page</p>
        </Container>
    </Container>
  )
}
