import React, { useEffect } from 'react'
import "./header.css";
import Typewriter from 'typewriter-effect';

export default function home() {
    var app = document.getElementById('app');

    var typewriter = new Typewriter(app, {
        loop: true,
        delay: 75,
    });

    return (
        <div>
            <div >
                <img className="homeImg" src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" />
            </div>
            <div className="container">

                <h1 className="home__title">Feeling prepared?<br />Register for</h1>
                <div className="home_typing ">
                    <Typewriter
                        onInit={(typewriter) => {

                            typewriter
                                .typeString('Science Olympiad')
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString('Math Olympiad')
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString('English Olympiad')
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString('Finance Olympiad')
                                .start()

                        }}
                    />

                </div>
                <a href="#" className="home_button">Register</a>
                <a href="#" className="home_button">Schedule</a>

            </div>

        </div>
    )
}
