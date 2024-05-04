import React from 'react';
import './ForthPage.css';
import { ForthPageImg, bitcoin, ens, binance, alqo, blockfi, tether } from '../Image';
import UnderLine from '../UnderLine';
import 'aos/dist/aos.css';

const ForthPage = () => {

  return (
    <>
      <section className='ForthPage-section'>
        <div className="container">
          <div className="row col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="forthpageImage col-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
              <img className='img-fluid' src={ForthPageImg} alt="ForthPageImg" />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-5 col-xxl-5 align-items-center justify-content-center text-center d-flex">
              <div className="ForthPage-heading col-12 col-sm-12 col-md-9 col-lg-7 col-xl-12 col-xxl-12">
                <h1>Make Your Life a lot Easier with Crypto Bank</h1>
                <p className='Forth-page-para'>Sociis sit risus id. Sit facilisis dolor fermentum vestibulum arcuulvi maecenas maecenas pharet tincidunt sollicitudin in pellentesque vitae.</p>
                <UnderLine />
                <div className="currency col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <div data-aos="fade-left" className="currency-icon">
                    <img src={binance} alt="" />
                  </div>
                  <div data-aos="fade-left" className="currency-icon">
                    <img src={ens} alt="" />
                  </div>
                  <div className="currency-icon">
                    <img src={tether} alt="" />
                  </div>
                  <div className="currency-icon">
                    <img src={alqo} alt="" />
                  </div>
                  <div data-aos="fade-right" className="currency-icon">
                    <img src={blockfi} alt="" />
                  </div>
                  <div data-aos="fade-right" className="currency-icon">
                    <img src={bitcoin} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default ForthPage
