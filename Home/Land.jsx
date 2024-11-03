import React from 'react'
import { Container } from 'react-bootstrap'
import './Home.css'

const Land = () => {
  return (
    <div>
        <div className="home-landing">
            <div className="BG">
              <span className='overlay'></span>
            </div>
          
            <Container lg={6} className="header-home-land">
                <img src="images\small-logo.png" alt="wight logo" />
                <h1>مجموعة شركات الحركة المحدودة المتحدة</h1>
                <span> UNITED MOVEMENT GROUP Of Companies Ltd</span>
            </Container>
        </div>
    </div>
  )
}

export default Land