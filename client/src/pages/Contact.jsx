import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import style from '../public/css/Contact.module.css';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container>
      <Row>
        <Col md={6} className={style.backContact}>
          <h1 className={style.HeadTitle}>Let's work together</h1>
          <p className={style.loremTitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum possimus deleniti in.</p>
          <div className={style.contactFormContainer}>
            <form className={style.contactForm} onSubmit={handleSubmit}>
              <div className={style.formGroup}>
                <input
                  type="text"
                  placeholder="Firstname"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={style.inputst}
                />
                <input
                  type="text"
                  placeholder="Lastname"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={style.inputst}
                />
              </div>
              <div className={style.formGroup}>
                <input
                  type="email"
                  placeholder="Email address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={style.inputst}
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={style.inputst}
                />
              </div>
              <div className={style.formGroup}>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`${style.inputst} ${style.option}`}
                >
                  <option className={style.optionPlaceholder}>Select a service</option>
                  <option>Service 1</option>
                  <option>Service 2</option>
                  <option>Service 3</option>
                </select>
              </div>
              <div className={style.formGroup}>
                <textarea
                  placeholder="Type your message here."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`${style.inputst} ${style.textarea}`}
                ></textarea>
              </div>
              <button type="submit" className={style.btnSubmit}>Send message</button>
            </form>
          </div>
        </Col>
        <Col md={1}></Col>
        <Col md={5} className={style.rightCol}>
          <div>
            <div className={style.wrapicon}>
              <div className={style.iconContainer}>
                <FaPhone className={style.icon} />
              </div>
              <div className={style.text}>
                <p className={style.Head}>Phone</p>
                <p className={style.Title}>064-219-2162</p>
              </div>
            </div>
            <div className={style.wrapicon}>
              <div className={style.iconContainer}>
                <MdEmail className={style.icon} />
              </div>
              <div className={style.text}>
                <p className={style.Head}>Email</p>
                <p className={style.Title}>soratrub.save@gmail.com</p>
              </div>
            </div>
            <div className={style.wrapicon}>
              <div className={style.iconContainer}>
                <FaLocationDot className={style.icon} />
              </div>
              <div className={style.text}>
                <p className={style.Head}>Address</p>
                <p className={style.Title}>064-219-2162</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
