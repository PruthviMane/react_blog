import "./header.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">My Blog</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <div>
      <Carousel>
        <div className="slide">
          <img
            className="headerImg"
            src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img
            className="headerImg"
            src="https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img
            className="headerImg"
            src="https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel> 
    </div>
      

    </div>
  );
}
