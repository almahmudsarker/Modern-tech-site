import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="mt-4 py-4">
        <div className="flex flex-row items-center justify-between">
          <img
            className="object-contain w-[200px] h-[100px] ml-4  cursor-pointer"
            src="https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5ef987561883fad47e90211c_Ideaflow%20white%201%403x.png"
            alt="banner"
          />
          <div className="flex flex-row items-center">
            <h1 className="text-lg font-normal mr-10 cursor-pointer hover:text-gray-400">
              Home
            </h1>
            <Link to="/career">
              <h1 className="text-lg font-normal mr-10 cursor-pointer hover:text-gray-400">
                We're Hiring! JS, iOS+
              </h1>
            </Link>
            <h1 className="text-lg font-normal cursor-pointer hover:text-gray-400">
              Contact
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
