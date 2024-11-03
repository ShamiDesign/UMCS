import React, { useEffect, useState } from 'react'
import './Services.css'
import { Col, Container, Row } from 'react-bootstrap'
const Services = () => {
  const [services , setServices ] = useState ([])
  useEffect (() => {
    fetch ("data.json")
    .then ((res) => res.json())
    .then ((data) => {setServices(data)})
    console.log(services)
  },[])

  
  return (
   <>
   {/* ----Header -------- */}

   <section  className="serv-hrader">
    <Container >
     <Row className='serv-title' sm={12}>
      <h1 > خـدمـــاتــنــا </h1>
      <span></span>
    </Row>
   </Container>
   </section>
   <section>
    <br></br>
    <Container className='cardesss'>
       
           {services.map((service) => ( 
            <Row className='serv-cards'> 
            
                <Col lg={7} sm={12} key={service.xid} className='serv-text'> 
                  <h3 className='card-title'>{service.title} </h3> 
                  <p className='card-body'>{service.body}</p>
                </Col> 
                <Col lg={5} sm={12} className='serv-image'> 
                  <img src= {service.image}  alt=""  /> 
                </Col> 
                
            </Row>
          ))} 
           
    </Container>
   </section>
   
   </>
  )
}

export default Services