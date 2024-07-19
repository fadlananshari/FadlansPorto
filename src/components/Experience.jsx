import { useEffect } from 'react';
import InfiniteLearning from '../assets/Untitled.png';
import SKS from '../assets/logo-sks.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="experience" className="pt-32 font-montserrat">
      <h2 data-aos="fade-up" data-aos-duration="1000" className="text-4xl lg:text-5xl font-montserrat font-semibold text-blue-400 mb-3 overflow-hidden">Experience</h2>
      <div className="grid md:grid-flow-col mt-10">
        <div className='overflow-hidden'>
          <h4 data-aos="fade-up" data-aos-duration="1000" className="font-bold text-lg">Education History</h4>
          <div className="grid grid-flow-row gap-10 border-l border-slate-400 p-5 mt-5 overflow-hidden">
            <div data-aos="fade-up" data-aos-duration="1000">
              <h4 className="font-bold">Computer Science</h4>
              <p>Indonesian Institute of Technology, Bacholar Degree</p>
              <small className="text-slate-700">2021 - Present &bull; South Tangerang, Banten</small>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <h4 className="font-bold">Natural Science</h4>
              <p>SMAN 16 Kab. Tangerang</p>
              <small className="text-slate-700">2018 - 2021 &bull; Tangerang Regency, Banten</small>
            </div>
          </div>
        </div>
        <div className="grid grid-flow-row gap-7 pb-5 mt-7 md:mt-0 overflow-hidden">
          <h4 data-aos="fade-up" data-aos-duration="1000" className="font-bold text-lg">Experience</h4>
          <div data-aos="fade-up" data-aos-duration="1000" className="flex gap-4 md:gap-10 py-4 px-6 md:px-10 shadow rounded-xl w-max hover:shadow-lg">
            <img src={SKS} alt="" className="w-16 my-auto" />
            <div>
              <h4 className="font-bold">Programmer Intern</h4>
              <p className="text-sm">Yayasan Kazeto Putra Perkasa</p>
              <p className="text-sm">South Tangerang, Banten</p>
              <small>February - June</small>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" className="flex gap-4 md:gap-10 py-4 pl-6 pr-3 md:pl-10 md:pr-6 shadow rounded-xl w-max hover:shadow-lg">
            <img src={InfiniteLearning} alt="" className="w-16 my-auto bg-black" />
            <div>
              <h4 className="font-bold">Web Development Mentee</h4>
              <p className="text-sm">PT Kinema Systrans Multimedia</p>
              <p className="text-sm">Batam, Riau</p>
              <small>February - June</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
