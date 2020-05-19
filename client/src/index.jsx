import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import carouselStyles from './components/Carousel.module.css';

import Carousel from './components/Carousel.jsx';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      images : [],
      enlargedImages : [],
      currentIndex : 0,

    }
    this.toggleNewImage = this.toggleNewImage.bind(this);
    this.rightArrowClicked = this.rightArrowClicked.bind(this);
    this.leftArrowClicked = this.leftArrowClicked.bind(this);
  }

  componentDidMount () {
    this.getCarouselImages();
    this.getCarouselEnlargedImages();
   }

  getCarouselImages () {
    var product_id = window.location.pathname.slice(1,2);
    console.log(product_id);
    $.ajax({
      type: 'GET',
      url: `/api/carousel/${product_id}`,
    }).done((data) => {
      var urls = [];
      for (var i = 0; i < data.length; i++) {
        urls.push(data[i].color_url);
      }
      this.setState({
        images : urls,
        toggleImage: urls[0]

      });
      console.log(data);
    })
  }

  getCarouselEnlargedImages () {
    var product_id = window.location.pathname.slice(1,2);
    console.log(product_id);
    $.ajax({
      type: 'GET',
      url: `/api/carouselEnlarged/${product_id}`,
    }).done((data) => {
      var urls = [];
      for (var i = 0; i < data.length; i++) {
        urls.push(data[i].color_url);
      }
      this.setState({
        enlargedImages : urls,
        toggleImage: urls[0]

      });
      $(`#a0` ).css( "border", "2px solid black" );

      console.log(data);
    })
  }
//add the jquery to change the src url
//use jquery fade in can also specify the src
//change index when onClicked
  toggleNewImage (index) {
    $("img").css( "border", 0 );
    $(`#a${index}` ).css( "border", "2px solid black" );
    // $( ".column1" ).animate({  duration: "slow",
    // easing: "easein"},2000);
    // $( ".imageDisplay" ).animate({duration: "slow",
    // easing: "easein" },2000);
    this.setState({
      toggleImage: this.state.enlargedImages[index],
      currentIndex: index
    });
  }

  leftArrowClicked () {
    console.log('left arrow is clicked!');
    if (this.state.currentIndex === 0) {
      var newIndex = this.state.enlargedImages.length - 1;
      $("img").css( "border", 0 );
      $(`#a${newIndex}` ).css( "border", "2px solid black" );
      this.setState({
        currentIndex: newIndex,
        toggleImage: this.state.enlargedImages[newIndex]
      });
    } else {
      var newIndex = this.state.currentIndex - 1;
      $("img").css( "border", 0 );
      $(`#a${newIndex}` ).css( "border", "2px solid black" );
      this.setState({
        currentIndex: newIndex,
        toggleImage: this.state.enlargedImages[newIndex]
      });
    }
  }
  rightArrowClicked () {
    console.log('right arrow is clicked!');
    var array_length = this.state.enlargedImages.length - 1;
    if (this.state.currentIndex === array_length) {
      $("img").css( "border", 0 );
      $(`#a0`).css( "border", "2px solid black" );
      this.setState({
        currentIndex: 0,
        toggleImage: this.state.enlargedImages[0]
      });
    } else {
      var newIndex = this.state.currentIndex + 1;
      $("img").css( "border", 0 );
      $(`#a${newIndex}` ).css( "border", "2px solid black" );
      this.setState({
        currentIndex: newIndex,
        toggleImage: this.state.enlargedImages[newIndex]
      });
    }


  }
//refractor  line 88 to hardcode in the img
  render () {
    return (
    <div class="row flex-container">
      <div class="column imageslider" >
        <Carousel images = {this.state.images} toggleCarouselImage = {this.toggleNewImage} />
      </div>
      <div class="column1">
        <img class = "imageDisplay" src = {this.state.toggleImage}/>
        <button class='left-button' onClick = {this.leftArrowClicked}>
          <svg class='sgvimg'>
            <path xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" d="M16,21a0.994,0.994,0,0,1-.664-0.253L5.5,12l9.841-8.747a1,1,0,0,1,1.328,1.494L8.5,12l8.159,7.253A1,1,0,0,1,16,21Z"></path>
          </svg>
        </button>
        <button class='right-button' onClick = {this.rightArrowClicked}>
          <svg class='sgvimg'>
          <path width="24" height="24" viewBox="0 0 24 24" d="M8,21a1,1,0,0,1-.664-1.747L15.5,12,7.336,4.747A1,1,0,0,1,8.664,3.253L18.5,12,8.664,20.747A0.994,0.994,0,0,1,8,21Z"></path>
          </svg>
        </button>
      </div>
    </div>)
  }
}


ReactDOM.render(<App />, document.getElementById('Carousel'));