import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Couple from "./assets/images/couple.svg";
import Rec1 from "./assets/images/Rectangle1.svg";
import Rec2 from "./assets/images/Rectangle2.svg";
import Rec3 from "./assets/images/Rectangle3.svg";
import Rec4 from "./assets/images/Rectangle4.svg";
import Wedding from "./assets/images/wedding.svg";
import ArrowLeft from "./assets/images/ArrowLeft.svg";
import ArrowRight from "./assets/images/ArrowRight.svg";

const Landing = () => {
  return (
    <div className="flex flex-col items-center">
      {/* FIRST PAGE */}

      <section className="relative w-full bg-white overflow-hidden">
        <div className=" absolute grid grid-cols-6 h-screen w-full">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="flex justify-center">
              <div className="w-[1px] h-screen bg-gradient-to-b from-[#D9D9D9] to-[#FEFEFE]"></div>
            </div>
          ))}
        </div>

        <div className="fixed top-0 w-full z-20">
            <Navbar/>
        </div>

        <div className="relative z-10 flex flex-col items-center pt-32">
          <p className="text-5xl lg:text-8xl text-center  px-5 ">
            SWIPE, MATCH, LOVE - YOUR PERFECT PARTNER AWAITS!
          </p>
          <button className="mt-5 bg-red text-white py-2 px-3 rounded-lg">
            Start Swiping
          </button>     
        </div>

        <div className="relative h-screen">
            <img src={Rec1} alt="frame 1" className="lg:w-1/6 absolute top-[-20%] left-[50%] lg:top-[-35%] lg:left-[80%] transform -translate-x-1/2"/>
            <img src={Rec2} alt="frame 2" className="lg:w-1/6 absolute top-[10%] left-[40%] lg:top-[5%] transform -translate-x-1/2"/>
            <img src={Rec3} alt="frame 3" className="lg:w-1/6 absolute top-[25%] left-[75%] lg:top-[15%] lg:left-[90%] transform -translate-x-1/2"/>
            <img src={Rec4} alt="frame 4" className="lg:w-1/6 absolute top-[42%] left-[0%] lg:top-[25%] lg:left-[5%] transform "/>
        </div>
      </section>

      {/* SECOND PAGE */}
      <section className="relative w-full bg-white overflow-hidden space-y-5 lg:grid lg:grid-cols-2 justify-center max-w-[1216px] items-center">
        <div className="text-center lg:text-start px-5 space-y-5">
            <p className="text-5xl lg:text-7.5xl">LOVE, NO PASSPORT REQUIRED</p>
            <p className="text-sm text-gray">Explore connections that span continents without leaving home. Our app brings you closer to people abroad, creating meaningful relationships no matter where you are.</p>
            <button className="mt-5 bg-red text-white py-2 px-3 rounded-lg">
            Join Now
          </button>         
        </div>
        <img src={Wedding} alt="wedding-image" className="w-3/4 mx-auto"/>
      </section>


    {/* LAST PAGE */}

    {/* MOBILE */}
    <section className="block lg:hidden relative w-full py-32 space-y-10">
        <img src={Couple} alt="Image of a couple" className="mx-auto w-4/5 "/>

        <div className=" text-center lg:text-start space-y-3 lg:w-[320px]">
            <div className="lg:absolute right-5 bottom-40">
                <p className=" text-xl lg:text-3xl">STEPHANIE & DAVID</p>
                <p className="text-sm text-gray lg:text-lg">
                    He was my first thought when I woke up in the morning.
                </p>
            </div>
            <div className="flex items-center lg:absolute left-32 bottom-20 justify-center space-x-10">
                <button><img src={ArrowLeft} alt="left arrow" /></button>
                <button><img src={ArrowRight} alt="right arrow" /></button>
            </div>
        </div>
    </section>

    {/* DESKTOP */}
    <section className="hidden lg:block relative pb-20  w-full bg-white pt-32 space-y-10 ">
          <div className="mx-8 w-4/5 max-w-[500px]">
            <p className="text-3xl lg:text-5xl italic leading-light">HEAR FROM THOSE WHO FOUND LOVE</p>      
          </div>

          <div className="lg:grid lg:grid-cols-3">

            <div className="flex items-end justify-start pl-8 space-x-10">
                <button><img src={ArrowLeft} alt="left arrow" /></button>
                <button><img src={ArrowRight} alt="right arrow" /></button>
            </div>

            <div>
                <img src={Couple} alt="Image of a couple" className="mx-auto w-auto pr-5"/>
            </div>

            <div className="w-4/5 flex items-end ">
                <div>
                    <p className=" text-xl lg:text-3xl">STEPHANIE & DAVID</p>
                    <p className="text-sm text-gray lg:text-lg">
                      He was my first thought when I woke up in the morning.
                    </p>
                </div>
            </div>
          </div>

    </section>

    


       <Footer />
    </div>
  );
};

export default Landing;
