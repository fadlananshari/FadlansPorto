import { useEffect } from 'react';
import HeroBg1 from '../assets/herobg-dark.svg';
import HeroBg2 from '../assets/herobgtop-dark.svg';
import Profile from '../assets/profile.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="about" className="pt-20 xl:pt-36 text-6xl mx-auto font-montserrat">
      <div className="relative overflow-hidden h-[80vh] md:h-[65vh] text-center lg:text-start">
        <div className="absolute grid lg:grid-flow-col lg:gap-20 xl:gap-32 mt-5 md:mt-10 mx-auto overflow-hidden">
          <div className="" data-aos="fade-up" data-aos-duration="1400">
            <img src={Profile} alt="" className="left-0 w-[150px] md:w-[230px] lg:w-[350px] bg-blue-300 rounded-full mx-auto" />
          </div>
          <div data-aos="fade-up" data-aos-duration="1400" className="overflow-hidden h-full my-auto pb-5">
            <h2 className="text-xl lg:text-3xl mt-5 lg:mt-0 md:mb-3">Hello, I am</h2>
            <h1 className="text-2xl lg:text-5xl font-bold overflow-hidden mb-5">
              Muhamad Fadlan Anshari, <span className="text-blue-400">Web</span> Developer
            </h1>
            <p className="text-base">
              A Computer Science student at the Institute of Technology Indonesia with experience in web programming, particularly with React.js, Bootstrap, Tailwind, and Express.js.. Have a desire to develop skills in the field of web
              programming.
            </p>
            <a href="/Muhamad_Fadlan_Anshari_Resume.pdf" download="Muhamad_Fadlan_Anshari-Resume.pdf" className="font-semibold py-3 px-5 bg-blue-400 hover:bg-blue-500 rounded-md text-white text-base">
              Download CV
            </a>
          </div>
        </div>

        <img src={HeroBg1} className="w-[15em] animate-spin animate-infinite animate-duration-[5000ms] absolute left-0 -ml-20 md:-ml-60 lg:-ml-80 top-36 md:top-0 -mt-64 md:-mt-96 -z-10" />
        <img src={HeroBg2} className="w-[15em] animate-spin animate-infinite animate-duration-[5000ms] absolute right-0 -mr-52 md:-mr-80 lg:-mr-96 bottom-72 md:bottom-0 -mb-96 -z-10 " />
      </div>
    </div>
  );
};

export default Hero;
