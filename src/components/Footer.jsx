import { FaGreaterThan, FaLessThan } from 'react-icons/fa';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer id='contact' className="bg-white rounded-lg dark:bg-gray-900 m-4 font-montserrat">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="grid grid-flow-row gap-7">
            <a href="" className="flex font-montserrat text-blue-400 text-2xl md:text-3xl font-bold">
              <FaLessThan />
              /MYPORTO
              <FaGreaterThan />
            </a>
            <ul className="font-montserrat font-medium text-lg grid grid-flow-row md:gap-2">
              <li>
                <a href="#about" className="block py-2 md:px-3 text-gray-900 rounded md:p-0 hvr-underline-from-center w-max">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#experience" className="block py-2 md:px-3 text-gray-900 rounded md:p-0 hvr-underline-from-center w-max">
                  EXPERIENCE
                </a>
              </li>
              <li>
                <a href="#portfolio" className="block py-2 md:px-3 text-gray-900 rounded md:p-0 hvr-underline-from-center w-max">
                  PORTFOLIO
                </a>
              </li>
              <li>
                <a href="#contact" className="block py-2 md:px-3 text-gray-900 rounded md:p-0 hvr-underline-from-center w-max">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="flex gap-5 mb-6">
            <a href='https://www.linkedin.com/in/muhamad-fadlan-anshari/' className='text-2xl rounded-full border border-black p-2 hover:border-blue-500 hover:text-blue-500'><FaLinkedin/></a>
            <a href='https://github.com/fadlananshari' className='text-2xl rounded-full border border-black p-2 hover:border-black hover:text-black'><FaGithub/></a>
            <a href='mailto:fadlananshari06@gmail.com' className='text-2xl rounded-full border border-black p-2 hover:border-red-500 hover:text-red-500'><BiLogoGmail/></a>
          </div>
          <p>Developed with love by Muhamad Fadlan Anshari</p>
          <p>&#169;Copyright {currentYear}</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
