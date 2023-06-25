import React from 'react';
import 'aos/dist/aos.css';
import {SecondPageImg} from '../Image';

const SecondPageImage = () => {
  return (
    <>
    <section style={{backgroundColor:'#0d0f1b'}}>
    <div className="row col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 justify-content-center">
          <div className="SecondImage justify-content-center d-flex">
            <img className='img-fluid' src={SecondPageImg} alt="SecondPageImg" />
          </div>
        </div>
    </section>
    </>
  )
}

export default SecondPageImage