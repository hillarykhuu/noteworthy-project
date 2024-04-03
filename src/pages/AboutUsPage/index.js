import React from 'react'
import './style.css'
import Carousel from 'react-bootstrap/Carousel';

import Button from 'react-bootstrap/Button';

import GroupPhotoForest from './../../images/group_photo_forest.png'
import GroupPhotoVest from './../../images/group_photo_vest.png'
import STCityHall from './../../images/Noteworthy-at-ST-City-Hall 1.png'
import InstaImage1 from './../../images/insta-image-1.png'
import InstaImage2 from './../../images/insta-image-2.png'
import InstaImage3 from './../../images/insta-image-3.png'
import InstaImage4 from './../../images/insta-image-4.png'

import CarouselImage1 from './../../images/carouselimage1.png'
import CarouselImage2 from './../../images/carouselimage2.png'
import CarouselImage3 from './../../images/carouselimage3.jpg'

export default function AboutUsPage() {
  return (
    <div className='' id='AboutUsDiv'> 
      {/* Header */}
      <h1>About Us</h1>

      {/* Description */}
      <div className='AboutUsDescription'>
        <img src={GroupPhotoForest} alt='Group Photo in the Forest' width={256} height={256} className='AboutUsImg'/>
        <p className='AboutUsParagraph'>
          <span style={{ whiteSpace: 'pre-line' }} >
            {`We’re a lower-voices a cappella group known for our fun performances and fresh takes on popular songs! It always feels sunny when we perform, and not just because of our golden vests!
            
            Since our founding in 2000, we’ve gone million-view-viral on YouTube multiple times, released an album entirely composed of original songs, and performed at the 2022 UC Berkeley commencement.
            `}
          </span>
        </p>

        <img src={GroupPhotoVest} alt='Group Photo in Vests' width={256} height={256} className='AboutUsImg'/>
      </div>


      <div className='AboutUsSections'>
        <div className='Section'>
          <Button variant="light" size='md' style={{color: "#05789F", outline: "solid", outlineColor: "black", outlineWidth: "2px"}} href="">Events</Button>
          <p>We have events that you should check out!</p>
          {/* Add another carousel here! */}
          <div id='AboutUsCarousel'>
              <Carousel data-bs-theme="dark" id = 'center-carousel'>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={CarouselImage1}
                    alt="first pics"
                  />
                  {/* <img
                    className="d-block w-100"
                    src={CarouselImage1}
                    alt="first pics"
                  /> */}
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={CarouselImage2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={CarouselImage3}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
        </div>

        <div className='Section'>
          <Button variant="light" size='md' style={{color: "#05789F", outline: "solid", outlineColor: "black", outlineWidth: "2px"}} href="">Hire Us</Button>
          <p>You should give us money and we sing!</p>
          <img src={STCityHall} alt='Noteworthy-at-ST-City-Hall' className='SectionImg'/>
        </div>

        <div className='Section'>
          <Button variant="light" size='md' style={{color: "#05789F", outline: "solid", outlineColor: "black", outlineWidth: "2px"}} href="">Follow Us</Button>
          <div className='InstaImages'> 
            <img className='InstaImage' src={InstaImage1} alt = ""/>
            <img className='InstaImage' src={InstaImage2} alt = ""/>
            <img className='InstaImage' src={InstaImage3} alt = ""/>
            <img className='InstaImage' src={InstaImage4} alt = ""/>
          </div>
        </div>     
      </div>
    </div>
  )
}
