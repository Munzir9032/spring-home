import React from 'react'
import "./company.css"

export default function company() {
    return (
        <div className="company_main">

            <div className="company_first">
                <div className="company_content">
                    <h1 style={{ 'color': '#5367ff' }}>About Springfield Olympiads </h1>
                    <p>We, at Springfield Olympiads, provide one of the best Olympiad solutions for students and working professionals and students.
                        Springfield Olympiads is an Educational Organization popularizing academic competition and assisting the development of competitive spirit among learners.</p>
                    <a href="" className="Know_button">Know More!</a>
                </div>
                <div className="company_logo">
                    <img className="company_img" src="https://sfoly.com/Assets/logo.svg" alt="" />

                </div>

            </div>


        </div>
    )
}
