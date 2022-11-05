// import logo from './logo.svg';
import './App.css';
import AboutMe from './Components/AboutMe'
import Contact from './Components/Clients'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import LandingPage from './Components/LandingPage'
import Projects from './Components/Projects'
import Services from './Components/Services'
import Sidebar from './Components/Sidebar'
import Footer from './Components/Footer'
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Preloader from './Components/Preloader';
import React, { useEffect, useState } from 'react';
import Portfolio from './Components/Portfolio';
import { Routes, Route, BrowserRouter } from "react-router-dom"

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((check) => {
          setUser(check);
          console.log(check);
        })
      }
    });
  }, []);

  if (user) {


  } else {



  }
  return (
    <div className="App">
      {/* <Preloader /> */}
      
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={ <Home/> } /> */}
          <Route path="about" element={<AboutMe />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Routes>
    </BrowserRouter>

      <div class="sections-wrapper">

        {/*      
      <Dashboard/>
     
      <Projects/>
      <Contact/> 
<LandingPage/> */}











      </div>


    </div>
  );
}

export default App;
