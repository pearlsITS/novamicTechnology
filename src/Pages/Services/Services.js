import React, { useEffect } from "react";
import "./Services.css";
import about1 from "../../Images/about-1.jpg";
import about2 from "../../Images/about-2.jpg";
import ScrollButton from "../../Components/ScrollToTop/ScrollButton";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { FaMobileAlt } from "react-icons/fa";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-section">
      <div className="about">
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <div className="title">
            <p>Services</p>
          </div>
        </AnimationOnScroll>
      </div>
      {/* <div className='container'>
        <div className='row mt-4 mb-4 align-items-center'>
          <div className='col-md-5 mb-5'>
            <div className='about-info'>
              <AnimationOnScroll animateIn='animate__fadeInUp' delay={100}>
                <h2>Who We Are</h2>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn='animate__fadeInUp' delay={150}>
                <p>
                  In this Digital World and also being Design Development
                  Company for Web and Mobile, we have provided our clients with
                  best Web and Mobile app's Design and Solutions. We at Pearl's
                  IT Solutions, have a motto of Customer satisfaction as our
                  Priority.
                </p>
              </AnimationOnScroll>
            </div>
          </div>
          <div className='col-md-1'></div>
          <div className='col-md-6 mb-5'>
            <AnimationOnScroll animateIn='animate__zoomIn'>
              <div className='image'>
                <img src={about1} alt='about' className='img-fluid' />
              </div>
            </AnimationOnScroll>
          </div>
          <div className='col-md-6'>
            <AnimationOnScroll animateIn='animate__zoomIn'>
              <div className='image'>
                <img src={about2} alt='about' className='img-fluid' />
              </div>
            </AnimationOnScroll>
          </div>
          <div className='col-md-1'></div>
          <div className='col-md-5'>
            <div className='about-info'>
              <AnimationOnScroll animateIn='animate__fadeInUp' delay={100}>
                <h2>Our Vision and Mission</h2>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn='animate__fadeInUp' delay={150}>
                <p>
                  Our Vision is to provide Best-In-Class Development to our
                  Clients and met their expectations with innovative and
                  excellence team members. Our Mission is to create products
                  that are based on innovation that will create different effect
                  in the Digital World.
                </p>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mt-4 mb-4">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <b>Software Engineering</b>
              </AccordionSummary>
              <AccordionDetails>
                <ul class="list-group list-group-light">
                  <li class="list-group-item">Software Consulting</li>
                  <li class="list-group-item">Software Development Services</li>
                  <li class="list-group-item">
                    Enterprice Software Development
                  </li>
                  <li class="list-group-item">Custom Software Development</li>
                  <li class="list-group-item">Software Product Development</li>
                  <li class="list-group-item">
                    Software Development Outsourcing
                  </li>
                  <li class="list-group-item">
                    Outsource Software Development
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mb-4">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <b>Application Development</b>
              </AccordionSummary>
              <AccordionDetails>
                <ul class="list-group list-group-light">
                  <li class="list-group-item">Web Development</li>
                  <li class="list-group-item">Mobile App Development</li>
                  <li class="list-group-item">Ecommerce App Development</li>
                  <li class="list-group-item">Full Stack Development</li>
                  <li class="list-group-item">
                    Application Development Services
                  </li>
                  <li class="list-group-item">
                    Application Mordenization Services
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mb-4">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <b>Data Engineering</b>
              </AccordionSummary>
              <AccordionDetails>
                <ul class="list-group list-group-light">
                  <li class="list-group-item">Data Analystics</li>
                  <li class="list-group-item">Data Analysis</li>
                  <li class="list-group-item">Data Warehouse</li>
                  <li class="list-group-item">Data Migration</li>
                  <li class="list-group-item">Data Cleaning</li>
                  <li class="list-group-item">Data Visualization</li>
                  <li class="list-group-item">Data Collection</li>
                  <li class="list-group-item">Data Integration</li>
                  <li class="list-group-item">Big Data</li>
                  <li class="list-group-item">Business Intelligence</li>
                  <li class="list-group-item">Data Science Consulting</li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mb-4">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <b>AI</b>
              </AccordionSummary>
              <AccordionDetails>
                <ul class="list-group list-group-light">
                  <li class="list-group-item">AI Consulting</li>
                  <li class="list-group-item">AI Development</li>
                  <li class="list-group-item">Computer Vision</li>
                  <li class="list-group-item">NLP</li>
                  <li class="list-group-item">Generative AI</li>
                  <li class="list-group-item">LLM Development</li>
                  <li class="list-group-item">Adaptive AI</li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mb-4">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <b>ML</b>
              </AccordionSummary>
              <AccordionDetails>
                <ul class="list-group list-group-light">
                  <li class="list-group-item">ML Consulting</li>
                  <li class="list-group-item">Deep Learning</li>
                  <li class="list-group-item">Tensorflow Development</li>
                  <li class="list-group-item">ML Development</li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mb-4">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <b>Automation</b>
              </AccordionSummary>
              <AccordionDetails>
                <ul class="list-group list-group-light">
                  <li class="list-group-item">RPA Consulting</li>
                  <li class="list-group-item">Workflow Automation</li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mb-4">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <b>Quality Assurance</b>
              </AccordionSummary>
              <AccordionDetails>
                <ul class="list-group list-group-light">
                  <li class="list-group-item">QA Testing</li>
                  <li class="list-group-item">Functional Testing</li>
                  <li class="list-group-item">Automation Testing</li>
                  <li class="list-group-item">Security Testing</li>
                  <li class="list-group-item">Performance Testing</li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mb-4">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <b>IT Services</b>
              </AccordionSummary>
              <AccordionDetails>
                <ul class="list-group list-group-light">
                  <li class="list-group-item">IT Consulting</li>
                  <li class="list-group-item">IT Staff Augmentation</li>
                  <li class="list-group-item">IT Support</li>
                  <li class="list-group-item">IT Outsourcing</li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mb-4">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <b>SaaS</b>
              </AccordionSummary>
              <AccordionDetails>
                <ul class="list-group list-group-light">
                  <li class="list-group-item">SaaS Development</li>
                  <li class="list-group-item">SaaS Consulting</li>
                  <li class="list-group-item">SaaS Web Design</li>
                  <li class="list-group-item">SaaS Architecture</li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>

      <ScrollButton />
    </div>
  );
};

export default About;
