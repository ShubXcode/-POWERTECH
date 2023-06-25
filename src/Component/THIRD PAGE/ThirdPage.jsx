import React, { useEffect } from 'react';
import './ThirdPage.css';
import UnderLine from '../UnderLine';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {ThirdPageImg} from '../Image';

const ThirdPage = () => {

    useEffect(() => {
        AOS.init({ duration: 600 });
    }, []);

    return (
        <>
            <section className='ThirdPage-section'>
                <div className="container">
                    <div className="row col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 align-items-center">
                        <div className="ThirdPage-heading col-12 col-sm-12 col-md-12 col-lg-6 col-xl-5 col-xxl-5">
                            <h1>Explore Opportunities with <span>POWER<span className='span1'>TECH</span></span></h1>
                            <p className='mt-4 mb-4'>In blandit luctus proin mauris a commodo, dolor diam tempus, aenean magna fusce eu. Id porttitor aliquam eget aliquet sagittis eu aut diam ut phasellus sed convallis iaculis neque ultricies convallis sed enim.</p>
                            <UnderLine />
                            <div className="remark mt-5">
                                <div className="23%" data-aos="fade-right">
                                    <h1>23%</h1>
                                    Nulla venenatis everys
                                </div>
                                <div className="132b" data-aos="fade-left">
                                    <h1>132b</h1>
                                    Dictum in marko elementum
                                </div>
                            </div>
                        </div>
                        <div className="ThirdPage-Image col-6 col-sm-6 col-md-6 col-lg-6 col-xl-7 col-xxl-7 justify-content-end d-flex">
                            <img className='img-fluid' src={ThirdPageImg} alt="ThirdPageImg" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ThirdPage