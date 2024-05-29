import React from "react";
import logo from "../../assets/img/logo.svg";
import { Button } from "../../components/ui/button/button";
import { Modal } from "../../components/ui/modal/modal";
import { useModal } from "../../hook/useModal";
import { BurgerMenu } from "../../assets/icons/burger-menu";

export const Header = () => {
  const { close, isOpen, open } = useModal();
  return (
    <div className="container px-4 lg:px-16 xl:px-20 2xl:px-24">
      <div className="py-4 flex gap-8 items-center justify-between">
        <div>
          <a href="#">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </a>
        </div>

        <div className="hidden md:flex md:items-center md:justify-between md:w-full">
          <ul className="flex items-center gap-8">
            <li className="font-inter text-base font-medium hover:text-primary transition duration-300 ease-in-out cursor-pointer">
              <a href="#">Categories</a>
            </li>
            <li className="font-inter text-base font-medium hover:text-primary transition duration-300 ease-in-out cursor-pointer">
              <a href="#">Blog</a>
            </li>
            <li className="font-inter text-base font-medium hover:text-primary transition duration-300 ease-in-out cursor-pointer">
              <a href="#">Contact</a>
            </li>
          </ul>

          <ul className="flex items-center gap-4">
            <li className="px-[20px] py-[8px] text-[16px] font-inter font-medium rounded-3xl transition duration-300 ease-in-out bg-primary text-white border-2 border-primary hover:text-primary hover:bg-white hover:border-2">
              <a href="#">Claim Profile</a>
            </li>
            <li className="px-[20px] py-[8px] text-[16px] font-inter font-medium rounded-3xl transition duration-300 ease-in-out bg-white text-black border-2 hover:bg-gray-300">
              <a href="#">Write a Review</a>
            </li>
          </ul>
        </div>

        <div className="md:hidden">
          <Button
            startIcon={<BurgerMenu />}
            onClick={open}
            className="p-2"
          ></Button>

          <Modal close={close} isOpen={isOpen}>
            <div className="flex justify-end p-1">
              <Button onClick={close} className="text-xl">
                x
              </Button>
            </div>
            <ul className="flex flex-col items-center gap-4 p-4">
              <li className="font-inter text-base font-medium hover:text-primary transition duration-300 ease-in-out cursor-pointer">
                <a href="#">Categories</a>
              </li>
              <li className="font-inter text-base font-medium hover:text-primary transition duration-300 ease-in-out cursor-pointer">
                <a href="#">Blog</a>
              </li>
              <li className="font-inter text-base font-medium hover:text-primary transition duration-300 ease-in-out cursor-pointer">
                <a href="#">Contact</a>
              </li>
              <li className="font-inter text-base font-medium hover:text-primary transition duration-300 ease-in-out cursor-pointer">
                <a href="#">Claim Profile</a>
              </li>
              <li className="font-inter text-base font-medium hover:text-primary transition duration-300 ease-in-out cursor-pointer">
                <a href="#">Write a Review</a>
              </li>
            </ul>
          </Modal>
        </div>
      </div>
    </div>
  );
};
