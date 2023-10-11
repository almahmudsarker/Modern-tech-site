import React from "react";

const Articles = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row lg:flex-row space-x-48 my-32 p-5">
        <img
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1000"
          src="https://i.ibb.co/F5zdjmR/tumblr-19c5dddfe73201a61b8bdc2c0be7ee55-17a71f78-500.gif"
          alt="banner"
          className="w-[500px] h-96 object-cover p-10 ml-5"
        />
        <div data-aos="fade-up" data-aos-duration="3000">
          <h1 className="text-4xl font-bold text-right w-96 py-8">
            Connecting people with matching puzzle pieces
            <hr />
          </h1>
          <p className="text-right w-96">
            {" "}
            There are millions of scientists trying to cure the likes of AIDS
            and Alzheimer’s. Maybe the cure is currently separated in different
            people’s heads. How can we design the web so that these half-formed
            solutions can come together? ‍
            <br />- Sir Tim Berners-Lee, Creator of the Web
          </p>
        </div>
      </div>
      <div className="px-20">
        <div className="flex flex-col md:flex-row lg:flex-row mt-32 space-x-80 p-5">
          <div data-aos="fade-up" data-aos-duration="3000">
            <h1 className="text-4xl font-bold text-left w-56 py-4">
              The auto-suggest layer for human thinking
              <hr />
            </h1>
            <p className="text-left w-60">
              Connect fragments of information from siloed sources faster than
              ever before. Your organization's collective memory at your
              fingertips.
              <br />
              <button className="hover:px-2 py-1 mt-4 text-base font-medium text-white bg-transparent hover:text-black rounded hover:bg-white">
                Learn More
              </button>
            </p>
          </div>
          <img
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="1000"
            src="https://i.ibb.co/mcwpbD9/tumblr-prazcvv0-Ku1w3y4ilo2-r1-500.gif"
            alt="banner"
            className="w-[600px] h-[400px] object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Articles;
