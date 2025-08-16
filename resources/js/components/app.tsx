import * as React from "react";
import ReactDOM from 'react-dom';
import { useEffect } from "react";
import "../../css/appts.css";
import logo from "../../images/logo.webp";
import img1 from "../../images/img3.webp";
import img2 from "../../images/person1.webp";
import img3 from "../../images/hero3.jpg";
import img4 from "../../images/hero4.webp";
import img5 from "../../images/hope5.webp";
import img6 from "../../images/img6.webp";

import logo1 from "../../images/logo1.webp";
import logo3 from "../../images/logo3.webp";
import logo4 from "../../images/logo4.webp";
import logo5 from "../../images/logo5.webp";
import gal from "../../images/1.jpg";
import gal2 from "../../images/2.webp";
import gal3 from "../../images/3.webp";
import gal4 from "../../images/4.webp";

import offer from "../../images/offeer.webp";
import offer2 from "../../images/offer2.webp";
import offer3 from "../../images/offer3.webp";


import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
    useEffect(() => {

        AOS.init({
            duration: 1000,
            once: true,
            offset: 50,
        });

        const scrollFunction = () => {
            const navbar = document.querySelector<HTMLElement>(".navbar");
            const logoImg = document.querySelector<HTMLImageElement>(".logo");

            if (!navbar || !logoImg) return;

            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                navbar.style.padding = "20px 10px";
                navbar.style.backgroundColor = "rgb(7, 7, 7)";
            } else {
                navbar.style.padding = "40px 10px";
                navbar.style.backgroundColor = "transparent";
            }
        };

        window.addEventListener("scroll", scrollFunction);
        return () => window.removeEventListener("scroll", scrollFunction);
    }, []);

    return (
        <div>

            <nav className="navbar" style={{ transition: "all 0.3s ease" }}>
                <div className="nav-left">
                    <a href="/project">/ Home</a>
                    <a href="/situation">/ Listings</a>
                    <a href="/villas">/ Lets Move</a>
                    <a href="/gallery">/ About us</a>
                </div>
                <div className="nav-center">
                    <img src={logo} alt="Logo" className="logo" style={{ transition: "all 0.3s ease" }} />
                </div>
                <div className="nav-right">
                    <a href="/contact">/ contact</a>
                    <button className="menu-btn">
                        <span className="menu-icon">☰</span> menu
                    </button>
                </div>
            </nav>
            <div>
                <p className="imgl-text" data-aos="fade-in" data-aos-delay="200">MARCI METZGER - THE RIDGE REALTY GROUP</p>
                <p className="imgl-text2 cursor typewriter-animation" data-aos="fade-in" data-aos-delay="400">Pahrump Realtor</p>
                <div className="middletext" data-aos="fade-in" data-aos-delay="600">
                    <button type="submit" className="btncallnow">CALL NOW</button>
                </div>
                <img src={img1} className="imgl" data-aos="zoom-in" data-aos-delay="800"></img>
            </div>


            <div className="container">

                <div className="gridview" data-aos="fade-right">
                    <br />
                    <h2 className="textelement">
                        MARCI <br /> <span className="lastname">METZGER</span>
                    </h2>
                    <h3 className="gridview-text">REALTOR FOR NEARLY 3 DECADES!</h3>
                    <p className="textelement3">
                        206-919-686
                    </p>
                    <h1 className="readmore">
                        <a href="/about" className="readmore">Learn More</a>
                    </h1>
                </div>


                <div className="gridview" data-aos="fade-left">
                    <br />
                    <img src={img2} className="imgl2" alt="Person" />
                    <br />
                    <br />
                </div>
            </div>
            <div className="containerplain" data-aos="fade-left">
                <h1 className="text_title">GET IT SOLD</h1>

                <br />
                <div className="container2">
                    <div className="gridview2" data-aos="fade-left">
                        <div className="container3">
                            <img src={img3} alt="Avatar" className="image2" />
                            <div className="overlay2">
                                <p className="text4">
                                    Top Residential Sales Last 5 Years
                                    <br />
                                    We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.</p>
                            </div>
                        </div>
                        <br />
                        <div className="container3">
                            <img src={img5} alt="Avatar" className="image2" />
                            <div className="overlay2">
                                <p className="text4">
                                    Guide to Buyers
                                    <br />
                                    Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!</p>
                            </div>
                            br</div>
                    </div>


                    <div className="gridview2" data-aos="fade-left">
                        <div className="container3">
                            <img src={img4} alt="Avatar" className="image2" />
                            <div className="overlay2">
                                <p className="text4">
                                    Don't Just List it...
                                    <br />
                                    Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.
                                </p>
                            </div>
                        </div>
                        <div className="container3">
                            <h1 className="learnmore2">
                                <a href="/about" className="learnmore2"> → Learn More</a>
                            </h1>
                        </div>
                    </div>
                </div>

            </div>
            <div className="containerplain2">

                <div
                    className="parallax"
                    style={{ backgroundColor: '#B7A187' }}
                    /*style={{ backgroundImage: `url(${img6})` }}*/
                >
                    <div className="parallax-content" data-aos="fade-up">
                        <div className="search-form-wrapper">
                            <h2>SEARCH LISTINGS</h2>
                            <form className="property-search-form">

                                {/* --- Location --- */}
                                <div className="form-group grid-col-span-2">
                                    <label htmlFor="location">Location</label>
                                    <input type="text" id="location" />
                                </div>

                                {/* --- Type --- */}
                                <div className="form-group grid-col-span-2">
                                    <label htmlFor="type">Type</label>
                                    <select id="type">
                                        <option value="" disabled selected></option>
                                        <option>Residential</option>
                                        <option>Commercial</option>
                                        <option>Land</option>
                                    </select>
                                </div>

                                {/* --- Sort By --- */}
                                <div className="form-group grid-col-span-2">
                                    <label htmlFor="sort">Sort By</label>
                                    <select id="sort">
                                        <option value="" disabled selected></option>
                                        <option>Newest</option>
                                        <option>Price (High to Low)</option>
                                        <option>Price (Low to High)</option>
                                    </select>
                                </div>

                                {/* --- Bedrooms --- */}
                                <div className="form-group">
                                    <label htmlFor="bedrooms">Bedrooms</label>
                                    <select id="bedrooms">
                                        <option>Any Number</option>
                                        <option>1+</option>
                                        <option>2+</option>
                                        <option>3+</option>
                                        <option>4+</option>
                                    </select>
                                </div>

                                {/* --- Baths --- */}
                                <div className="form-group">
                                    <label htmlFor="baths">Baths</label>
                                    <select id="baths">
                                        <option>Any Number</option>
                                        <option>1+</option>
                                        <option>2+</option>
                                        <option>3+</option>
                                    </select>
                                </div>

                                {/* --- Min Price --- */}
                                <div className="form-group">
                                    <label htmlFor="min-price">Min Price</label>
                                    <input type="text" id="min-price" />
                                </div>

                                {/* --- Max Price --- */}
                                <div className="form-group">
                                    <label htmlFor="max-price">Max Price</label>
                                    <input type="text" id="max-price" />
                                </div>

                                {/* --- Search Button --- */}
                                <div className="form-group form-group-submit grid-col-span-2">
                                    <button type="submit" className="search-now-btn">SEARCH NOW</button>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>

            </div>
            <div className="containerplain2">


                <div
                    className="parallax"
                    style={{ backgroundImage: `url(${img6})` }}
                >
                </div>









            </div>

            <div className="containerplain2">




                <div className="partner-logo-strip">
                    <img src={logo1} className="partner-logo" alt="Partner Logo 1" />
                    <img src={logo3} className="partner-logo" alt="Partner Logo 2" />
                    <img src={logo4} className="partner-logo" alt="Partner Logo 3" />
                    <img src={logo5} className="partner-logo" alt="Partner Logo 4" />
                </div>
            </div>


            <div className="containerplain2">
                <h1 className="text_title">Photo Gallery</h1>
                <div className="gridview2" data-aos="fade-left">
                    <br />

                    <div className="grid-container">

                        {/* -- Grid Item 1 -- */}
                        <div className="grid-item">
                            <img src={gal} alt="Avatar" className="image2" />
                        </div>

                        {/* -- Grid Item 2 -- */}
                        <div className="grid-item">
                            <img src={gal2} alt="Avatar" className="image2" />
                        </div>

                        {/* -- Grid Item 3 -- */}
                        <div className="grid-item">
                            <img src={gal3} alt="Avatar" className="image2" />
                        </div>

                        {/* -- Grid Item 4 -- */}
                        <div className="grid-item">
                            <img src={gal4} alt="Avatar" className="image2" />
                        </div>

                    </div>

                </div>

            </div>



            <div className="containerplain2">
                <h1 className="text_title">Our Services</h1>
                <div className="grid-container">

                    <div className="grid-item">
                        <img src={offer3} alt="Avatar" className="image2" />
                        <h3>Real Estate Done Right</h3>offer
                        <p>Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!</p>
                    </div>

                    {/* -- Grid Item 2 -- */}
                    <div className="grid-item">
                        <img src={offer2} alt="Avatar" className="image2" />
                        <h3>Commercial & Residential</h3>
                        <p>Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.</p>
                    </div>

                    {/* -- Grid Item 3 -- */}
                    <div className="grid-item">
                        <img src={offer} alt="Avatar" className="image2" />
                        <h3>Rely on Expertise</h3>
                        <p>If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.</p>
                    </div>

    

                </div>

            </div>

            <div className="containerplain2">
                <footer className="footer-bold">
                    <h2>Ready to Find Your Dream Home?</h2>
                    <p>Let's talk about your future. Get in touch with us today.</p>
                    <a href="#" className="cta-button">Contact Us Now</a>

                    <div className="footer-nav">
                        <a href="#">Home</a>
                        <a href="#">Listings</a>
                        <a href="#">About</a>
                        <a href="#">Blog</a>
                    </div>

                    <div className="footer-copyright">
                        <p>&copy; 2025 Marci Metzger Homes</p>
                    </div>
                </footer>

            </div>


           

        </div>
    );
};

export default App;
