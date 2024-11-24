import { FC, useEffect } from "react";
import { CategoriesNav, topProductsData } from "../utils/dataDb";
import hero from "../assets/images/hero2.webp";
import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import { setProducts } from "../store/slice/productSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import ProductCard from "../components/ProductCard";
import Shop from "./Shop";
// import Footer from "../components/Footer";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const productHome = useAppSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(setProducts(topProductsData));
  }, []);

  return (
    <>
      <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
        <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
          <div className="w-full md:w-3/12">
            <div className="bg-red-500 text-white text-xs font-bold px-2 py-2.5">
              SHOP BY CATEGORIES
            </div>
            <ul className="space-y-4 bg-gray-200 p-3 border">
              {CategoriesNav.map((category, index) => (
                <li
                  key={index}
                  className="flex items-center text-sm font-medium"
                >
                  <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
            <img src={hero} alt="" className="h-full w-full" />
            <div className="absolute top-16 left-8">
              <p className="mb-4 text-green-400 text-lg font-bold">
                Code With JS
              </p>
              <h2 className="text-3xl font-bold">WELCOME TO SHOP</h2>
              <p className="text-xl mt-2.5 font-bold text-gray-800">
                BEST PRODUCTS
              </p>
              <button className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>

        <InfoSection />
        <CategorySection />

        <div className="container mx-auto py-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
            {productHome.slice(0, 5).map((item) => (
              <ProductCard item={item} key={item.id}/>
            ))}
          </div>
        </div>
      </div>
      <Shop />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
