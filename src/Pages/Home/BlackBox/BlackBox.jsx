import one from "../../../assets/images/box/one.png";
import two from "../../../assets/images/box/two.png";
import three from "../../../assets/images/box/three.png";

export const BlackBox = () => {
  return (
    <div className="flex justify-between bg-black px-10 py-16 rounded-xl my-20 text-white">
      <div className="flex">
        <div className="my-auto mr-4">
          <img src={one} alt="" />
        </div>
        <div>
          <p>We are open monday-friday</p>
          <h3 className="text-2xl font-bold">7:00 am - 9:00 pm</h3>
        </div>
      </div>

      <div className="flex">
        <div className="my-auto mr-4">
          <img src={two} alt="" />
        </div>
        <div>
          <p>Have a question?</p>
          <h3 className="text-2xl font-bold">+2546 251 2658</h3>
        </div>
      </div>

      <div className="flex">
        <div className="my-auto mr-4">
          <img src={three} alt="" />
        </div>
        <div>
          <p>Need a repair? our address</p>
          <h3 className="text-2xl font-bold">Liaz Street, New York</h3>
        </div>
      </div>
    </div>
  );
};
export default BlackBox;
