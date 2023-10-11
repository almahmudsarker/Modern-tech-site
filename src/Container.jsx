import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-40 md:px-20 sm:px-4 px-8">
      {children}
    </div>
  );
};

export default Container;
