// import { Carousel } from 'bootstrap';
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem'
import "./style.css"


export default function FavoriteVideosPage() {
  return (
    <div id='OurFavoriteVideosDiv'>
      <h1 className='favorite-videos-heading'>Our Favorite Videos</h1>
      <Carousel id = 'center-carousel'>
        <Carousel.Item className = 'carousel-video-item'>
          <iframe className = 'carousel-video' width="560" height="315" src="https://www.youtube.com/embed/n0p8MxT8AxI?si=zy1n0FfabweMSpAQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <Carousel.Caption>            
            <h5 id='carousel-heading'>Bet On It</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className = 'carousel-video-item'>
          <iframe class = 'carousel-video' width="560" height="315" src="https://www.youtube.com/embed/QHqUXFsKwZQ?si=mZsK5aTqHPPB3jNY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>          <Carousel.Caption>
            <h5 id='carousel-heading'> I'm Just Ken</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item class = 'carousel-video-item'>
          <iframe class = 'carousel-video' width="560" height="315" src="https://www.youtube.com/embed/cDjY-1WuB3o?si=A_7nkO9-fkxPcf4Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <Carousel.Caption>
            <h5 id='carousel-heading'>A Nightingale Sang in Berkeley Square</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
