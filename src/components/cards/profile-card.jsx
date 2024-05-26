import React from "react";
import profileImg from "../../assets/img/profile-img.png";
import skyImg from "../../assets/img/sky-img.png";

export const ProfileCard = () => {
  return (
    <div className="flex flex-col gap-4 border rounded-md p-6">
      <div className="hidden 2sm:block 2sm:w-full">
        <img className="2sm:w-full" src={skyImg} alt="" />
      </div>
      <div className="flex items-center gap-2">
        <img src={profileImg} alt="" />
        <p className="font-inter font-semibold text-[12px]">Jackie Colburn</p>
      </div>
      <p className="font-inter font-semibold text-[18px]">
        Elon Musk Is Approaching Twitter As If Its Users Are Interchange
        everthin he owns...
      </p>
      <div className="flex items-center gap-2">
        <p className="font-inter font-normal text-gray-400 text-[18px]">
          Nov 4, 2022
        </p>
        <p className="font-inter font-normal text-[12px] leading-[16px] border rounded-sm py-2 px-4">
          Label
        </p>
      </div>
    </div>
  );
};
