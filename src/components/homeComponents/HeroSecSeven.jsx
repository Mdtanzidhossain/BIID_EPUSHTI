import './HeroSecSeven.css';
import React, { Component } from 'react';
import { Carousel, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import item1 from '../../assets/hero7vdo.jpg';
import item2 from '../../assets/hero7vdo.jpg';
import item3 from '../../assets/hero7vdo.jpg';
import item4 from '../../assets/hero7vdo.jpg';
import item5 from '../../assets/hero7vdo.jpg';


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
    }, 5000);
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
      <div className='hero7bg'>
      <div className="container mt-5 ">
        <div className='hero7bannerdiv'> 
        <h1 className='hero7bannertext text-center mb-5'>ভিডিও ব্লগ</h1>
        </div>
        <Carousel activeIndex={activeIndex}>
          <Carousel.Item>
            <div className="row">
              <div className="col-md-4">
                <Card className='hero7card'>
                <Card.Img className='hero7crdimg text-center' src={item1} alt="Item2" />
                  <Card.Body >
                   <h4 className='hero7crdtext text-center'>Nourishing Your Body, Mind, and Life Through Nutrition</h4> 
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4">
                <Card className='hero7card'>
                <Card.Img className='hero7crdimg text-center' src={item2} alt="Item2" />
                  <Card.Body >
                   <h4 className='hero7crdtext text-center'>Nourishing Your Body, Mind, and Life Through Nutrition</h4> 
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4 col-12">
                <Card className='hero7card'>
                <Card.Img className='hero7crdimg text-center' src={item3} alt="Item3" />
                  <Card.Body >
                   <h4 className='hero7crdtext text-center'>Nourishing Your Body, Mind, and Life Through Nutrition</h4> 
                  </Card.Body>
                </Card>
              </div>
            </div>
            
          </Carousel.Item>

          <Carousel.Item>
            <div className="row">
              <div className="col-md-4 col-12">
                <Card className='hero7card'>
                <Card.Img className='hero7crdimg text-center' src={item4} alt="Itema" />
                  <Card.Body >
                   <h4 className='hero7crdtext text-center'>Nourishing Your Body, Mind, and Life Through Nutrition</h4> 
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4 col-12">
                <Card className='hero7card'>
                <Card.Img className='hero7crdimg text-center' src={item5} alt="Item5" />
                  <Card.Body >
                   <h4 className='hero7crdtext text-center'>Nourishing Your Body, Mind, and Life Through Nutrition</h4> 
                  </Card.Body>
                </Card>
              </div>
            </div>
            
          </Carousel.Item>

          {/* Add more Carousel.Item for each card set */}
          {/* ... */}
        </Carousel>
      </div>
    </div>
    );
  }
}

export default CardCarousel;
