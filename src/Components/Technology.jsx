import React from 'react'
import Slider from "react-slick";
import first from "../Images/a.png"
import second from "../Images/b.png"
import third from "../Images/c.png"
import four from "../Images/d.png"
import five from "../Images/e.png"
import six from "../Images/f.png"
import seven from "../Images/g.png"
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

export default function Technology() {
    const settings = {
        
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 3000,
        arrows: false, 
      };
  return (
    <section className='w-100 bg-color2 pt-4'>
        <Container>
      <Slider {...settings}>
          <div className='d-flex'>
            <Image  className='mx-auto' src={first} alt=''/>
          </div>
          <div className='d-flex'>
          <Image  className='mx-auto' src={second} alt=''/>
          </div>
          <div className='d-flex'>
          <Image  className='mx-auto' src={third} alt=''/>
          </div>
          <div className='d-flex'>
          <Image  className='mx-auto' src={four} alt=''/>
          </div>
          <div className='d-flex'>
          <Image  className='mx-auto' src={five} alt=''/>
          </div>
          <div className='d-flex'>
          <Image  className='mx-auto' src={six} alt=''/>
          </div>
          <div>
          <Image  className='mx-auto' src={seven} alt=''/>
          </div>
          
        </Slider>
        </Container>
    </section>
  )
}
