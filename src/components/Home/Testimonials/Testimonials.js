import React from 'react';
import "./Testimonials.css";

const Testimonials = ({testimonialData}) => {
    return (
        <section className="container testimonial mx-5">
            <small className="">{testimonialData.description}</small>
            <div className="d-flex mt-5">
            <div>
                <img style={{width: "70%"}} src={testimonialData.image} alt="patient-review"/>
            </div>
            <div className="mx-4">
                <h5 style={{color: "#1cc7c1"}}>{testimonialData.name}</h5>
                <p style={{textAlign: "left"}}>{testimonialData.address}</p>
            </div>
            </div>
        </section>
    );
};

export default Testimonials;