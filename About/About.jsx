import React from 'react'
import './About.css'
import { Col, Container, Row } from 'react-bootstrap'

const About = () => {
  return (
   <>
{/* ----Header -------- */}

   <section  className="about-hrader">
    <Container >
     <Row className='about-title' sm={12}>
      <h1 > عن الشركـــــــــــة</h1>
      <span></span>
    </Row>
   </Container>
   </section>
  {/* ------- Message ------------ */}
  <Container className='message' >
    <h2>
      رسالة الرئيس التنفيذي
    </h2>
    <p>أعزائي الشركاء والعملاء ،
بصفتي الرئيس التنفيذي لمجموعة الحركة المتحدة المحدودة (UMC) يسعدني أن أستعرض رحلتنا وإنجازاتنا منذ تأسيسنا في عام 2020. منذ البداية، كانت مهمتنا واضحة: أن نكون مساهمين بارزين في قطاع الخدمات العامة في المملكة العربية السعودية، متميزين بالتزامنا بالتميز والنزاهة .
لقد شاركت مجموعة شركاتنا بنجاح في مشاريع مرموقة وكبيرة في جميع أنحاء المملكة، وكان تفانينا في تعزيز شراكات قوية مع عملائنا حجر الزاوية في نجاحنا. نحن لسنا مجرد مزودي خدمات؛ بل نسعى لأن نكون شريكًا موثوقًا يضمن أعلى معايير الرضا من خلال إتمام المشاريع في الوقت المحدد وجودة الخدمة التي لا مثيل لها .
في مجموعة شركات الحركة المتحدة، نولي أهمية قصوى للصحة والسلامة والجودة ورعاية البيئة. نحن نلتزم بالمعايير الصارمة للسلامة وإجراءات الجودة، ونعمل باستمرار على تحسين أدائنا وتجاوز التوقعات. إن إنجازاتنا هي شهادة على تفاني فريقنا الاستثنائي. إن التزامهم الثابت هو مفتاح نجاحنا ونمونا.
بينما نلقي نظرة على تقدمنا من شركة ناشئة صغيرة إلى واحدة من أبرز مقدمي الخدمات العامة في المملكة، نظل مركزين على هدفنا في تحقيق النمو والتميز المستدام. نحن فخورون بماضينا، ونشارك بنشاط في حاضرنا، ونتطلع بتفاؤل إلى مستقبل واعد .
شكرًا لثقتكم ودعمكم. نتطلع إلى مواصلة رحلتنا معًا، وتحقيق إنجازات جديدة وتجاوز التوقعات</p>
<span>مع خالص التحيات</span>

  </Container>
   
   {/* ----- Goals -------- */}
   <section className='goals'>
    <Container className='goals-text'>
<h2>
  <img src="images/flower icon.png" alt=""  />
  أهــدافنـــــــــــا
  <img src="images/flower icon.png" alt=""  />
</h2>
<p>
نسعى باستمرار لتحقيق توقعات العملاء استناداً إلى متطلبات مستوى خدمة العملاء لدينا. جذب والاحتفاظ بالموظفين المؤهلين من خلال توفير بيئة عمل ممتازة وتدريب متطور. تقديم أسعار تنافسية مع الحفاظ على جودة الخدمات
</p>
    </Container>
   </section>
   
   {/* ------------- Visin ------------- --*/}
   
   <section className='about-vision'>
    <Container  className='vision'>
      <Row className='body'>
        <Col lg={7} sm={12} className='v-body' >
        <h3>الرؤيـــــة</h3>
        
        <ol>
          <li>التقدم والتوسع، لتحقيق التميز في مجال</li>
          <li> قطاع المقاولات والانشاءات والخدمات العامة  وتشغيل المطارات في المملكة العربية السعودية.</li>
          <li> أهدافنا وأهداف عملائنا تسير في نفس الاتجاه ونعمل جميعا يدا  واحدة لتحقيق </li>
          <li> الحلم المنشود لنا جميعا في اطار الميزانيات المحدودة ، الجودة العالية والنجاح. </li>
        </ol>
        </Col>
        <Col lg={5} sm={12}  className='image'>
        <img src="images/Vision.jpg" alt="" />
        </Col>
      </Row>
    </Container>
   </section>
   
{/* ---------- Value ----------- */}
<section className='values'>
  <Container className='valeus-text' >

    <h2> الـقيـــــم</h2>
    <p>في UMC، القيم هي أهم أصولنا ويظهر ذلك بوضوح في عقودنا التجارية أيضًا؛ </p>
  </Container>

</section>
<Container className='value-items'>
    <Row>
      <Col className='items' lg="2" sm="12">
      <img src="images/icons/01.png" alt=" " />
      <h5>الأخلاقيات</h5>
      <p>النزاهة المطلقة، والصدق، والعدالة هي جوهر شركتنا.</p>
      </Col>
      <Col className='items' lg="2" sm="12">
      <img src="images/icons/02.png" alt="" />
      <h5>التميز</h5>
      <p>نحن نحدد معايير عالية، نطبق التكنولوجيا المتقدمة ونواصل الابتكار والتحسين. نحن نواجه التحديات ونسعى لتحقيق الإنجازات</p>
      </Col>
      <Col className='items' lg="2" sm="12">
      <img src="images/icons/03.png" alt="" />
      <h5>العائد العادل</h5>
      <p>نحقق عائدًا يعكس بشكل عادل القيمة التي نقدمها.</p>
      </Col>
      <Col className='items' lg="2" sm="12">
      <img src="images/icons/04.png" alt="" />
      <h5>الاحترام المتبادل</h5>
      <p>الذي يشجع على الانفتاح والعمل الجماعي والثقة. نحن نقدر ثقافة شاملة تعتمد على خلفيات وتجارب وآراء متنوعة.</p>
      </Col>
      <Col className='items' lg="2" sm="12">
      <img src="images/icons/05.png" alt="" />
      <h5>السلامة</h5>
      <p>هدفنا الثابت هو الصفر من الحوادث، فحياة الناس تعتمد على ذلك.</p>
      </Col>
    </Row>
  </Container>
   </>
  )
}

export default About