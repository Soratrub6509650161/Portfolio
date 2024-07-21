import React from 'react';
import style from '../../public/css/BoxExperience.module.css';

function BoxExperience({ infor }) {

    return (
        <div className={style.box}>
            <p className={style.Date}>{infor.Date}</p>
            <p className={style.Head}>{infor.Head}</p>
            <p className={style.Body}>{infor.Body}</p>
        </div>
    );
}

export default BoxExperience;
