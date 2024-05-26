import React from "react";
import { Dialog, DialogPanel } from "@headlessui/react";

export const Modal = ({ isOpen, close, children }) => {
  return (
    <Dialog open={isOpen} onClose={close} className="relative z-30">
      <div className="fixed inset-0 flex justify-end w-screen bg-[#54515124]">
        <DialogPanel className="rounded bg-white p-2 w-[250px]">
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
};
