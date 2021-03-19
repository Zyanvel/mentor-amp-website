import React from 'react';
import './ImageSlider.css'
import img1 from '../image/Arturo_stock.jpeg'
import img2 from '../image/Brianna_stock.jpeg'
import img3 from '../image/Preethi_stock.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

function ImageSlider() {

  return (
<div id='carousel-container'>
    <Carousel fade controls={false} pause="hover" >
  <Carousel.Item className="carousel-item">
    <img
      className="d-block w-100 carousel-image"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption style={{textAlign: "left"}}>
      <div className="slider-caption-container">
        <p className="caption-text">Arturo is a Programmer by day, and at night he teaches technology at his community center.
          Over the years, he has lifted many students out of poverty, with much better jobs.
          He only wishes this were the case for all of his students. Unfortunately, too many 
          struggle to make time for the weekly assignments
        </p>
        <p className="caption-text">
        Thanks to MentorAmp, Arturo sleeps well at night, knowing that every one of his students
        has a mentor tracking their progress and providing resources when they get stuck.
        </p>
      </div>
    </Carousel.Caption >
  </Carousel.Item>
  <Carousel.Item className="carousel-item">
    <img
      className="d-block w-100 carousel-image"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption style={{textAlign: "left"}}>
      <div className="slider-caption-container">
        <p className="caption-text">Brianna is the Sales Manager of 50 salespeople.
         To say the least, she feels spread thin. When she addresses her team as a whole, they really seem inspired to close deals.
          Their revenues just don’t show it yet.

        </p>
        <p className="caption-text">
          With MentorAmp, Brianna and her team are exhilarated!
          They are now meeting or exceeding their goals, month after month.
        </p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="carousel-item">
    <img
      className="d-block w-100 carousel-image"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption style={{textAlign: "left"}}>
      <div className="slider-caption-container">
        <p className="caption-text">Preethi is CEO & Founder of a non-profit. She wears many hats including leading a circle of 30 Fundraisers.
         She loves coaching her Fundraisers and watching them grow. She just doesn’t have the one-on-one time she used to.

        </p>
        <p className="caption-text">
        Now with MentorAmp, Preethi is confident that her Jr.
        Fundraisers are getting the vital coaching they need, and she is so happy to see her Sr. Fundraisers are up by 20% this quarter,
         thanks to goals tracking.

        </p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
  )
};

export default ImageSlider;
