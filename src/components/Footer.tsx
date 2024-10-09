import Logo from "../assets/images/logo.svg";
import Twitter from "../assets/images/twitter.svg";
import Instagram from "../assets/images/instagram.svg";
import Facebook from "../assets/images/facebook.svg";
import Telegram from "../assets/images/telegram.svg";
import AppleStore from "../assets/images/AppleStore.svg";
import PlayStore from "../assets/images/Play-Store.svg";

const Footer = () => {
  return (
    <div className="lg:flex lg:justify-center px-20 bg-red w-full lg:h-[250px]">
      <footer className=" text-white py-10 w-full space-y-4 lg:grid lg:grid-cols-3 lg:items-center">
        <div className="space-y-3">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="mr-2" />
            <p>whossy</p>
          </div>
          <div>
            <p className="mb-6 font-medium">whossy © 2024. All rights reserved</p>
          </div>
          <div className="flex space-x-10">
            <a href="#x">
              <img src={Twitter} alt="X" />
            </a>
            <a href="#instagram">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="#facebook">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="#telegram">
              <img src={Telegram} alt="Telegram" />
            </a>
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <a href="#faq">FAQ</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact Us</a>
        </div>

        <div className="flex flex-col space-y-5 ">
          <h3 className="font-bold">DOWNLOAD OUR APP</h3>
            <div className="space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:space-x-2">
              <div>
                <a href="#app-store">
                  <img src={AppleStore} alt="App Store" />
                </a>
              </div>
              <div>
              <a href="#play-store">
                <img src={PlayStore} alt="Play Store" />
              </a>
              </div>
            </div>

        </div>

      </footer>
    </div>
  );
};

export default Footer;
