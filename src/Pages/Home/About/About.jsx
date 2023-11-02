import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img
            src={person}
            className="w-[450px] h-[450px] rounded-lg shadow-2xl"
          />
          <img
            src={parts}
            className="w-1/2 h-[250px] absolute right-5 top-1/2 rounded-lg border-8 border-white"
          />
        </div>
        <div className="lg:w-1/2 space-y-5 p-10">
          <h3 className="text-3xl text-orange-700 font-bold">About Us</h3>
          <h1 className="text-5xl font-bold">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-warning text-white font-bold">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
