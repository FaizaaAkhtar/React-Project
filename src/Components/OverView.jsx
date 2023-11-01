import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import phone1 from '../Images/overview1.jpg';
import phone2 from '../Images/overview2.avif';
import Button from 'react-bootstrap/Button';
import { useInView } from 'react-intersection-observer';


export default function OverView() {
  const [ref, inView] = useInView({
    triggerOnce: false, 
    threshold: 0, 
  });

  const [ref1, inView1] = useInView({
    triggerOnce: false, 
    threshold: 0, 
  });

  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  const [ref3, inView3] = useInView({
    triggerOnce: false,
    threshold: 0,
  });
  return (
    <section className='w-100' id='overview'>
        <Container className='py-5'>
            <Row className='justify-content-center'>
                <Col lg={6} md={12} sm={12} ref={ref} className={`mt-5 content-color animate__animated animate__bounce ${inView ? 'animate__fadeInLeft' : ''}`}>
                <i className="fas fa-download py-3 px-3 fs-3 text-white bg-color"></i>
                <h2 className='mt-3'>1,25,000 Customers Using The Application!</h2>
                <p className='mt-3' >Collaborate over projects with your team and clients optimised for mobile and tablet don't let slow page speeds drive our innovative platform empowers anyone to convert clicks ou'll publish your first landing page in minutes.</p>
                <Button className='bg-color text-white mt-3 over-btn border-white'   size="lg">Get Started</Button>
                </Col>
                <Col lg={6} md={12} sm={12} ref={ref1} className={` animate__animated animate__bounce ${inView1 ? 'animate__fadeInRight ' : ''}`}>
                <Image src={phone1} fluid />
                </Col>
            </Row>

            <Row className='justify-content-center mt-1'>

                <Col lg={6} md={12} sm={12} ref={ref2} className={`mt-5 content-color animate__animated animate__bounce ${inView2 ? 'animate__fadeInLeft' : ''}`}>
                <Image src={phone2} fluid />
                </Col>

                <Col lg={6} md={12} sm={12} ref={ref3} className={`mt-5 content-color animate__animated animate__bounce ${inView3 ? 'animate__fadeInRight' : ''}`}>
                <i className="fas fa-download py-3 px-3 fs-3 text-white bg-color"></i>
                <h2 className='mt-3'>1,25,000 Customers Using The Application!</h2>
                <p className='mt-3' >Collaborate over projects with your team and clients optimised for mobile and tablet don't let slow page speeds drive our innovative platform empowers anyone to convert clicks ou'll publish your first landing page in minutes.</p>
                <Button className='bg-color text-white mt-3 over-btn border-white'  size="lg">Get Started</Button>
                </Col>

                
            </Row>
        </Container>

    </section>
  )
}
