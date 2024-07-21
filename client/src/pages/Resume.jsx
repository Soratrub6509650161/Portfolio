import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import style from '../public/css/Resume.module.css'
import ButtoResume from '../component/Resumecomponent/Buttonleft';
import Experience from './Resume/Experience';
import Education from './Resume/Education';
import Skills from './Resume/Skills';
import Aboutme from './Resume/Aboutme';


function Resume() {

    const [selectedContent, setSelectedContent] = useState('Experience');

  const renderContent = () => {
    switch (selectedContent) {
      case 'Experience':
        return <Experience />;
      case 'Education':
        return <Education />;
      case 'Skills':
        return <Skills />;
      case 'About me':
        return <Aboutme />;
      default:
        return <div>Select a section to view details.</div>;
    }
  };

  const handleButtonClick = (text) => {
    setSelectedContent(text);
};
    return (
        <Container className={style.bodyResume}>
            <Row>
                <Col md={4}>
                    <h1 className={style.headLeft}>Why hire me?</h1>
                    <p className={style.titleLeft}>Lorem ipsum dolor sit amet consectetur adipisicing elit.   quam!</p>
                    <ButtoResume Text="Experience" onClick={handleButtonClick} />
                    <ButtoResume Text="Education" onClick={handleButtonClick} />
                    <ButtoResume Text="Skills" onClick={handleButtonClick} />
                    <ButtoResume Text="About me" onClick={handleButtonClick} />
                </Col>
                <Col md ={1}></Col>
                <Col md={7}>
                {renderContent()}
                </Col>
            </Row>
        </Container>
    );
}

export default Resume;