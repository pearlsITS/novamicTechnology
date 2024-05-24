import React from "react";
import "./Counter.css";
import plant from "../Images/plant.png";
import CountUp from "react-countup";
import { FaCheck, FaUsers } from "react-icons/fa";
import experience from "../Images/experience.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Counter = () => {
  return (
    <section className="counter">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-7">
            <div className="text">
              <p className="title_1">Let us show you some stats</p>
              <h2>We have done great stuff over the past few years.</h2>
            </div>
          </div>
          <div className="col-12 col-lg-5 d-flex justify-content-center">
            <figure>
              <img src={plant} alt="plant" />
            </figure>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="count">
              <div className="icon">
                <FaUsers />
              </div>
              <div className="counter-item">
                <CountUp
                  end={25}
                  duration={6}
                  suffix="+"
                  style={{ fontSize: "50px" }}
                />
                <AnimationOnScroll animateIn="animate__zoomIn">
                  <p>Happy Clients</p>
                </AnimationOnScroll>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="count">
              <div className="icon icon-pink">
                <img src={experience} alt="experience" />
              </div>
              <div className="counter-item">
                <CountUp
                  end={3}
                  duration={6}
                  suffix="+"
                  style={{ fontSize: "50px" }}
                />
                <AnimationOnScroll animateIn="animate__zoomIn">
                  <p>Year's of Experience</p>
                </AnimationOnScroll>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="count">
              <div className="icon icon-yellow">
                <FaCheck />
              </div>
              <div className="counter-item">
                <CountUp
                  end={100}
                  duration={6}
                  suffix="+"
                  style={{ fontSize: "50px" }}
                />
                <AnimationOnScroll animateIn="animate__zoomIn">
                  <p>Projects Completed</p>
                </AnimationOnScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
