import React from 'react';
import './FifthPage.css';
import 'aos/dist/aos.css';

const FifthPage = () => {
    return (
        <>
            <section className='FifthPage-section'>
                <div className="container">
                    <div className="row col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 justify-content-center">
                        <div className="FifthPage-heading col-12 col-sm-12 col-md-9 col-lg-7 col-xl-6 col-xxl-6 text-center">
                            <h1>How Does It Work?</h1>
                            <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit volutpat mollis egestas nam luctus facilisis ultrices</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-5 d-flex text-center">
                        <div data-aos="fade-left" className="Registration col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 justify-content-center d-flex">
                            <div className="circle mb-4"><div className="first1">1</div></div>
                            </div>
                            <h3>Registration</h3>
                            <p className='mt-2'>Massa enim libero dictumst consectetur in convallis lobortis</p>
                        </div>
                        <div data-aos="fade-right" className="Registration col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 justify-content-center d-flex">
                            <div className="circle mb-4"><div className="first1">2</div></div>
                            
                            </div>
                            <h3>Identity verification</h3>
                            <p className='mt-2'>At ultricies id non quisque integer eget velit. Facilisis enim</p>
                        </div>
                        <div data-aos="fade-left" className="Registration col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 justify-content-center d-flex">
                            <div className="circle mb-4"><div className="first1">3</div></div>
                            </div>
                            <h3>Start trading</h3>
                            <p className='mt-2'>Pellentesque rhoncus viverra vestibulum, purus purus</p>
                        </div>
                        <div data-aos="fade-right" className="Registration col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 justify-content-center d-flex">
                            <div className="circle mb-4"><div className="first1">4</div></div>
                            </div>
                            <h3>Earn with us</h3>
                            <p className='mt-2'>Massa enim libero dictumst consectetur in convallis lobortis</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default FifthPage
