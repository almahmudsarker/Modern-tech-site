import React from "react";

const AdCard = () => {
  return (
    <div className="card w-[600px] h-[550px] rounded-xl hover:shadow-md text-white bg-[#0a0a0a] px-16 mb-32">
      <h2 className="card-title text-4xl font-semibold p-10">
        People-centric policies
      </h2>
      <div className="flex flex-row gap-5 items-center">
        <figure className="py-4 pl-8">
          <img
            className="w-[100px] h-[100px] rounded-full"
            src="https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5f0376b566db7046ec445d0b_Mindfulness.png"
            alt=""
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-extralight text-xl">
            $500 per month promote well being
          </h2>
        </div>
      </div>
      <div className="flex flex-row gap-5 items-center">
        <figure className="py-4 pl-8">
          <img
            className="w-[100px] h-[100px] rounded-full"
            src="https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5f0376b511987176d4ccc9a1_Health.png"
            alt=""
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-extralight text-xl">
            Comprehensive healthcare coverage !
          </h2>
        </div>
      </div>
      <div className="flex flex-row gap-5 items-center">
        <figure className="py-4 pl-8">
          <img
            className="w-[100px] h-[100px] rounded-full"
            src="https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5f0376b5391a95318ea1e028_Donation%20matching.png"
            alt=""
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-extralight text-xl">
            Donation matching to charities
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AdCard;
