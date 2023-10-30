import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="text-center text-lg-start content-color bg-color2" >
    <section className="d-flex justify-content-between p-4 text-white bg-color">
      <div className="me-5">
        <span>Get connected with us on social networks:</span>
      </div>
      <div>
        <a href="/" className="text-white me-4"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="/" className="text-white me-4"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="/" className="text-white me-4"><FontAwesomeIcon icon={faGoogle} /></a>
        <a href="/" className="text-white me-4"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="/" className="text-white me-4"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="/" className="text-white me-4"><FontAwesomeIcon icon={faGithub} /></a>
      </div>
    </section>
    <section>
      <Container>
        <Row className="mt-3">
          <Col md={3} lg={3} xl={3} mx="auto" mb="4">
            <h6 className="text-uppercase fw-bold">Company name</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
            <p>
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </Col>
          <Col md={3} lg={3} xl={3} mx="auto" mb="4">
            <h6 className="text-uppercase fw-bold">Products</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
            <p><a href="#!" className="content-color">MDBootstrap</a></p>
            <p><a href="#!" className="content-color">MDWordPress</a></p>
            <p><a href="#!" className="content-color">BrandFlow</a></p>
            <p><a href="#!" className="content-color">Bootstrap Angular</a></p>
          </Col>
          <Col md={3} lg={3} xl={3} mx="auto" mb="4">
            <h6 className="text-uppercase fw-bold">Useful links</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
            <p><a href="#!" className="content-color">Your Account</a></p>
            <p><a href="#!" className="content-color">Become an Affiliate</a></p>
            <p><a href="#!" className="content-color">Shipping Rates</a></p>
            <p><a href="#!" className="content-color">Help</a></p>
          </Col>
          <Col md={3} lg={3} xl={3} mx="auto" mbMd="0" mb="4">
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
            <p><i className="fas fa-home mr-3" /> New York, NY 10012, US</p>
            <p><i className="fas fa-envelope mr-3" /> info@example.com</p>
            <p><i className="fas fa-phone mr-3" /> + 01 234 567 88</p>
            <p><i className="fas fa-print mr-3" /> + 01 234 567 89</p>
          </Col>
        </Row>
      </Container>
    </section>
    <div className="text-center text-white p-3 bg-color" >
      © 2020 Copyright:
      <a className="content-color" href="/">MDBootstrap.com</a>
    </div>
  </footer>
  )
}
