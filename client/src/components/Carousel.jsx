import React from 'react';

const Carousel = (props) => (

  <div class = "carousel-track-container">
    <ul class="carousel-track">
      {props.images.map((image, i) => <li><img class="carouselimg" id = {`a${i}`} onClick = {() => {props.toggleCarouselImage(i)}}
      class = "carousel-image" src={image}/></li>)}
    </ul>
  </div>
);

export default Carousel;