import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'

// react-bootstrap form
const Login = () => {
  return (
    <>
      <Form>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Form.Group controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Remember me' />
        </Form.Group>
        <Button
          onClick={e => alert('No Functionality Added')}
          variant='primary'
          type='submit'
        >
          Submit
        </Button>
      </Form>
    </>
  )
}

export default Login
