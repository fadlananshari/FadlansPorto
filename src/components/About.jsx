import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa6';
import { FaBootstrap } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaReact } from 'react-icons/fa';
import { FaPhp } from 'react-icons/fa';
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import Marquee from 'react-fast-marquee';

const About = () => {
  return (
    <Marquee className="">
      <div>
        <FaHtml5 className='mx-5 text-5xl md:text-7xl hover:text-orange-500 duration-300'/>
      </div>
      <div>
        <FaCss3Alt  className='mx-5 text-5xl md:text-7xl hover:text-blue-500 duration-300'/>
      </div>
      <div>
        <IoLogoJavascript  className='mx-5 text-5xl md:text-7xl hover:text-yellow-300 duration-300'/>
      </div>
      <div>
        <FaBootstrap  className='mx-5 text-5xl md:text-7xl hover:text-purple-500 duration-300'/>
      </div>
      <div>
        <RiTailwindCssFill  className='mx-5 text-5xl md:text-7xl hover:text-blue-300 duration-300'/>
      </div>
      <div>
        <FaReact  className='mx-5 text-5xl md:text-7xl hover:text-blue-500 duration-300'/>
      </div>
      <div>
        <FaPhp  className='mx-5 text-5xl md:text-7xl hover:text-purple-600 duration-300'/>
      </div>
      <div>
        <FaNodeJs  className='mx-5 text-5xl md:text-7xl hover:text-green-400 duration-300'/>
      </div>
      <div>
        <SiExpress  className='mx-5 text-5xl md:text-7xl'/>
      </div>
      <div>
        <FaLaravel className='mx-5 text-5xl md:text-7xl hover:text-red-600 duration-300'/>
      </div>
      <div>
        <GrMysql className='mx-5 text-5xl md:text-7xl hover:text-blue-400 duration-300'/>
      </div>
      <div>
        <FaGithub  className='mx-5 text-5xl md:text-7xl'/>
      </div>
    </Marquee>
  );
};

export default About;
