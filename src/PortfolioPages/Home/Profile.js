import React from 'react';
import { BsFacebook, BsInstagram } from "react-icons/bs";
import {  FcGoogle } from "react-icons/fc";
import Typical from 'react-typical';


export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="cloz-icon">

                        <a href="https://www.facebook.com/sudiptaadhikaryjoy005/">
                            <BsFacebook />
                        </a>
                        <a href="#">
                            <FcGoogle />
                        </a>
                        <a href="https://www.instagram.com/panditji0005/">
                            <BsInstagram />
                        </a>
                        </div>
                    </div>

                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I am <span className="highlight-text">Sudipta Adhikary Joy</span>
                        </span>
                    </div>

                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={ Infinity }
                                    steps={[
                                        "Front End Developer 💻",
                                        700, 
                                        "MERN Stack Developer 🖥",
                                        500, 
                                        "Full Stack Developer ⌨️",
                                        300, 
                                    ]}
                                 />
                            </h1>

                            <span className="profile-role-tagline">
                                Knack of building applications with front and back end operations.
                            </span>
                        </span>
                    </div>

                    <div className="profile-options">
                        <button className="btn primary-btn">
                            {" "}
                            Hire Me{" "}
                        </button>
                        <a href="Sudipta_Adhikary_Joy_Resume-2" download="Sudipta_Adhikary_Joy_Resume-2">
                            <button className="btn highlighted-btn">Download Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
