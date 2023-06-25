import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
    <div className="NavMain-container">
    <section className='Navbar-Section'style={{borderBottom:'1px solid #2d3139'}}>
      <div className="container">
        <div className="row col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="BrandName col-6 col-sm-6 col-md-6 col-lg-3 col-xl-2 col-xxl-2">
            POWER<span>TECH</span>
          </div>
          <div className="NavTab col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5 d-flex">
            <li className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3'>Landing</li>
            <li className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3'>Pages</li>
            <li className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3'>Account</li>
            <li className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3'>Docs</li>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-5 col-xxl-5 align-items-center justify-content-end d-flex">
            <div className="Buynow">
            Buy now
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    </>
  )
}

export default Navbar
