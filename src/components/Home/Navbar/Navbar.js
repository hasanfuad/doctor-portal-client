import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link mr-5" href="#google">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-5" href="#youtube">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-5" href="#youtube">
                Dental Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-5 text-white" href="#youtube">
                Reviews
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-5 text-white" href="#youtube">
                Blog
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-5 text-white" href="#youtube">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
