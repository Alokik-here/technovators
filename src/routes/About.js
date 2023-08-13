import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import logo from "../assets/technovatorslogo1.png";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero  heroImg={logo} />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
