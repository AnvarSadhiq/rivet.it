import "./Footers.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import WtspIcon from "../assets/whatsapp-logo.png";
import Footer_logo from "../assets/rivet-logo-white.png";
import InstaIcon from "../assets/Instagram-logo.png";

const Footers = () => {
  return (
    <div className="footerstyle">
      <div className="container">
        <div className="row py-5 ">
          <div className="col-md-4 col-sm-12">
            <img src={Footer_logo} alt="" className="footerlogo" />
          </div>
          <div className="col-md-4 col-sm-12 mt-5">
            
            
          </div>
          <div className="col-md-4 col-sm-12 mt-5">
            <h4 className="headingstyle">FOLLOW US</h4>
            <p>
              <a href="https://wa.me/917025040484?text= Hi! I was browsing the website blog and wanted to know more about revet.it" target="_blank">
              <img className="followicon" src={WtspIcon} />
              </a>
              <a
                href="https://www.instagram.com/rivet.it?igsh=MXRwYnRsb29nYXMzNw=="
                target="_blank"
              >
                <img className="followicon" src={InstaIcon} />
              </a>
            </p>
          </div>
        </div>
        {/* <p className="copyrightstyle pb-3">@Copyright Code with Convo</p> */}
      </div>
    </div>
  );
};
export default Footers;
