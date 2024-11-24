import { FC } from "react";

type RegisterProps = {
  openLogin?: () => void;
};
const Register: FC<RegisterProps> = ({ openLogin }) => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              placeholder="enter name..."
              className="w-full px-3 py-2 border"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="enter email..."
              className="w-full px-3 py-2 border"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="enter password"
              className="w-full px-3 py-2 border"
            />
          </div>

          <div className="mb-4">
            <button type="submit" className="w-full bg-red-600 text-white py-2">
              Sign Up
            </button>
          </div>
        </form>

        <div className="text-center">
          <span className="text-gray-700">Already Have an Account?</span>
          <button onClick={openLogin} className="text-red-800">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
