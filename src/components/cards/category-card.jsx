import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

export const CategoryCard = ({ title, subtitle, icon, content }) => {
  return (
    <Disclosure
      as="div"
      className="relative mt-4 transition-all duration-300 ease-in-out"
    >
      {({ open }) => (
        <div
          className={`border rounded-md shadow-md transition-colors duration-300 ease-in-out ${
            open ? "sm:bg-[#fbf9f9] 2sm:bg-white" : "bg-white"
          }`}
        >
          <DisclosureButton className="w-full flex items-center justify-between p-6">
            <div>
              <p className="font-inter font-semibold text-[16px]">{title}</p>
              {subtitle && (
                <p className="text-gray-400 font-inter font-medium text-[12px] border p-1 rounded-md mt-3">
                  {subtitle}
                </p>
              )}
            </div>
            {icon}
          </DisclosureButton>
          <DisclosurePanel
            className={`overflow-hidden transition-max-height duration-300 ease-in-out sm:block 2sm:hidden ${
              open ? "max-h-screen" : "max-h-0"
            }`}
            static
          >
            <div className="text-[12px] font-inter font-normal m-6 mt-0">
              {content}
            </div>
          </DisclosurePanel>
          <div className="hidden 2sm:block text-[12px] font-inter font-normal m-6 mt-0">
            {content}
          </div>
        </div>
      )}
    </Disclosure>
  );
};
