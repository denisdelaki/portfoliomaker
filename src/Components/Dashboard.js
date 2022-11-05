import React, { useState, useEffect } from 'react';
import Message from '../Images/messages.svg';
import Visitors from '../Images/webvisitors.svg';
import Profile_ from '../Images/profile.svg';
import Ready from '../Images/ready.gif'
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom"

const Profile = ({ updateState }) => {
    //STATES
    const [profile, setProfile] = useState({
        first_name: "",
        last_name: "",
        email: "",
        age: null,
        location: "",
        profile_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/512px-Circle-icons-profile.svg.png?20160314153816",
        title: "",
        description: "",
        phone_number: "",
        linkedin_link: "",
        github_link: "",
        signup_id: 1,
    });

    //HANDLING INPUTS
    function handleChange(e) {
        const key = e.target.id;
        setProfile({ ...profile, [key]: e.target.value });
    }

    const handleProfile = (event) => {
        event.preventDefault();
        fetch("/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                first_name: profile.first_name,
                last_name: profile.last_name,
                email: profile.email,
                age: profile.age,
                location: profile.location,
                profile_url: profile.profile_url,
                title: profile.title,
                description: profile.description,
                phone_number: profile.phone_number,
                linkedin_link: profile.linkedin_link,
                github_link: profile.github_link,
                signup_id: localStorage.getItem("signup_id"),

            }),
        })
            .then((res) => res.json())
            .then((response) => {
                setProfile({
                    ...profile,
                    first_name: "",
                    last_name: "",
                    email: "",
                    age: null,
                    location: "",
                    profile_url: "",
                    title: "",
                    description: "",
                    phone_number: "",
                    linkedin_link: "",
                    github_link: "",
                    signup_id: "",

                });
                updateState()
                // console.log(response);
                // toast.success('Submitted successfully!')

            }).error((error) => {
                toast.error('Failed to submit')

            })



    }


    return (
        <div>
            <Toaster />
            {/* //PROFILE */}

            <div class="row">
                <div class="col-12">
                    <div class="level1">
                        <h6 className="text-white">User Details</h6>
                        <h6 className=" red_text text-white">Step 1</h6>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <form class="contact-form" id="contact-form" onSubmit={handleProfile} >
                        <div class="row">
                            <div class="col-12 col-md-6 form-group"><input id="first_name" class="form-control" type="text" placeholder="First name" value={profile.first_name} onChange={handleChange} required="true" /></div>
                            <div class="col-12 col-md-6 form-group"><input id="last_name" input class="form-control" type="text" placeholder="Last name" value={profile.last_name} onChange={handleChange} required="true" /></div>
                            <div class="col-12 col-md-6 form-group"><input id="phone_number" class="form-control" type="text" placeholder="Phone number" value={profile.phone_number} onChange={handleChange} required="true" /></div>
                            <div class="col-12 col-md-6 form-group"><input id="email" class="form-control" type="email" value={profile.email} onChange={handleChange} placeholder="Email" required="true" /></div>
                            <div class="col-12 col-md-6 form-group"><input id="age" class="form-control" type="number" value={profile.age} onChange={handleChange} placeholder="Age" required="true" /></div>
                            <div class="col-12 col-md-6 form-group"><input id="location" class="form-control" type="text" value={profile.location} onChange={handleChange} placeholder="Location" required="true" /></div>
                            <div class="col-12 col-md-6 form-group"><input id="profile_url" class="form-control" type="text" value={profile.profile_url} onChange={handleChange} placeholder="Profile pic url" required="true" /></div>
                            <div class="col-12 col-md-6 form-group"><input id="title" class="form-control" type="text" value={profile.title} onChange={handleChange} placeholder="Your title" required="true" /></div>
                            <div class="col-12 col-md-12 form-group"><textarea id="description" class="form-control" type="text" value={profile.description} onChange={handleChange} placeholder="Brief description about your profession." required="true" ></textarea></div>
                            <div class="col-12 col-md-6 form-group"><input id="github_link" class="form-control" type="text" value={profile.github_link} onChange={handleChange} placeholder="Github link" /></div>
                            <div class="col-12 col-md-6 form-group"><input id="linkedin_link" class="form-control" type="text" value={profile.linkedin_link} onChange={handleChange} placeholder="Linkedin link" /></div>

                            <div class="col-12 form-submit"><button class="btn button-main button-scheme" type="submit">Submit/Next step</button>
                                <p class="contact-feedback"></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

const Copy = () => {
    return (
        <div>

            {/* //PROFILE */}

            <div class="row">
                <div class="col-12">
                    <div class="level1">
                        <h6 className="text-white">User Details</h6>
                        <h6 className=" red_text text-white">Step 1</h6>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <form class="contact-form" id="contact-form" >
                        <div class="row">
                            <div class="col-12 col-md-6 form-group">
                                <input class="form-control" type="text" placeholder="First name" required="true" />
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <div class="input-group-append">
                                        <span class="input-group-text" id="basic-addon2">Copy Link</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 col-md-6 form-group"><input class="form-control" type="text" placeholder="Second name" required="true" /></div>

                            <div class="col-12 form-submit"><button class="btn button-main button-scheme" id="contact-submit" type="submit">Submit/Next step</button>
                                <p class="contact-feedback"></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
const Services = ({ updateState }) => {
    const [service, setService] = useState({
        service_title: "",
        description: "",
        user_id: localStorage.getItem('user_id'),
    });

    const handleService = (event) => {
        event.preventDefault();
        fetch("https://portfoliomaker-app.herokuapp.com/services", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                service_title: service.service_title,
                description: service.description,
                user_id: localStorage.getItem('user_id')

            }),
        })
            .then((res) => res.json())
            .then((response) => {
                setService({
                    ...service,
                    service_title: "",
                    description: "",
                    user_id: localStorage.getItem("user_id")
                });
                updateState()

                toast.success('Srvice submitted successfully!')

            }).error((error) => {
                toast.error('Failed to submit')

            })



    }

    function handleChange(e) {
        const key = e.target.id;
        setService({ ...service, [key]: e.target.value });
    }
    return (
        <div>
            {/* //PROFILE */}
            <div class="row mt-3">
                <div class="col-12">
                    <div class="level1">
                        <h6 className="text-white">Services</h6>
                        <h6 className=" red_text text-white">Step 3</h6>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <form class="contact-form" id="contact-form" onSubmit={handleService}>
                        <div class="row">
                            <div class="col-12 col-md-6 form-group"><input id="service_title" class="form-control" type="text" onChange={handleChange} value={service.service_title} placeholder="Service type" required="true" /></div>
                            <div class="col-12 col-md-6 form-group"><input id="description" class="form-control" type="text" onChange={handleChange} placeholder="Description" value={service.description} required="true" /></div>
                            <div class="col-12 form-submit"><button class="btn button-main button-scheme" type="submit">Submit/Next step</button>
                                <p class="contact-feedback"></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>)
}

