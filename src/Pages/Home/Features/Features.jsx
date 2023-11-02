import group from "../../../assets/icons/group.svg";
import delivery from "../../../assets/icons/Group 38729.png";
import person from "../../../assets/icons/person.svg";
import Wrench from "../../../assets/icons/Wrench.svg";
import check from "../../../assets/icons/check.svg";
import deliveryt from "../../../assets/icons/deliveryt.svg";

const Features = () => {
  return (
    <div className="py-10">
      <div className="text-center">
        <h2 className="text-xl font-bold text-orange-600">Core Features</h2>
        <h3 className="text-5xl font-bold py-3">Why Choose Us</h3>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="flex justify-between mt-10">
        <div className="border rounded-xl w-[180px] h-[150px] items-center p-5 bg-red-100 hover:bg-[#FF3811] hover:text-white">
          <img src={group} className="mx-auto" alt="" />
          <h4 className="text-lg text-center font-bold mt-3">Expert Team</h4>
        </div>
        <div className="border rounded-xl w-[180px] h-[150px] items-center p-5 bg-red-100 hover:bg-[#FF3811] hover:text-white">
          <img src={delivery} className="mx-auto text-black" alt="" />
          <h4 className="text-lg text-center font-bold mt-3">
            Timely Delivery
          </h4>
        </div>
        <div className="border rounded-xl w-[180px] h-[150px] items-center p-5 bg-red-100 hover:bg-[#FF3811] hover:text-white">
          <img src={person} className="mx-auto" alt="" />
          <h4 className="text-lg text-center font-bold mt-3">24/7 Support</h4>
        </div>
        <div className="border rounded-xl w-[180px] h-[150px] items-center p-5 bg-red-100 hover:bg-[#FF3811] hover:text-white">
          <img src={Wrench} className="mx-auto" alt="" />
          <h4 className="text-lg text-center font-bold mt-3">Best Equipment</h4>
        </div>
        <div className="border rounded-xl w-[180px] h-[150px] items-center p-5 bg-red-100 hover:bg-[#FF3811] hover:text-white">
          <img src={check} className="mx-auto" alt="" />
          <h4 className="text-lg text-center font-bold mt-3">100% Guarante</h4>
        </div>
        <div className="border rounded-xl w-[180px] h-[150px] items-center p-5 bg-red-100 hover:bg-[#FF3811] hover:text-white">
          <img src={deliveryt} className="mx-auto" alt="" />
          <h4 className="text-lg text-center font-bold mt-3">
            Timely Delivery
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Features;
