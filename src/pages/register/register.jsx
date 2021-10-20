import React from 'react'
import "./register.css"
export default function register() {
    return (
        <div className="main_container">
            <div className="first_container">

                <div className="content_container">
                    <h1>Register as an  <span className="institute" >Intstiute</span></h1>
                    <p>Want to give a headstart to the students of your institute by providing them an exciting platform to test their knowledge and skills. Then, get your Institute registered with us now!</p>
                    <a href="" className="register_button">Register Now</a>
                </div>

                <div className="first_right">
                    <img className="register_img" src="https://sfoly.com/Assets/building.svg" alt="" />
                    <h6 className="righttext">Registered Institutes</h6>
                    <h3 className="institute">2000+</h3>
                </div>

                <div className="second_right">
                    <img className="register_img" src="https://sfoly.com/Assets/student.svg" alt="" />
                    <h6 className="righttext" >Registered Individuals</h6>
                    <h3 className="institute" >50000+</h3>
                </div>

            </div>
            <hr />
            <div className="second_container">

                <div className="first_left">
                    <img className="register_img" src="https://sfoly.com/Assets/employee.svg" alt="" />
                    <h6 className="righttext">Registered Institutes</h6>
                    <h3 className="institute">2000+</h3>
                </div>

                <div className="second_content_container">
                    <h1 className="righttext">Register as an  <span className="institute" >Coordinator</span></h1>
                    <p className="righttext">Grab the opportunity and get a chance to work in the education sector with one of the renowned education service providers with the option to work full time or part time. Work as a mediator between education institutes and us and Earn a handsome amount of money by working at your convenience. Top coordinators will be given to work as full-time employees with good pay.</p>
                    <a href="" className="register_button">Register Now</a>
                </div>

            </div>
        </div>
    )
}
