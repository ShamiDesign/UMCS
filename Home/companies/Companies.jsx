import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Companies = () => {
  return (
    <>
    <Container className='companies'>
        <Row className='header-comp' lg={12} sm={12}>
            <h2>
                <img src="images\flower icon.png" alt="" />
                شركاتنا
                <img src="images\flower icon.png" alt="" />
            </h2>
        </Row>
        <Row className='body-comp' >
            <Col className='comp-card' lg={5} sm={12}>
            <img src="images\CO logo.png" alt="co -logo " style={{width:"250px"}} />
            <div>
                <h5>
شركة الحركة المتحدة لإدارة وتشغيل المطارات
                </h5>
                <p> نبذة عن نشاط الشركه من سطرين</p>
            </div>
            </Col >
            <Col className='comp-card' lg={5} sm={12}>
            <img src="images\Green Wrap.png" alt="green Wrap -logo " style={{width:"250px"}} />
            <div>
                <h5>
جرين راب
                </h5>
                <p> نبذة عن نشاط الشركه من سطرين</p>

            </div>
            </Col>
            
        </Row>
    </Container>
    </>
  )
}

export default Companies