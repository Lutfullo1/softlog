import React from "react";
import clsx from "clsx";

export const Button = ({
  variant,
  children,
  onClick,
  type,
  startIcon,
  endIcon,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        "flex items-center gap-2 px-[20px] py-[8px] text-[16px] font-inter font-medium rounded-3xl cursor-pointer transition-all duration-300 ease-in-out",
        {
          "bg-primary text-white border-2 border-primary hover:text-primary hover:bg-white hover:border-2":
            variant === "primary",
          "bg-white text-black border-2 hover:bg-gray-300": variant === "white",
        },
        className
      )}
    >
      {startIcon ? startIcon : ""}
      <span> {children}</span>
      {endIcon ? endIcon : ""}
    </button>
  );
};
