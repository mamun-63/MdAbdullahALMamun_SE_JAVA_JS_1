import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, Container } from 'react-bootstrap'

// Wrapping the Link to 'LinkContainer' to prevent loading page, just like react-router-dom 'Link'
const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>EShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/about'>
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/products'>
                <Nav.Link>Products</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/stats'>
                <Nav.Link>Stats</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/add'>
                <Nav.Link>Add_Products</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/update'>
                <Nav.Link>Update_Products</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
