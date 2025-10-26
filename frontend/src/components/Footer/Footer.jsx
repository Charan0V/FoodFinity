import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>
                        Savor the final touch. From the moment you place your
                        order to the second it arrives, every detail is designed
                        for your delight. [Your Company Name] partners with the
                        finest local kitchens to deliver not just a meal, but a
                        memorable culinary experience. Here's to good taste,
                        delivered.
                    </p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 9591442990</li>
                        <li>contact@FoodFinity.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2024 © FoodFinity.com - All Right Reserved.
            </p>
        </div>
    );
};

export default Footer;
