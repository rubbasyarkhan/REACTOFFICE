import React from "react";
import bgImage from "../assets/jason-leung-1DjbGRDh7-E-unsplash-removebg-preview.png";

const data = [
  {
    title: "User-Centric Design",
    description:
      "Crafting intuitive and engaging digital experiences that prioritize usability, accessibility, and aesthetics.",
    icon: "ri-user-heart-fill",
  },
  {
    title: "Scalable Frontend Development",
    description:
      "Building responsive, high-performance, and scalable web applications using modern technologies like React and Tailwind CSS.",
    icon: "ri-code-s-slash-line",
  },
  {
    title: "Creative Problem-Solving",
    description:
      "Combining design thinking with technical expertise to solve complex challenges and create seamless user experiences.",
    icon: "ri-lightbulb-flash-fill",
  },
  {
    title: "Collaborative & Agile",
    description:
      "Working efficiently in dynamic teams, leveraging GitHub for version control and maintaining a smooth development workflow.",
    icon: "ri-team-fill",
  },
];



const HumanCentricHealth = () => {
  return (
    <section
      className="relative flex mb-20 mt-10
      flex-col md:flex-row py-10 justify-between items-start bg-contain bg-no-repeat bg-center"
      style={{
        opacity: 0.7,
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div>
        <img src="" alt="" />
      </div>
      {/* Left Text Section */}
      <div className="ltext z-10 md:w-1/2 sticky top-20 px-20">
        <p className="text-base leading-7 font-semibold font-[satoshi]">
          I craft seamless and engaging digital experiences, blending intuitive design with scalable development.
          Passionate about building user-centric solutions that enhance interactions, streamline workflows, and drive innovation.
        </p>
        <h1 className="text-[3.2rem] leading-[3.8rem] mt-6 font-[PPNeue-Machina]">
          Designing for Impact
        </h1>
        <h1 className="text-[3.2rem] leading-[3.8rem] font-[PPNeue-Machina]">
          Developing for Performance
        </h1>
        <div className="w-fit px-8 mt-6 py-3 border border-black">
          <span className="text-lg uppercase font-medium flex items-center gap-2">
            View My Work <i className="ri-arrow-right-up-line"></i>
          </span>
        </div>
      </div>

      {/* Right Cards Section */}
      <div className="rtext md:w-1/2 flex flex-col items-center gap-6 justify-center">
        {data.map((item, index) => (
          <div
            key={index}
            className="group w-full md:w-[78%] p-5 flex flex-row justify-between border-2 border-black transition-all duration-300 hover:bg-black hover:scale-105"
          >
            <div className="w-[70%] gap-2 flex flex-col" >
              <h1 className="text-2xl font-bold  group-hover:text-[#ffff]">
                {item.title}
              </h1>
              <p className="text-md leading-[1.7rem] tracking-tight font-md font-[satoshi] group-hover:text-[#ffff]">
                {item.description}
              </p>
            </div>
            <div className="w-1/3 relative flex justify-end">
              <i className={`${item.icon} text-5xl group-hover:text-[#ffff]`}></i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HumanCentricHealth;
