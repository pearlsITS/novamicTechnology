import React from "react";
import AliceCarousel from "react-alice-carousel";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="container">
        <div className="testimonial_title">
          <h3>What Client Say About Us?</h3>
        </div>
        <AliceCarousel
          items={items}
          responsive={responsive}
          mouseTracking
          infinite
          disableButtonsControls
          autoPlay
          autoPlayInterval={2000}
        />
      </div>
    </div>
  );
};

export default Testimonial;

const items = [
  <div className="single-testimonial">
    <div className="round-1 round"></div>
    <div className="round-2 round"></div>
    <p>
      " Novamic Technologies are very much like an extension of our own team. It
      has helped us make huge strides on our solutions and to achieve a core
      system that we can depend on and base our business on moving forwards as
      part of our strategy. ”
    </p>
    <div className="client-info">
      <div className="client-details">
        <h6>Udo Finkbeiner</h6>
        <span>CEO PosBill / Germany</span>
      </div>
    </div>
  </div>,
  <div className="single-testimonial">
    <div className="round-1 round"></div>
    <div className="round-2 round"></div>
    <p>
      “ I've used Novamic over the years at both Whow Games for slot
      development, and now again for all of Oxolo AI products.I'm very satisfied
      with the outcomes of our continued development partnership.”
    </p>
    <div className="client-info">
      <div className="client-details">
        <h6>Heiko Hubertz</h6>
        <span>Founder & Serial Entrepreneur / Germany</span>
      </div>
    </div>
  </div>,
  <div className="single-testimonial">
    <div className="round-1 round"></div>
    <div className="round-2 round"></div>
    <p>
      " Novamic Technologies was instrumental in the conceptualizing and
      launching of Breathwrk. We might not be here today without them. They took
      time to fully understand my vision and advised me as I embarked on a
      journey to develop a software application. "
    </p>
    <div className="client-info">
      <div className="client-details">
        <h6>Max Gomez</h6>
        <span>CEO Breathwrk / USA</span>
      </div>
    </div>
  </div>,
  <div className="single-testimonial">
    <div className="round-1 round"></div>
    <div className="round-2 round"></div>
    <p>
      " The migration work was a large programme and we simply didn't have
      enough developers in-house. We were impressed with the work that Novamic
      had done so far. Novamic was not just an obvious, but also a convenient
      choice for us. ”
    </p>
    <div className="client-info">
      <div className="client-details">
        <h6>Suraj Gosai</h6>
        <span>CEO Blinkpool / United Kingdom</span>
      </div>
    </div>
  </div>,
];

const responsive = {
  0: {
    items: 1,
  },
  1024: {
    items: 2,
  },
};
