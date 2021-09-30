import React from "react";
import "./ServiceCard.css";

const ServicesCard = ({ servicesData }) => {
  return (
    <div className="col-md-4 text-center service-container">
      <img src={servicesData.image} alt={servicesData.image} />
      <h6 className="mt-4">{servicesData.title}</h6>
      <small style={{color: "#3a4256"}}>{servicesData.description}</small>
    </div>
  );
};

export default ServicesCard;
