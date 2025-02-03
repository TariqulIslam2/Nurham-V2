import React from 'react';

const Contact = () => {
  return (
    <div id="contacttop">
      {/* <!--====== Preloader Start ======--> */}
      {/* <div id="preloader">
          <div class="loader-cubes">
            <div class="loader-cube1 loader-cube"></div>
            <div class="loader-cube2 loader-cube"></div>
            <div class="loader-cube4 loader-cube"></div>
            <div class="loader-cube3 loader-cube"></div>
          </div>
        </div> */}
      {/* <!--====== Preloader End ======--> */}

      {/* <!--====== Page Title start ======--> */}
      <section class="page-title-area">
        <div class="container">
          <h2 class="title">Contact Us</h2>
          <ul class="breadcrumb-nav">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li class="active">Contact</li>
          </ul>
        </div>
      </section>
      {/* <!--====== Page Title End ======--> */}

      {/* <!--====== Contact Information Start ======--> */}
      <section class="contact-info-section section-gap">
        <div class="mx-5">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="contact-info-items mb-md-gap-50">
                <div class="contact-info-item text-center">
                  <a className='text-light' href="tel:+8801877363621"> <i class="fal fa-phone"></i></a>
                  <h5 class="title">Phone Number</h5>
                  <p> <a className='contact-info-p' href="tel:+8801877363621"> +88 01877-363621</a></p>
                </div>
                <div class="contact-info-item text-center">
                  <i class="fal fa-envelope"></i>
                  <h5 class="title">Email Address</h5>
                  <p>
                    <a className='contact-info-p' href="mailto:info@nurham.com">info@nurham.com</a>
                  </p>
                </div>
                {/* <i class="fa fa-map-marker-alt" aria-hidden="true"></i> */}
                {/* <i class="fa fa-map-marker-alt" aria-hidden="true"></i> */}
                <div class="contact-info-item text-center">
                  <i class="fal fa-map"></i>
                  <h5 class="title">Office Location</h5>
                  <h6 className='pt-1' ><i class="fa fa-map-marker-alt contact-icon" aria-hidden="true"></i> Chattogram</h6>
                  <p className="contact-info-p">
                    Mirsharai Bhaban, Plot-1/A, Block -H, Port Connecting Road, Halishahar, Chattogram
                  </p>
                  <h6 className='pt-1' > <i class="fa fa-map-marker-alt contact-icon" aria-hidden="true"></i> Dhaka</h6>
                  <p className="contact-info-p">
                    House 1300, Road 17, Avenue 2, Mirpur DOHS, Dhaka
                  </p>
                </div>
                <div class="contact-info-item text-center">
                  <i class="fal fa-globe"></i>
                  <h5 class="title">Social Network</h5>
                  <p >
                    <a className='contact-info-p' href="https://www.facebook.com/Nurhamltd" target="_blank">
                      <i class="fab fa-facebook-f contact-icon"></i> facebook.com/Nurhamltd
                    </a>
                  </p>
                  <p> <a className='contact-info-p' href="https://www.linkedin.com/company/nurham/" target="_blank">
                    <i class="fab fa-linkedin-in contact-icon"></i> linkedin.com/company/nurham/
                  </a></p>

                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="contact-map-three">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d868.5412038299312!2d91.78785269698183!3d22.337524230652352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd989e34dc8eb%3A0xc869f730c7cff8ca!2sNurham%20Limited!5e0!3m2!1sen!2sbd!4v1733215864177!5m2!1sen!2sbd" width="600"
                  height="450"
                  style={{ border: "0" }}
                  allowfullscreen="" ></iframe>
                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d236127.78544788138!2d91.66735396610557!3d22.37262717276053!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd989e34dc8eb%3A0xc869f730c7cff8ca!2sNurham%20Limited!5e0!3m2!1sen!2sbd!4v1699849153970!5m2!1sen!2sbd"
                  width="600"
                  height="450"
                  style={{ border: "0" }}
                  allowfullscreen=""
                ></iframe> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Contact Information End ======--> */}

      {/* <!--====== Contact Form Start ======--> */}

      {/* <!--====== Contact Form End ======--> */}

      {/* <!--====== Back to top start ======--> */}
      <div class="back-to-top">
        <a href="#">
          {" "}
          <i class="fas fa-arrow-up"></i>{" "}
        </a>
      </div>
      {/* <!--====== Back to top start ======--> */}
    </div>
  );
};

export default Contact;