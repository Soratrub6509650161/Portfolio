import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import style from '../../public/css/Aboutme.module.css';

function Aboutme() {
    return (
        <div>
            <h1 className={style.headAbout}>About me</h1>
            <p className={style.detailHead}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident alias</p>

            <Row>
                <Col md={5}>
                    <p className={style.bodyDetail}><span className={style.titledetail}>Name</span> Soratrub Naksawat</p>
                    <p className={style.bodyDetail}><span className={style.titledetail}>Experience</span> 1 Years</p>
                    <p className={style.bodyDetail}><span className={style.titledetail}>Nationality</span> Thailand</p>
                </Col>
                <Col md={1}></Col>
                <Col md={6}>
                    <p className={style.bodyDetail}><span className={style.titledetail}>Phone</span> 064-219-2162</p>
                    <p className={style.bodyDetail}><span className={style.titledetail}>Email</span> soratrub.save@gmail.com</p>
                    <p className={style.bodyDetail}><span className={style.titledetail}>Languages</span> English , Thai</p></Col>
            </Row>

        </div>
    );
}

export default Aboutme;
