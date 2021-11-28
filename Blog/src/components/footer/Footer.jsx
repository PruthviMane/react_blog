import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
        
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE POST
            </Link>
          </li>
        
        </ul>
      </div>
      
    </div>
  );
}
