import React from 'react';
import { FaGithub } from 'react-icons/fa';
import style from '../../public/css/ButtonGithub.module.css';

function GithubButton() {
  return (
    <div className={style.iconButton}>
      <FaGithub />
    </div>
  );
}

export default GithubButton;
