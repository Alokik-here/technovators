import thomas1 from "../assets/Thomas Edison - 2.jpeg";
import thomas2 from "../assets/Thomas Edison - 3.jpeg";
import ramanujan1 from "../assets/ramanujan-1.jpg";
import ramanujan2 from "../assets/ramanujan-2.jpg";
import bf1 from "../assets/bf-1.jpg";
import bf2 from "../assets/bf-2.jpg";
import rv1 from "../assets/rv-1.jpg";
import rv2 from "../assets/rv-2.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Innovators</h1>
      <p>(Working On)</p>

      <DestinationData
        className="first-des"
        heading="Thomas Edison
      "
        text="Thomas Edison was born in 1847 in Milan, Ohio
        Edison developed hearing problems at the age of 12
         The cause of his deafness has been attributed to a bout of scarlet fever during childhood and recurring untreated middle-ear infections.
        Thomas Alva Edison exerted a tremendous influence on modern life, contributing inventions such as the incandescent light bulb, the phonograph, and the motion picture camera, as well as improving the telegraph and telephone.
        "
        img1={thomas1}
        img2={thomas2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Srinivasa Ramanujan
      "
        text="Srinivasa Ramanujan was born was born on December 22, 1887, in Erode, a small village about 400 km southwest of Madras (now Chennai).
        He was a great Indian mathematician, who never studied a course or completed a proper schooling. He used to study maths all by himself but was a lot lacking in other subject we may say he was fond of doing mathematics. 
        "
        img1={ramanujan1}
        img2={ramanujan2}
      />

<DestinationData
        className="first-des"
        heading="Benjamin Franklin
      "
        text="Franklin was not only the most famous American in the 18th century but also one of the most famous figures in the Western world of the 18th century; indeed, he is one of the most celebrated and influential Americans who has ever lived. Although one is apt to think of Franklin exclusively as an inventor, as an early version of Thomas Edison, which he was, his 18th-century fame came not simply from his many inventions but, more important, from his fundamental contributions to the science of electricity. If there had been a Nobel Prize for Physics in the 18th century, Franklin would have been a contender. "
        img1={bf1}
        img2={bf2}
      />

<DestinationData
        className="first-des-reverse"
        heading="CV Raman
      "
        text="C.V. Raman was an Indian physicist who won the Nobel Prize for Physics in 1930 for his discovery of what became known as the Raman effect. He significantly influenced the growth of science in India through his teaching, his support of nearly every Indian research institution of his time, and his founding of the Indian Academy of Sciences.
        "
        img1={rv1}
        img2={rv2}
      />
    </div>
  );
};

export default Destination;
