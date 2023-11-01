import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Slider from "react-slick";

export default function NewsSlider() {
    const settings = {
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 3000,
        prewArrow: false,
        nextArrow: false
      };
  return (
    <section className='w-100'>
        <Container className='pt-2 content-color'>
            <Row>
                <Col sm={2}>
                    <h5>&#9864;  Our latest news</h5>
                </Col>
                <Col sm={10}>
                   <Slider {...settings}>
                        <div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti quia pariatur ipsa!</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti quia pariatur ipsa!</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti quia pariatur ipsa!</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti quia pariatur ipsa!</p>
                        </div>
                        
                    </Slider>
                </Col>
            </Row>
        </Container>

    </section>
  )
}