{/* //PROFILE */ }

const Projects = ({ updateState }) => {
    const [project, setProject] = useState({
        project_title: "",
        project_link: "",
        image_url: "",
    });

    const handleProject = (event) => {
        event.preventDefault();
        fetch("https://portfoliomaker-app.herokuapp.com/projects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                project_title: project.project_title,
                project_link: project.project_link,
                image_url: project.image_url,
                user_id: localStorage.getItem("user_id")

            }),
        })
            .then((res) => res.json())
            .then((response) => {
                setProject({
                    ...project,
                    project_title: "",
                    project_link: "",
                    image_url: ""
                });

                // console.log(response);
                toast.success('Project submitted successfully!')
                updateState()

            }).error((error) => {
                toast.error('Failed to submit')

            })



    }

    function handleChange(e) {
        const key = e.target.id;
        setProject({ ...project, [key]: e.target.value });
    }
    return (
        <div>
            <div class="row mt-3">
                <div class="col-12">
                    <div class="level2">
                        <h6 className="text-white">Projects</h6>
                        <h6 className=" red_text text-white">Step 2</h6>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <form class="contact-form" id="contact-form" onSubmit={handleProject}>
                        <div class="row">
                            <div class="col-12 col-md-6 form-group"><input id="project_title" valu={project.project_title} class="form-control" type="text" onChange={handleChange} placeholder="Title" required="true" /></div>
                            <div class="col-12 col-md-6 form-group"><input id="project_link" value={project.project_link} class="form-control" type="text" onChange={handleChange} placeholder="Project link" required="true" /></div>

                            <div class="col-12 col-md-6 form-group"><input id="image_url" value={project.image_url} class="form-control" type="text" onChange={handleChange} placeholder="Image URL" required="true" /><img style={{ height: "40px", width: "40px" }} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" /></div>


                            <div class="col-12 form-submit"><button class="btn button-main button-scheme" id="contact-submit" type="submit">Submit/Next step</button>
                                <p class="contact-feedback"></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}



