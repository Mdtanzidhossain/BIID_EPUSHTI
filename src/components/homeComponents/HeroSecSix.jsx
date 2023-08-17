import './HeroSecSix.css';
import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../../assets/herosixcardimg.jpg';
import hero6bg1 from '../../assets/hero6bg1.jpg'; // Replace with your image path
import hero6bg2 from '../../assets/hero6bg2.jpg'; // Replace with your image path


const HeroSecSix = () => {
  const cardData = [
    { imgSrc: img, title: 'খাদ্য নিরাপত্তা', button: 'অংশগ্রহণ' },
    { imgSrc: img, title: 'পুষ্টি কি এবং কেন প্রয়োজন', button: 'অংশগ্রহণ' },
    { imgSrc: img, title: 'লিঙ্গ ভিত্তিক সহিংসতা', button: 'অংশগ্রহণ' },
    { imgSrc: img, title: 'নেতৃত্ব', button: 'অংশগ্রহণ' },
    { imgSrc: img, title: 'মাসিক ব্যাবস্থাপনা ও পারিবারিক স্বাস্থ্য বিধি', button: 'অংশগ্রহণ' },
    { imgSrc: img, title: 'পুষ্টি বাগান ', button: 'অংশগ্রহণ' },
    { imgSrc: img, title: 'যৌন এবং প্রজনন স্বাস্থ্য অধিকার', button: 'অংশগ্রহণ' },
    { imgSrc: img, title: 'পানি, পয়ঃ ব্যবস্থাপনা ও পারিবারিক স্বাস্থ্যবিধি', button: 'অংশগ্রহণ' },
    { imgSrc: img, title: 'স্বাস্থ্য সম্মত জীবন ধারা', button: 'অংশগ্রহণ' },
  ];

  return (
    <div className="home-sec-six">
      <div>
          <img src={hero6bg1} alt="Cloud" className="Hero6bgimg1" />
      </div>
      <Row className='Herosixbody'>
      <h1 className='hero6bannertxt text-center mb-5'>আমাদের শিক্ষা সমূহ</h1>
        {cardData.map((card, index) => (
          <Col md={4} key={index}>
            <Card className="custom-card">
              <Card.Img variant="top" src={card.imgSrc} alt={card.title} />
              <Card.Body className='HerosixCardbody'>
                <h1>{card.title}</h1>
                <Button className="centered-button" variant="primary">
                  {card.button}
                </Button>
              </Card.Body>
            </Card>
            <div className="Hero6bgimg2">
            {/* Content for the bottom div */}
          </div>
            
          </Col>
        ))}
      </Row>
      
      <div>
          <img src={hero6bg2} alt="Cloud" className="Hero6bgimg2" />
      </div>
    </div>
    
  );
};

export default HeroSecSix;
