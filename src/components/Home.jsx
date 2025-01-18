import React from "react";
import "../App.css";
import Section from "./Section-1";
const Home = () => {
  return (
    <>
      <div className="container">
        <div className="text">
          <h4>Looking for a reliable ride?</h4>
          <h1><span>Come</span> to us</h1>
          <p>
            we offer a wide selection of well-maintained rental cars to suit
            every need and budget. Whether you're planning a road trip, need a
            car for business, or just exploring the area, we've got the perfect
            vehicle for you.
          </p>
          <button className="contact-btn-1"><i class="bi bi-arrow-right"></i>Book Now</button>
        </div>
        <div className="main-img">
          <img src="/images/main.png" alt="" />
        </div>
      </div>
      <Section/>
    </>
  );
};

export default Home;
