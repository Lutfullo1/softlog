export const CategoryCard = ({ title, subtitle, icon }) => {
  return (
    <div className="flex items-center justify-between border rounded-md p-6 mb-5">
      <div>
        <p className="font-inter font-semibold text-[16px] mb-3">{title}</p>
        {subtitle ? (
          <p className="text-gray-400 font-inter font-medium text-[12px] border p-1 rounded-md">
            {subtitle}
          </p>
        ) : (
          ""
        )}
      </div>
      {icon}
    </div>
  );
};
