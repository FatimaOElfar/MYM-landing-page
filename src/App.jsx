import "./App.css";
import Aboutus from "./Components/Aboutus";
import Developerflutter from "./Components/Developerflutter";
import "./i18";
import Header from "./Components/header/Header";
import Helpus from "./Components/Helpus";
import LandTeam from "./Components/LandTeam";
import TechnologiesUsed from "./Components/TechnologiesUsed/TechnologiesUsed";

import Footer from "./Components/footer/Footer";
import Services from "./Components/serveces/Services";
// import BsWhatsapp from '@headlessui/react'
import { BsWhatsapp } from "react-icons/bs";
import ContactUs from "./Components/contactus/ContactUs";

function App() {
  return (
      <div className='bg-white h-full dark:text-gray-200 dark:bg-slate-900 duration-100'>
        <Header/>
        <Aboutus/>
        <Services/>
        <Helpus/>
        <LandTeam/>
        <TechnologiesUsed/>
        <Developerflutter/>
        <ContactUs/>
        <Footer/>
        <div className="w-12 h-12 fixed left-5 bottom-5 rounded-lg bg-green-500 hover:bg-green-600 active:bg-lime-500 focus:outline-none focus:ring focus:ring-lime-300 flex flex-row justify-center items-center">
          <a href="https://wa.me/201126765371" target={"_blank"} rel="noreferrer">
        <BsWhatsapp className='social-media' style={{color:'#fff'}} />
          </a>
        </div>
      </div>

  );
}

export default App;
