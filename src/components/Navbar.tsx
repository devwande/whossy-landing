import Logo from "../assets/images/logo.svg";
import Apple from "../assets/images/apple.svg";
import Playstore from "../assets/images/playstore.svg";
import { motion, useCycle } from "framer-motion";
import { useRef } from "react";

const Navbar = () => {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);
  const buttonRef = useRef<HTMLButtonElement>(null);


  return (
    <>
      {/* MOBILE HEADER relative */}
      <header className="absolute top-0 z-20 lg:hidden bg-red text-white max-w-[500px] rounded-lg m-7 overflow-hidden">
        <div className="container flex items-center justify-between py-3 px-3">
          <div className="flex items-center mr-20">
            <img src={Logo} alt="Logo" className="mr-2" />
            <p>whossy</p>
          </div>

          <div className="border-l border-white h-5" />
          <motion.button
            animate={mobileNav ? "open" : "closed"}
            ref={buttonRef}
            onClick={() => toggleMobileNav()}
            className="flex flex-col space-y-1.5 px-4"
          >
            
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 8 },
              }}
              className="w-7 h-0.5 bg-white"
            ></motion.span>
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              className="w-7 h-0.5 bg-white"
            ></motion.span>
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -8 },
              }}
              className="w-7 h-0.5 bg-white"
            ></motion.span>
          </motion.button>
        </div>
      </header>

      {/* DESKTOP HEADER */}
      <header className="relative z-10 bg-red text-white max-w-[600px] m-8 rounded-lg hidden lg:block">
        <div className="container flex justify-between items-center py-3 px-6">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="mr-2" />
            <p>whossy</p>
          </div>
          <div className="border-l border-white h-8"></div>
          <nav className="flex items-center space-x-6">
            <a href="#login">Login</a>
            <a
              href="#create-account"
              className="border bg-white text-red px-3 py-1 rounded-lg"
            >
              Create account
            </a>
          </nav>

          <div className="border-l border-white h-8"></div>

          <div className="flex items-center space-x-4">
            <p>Download on</p>
            <a href="#ios-download" className="hover:underline">
              <img src={Apple} alt="Download on Apple Store" className="h-6" />
            </a>
            <a href="#android-download" className="hover:underline">
              <img
                src={Playstore}
                alt="Download on Google Play"
                className="h-6"
              />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
