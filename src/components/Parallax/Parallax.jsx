import React from 'react'

import { Container } from 'react-bootstrap'

import './parallax.css'

export default function Parallax() {
  return (
      <Container fluid className="parallax">
        <div className="parallax-content">
          <h1>Добро пожаловать на наш сайт</h1>
          <p>Параллакс-эффект при прокрутке страницы</p>
        </div>
      </Container>
  )
}
