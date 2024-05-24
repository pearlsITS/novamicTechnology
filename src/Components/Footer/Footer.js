/** @format */

import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import logo from '../../Images/Logo.png'
import { BsTelephoneFill } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { HiLocationMarker } from 'react-icons/hi'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { AiOutlineSend } from 'react-icons/ai'

const Footer = () => {
  const fb = () => {
    window.open('https://www.facebook.com/')
  }
  return (
    <>
      <div className='footer-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6 col-lg-3'>
              <div className='company-info'>
                <div className='image'>
                  <img src={logo} alt='logo' />
                </div>
                <div className='text'>
                  <p className='mt-4'>
                    Novamic Technologies was established in order to develop
                    creative digital Platforms of Technology and Information.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-12 col-md-6 col-lg-3'>
              <div className='contact-info'>
                <div className='title'>
                  <p>Contact-info</p>
                </div>
                <div className='location'>
                  <HiLocationMarker />
                  <span>
                    7, 701, Building D4, NEAR INFOSYS CIRCLE PHASE 1, Hinjewadi,
                    Pune, Pune, Maharashtra, 411057
                  </span>
                </div>
                <div className='mail'>
                  <HiOutlineMail />
                  <span>contact@novamictechnologies.com</span>
                </div>
                <div className='phone-number'>
                  <BsTelephoneFill />
                  <span>8160759881</span>
                </div>
              </div>
            </div>

            <div className=' col-12 col-md-6 col-lg-3'>
              <div className='links'>
                <div className='title'>
                  <p>Quick Links</p>
                </div>
                <div className='menu-link'>
                  <p>
                    <Link to='/'>About us</Link>
                  </p>
                  <p>
                    <Link to='/services'>Services</Link>
                  </p>
                  <p>
                    <Link to='/careers'>Careers</Link>
                  </p>
                  <p>
                    <Link to='/contact'>Contact</Link>
                  </p>
                </div>
              </div>
            </div>

            <div className='col-12 col-md-6 col-lg-3'>
              <div className='newletter'>
                <div className='title'>
                  <p>News Letter</p>
                </div>

                <div className='subscribe'>
                  <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                  <div className='sub-form'>
                    <input
                      type='text'
                      placeholder='Email Address'
                      className='form-control'
                    />
                    <button type='button' className='btn'>
                      <AiOutlineSend />
                    </button>
                  </div>
                </div>

                <div className='follow mt-3 mb-2'>
                  <p>Follow Us On</p>
                </div>
                <div className='social-link'>
                  <div className='social' onClick={fb}>
                    <FaFacebookF />
                  </div>
                  <div className='social'>
                    <BsTwitter />
                  </div>
                  <div className='social'>
                    <BsLinkedin />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='copyright'>
        <div className='container'>
          <p>Copyright© {new Date().getFullYear()}. All Rights Reserved</p>
        </div>
      </div>
    </>
  )
}

export default Footer
