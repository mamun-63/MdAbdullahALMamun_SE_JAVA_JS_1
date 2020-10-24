import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import About from './components/About'
import ProductScreen from './screens/ProductScreen'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path='/about' component={About} />
          <Route path='/products' component={ProductScreen} />
        </Container>
      </main>
    </Router>
  )
}

export default App
