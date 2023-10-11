const Card = () => {
  return (
    <>
      <h1 className="text-center text-4xl font-semibold">Advisors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-24">
        <div className="card w-[370px] h-[300px] rounded-xl hover:shadow-md text-white bg-[#0a0a0a]">
          <figure className=" mx-32 py-8">
            <img
              src="https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5efe7f5ddc9b2d334f508b36_Avatar%20NR.png"
              alt=""
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-semibold">Marty Weiner</h2>
            <h2 className="card-title font-bold">
              Former CTO, Reddit Ideaflow Advisor
            </h2>
          </div>
        </div>
        <div className="card w-[370px] h-[300px] rounded-xl hover:shadow-md text-white bg-[#0a0a0a]">
          <figure className=" mx-32 py-8">
            <img
              src="https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5efac0a92579814c4f6060d0_Avatar%20JL.png"
              alt=""
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-semibold">John Devadoss</h2>
            <h2 className="card-title font-bold">
              Founding Director, Microsoft Digital Consulting
            </h2>
          </div>
        </div>
        <div className="card w-[370px] h-[300px] rounded-xl hover:shadow-md text-white bg-[#0a0a0a]">
          <figure className=" mx-32 py-8">
            <img
              src="https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5efac0a9bd965c6f659d9afb_Avatar%20MW.png"
              alt=""
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-semibold">Tim Draper</h2>
            <h2 className="card-title font-bold">
              Founder, DFJ Ideaflow Investor
            </h2>
          </div>
        </div>
        <div className="card w-[370px] h-[300px] rounded-xl hover:shadow-md text-white bg-[#0a0a0a]">
          <figure className=" mx-32 py-8">
            <img
              src="https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5efac266b0171beef967fcc0_Avatar-%20TD.png"
              alt=""
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-semibold">Tim Draper</h2>
            <h2 className="card-title font-bold">
              Founder, DFJ Ideaflow Investor
            </h2>
          </div>
        </div>
        <div className="card w-[370px] h-[300px] rounded-xl hover:shadow-md text-white bg-[#0a0a0a]">
          <figure className=" mx-32 py-8">
            <img
              src="https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5f59dd959a82d3784dd9ac3a_Avatar%20KB%20bw.png"
              alt=""
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-semibold">Tim Draper</h2>
            <h2 className="card-title font-bold">
              Founder, DFJ Ideaflow Investor
            </h2>
          </div>
        </div>
        <div className="card w-[370px] h-[300px] rounded-xl hover:shadow-md text-white bg-[#0a0a0a] mb-32">
          <figure className=" mx-32 py-8">
            <img
              src="https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5efac0a9393c9705aefe9982_Avatar%20RD2.png"
              alt=""
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-semibold">Tim Draper</h2>
            <h2 className="card-title font-bold">
              Founder, DFJ Ideaflow Investor
            </h2>
          </div>
        </div>
      </div>
      <h1 className="text-center text-4xl font-semibold">Leadership</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-24 px-56">
        <div className="card w-[370px] h-[380px] rounded-xl hover:shadow-md text-white bg-[#0a0a0a]">
          <figure className=" mx-32 py-8">
            <img
              src="https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/600e1c5da2ae0d04a3bcc354_Jacob%20v2.png"
              alt=""
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-semibold">Jacob Cole</h2>
            <h2 className="card-title font-bold">CEO</h2>
            <p className="px-10 pt-10">
              Past: MIT Media Lab; researcher with Tim Berners-Lee. Venture
              Partner at Outliers Fund.
            </p>
          </div>
        </div>
        <div className="card w-[370px] h-[380px] rounded-xl hover:shadow-md text-white bg-[#0a0a0a]">
          <figure className=" mx-32 py-8">
            <img
              src="https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5efac09c6835e22147e6286f_Avatar-%20DG.png"
              alt=""
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-semibold">David Greenspan</h2>
            <h2 className="card-title font-bold">Head of Product</h2>
            <p className="px-10 pt-10">
              Past: Co-Founder of AppJet, created Etherpad (acquired by Google);
              YC W07. 1st Engineer at Meteor.
            </p>
          </div>
        </div>
        <div className="card w-[370px] h-[380px] rounded-xl hover:shadow-md text-white bg-[#0a0a0a]">
          <figure className=" mx-32 py-8">
            <img
              src="https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5f07f06964242a43c2e9de66_Avatar-%20BM.png"
              alt=""
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-semibold">Bat Manson</h2>
            <h2 className="card-title font-bold">Head of Engineering</h2>
            <p className="px-10 pt-10">
              Past: Serial Entrepreneur. Engineering Manager at Apple. Director
              of Engineering at Shone; YC W18.
            </p>
          </div>
        </div>
        <div className="card w-[370px] h-[380px] rounded-xl hover:shadow-md text-white bg-[#0a0a0a] mb-32">
          <figure className=" mx-32 py-8">
            <img
              src="https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/61d8de932703b42b586624d9_Albert.png"
              alt=""
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-semibold">Albert Sławiński</h2>
            <h2 className="card-title font-bold">Full Stack Engineer</h2>
            <p className="px-10 pt-10">
              Past: Software Engineer at Palantir. Oxford Alum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