const Dashboard = () => {
    //HIDDING AND SHOWING FORMS
    const [usersHide, setUsersHide] = useState(false)
    const [projectHide, setProjectHide] = useState(false)
    const [servicesHide, setServiceHide] = useState(false)
    const [completerHide, setCompleteHide] = useState(false)
    const [clients, setClients] = useState([]);
    const [userId, setUserId] = useState([])
    const [users, setUsers] = useState([])
    const [triggerLogout, setTriggerLogout] = useState(false);
    const [percentage, setPercentage] = useState("0")
    const navigate = useNavigate()
    const [waitForChanges, setWaitForChanges] = useState(false);
    // const [url,setUrl]= useState("")

    // var dummy = document.createElement('input'),
    // var url_= window.location.href;
    // setUrl(url_);
    // setUrl(window.location.href)
    //STATTE UPDATER
    const updateState = () => {
        setWaitForChanges(!waitForChanges)
    }


    //CHECK PROGRESS
    useEffect(() => {
        fetch("https://portfoliomaker-app.herokuapp.com/clients")
            .then((data) => {
                if (data.ok) {
                    data.json().then((data) => {
                        //   setUserProfile(data);
                        setClients(data)
                        console.log(data);
                    })
                }
            });


        //Check log in status
        fetch("https://portfoliomaker-app.herokuapp.com/get_user")
            .then((data) => {
                if (data.ok) {
                    data.json().then((data) => {
                        console.log(data.id);
                        let id = data.id
                        localStorage.setItem('user_id', id)
                        console.log(localStorage.getItem('user_id'));
                        let fromLocal = localStorage.getItem('user_id');
                        console.log(fromLocal)
                        console.log(userId)
                        // alert(userId)
                        // // alert(userId)
                        setUsers(data)
                        console.log(users)
                        // console.log(data.status);

                    })
                }
                else {
                    alert("false")
                    toast.error("Please log in first");
                    navigate("/login")
                }
            })


        //Check profile progress
        fetch("https://portfoliomaker-app.herokuapp.com/check_progress")
            .then((data) => {
                if (data.ok) {
                    data.json().then((data) => {
                        console.log(data.count)

                        setPercentage(data.count)
                        if (data.count == 0) {
                            setUsersHide(true)
                            setProjectHide(false)
                            setServiceHide(false)
                            setCompleteHide(false)
                        }
                        else if (data.count == 33) {
                            setUsersHide(false)
                            setProjectHide(false)
                            setServiceHide(true)
                            setCompleteHide(false)

                        }
                        else if (data.count <= 66) {
                            setCompleteHide(false)

                            setUsersHide(false)
                            setProjectHide(true)
                            setServiceHide(false)


                        }

                        else if (data.count > 66) {

                            setUsersHide(false)
                            setProjectHide(false)
                            setServiceHide(false)
                            setCompleteHide(true)


                        }
                        else {

                            // alert("Generate profile")
                        }

                    })
                    // .catch((error) => {
                    //     toast.error("Unable to get profile information,please reload.");

                    // });
                }
            })
    }, [waitForChanges])

    const logOut = () => {
        fetch("https://portfoliomaker-app.herokuapp.com/log_out",
            { method: 'DELETE' })
            .then((data) => {


                navigate("/login")
                toast.success("Loged out successfully!");



            }).catch((error) => {
                navigate("/login")
                toast.error("Please log in first");

            });
    }

    const CopyLink = () => {
       
    //    alert(url)

        // document.body.appendChild(dummy);
        // dummy.value = text;
        // dummy.select();
        // document.execCommand('copy');
        // document.body.removeChild(dummy);
        return (
            <div class="row">
                <div class="col-md-12  col-sm-12 col-lg-12 center_everything">
                    <div class="outer_box">
                        <div class="row">
                            <div class="col-md-3 col-lg-2  col-sm-12 ">
                                <img src={Ready} class="logosm" />
                            </div>

                            <div class="col-md-3 col-lg-10  col-sm-12 text-left">
                                <div class="row pt-2"><h4>Profile complete!</h4></div>
                                <div class="row"><h6>You have earned your free portfolio.Copy the link bellow and share.</h6></div>
                                <div class="row">
                                    <div class="col-md-12 col-lg-8  col-sm-12 ">

                                        <div class="input-group">
                                            <input type="text" class="form-control"  placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                            <div class="input-group-append">

                                                <span class="input-group-text" id="basic-addon2">Copy Profile link</span>
                                            </div>
                                            <Link className=" m-3 menu_ orange text-white" to="/portfolio">View Profile</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
    return (
        <div class="main-wrapper">
            <Toaster />
            <nav className="navbar d-md-block d-lg-none fixed-top mobile-navbar"><button className="navbar-toggler mr-auto" type="button" data-toggle="collapse" data-target="#mobileNavbarSupportedContent" aria-controls="mobileNavbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="nav-btn">Menu</span></button>
                <div className="collapse navbar-collapse order-1" id="mobileNavbarSupportedContent">
                    <ul className="navbar-nav mr-auto"></ul>
                </div>
            </nav>
            <nav className="sidebar" data-simplebar>
                <div className="sidebar-header"><a href="#home" data-scroll><img style={{ height: "65px", width: "65px" }} className="img-fluid sidebar-avatar" src={users.profile_url} alt="Profile avatar" /></a><span className="sidebar-name">{users.first_name},&nbsp; {users.last_name}</span>
                    {/* <p className="sidebar-status">Available for work</p> */}
                </div>
                <div className="sidebar-menu">
                    <ul className="list-unstyled list-menu">
                        <li> <Link className=" m-3 menu_" to="/portfolio">View Profile</Link></li>
                        <li><Link className=" m-3 menu_" to="/portfolio">Copy Profile Link</Link></li>
                        <li><Link className=" m-3 menu_" onClick={logOut} to="/portfolio">Modify Profile</Link></li>
                        <li> <Link className=" m-3 menu_" onClick={logOut}>Log out</Link></li>

                        <li><a className="nav-link" href="#home-area" data-scroll></a></li>

                    </ul>
                </div>
            </nav>
            <div class="sections-wrapper">

                <section class="single-section contact-area alt-bg" id="contact-area">
                    <div class="container text-left">
                        <div class="row">
                            <div class="col-12">
                                <div class="section-heading">
                                    <h2 class="section-title">Dashboard</h2>
                                    <h6 class=" red_text">Thank you for, using Portfolio Maker.</h6>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-lg-6 col-mg-6 col-sm-12">
                                <div class="contact-form mb-3" >
                                    <div class="row">
                                        <div className='col-3 col-md-3 col-sm-6 col-lg-3 text-left red_line'>
                                            <img src={Profile_} class="d_board"></img>
                                        </div>
                                        <div className='col-9 col-md-9 col-sm-6 col-lg-9  text-left'>
                                            <h6>Profile progress</h6>

                                            <h1>{percentage}%</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-6 col-mg-6 col-sm-12">
                                <div class="contact-form mb-3" >
                                    <div class="row">
                                        <div className='col-3 col-md-3 col-sm-6 col-lg-3 text-left red_line'>
                                            <img src={Message} class="d_board"></img>
                                        </div>
                                        <div className='col-9 col-md-9 col-sm-6 col-lg-9  text-left'>
                                            <h4>Messages</h4>
                                            <h1>{clients.count_messages
                                            }</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {usersHide && <Profile updateState={updateState} />}

                        {servicesHide && <Services updateState={updateState} user_id={userId} />}

                        {projectHide && <Projects updateState={updateState} user_id={userId} />}
                        {completerHide && <CopyLink  />}






                    </div>
                </section >
            </div >
        </div >
    );
}
export default Dashboard;
