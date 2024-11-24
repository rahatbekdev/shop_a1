import {
  FaShippingFast,
  FaHeadset,
  FaMoneyBillWave,
  FaLock,
  FaTag,
} from "react-icons/fa";
import MenCategory from "../assets/images/men2.webp";
import GirlCategory from "../assets/images/girl2.jpg";
import KidsCategory from "../assets/images/kids2.webp";
//! top-product images  ===============================
import product1 from "../assets/watch/watch1.webp";
import product2 from "../assets/product2/kp1.webp";
import product3 from "../assets/product2/kp2.webp";
import product4 from "../assets/product2/kp3.webp";
import product5 from "../assets/product2/kp4.webp";
import product14 from "../assets/product2/kp5.webp";
import product15 from "../assets/product2/kp6.webp";
import product16 from "../assets/product2/kp7.webp";
import product17 from "../assets/product2/kp8.webp";



import product6 from "../assets/watch/watch3.webp";
import product7 from "../assets/watch/watch4.webp";
import product8 from "../assets/watch/watch5.webp";
import product9 from "../assets/watch/watch6.webp";
import product10 from "../assets/watch/watch7.webp";
import product11 from "../assets/product2/rt1.webp";
import product12 from "../assets/product2/rt2.webp";
import product13 from "../assets/product2/rt3.webp";

export const CategoriesNav = [
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Beauty",
  "Sports",
  "Avtomotive",
];

interface InfoItemProps {
  icon: React.ElementType; // Тип для ссылки на компонент
  title: string;
  description: string;
}

export const infoItem: InfoItemProps[] = [
  {
    icon: FaShippingFast, // Ссылка на компонент
    title: "Free Shipping",
    description: "Get your orders delivered with no extra cost",
  },
  {
    icon: FaHeadset,
    title: "Support 24/7",
    description: "We are here to assist you anytime",
  },
  {
    icon: FaMoneyBillWave,
    title: "100% Money Back",
    description: "Full refund if you are not satisfied",
  },
  {
    icon: FaLock,
    title: "Payment secure",
    description: "Your payment information is safe with us",
  },
  {
    icon: FaTag,
    title: "Discount",
    description: "Enjoy the best prices on your products",
  },
];

interface CategoryProps {
  title: string;
  imageUrl: string;
}
export const categories: CategoryProps[] = [
  {
    title: "Men",
    imageUrl: MenCategory,
  },
  {
    title: "Girl",
    imageUrl: GirlCategory,
  },
  {
    title: "Kids",
    imageUrl: KidsCategory,
  },
];

interface TopProductsProps {
  id: number;
  image: string;
  name: string;
  price: number;
}
export const topProductsData: TopProductsProps[] = [
  {
    id: 1,
    image: product1,
    name: "Product-1",
    price: 30,
  },
  {
    id: 2,
    image: product2,
    name: "Product-2",
    price: 40,
  },
  {
    id: 3,
    image: product3,
    name: "Product-3",
    price: 50,
  },
  {
    id: 4,
    image: product4,
    name: "Product-4",
    price: 120,
  },
  {
    id: 5,
    image: product5,
    name: "Product-5",
    price: 30,
  },
  {
    id: 6,
    image: product6,
    name: "Product-5",
    price: 35,
  },
  {
    id: 7,
    image: product7,
    name: "Product-7",
    price: 35,
  },
  {
    id: 8,
    image: product8,
    name: "Product-8",
    price: 40,
  },
  {
    id: 9,
    image: product9,
    name: "Product-9",
    price: 45,
  },
  {
    id: 10,
    image: product10,
    name: "Product-10",
    price: 50,
  },
  {
    id: 11,
    image: product11,
    name: "Product-11",
    price: 55,
  },
  {
    id: 12,
    image: product12,
    name: "Product-12",
    price: 55,
  },
  {
    id: 13,
    image: product13,
    name: "Product-13",
    price: 60,
  },
  {
    id: 14,
    image: product14,
    name: "Product-14",
    price: 65,
  },
  {
    id: 15,
    image: product15,
    name: "Product-15",
    price: 55,
  },
  {
    id: 16,
    image: product16,
    name: "Product-16",
    price: 35,
  },
  {
    id: 17,
    image: product17,
    name: "Product-17",
    price: 100,
  },
];
