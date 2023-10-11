const Banner = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row lg:flex-row gap-10 items-center justify-center h-[500px] my-12">
        <div>
          <h1 className="text-5xl font-bold text-white w-[400px]">
            Help Us Build the Future of the Web
          </h1>
          <p className="text-xl font-semibold text-white w-[650px] my-8">
            “[Ideaflow] is a key step to realizing the potential of the Web as a
            medium for collective intelligence.” <br />
            Marty Weiner, Former CTO, Reddit ‍
          </p>
          <button className="px-4 mr-2 py-2 mt-8 text-base font-medium text-white bg-transparent hover:text-black rounded-md hover:bg-white">
            Hiring Key Roles
          </button>
        </div>
        <div>
          <img
            className="object-contain w-[450px] h-[450px]"
            src="https://i.ibb.co/F5zdjmR/tumblr-19c5dddfe73201a61b8bdc2c0be7ee55-17a71f78-500.gif"
            alt="banner"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
