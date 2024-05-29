import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

export const QuestionCard = ({ title, subtitle, icon, content }) => {
  return (
    <Disclosure
      as="div"
      className="relative mt-4 transition-all duration-300 ease-in-out hover:shadow-lg"
    >
      {({ open }) => (
        <div
          className={`border rounded-md p-6 shadow-md transition-colors duration-300 ease-in-out ${
            open ? "bg-[#fbf9f9]" : "bg-white"
          }`}
        >
          <DisclosureButton className="w-full flex items-center justify-between">
            <div>
              <p className="font-inter font-semibold text-[16px] mb-3">
                {title}
              </p>
              {subtitle && (
                <p className="text-gray-400 font-inter font-medium text-[12px] border p-1 rounded-md">
                  {subtitle}
                </p>
              )}
            </div>
            {icon}
          </DisclosureButton>
          <DisclosurePanel
            className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
              open ? "max-h-screen" : "max-h-0"
            }`}
            static
          >
            <div className="mt-4 text-[12px] font-inter font-normal">
              {content}
            </div>
          </DisclosurePanel>
        </div>
      )}
    </Disclosure>
  );
};
