import React, { useState } from 'react';
import { Container, Col } from 'react-bootstrap';
import style from '../../public/css/Experience.module.css'
import BoxExperience from './BoxExperience';

const data = [
    {
        Date: "2021 - Present",
        Head: "Full Stack Developer",
        Body: "Tech Soulution"
    },
    {
        Date: "2021 - Present",
        Head: "Full Stack Developer",
        Body: "Tech Soulution"
    },
    {
        Date: "2021 - Present",
        Head: "Full Stack Developer",
        Body: "Tech Soulution"
    },
    {
        Date: "2021 - Present",
        Head: "Full Stack Developer",
        Body: "Tech Soulution"
    },
    {
        Date: "2021 - Present",
        Head: "Full Stack Developer",
        Body: "Tech Soulution"
    }
]

function Education() {

    const [dataButton, setdataButton] = useState(data);

    return (
        <Container>
            <h2 className={style.headExp}>Education</h2>
            <p>Detail your work education here...</p>
            <div className={style.bodyExp}>
                {dataButton.map((d, index) => {
                    return <BoxExperience key={index} infor={d} />
                })}
            </div>
        </Container>
    );
}

export default Education;
