import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import About from './components/About'
import ProductScreen from './screens/ProductScreen'
import AddProduct from './components/AddProduct'
import UpdateProduct from './components/UpdateProduct'
import Stats from './components/Stats'
import Login from './components/Login'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path='/about' component={About} />
          <Route path='/products' component={ProductScreen} />
          <Route path='/stats' component={Stats} />
          <Route path='/add' component={AddProduct} />
          <Route path='/update' component={UpdateProduct} />
          <Route path='/login' component={Login} />
        </Container>
      </main>
    </Router>
  )
}

export default App
