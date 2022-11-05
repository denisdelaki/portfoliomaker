import React from 'react';
import Logo from '../Images/logo.png'
import { Link } from "react-router-dom"

import Welcome from '../Images/welcome.gif';
import Port from '../Images/portfolio.svg'


const LandingPage = () => {
    return (

        <div class="main-wrapper">

            <nav className="sidebar" data-simplebar>
                <div className="sidebar-header"><a href="#home" data-scroll><img src={Logo} style={{ height: "65px", width: "65px", }} className="img-fluid sidebar-avatar no-border" alt="Profile avatar" /></a><span className="sidebar-name">PortMaker</span>
                    {/* <p className="sidebar-status">Available for work</p> */}
                </div>
                <div className="sidebar-menu">
                    <ul className="list-unstyled list-menu">
                       <li> <Link className="m-2 menu_" to="login">Log in</Link></li> 
                       <li>
                       <Link className="m-2 menu_" to="signup">Sign Up</Link>
                        </li> 
                       <li>
                       <Link className="m-2 menu_ orange" to="/">Sample Templates</Link>

                        </li> 
                       




                        <li><a className="nav-link " href="#about-area" data-scroll><small>© PortMaker 2022</small></a></li>

                    </ul>
                </div>
            </nav>
            <div class="sections-wrapper">



                <section class="container-fluid bg-white_ center pt-5" id="hire-area">

                    <img style={{ height: "190px", width: "190px", }} className="img-fluid sidebar-avatar no-border mb-3" src={Welcome} alt="Profile avatar" />
                    <h3 className="m-3">Welcome, to PortFolio Maker</h3>
                    <h6 className="slim m-3">Our portfolio template is skillfully developed and adheres to the "portfolio norms" that hiring managers want. With a field-tested portfolio builder, you can stand out and get hired faster.</h6>
                    <Link className="btn button-main button-scheme m-3" to="signup">Get started for free</Link>

                </section>


            </div>
        </div>



    );
}

export default LandingPage;
