import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface OrderProps {
  order: {
    orderNumber: string;
    products: Array<{
      id: number;
      name: string;
      price: number;
      quantity: number;
    }>;
    shippingInformation: { address: string; city: string; zip: string };
    totalPrice: number;
  } | null; // Разрешаем null
}

const Order: FC<OrderProps> = ({ order }) => {
  const navigate = useNavigate();
  if (!order) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-semibold mb-4">Thank you for your order</h2>
      <p>Your order has been placed succesfully</p>
      <div className="mt-6 p-4 border rounded-lg bg-gray-100">
        <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
        <p>Order Number:{order.orderNumber}</p>
        <div className="mt-4">
          <h4 className="text-md font-semibold mb-2">Shipping Information</h4>
          <p>{order.shippingInformation.address}</p>
          <p>{order.shippingInformation.city}</p>
          <p>{order.shippingInformation.zip}</p>
        </div>

        <div className="mt-4">
          <h4 className="text-md font-semibold mb-2">Items Ordered</h4>
          {order.products.map((item) => (
            <div key={item.id} className="flex justify-between mt-2">
              <p>
                {item.name} x {item.quantity}
              </p>
              <p>${item.price * item.quantity}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-between">
          <span>Total Price:</span>
          <span className="font-semibold">${order.totalPrice}</span>
        </div>
        <div className="mt-6">
          <button className="bg-green-500 text-white py-2 px-4 hover:bg-green-600">
            Order tracking
          </button>
          <button
            onClick={() => navigate("/")}
            className="ml-4 bg-red-600 text-white py-2 px-4 hover:bg-red-800"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
