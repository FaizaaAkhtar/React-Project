import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default function NavBar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`w-100 ${isSticky ? 'sticky-header' : 'bg-color'}`}>
        <Container>
              <Navbar className='navbar-dark' expand="lg">
                <Navbar.Brand className={` ${isSticky ? 'content-color' : 'text-white'}`} href="/">
                  Aiza/Faiza
                </Navbar.Brand>
                <Navbar.Toggle className='ms-auto text-white' aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="">
                    <Nav.Link className={`mx-4 ${isSticky ? 'content-color scroll-effect' : 'text-white effect'}`} href="/">
                      Home
                    </Nav.Link>
                    <Nav.Link className={`mx-4 ${isSticky ? 'content-color scroll-effect' : 'text-white effect'}`} href="/">
                      Features
                    </Nav.Link>
                    <Nav.Link className={`mx-4 ${isSticky ? 'content-color scroll-effect' : 'text-white effect'}`} href="/">
                      Overview
                    </Nav.Link>
                    <Nav.Link className={`mx-4 ${isSticky ? 'content-color scroll-effect' : 'text-white effect'}`} href='/'>
                      Pricing
                    </Nav.Link>
                    <Nav.Link className={`mx-4 ${isSticky ? 'content-color scroll-effect' : 'text-white effect'}`} href='/'>
                      Team
                    </Nav.Link>
                    <Nav.Link className={`mx-4 ${isSticky ? 'content-color scroll-effect' : 'text-white effect'}`} href='/'>
                      Blog
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
                <div className='ml-auto'>
                  <Button className={`py-2 px-3 nav-btn ${isSticky ? 'border-pink content2' : 'content  border-white bg-color'}`} >
                    Get It Now
                  </Button>{' '}
                </div>
              </Navbar>
        </Container>
      </header>
    </>
  );
}
