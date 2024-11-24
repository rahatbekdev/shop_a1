import { FC } from "react";
import { infoItem } from "../utils/dataDb";

const InfoSection: FC = () => {
  return (
    <div className="bg-white pb-8 pt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {infoItem.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4
            border rounded-lg shadow transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <IconComponent className="text-4xl text-red-500" />
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfoSection;
