import React, { useEffect } from "react";
import "./About.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Mainbg from "../../Images/careers.png";
import ScrollButton from "../../Components/ScrollToTop/ScrollButton";
// eslint-disable-next-line
import TeamMember from "../../Components/TeamMember/TeamMember";
import Service from "../../Components/Services/Service";
import Typewriter from "typewriter-effect";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Counter from "../../Counter/Counter";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="main">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <AnimationOnScroll animateIn="animate__fadeInLeft">
                <div className="contant">
                  <p className="title">
                    We create <br></br>
                    <span style={{ color: "red", fontSize: "30px" }}>
                      solutions for Millions that contributes to social progress
                    </span>
                  </p>
                  <p className="desc">
                    Novamic Technologies is a reliable partner in IT Outsourcing
                    solutions across Banking, Real Estate, Healthcare, Travel
                    and hospitality industry. Our aim is simple: to provide
                    unparalleled value by combining innovative solutions, with
                    technical expertise and operational excellence.
                  </p>
                </div>
              </AnimationOnScroll>
            </div>
            <div className="col-md-6">
              <AnimationOnScroll animateIn="animate__fadeInRight">
                <div className="image">
                  <img src={Mainbg} alt="bg" className="img-fluid animated" />
                </div>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </div>

      <Service />

      <Counter />

      {/* <TeamMember /> */}

      <Testimonial />

      <ScrollButton />
    </>
  );
};

export default Home;
