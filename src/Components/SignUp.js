import Signup_ from '../Images/signup.gif'
// import Logo from '../Images/logo.png';
import react, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import Logo from '../Images/logo.png'
import { Link ,useNavigate} from "react-router-dom"

//POST
const registerNewUser = (data) => {

  fetch("https://portfoliomaker-app.herokuapp.com/signup", {
    method: 'POST',
    body: JSON.stringify(
      data
    ),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => res.json())
    .then((post) => {
      console.log(post)
      toast.success('User succesfully added!')
    })
    .catch((err) => {
      //  console.log(err.message);
      toast.error('Failed to create user account')

      // toast.error(err.message)

    });
};



const SignUp = () => {

  //HOOKS
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate= useNavigate();

  //TOAST

  //SUBMITTING THE FORM
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
      password_confirmation: confirmPassword,
    }
    console.log(userData)
    registerNewUser(userData);
    setEmail("")
    setPassword("")
    setConfirmPassword("")
    navigate("/login")


  }
  //HANDLING INPUTS


  const handleEmail = (e) => {

    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)

  }
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
  }
  return (
    <div className="main-wrapper">

      <nav className="sidebar" >
        <div className="sidebar-header"><a href="#home" data-scroll><img src={Logo} style={{ height: "65px", width: "65px", }} className="img-fluid sidebar-avatar no-border" alt="Profile avatar" /></a><span className="sidebar-name">PortMaker</span>
          {/* <p className="sidebar-status">Available for work</p> */}
        </div>
        <div className="sidebar-menu">
          <ul className="list-unstyled list-menu">

          <li> <Link className="m-2 menu_" to="/login">Log in</Link></li> 
                       <li>
                       <Link className="m-2 menu_ orange" to="/signup">Sign Up</Link>
                        </li> 
                       <li>
                       <Link className="m-2 menu_ " to="/">Sample Templates</Link>
</li>
            <li><a className="nav-link " href="#about-area" data-scroll><small>© PortMaker 2022</small></a></li>

          </ul>
        </div>
      </nav>
      <div className="sections-wrapper">

        <section class="single-section contact-area alt-bg" id="contact-area">
          <Toaster />
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="section-heading">
                  <img src={Signup_} class="logo" /><br /><br />
                  <h2 class="section-title">Sign Up</h2>
                  <p>Don't damage your job hunt before it starts. Using our handcrafted portfolio builder, you can create a professional portfolio.</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <form class="contact-form" onSubmit={handleSubmit}>
                  <div class="row">

                    <div class="col-12 col-md-6 form-group"><input value={email} onChange={handleEmail} class="form-control" id="contact-email" type="email" name="email" placeholder="Email addres" required="" /></div>
                    <div class="col-12 col-md-6 form-group"><input value={password} onChange={handlePassword} class="form-control" id="contact-email" type="password" name="re-password" placeholder="Password" required="" /></div>
                    <div class="col-12 col-md-6 form-group"><input value={confirmPassword} onChange={handleConfirmPassword} class="form-control" id="contact-email" type="password" name="re-password" placeholder="Password" required="" /></div>

                    <div class="col-12 text-left form-submit">
                      <button class="btn button-main button-scheme mr-2" type="submit">Sign up</button> 
                      <Link className="btn button-main button-scheme mr-2" to="/login">Log in</Link>

                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

  );
}

export default SignUp;
