import React, { useState } from 'react';
import LoginPic from '../Images/login.gif'
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom"

import Logo from '../Images/logo.png'
// import Logo from '../Images/logo.png';



const Login = () => {
    let navigate = useNavigate();
    //STATES
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    //HANDLING INPUT
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    //HANDLING SUBMIT
    const handleSubmit = (e) => {
        e.preventDefault();
        const objectTosend = {
            password: password,
            email: email
        }
        fetch("https://portfoliomaker-app.herokuapp.com/login",
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(objectTosend)
            })
            .then((rawData) => {
                if (rawData.ok) {
                    rawData.json().then((data) => {
                        //   setUserProfile(data);
                        console.log(data)
                        localStorage.setItem("signup_id",data.id)
                        // console.log(localStorage.getItem("signup_id"));
                        toast.success("Loged in successfully!")
                        navigate("/dashboard")
                        


                    })
                }
                else{
                    setEmail("")
                    setPassword("")
                    toast.error('Wrong email or password')
                }
            })

        // .catch((err) => {
        //     //  console.log(err.message);
        //     toast.error(err)

        // });

    }
    return (
        <div class="main-wrapper">
            <Toaster />
            <nav className="sidebar" data-simplebar>
                <div className="sidebar-header"><a href="#home" data-scroll><img src={Logo} style={{ height: "65px", width: "65px", }} className="img-fluid sidebar-avatar no-border" alt="Profile avatar" /></a><span className="sidebar-name">PortMaker</span>
                    {/* <p className="sidebar-status">Available for work</p> */}
                </div>
                <div className="sidebar-menu">
                    <ul className="list-unstyled list-menu">
                       


                      
                        <li> <Link className="m-2 menu_ orange" to="/login">Log in</Link></li>
                        <li>
                            <Link className="m-2 menu_" to="/signup">Sign Up</Link>
                        </li>
                        <li>
                            <Link className="m-2 menu_ " to="/">Sample Templates</Link>
                        </li>



                        <li><a className="nav-link " href="#about-area" data-scroll><small>© PortMaker 2022</small></a></li>

                    </ul>
                </div>
            </nav>
            <div class="sections-wrapper">
                <section class="single-section contact-area alt-bg" id="contact-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="section-heading">

                                    <img src={LoginPic} class="logo" /><br /><br />
                                    <h2 class="section-title">Welcome To PortMaker</h2>
                                    <p>Don't damage your job hunt before it starts. Using our handcrafted portfolio builder, you can create a professional portfolio.</p>

                                    <p class="section-description">Please Log in to proceed</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <form class="contact-form " onSubmit={handleSubmit} id="contact-form" >
                                            <div class="row">
                                                <div class="col-12 col-md-12 form-group pt-4"><input class="form-control" id="contact-name" value={email} onChange={handleEmail} type="email" placeholder=" Email" required="" /></div>
                                                <div class="col-12 col-md-12 form-group text-left "><input class="form-control mb-3" id="contact-email" value={password} onChange={handlePassword} type="password" placeholder="Password" required="" />
                                                    <button class="btn button-main button-scheme mr-2" type="submit">Log in</button>
                                                    <Link className="btn button-main button-scheme mr-2" to="/signup">Create Account</Link>

                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Login;
