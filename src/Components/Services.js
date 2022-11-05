import React, { useState } from 'react';

const Services = ({ services }) => {
  // const [services_,setServices]= useState([])
  // setServices(services)
  // console.log(services)
  const serviceCard = Object.keys(services).map((serviceItem) => (

    <div class="col-12 col-md-6 col-lg-4">
      <div class="single-service"><i class="icon service-icon ion-logo-css3"></i>
        <h6 class="service-title">{services[serviceItem].service_title}</h6>
        <p class="service-description">{services[serviceItem].description}</p>
      </div>
    </div>
  ))
  return (
    <div>
      <section class="single-section alt-bg services-area" id="services-area">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="section-heading">
                <h2 class="section-title">My Services</h2>
                <p class="section-description">Services i offer to my clients</p>
              </div>
            </div>
          </div>
          <div class="row">

            {serviceCard}



          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
