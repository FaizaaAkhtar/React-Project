import React from 'react'
import 'animate.css';
import Image from 'react-bootstrap/Image';
import phone from '../Images/phone.png'
import Button from 'react-bootstrap/Button';
import { useInView } from 'react-intersection-observer';



export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: false, 
    threshold: 0
  });

  const [ref1, inView1] = useInView({
    triggerOnce: false, 
    threshold: 0,
  });
  return (
    <section className='w-100 bg-color' id='home'>
      
        <div className='container'>
            <div className='row align-items-center pb-3'>
                <div className='col-lg-5 col-md-12 col-12 pt-5 text-center content-color2'>
                  <div ref={ref} className={`animate__animated animate__bounce ${inView ? 'animate__fadeInLeft' : ''}`}>
                   <h1 className='mt-3'>A powerful app for your business.</h1>
                    <p className='mt-3'>From open source to pro services, Piqes helps you
                      to build, deploy, test, and monitor apps.</p>
                      
                      <Button className='mt-3 mx-2 py-2 px-3 content' variant="outline-light"><i className="fab fa-apple mx-2"></i>App Store</Button>{' '}
                      <Button className='mt-3 mx-2 py-2 px-3 content'variant="outline-light"><i className="fab fa-google-play mx-2"></i>Play Store</Button>{' '}
                      
                      
                  </div>

                </div>
                <div className="col-lg-7 col-md-12 col-12">
                 <div ref={ref1} className={`animate__animated animate__bounce ${inView1 ? 'animate__fadeInRight' : ''}`}>
                <Image src={phone} alt='' fluid/>
                </div>
                 </div>

            </div>

        </div>
      
   
    </section>
  )
}
