import React from "react";
import Carousel from "react-bootstrap/Carousel";

function DisplayCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <h3>Top Airing Anime</h3>
        <a href="https://myanimelist.net/anime/48661/JoJo_no_Kimyou_na_Bouken_Part_6__Stone_Ocean">
          <img
            className="d-block w-100"
            src="https://cdn.myanimelist.net/images/anime/1504/116949l.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>JoJo no Kimyou na Bouken Part 6: Stone Ocean</h3>
            <p>
              In Florida, 2011, Jolyne Kuujou sits in a jail cell like her
              father Joutarou once did; yet this situation is not of her own
              choice. Framed for a crime she didn’t commit, and manipulated into
              serving a longer sentence, Jolyne is ready to resign to a dire
              fate as a prisoner of Green Dolphin Street Jail.
            </p>
          </Carousel.Caption>
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <h3>Top Upcoming Anime</h3>
        <a href="https://myanimelist.net/anime/48583/Shingeki_no_Kyojin__The_Final_Season_Part_2">
          <img
            className="d-block w-100"
            src="https://static1.srcdn.com/wordpress/wp-content/uploads/2021/03/Attack-on-Titan-Final-Season-Poster.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Shingeki no Kyojin: The Final Season Part 2</h3>
            <p>
              In Shingeki no Kyojin: The Final Season Part 2, two utterly
              different worlds collide as each party pursues its own agenda in
              the long-awaited conclusion to Paradis' fight for freedom.
            </p>
          </Carousel.Caption>
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <h3>Top Rated Movie</h3>
        <a href="https://myanimelist.net/anime/37987/Violet_Evergarden_Movie">
          <img
            className="d-block w-100"
            src="https://raiderreviewcom.files.wordpress.com/2021/10/violetevergardenmovie_backgroundwlogo.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Violet Evergarden Movie</h3>
            <p>
              Several years have passed since the end of The Great War. As the
              radio tower in Leidenschaftlich continues to be built, telephones
              will soon become more relevant, leading to a decline in demand for
              "Auto Memory Dolls." Even so, Violet Evergarden continues to rise
              in fame after her constant success with writing letters. However,
              sometimes the one thing you long for is the one thing that does
              not appear.
            </p>
          </Carousel.Caption>
        </a>
      </Carousel.Item>
    </Carousel>
  );
}

export default DisplayCarousel;
