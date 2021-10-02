import React from "react";
import doctor1 from "../../images/patient1.png";
import doctor2 from "../../images/patient2.png";
import EachBlog from "../EachBlog/EachBlog";


const blogData = [
  {
    name: "Rashed Kabir",
    data: "23 april 2021",
    headline: "2 times of brush in a day can Keep you healthy",
    image: doctor2,
    description: "lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt ut labore et dol."
  },
  {
    name: " Dr. John Mitchel",
    data: "23 april 2021",
    headline: "2 times of brush in a day can Keep you healthy",
    image: doctor1,
    description: "lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt ut labore et dol."
  },
  {
    name: "Dr. Caudi",
    data: "20 april 2021",
    headline: "2 times of brush in a day can Keep you healthy",
    image: doctor2,
    description: "lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt ut labore et dol."
  },
];

const Blog = () => {
  return (
    <section className="mx-5 px-5">
      <div>
        <h5>OUR BLOG</h5>
        <h2>From Our Blog News</h2>
      </div>
      <div className="d-flex">
        {blogData.map((blogData) => (
          <EachBlog blogData={blogData} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
