import { useEffect } from 'react';
import Mockup1 from '../assets/sekolahkakseto.png';
import Mockup2 from '../assets/furniro.png';
import Mockup3 from '../assets/Destinize-Poster.png'
import Modal from './Modal';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portofolio = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="portfolio" className="py-20 lg:py-28 font-montserrat">
      <h1 data-aos="fade-up" data-aos-duration="1000" className="text-4xl lg:text-5xl font-montserrat font-semibold text-blue-400 mb-3 overflow-hidden">
        Portfolio
      </h1>
      <p data-aos="fade-up" data-aos-duration="1100" className="mb-5">
        Here are some projects that I have worked on previously. Please feel free to take a look.
      </p>
      <div className="grid xl:grid-flow-col xl:grid-cols-4 gap-10 overflow-hidden pb-10 px-4">
        <a data-aos="fade-up" data-aos-duration="1200" href="http://sekolahkakseto.sch.id" className="max-w-sm bg-white rounded-2xl shadow hover:shadow-xl duration-500 mx-auto">
          <div className="">
            <img className="rounded-t-lg" src={Mockup1} alt="" />
          </div>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">Sekolah Kak Seto</h5>
            </a>
            <p className="mb-3 font-normal">Discover the Sekolah Kak Seto web profile, crafted with React and Tailwind CSS. This project highlights the school&apos;s values and programs through an engaging and responsive design.</p>
          </div>
        </a>
        <a data-aos="fade-up" data-aos-duration="1200" href="https://ecommerce-three-swart-28.vercel.app/" className="max-w-sm bg-white rounded-2xl shadow hover:shadow-xl duration-500 mx-auto">
          <div>
            <img className="rounded-t-lg" src={Mockup2} alt="" />
          </div>
          <div className="p-5">
            <a href="">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">Furniro Furniture</h5>
            </a>
            <p className="mb-3 font-normal0">Furniro Furniture landing page, built with React and Bootstrap, showcasing a sleek and user-friendly e-commerce experience for furniture shopping.</p>
          </div>
        </a>
        <a data-aos="fade-up" data-aos-duration="1200" href="https://destinize-liard.vercel.app/" className="max-w-sm bg-white rounded-2xl shadow hover:shadow-xl duration-500 mx-auto">
          <div className="">
            <img className="rounded-t-lg" src={Mockup3} alt="" />
          </div>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">Destinize</h5>
            </a>
            <p className="mb-3 font-normal">Destinize is a tour package booking website built with React.js, Tailwind CSS, Express.js, and MySQL, offering a fast and easy-to-use booking experience.</p>
          </div>
        </a>
      </div>
      <Modal />
    </div>
  );
};

export default Portofolio;
