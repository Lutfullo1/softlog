import React from "react";
import { Dialog, DialogPanel } from "@headlessui/react";

export const Modal = ({ isOpen, close, children }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={close}
      className="fixed inset-0 z-30 flex justify-center items-center"
    >
      <DialogPanel className="fixed inset-0 bg-black bg-opacity-50">
        <div className="bg-white rounded-b-lg p-4">{children}</div>
      </DialogPanel>
    </Dialog>
  );
};
