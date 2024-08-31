import Navbar from "../Components/Navbar";
import Footers from "../Components/Footers";
import Homesecound from "../Components/Homesecound";
import Homepage from "../Components/Homepage";
import Aboutdestination from "../Components/Aboutdestination";
import Gallerysection from "../Components/Gallerysection";
import Aboutsecound from "../Components/Aboutsecound";

function Home() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Homesecound />
      <Aboutdestination />
      <Aboutsecound />
      <Gallerysection />
      {/* <Homecards />
      <Homefeatures /> */}
      {/* <Offers /> */}
      {/* <Experience /> */}
      <Footers />
    </>
  );
}

export default Home;
