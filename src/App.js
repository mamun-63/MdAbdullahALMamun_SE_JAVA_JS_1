import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <h1>Welcome To ESHOP</h1>
        </Container>
      </main>
    </Router>
  )
}

export default App
