import React from 'react';
import './SecondPage.css';
import 'aos/dist/aos.css';

const SecondPage = () => {
  return (
    <section className='secondPage-section'>
      <div className="container">
      <div className="row col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 justify-content-center align-items-center">
        <div className="secondPage-Heading col-12 col-sm-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6 text-center justify-content-center">
          Get Possibilities for Better Trading with <span >POWER<span className='span1' data-aos="fade-left">TECH</span></span>
        </div>
        <div className="row col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 justify-content-center mt-4 align-items-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-11 col-xl-10 col-xxl-10 text-center align-items-center justify-content-center d-flex">
            <div className="points" data-aos="fade-left">
              Spend with the Crypto and get up to <span style={{ marginLeft: '5px', marginRight: '35px' }}>12% back</span>Invite friends and get <span style={{ marginLeft: '5px' }}>new opportunities</span>
            </div>
          </div>
        </div>
        <div className="row col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 justify-content-center mt-3 align-items-center">
          <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10 text-center align-items-center justify-content-center d-flex">
            <div className="points" data-aos="fade-right">
              Trade and earn <span style={{ marginLeft: '5px' }}>200+ cryptocurrencies</span> and get a permanent <span style={{ marginLeft: '5px' }}>5% discount</span>
            </div>
          </div>
        </div>
        
      </div>
      </div>
    </section>
  )
}

export default SecondPage