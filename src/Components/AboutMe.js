import React from 'react';

const AboutMe = ({about}) => {
    return (
        <div>
            <section class="single-section about-area" id="about-area">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="section-heading">
                  <h2 class="section-title">About me</h2>
                  <p class="section-description">Get to know me</p>
                </div>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col-12 col-lg-5 about-img"><img class="img-fluid img-thumbnail" src={about.profile_url} alt="About Picture"/></div>
              <div class="col-12 col-lg-7 about-content">
                <div class="content-block">
                  <h2 class="content-subtitle">Who am i?</h2>
                  <h6 class="content-title">I'm {about.first_name} {about.last_name}, a {about.title}</h6>
                  <div class="content-description">
                    <p>{about.description}</p>
                  </div>
                  <address class="content-info">
                    <div class="row">
                      <div class="col-12 col-md-6 single-info"><span>Name:</span>
                        <p>{about.first_name} {about.last_name}</p>
                      </div>
                      <div class="col-12 col-md-6 single-info"><span>Email:</span>
                        <p><a href="mailto:daniel@example.com">{about.email}</a></p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 col-md-6 single-info"><span>Age:</span>
                        <p>{about.age}</p>
                      </div>
                      <div class="col-12 col-md-6 single-info"><span>From:</span>
                        <p>{about.location}</p>
                      </div>
                    </div>
                  </address><a class="btn content-download button-main button-scheme" href="#0" role="button">Download CV</a><a class="btn content-work button-main" data-scroll="" href="#portfolio-area" role="button">My Work</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
    );
}

export default AboutMe;
