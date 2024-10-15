import React from "react";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center px-4 text-center">
      <div className="lg:mt-36 md:mt-72 sm:mt-40">
        {" "}
        {/* Ensures the content is centered and responsive */}
        <h1 className="text-2xl sm:text-4x2 md:text-clip font-bold mb-4">
          Hi, I’m Adarsh👋🏼!
        </h1>
        <p className="text-lg mb-4 text-start">
          Self taught web developer love to learn new things and I'm always
          looking for new challenges to solve 😊<br/>
          <a href="/contact" className="underline">connect now!</a>
        </p>
        {/* <p className="text-lg mb-4 text-start">
          I’m always open to collaboration and love tackling challenging
          problems. If you’re interested in working together or just want to
          chat about tech, feel free to reach out!
        </p> */}
      </div>
    </div>
  );
};

export default HomePage;
