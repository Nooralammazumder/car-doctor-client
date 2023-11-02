import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const service = useLoaderData();
  const { title, _id } = service;
  return (
    <div className="my-10">
      <h3 className="text-3xl font-bold mx-auto p-3 rounded-bl-full rounded-tr-full text-center w-[550px] mb-9 bg-[#FF3811] text-white">
        Checkout : {title}
      </h3>
      <form className="p-20 bg-[#F3F3F3] rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <input
              type="text"
              placeholder="First Name"
              className="input"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Last Name"
              className="input"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="number"
              placeholder="Your Phone"
              className="input"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="email"
              placeholder="Your Email"
              className="input"
              required
            />
          </div>
        </div>
        <div className="form-control mt-5">
          <input
            type="text"
            placeholder="Your Message"
            className="top-4 pl-5 pb-32 rounded-lg h-[200px]"
            required
          />
        </div>
        <div className="form-control mt-6">
          <input
            className="btn bg-[#FF3811] text-white btn-block"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
