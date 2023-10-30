import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


export default function NavBar() {
  return (
    <div>
      <header className='w-100 bg-color'>
        <Container> 
            <div className='row '>
                <div className='col-lg-12 align-items-center'>
                  <Navbar expand="lg" >
                     
                          <Navbar.Brand className='text-white' href="/">React-Bootstrap</Navbar.Brand>
                           <Navbar.Toggle aria-controls="basic-navbar-nav" />
                           <Navbar.Collapse id="basic-navbar-nav">
                              <Nav className="mx-5">
                              <Nav.Link className='text-white mx-4 active' href="/">Home</Nav.Link>
                              <Nav.Link className='text-white mx-4' href="/">Features</Nav.Link>
                              <Nav.Link className='text-white mx-4' href="/">Overview</Nav.Link>
                              <Nav.Link className='text-white mx-4' href="/">Pricing</Nav.Link>
                              <Nav.Link className='text-white mx-4' href="/">Team</Nav.Link>
                              <Nav.Link className='text-white mx-4' href="/">Blog</Nav.Link>
                              </Nav>
                            </Navbar.Collapse>

                            <div className=''>
                                <Button className='content py-3 px-4 nav-btn' variant="outline-light">Get It Now</Button>{' '}
                            </div>
                        
                    </Navbar>
                </div>

            </div>
        </Container>
      </header>
    </div>
  )
}
