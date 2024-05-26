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
        "flex items-center gap-2 px-[20px] py-[8px] text-[16px] font-inter font-medium rounded-3xl cursor-pointer",
        {
          "bg-primary text-white": variant === "primary",
          "bg-white text-black border-2": variant === "white",
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
