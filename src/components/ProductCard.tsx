import { FC } from "react";
import { FaStar } from "react-icons/fa";
import { addToCard, CardProduct } from "../store/slice/cartSlice";
import { useAppDispatch } from "../hooks/hooks";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  price: number;
  image: string;
  name: string;
}
interface ProductCardProps {
  item: Product;
}
const ProductCard: FC<ProductCardProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  const handleAddToCard = (
    e: React.MouseEvent<HTMLDivElement>,
    item: Product
  ) => {
    e.stopPropagation();
    e.preventDefault();

    const productToAdd: CardProduct = {
      ...item,
      quantity: 1, // Начальное значение
      totalPrice: item.price, // Начальная стоимость
    };

    dispatch(addToCard(productToAdd));
  };

  return (
    <Link to={`/product/${item.id}`}>
      <div
        key={item.id}
        className="bg-white p-4 rounded shadow relative border transform transition-transform duration-300 hover:scale-105"
      >
        <img
          src={item.image}
          alt=""
          className="w-full mb-4 h-48 object-contain"
        />
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-500">$ {item.price}</p>
        <div className="flex items-center mt-2">
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
        </div>
        <div
          onClick={(e) => handleAddToCard(e, item)}
          className="group absolute bottom-4 right-3 flex items-center justify-center w-8 h-8 bg-red-600
      text-white text-sm rounded-full hover:w-32 hover:bg-red-800 transition-all cursor-pointer"
        >
          <span className="group-hover:hidden">+</span>
          <span className="hidden group-hover:block">Add To Card</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
