import React from "react";
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a skilled and passionate backend developer with 2+ years of experience in java devlopment</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="uidesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Java Development</h2>
                        <p>Created enterprise ready application using Springboot</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Frontend devepment</h2>
                        <p>Created frontend projects using HTML, CSS, JavaScript and React js</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Cloud & Devops</h2>
                        <p>Created CI-CD pipleline for projects using Jenkns, Docker and Kubernetes</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills;