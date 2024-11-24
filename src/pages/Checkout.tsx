import { FC, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useAppSelector } from "../hooks/hooks";
import { useNavigate } from "react-router-dom";

interface CheckoutProps {
  setOrder: (order: {
    products: Array<{
      id: number;
      name: string;
      price: number;
      quantity: number;
    }>;
    orderNumber: string;
    shippingInformation: { address: string; city: string; zip: string };
    totalPrice: number;
  }) => void;
}

const Checkout: FC<CheckoutProps> = ({ setOrder }) => {
  const [billingToggle, setBillingToggle] = useState<boolean>(true);
  const [shippingToggle, setShippingToggle] = useState<boolean>(false);
  const [paymentToggle, setPaymentToggle] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<string>("cod");
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    zip: "",
  });

  const cart = useAppSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleOrder = () => {
    const newOrder = {
      products: cart.products,
      orderNumber: "12345",
      shippingInformation: shippingInfo,
      totalPrice: cart.totalPrice,
    };
    setOrder(newOrder);
    navigate("/order-confirmation");
  };
  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4">Checkout</h3>
      <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
        <div className="md:w-2/3">
          <div className="border p-2 mb-6">
            <div
              onClick={() => setBillingToggle(!billingToggle)}
              className="flex items-center justify-between cursor-pointer"
            >
              <h3 className="text-lg font-semibold mb-2">
                Billing Information
              </h3>
              {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            {/* <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}> */}
            <div hidden={!billingToggle} className="space-y-4">
              {/*//!  hidden---elementti korgozboyt. divte hidden bar */}
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Name..."
                  className="w-full px-3 py-2 border"
                />
              </div>

              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Email..."
                  className="w-full px-3 py-2 border"
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone</label>
                <input
                  type="number"
                  placeholder="Phone..."
                  className="w-full px-3 py-2 border"
                />
              </div>
            </div>
          </div>

          <div className="border p-2 mb-6">
            <div
              onClick={() => setShippingToggle(!shippingToggle)}
              className="flex items-center justify-between cursor-pointer"
            >
              <h3 className="text-lg font-semibold mb-2">
                Shipping Information
              </h3>
              {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            {/* <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}> */}
            <div hidden={!shippingToggle} className="space-y-4">
              {/*//!  hidden---elementti korgozboyt. divte hidden bar */}
              <div>
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Address..."
                  className="w-full px-3 py-2 border"
                  onChange={(e) =>
                    setShippingInfo({
                      ...shippingInfo,
                      address: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label className="block text-gray-700">City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="City..."
                  onChange={(e) =>
                    setShippingInfo({
                      ...shippingInfo,
                      city: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border"
                />
              </div>
              <div>
                <label className="block text-gray-700">Zip Code</label>
                <input
                  type="number"
                  name="zip"
                  placeholder="Zip Code..."
                  onChange={(e) =>
                    setShippingInfo({
                      ...shippingInfo,
                      zip: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border"
                />
              </div>
            </div>
          </div>

          <div className="border p-2 mb-6">
            <div
              onClick={() => setPaymentToggle(!paymentToggle)}
              className="flex items-center justify-between cursor-pointer"
            >
              <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
              {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            {/* <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}> */}
            <div hidden={!paymentToggle} className="space-y-4">
              {/*//!  hidden---elementti korgozboyt. divte hidden bar */}
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                <label className="block text-gray-700 ml-2">
                  Cash on Delivery
                </label>
              </div>

              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "dc"}
                  onChange={() => setPaymentMethod("dc")}
                />
                <label className="block text-gray-700 ml-2">Debit Card</label>
              </div>

              {paymentMethod === "dc" && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Debit Card Information
                  </h3>
                  <div className="mb-4">
                    <label className="block text-green-700 font-semibold mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Card Number..."
                      className="border p-2 w-full rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-green-700 font-semibold mb-2">
                      Card Holder Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Card Holder Name..."
                      className="border p-2 w-full rounded"
                    />
                  </div>
                  <div className="flex justify-between mb-4">
                    <div className="w-1/2 mr-2">
                      <label className="block text-green-700 font-semibold mb-2">
                        Expire Date
                      </label>
                      <input
                        type="date"
                        placeholder="MM/YY"
                        className="border p-2 w-full rounded"
                      />
                    </div>
                    <div className="w-1/2 ml-2">
                      <label className="block text-green-700 font-semibold mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="CVV"
                        className="border p-2 w-full rounded"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-lg font-semibold mb-4">Orders Summary</h3>
          <div className="space-y-4">
            {cart.products.map((item) => (
              <div key={item.id} className="flex justify-between">
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt=""
                    className="w-16 h-16 object-contain rounded"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">{item.name}</h4>
                    <p className="text-gray-600">
                      ${item.price} x {item.quantity}
                    </p>
                  </div>
                </div>

                <div className="text-gray-800">
                  ${item.price * item.quantity}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between">
              <span>Total Price:</span>
              <span className="font-semibold">
                ${cart.totalPrice.toFixed(2)}
              </span>
            </div>
          </div>

          <button
            onClick={handleOrder}
            className="w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
