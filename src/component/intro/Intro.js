import React from "react";
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import {Link} from 'react-scroll'
import './intro.css'

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Kushan</span> <br /> Backend Developer</span>
            <p className="introPara">I am a skilled and passionate web developer with experience in creating<br /> enterprise level backend application. </p>
            <Link><button className="btn"><img src={btnImg} alt="" className="btnImg"/>Hire me</button></Link>
            </div>
            <img src={bg} alt="" className="bg" />
        </section>
    )
}

export default Intro;