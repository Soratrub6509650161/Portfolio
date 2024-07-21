import React, { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import image1 from '../../IMG/2.png';
import image2 from '../../IMG/Profile.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is included
import styles from '../public/css/Work.module.css'; // Import the CSS module
import GithubBut from '../component/WorkComponent/GithubBut'; // Import GitHub button component
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const infor = [
  {
    id: 1,
    title: 'Frontend Project 1',
    description: 'Lorem ipsum dolor sit amet...',
    tech: 'Html 5, Css 3, Javascript',
    image: image1,
  },
  {
    id: 2,
    title: 'Frontend Project 2',
    description: 'Lorem ipsum dolor sit amet...',
    tech: 'React, Redux, Sass',
    image: image2,
  },
];

function Work() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numProject, setNumProject] = useState(1);

  useEffect(() => {
    setNumProject(currentIndex + 1);
  }, [currentIndex]);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % infor.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + infor.length) % infor.length);
  };

  return (
    <Container className={styles.wrapWork}>
      <Row>
        <Col md={6} className={styles.projectDetails}>
          <h1 className={styles.NumPro}>0{numProject}</h1>
          <h3 className={styles.projectTitle}>{infor[currentIndex].title}</h3>
          <p className={styles.projectBody}>{infor[currentIndex].description}</p>
          <p className={styles.projectLanguages}>{infor[currentIndex].tech}</p>
          <GithubBut />
        </Col>
        <Col md={5}>
          <Carousel activeIndex={currentIndex} onSelect={setCurrentIndex} controls={false}>
            {infor.map((project, index) => (
              <Carousel.Item key={index}>
                <img
                  className={`d-block w-100 ${styles.carouselImage}`}
                  src={project.image}
                  alt={`Slide ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>

          <div className={`d-flex justify-content-end mt-3`}>
            <button className={`btn btn-success mr-2 ${styles.ButtonPreNext}`} onClick={prevProject}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className={`btn btn-success ${styles.ButtonPreNext}`} onClick={nextProject}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Work;
