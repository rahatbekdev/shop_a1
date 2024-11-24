import { FC } from "react";
import { useAppSelector } from "../hooks/hooks";
import ProductCard from "../components/ProductCard";

const Shop: FC = () => {
  const { products, loading } = useAppSelector((state) => state.product);
  // console.log(productsShop);

  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
      {loading ? (
        <div>
          <h1 className="bg-red-600">Loading...</h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
          {products.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
