import React, {useEffect} from 'react';
import './Logo.css';
import { Logo1, Logo2, Logo3, Logo4, Logo6, Logo5 } from '../Image';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Logo = () => {

    useEffect(() => {
        AOS.init({ duration: 700 });
      }, []);

  return (
    <>
    <section className='Logo-section'>
        <div className="container">
            <div className="row col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div data-aos="fade-right" className="Logo-images col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                    <img className='img-fluid' src={Logo1} alt="Logo1" />
                </div>
                <div data-aos="fade-right" className="Logo-images col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                    <img className='img-fluid' src={Logo2} alt="Logo2" />
                </div>
                <div data-aos="fade-down" className="Logo-images col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                    <img className='img-fluid' src={Logo3} alt="Logo3" />
                </div>
                <div data-aos="fade-down" className="Logo-images col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                    <img className='img-fluid' src={Logo4} alt="Logo4" />
                </div>
                <div data-aos="fade-left" className="Logo-images col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                    <img className='img-fluid' src={Logo5} alt="Logo5" />
                </div>
                <div data-aos="fade-left" className="Logo-images col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                    <img className='img-fluid' src={Logo6} alt="Logo6" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Logo