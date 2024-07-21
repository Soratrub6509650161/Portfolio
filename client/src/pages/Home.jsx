import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import style from '../public/css/Home.module.css';
import ButtonCv from '../component/Homecoponent/Button';
import Github from '../component/Homecoponent/Github'
import Profile from '../../IMG/Profile.jpg'

function Home() {
  return (
    <Container className={style.bodyHome}>
      <Row>
        <Col md={7}>
          <p className={style.HeadP}>Software Developer</p>
          <h1 className={style.Headh1}>Hello I'm</h1>
          <h1 className={style.Headh1}>Soratrub Naksawat</h1>
          <Col md={9}>
            <p className={style.tailP}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, cumque. Amet modi explicabo non incidunt aliquam, ab laudantium rerum eveniet nesciunt harum. </p>
          </Col>
          <div className={style.GroupButton}>
          <ButtonCv/>
          <Github/>
          </div>
        </Col>
        <Col md={5}>
          <img  className={style.imgProfile} src={Profile} alt="Profile" />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
