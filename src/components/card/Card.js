import "../card/Card.css";
import { Link } from "react-router-dom";

const Card = ({ image, title, tag }) => {
  return (
    <>
      <Link style={{ textDecoration: "none", color: "black" }}>
      <div className="card">
        <figure className="masonry-item">
          <img src={image} alt={title} />
        </figure>
        <div className="img-text" >
        <div className="ti-con">
            <figcaption className="img-ti" >{title}</figcaption></div>
            <Link>
            <img className="dwn" src={require("../../assets/images/download.png")} alt="download"/></Link>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
