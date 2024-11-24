import React, { FC, useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import Modal from "./Modal";
import Login from "./Login";
import Register from "./Register";
import { setSearchTerm } from "../store/slice/productSlice";

const Navbar: FC = () => {
  const products = useAppSelector((state) => state.cart.products);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search.trim()) {
      dispatch(setSearchTerm(search));
      navigate("/filter-data");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);

    if (value.trim() === "") {
      dispatch(setSearchTerm("")); // Сбрасываем поиск
      navigate("/"); // Перенаправляем на домашнюю страницу
    }
  };

  const openSignUp = () => {
    setIsLogin(false);
    setIsOpenModal(true);
  };
  const openLogin = () => {
    setIsLogin(true);
    setIsOpenModal(true);
  };

  return (
    <nav className="bg-[rgba(0,0,0,0.08)] shadow-md fixed top-0 z-50 w-full">
      <div className="container flex justify-between items-center px-4 py-4 mx-auto md:px-16 lg:px-24">
        <div className="text-lg font-bold">
          <NavLink to="/">E-Shop</NavLink>
        </div>

        <div className="relative flex-1 mx-4">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              value={search || ""}
              onChange={handleInputChange}
              placeholder="Search product..."
              className="w-full border py-2 px-4 rounded-full"
            />
            <FaSearch className="absolute right-5 top-3 text-red-500" />
          </form>
        </div>

        <div className="flex items-center space-x-4">
          <NavLink to="/cart" className="relative">
            <FaShoppingCart className="text-lg" />
            {products.length > 0 && (
              <span className="absolute -top-2 text-xs w-4 left-3 bg-red-600 rounded-full flex items-center justify-center text-white font-medium">
                {products.length}
              </span>
            )}
          </NavLink>
          <button
            onClick={() => setIsOpenModal(true)}
            className="hidden md:block"
          >
            Login | Register
          </button>
          <button className="block md:hidden">
            <FaUser />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
        <NavLink to="/" className="active hover:underline">
          HOME
        </NavLink>
        <NavLink to="/shop" className="active hover:underline">
          SHOP
        </NavLink>
        <NavLink to="/contact" className="active hover:underline">
          CONTACT
        </NavLink>
        <NavLink to="/about" className="active hover:underline">
          ABOUT
        </NavLink>
      </div>

      <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
        {isLogin ? (
          <Login openSignUp={openSignUp} />
        ) : (
          <Register openLogin={openLogin} />
        )}
      </Modal>
    </nav>
  );
};

export default Navbar;
