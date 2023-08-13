import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
 //import Trip from "../components/Trip";
import logo from "../assets/technovatorslogo1.png"
import "./style.css";


function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={logo}
        // title="Technovators"
        // text="Our Mission, Our Vision"
        btnClass="show"
      />
      <Destination />
      {/* <Trip /> */}
      <Footer />
    </>
  );
}

export default Home;
