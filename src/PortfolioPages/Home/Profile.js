import React from 'react';
import { BsFacebook, BsInstagram } from "react-icons/bs";
import {  FcGoogle } from "react-icons/fc";

export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
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
                                
                            </h1>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
