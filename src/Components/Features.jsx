import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'animate.css';
import Card from 'react-bootstrap/Card';
import { useInView } from 'react-intersection-observer';


export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger animation only once
    threshold: 0, // When 20% of the element is visible animate__bounce content-color
  });

  const [ref1, inView1] = useInView({

    triggerOnce: false, // Trigger animation only once
    
    threshold: 1, // When 20% of the element is visible animate__bounce content-color
  });

  const [ref2, inView2] = useInView({
    triggerOnce: false, // Trigger animation only once
  
    threshold: 1, // When 20% of the element is visible animate__bounce content-color
  });

  return (
    <section className='w-100 bg-color2' id='features'>
        <Container className='py-5'>
            <Row className='mt-4'>
                <Col className='text-center'>
                    <h4 ref={ref} className={`animate__animated animate__bounce content-color  ${inView ? 'animate__zoomIn' : ''}`} >Features</h4>
                    <h1 ref={ref1} className={`animate__animated animate__bounce  ${inView1 ? 'animate__zoomIn' : ''}`} >Your Experience Gets Better And Better Over Time.</h1>

                    <p ref={ref2} className={`animate__animated animate__bounce  ${inView2 ? 'animate__zoomIn' : ''}`} >There are many variations of passages of Lorem
                    Ipsum available, but the majority have suffered alteration in some form.</p>
                </Col>
            </Row>

            <Row className='mt-5'>
              <Col lg={4} md={6} sm={12} >
                <Card className='bg-color text-white card-pos mt-3 card-tran'>
                  <Card.Body>
                    <i className="fas fa-cloud-upload-alt mt-3 py-3 px-3 bg-white content-color fs-3"></i>
                    <h3 className='mt-3'>Powerful API</h3>
                    <p className='mt-3'>It is a long established fact that a reader will be distracted by the readable content of a
                    page at its layout.</p>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={4} md={6} sm={12} className='card-pos mt-3 card-tran'>
                <Card className='bg-color text-white'>
                  <Card.Body>
                    <i className="fas fa-lock mt-3 py-3 px-3 bg-white content-color fs-3"></i>
                    <h3 className='mt-3'>Powerful API</h3>
                    <p className='mt-3'>It is a long established fact that a reader will be distracted by the readable content of a
                    page at its layout.</p>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={4} md={6} sm={12} className='card-pos mt-3 card-tran' >
                <Card className='bg-color text-white'>
                  <Card.Body>
                    <i className="fas fa-sync-alt mt-3 py-3 px-3 bg-white content-color fs-3"></i>
                    <h3 className='mt-3'>Powerful API</h3>
                    <p className='mt-3'>It is a long established fact that a reader will be distracted by the readable content of a
                    page at its layout.</p>
                  </Card.Body>
                </Card>
              </Col>
           
            
              <Col lg={4} md={6} sm={12} className='card-pos mt-3 card-tran' >
                <Card className='bg-color text-white'>
                  <Card.Body>
                    <i className="fas fa-shield-alt mt-3 py-3 px-3 bg-white content-color fs-3"></i>
                    <h3 className='mt-3'>Powerful API</h3>
                    <p className='mt-3'>It is a long established fact that a reader will be distracted by the readable content of a
                    page at its layout.</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4} md={6} sm={12} className='card-pos mt-3 card-tran'>
                <Card className='bg-color text-white'>
                  <Card.Body>
                    <i className="fas fa-cog mt-3 py-3 px-3 bg-white content-color fs-3"></i>
                    <h3 className='mt-3'>Powerful API</h3>
                    <p className='mt-3'>It is a long established fact that a reader will be distracted by the readable content of a
                    page at its layout.</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4} md={6} sm={12} className='card-pos mt-3 card-tran'>
                <Card className='bg-color text-white'>
                  <Card.Body>
                    <i className="fas fa-database mt-3 py-3 px-3 bg-white content-color fs-3"></i>
                    <h3 className='mt-3'>Powerful API</h3>
                    <p className='mt-3'>It is a long established fact that a reader will be distracted by the readable content of a
                    page at its layout.</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
        </Container>
    </section>
  )
}
