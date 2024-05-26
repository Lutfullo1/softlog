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
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        <div className="hidden md:flex md:items-center md:justify-between md:w-full">
          <ul className="flex items-center gap-8">
            <li className="font-inter text-base font-medium hover:text-gray-700 cursor-pointer">
              Categories
            </li>
            <li className="font-inter text-base font-medium hover:text-gray-700 cursor-pointer">
              Blog
            </li>
            <li className="font-inter text-base font-medium hover:text-gray-700 cursor-pointer">
              Contact
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <Button variant="white">Claim Profile</Button>
            <Button variant="primary">Write a Review</Button>
          </div>
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
                ×
              </Button>
            </div>
            <ul className="flex flex-col items-center gap-4 p-4">
              <li className="font-inter text-lg font-medium hover:text-gray-700 cursor-pointer">
                Categories
              </li>
              <li className="font-inter text-lg font-medium hover:text-gray-700 cursor-pointer">
                Blog
              </li>
              <li className="font-inter text-lg font-medium hover:text-gray-700 cursor-pointer">
                Claim Profile
              </li>
              <li className="font-inter text-lg font-medium hover:text-gray-700 cursor-pointer">
                Write a Review
              </li>
            </ul>
          </Modal>
        </div>
      </div>
    </div>
  );
};
