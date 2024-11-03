import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './Contact.css'

const Contact = () => {
  return (
  <>     {/* ------- Contact header ------ */}
 <Container className='contacts' >
    <Row className='contact-title' lg={12} sm={12}>
    <h1>
تواصل معنا 
   </h1>
<img src="images/line.png" alt="" />

    </Row>
    
</Container>

{/* ============= form ================= */}
<Container className='form-container'>
<Row className='data-form'>
  <Col className='form-info'>
<Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label className='form-label'>الاسم *</Form.Label>
          <Form.Control type="Text" placeholder="ادخل الاسم" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>الإيميل *</Form.Label>
          <Form.Control type="email" placeholder="ادخل الإيميل" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>رقم الهاتف</Form.Label>
          <Form.Control type="Number" placeholder="رقم الهاتف" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridMessage">
          <Form.Label>الرسالة</Form.Label>
          <textarea name="postContent" rows={4} cols={40} className='messagebox' />
        </Form.Group>

      </Row>

      
<div className='button'>
      <Button className='CTA' type="submit">
       ارســـــــل
      </Button>
      </div>
    </Form>
    </Col>
    <Col className='form-image' >
    <div className='image'>
    <img src="images\contact-us- 1.png" alt=""/>
    </div>
    </Col>
    </Row>

    </Container>
  </>

  )
}

export default Contact