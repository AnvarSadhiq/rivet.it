import "./Aboutdestination.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import gridImage from "../assets/grid-image.png";
const Aboutdestination = () => {
  return (
    <div className="bgcolors">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 mt-5">
            <h4 className="aboutheading">ABOUT US</h4>
            <p className="aboutparagraph">
              Mehndi Creations are a new generation of artists, using unique
              techniques together with natural ingredients for the mehndi,
              
              to
              add depth to its colour for your special occasions to last for
              days to come.
            </p>

            <div>
              <a
                href="https://wa.me/917025040484?text= Hi! I was browsing the website blog and wanted to know more about rivet.it"
                target="_blank"
              >
                <div className="div_style mb-3">
                  100+ <br />
                  Happy Clients
                </div>
              </a>

              <span className="snapstyle">
                <a
                  href="https://wa.me/917025040484?text= Hi! I was browsing the website blog and wanted to know more about rivet.it"
                  target="_blank"
                >
                  <div className="div_style mb-3">
                    100% <br />
                    Good Service
                  </div>
                </a>
              </span>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 mb-3 mt-3">
            <img src={gridImage} alt="/" className="Homesecoundimg" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Aboutdestination;
