import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { FaLaptopCode, FaMobileAlt } from 'react-icons/fa'
import './service.css'

const Service = () => {
  return (
    <div className='services'>
      <div className='container'>
        <div className='services_title'>
          <h1>What we do</h1>
        </div>
        <div className='row'>
          <div className='col-lg-4 col-md-6'>
            <div className='card'>
              <div className='icon-wrapper'>
                <i className='fas'>
                  <FaLaptopCode />
                </i>
              </div>
              <AnimationOnScroll animateIn='animate__zoomIn' delay={100}>
                <h3>Team Augmentation</h3>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn='animate__fadeInUp' delay={100}>
                <p>
                  Our dedicated Quality Software Engineers will assist you in
                  development & maintenance of your software or product. This
                  will benefit in cost saving, specialized Skills, faster
                  project execution and learning opportunities.
                </p>
              </AnimationOnScroll>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='card'>
              <div className='icon-wrapper'>
                <i className='fas'>
                  <FaMobileAlt />
                </i>
              </div>
              <AnimationOnScroll animateIn='animate__zoomIn' delay={150}>
                <h3>Enterprise Digital Transformation</h3>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn='animate__fadeInUp' delay={150}>
                <p>
                  Our Enterprise Application capabilities are modeled to help
                  businesses unlock value leveraging digital.
                </p>
                <p>
                  From Consulting, Optimization to Automation we leverage
                  popular tools, products and generative Al, helping enterprises
                  thrive in the modern digital ecosystem.
                </p>
              </AnimationOnScroll>
            </div>
          </div>

          <div className='col-lg-4 col-md-6'>
            <div className='card'>
              <div className='icon-wrapper'>
                <i className='fas'>
                  <FaLaptopCode />
                </i>
              </div>
              <AnimationOnScroll animateIn='animate__zoomIn' delay={200}>
                <h3>End to End Product Development </h3>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn='animate__fadeInUp' delay={200}>
                <p>
                  We engineer robust, scalable, & intuitive products that are
                  built for all. We ensure products crafted by our teams deliver
                  phenomenal stakeholder value.
                </p>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
