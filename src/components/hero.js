import React, { Component } from "react";
import './hero.scss';
import './programmer.js'
import Programmer from "./programmer.js";
// import '../index.scss'

class Hero extends React.Component {
    render () {
        return(
            <div className="hero-container">
                <div className="hero-left">
                    <div className="hero-name">
                        Hi, I am Yuichiro Toyama.
                    </div>
                    <div className="hero-name">
                        A FullStack Developer based in Tokyo.
                    </div>
                    <div className='hero-intro'>
                        I design and build interactive and responsive websites.
                    </div>
                </div>
                <div>
                    <Programmer />
                </div>
            </div>
        ) 
    }
}

export default Hero
