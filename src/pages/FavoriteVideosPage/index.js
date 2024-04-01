// import { Carousel } from 'bootstrap';
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem'
import "./style.css"

import fsnote1 from "../../images/fsnote1.png"
import fsnote2 from "../../images/fsnote2.png"
import fsnote3 from "../../images/fsnote3.png"

export default function FavoriteVideosPage() {
  return (
    <div id='FavoriteVideosDiv'>
      <h1 class='center'>Our Favorite Videos</h1>
      <Carousel data-bs-theme="dark" id = 'center-carousel'>
        <Carousel.Item>
          {/* <img
            className="d-block w-100"
            src={fsnote1}
            alt="first pics"
          /> */}
          <iframe width="560" height="315" src="https://www.youtube.com/embed/n0p8MxT8AxI?si=zy1n0FfabweMSpAQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <Carousel.Caption>
            <h5 id='carousel-heading'>Bet On It</h5>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <img
            className="d-block w-100"
            src={fsnote2}
            alt="Second slide"
          /> */}
<iframe width="560" height="315" src="https://www.youtube.com/embed/QHqUXFsKwZQ?si=mZsK5aTqHPPB3jNY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>          <Carousel.Caption>
            <h5 id='carousel-heading'> I'm Just Ken</h5>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <img
            className="d-block w-100"
            src={fsnote3}
            alt="Third slide"
          /> */}
          <iframe width="560" height="315" src="https://www.youtube.com/embed/cDjY-1WuB3o?si=A_7nkO9-fkxPcf4Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <Carousel.Caption>
            <h5 id='carousel-heading'>A Nightingale Sang in Berkeley Square</h5>
            {/* <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
    </div>
  );
}
