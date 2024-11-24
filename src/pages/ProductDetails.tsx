import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/hooks";
import { Product } from "../store/slice/productSlice";
import { FaCarSide, FaQuestion } from "react-icons/fa";

const ProductDetails: FC = () => {
  const { id } = useParams();
  const products = useAppSelector((state) => state.product.products);
  const [productName, setProductName] = useState<Product | undefined>(
    undefined
  );

  useEffect(() => {
    const newProduct = products.find((item) => item.id === parseInt(id || ""));
    setProductName(newProduct);
  }, [id, products]);

  if (!productName) return <div>Loading...</div>;

  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row gap-x-16">
        {/*//!-----PRODUCT IMAGE-------- */}
        <div className="md:w-1/2 py-4 shadow-md md:px-8 h-96 flex justify-center">
          <img
            src={productName.image}
            alt={productName.name}
            className="h-full"
          />
        </div>

        {/*//!----------PRODUCT-INFORMATION-------------- */}
        <div className="md:w-1/2 p-4 shadow-md md:p-16 flex flex-col items-center gap-y-2">
          <h2 className="text-3xl font-semibold mb-2">{productName.name}</h2>
          <p className="text-xl font-semibold text-gray-800 mb-4">
            ${productName.price}
          </p>

          <div className="flex items-center mb-4 gap-x-2">
            <input
              type="number"
              id="quantity"
              min="1"
              className="border p-1 w-16"
            />
            <button className="bg-red-600 text-white py-1.5 px-4 hover:bg-red-800">
              Add to Cart
            </button>
          </div>

          <div className="flex flex-col gap-y-4 mt-4">
            <p className="flex items-center">
              <FaCarSide className="mr-1" />
              Delivery & Return
            </p>
            <p className="flex items-center">
              <FaQuestion className="mr-1"/>
              Ask a Question
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Products Description</h3>
        <p>Product Description will goes here.</p>
      </div>
    </div>
  );
};

export default ProductDetails;
