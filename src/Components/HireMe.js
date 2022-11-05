import React from 'react';

const HireMe = () => {
    return (
      <div>
        <section
          class="single-section element-cover-bg hire-area"
          id="hire-area"
          style={{ backgroundImage: `url("https://cdn.mind-diagnostics.org/uploads/mind-diagnostics/images/image/url/loving-someone-you-cant-have-how-to-let-go-1_.jpg.jpg")` }}
        >
          <div class="container">
            <div class="row row-custom">
              <div class="col-12 col-md-8 content-part">
                <h1 class="hire-title">Let's work together!</h1>
                <p class="hire-description">
                  I am available for freelance projects. Hire me and get your
                  project done.
                </p>
              </div>
              <div class="col-12 col-md-4 button-part">
                <a class="btn hire-btn button-main button-scheme"  data-scroll="" href="#contact-area"  role="button" >
                  Hire me
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default HireMe;
