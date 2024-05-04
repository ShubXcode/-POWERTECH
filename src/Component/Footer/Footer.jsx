import React from 'react';
import './Footer.css';
import 'aos/dist/aos.css';
import {github,facebook,instagram,behance,twitter} from '../Image';

const Footer = () => {
    return (
        <>
            <section className='Footer-section'>
                <div className="container">
                    <div  data-aos="fade-up" className="Footer-page row col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="socialMedia col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex align-items-center">
                            <div className="getConnect col-7 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 d-flex justify-content-start">
                                Get connected with us on Social networks :
                            </div>
                            <div className="mediaIcon col-5 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div className="Footer-icon col-12 col-sm-10 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <img src={github} alt="" />
                                <img src={facebook} alt="" />
                                <img src={behance} alt="" />
                                <img src={instagram} alt="" />
                                <img src={twitter} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="FooterTab col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex">
                            <div className="footer-BrandName col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                <div>POWER<span>TECH</span>
                                <p className='col-11 col-sm-11 col-md-11 col-lg-10 col-xl-9 col-xxl-9'>Trade with confidence, guided by our experienced team.</p></div>
                            </div>
                            <div className="FooterColomn col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                <div><p><span>CURREN</span>CY</p>
                                <li className=''>Bitcoin (BTC)</li>
                                <li>Ethereum (ETH)</li>
                                <li>Ripple (XRP)</li>
                                <li>Litecoin (LTC)</li></div>
                            </div>
                            <div id='footerColomn2' className="FooterColomn col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                <div><p><span>USEFUL L</span>INKS</p>
                                <li className=''>Your Account</li>
                                <li>Accessibility</li>
                                <li>Support</li>
                                <li>Help</li></div>
                            </div>
                            <div className="FooterColomn col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                <div><p><span>CONTAC</span>T</p>
                                <li className='align-items-start d-flex'><span class="material-symbols-outlined">
                                    location_city
                                </span>Indore IDR 452010.</li>
                                <li className='align-items-start d-flex'><span class="material-symbols-outlined">
                                    mail
                                </span>info@poertech.com</li>
                                <li className='align-items-start d-flex'><span class="material-symbols-outlined">
                                    phone_iphone
                                </span>+91 88270-5950</li>
                                <li className='align-items-start d-flex'><span class="material-symbols-outlined">
                                    call
                                </span>0731 8870-579</li>
                            </div></div>
                        </div>
                        <div className="Copyright col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            © 2023 Copyright All rights reserved : POWERTECH
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Footer
