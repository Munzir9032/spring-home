import React from 'react'
import "./contact.css"
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";

export default function contact() {
    return (
        <div className="contact_main">
            <div className="follow_content">
                <p className="title_name">Follow US</p>
                <a href="http://sfoly.com" className="social_names"><p ><FaFacebookSquare className="social" />Facebook</p></a>
                <a href="http://sfoly.com" className="social_names"><p><FaLinkedinIn className="social" />Linkedin</p></a>
                <a href="http://sfoly.com" className="social_names"><p><FaInstagram className="social" />Instagram</p></a>
                <p className="title_name">Contact US</p>
                <a href="http://sfoly.com" className="social_names"><p><FaWhatsapp className="social" />+91 62303 45161</p></a>
                <a href="http://sfoly.com" className="social_names"><p><FaMailBulk className="social" />info[at]sfoly[dot]com</p></a>
                <a href="http://sfoly.com" className="social_names"><p><BiMessageDetail className="social" />Drop a Message!</p></a>
            </div>

            <div className="contact_form">
                <h3 className="title_name   ">Contact US!</h3>
                <form action="mailto:nabeelmunzir@gmail.com">
                    <label className="titles">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                    <label className="titles">Email Address</label>
                    <input type="email" id="lname" name="lastname" placeholder="Email" />


                    <label className="titles">Leave your message!</label>
                    <textarea id="subject" name="" placeholder="Write something.." ></textarea>

                    <input type="submit" value="Submit" />
                </form>

            </div>
        </div>
    )
}
