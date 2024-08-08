import { Link } from "react-router-dom";
import "../../screens/Home/HomePage.css";
import "../../screens/Home/HomePage.css";
import { useState } from "react";
import Card from "../../components/card/Card";

const url = "https://jsonplaceholder.typicode.com/users";

const HomePage = () => {

  return (
    <>
      <main className="src-bg">
        <div className="src-bar">
          <div className="title">Pixxies</div>
          <div className="subtitle">
            Discover, share, and be inspired by captivating images on our
            image-sharing platform.<br/> Join our community and explore a world of
            visual stories today!
          </div>
          <div className="src">
            <img
              className="find"
              src={require("../../assets/images/find.png")}
              alt="find"
            />
            <input
              type="text"
              placeholder="Search for anything..."
            />
            {/* <Link className="submit" to={"/submit"}>
              <img
                className="sub-img"
                src={require("../../assets/images/submit.png")}
                alt="submit"
              />
              Submit your asset
            </Link> */}
          </div>
          <div className="snp">
            <Link className="btn" to={"/"}>
              Nature
            </Link>
            <Link className="btn" to={"/"}>
              Wallpaper
            </Link>
            <Link className="btn" to={"/"}>
              Art
            </Link>
            <Link className="btn" to={"/"}>
              Cars
            </Link>
            <Link className="btn" to={"/"}>
              Yoga
            </Link>
            <Link className="btn" to={"/"}>
              Fashion
            </Link>
            <Link className="btn" to={"/"}>
              Graphic Design
            </Link>
            <Link className="btn" to={"/"}>
              Beauty
            </Link>
          </div>
        </div>
      </main>
      <section className="feature">
        <div className="line1"></div>
        <div className="text">Featured</div>
        <div className="line2"></div>
      </section>
      <section className="fea-con">
        <Card
          image={require("../../assets/images/crater.jpg")}
          title={"Crater"}
        />
        <Card
          image={require("../../assets/images/snow-tree.jpg")}
          title={"Snow-tree"}
        />
        <Card
          image={require("../../assets/images/red.jpg")}
          title={"Pomogranate"}
        />
        <Card
          image={require("../../assets/images/desert.jpg")}
          title={"Desert"}
        />
        <Card
          image={require("../../assets/images/library.jpg")}
          title={"Library"}
        />
      </section>
    </>
  );
};

export default HomePage;

