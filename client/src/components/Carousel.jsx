import React from 'react';

const Carousel = (props) => (

  <div className = "carousel-track-container">
    <ul className="carousel-track">
      {props.images.map((image, i) => <li><img className="carouselimg" id = {`a${i}`} onClick = {() => {props.toggleCarouselImage(i)}}
      className = "carousel-image" src={image}/></li>)}
    </ul>
  </div>
);

export default Carousel;