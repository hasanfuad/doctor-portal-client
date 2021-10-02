import React from "react";
import patient1 from "../../images/patient1.png";
import patient2 from "../../images/patient2.png";
import patient3 from "../../images/patient3.png";
import Testimonials from "../Testimonials/Testimonials";

const testimonialData = [
  {
    name: "Winson Henry",
    address: "California",
    description:
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. dolor sit amet, is Lorem ipsum dolor sit amet, is Lorem ipsum dolor sit amet,is Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet is Lorem ipsum dolor sit amet, consectet",
    image: patient1,
  },
  {
    name: "Winson Menry",
    address: "California",
    description:
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet dolor sit amet, is Lorem ipsum dolor sit amet, is Lorem ipsum dolor sit amet,is Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet is Lorem ipsum dolor sit amet, consectet",
    image: patient2,
  },
  {
    name: "Winson Kenry",
    address: "California",
    description:
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. dolor sit amet, is Lorem ipsum dolor sit amet, is Lorem ipsum dolor sit amet,is Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet is Lorem ipsum dolor sit amet, consectet",
    image: patient3,
  },
];

const Testimonial = () => {
  return (
    <section className="mt-5">
      <div className="mx-5 pl-5">
        <h5 style={{color: "#1cc7c1"}}>TESTIMONIAL</h5>
        <h2 style={{color: "#3a4256"}} className="mt-4">What's Our Patients</h2>
        <br/>
        <h2 style={{color: "#3a4256"}}>Says . .</h2>
      </div>
      <div className="d-flex p-5">
        {testimonialData.map((testimonialData) => (
          <Testimonials testimonialData={testimonialData} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
