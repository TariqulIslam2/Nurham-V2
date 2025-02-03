import React from 'react';

const About = () => {
  return (
    <div id="abouttop">
      {/* <!--====== Page Title start ======--> */}
      <section class="page-title-area">
        <div class="container">
          <h2 class="title">About Us</h2>
          <ul class="breadcrumb-nav">
            <li>
              <a href="/home">Home</a>
            </li>
            <li class="active">About</li>
          </ul>
        </div>
      </section>
      {/* <!--====== Page Title End ======--> */}

      {/* <!--====== Experience Area Start ======--> */}
      <section class="experience-section section-gap">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 col-md-8 wow fadeInLeft" data-wow-delay="0.3s">
              <div class="section-title with-right-border mb-md-gap-30">
                <span class="title-tag">NURHAM </span>
                <h2 class="title">Our VISION</h2>
              </div>
            </div>
            <div
              class="col-lg-6 offset-lg-1 wow fadeInRight"
              data-wow-delay="0.3s"
            >
              <div class="experience-text">
                <p class="fs-16 text-color-2">
                  NURHAM LTD envisions a future where we are recognized as a
                  trusted and preferred partner in the fields of project
                  management, engineering consultancy, and supply services. We
                  aspire to be at the forefront of innovation, constantly
                  adapting to industry advancements and emerging technologies.
                  Our aim is to provide exceptional value to our clients by
                  consistently delivering high-quality solutions that address
                  their unique challenges and drive their success.
                </p>
                {/* <a href="#" class="font-weight-bold mt-10">
                  Read More
                </a> */}
              </div>
            </div>
          </div>
          <div class="row justify-content-center  mt-50">
            <div class="col-lg-6">
              <div class="section-title text-center mb-10">
                <h2 class="title mb-10">Our Mission</h2>
              </div>
            </div>
          </div>
          <div class="row justify-content-center ">
            <div
              class="col-lg-3 col-md-6 col-sm-8 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div class="feature-box mt-30">
                <img style={{
                  height: "300px",
                  width: "280px",
                  objectFit: "cover"
                }} src="assets/img/our-mission/mission-1.jpg" alt="" />
                <div class="feature-overlay">
                  <div class="content">
                    <h5 class="title">Client Satisfaction</h5>
                    <p>
                      Our mission is to prioritize client satisfaction by
                      delivering tailored solutions, maintaining open
                      communication, and building long-term relationships.
                    </p>

                    <i class="fal fa-laptop-code"></i>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-lg-3 col-md-6 col-sm-8 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div class="feature-box mt-30">
                <img style={{
                  height: "300px",
                  width: "280px",
                  objectFit: "cover"
                }} src="assets/img/our-mission/mission-4.jpg" alt="" />
                <div class="feature-overlay">
                  <div class="content">
                    <h5 class="title">Excellence in Project Management</h5>
                    <p>
                      We are committed to delivering projects on time, within
                      budget, and to the highest quality standards
                    </p>

                    <i class="fal fa-headphones-alt"></i>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-lg-3 col-md-6 col-sm-8 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div class="feature-box mt-30">
                <img style={{
                  height: "300px",
                  width: "280px",
                  objectFit: "cover"
                }} src="assets/img/our-mission/mission-2.jpg" alt="" />
                <div class="feature-overlay">
                  <div class="content">
                    <h5 class="title">Innovative Engineering Consultancy</h5>
                    <p>
                      Our mission is to provide innovative ideas and practical
                      solutions to optimize project performance and drive
                      sustainable growth.
                    </p>

                    <i class="fal fa-analytics"></i>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-lg-3 col-md-6 col-sm-8 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div class="feature-box mt-30">
                <img style={{
                  height: "300px",
                  width: "280px",
                  objectFit: "cover"
                }} src="assets/img/our-mission/mission-3.jpg" alt="" />
                <div class="feature-overlay">
                  <div class="content">
                    <h5 class="title">Reliable Equipment and Accessories</h5>
                    <p>
                      We aim to be a trusted source for reliable heavy equipment
                      and accessories, meeting our clients' operational needs
                      with high-quality products and exceptional customer
                      support.
                    </p>

                    <i class="fal fa-analytics"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Experience Area End ======--> */}

      {/* <!--====== Intro Video Start ======--> */}
      {/* <section class="about-intro-video section-gap soft-blue-bg">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-10">
              <div class="intro-video-with-shape mb-md-gap-50">
                <img src="assets/img/about-intro-thumb.jpg" alt="Image" />
                <a href="#" class="video-popup">
                  <i class="fas fa-play"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-6 col-md-10">
              <div class="feature-text-block">
                <div class="section-title with-right-border mb-20">
                  <span class="title-tag">Intro Video</span>
                  <h2 class="title">How we growth our business.</h2>
                </div>
                <p class="big-text mb-30">
                  {" "}
                  The introduction of cloud and mobile technologies into
                  enterprise software.{" "}
                </p>
                <p>
                  hether you are building an enterprise web portal or a
                  state-of-the-art website, you always need the right modern
                  tools. Well-built and maintained PHP frameworks provide those
                  tools in abundance, allowing maintained PHP frameworks provide
                  those tools in abundance, allowing developers to save time,
                  re-use code, and streamline the back end. As software
                  development tools continuously.
                </p>
                <a class="main-btn mt-30" href="about.html">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <!--====== Intro Video End ======--> */}

      {/* <!--====== History Area Start ======--> */}

      <section class="history-section section-gap">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="section-title text-center mb-80">
                <h2 class="title mb-10">Our Success History</h2>
                <p class="text-color-2">
                  Does any industry face a more complex audience journey and
                  marketing sales process than B2B technology.
                </p>
              </div>
            </div>
          </div>
          <div class="history-timeline history-isotope">
            <div class="history-item wow fadeInUp" data-wow-delay="0.3s">
              <div
                class="history-thumb"
                style={{ backgroundImage: "url(assets/img/pro1.png)", objectFit: "cover" }}
              ></div>
              <div class="history-content">
                <span class="history-year">Landscaping</span>
                <h4 class="title">Landscaping of Karnaphuli Tunnel</h4>
              </div>
              <div class="number-box">
                <span>01</span>
              </div>
            </div>
            <div class="history-item wow fadeInUp" data-wow-delay="0.3s">
              <div
                class="history-thumb"
                style={{ backgroundImage: "url(assets/img/pro2.png)" }}
              ></div>
              <div class="history-content">
                <span class="history-year">Boundary Fencing</span>
                <h4 class="title">
                  Boundary Fencing at Karnaphuli Tunnel
                </h4>
              </div>
              <div class="number-box">
                <span>02</span>
              </div>
            </div>

            <div class="history-item wow fadeInUp" data-wow-delay="0.3s">
              <div
                class="history-thumb"
                style={{ backgroundImage: "url(assets/img/pro3.png" }}
              ></div>
              <div class="history-content">
                <span class="history-year">Road Marking</span>
                <h4 class="title">Road Marking of Karnaphuli Tunnel</h4>
              </div>
              <div class="number-box">
                <span>03</span>
              </div>
            </div>

            <div class="history-item wow fadeInUp" data-wow-delay="0.3s">
              <div
                class="history-thumb"
                style={{ backgroundImage: "url(/assets/img/service-img/sasec-work.jpg)" }}
              ></div>
              <div class="history-content">
                <span class="history-year">Road Marking</span>
                <h4 class="title">
                  Road Marking of SASEC
                </h4>
              </div>
              <div class="number-box">
                <span>04</span>
              </div>
            </div>
            <div class="history-item wow fadeInUp" data-wow-delay="0.3s">
              <div
                class="history-thumb"
                style={{ backgroundImage: "url(/assets/img/landscaping/ss-11.jpg)" }}
              ></div>
              <div class="history-content">
                <span class="history-year">Landscaping</span>
                <h4 class="title">
                  Landscaping of SS Power Plant
                </h4>
              </div>
              <div class="number-box">
                <span>05</span>
              </div>
            </div>
            {/* <div class="history-item wow fadeInUp" data-wow-delay="0.3s">
              <div
                class="history-thumb"
                style={{ backgroundImage: "url(assets/img/history-4.jpg)" }}
              ></div>
              <div class="history-content">
                <span class="history-year">2023 - Consultancy</span>
                <h4 class="title">
                  Engineering Consultancy Karnaphuli 
                  Tunnel
                </h4>
              </div>
              <div class="number-box">
                <span>04</span>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* <!--====== History Area End ======--> */}

      {/* <!--====== FAQ Section Start ======--> */}

      {/* <!--====== FAQ Section End ======--> */}

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

export default About;