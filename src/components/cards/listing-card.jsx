import figmaImg from "../../assets/img/figma-img.png";
import { Button } from "../ui/button/button";
import { StarIcon } from "../../assets/icons/star-icon";

export const ListingCard = () => {
  return (
    <div className="border rounded-md p-6 shadow-md transition-all duration-300 ease-in-out hover:shadow-lg">
      <div className="flex justify-between mb-6">
        <div className="flex gap-2">
          <img src={figmaImg} alt="" />
          <div>
            <p className="font-semibold font-inter text-[16px] mb-3">Figma</p>
            <p className="text-gray-400 rounded-md text-[12px] py-1 px-2 font-normal border-2">
              Category
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <StarIcon />
          <p className="font-inter font-medium text-[14px]">4/5</p>
          <a
            className="font-inter font-medium text-[14px] text-primary underline"
            href="#"
          >
            (20 reviews)
          </a>
        </div>
      </div>
      <div>
        <p className="mb-3">
          monday.com Work OS is an open platform where anyone can create and
          shape the tools they need to run every aspect of their work. By
          combining building blocks, like apps and integrations,
          organizations...
        </p>
        <a
          className="font-inter font-medium text-[14px] text-primary underline"
          href="#"
        >
          Read more
        </a>
        <div className="flex items-center justify-between mt-6">
          <Button variant="white">Show more</Button>
          <Button variant="primary">Try for free </Button>
        </div>
      </div>
    </div>
  );
};
