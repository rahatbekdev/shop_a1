import { FC } from "react";
import { useAppSelector } from "../hooks/hooks";
import ProductCard from "../components/ProductCard";
import notFound from "../assets/images/not-found.webp";

const FilterData: FC = () => {
  const filterProducts = useAppSelector((state) => state.product.filteredData);

  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
      {filterProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
          {filterProducts.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center">
          <img src={notFound} alt="" />
        </div>
      )}
    </div>
  );
};

export default FilterData;
