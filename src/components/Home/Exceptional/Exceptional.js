import React from "react";
import exceptImage from "../../images/exceptional.png";

const Exceptional = () => {
  return (
    <section className="container" style={{ height: "500px" }}>
      <div className="row d-flex">
        <div className="col-md-6">
          <img
            className="w-75 fluid"
            style={{ height: "450px" }}
            src={exceptImage}
            alt=""
          />
        </div>
        <div className="col-md-5">
          <h2>Exceptional Dental Care, on Your Terms</h2>
          <p className="mt-4 text-secondary" style={{ lineHeight: "2" }}>
            lorem21 is Lorem ipsum dolor sit amet, consectet lorem21 is Lorem
            ipsum dolor sit amet, consectetlorem21 is Lorem ipsum dolor sit
            amet, consectetlorem21 is Lorem ipsum dolor sit amet,
            consectetlorem21 is Lorem ipsum dolor sit amet, consectetlorem21 is
            Lorem ipsum dolor sit amet, consectetlorem21 is Lorem ipsum dolor
            sit amet, consectet
          </p>
          <button
            style={{ backgroundColor: "#1CC7C1", border: "none" }}
            className="btn btn-primary mt-5"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Exceptional;
