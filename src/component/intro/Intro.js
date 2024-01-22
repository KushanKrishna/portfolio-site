import React from "react";
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll'
import './intro.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Intro = () => {
    const [text] = useTypewriter({
        words: ['Backend Developer', 'Frontend Developer', 'Full Stack Developer'],
        loop: {},
        typeSpeed: 120,
        delaySpeed: 80,
    });

    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Kushan <br /> </span> {text}<Cursor cursorColor="yellow" /> </span>
                <p className="introPara">I am a skilled and passionate web developer with experience in creating<br /> enterprise level frontend and backend application. </p>
                <Link><button className="btn"><img src={btnImg} alt="" className="btnImg" />Hire me</button></Link>
            </div>
            <img src={bg} alt="" className="bg" />
        </section>
    )
}

export default Intro;