import { Button } from "../ui/button/button";

export const ReviewBanner = ({ img, img2, title, subtitle }) => {
  return (
    <div className="flex flex-col items-center gap-4 2sm:flex-row-reverse 2sm:justify-between 2sm:items-center bg-gray-100 rounded-md py-8 sm:px-6 2sm:px-[60px]">
      <div className="2sm:hidden">
        <img src={img} alt="" />
      </div>
      <div className="hidden 2sm:block">
        <img src={img2} alt="" />
      </div>
      <div>
        <p className="sm:text-center 2sm:text-left font-inter font-semibold text-[24px] 2sm:text-[36px]">
          {title}
        </p>
        <p className="sm:text-center 2sm:text-left font-inter font-semibold text-[24px] 2sm:text-[36px] text-gray-400 mb-6">
          {subtitle}
        </p>
        <div className="flex items-center justify-center 2sm:justify-start">
          <Button variant="primary" className="items-center justify-center">
            Write a review
          </Button>
        </div>
      </div>
    </div>
  );
};
