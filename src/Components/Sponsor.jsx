import React from "react";

const Sponsor = () => {
  return (
    <div className="my-8">
      <h1
        data-aos="flip-up"
        data-aos-delay="50"
        data-aos-duration="1500"
        className="text-4xl font-normal text-center my-20"
      >
        Backed by world-class investors and partners
      </h1>
      <div className="flex flex-col md:flex-row lg:flex-row gap-20 justify-center items-center ">
        <img
          data-aos="zoom-in-right"
          data-aos-delay="50"
          data-aos-duration="2000"
          className="w-[100px] h-[100px]"
          src="https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5efa8f47c6178fd2b29210de_first%20round.png"
          alt="sponsor"
        />
        <img
          data-aos="zoom-in-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="w-[200px] h-[100px]"
          src="https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5efa8f47257981290f6013fd_8vc%20white.png"
          alt="sponsor"
        />
        <img
          data-aos="zoom-in-left"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="w-[250px] h-[100px]"
          src="https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5efa8f473672ef81aad53378_startx.png"
          alt="sponsor"
        />
        <h2
          data-aos="zoom-in-left"
          data-aos-delay="50"
          data-aos-duration="2000"
          className="text-7xl font-thin text-center"
        >
          + 33 More
        </h2>
      </div>
    </div>
  );
};

export default Sponsor;
