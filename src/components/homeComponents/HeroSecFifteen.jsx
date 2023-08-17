import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroSecFifteen.css';

import image1 from '../../assets/gallary4.jpeg';
import image2 from '../../assets/gallary4.jpeg';
import image3 from '../../assets/gallary4.jpeg';
import image4 from '../../assets/gallary4.jpeg';
import image5 from '../../assets/gallary5.jpeg';
import image6 from '../../assets/gallary6.jpeg';

const CarouselSection = () => {
  return (
    <div>
        <div className='hero15bannerdiv'> 
            <h1 className='hero15bannertext text-center mt-5 mb-5'>গ্যালারি এবং কার্যকলাপ</h1>
          </div>
    <div className="carousel-section">
      <Carousel>
        <Carousel.Item>
          <div className="row">
            <div className="col-md-4">
              <Card className="carousel-card">
                <Card.Img variant="top" src={image1} alt="Image 1" />
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="carousel-card">
                <Card.Img variant="top" src={image2} alt="Image 2" />
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="carousel-card">
                <Card.Img variant="top" src={image3} alt="Image 3" />
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="carousel-card">
                <Card.Img variant="top" src={image4} alt="Image 4" />
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="carousel-card">
                <Card.Img variant="top" src={image5} alt="Image 5" />
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="carousel-card">
                <Card.Img variant="top" src={image6} alt="Image 6" />
              </Card>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row">
            <div className="col-md-4">
              <Card className="carousel-card">
                <Card.Img variant="top" src={image6} alt="Image 1" />
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="carousel-card">
                <Card.Img variant="top" src={image5} alt="Image 2" />
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="carousel-card">
                <Card.Img variant="top" src={image4} alt="Image 3" />
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="carousel-card">
                <Card.Img variant="top" src={image4} alt="Image 4" />
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="carousel-card">
                <Card.Img variant="top" src={image5} alt="Image 5" />
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="carousel-card">
                <Card.Img variant="top" src={image6} alt="Image 6" />
              </Card>
            </div>
          </div>
        </Carousel.Item>

      </Carousel>
    </div>
    </div>
  );
};

export default CarouselSection;
