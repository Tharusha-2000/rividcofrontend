import React, { useEffect } from "react";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/lib/animate/animate.min.css";
import "../assets/lib/owlcarousel/assets/owl.carousel.min.css";
import "../assets/lib/lightbox/css/lightbox.min.css";
import TeamSection from "../components/TeamSection";

const TeamPage = () => {
  
  useEffect(() => {
    // Initialize WOW.js for animations
    const WOW = require("wowjs");
    new WOW.WOW({ live: false }).init();
  }, []);

  return (
    <>
      {/* Page Header */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">Our Team</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Pages
                </a>
              </li>
              <li className="breadcrumb-item text-white active" aria-current="page">
                Our Team
              </li>
            </ol>
          </nav>
        </div>
      </div>
        {/* Page Header End */}

    {/* Team Section */}
      <TeamSection />
    </>
  );
};

export default TeamPage;
