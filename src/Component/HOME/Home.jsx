import React from 'react';
import './Home.css';
import { Homeimg, Review } from '../Image';

const Home = () => {
    return (
        <>
            <section className='Home-section'>
                <div className="container">
                    <div className="row col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 align-items-center">
                        <div className="heading col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <h2 className='mb-4'>
                                Make Your Life Even Easier with <span>Crypto</span> Bank
                            </h2>
                            <p>Odio venenatis a, non egestas ut ultrices ultrices quis orci ipsum eu tellus tempor sed amet mauris pellentesque ut vitae.</p>
                            <div className="buttons col-7 col-sm-7 col-md-6 col-lg-9 col-xl-8 col-xxl-7 mt-4 d-flex">
                                <div className="startTrail">
                                    Start trail now
                                </div>
                                <div className="contact">
                                    Contact us
                                </div>
                            </div>
                            <div className="Review col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-5 align-items-center">
                            <img src={Review} alt="Review" />
                            <div className="reviewLine"><span>900k+</span>users already with us.</div>
                        </div>
                        </div>
                        <div className="Home-img col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 d-flex  justify-content-end">
                            <img src={Homeimg} alt="HomeImage" />
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home