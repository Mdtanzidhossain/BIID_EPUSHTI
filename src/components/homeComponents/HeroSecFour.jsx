import React, { Component } from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroSecFour.css';
import item1 from '../../assets/online-learning.png';
import item2 from '../../assets/information.png';
import item3 from '../../assets/videoblog.png';
import item4 from '../../assets/youtube.png';
import item5 from '../../assets/diet.png';


class CardCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  componentDidMount() {
    // Automatic carousel slide after 3 seconds
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  nextSlide = () => {
    const { activeIndex } = this.state;
    this.setState({
      activeIndex: (activeIndex + 1) % 2, // Adjust the total number of card sets
    });
  };

  render() {
    const { activeIndex } = this.state;
    
    return (
      <div className="container mt-5">
        <Carousel activeIndex={activeIndex}>
          <Carousel.Item>
            <div className="row">
              <div className="col-md-4">
                <Card>
                  <Card.Img className='crdimg text-center' src={item1} alt="Item1" />
                  <Card.Body >
                    <Button className='hero4btn  d-flex justify-content-center align-items-center'>অনলাইন কোর্স</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4">
                <Card>
                <Card.Img className='crdimg text-center' src={item2} alt="Item2" />
                  <Card.Body >
                    <Button className='hero4btn  d-flex justify-content-center align-items-center'>তথ্য ও শিক্ষা উপকথা</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4 col-12">
                <Card>
                <Card.Img className='crdimg text-center' src={item3} alt="Item3" />
                  <Card.Body >
                    <Button className='hero4btn  d-flex justify-content-center align-items-center'>ওয়েবিনার</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            
          </Carousel.Item>

          <Carousel.Item>
            <div className="row">
              <div className="col-md-4 col-12">
                <Card>
                <Card.Img className='crdimg text-center' src={item4} alt="Itema" />
                  <Card.Body >
                    <Button className='hero4btn  d-flex justify-content-center align-items-center'>ভ্লগ</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4 col-12">
                <Card>
                <Card.Img className='crdimg text-center' src={item5} alt="Item5" />
                  <Card.Body >
                    <Button className='hero4btn  d-flex justify-content-center align-items-center'>পুষ্টি বিষয়ক অন্যান্য প্রশিক্ষণ</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            
          </Carousel.Item>

          {/* Add more Carousel.Item for each card set */}
          {/* ... */}
        </Carousel>
      </div>
    );
  }
}

export default CardCarousel;
