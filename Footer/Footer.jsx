import React from 'react'
import './Footer.css'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
    <section className='footer'>
<Container >
    <Row lg={4} sm={12} className='footer-body'>
        <Col className='adress' sm={12} >
        <h6>
       <img src="images\icons\map.png" alt=""  className='f-icons'/>
            العنوان
        </h6>
        <p className='adress-body'>
       2553 التوهامي الحسني - حي العزيزية  
جده 7624 - 23342
المملكة العربية السعودية
        </p>
        </Col>
        <Col  className='Contact' sm={12}>
        <h6>
        <img src="images\icons\call.png" alt=""  className='f-icons'/>
            للتواصل
        </h6>
        <div className='contact-body'>
      <span>+966 55 726 7666</span>
        </div>
        </Col>
        <Col className='emails' sm={12}>
        <h6>
            <img src="images\icons\email.png" alt=""  className='f-icons'/>
          البريد الألكتروني
        </h6>
        <div className='contact-mail'>
        <a href="mailto:sales@umcgc.com" >sales@umcgc.com</a>
        </div>
        </Col>
    </Row>
</Container>
    </section>
    </>
  )
}

export default Footer