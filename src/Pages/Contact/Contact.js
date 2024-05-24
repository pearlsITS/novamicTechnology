/**
 * eslint-disable jsx-a11y/iframe-has-title
 *
 * @format
 */

import React, { useEffect, useState } from 'react'
import './Contact.css'
import { BsTelephoneFill } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { HiLocationMarker } from 'react-icons/hi'
import ScrollButton from '../../Components/ScrollToTop/ScrollButton'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { Button, message } from 'antd'
import axios from 'axios'
import { Api } from '../../Api'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [messagee, setMessagee] = useState()
  function submitHandler(e) {
    e.preventDefault()
    const data = {
      name: name,
      email: email,
      message: messagee,
    }
    if (data.name && data.email && data.message) {
      axios.post(`${Api}/contactUs`, data).then((res) => {
        setName('')
        setEmail('')
        setMessagee('')
        message.success(res.data)
      })
    } else {
      message.error('Fill All Details')
    }
  }
  return (
    <div className='contact-section'>
      <div className='contact'>
        <AnimationOnScroll animateIn='animate__fadeInLeft'>
          <div className='title'>
            <p>Contact Us</p>
          </div>
        </AnimationOnScroll>
      </div>

      <div className='contact-container container'>
        <div className='content'>
          <div className='left-side'>
            <AnimationOnScroll animateIn='animate__fadeInUp'>
              <div className='address details'>
                <HiLocationMarker />
                <div className='topic'>Address</div>
                <div className='text-one'>
                  7, 701, Building D4, NEAR INFOSYS CIRCLE PHASE 1, Hinjewadi,
                  Pune, Pune, Maharashtra, 411057
                </div>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn='animate__fadeInUp'>
              <div className='phone details'>
                <BsTelephoneFill />
                <div className='topic'>Phone</div>
                <div className='text-one'>8160759881</div>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn='animate__fadeInUp'>
              <div className='email details'>
                <HiOutlineMail />
                <div className='topic'>Email</div>
                <div className='text-one'>contact@novamictechnologies.com</div>
              </div>
            </AnimationOnScroll>
          </div>
          <div className='right-side'>
            <AnimationOnScroll animateIn='animate__fadeInUp'>
              <div className='topic-text'>Send us a message</div>
              <p>
                If you have any work from me or any types of quries related to
                my tutorial, you can send me message from here. It's my pleasure
                to help you.
              </p>
            </AnimationOnScroll>
            <form onSubmit={submitHandler}>
              <AnimationOnScroll animateIn='animate__fadeInUp'>
                <div className='input-box'>
                  <input
                    type='text'
                    placeholder='Enter your name'
                    onChange={(e) => {
                      setName(e.target.value)
                    }}
                    value={name}
                  />
                </div>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn='animate__fadeInUp'>
                <div className='input-box'>
                  <input
                    type='text'
                    placeholder='Enter your email'
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                    value={email}
                  />
                </div>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn='animate__fadeInUp'>
                <div className='input-box message-box'>
                  <textarea
                    placeholder='Send Message'
                    onChange={(e) => {
                      setMessagee(e.target.value)
                    }}
                    value={messagee}></textarea>
                </div>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn='animate__fadeInUp'>
                <div className='button'>
                  <Button htmlType='submit' type='primary'>
                    Send Now
                  </Button>
                </div>
              </AnimationOnScroll>
            </form>
          </div>
        </div>
      </div>

      <iframe
        className='map'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.805932821888!2d72.49701661487005!3d22.994162773159612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9ac2f8623323%3A0xc84338dfb6bdb047!2sSIDDHI%20VINAYAK%20TOWER%2C%20Kataria%20Automobiles%20Rd%2C%20Makarba%2C%20Ahmedabad%2C%20Gujarat%20380051!5e0!3m2!1sen!2sin!4v1671008522720!5m2!1sen!2sin'
        width='100%'
        height='480'></iframe>

      <ScrollButton />
    </div>
  )
}
export default Contact
