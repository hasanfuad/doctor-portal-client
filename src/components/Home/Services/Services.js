
import React from "react";
import cavity from "../../images/cavity.png";
import fluride from "../../images/fluride.png";
import whitening from "../../images/tooth whitening.png";
import ServicesCard from "../ServicesCard/ServicesCard";


const servicesInfo = [
  {
    title: "Fluride Treatment",
    description:
      "Lorem ipsum. Donec massa, ligula eget quam aliquet dapibus. ultricies vel venenatis sed, turpis. Donec ut .",
    image: fluride
  },
  {
    title: "Cavity Filling",
    description:
      "Lorem ipsum. vel venenatis sed, ligula eget quam aliquet dapibus. auctor quis turpis. Donec ut porta ligula.",
    image: cavity
  },
  {
    title: "Teath Whitening",
    description:
      "Lorem ipsum ut ligula eget quam aliquet dapibus. ligula eget quam aliquet dapibus.Praesent placerat orci eget.",
    image: whitening
  }
];

const Services = () => {
  return (
    <section className="text-center mt-5">
      <div>
        <h4 style={{ color: "#1cc7c1" }}>OUR SERVICES</h4>
        <h2 className="mt-4">Services We Provide</h2>
      </div>
      <div className="d-flex justify-content-center">
          <div className="row w-75 pt-5 mt-5">
                {
                    servicesInfo.map(servicesData => <ServicesCard servicesData={servicesData}></ServicesCard>)
                }
          </div>
      </div>
    </section>
  );
};

export default Services;
