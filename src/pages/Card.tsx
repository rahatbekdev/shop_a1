import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { FaTrashAlt } from "react-icons/fa";
import Modal from "../components/Modal";
import ChangeAddress from "../components/ChangeAddress";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../store/slice/cartSlice";
import { useNavigate } from "react-router-dom";

const Card: FC = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [address, setAddress] = useState<string>("main street,0012");
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4">Shopping Cart</h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              <div className="flex justify-between border-b items-center mb-4 text-xs font-bold">
                <p>PRODUCTS</p>
                <div className="flex space-x-8">
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>

              <div>
                {cart.products.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 border-b"
                  >
                    <div className="md:flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt=""
                        className="w-16 h-16 object-contain rounded"
                      />
                      <div className="flex-1 ml-4">
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                      </div>
                    </div>

                    <div className="flex space-x-12 items-center">
                      <p>$ {item.price}</p>
                      <div className="flex items-center justify-center border">
                        <button
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                          className="text-xl font-bold px-1.5 border-r"
                        >
                          -
                        </button>
                        <p className="text-xl px-2">{item.quantity}</p>
                        <button
                          onClick={() => dispatch(increaseQuantity(item.id))}
                          className="text-xl px-1 border-l"
                        >
                          +
                        </button>
                      </div>
                      <p>${(item.quantity * item.price).toFixed(2)}</p>
                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
              <h3 className="uppercase text-sm font-semibold mb-5">
                Cart Total
              </h3>
              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-sm">Total Items:</span>
                <span>{cart.totalQuantity}</span>
              </div>

              <div className="mb-4 border-b pb-2">
                <p>SHIPPING:</p>

                <p className="ml-2">
                  Shipping to:
                  <span className="text-xs font-bold ml-2">{address}</span>
                </p>

                <button
                  onClick={() => setIsOpenModal(true)}
                  className="text-blue-500 hover:underline mt-1 ml-2"
                >
                  Change Address
                </button>
              </div>

              <div className="flex justify-between mb-4">
                <span>Total Price</span>
                <span>{cart.totalPrice.toFixed(2)}</span>
              </div>
              <button
                onClick={() => navigate("/checkout")}
                className="w-full bg-red-600 text-white py-2 hover:bg-red-800"
              >
                Proced to checkout
              </button>
            </div>
          </div>
          <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
            <ChangeAddress
              setAddress={setAddress}
              setIsOpenModal={setIsOpenModal}
            />
          </Modal>
        </div>
      ) : (
        <div className="flex justify-center">
          <h1>Your Card Is Empty</h1>
        </div>
      )}
    </div>
  );
};

export default Card;
