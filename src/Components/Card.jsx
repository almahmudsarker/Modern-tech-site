const Card = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-32">
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="card w-[370px] h-[380px] rounded-xl hover:shadow-md text-white bg-[#0a0a0a] mb-32"
      >
        <figure className=" mx-32 py-8">
          <img
            className="mt-5"
            src="https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5efac0a9bd965c6f659d9afb_Avatar%20MW.png"
            alt=""
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-semibold">Marty Weiner</h2>
          <h2 className="card-title font-bold">
            Former CTO, Reddit Ideaflow Advisor
          </h2>
          <p className="px-10 pt-10">
            “A key step to realizing the potential of the Web as a medium for
            collective intelligence.”
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="card w-[370px] h-[380px] rounded-xl hover:shadow-md text-white bg-[#0a0a0a] mb-32"
      >
        <figure className=" mx-32 py-8">
          <img
            className="mt-5"
            src="https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5efbe6fc6697d411b88e0cc6_JD.png"
            alt=""
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-semibold">John Devadoss</h2>
          <h2 className="card-title font-bold">
            Founding Director, Microsoft Digital Consulting
          </h2>
          <p className="px-10 pt-10">
            “Ideaflow is the force multiplier for business productivity in this
            new normal.”
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="card w-[370px] h-[380px] rounded-xl hover:shadow-md text-white bg-[#0a0a0a] mb-32"
      >
        <figure className=" mx-32 py-8">
          <img
            className="mt-5"
            src="https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5efac266b0171beef967fcc0_Avatar-%20TD.png"
            alt=""
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-semibold">Tim Draper</h2>
          <h2 className="card-title font-bold">
            Founder, DFJ Ideaflow Investor
          </h2>
          <p className="px-10 pt-10">
            “The amount of value that can be unlocked by connecting the right
            people and ideas together is incredible. I’m very excited for what
            Ideaflow is building”.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
