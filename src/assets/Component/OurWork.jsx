import React from "react";
import assets from "../assets";
import Title from "./Title";

const OurWork = () => {
  const workData = [
    {
      title: "Mobile app markiting ",
      description:
        "we turn bold ideas into powerfull digitals solution that conect, engage",
      image: assets.work_mobile_app,
    },
    {
      title: "Mobile app markiting ",
      description:
        "we turn bold ideas into powerfull digitals solution that conect, engage",
      image: assets.work_dashboard_management,
    },
    {
      title: "Mobile app markiting ",
      description:
        "we turn bold ideas into powerfull digitals solution that conect, engage",
      image: assets.work_fitness_app,
    },
  ];
  return (
    <div
      id="ourWork"
      className="flex flex-col items-center 
    gap-7 px-4 sm:px-12 lg:px-24 
     xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="our latest work"
        desc="From stragy to execution, we craft digital solutipn that is move "
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {workData.map((work, index) => (
          <div
            key={index}
            className="hover:scall-102
                 duration-500 transition-all cursor-pointer"
          >
            <img src={work.image} className="w-full rounded-xl " alt="" />
            <h3 className="mt-3 mb-2 text-lg font-simibold">{work.title}</h3>
            <p className="text-sm opacity-60 w- 5/6">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
