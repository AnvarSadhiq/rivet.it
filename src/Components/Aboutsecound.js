import React from "react";
import "./Aboutsecound.css";
import Card from "react-bootstrap/Card";
import Imageone from "../assets/henna-1.jpeg";
import Imagetwo from "../assets/corn-2.jpeg";
import ReactDOM from "react-dom/client";
// import Aboutsecoundimg from "../assets/aboutsecoundimg.jpg";

function Aboutsecound() {
  return (
    <div>
      <div className="container">
        <h1 className="Homecardheading mt-5 mb-5">
          Services
        </h1>
        <div className="row py-5">
          <div className="col-md-6 col-sm-12">
            <Card style={{ marginBottom: "20px", height: "300px" }}>
              <Card.Body>
                <Card.Title
                  style={{ color: "#5a9f53", textDecoration: "uppercase" }}
                >
                  MEHANDI ARTIST
                </Card.Title>

                <Card.Text>
                  <Card.Img className="hennaimg" variant="top" src={Imageone} />
                  <br /> <br />
                  Traditional Designs and Modern Trends
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-6 col-sm-12">
            <Card style={{ marginBottom: "20px", height: "300px" }}>
              {/* <Card.Img variant="top" src={Imagetwo} /> */}

              <Card.Body>
                <Card.Title style={{ color: "#5a9f53" }}>
                  ORGANIC HENNACONES
                </Card.Title>

                <Card.Text>
                  <Card.Img className="cornimg" variant="top" src={Imagetwo} />
                  <br />
                  <br />
                  Henna paste made from 100% natural and organic ingredients.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Aboutsecound;
