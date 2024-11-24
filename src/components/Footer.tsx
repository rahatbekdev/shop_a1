import { FC } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer: FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold">Shop</h3>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea et eaque
            corrupti alias libero nulla explicabo facere quidem itaque! Ipsam
            doloribus sed officia sunt accusantium saepe illo et delectus alias!
          </p>
        </div>
        <div className="flex flex-col md:items-center">
          <h4 className="text-lg font-semibold">Quick links</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="#" className="hover:underline hover:text-yellow-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline hover:text-yellow-300">
                Shop
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline hover:text-yellow-300">
                Contact
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline hover:text-yellow-300">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h4 className="text-lg font-semibold">Follow us</h4>
          <div className="flex space-x-4 mt-4">
            {[
              { href: "#", Icon: FaFacebook },
              { href: "#", Icon: FaTwitter },
              { href: "#", Icon: FaGithub },
              { href: "#", Icon: FaLinkedin },
            ].map(({ href, Icon }, index) => (
              <a
                key={index}
                href={href}
                className="text-gray-400 hover:text-blue-400 transform transition-transform duration-200 hover:scale-125"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          <form className="flex items-center justify-center mt-8">
            <input
              type="email"
              placeholder="Enter email..."
              className="w-full p-2 rounded-l-lg bg-gray-800 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <button
              type="submit"
              className="bg-red-600 text-white px-4 py-2 rounded-r-lg border border-red-600 hover:bg-red-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4">
        <div className="container flex flex-col mx-auto md:flex-row justify-between items-center">
          <p>
            Copy<sup>&copy;</sup> 2024 Shop reserved
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="">Privacy Policy</a>
            <a href="">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
