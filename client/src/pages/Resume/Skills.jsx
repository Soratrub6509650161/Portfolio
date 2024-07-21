// Skills.js
import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { SiExpress, SiNestjs, SiPostgresql } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { GrMysql } from "react-icons/gr";

import style from '../../public/css/Skills.module.css';

const skills = [
    { name: 'HTML5', icon: FaHtml5 },
    { name: 'CSS3', icon: FaCss3Alt },
    { name: 'JavaScript', icon: IoLogoJavascript },
    { name: 'TypeScript', icon: BiLogoTypescript },
    { name: 'React', icon: FaReact },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'Bootstrap', icon: FaBootstrap },
    { name: 'Express', icon: SiExpress },
    { name: 'Next.js', icon: RiNextjsFill },
    { name: 'Nest.js', icon: SiNestjs },
    { name: 'MongoDB', icon: DiMongodb },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'MySQL', icon: GrMysql },
];

const SkillIcon = ({ Icon, name }) => (
    <div className={style.iconContainer}>
        <Icon className={style.icon} />
        <span className={style.tooltip}>{name}</span>
    </div>
);

const Skills = () => {
    return (
        <>
        <h2 className={style.headLeft}>Skills</h2>
            <div className={style.BodySkills}>
                {skills.map(skill => (
                    <SkillIcon key={skill.name} Icon={skill.icon} name={skill.name} />
                ))}
            </div>
        </>
    );
};

export default Skills;
