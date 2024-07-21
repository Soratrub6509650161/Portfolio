import { Button } from "react-bootstrap";
import React from 'react';
import { FaDownload } from 'react-icons/fa';
import style from '../../public/css/Button.module.css'

function ButtonCv() {
  return (
    <Button className={style.ButtonCv}>
      DOWNLOAD CV <FaDownload style={{ marginLeft: '0.5rem' }} />
    </Button>
  )
}

export default ButtonCv;
