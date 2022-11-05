import React, { useEffect,useState } from 'react';
import Home from './Home';
import About from './AboutMe';
import Services from './Services';
import Projects from './Projects';
import Client from './Clients';
import Footer from './Footer';
import HireMe from './HireMe';
import Sidebar from './Sidebar';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom"

const Portfolio = () => {

    const [userProfile, setUserProfile] = useState({})
    const [servicesData, setServicesData] = useState({})
    const [projectsData, setProjectsData] = useState({})



    //FETCH ALL DATA
    useEffect(() => {
        let user_id=localStorage.getItem('signup_id')
        fetch(`https://portfoliomaker-app.herokuapp.com/signups/${user_id}`).then((rawData) => {
            if (rawData.ok) {
                rawData.json().then((data) => {
                  setUserProfile(data.user);
                  setServicesData(data.service);
                  setProjectsData(data.project)
                console.log(data)
                })
              }
    
        })}, [])
        
        console.log(userProfile.title);
        return (
            <div class="main-wrapper">
                <Toaster />
                <Sidebar sidebar={userProfile}/>
                <div class="sections-wrapper">
                    <Home homeData={userProfile}/>
                    <About about={userProfile}/>
                    <Services services={servicesData} />
                    <HireMe className="mt-4"/>

        
                    <Projects projects={projectsData} />
                    <Client />
                    <Footer footer={userProfile}/>
                    
                </div>
            </div>

        );

        }
        export default Portfolio;
