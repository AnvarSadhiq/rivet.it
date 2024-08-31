import Navbar from "../Components/Navbar";
import Footers from "../Components/Footers";
import ServiceImg from "../assets/corn-1.jpeg";
import Gallerysection from "../Components/Gallerysection";
// import Clientside from "../Clientside";

function Gallery() {
  return (
    <>
      <Navbar />
      <div>
        <img className="home-img" alt="" src={ServiceImg} />
        <div className="home-text">
          {/* <h2>Welcome to</h2> */}
          <h1>GALLERY</h1>
          <p className="paragraph-text">
            We are confident in our ability to help you achieve your goals. If
            you see no change after 1 month, we offer a full refund.
          </p>
        </div>
      </div>
      <Gallerysection />

      <Footers />
    </>
  );
}

export default Gallery;
