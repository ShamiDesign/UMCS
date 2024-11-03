import React, { useEffect, useState } from 'react'
import './Home.css'
import { Col, Container, Row } from 'react-bootstrap'
import Land from './Land'
import Companies from './companies/Companies'



const Home = () => {

  
  

  return (
    <>
     <Land />
     {/* ------lines ------------ */}
     <Container lg={6} className='line-a'>
              <img src="images\line.png" alt="" />
     </Container>
{/* ------------ How Are We ------ */}
    <Container>
      <Row className='how-are-we'>
      <Col className='header-Home' lg={7} sm={12}>
      <h1>
        من نحن
      </h1>
      <p>
      تأسست في عام 2020 لتطوير وتنفيذ وتطبيق حلول متطورة لقطاع الخدمات لعملاء الشركات والوزارات والمنظمات المختلفة.
على مدار السنوات، حققت مجموعة  UMC العديد من المشاريع الناجحة، واكتسبت المعرفة المتخصصة والمهارات والخبرات الداخلية، وحققت نضجاً في المجالات المتخصصة التي وضعتها في موقع يمكنها من مشاركة أفضل الممارسات والمعرفة من خلال خدماتها.
منذ تأسيسها، اكتسبت شركة UMC ثقة وسمعة جيدة من عملائها وشركائها بفضل خدماتها عالية الجودة وأخلاقيات العمل غير المسبوقة. نفخر بقيمنا الأساسية في الأخلاق والسلوك الرفيع ونؤمن بنموذج عمل يتحقق فقط من خلال الشفافية.
      </p>
      </Col>
      <Col className='heaer-img' lg={5} sm={12}>
      <img src="images/how Are We.jpg" alt="How are we" />
      </Col>
      </Row>
      
    </Container>
{/* ------lines ------------ */}
    <Container lg={6} className='line-a'>
              <img src="images\line.png" alt="" />
     </Container>

     {/* ------ our compamny ---------- */}
<Companies />

    </>
  )
}

export default Home