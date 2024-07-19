import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Portofolio from './components/Portofolio';

function App() {
  return (
    <>
      <Navbar />
      <div className="w-screen">
        <div className="px-5 max-w-screen-xl mx-auto">
          <Hero />
          <About />
          <Experience/>
          <Portofolio />
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
