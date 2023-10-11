import React from "react";

const Ad = () => {
  return (
    <div className="gif text-center my-32 h-[180px]">
      <h1
        data-aos="fade-left"
        data-aos-duration="1000"
        className="text-4xl font-medium py-4"
      >
        We're Hiring Key Roles
      </h1>
      <p
        data-aos="fade-right"
        data-aos-duration="2000"
        className="text-sm font-thin"
      >
        Help us extend the human mind.
      </p>
      <button
        data-aos="fade-in"
        data-aos-duration="3000"
        className="bg-[#0a0a0a] text-white hover:bg-white hover:text-black rounded-xl px-10 py-2 mt-5"
      >
        Join us or refer someone!
      </button>
    </div>
  );
};

export default Ad;
