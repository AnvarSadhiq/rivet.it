import React from "react";
import "./Gallerysection.css";
import Card from "react-bootstrap/Card";
import Instaone from "../assets/gallery-1.jpeg";
import Instatwo from "../assets/gallery-2.jpeg";
import Instathree from "../assets/gallery-3.jpeg";
import Instafour from "../assets/gallery-4.jpeg";
import Instafive from "../assets/gallery-5.jpeg";
import Instasix from "../assets/gallery-6.jpeg";
import Instaseven from "../assets/gallery-7.jpeg";
import Instaeight from "../assets/gallery-8.jpeg";
import Instanine from "../assets/gallery-9.jpeg";
import WtspIcon from "../assets/whatsapp-logo.png";
function Gallerysection() {
  return (
    <div class="container">
      <h1 class="Homecardheading mt-5 mb-5 text-center">Watch Photo Gallery</h1>

      <div className="row">
        <div className="col-md-4 col-sm-12">
          <a
            href="https://www.instagram.com/rivet.it?igsh=MXRwYnRsb29nYXMzNw=="
                target="_blank"
          >
            <Card.Img className="clientimage" variant="top" src={Instaone} />
          </a>
        </div>

        <div className="col-md-4 col-sm-12">
          <a
            href="https://www.instagram.com/rivet.it?igsh=MXRwYnRsb29nYXMzNw=="
                target="_blank"
          >
            <Card.Img className="clientimage" variant="top" src={Instatwo} />
          </a>
        </div>

        <div className="col-md-4 col-sm-12">
          <a
           href="https://www.instagram.com/rivet.it?igsh=MXRwYnRsb29nYXMzNw=="
                target="_blank"
          >
            <Card.Img className="clientimage" variant="top" src={Instathree} />
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 col-sm-12">
          <a
            href="https://www.instagram.com/rivet.it?igsh=MXRwYnRsb29nYXMzNw=="
                target="_blank"
          >
            <Card.Img className="clientimage" variant="top" src={Instafour} />
          </a>
        </div>

        <div className="col-md-4 col-sm-12">
          <a
            href="https://www.instagram.com/rivet.it?igsh=MXRwYnRsb29nYXMzNw=="
                target="_blank"
          >
            <Card.Img className="clientimage" variant="top" src={Instafive} />
          </a>
        </div>

        <div className="col-md-4 col-sm-12">
          <a
            href="https://www.instagram.com/rivet.it?igsh=MXRwYnRsb29nYXMzNw=="
                target="_blank"
          >
            <Card.Img className="clientimage" variant="top" src={Instasix} />
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 col-sm-12">
          <a
            href="https://www.instagram.com/rivet.it?igsh=MXRwYnRsb29nYXMzNw=="
                target="_blank"
          >
            <Card.Img className="clientimage" variant="top" src={Instaseven} />
          </a>
        </div>

        <div className="col-md-4 col-sm-12">
          <a
            href="https://www.instagram.com/rivet.it?igsh=MXRwYnRsb29nYXMzNw=="
                target="_blank"
          >
            <Card.Img className="clientimage" variant="top" src={Instaeight} />
          </a>
        </div>

        <div className="col-md-4 col-sm-12">
          <a
            href="https://www.instagram.com/rivet.it?igsh=MXRwYnRsb29nYXMzNw=="
                target="_blank"
          >
            <Card.Img className="clientimage" variant="top" src={Instanine} />
          </a>
        </div>
      </div>


      <h1 class="Homecardheading mt-5 mb-5 text-center">Watch Video Gallery</h1>
      <div class="row py-5">
        <div class="col-md-4 col-sm-12 mb-4 d-flex align-items-center justify-content-center">
          <div class="embed-responsive-shorts">
            <iframe
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/atc702E_w_s"
              allowfullscreen
              title="YouTube Shorts Video 1"
            ></iframe>
          </div>
        </div>
        <div class="col-md-4 col-sm-12 mb-4 d-flex align-items-center justify-content-center">
          <div class="embed-responsive-shorts">
            <iframe
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/d73kmza5mSI"
              allowfullscreen
              title="YouTube Video 2"
            ></iframe>
          </div>
        </div>
        <div class="col-md-4 col-sm-12 mb-4 d-flex align-items-center justify-content-center">
          <div class="embed-responsive-shorts">
            <iframe
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/fj3LaxMoiCw"
              allowfullscreen
              title="YouTube video 3"
            ></iframe>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 col-sm-12 mb-4 d-flex align-items-center justify-content-center">
          <div class="embed-responsive-shorts">
            <iframe
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/Z3XitcoN6FU"
              allowfullscreen
              title="YouTube Shorts Video 4"
            ></iframe>
          </div>
        </div>
        <div class="col-md-4 col-sm-12 mb-4 d-flex align-items-center justify-content-center">
          <div class="embed-responsive-shorts">
            <iframe
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/wMyKHwq81A8"
              allowfullscreen
              title="YouTube Video 5"
            ></iframe>
          </div>
        </div>
        <div class="col-md-4 col-sm-12 mb-4 d-flex align-items-center justify-content-center">
          <div class="embed-responsive-shorts">
            <iframe
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/fj3LaxMoiCw"
              allowfullscreen
              title="YouTube video 6"
            ></iframe>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/917025040484?text= Hi! I was browsing the website blog and wanted to know more about kerala dietition"
        target="_blank"
      >
        <button className="homeimgbtn1">
          <img className="followicons" src={WtspIcon} />
          Enquire Now
        </button>
      </a>
    </div>
  );
}

export default Gallerysection;
