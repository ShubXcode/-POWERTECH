import React from 'react';
import './SixthPage.css';

const SixthPoints = (props) => {
    return (
        <>

            <div data-aos="fade-left" className="point">
                <span>{props.point}</span>{props.para}
            </div>
        </>
    )
}

export default SixthPoints