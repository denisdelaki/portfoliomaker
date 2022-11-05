import React from 'react';

const Footer = ({ footer }) => {
  return (
    <footer class="footer-area single-section">
      <div class="container">
        <div class="row contact-info">
          <div class="col-12 col-sm-4">
            <div class="single-info"><i class="info-icon icon ion-md-map"></i>
              <p class="info-content"><a href="https://goo.gl/maps/2YAGiugG47VAS17g7" target="_blank">{footer.location}</a></p>
            </div>
          </div>
          <div class="col-12 col-sm-4">
            <div class="single-info"><i class="info-icon icon ion-md-call"></i>
              <p class="info-content"><a href={"tel:" + footer.phone_number} >{footer.phone_number}</a></p>
            </div>
          </div>
          <div class="col-12 col-sm-4">
            <div class="single-info"><i class="info-icon icon ion-md-send"></i>
              <p class="info-content"><a href="mailto:alex@example.com">{footer.email}</a></p>
            </div>
          </div>
        </div>
        <div class="row mini-footer">
          <div class="social-medias col-12 col-lg-5">
            {/* <a class="twitter" href="#0"> <i class="icon ion-logo-twitter"></i></a> */}
            {/* <a class="instagram" href="#0"><i class="icon ion-logo-instagram"></i></a> */}
            <a class="linkedin" href={footer.likedin_link}><i class="icon ion-logo-linkedin"></i></a>
            {/* <a class="youtube" href="#0"><i class="icon ion-logo-youtube"></i></a> */}
            <a class="github" href={footer.likedin_link}><i class="icon ion-logo-github"></i></a>
            {/* <a class="facebook" href="#0"><i class="icon ion-logo-facebook"></i></a> */}
            </div>
          <p class="copyright-notice col-12 col-lg-7">Copyright © 2022 Moringa Students -"Coffee Taker", all rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
