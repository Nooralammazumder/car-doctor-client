import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card bg-base-100 border">
      <figure className="px-6 pt-6">
        <img src={img} alt="Shoes" className="rounded-xl h-[200px] w-[310px]" />
      </figure>
      <div className="card-body">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-red-500 text-lg font-bold">Price : {price} $</p>
        <div className="card-actions justify-between">
          <div>
            <Link to={`/checkout/${_id}`}>
              <button className="btn bg-[#FF3811] text-white">Checkout</button>
            </Link>
          </div>
          <div>
            <Link to={`/book/${_id}`}>
              <button className="btn bg-[#FF3811] text-white">
                <FaArrowRight></FaArrowRight>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
