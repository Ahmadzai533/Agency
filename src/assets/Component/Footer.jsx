import React from "react";
import assets from "../assets";

const Footer = ({ theme }) => {
  return (
    <div
      className="bg-slate-50 dark:bg-gray-900 pt-10
    sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24  xl:px-40
    "
    >
      {/* //footer Top */}
      <div
        className="flex justify-between lg:items-center
        max-lg:flex-col gap-10"
      >
        <div>
          <img
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            className="w-32 sm:w-44"
            alt=""
          />
          <p className="max-w-md">
            From stratigy to execution we craft digital solution that move your
            business farword
          </p>
          <ul className="flex gap-8">
            <li>
              <a className="hover:text-blue-700" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-blue-700" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-blue-700" href="#ourWork">
                Our Work
              </a>
            </li>
            <li>
              <a className="hover:text-blue-700" href="#contuct-us">
                Contuct-Us
              </a>
            </li>
          </ul>
        </div>
        <div
          className="text-gray-600 dark:text-gray-400
        "
        >
          <h3 className="font-simibold">Subscribe to our newslater</h3>
          <p className="text-sm mt-2 mb-6">
            The latest news articals and resources sent your inbox weekly.
          </p>
          <div className="flex gap-2 text-sm">
            <input
              type="email"
              placeholder="enter your email "
              className="w-full p-3 text-sm outline-none rounded 
                dark:text-gray-200 bg-transparent border border-gray-300
                dark:border-gray-500"
            />
            <button
              className="bg-blue-700 text-white rounded
                px-6"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <hr className="border-gray-300 dark:border-gray-600 my-6" />
      {/* Footer bottom */}
      <div
        className="pb-6 text-sm text-gray-500 flex justify-center
       sm:justify-between gap-4 flex-wrap"
      >
        <p>Copyrights 2026 project - All right Reserved.</p>
        <div className="flex items-center justify-between gap-4">
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
          <img src={assets.instagram_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
