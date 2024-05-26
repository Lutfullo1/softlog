import React from "react";
import { Dialog, DialogPanel } from "@headlessui/react";

export const Modal = ({ isOpen, close, children }) => {
  React.useEffect(() => {
    close();
  }, []);
  return (
    <Dialog open={isOpen} onClose={close} className="relative z-30 ">
      <div className="fixed inset-0 flex w-screen justify-end bg-[#7a777724] container">
        <DialogPanel className="rounded bg-white p-4 ">{children}</DialogPanel>
      </div>
    </Dialog>
  );
};
