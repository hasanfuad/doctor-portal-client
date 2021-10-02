import React from 'react';
import Blog from '../Blog/Blog';
import Exceptional from '../Exceptional/Exceptional';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <Exceptional/>
            <MakeAppointment/>
            <Testimonial/>
            <Blog/>
        </div>
    );
};

export default Home;