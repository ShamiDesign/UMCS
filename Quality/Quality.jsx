import React from 'react'
import './Quality.css'
import { Container, Row , Col } from 'react-bootstrap'

const Quality = () => {
  return (
   <>
   {/* ------- Quality header ------ */}
   <section  className="Quality-hrader">
    <Container >
     <Row className='Quality-title' sm={12}>
      <h1 > معاييرنا للجودة </h1>
      <span></span>
    </Row>
   </Container>
   </section>

 {/* ------- Quality subtitle ------ */}
<Container  >
    <Row className='q-title' lg={12} sm={12}>
    <h1>
    معاييرنا لجودة البيئة والسلامة والصحة
   </h1>
<img src="images/line.png" alt="" />

    </Row>
    
</Container>

 {/* ------- Quality items ------ */}
   <Container className='q-items' lg={6}>
   <div className='card'> 
    <Row lg={4}  className='q-card'> 
       
        <Col lg={5} sm={12} className='q-image'>
        <img src="images/icons/q 1.png" alt="" />
        </Col>
        <Col lg={7} sm={12} className='q-body'>
        <div className='card-body'>
        <h4>الجودة</h4>
        <p>في UMC، الجودة ليست مجرد تقديم أفضل الخدمات في القطاع، بل تشمل أيضًا ممارسة تحسين العمليات بشكل مستمر.</p>
        </div>
        </Col>
    </Row>
    <Row lg={4}  className='q-card'> 
       
        <Col lg={7} sm={12} className='q-body'>
        <div className='card-body'>
        <h4>السلامة</h4>
        <p>أعضاء الطاقم في جميع مستويات التسلسل الوظيفي، سواء كانوا موظفين دائمين أو جدد، لدى UMC سياسات صارمة لضمان سلامة وأمن جميع موظفيها الداخليين والمستعان بهم. </p>
        </div>
        </Col>
        <Col lg={5} sm={12} className='q-image'>
        <img src="images/icons/q 2.png" alt="" />
        </Col>
    </Row>
    <Row lg={4}  className='q-card'> 
       
        <Col lg={5} sm={12} className='q-image'>
        <img src="images/icons/q 3.png" alt="" />
        </Col>
        <Col lg={7} sm={12} className='q-body'>
        <div className='card-body'>
        <h4>الصـحـة</h4>
        <p> سواء كان العمل في موقع المشروع أو في المكتب الرئيسي، فإن صحة موظفينا وعملائنا وموظفينا لها أهمية قصوى بالنسبة لنا في UMC.</p>
        </div>
        </Col>
    </Row>
    <Row lg={4}  className='q-card'> 
       
        <Col lg={7} sm={12} className='q-body'>
        <div className='card-body'>
        <h4>البيئة</h4>
        <p> التزمت UMC بالعمل من أجل بيئة أفضل ونسقت قواعد العمل والسياسات الخاصة بها لتحقيق غدٍ أفضل وأكثر أمانًا وخضرة</p>
        </div>
        </Col>
        <Col lg={5} sm={12} className='q-image'>
        <img src="images/icons/q 4.png" alt="" />
        </Col>
    </Row>
        </div>
   
  
   </Container>

   </>
  )
}

export default Quality