import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "./Topbar.css"

export default function Nav() {
    return (
        <div>
            <div className="top">
                <div className="topleft">
                    <img className="topImg" src="https://sfoly.com/Assets/logo.svg" alt="loading" />
                    <h4 className="topLeftTitle">Springfield Olympiads</h4>
                </div>

                <Router>
                    <div className="topcenter">
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to="/">
                                    Register
                                </Link>
                            </li>
                            <li className="topListItem">
                                <Link className="link" to="/">
                                    Olympiads
                                </Link>
                            </li>
                            <li className="topListItem">
                                <Link className="link" to="/">
                                    About us
                                </Link>
                            </li>
                            <li className="topListItem">
                                <Link className="link" to="/">
                                    FAQ's
                                </Link>
                            </li>
                            <li className="topListItem">
                                <Link className="link" to="/">
                                    Contact US
                                </Link>
                            </li>

                        </ul>
                    </div>
                </Router>

                <div className="topright">
                    <h5 className="topRightTitle">Institute Log in</h5>
                </div>
            </div>
        </div>

    )
}
