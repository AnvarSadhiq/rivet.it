import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Imagefive from "../assets/rivet-logo-white.png";
import "./Homesecound.css";

function Homesecound() {
  return (
    <div className="bgcolor d-flex align-items-center justify-content-center vh-100 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <img src={Imagefive} alt="/" className="Homesecoundimg" />
          </div>
          <div className="col-md-6 col-sm-12">
            <h4 className="homesecoundheading">Welcome to Rivet.it Mehandi</h4>
            <p className="homesecoundparagraph mt-5">
              Welcome to the innovative world of henna art & design.Mehndi Creations
              offers a highly personalised and bespoke service to suit your
              individual needs and budgets.
            </p>

            <div>
              <a
                href="https://wa.me/917025040484?text= Hi! I was browsing the website blog and wanted to know more about rivet.it"
                target="_blank"
              >
                <button className="homeimgbtn2">Chat Now</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homesecound;
