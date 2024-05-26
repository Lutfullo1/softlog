import React from "react";

export const Footer = () => {
  return (
    <div className="container sm:px-[16px] lg:px-[64px] 2xl:px-[80px] my-[50px]">
      <div>
        <hr />
        <div className="hidden 2sm:grid 2sm:grid-cols-3 lg:grid-cols-5 py-4 mt-5">
          <ul className="flex flex-col gap-4">
            <li className="cursor-pointer font-inter font-semibold text-[18px]">
              Product
            </li>
            <li className="cursor-pointer font-inter font-medim text-[18px] text-gray-400">
              Categories
            </li>
            <li className="cursor-pointer font-inter font-medim text-[18px] text-gray-400">
              Write a review
            </li>
            <li className="cursor-pointer font-inter font-medim text-[18px] text-gray-400">
              Claim profile
            </li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="cursor-pointer font-inter font-semibold text-[18px]">
              Company
            </li>
            <li className="cursor-pointer font-inter font-medim text-[18px] text-gray-400">
              About us
            </li>
            <li className="cursor-pointer font-inter font-medim text-[18px] text-gray-400">
              Press
            </li>
            <li className="cursor-pointer font-inter font-medim text-[18px] text-gray-400">
              Media kit
            </li>
            <li className="cursor-pointer font-inter font-medim text-[18px] text-gray-400">
              Contact
            </li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="cursor-pointer font-inter font-semibold text-[18px]">
              Social
            </li>
            <li className="cursor-pointer font-inter font-medim text-[18px] text-gray-400">
              Twitter
            </li>
            <li className="cursor-pointer font-inter font-medim text-[18px] text-gray-400">
              LinkedIn
            </li>
            <li className="cursor-pointer font-inter font-medim text-[18px] text-gray-400">
              Facebook
            </li>
            <li className="cursor-pointer font-inter font-medim text-[18px] text-gray-400">
              Instagram
            </li>
            <li className="cursor-pointer font-inter font-medim text-[18px] text-gray-400">
              Youtube
            </li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="cursor-pointer font-inter font-semibold text-[18px]">
              Recources
            </li>
            <li className="cursor-pointer font-inter font-medim text-[18px] text-gray-400">
              Blog
            </li>
            <li className="cursor-pointer font-inter font-medim text-[18px] text-gray-400">
              Newsletter
            </li>
            <li className="cursor-pointer font-inter font-medim text-[18px] text-gray-400">
              Support
            </li>
            <li className="cursor-pointer font-inter font-medim text-[18px] text-gray-400">
              Sitemap
            </li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="cursor-pointer font-inter font-semibold text-[18px]">
              Legal
            </li>
            <li className="cursor-pointer font-inter font-medim text-[18px] text-gray-400">
              Terms
            </li>
            <li className="cursor-pointer font-inter font-medim text-[18px] text-gray-400">
              Privacy
            </li>
            <li className="cursor-pointer font-inter font-medim text-[18px] text-gray-400">
              Cookies
            </li>
          </ul>
        </div>
        <p className="font-inter font-medium text-[16px] text-gray-400 mt-6">
          © 2023 Softlog
        </p>
      </div>
    </div>
  );
};
