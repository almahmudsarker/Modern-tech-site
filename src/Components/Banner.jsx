import React from "react";
import Container from "../Container";

const Banner = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row lg:flex-row gap-10 items-center justify-center h-[500px] my-12">
        <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
          <h1 className="text-5xl font-bold text-white w-[400px]">
            The Intelligence Amplification Company
          </h1>
          <p className="text-xl font-semibold text-white w-[650px] my-8">
            We’re creating an ecosystem for humans and machines to work together
            to solve the world’s most important problems <br />– starting with a
            notebook that augments your intelligence.
          </p>
          <button className="px-4 mr-2 py-2 mt-8 text-base font-medium text-white bg-transparent hover:text-black rounded-md hover:bg-white">
            Try Ideaflow Notes
          </button>
          <button className="px-4 mr-2 py-2 mt-8 text-base font-medium text-white bg-transparent hover:text-black rounded-md hover:bg-white">
            ios
          </button>
          <button className="px-4 mr-2 py-2 mt-8 text-base font-medium text-white bg-transparent hover:text-black rounded-md hover:bg-white">
            Guide
          </button>
          <button className="px-4 mr-2 py-2 mt-8 text-base font-medium text-white bg-transparent hover:text-black rounded-md hover:bg-white">
            Twitter
          </button>
          <button className="px-4 py-2 mt-8 text-base font-medium text-white bg-transparent hover:text-black rounded-md hover:bg-white">
            Newsletter
          </button>
        </div>
        <div>
          <div data-aos="fade-in" data-aos-delay="100" data-aos-duration="2000">
            <img
              className="object-contain w-[450px] h-[450px]"
              src="https://i.ibb.co/RSVCFgv/particle-head-white.png"
              alt="banner"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
