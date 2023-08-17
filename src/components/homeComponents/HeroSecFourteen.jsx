import './HeroSecFourteen.css';
import React, { Component } from 'react';
import { Carousel, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import item1 from '../../assets/jubayer.jpeg';
import item2 from '../../assets/salehin.jpeg';
import item3 from '../../assets/shadhin.jpeg';
import item4 from '../../assets/shadhin.jpeg';
import item5 from '../../assets/shadhin.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

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
      
    <div>
        <div className='hero14bannerdiv'> 
            <h1 className='hero14bannertext text-center mt-5 mb-5'>আমাদের উপদেষ্টা</h1>
          </div>
      <div className='hero14bg'>
        <div className="container mt-5 ">
          <Carousel activeIndex={activeIndex}>
            <Carousel.Item>
              <div className="row">
                <div className="col-md-4">
                  <Card className='hero14card'>
                    <div className="circle-img">
                      <Card.Img className='hero14crdimg' src={item1} alt="Item1" />
                    </div>
                    <Card.Body>
                      <h4 className='hero14crdtext text-center'>Jubayer Rahman <br/>Deputy Manager</h4>
                      <div className='social-icons text-center'>
                        <FontAwesomeIcon icon={faFacebook} className='social-icon' />
                        <FontAwesomeIcon icon={faInstagram} className='social-icon' />
                        <FontAwesomeIcon icon={faTwitter} className='social-icon' />
                      </div>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-md-4">
                  <Card className='hero14card'>
                    <div className="circle-img">
                      <Card.Img className='hero14crdimg' src={item2} alt="Item2" />
                    </div>
                    <Card.Body>
                      <h4 className='hero14crdtext text-center'>Salehin Rahman Khan<br/>ICT Officer</h4>
                      <div className='social-icons text-center'>
                        <FontAwesomeIcon icon={faFacebook} className='social-icon' />
                        <FontAwesomeIcon icon={faInstagram} className='social-icon' />
                        <FontAwesomeIcon icon={faTwitter} className='social-icon' />
                      </div>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-md-4">
                  <Card className='hero14card'>
                    <div className="circle-img">
                      <Card.Img className='hero13crdimg' src={item3} alt="Item3" />
                    </div>
                    <Card.Body>
                      <h4 className='hero14crdtext text-center'>Shahid Uddin Akbar<br/>CEO & Chairman</h4>
                      <div className='social-icons text-center'>
                        <FontAwesomeIcon icon={faFacebook} className='social-icon' />
                        <FontAwesomeIcon icon={faInstagram} className='social-icon' />
                        <FontAwesomeIcon icon={faTwitter} className='social-icon' />
                      </div>
                    </Card.Body>
                  </Card>
                </div>
                {/* ... other columns */}
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row">
                <div className="col-md-4">
                  <Card className='hero14card'>
                    <div className="circle-img">
                      <Card.Img className='hero14crdimg' src={item3} alt="Item4" />
                    </div>
                    <Card.Body>
                      <h4 className='hero14crdtext text-center'>Shahid Uddin Akbar<br/>CEO & Chairman</h4>
                      <div className='social-icons text-center'>
                        <FontAwesomeIcon icon={faFacebook} className='social-icon' />
                        <FontAwesomeIcon icon={faInstagram} className='social-icon' />
                        <FontAwesomeIcon icon={faTwitter} className='social-icon' />
                      </div>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-md-4">
                  <Card className='hero14card'>
                    <div className="circle-img">
                      <Card.Img className='hero14crdimg' src={item3} alt="Item5" />
                    </div>
                    <Card.Body>
                      <h4 className='hero14crdtext text-center'>Shahid Uddin Akbar<br/>CEO & Chairman</h4>
                      <div className='social-icons text-center'>
                        <FontAwesomeIcon icon={faFacebook} className='social-icon' />
                        <FontAwesomeIcon icon={faInstagram} className='social-icon' />
                        <FontAwesomeIcon icon={faTwitter} className='social-icon' />
                      </div>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-md-4">
                  <Card className='hero14card'>
                    <div className="circle-img">
                      <Card.Img className='hero13crdimg' src={item3} alt="Item6" />
                    </div>
                    <Card.Body>
                      <h4 className='hero14crdtext text-center'>Shahid Uddin Akbar<br/>CEO & Chairman</h4>
                      <div className='social-icons text-center'>
                        <FontAwesomeIcon icon={faFacebook} className='social-icon' />
                        <FontAwesomeIcon icon={faInstagram} className='social-icon' />
                        <FontAwesomeIcon icon={faTwitter} className='social-icon' />
                      </div>
                    </Card.Body>
                  </Card>
                </div>
                {/* ... other columns */}
              </div>
            </Carousel.Item>
            {/* ... other Carousel.Items */}
          </Carousel>
        </div>
      </div>
    </div>
    );
  }
}

export default CardCarousel;
