import React,{useState} from 'react';
import ContactUs from '../Images/contactus.gif';
import toast, { Toaster } from 'react-hot-toast';

const Clients = () => {
  const [client, setClient] = useState({
    name: "",
    subject: "",
    email:"",
    message:"",
    user_id:1
});

const handleClient = (event) => {
  event.preventDefault();
  fetch("/clients", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
      name: client.name,
      subject: client.subject,
      email: client.email,
      message: client.message,
      user_id: 1
      }),
  })
      .then((res) => res.json())
      .then((response) => {
          setClient({
              ...client,
              name:"",
              subject:"",
              email:"",
              message:"",
             
          });

          // console.log(response);
          toast.success('Submitted successfully!')

      }).error((error) => {
          toast.error('Failed to submit')

      })



}
function handleChange(e) {
  const key = e.target.id;
  setClient({ ...client, [key]: e.target.value });
}
   

    return ( 
   

 <div>
             <section class="single-section contact-area alt-bg" id="contact-area">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="section-heading">
                <img src={ContactUs} class="logo" /><br /><br />
                  <h2 class="section-title">Get in Touch</h2>
                  <p class="section-description">Feel free to contact me anytime</p>
                </div>
              </div>
            </div>
            <div class="row">
              
              <div class="col-12">
                <form class="contact-form" id="contact-form" onSubmit={handleClient}>
                  <div class="row">
                    <div class="col-12 col-md-6 form-group"><input  value={client.name} onChange={handleChange} class="form-control" id="name" type="text" name="name" placeholder="Name" required=""/></div>
                    <div class="col-12 col-md-6 form-group"><input  value={client.email} onChange={handleChange}   class="form-control" id="email" type="email" name="email" placeholder="Email" required=""/></div>
                    <div class="col-12 form-group"><input  value={client.subject} onChange={handleChange}   class="form-control" id="subject" type="text" name="subject" placeholder="Subject" required=""/></div>
                    <div class="col-12 form-group form-message"><textarea  value={client.message} onChange={handleChange}   class="form-control" id="message" name="message" placeholder="Message" rows="5" required=""></textarea></div>
                    <div class="col-12 form-submit"><button class="btn button-main button-scheme"  type="submit">Send message</button>
                      <p class="contact-feedback"></p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        </div>
    );
}

export default Clients;