import React from "react";
import "./TeamMember.css";
import profile from "../../Images/profile-1.png";
import profile1 from "../../Images/profile.jpg";
import { FaFacebookF } from "react-icons/fa";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const TeamMember = () => {
  return (
    <div className="member">
      <div className="container">
        <div className="member_title">
          <h1> Meet The Team</h1>
        </div>
        <AliceCarousel
          items={items}
          responsive={responsive}
          mouseTracking
          //   infinite
          //   disableDotsControls
          disableButtonsControls
        />
      </div>
    </div>
  );
};

export default TeamMember;

const items = [
  <div className="memberinfo">
    <div className="profile">
      <div className="circle">
        <img src={profile} alt="profile" />
      </div>
    </div>
    <div className="info">
      <h3>Member Name</h3>
      <p>Senior Developer</p>
      <div className="social-link">
        <div className="social">
          <FaFacebookF />
        </div>
        <div className="social">
          <BsTwitter />
        </div>
        <div className="social">
          <BsLinkedin />
        </div>
      </div>
    </div>
  </div>,
  <div className="memberinfo">
    <div className="profile">
      <div className="circle">
        <img src={profile1} alt="profile" />
      </div>
    </div>
    <div className="info">
      <h3>Member Name</h3>
      <p>Senior Developer</p>
      <div className="social-link">
        <div className="social">
          <FaFacebookF />
        </div>
        <div className="social">
          <BsTwitter />
        </div>
        <div className="social">
          <BsLinkedin />
        </div>
      </div>
    </div>
  </div>,
  <div className="memberinfo">
    <div className="profile">
      <div className="circle">
        <img src={profile} alt="profile" />
      </div>
    </div>
    <div className="info">
      <h3>Member Name</h3>
      <p>Senior Developer</p>
      <div className="social-link">
        <div className="social">
          <FaFacebookF />
        </div>
        <div className="social">
          <BsTwitter />
        </div>
        <div className="social">
          <BsLinkedin />
        </div>
      </div>
    </div>
  </div>,
  <div className="memberinfo">
    <div className="profile">
      <div className="circle">
        <img src={profile} alt="profile" />
      </div>
    </div>
    <div className="info">
      <h3>Member Name</h3>
      <p>Senior Developer</p>
      <div className="social-link">
        <div className="social">
          <FaFacebookF />
        </div>
        <div className="social">
          <BsTwitter />
        </div>
        <div className="social">
          <BsLinkedin />
        </div>
      </div>
    </div>
  </div>,
  <div className="memberinfo">
    <div className="profile">
      <div className="circle">
        <img src={profile} alt="profile" />
      </div>
    </div>
    <div className="info">
      <h3>Member Name</h3>
      <p>Senior Developer</p>
      <div className="social-link">
        <div className="social">
          <FaFacebookF />
        </div>
        <div className="social">
          <BsTwitter />
        </div>
        <div className="social">
          <BsLinkedin />
        </div>
      </div>
    </div>
  </div>,
  <div className="memberinfo">
    <div className="profile">
      <div className="circle">
        <img src={profile} alt="profile" />
      </div>
    </div>
    <div className="info">
      <h3>Member Name</h3>
      <p>Senior Developer</p>
      <div className="social-link">
        <div className="social">
          <FaFacebookF />
        </div>
        <div className="social">
          <BsTwitter />
        </div>
        <div className="social">
          <BsLinkedin />
        </div>
      </div>
    </div>
  </div>,
];

const responsive = {
  0: {
    items: 1,
  },
  768: {
    items: 2,
  },
  1200: {
    items: 3,
  },
};
