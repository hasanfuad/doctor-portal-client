import React from "react";
import "./ServiceCard.css";

const ServicesCard = ({ servicesData }) => {
  return (
    <div className="col-md-4 text-center service-container">
      <img src={servicesData.image} alt={servicesData.image} />
      <h6 className="mt-5">{servicesData.title}</h6>
      <p style={{width: "90%", textAlign: "left"}} className="mt-4 text-center text-secondary">{servicesData.description}</p>
    </div>
  );
};

export default ServicesCard;
