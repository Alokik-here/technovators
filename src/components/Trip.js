import "./TripStyles.css";
import TripData from "./TripData";
import HF2 from "../assets/Henry Fischel - 2.jpeg";
import AM2 from "../assets/Antonio Meucci - 2.jpeg";
import Trip3 from "../assets/Ralph Baer - 2.jpeg";
import garbage from "../assets/Charles Babbage - 1.jpeg";

function Trip() {
  return (
    <div className="trip">
      <h1>More Inventors</h1>
      <p>(working on)</p>
      <div className="tripcard">
        <TripData image={HF2} heading="Henry Fischel" text="" />

        <TripData image={AM2} heading="Antonio Meucci" text="" />

        <TripData image={Trip3} heading="Ralph Baer" text="" />
        
        <TripData image={garbage} heading="Charles Babbage" text="" />

      </div>
    </div>
  );
}

export default Trip;
