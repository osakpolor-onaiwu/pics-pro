import React from 'react'
import M from 'materialize-css/dist/js/materialize'

class Carousel extends React.Component{
  componentDidMount() {
      document.addEventListener('DOMContentLoaded', function() {
     var elems = document.querySelectorAll('.carousel');
     var instances = M.Carousel.init(elems, {indicators:true});
   });
  }

  render() {
    return(
      <div class="carousel row ">
        <a class="carousel-item" href="#one!" >
        <img src="/living2.jpg" alt='image1' height='250px' width='500px'/>
        </a>
        <a class="carousel-item" href="#two!">
        <img src="/living3.jpg" alt='image1' height='250px' width='500px'/>
        </a>
        <a class="carousel-item" href="#three!">
        <img src="/living4.jpg" alt='image1' height='250px' width='500px'/>
        </a>
      </div>
    )
  }
}

export default Carousel
