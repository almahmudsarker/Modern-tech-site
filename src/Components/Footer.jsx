import React from "react";

const Footer = () => {
  return (
    <div className="text-white">
      <div className="flex flex-col md:flex-row lg:flex-row justify-between py-20">
        <div className="">
          <img
            data-aos="fade-right"
            data-aos-duration="1000"
            className="object-contain w-[200px] h-[100px] ml-4"
            src="https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5ef987561883fad47e90211c_Ideaflow%20white%201%403x.png"
            alt="banner"
          />
        </div>
        <div className="flex flex-col">
          <span class=" text-lg md:mb-3 font-semibold">#rabbithole</span>
          <a class="link link-hover">Memex</a>
          <a class="link link-hover">Niklas Luhmann's Zettelkasten</a>
          <a class="link link-hover">Collective IQ</a>
          <a class="link link-hover">Intelligence amplification</a>
          <a class="link link-hover">Tim Berners-Lee’s Giant Global Graph</a>
          <a class="link link-hover">Polymath Project</a>
          <a class="link link-hover">Category Theory for Scientists</a>
          <a class="link link-hover">ideaflowplan.jacobcole.net</a>
          <a class="link link-hover">Privacy Policy</a>
        </div>
        <div className="flex flex-col">
          <span class=" text-lg md:mb-3 font-semibold">Latest updates</span>
          <a class="link link-hover">Blog</a>
          <a class="link link-hover">Funding</a>
          <a class="link link-hover">Bullet View Video</a>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="flex flex-col"
        >
          <span class=" text-lg md:mb-3 font-semibold">Contact</span>
          <a class="link link-hover">Email</a>
          <a class="link link-hover">Linkedin</a>
          <a class="link link-hover">Facebook</a>
          <a class="link link-hover">Twitter</a>
        </div>
      </div>
      <p className="text-center font-medium text-gray-200">
        Copyright © 2020 Ideaflow, Inc. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
