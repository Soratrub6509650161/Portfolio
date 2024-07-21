import { Button } from "react-bootstrap";
import React from 'react';
import style from '../../public/css/ButtonResu.module.css'

function ButtoResume({ Text, onClick }) {
  return (
    <Button
      variant="success"
      className={style.ButtonLeft}
      onClick={() => onClick(Text)}
    >
      {Text}
    </Button>
  )
}

export default ButtoResume;
