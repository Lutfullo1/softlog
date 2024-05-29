import React from "react";

export const Footer = () => {
  return (
    <div className="container sm:px-[16px] lg:px-[64px] 2xl:px-[80px] my-[50px]">
      <div>
        <hr />
        <div className="hidden 2sm:grid 2sm:grid-cols-3 lg:grid-cols-5 py-4 mt-5">
          <ul className="flex flex-col gap-4">
            <li className="font-inter font-semibold text-[18px]">
              <p>Product</p>
            </li>
            <li className="cursor-pointer font-inter font-medium text-[18px] text-gray-400">
              <a href="#" className="hover:underline">
                Categories
              </a>
            </li>
            <li className="cursor-pointer font-inter font-medium text-[18px] text-gray-400">
              <a href="#" className="hover:underline">
                Write a review
              </a>
            </li>
            <li className="cursor-pointer font-inter font-medium text-[18px] text-gray-400">
              <a href="#" className="hover:underline">
                Claim profile
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="font-inter font-semibold text-[18px]">
              <p>Company</p>
            </li>
            <li className="cursor-pointer font-inter font-medium text-[18px] text-gray-400">
              <a href="#" className="hover:underline">
                About us
              </a>
            </li>
            <li className="cursor-pointer font-inter font-medium text-[18px] text-gray-400">
              <a href="#" className="hover:underline">
                Press
              </a>
            </li>
            <li className="cursor-pointer font-inter font-medium text-[18px] text-gray-400">
              <a href="#" className="hover:underline">
                Media kit
              </a>
            </li>
            <li className="cursor-pointer font-inter font-medium text-[18px] text-gray-400">
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="font-inter font-semibold text-[18px]">
              <p>Social</p>
            </li>
            <li className="cursor-pointer font-inter font-medium text-[18px] text-gray-400">
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li className="cursor-pointer font-inter font-medium text-[18px] text-gray-400">
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
            </li>
            <li className="cursor-pointer font-inter font-medium text-[18px] text-gray-400">
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li className="cursor-pointer font-inter font-medium text-[18px] text-gray-400">
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li className="cursor-pointer font-inter font-medium text-[18px] text-gray-400">
              <a href="#" className="hover:underline">
                YouTube
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="font-inter font-semibold text-[18px]">
              <p>Resources</p>
            </li>
            <li className="cursor-pointer font-inter font-medium text-[18px] text-gray-400">
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li className="cursor-pointer font-inter font-medium text-[18px] text-gray-400">
              <a href="#" className="hover:underline">
                Newsletter
              </a>
            </li>
            <li className="cursor-pointer font-inter font-medium text-[18px] text-gray-400">
              <a href="#" className="hover:underline">
                Support
              </a>
            </li>
            <li className="cursor-pointer font-inter font-medium text-[18px] text-gray-400">
              <a href="#" className="hover:underline">
                Sitemap
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="font-inter font-semibold text-[18px]">
              <p>Legal</p>
            </li>
            <li className="cursor-pointer font-inter font-medium text-[18px] text-gray-400">
              <a href="#" className="hover:underline">
                Terms
              </a>
            </li>
            <li className="cursor-pointer font-inter font-medium text-[18px] text-gray-400">
              <a href="#" className="hover:underline">
                Privacy
              </a>
            </li>
            <li className="cursor-pointer font-inter font-medium text-[18px] text-gray-400">
              <a href="#" className="hover:underline">
                Cookies
              </a>
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
