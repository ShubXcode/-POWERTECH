import React from "react";
import Navbar from './Component/NAVBAR/Navbar';
import Home from "./Component/HOME/Home";
import SecondPage from "./Component/SECOND PAGE/SecondPage";
import Logo from "./Component/LOGOS/Logo";
import UnderLine from "./Component/UnderLine";
import SecondPageImage from "./Component/SECOND PAGE/SecondPageImage";
import ThirdPage from "./Component/THIRD PAGE/ThirdPage";
import ForthPage from "./Component/ForthPage/ForthPage";
import FifthPage from "./Component/FIFTH PAGE/FifthPage";
import SixthPage from "./Component/SIXTH PAGE/SixthPage";
import Footer from "./Component/Footer/Footer";


function App() {
  return (
  <>
  <Navbar/>
  <Home/>
  <Logo/>
  <SecondPage/>
  <SecondPageImage/>
  <ThirdPage/>
  <ForthPage/>
  <FifthPage/>
  <UnderLine/>
  <SixthPage/>
  <Footer/>
  </>
  );
}

export default App;
