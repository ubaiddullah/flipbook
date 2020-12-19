import React, { Component } from "react";
import $ from "jquery";
// import Turn from "./turn";
import Slider from "./common/slider";
import { Container } from "react-bootstrap";

class Books extends Component {
  state = {
    books: [
      {
        _id: 1,
        name: "Book 1",
        pages: [
          "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/01.jpg",
          "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/02.jpg",
          "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/03.jpg",
          "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/04.jpg",
          "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/05.jpg",
          "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/06.jpg",
        ],
      },

      {
        _id: 1,
        name: "Book 2",
        pages: [
          "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/01.jpg",
          "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/02.jpg",
          "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/03.jpg",
          "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/04.jpg",
          "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/05.jpg",
          "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/06.jpg",
        ],
      },
    ],

    options: {
      display: "single",
      acceleration: true,
      gradients: !$.isTouch,
      elevation: 50,
      when: {
        turned: function (e, page) {
          console.log("Current view: ", $(this).turn("view"));
        },
      },
    },

    carouselItems: [
      {
        _id: 1,
        alt: "First Slide",
        source: "https://source.unsplash.com/1600x1000/?books",
        interval: 3000,
      },
      {
        _id: 2,
        alt: "Second Slide",
        source: "https://source.unsplash.com/1600x1000/?book",
        interval: 3000,
      },
      {
        _id: 3,
        alt: "Third Slide",
        source: "https://source.unsplash.com/1600x1000/?books,cars",
        interval: 3000,
      },
    ],
  };

  render() {
    const { carouselItems } = this.state;
    return (
      <React.Fragment>
        <Slider data={carouselItems} />
        <div className="carousel-overlay"></div>
        <Container></Container>
      </React.Fragment>
    );
  }
}

export default Books;
