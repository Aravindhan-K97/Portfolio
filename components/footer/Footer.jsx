/* eslint-disable no-unused-vars */
import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">&lt;Aravindhan.K/&gt;</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                 </ul>

            <div className="footer__social">
                    <a href="https://github.com/Aravindhan-K97" className="footer__social-link" target="_blank">
                    <i className="bx bxl-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/aravindhan-k-351394312/" className="home__social-icon" target="_blank">
            <i className="uil uil-linkedin"></i>
        </a>

            </div>

            <span className="footer__copy">&#169; Aravindhan.K. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer