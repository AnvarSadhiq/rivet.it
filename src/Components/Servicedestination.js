import "./Servicedestination.css";
import React from "react";
import Card from "react-bootstrap/Card";
import Imageone from "../assets/diet-1.png";
import Imagetwo from "../assets/diet-2.png";
import Imagethree from "../assets/diet-3.png";
import Imagefour from "../assets/diet-4.png";
import Imagefive from "../assets/diet-5.png";
import Imagesix from "../assets/diet-6.png";

const Servicedestination = () => {
  return (
    <>
      <div>
        <div className="container servicecontainer1 mb-5">
          <h1 className="servicesheading mb-5 text-center">
            Features of Fit Master
          </h1>
          <div className="row justify-content-center">
            <div className="col-md-4 col-sm-6 text-center">
              <img
                className="serviceimg"
                src={Imagefive}
                alt="Gluten-Free Diets"
              />
              <p className="paragraphheading">
                <b>CERTIFIED TRAINERS</b>
              </p>
              <p>
                Our team of experts provides professional and personalized
                fitness plans.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 text-center">
              <img
                className="serviceimg"
                src={Imagetwo}
                alt="Gluten-Free Diets"
              />
              <p className="paragraphheading">
                <b>ONGOING SUPPORT</b>
              </p>
              <p>
                Receive continuous motivation and support to keep you on track.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 text-center">
              <img
                className="serviceimg"
                src={Imagefive}
                alt="Gluten-Free Diets"
              />
              <p className="paragraphheading">
                <b>100% CASH BACK </b>
              </p>
              <p>If you see no change after 1 month, we offer a full refund.</p>
            </div>
          </div>

          <div className="row justify-content-center mt-3">
            <div className="col-md-4 col-sm-6 text-center">
              <img
                className="serviceimg"
                src={Imagefive}
                alt="Gluten-Free Diets"
              />
              <p className="paragraphheading">
                <b>CUSTOMIZED DIET PLANS</b>
              </p>
              <p>
                Personalized diet plans tailored to your specific goals and
                preferences.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 text-center">
              <img
                className="serviceimg"
                src={Imagefive}
                alt="Gluten-Free Diets"
              />
              <p className="paragraphheading">
                <b>CERTIFIED NUTRITIONISTS</b>
              </p>
              <p>Personalized diet plans from our team of professionals.</p>
            </div>

            <div className="col-md-4 col-sm-6 text-center">
              <img
                className="serviceimg"
                src={Imagefive}
                alt="Gluten-Free Diets"
              />
              <p className="paragraphheading">
                <b>GLUTEN-FREE DIETS</b>
              </p>
              <p>Safe and delicious options for gluten intolerance.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicedestination;
