import React from 'react'
import Marquee from "react-fast-marquee";
import "./highlights.css"

export default function highlights() {
    return (
        <div className="high_container">
            <Marquee>
                <a className="itemMarquee" href="">SCHEDULE OF OLYMPIADS HAS BEEN DECLARED.</a>
                <a className="itemMarquee" href="">SPRINGFIELD OLYMPIADS WILL BE CONDUCTING OLYMPIADS ONLINE FOR THE YEAR 2021-22.</a>
                <a className="itemMarquee" href="">REGISTRATION FOR 2021-22 IS CLOSING. REGISTER NOW</a>
            </Marquee>
        </div>
    )
}
