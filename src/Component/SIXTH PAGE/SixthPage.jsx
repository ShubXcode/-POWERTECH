import React from 'react';
import './SixthPage.css';
import 'aos/dist/aos.css';
import SixthPoints from './SixthPoints';

const SixthPage = () => {
  return (
    <>
      <section className='SixthPage-section'>
        <div className="container" >
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-center text-center">
            <div className="journey col-12 col-sm-12 col-md-9 col-lg-7 col-xl-5 col-xxl-5">
              <h1>Start your Trading with <span>POWER<span className='span1'>TECH</span></span></h1>
            </div>
          </div>

          <div className="row col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-5">
            <div className="SixthPage-heading col-12 col-sm-12 col-md-10 col-lg-6 col-xl-6 col-xxl-6">
              <div className="col-12 col-sm-12 col-md-9 col-lg-12 col-xl-10 col-xxl-9">
                <h1>Let's start your investing easier now!</h1>
                <div className="StartTrail col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mt-4">
                  Start trail now
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 align-items-start d-flex justify-content-center">
            <div className="SixthPage-pointS">
              <SixthPoints point="1" para="Purus vestibulum pharetra amet tincidunt pretium."/>
              <SixthPoints point="2" para="Haretra justo magna pharetra dui gravida sed nec."/>
              <SixthPoints point="3" para="Venenatis risus faucibus volutpat amet feugiat a."/>
              <SixthPoints point="4" para="Purus vestibulum pharetra amet tincidunt pretium."/>
            </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default SixthPage
