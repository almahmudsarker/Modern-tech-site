import React from "react";
import AdCard from "./AdCard";

const AdAbout = () => {
  return (
    <div>
      <div className="">
        <div className="flex flex-col md:flex-row lg:flex-row mt-32 gap-20">
          <div className="text-left w-[500px]">
            <h1 className="text-4xl font-bold py-4">
              Who we are
              <hr />
            </h1>
            <p>
              Connect fragments of information from siloed sources faster than
              ever before. Your organization's collective memory at your
              fingertips.
              <br />
              <br />
              We are: engineers with an artistic impulse, veteran entrepreneurs,
              community builders, curators of quotes, hosts of intellectual
              salons, side project fanatics, lovers of nature and human nature –
              all united by a desire to scale our ability to help people, and to
              help the Internet continue to truly serve on the side of the user.
              <br />
              <br />
              We believe in the power of small, highly-skilled teams with a deep
              sense of mutual respect. In each role, we are looking for a
              special sort of person with strong bias towards action to become
              deeply passionate about the product and take tremendous ownership.
              ‍<br />
              <br />
              At Ideaflow, it’s important for you to be yourself, nurture your
              creativity, and grow in well being. Join us in building a future
              where humans and machines work together to solve the world’s most
              important problems.
            </p>
          </div>
          <AdCard />
        </div>
      </div>
    </div>
  );
};

export default AdAbout;
