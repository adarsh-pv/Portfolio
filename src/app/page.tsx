import React from "react";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center px-4 text-center">
      <div className="lg:mt-36 md:mt-72 ssm:mt-12">
        {" "}
        {/* Ensures the content is centered and responsive */}
        <h1 className="text-2xl sm:text-4x2 md:text-clip font-bold mb-4">
          Hi, I&#39;m Adarsh👋🏼!
        </h1>
        <p className="text-lg mb-4 text-start">
        I’m a web developer with a passion for learning and solving challenges through code. I enjoy bringing creative ideas to life and am always open to new opportunities and collaborations.
If you’d like to connect or explore my work, feel free to reach out—let’s create something awesome together!😊<br />
          <a href="/contact" className="underline">connect now!</a>
        </p>
        {/* <p className="text-lg mb-4 text-start">
          I&#39;m always open to collaboration and love tackling challenging
          problems. If you&#39;re interested in working together or just want to
          chat about tech, feel free to reach out!
        </p> */}
      </div>
    </div>
  );
};

export default HomePage;
