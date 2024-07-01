import React from "react";
import "./Home.css";
import Product from "./Product";
import BannerImg from "./Images/canvasBanner.png";
import CatPoster from "./Images/cat.jpg";
import ElonPoster from "./Images/elonMusk.jpg";
import GirlPoster from "./Images/girlInSky.jpg";
import GodPoster from "./Images/God.jpg";
import RobotPoster from "./Images/robotMan.png";
// import StevePoster from "./Images/Stevejobs.jpg";
import AsianSpyPoster from "./Images/AsianSpy.jpeg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={BannerImg} alt="Home Banner" />
        {/* HomePage Row No 1 */}
        <div className="home__row">
          {/* Product 1, Row 1 */}
          <Product
            id="0000001"
            title="Radient Whiskers: A cat's Serendade to the Sun 🌞😺"
            price="179.00"
            image={CatPoster}
            rating={5}
          />
          {/* Product 2, Row 1 */}
          <Product
            id="0000002"
            title="Visions of Innovations: Elon Musk's Journey in Pixels 🚀🌟📸"
            price="199.00"
            image={ElonPoster}
            rating={5}
          />
        </div>
        {/* HomePage Row No 2 */}
        <div className="home__row">
          {/* Product 1, Row 2 */}
          <Product
            id="0000003"
            title="Girl enjoying the celestial symphony under the stars and moon so peaceful. ✨🌙"
            price="149.00"
            image={GirlPoster}
            rating={5}
          />
          {/* Product 2, Row 2 */}
          <Product
            id="0000004"
            title="Unleashing the Power of Faith: With GOD all things are POSSIBLE 🙏✨"
            price="119.00"
            image={GodPoster}
            rating={4}
          />
          {/* Product 3, Row 2 */}
          <Product
            id="0000005"
            title="The red helmet adds a cool touch: Gear Up and Conquer the World! 🎨💪"
            price="149.00"
            image={RobotPoster}
            rating={5}
          />
        </div>
        {/* HomePage Row No 3 */}
        <div className="home__row">
          <Product
            id="0000006"
            title="The Shadows: Mysterious World of the Asian Spy 🕵️‍♂️🌙 "
            price="199.00"
            image={AsianSpyPoster}
            rating={5}
          />
        </div>
        {/* HomePage Row No 4 */}
        {/* <div className="home__row">
          <Product
            id="0000007"
            title="Unleashing Innovation: The Visionary Journey of Steve Jobs 🍎💡"
            price="199.00"
            image={StevePoster}
            rating={5}
          />
        </div> */}
      </div>
    </div>
  );
}

export default Home;
