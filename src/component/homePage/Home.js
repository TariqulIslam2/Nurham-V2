import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

const Home = () => {
  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    slidesToShow: 5, // Adjusted to ensure center mode works
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    rows: 2,
  };


  return (
    <div id="hometop">
      <>
        {/*====== Preloader Start ======*/}
        {/* <div id="preloader">
                    <div className="loader-cubes">
                        <div className="loader-cube1 loader-cube" />
                        <div className="loader-cube2 loader-cube" />
                        <div className="loader-cube4 loader-cube" />
                        <div className="loader-cube3 loader-cube" />
                    </div>
                </div> */}
        {/*====== Preloader End ======*/}
        {/*====== Header Part Start ======*/}

        {/*====== Header Part End ======*/}
        {/*====== Banner Start ======*/}
        <section
          className="banner-section-three"
          style={{
            // backgroundImage: imageUrl,
            marginTop: "20px",
          }}
        >
          <div className="container position-relative">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="banner-content text-center">
                  <span
                    className="title-tag wow fadeInDown"
                    data-wow-delay="0.3s"
                  >
                    Get Quality Item &amp; Goods
                  </span>
                  <h6
                    className="title wow fadeInLeft project-color"
                    data-wow-delay="0.5s"
                  >
                    Limitless Service
                  </h6>
                  <p className="wow fadeInUp" data-wow-delay="0.7s">
                    Make your products with good &amp; professionals
                  </p>
                </div>
              </div>
            </div>
          </div>





          {/* <div className="banner-shapes">
                        <img
                            className="shape-one"
                            src="assets/img/banner/banner1.png"
                            alt=""
                        />
                        <img
                            className="shape-two"
                            src="assets/img/banner/banner2.png"
                            alt=""
                        />
                    </div> */}
          {/* <div className="brand-slider row">
                        <div className="col">
                            <div className="brand-item">
                                <a href="#">
                                    <img src="assets/img/brand/brand-1.png" alt="brand name" />
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="brand-item">
                                <a href="#">
                                    <img src="assets/img/brand/brand-2.png" alt="brand name" />
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="brand-item">
                                <a href="#">
                                    <img src="assets/img/brand/brand-3.png" alt="brand name" />
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="brand-item">
                                <a href="#">
                                    <img src="assets/img/brand/brand-4.png" alt="brand name" />
                                </a>
                            </div>
                        </div>

                    </div> */}
        </section>
        {/*====== Banner End ======*/}

        <>
          {/*====== About Sectioin Start ======*/}
          <section className="about-section section-gap mt-50">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div
                  className="col-lg-6 col-md-8 wow fadeInLeft"
                  data-wow-delay="0.3s"
                >
                  <div className="">
                    <img
                      className="w-100"
                      src="assets/img/nurham-about.png"
                      alt="Image"
                    />
                  </div>
                  {/* <div className="about-thumb">
                    <img
                      className="about-img-size"
                      src="assets/img/nurham-nobg-logo.png"
                      alt="Image"
                    />
                  </div> */}
                </div>
                <div
                  className="col-lg-6 col-md-10 wow fadeInRight"
                  data-wow-delay="0.3s"
                >
                  <div className='mt-50'>
                    <div className="about-text-block pl-lg-5 mt-md-gap-60">
                      <div className="section-title mb-40">
                        <h2 className="title">About us</h2>
                        {/* <h2 className="title">You can't use up creativity.</h2> */}
                      </div>
                      <p className="text-color-3">
                        Welcome to NURHAM Ltd, a leader in
                        providing high-quality infrastructure
                        solutions and environmental services.
                        With a strong commitment to
                        innovation, sustainability, and
                        customer satisfaction, we have
                        established ourselves as a trusted
                        partner for clients across various
                        industries. Our extensive range of
                        products and services, combined with
                        our expertise and dedication to
                        excellence, makes us the go-to choice
                        for projects both large and small.
                      </p>
                      <div className="about-experience pb-40 pt-20">
                        <h3>2</h3>
                        <span>
                          Years Of <br /> Experience
                        </span>
                      </div>
                      <ul className="about-btns">
                        <li>
                          <Link to={"/about"}>
                            <a className="main-btn">Learn More</a>
                          </Link>
                        </li>
                        {/* <li>
                          <a className="main-btn main-btn-2" href="#">
                            <i className="fal fa-video" /> Intro Video
                          </a>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*====== About Sectioin End ======*/}
        </>

        {/*====== Why Choose Us Start ======*/}
        <section className="whu-section section-gap soft-blue-bg mt-50">
          <div className="container">
            <div
              className="section-title mb-50 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <span className="title-tag">Who we are</span>
              <h2 className="title">Why Choose Us</h2>
            </div>
            <div className="row justify-content-center align-content-center">
              <div className="col-lg-6 col-md-10 order-lg-2">
                <ul className="feature-list">
                  <li className="wow fadeInUp" data-wow-delay="0.5s">
                    <h4>Expertise</h4>
                    <p>
                      NURHAM LTD is a team of highly skilled professionals who
                      are driven by their passion to provide exceptional
                      services and solutions to our clients. We leverage our
                      technical proficiency and extensive knowledge in our
                      respective fields to deliver the best possible results.
                    </p>
                  </li>
                  <li className="wow fadeInUp" data-wow-delay="0.6s">
                    <h4>Quality</h4>
                    <p>
                      We are committed to delivering high-quality results in
                      everything we do. Our rigorous quality standards are
                      designed to ensure the satisfaction and success of our
                      clients. We are confident that we can deliver the
                      results you need to achieve your goals. We are always
                      willing to go the extra mile to make sure that our
                      clients are satisfied with our results.
                    </p>
                  </li>
                  <li className="wow fadeInUp" data-wow-delay="0.7s">
                    <h4>Customer Focus</h4>
                    <p>
                      Customer satisfaction is our top priority. We understand
                      that every customer is unique, and we strive to provide
                      personalized attention and solutions that meet their
                      individual needs. We believe that building strong,
                      long-term relationships with our customers is essential
                      to our success.
                    </p>
                  </li>
                  <li className="wow fadeInUp" data-wow-delay="0.7s">
                    <h4>Adaptability </h4>
                    <p>
                      In the dynamic and ever-evolving business world,
                      adaptability plays a vital role. At NURHAM LTD, we
                      wholeheartedly embrace flexibility and agility, enabling
                      us to respond swiftly and effectively to the
                      ever-changing needs of our clients, industry trends, and
                      technological advancements. With a proactive approach,
                      we continually adjust our strategies and methods,
                      ensuring the delivery of optimal results at all times.
                    </p>
                  </li>
                </ul>

              </div>
              <div className="col-lg-6 col-md-10 order-lg-1">

                <p className="text-color-3">
                  Founded with a vision to transform the infrastructure landscape, NURHAM
                  Ltd has grown into a comprehensive service provider, offering everything
                  from advanced lift systems and reliable generators to expert road marking
                  and landscaping services. Our company is built on the principles of quality,
                  integrity, and customer focus. We take pride in our ability to deliver tailored
                  solutions that meet the specific needs of each client, ensuring that every
                  project we undertake is completed to the highest standards.

                </p>
                <div className="tile-gallery-two mb-md-gap-50 mt-50">
                  <div
                    className="img-one wow fadeInRight"
                    data-wow-delay="0.3s"
                  >
                    <img
                      className="why-img-size"
                      src="assets/img/tile-gallery/01.jpg"
                      alt="Image"
                    />
                  </div>
                  <div
                    className="img-two text-right wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <img
                      className="imageMargin why-img-size2"
                      src="assets/img/tile-gallery/01.jpeg"
                      alt="Image"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
        {/* <section class="why-choose-area">
                    <div class=" container-fluid">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="section-title white-color mb-30 text-center">
                                    <h2 class="title">
                                        We Are Very Different From Others IT Solutions
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div class="row justify-content-center">
                            <div
                                class="col-lg-4 col-md-6 col-sm-9 wow fadeInLeft"
                                data-wow-delay="0.3s"
                            >
                                <div class="single-choose text-center mt-30">
                                    <div class="icon-box">
                                        <span class="rotate-dot"></span>
                                        <i class="fal fa-laptop-code"></i>
                                    </div>
                                    <h4 class="title">Modify Whole System</h4>
                                    <p>
                                        optimizes and enhances your existing systems, ensuring increased efficiency, performance, and overall effectiveness.
                                    </p>
                                </div>
                            </div>

                            <div
                                class="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                                data-wow-delay="0.5s"
                            >
                                <div class="single-choose text-center mt-30">
                                    <div class="icon-box">
                                        <span class="rotate-dot"></span>
                                        <i class="fal fa-server"></i>
                                    </div>
                                    <h4 class="title">Beneficial Strategies</h4>
                                    <p>
                                        provides clients with tailored, data-driven approaches to optimize their operations, achieve goals, and maximize results.
                                    </p>
                                </div>
                            </div>

                            <div
                                class="col-lg-4 col-md-6 col-sm-9 wow fadeInRight"
                                data-wow-delay="0.6s"
                            >
                                <div class="single-choose text-center mt-30">
                                    <div class="icon-box">
                                        <span class="rotate-dot"></span>
                                        <i class="fal fa-tools"></i>
                                    </div>
                                    <h4 class="title">Automated Software</h4>
                                    <p>
                                        streamlines tasks, improves efficiency, and optimizes processes, delivering productivity and precision to your operations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="choose-dot">
                        <img src="assets/img/shape/choose-dot.png" alt="" />
                    </div>
                    <div class="choose-shape">
                        <img src="assets/img/shape/choose-shape.png" alt="" />
                    </div>
                </section> */}

        {/*====== Why Choose Us End ======*/}
        <>
          {/*====== Service Area Start ======*/}
          <section className="service-section section-gap service-with-shape">
            <div className="container">
              <div className="section-title white-color text-center mb-10">
                <div className="row justify-content-center">
                  <div className="col-xl-7 col-lg-9">
                    <span className="title-tag">Our latest services</span>
                    <h2 className="title">
                      We Offer Better Solution For Your Business
                    </h2>
                  </div>
                </div>
                <div className="ring-shape" />
              </div>
              <div className="row justify-content-center">
                <div
                  className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="service-item-four mt-50">
                    <div className="services-thumb">
                      <img
                        className="service-img-size"
                        src="assets/img/service-img/elevator3.jpg"
                        alt="Service-Image"
                      />
                    </div>
                    <div className="services-content">
                      <h4 className="title"> Elevator and Escalator </h4>
                      <p>
                        At NURHAM Ltd, we specialize in delivering
                        top-notch elevator and escalator solutions
                        tailored to meet the demands of modern buildings.
                        From installation to maintenance, our services ensure
                        safe, efficient, and reliable vertical transportation
                        for residential, commercial, and industrial spaces.
                      </p>
                      <Link to="/elevator_escalator" className="service-link">
                        Read More <i className="fal fa-long-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="service-item-four mt-50">
                    <div className="services-thumb">
                      <img
                        className="service-img-size"
                        src="assets/img/service-img/generator.jpeg"
                        alt="Service-Image"
                      />
                    </div>
                    <div className="services-content">
                      <h4 className="title"> Generators </h4>
                      <p>
                        At NURHAM Ltd, we provide top-tier generators sourced from the industry's leading manufacturers.
                        Our solutions ensure reliable and efficient power supply for residential, commercial, and industrial applications, tailored to meet your energy needs with uncompromising quality
                      </p>
                      <Link to="/generators" className="service-link">
                        Read More <i className="fal fa-long-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-delay="0.3s"

                >
                  <div className="service-item-four mt-50">
                    <div className="services-thumb">
                      <img
                        className="service-img-size"
                        src="assets/img/service-img/landscaping1.jpg"
                        alt="Service-Image"
                      />
                    </div>
                    <div className="services-content">
                      <h4 className="title"> Landscaping </h4>
                      <p>
                        Transforming outdoor spaces with expert landscaping:
                        design, installation, and maintenance for stunning,
                        eco-friendly landscapes that enhance your property's
                        beauty.
                      </p>
                      <br />
                      <br />
                      <Link to="/landscaping" className="service-link">
                        Read More <i className="fal fa-long-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <div
                  className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="service-item-four mt-50">
                    <div className="services-thumb">
                      <img
                        className="service-img-size"
                        src="assets/img/service-img/projectmanagement.jpg"
                        alt="Service-Image"
                      />
                    </div>
                    <div className="services-content">
                      <h4 className="title"> Project Management </h4>
                      <p>
                        Our project management service ensures efficient
                        planning, execution, and monitoring, optimizing
                        resources and timelines for successful project
                        outcomes.
                      </p>
                     
                    </div>
                  </div>
                </div> */}
                <div
                  className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="service-item-four mt-50">
                    <div className="services-thumb">
                      <img
                        className="service-img-size"
                        src="assets/img/service-img/cableing1.png"
                        alt="Service-Image"
                      />
                    </div>
                    <div className="services-content">
                      <h4 className="title"> Underground Cabling </h4>
                      <p>
                        At NURHAM Ltd, we specialize in providing
                        high-quality underground cabling solutions
                        designed to meet the needs of various
                        industries. Whether it’s for power distribution,
                        telecommunications, or data networks, our
                        underground cabling services ensure that
                        your infrastructure is protected and efficient.

                      </p>
                      <Link to="/cabling" className="service-link"> Read More <i className="fal fa-long-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="service-item-four mt-50">
                    <div className="services-thumb">
                      <img
                        className="service-img-size"
                        src="assets/img/service-img/paneldesign1.jfif"
                        alt="Service-Image"
                      />
                    </div>
                    <div className="services-content">
                      <h4 className="title">DB & LT Supply and
                        Installation</h4>
                      <p>
                        At NURHAM Ltd, we specialize in DB and LT panel design and installation, providing efficient and reliable power distribution solutions. Our expertly crafted panels are tailored to meet the specific requirements of residential, commercial, and industrial applications, ensuring top-quality performance at every stage.
                      </p>
                      <Link to="/db_lt" className="service-link">
                        Read More <i className="fal fa-long-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="service-item-four mt-50">
                    <div className="services-thumb">
                      <img
                        className="service-img-size"
                        src="assets/img/service-img/solar.jfif"
                        alt="Service-Image"
                      />
                    </div>
                    <div className="services-content">
                      <h4 className="title">Solar Systems
                      </h4>
                      <p>
                        At NURHAM Ltd, we specialize in designing and installing high-quality solar systems that deliver efficient and sustainable energy solutions. Tailored for residential, commercial, and industrial needs, our solar systems ensure reliable performance, helping you achieve energy independence with top-tier technology.
                      </p>
                      <Link to="/solar" className="service-link">
                        Read More <i className="fal fa-long-arrow-right" />
                      </Link>

                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="service-item-four mt-50">
                    <div className="services-thumb">
                      <img
                        className="service-img-size"
                        src="assets/img/LED-StreetLights.jpg"
                        alt="Service-Image"
                      />
                    </div>
                    <div className="services-content">
                      <h4 className="title"> Street Lamps & Pole Fitting</h4>
                      <p>
                        Comprehensive engineering consultancy: expert
                        guidance, innovative solutions, and technical
                        expertise to drive project success and meet client
                        objectives efficiently.
                      </p>
                      <Link to="/lamp" className="service-link">
                        Read More <i className="fal fa-long-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="service-item-four mt-50">
                    <div className="services-thumb">
                      <img
                        className="service-img-size"
                        src="assets/img/service-img/engineering-consulting.jpg"
                        alt="Service-Image"
                      />
                    </div>
                    <div className="services-content">
                      <h4 className="title"> Engineering Consultancy</h4>
                      <p>
                        Comprehensive engineering consultancy: expert
                        guidance, innovative solutions, and technical
                        expertise to drive project success and meet client
                        objectives efficiently.
                      </p>
                      <a className="service-link">
                        Read More <i className="fal fa-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="service-item-four mt-50">
                    <div className="services-thumb">
                      <img
                        className="service-img-size"
                        src="assets/img/service-img/cctv-security.jpg"
                        alt="Service-Image"
                      />
                    </div>
                    <div className="services-content">
                      <h4 className="title"> CCTV Setup &amp; Services</h4>
                      <p>
                        Professional CCTV setup and services: secure,
                        high-quality surveillance solutions for safeguarding
                        assets, enhancing safety, and monitoring your premises
                        effectively.
                      </p>
                      <a className="service-link">
                        Read More <i className="fal fa-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <div className="service-item-four mt-50">
                    <div className="services-thumb">
                      <img
                        className="service-img-size"
                        src="assets/img/service-img/road-marking.jpg"
                        alt="Service-Image"
                      />
                    </div>
                    <div className="services-content">
                      <h4 className="title"> Road Marking </h4>
                      <p>
                        Our road marking services include painting, striping,
                        and signage installation. We ensure safety and
                        organization on roads and parking lots through expert
                        markings and clear signage.
                      </p>
                      <a className="service-link">
                        Read More <i className="fal fa-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
                  data-wow-delay="0.8s"
                >
                  <div className="service-item-four mt-50">
                    <div className="services-thumb">
                      <img
                        className="service-img-size"
                        src="assets/img/service-img/equipment.jpg"
                        alt="Service-Image"
                      />
                    </div>
                    <div className="services-content">
                      <h4 className="title">Equipment & Machineries</h4>
                      <p>
                        We aim to be a trusted source for reliable heavy
                        equipment and accessories, meeting our clients'
                        operational needs with high-quality products and
                        exceptional customer support.
                      </p>
                      <a className="service-link">
                        Read More <i className="fal fa-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*====== Service Area End ======*/}
        </>

        {/*====== Portfolio Section Start ======*/}
        <section className="portfolio-area section-gap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-md-8 col-sm-10">
                <div className="section-title-two text-center mb-50">
                  <span className="title-tag">Portfolio</span>
                  <h2 className="title">Completed projects </h2>
                </div>
              </div>
            </div>
            <div className="portfolio-items justify-content-center row">
              <div
                className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="portfolio-item-two mt-30">
                  <div
                    className="portfolio-img"
                    style={{
                      backgroundImage: "url(assets/img/pro1.png)",
                    }}
                  >
                    {" "}
                  </div>
                  <div className="portfolio-content">
                    <span className="category">Service/Landscaping </span>
                    <h6 className="title" style={{ height: "130px" }}>
                      <a href="">Landscaping of Karnaphuli Tunnel</a>
                    </h6>
                    {/* <p>
                        Today, the term Information Technology (IT) has
                        ballooned to encompass many aspects of computing
                      </p> */}
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="portfolio-item-two mt-30">
                  <div
                    className="portfolio-img"
                    style={{
                      backgroundImage: "url(assets/img/pro2.png)",
                    }}
                  >
                    {" "}
                  </div>
                  <div className="portfolio-content">
                    <span className="category">Service/Landscaping </span>
                    <h5 className="title" style={{ height: "130px" }}>
                      <a href="">
                        Boundary Fencing at Karnaphuli Tunnel Project
                      </a>
                    </h5>
                    {/* <p>
                        Today, the term Information Technology (IT) has
                        ballooned to encompass many aspects of computing
                      </p> */}
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="portfolio-item-two mt-30">
                  <div
                    className="portfolio-img"
                    style={{
                      backgroundImage: "url(assets/img/pro3.png)",
                    }}
                  >
                    {" "}
                  </div>
                  <div className="portfolio-content">
                    <span className="category">Service/Road Marking </span>
                    <h5 className="title" style={{ height: "130px" }}>
                      <a href="">Road Marking of Karnaphuli Tunnel</a>
                    </h5>
                    {/* <p>
                        Today, the term Information Technology (IT) has
                        ballooned to encompass many aspects of computing
                      </p> */}
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <div className="portfolio-item-two mt-30">
                  <div
                    className="portfolio-img"
                    style={{
                      backgroundImage: "url(assets/img/road-marking/sasac-1.jpg)",
                    }}
                  >
                    {" "}
                  </div>
                  <div className="portfolio-content">
                    <span className="category">Service/Road Marking </span>
                    <h5 className="title" style={{ height: "130px" }}>
                      <a href="">Road Marking of SASEC</a>
                    </h5>
                    {/* <p>
                        Today, the term Information Technology (IT) has
                        ballooned to encompass many aspects of computing
                      </p> */}
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <div className="portfolio-item-two mt-30">
                  <div
                    className="portfolio-img"
                    style={{
                      backgroundImage: "url(assets/img/landscaping/ss-1.jpg)",
                    }}
                  >
                    {" "}
                  </div>
                  <div className="portfolio-content">
                    <span className="category">Service/Landscaping </span>
                    <h5 className="title" style={{ height: "130px" }}>
                      <a href="">Landscaping of SS Power Plant</a>
                    </h5>
                    {/* <p>
                        Today, the term Information Technology (IT) has
                        ballooned to encompass many aspects of computing
                      </p> */}
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <div className="portfolio-item-two mt-30">
                  <div
                    className="portfolio-img"
                    style={{
                      backgroundImage: "url(assets/img/service-img/Outer-ring-road.jpg)",
                    }}
                  >
                    {" "}
                  </div>
                  <div className="portfolio-content">
                    <span className="category">Service/Road Marking </span>
                    <h5 className="title" style={{ height: "130px" }}>
                      <a href="">Chattogram City Outer Ring Road Project</a>
                    </h5>
                    {/* <p>
                        Today, the term Information Technology (IT) has
                        ballooned to encompass many aspects of computing
                      </p> */}
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="portfolio-item-two mt-30">
                  <div
                    className="portfolio-img"
                  // style={{
                  //   backgroundImage: "url(assets/img/portfolio/12.jpg)",
                  // }}
                  >
                    {" "}
                  </div>
                  <div className="portfolio-content">
                    <span className="category">Service/Supply</span>
                    <h5 className="title" style={{ height: "130px" }}>
                      <a href="">
                        Soil Supply work at Kolpolok Sewerage Project
                      </a>
                    </h5>
                    {/* <p>
                        Today, the term Information Technology (IT) has
                        ballooned to encompass many aspects of computing
                      </p> */}
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp"
                data-wow-delay="0.8s"
              >
                <div className="portfolio-item-two mt-30">
                  <div
                    className="portfolio-img"
                  // style={{
                  //   backgroundImage: "url(assets/img/portfolio/13.jpg)",
                  // }}
                  >
                    {" "}
                  </div>
                  <div className="portfolio-content">
                    <span className="category">
                      Service/Machineries Supply
                    </span>
                    <h5 className="title" style={{ height: "130px" }}>
                      <a href="">
                        Air-Conditioner, Water Heater, Furniture, Anti-Skid,
                        Electronics Goods etc. Supply at Karnaphuli Tunnel Project{" "}
                      </a>
                    </h5>
                    {/* <p>
                        Today, the term Information Technology (IT) has
                        ballooned to encompass many aspects of computing
                      </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="portfolio-area section-gap">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-md-8 col-sm-10">
                <div className="section-title-two text-center mb-50">
                  <span className="title-tag">Clients</span>
                  <h2 className="title">Our Valued Clients </h2>
                </div>
              </div>
            </div>
            <div className="slider-container brand-slider">
              <Slider {...settings} className=''>
                <div>
                  <div
                    className="col slick-slide slick-cloned"
                    data-slick-index={1}
                    aria-hidden="true"
                    style={{ width: 250 }}
                    tabIndex={-1}
                  >
                    <div className="brand-item">
                      <a href='#' tabIndex={-1} className='text-center  textColor'>
                        <img
                          className="w-50"
                          src="assets/img/client/client1.png"
                          alt="China Communication & Construction Ltd. (CCCC)"
                        />
                        <p className="font-weight-bold">
                          China Communication &amp; Construction Ltd. (CCCC)
                        </p>
                      </a>

                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="col slick-slide slick-cloned"
                    data-slick-index={2}
                    aria-hidden="true"
                    style={{ width: 250 }}
                    tabIndex={-1}
                  >
                    <div className="brand-item">
                      <a href='#' tabIndex={-1} className='text-center  textColor'>
                        <img
                          className="w-50"
                          src="assets/img/client/client2.png"
                          alt="Bangladesh Bridge Authority (BBA)"
                        />
                        <p className="font-weight-bold">Bangladesh Bridge Authority (BBA)</p>
                      </a>

                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="col slick-slide slick-cloned"
                    data-slick-index={3}
                    aria-hidden="true"
                    style={{ width: 250 }}
                    tabIndex={-1}
                  >
                    <div className="brand-item">
                      <a href='#' tabIndex={-1} className='text-center  textColor'>
                        <img
                          className="w-50"
                          src="assets/img/client/client3.png"
                          alt="SS Power Plant"
                        />
                        <p className="font-weight-bold">SS Power Plant</p>
                      </a>

                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="col slick-slide slick-cloned"
                    data-slick-index={4}
                    aria-hidden="true"
                    style={{ width: 250 }}
                    tabIndex={-1}
                  >
                    <div className="brand-item">
                      <a href='#' tabIndex={-1} className='text-center textColor'>
                        <img
                          className="w-50"
                          src="assets/img/client/client4.png"
                          alt="Rupayan City,ctg"
                        />
                        <p className="font-weight-bold">Rupayan City,ctg</p>
                      </a>

                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="col slick-slide slick-cloned"
                    data-slick-index={5}
                    aria-hidden="true"
                    style={{ width: 250 }}
                    tabIndex={-1}
                  >
                    <div className="brand-item">
                      <a href='#' tabIndex={-1} className='text-center  textColor'>
                        <img
                          className="w-50"
                          src="assets/img/client/client5.png"
                          alt="Radisson Blu, Chittagong"
                        />
                        <p className="font-weight-bold">Radisson Blu, Chittagong</p>
                      </a>

                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="col slick-slide slick-cloned"
                    data-slick-index={6}
                    aria-hidden="true"
                    style={{ width: 250 }}
                    tabIndex={-1}
                  >
                    <div className="brand-item">
                      <a href='#' tabIndex={-1} className='text-center  textColor'>
                        <img
                          className="w-50"
                          src="assets/img/client/client6.png"
                          alt="National Bank"
                        />
                        <p className="font-weight-bold">National Bank</p>
                      </a>

                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="col slick-slide slick-cloned"
                    data-slick-index={7}
                    aria-hidden="true"
                    style={{ width: 250 }}
                    tabIndex={-1}
                  >
                    <div className="brand-item">
                      <a href='#' tabIndex={-1} className='text-center  textColor'>
                        <img
                          className="w-50"
                          src="assets/img/client/client7.png"
                          alt="National Bank"
                        />
                        <p className="font-weight-bold">Local Government Engineering Department (LGED)</p>
                      </a>

                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="col slick-slide slick-cloned"
                    data-slick-index={8}
                    aria-hidden="true"
                    style={{ width: 250 }}
                    tabIndex={-1}
                  >
                    <div className="brand-item">
                      <a href='#' tabIndex={-1} className='text-center  textColor'>
                        <img
                          className="w-50"
                          src="assets/img/client/client8.png"
                          alt="World Vision"
                        />
                        <p className="font-weight-bold">World Vision</p>
                      </a>

                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="col slick-slide slick-cloned"
                    data-slick-index={9}
                    aria-hidden="true"
                    style={{ width: 250 }}
                    tabIndex={-1}
                  >
                    <div className="brand-item">
                      <a href='#' tabIndex={-1} className='text-center  textColor'>
                        <img
                          className="w-50"
                          src="assets/img/client/client9.png"
                          alt="Chittagong WASA"
                        />
                        <p className="font-weight-bold">Chittagong WASA</p>
                      </a>

                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="col slick-slide slick-cloned"
                    data-slick-index={10}
                    aria-hidden="true"
                    style={{ width: 250 }}
                    tabIndex={-1}
                  >
                    <div className="brand-item">
                      <a href='#' tabIndex={-1} className='text-center  textColor'>
                        <img
                          className="w-50"
                          src="assets/img/client/client10.png"
                          alt="Concord Group"
                        />
                        <p className="font-weight-bold">Concord Group</p>
                      </a>

                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="col slick-slide slick-cloned"
                    data-slick-index={11}
                    aria-hidden="true"
                    style={{ width: 250 }}
                    tabIndex={-1}
                  >
                    <div className="brand-item">
                      <a href='#' tabIndex={-1} className='text-center textColor'>
                        <img
                          className="w-50"
                          src="assets/img/client/client11.png"
                          alt="Urban Design & Development Ltd. (UDDL)"
                        />
                        <p className="font-weight-bold">Urban Design & Development Ltd. (UDDL)</p>
                      </a>

                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="col slick-slide slick-cloned"
                    data-slick-index={12}
                    aria-hidden="true"
                    style={{ width: 250 }}
                    tabIndex={-1}
                  >
                    <div className="brand-item">
                      <a href='#' tabIndex={-1} className='text-center  textColor'>
                        <img
                          className="w-50"
                          src="assets/img/client/client6.png"
                          alt="National Bank"
                        />
                        <p className="font-weight-bold">National Bank</p>
                      </a>

                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="col slick-slide slick-cloned"
                    data-slick-index={13}
                    aria-hidden="true"
                    style={{ width: 250 }}
                    tabIndex={-1}
                  >
                    <div className="brand-item">
                      <a href='#' tabIndex={-1} className='text-center  textColor'>
                        <img
                          className="w-50"
                          src="assets/img/client/client12.png"
                          alt="National Bank"
                        />
                        <p className="font-weight-bold"></p>
                      </a>

                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="col slick-slide slick-cloned"
                    data-slick-index={14}
                    aria-hidden="true"
                    style={{ width: 250 }}
                    tabIndex={-1}
                  >
                    <div className="brand-item">
                      <a href='#' tabIndex={-1} className='text-center  textColor'>
                        <img
                          className="w-50"
                          src="assets/img/client/sasec.jpg"
                          alt="South Asia Subregional
Economic Cooperation"
                        />
                        <p className="font-weight-bold">South Asia Subregional
                          Economic Cooperation</p>
                      </a>

                    </div>
                  </div>
                </div>
                {/* <div>
                  <div
                    className="col slick-slide slick-cloned"
                    data-slick-index={6}
                    aria-hidden="true"
                    style={{ width: 250 }}
                    tabIndex={-1}
                  >
                    <div className="brand-item">
                      <a href='#' tabIndex={-1} className='text-center  textColor'>
                        <img
                          className="w-50"
                          src="assets/img/client/client6.png"
                          alt="National Bank"
                        />
                        <p className="font-weight-bold">National Bank</p>
                      </a>

                    </div>
                  </div>
                </div> */}
              </Slider>
            </div>
          </div>
        </section>
        {/*====== Portfolio Section Ends ======*/}
        {/*====== Counter Part Start ======*/}
        {/* <section className="counter-section-two">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-box-five counter-active mb-50">
                                    <div className="icon">
                                        <i className="fal fa-box" />
                                    </div>
                                    <div className="content">
                                        <span className="counter">04</span>
                                        <h6 className="title">Project We Have Done </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-box-five counter-active mb-50">
                                    <div className="icon">
                                        <i className="fal fa-users" />
                                    </div>
                                    <div className="content">
                                        <span className="counter">20</span>
                                        <h6 className="title">People Involved With Us</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-box-five counter-active mb-50">
                                    <div className="icon">
                                        <i className="fal fa-globe" />
                                    </div>
                                    <div className="content">
                                        <span className="counter">02</span>
                                        <h6 className="title">We Are Worldwide</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-box-five counter-active mb-50">
                                    <div className="icon">
                                        <i className="fal fa-award" />
                                    </div>
                                    <div className="content">
                                        <span className="counter">03</span>
                                        <h6 className="title">We Got Too Much Awards</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
        {/*====== Counter Part End ======*/}
        <>
          {/*====== Team Section Start ======*/}
          {/* <section className="team-area mt-50 team-with-shape-two section-gap ">
                        <div className="container">
                            <div className="section-title white-color text-center m3-50">
                                <span className="title-tag">Our Team Member</span>
                                <h2 className="title">
                                    Meet Our Exclusive <br /> Leadership
                                </h2>
                            </div>
                            <div className="row team-members">
                                <div
                                    className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                                    data-wow-delay="0.3s"
                                >
                                    <div className="team-member-two mt-30">
                                        <div className="member-photo">
                                            <img
                                                src="assets/img/team/team-member-10.jpg"
                                                alt="Member-Photo"
                                            />
                                        </div>
                                        <div className="team-content">
                                            <div className="social-icon">
                                                <a href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-behance" />
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-youtube" />
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-dribbble" />
                                                </a>
                                            </div>
                                            <h5 className="name">
                                                <a href="#">Doris Jordan</a>
                                            </h5>
                                            <span className="position">Design Expert</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                                    data-wow-delay="0.4s"
                                >
                                    <div className="team-member-two mt-30">
                                        <div className="member-photo">
                                            <img
                                                src="assets/img/team/team-member-7.jpg"
                                                alt="Member-Photo"
                                            />
                                        </div>
                                        <div className="team-content">
                                            <div className="social-icon">
                                                <a href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-behance" />
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-youtube" />
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-dribbble" />
                                                </a>
                                            </div>
                                            <h5 className="name">
                                                <a href="#">Doris Jordan</a>
                                            </h5>
                                            <span className="position">Design Expert</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                                    data-wow-delay="0.5s"
                                >
                                    <div className="team-member-two mt-30">
                                        <div className="member-photo">
                                            <img
                                                src="assets/img/team/team-member-8.jpg"
                                                alt="Member-Photo"
                                            />
                                        </div>
                                        <div className="team-content">
                                            <div className="social-icon">
                                                <a href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-behance" />
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-youtube" />
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-dribbble" />
                                                </a>
                                            </div>
                                            <h5 className="name">
                                                <a href="#">Doris Jordan</a>
                                            </h5>
                                            <span className="position">Design Expert</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                                    data-wow-delay="0.6s"
                                >
                                    <div className="team-member-two mt-30">
                                        <div className="member-photo">
                                            <img
                                                src="assets/img/team/team-member-9.jpg"
                                                alt="Member-Photo"
                                            />
                                        </div>
                                        <div className="team-content">
                                            <div className="social-icon">
                                                <a href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-behance" />
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-youtube" />
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-dribbble" />
                                                </a>
                                            </div>
                                            <h5 className="name">
                                                <a href="#">Doris Jordan</a>
                                            </h5>
                                            <span className="position">Design Expert</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
          {/*====== Team Section Ends ======*/}
        </>

        {/*====== Faq Section Start ======*/}
        {/* <section className="faq-section section-gap">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div
                                className="col-lg-6 col-md-10 wow fadeInLeft"
                                data-wow-delay="0.3s"
                            >
                                <div className="tile-gallery-three mb-md-gap-50">
                                    <div className="img-one">
                                        <img
                                            src="assets/img/tile-gallery/tile-gallery-05.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                    <div className="img-two text-right">
                                        <img
                                            src="assets/img/tile-gallery/tile-gallery-06.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-6 col-md-10 wow fadeInRight"
                                data-wow-delay="0.3s"
                            >
                                <div className="section-title-two mb-50">
                                    <span className="title-tag">FAQ</span>
                                    <h2 className="title">Get Every Single Answers Here.</h2>
                                </div>
                                <div className="accordion-three" id="accordionExample">
                                    <div className="card">
                                        <div className="card-header" id="headingOne">
                                            <a
                                                className=""
                                                href=""
                                                data-toggle="collapse"
                                                data-target="#collapseOne"
                                                aria-expanded="true"
                                                aria-controls="collapseOne"
                                            >
                                                Today, the term Information Technology
                                            </a>
                                        </div>
                                        <div
                                            id="collapseOne"
                                            className="collapse show"
                                            aria-labelledby="headingOne"
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body">
                                                <p>
                                                    Today, the term Information Technology (IT) has
                                                    ballooned to encompass is real. Today, the term
                                                    Information Technology (IT) has ballooned to
                                                    encompass is real.Today, the term Information
                                                    Technology (IT) has ballooned to encompass is real.{" "}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingTwo">
                                            <a
                                                className="collapsed"
                                                href=""
                                                data-toggle="collapse"
                                                data-target="#collapseTwo"
                                                aria-expanded="false"
                                                aria-controls="collapseTwo"
                                            >
                                                Over the years, a wide range of developments
                                            </a>
                                        </div>
                                        <div
                                            id="collapseTwo"
                                            className="collapse"
                                            aria-labelledby="headingTwo"
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body">
                                                <p>
                                                    Today, the term Information Technology (IT) has
                                                    ballooned to encompass is real. Today, the term
                                                    Information Technology (IT) has ballooned to
                                                    encompass is real.Today, the term Information
                                                    Technology (IT) has ballooned to encompass is real.{" "}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingThree">
                                            <a
                                                className="collapsed"
                                                href=""
                                                data-toggle="collapse"
                                                data-target="#collapseThree"
                                                aria-expanded="false"
                                                aria-controls="collapseThree"
                                            >
                                                As a result, most of us need to know
                                            </a>
                                        </div>
                                        <div
                                            id="collapseThree"
                                            className="collapse"
                                            aria-labelledby="headingThree"
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body">
                                                <p>
                                                    Today, the term Information Technology (IT) has
                                                    ballooned to encompass is real. Today, the term
                                                    Information Technology (IT) has ballooned to
                                                    encompass is real.Today, the term Information
                                                    Technology (IT) has ballooned to encompass is real.{" "}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingFour">
                                            <a
                                                className="collapsed"
                                                href=""
                                                data-toggle="collapse"
                                                data-target="#collapseFour"
                                                aria-expanded="false"
                                                aria-controls="collapseFour"
                                            >
                                                Our knowledge of computers will help us
                                            </a>
                                        </div>
                                        <div
                                            id="collapseFour"
                                            className="collapse"
                                            aria-labelledby="headingFour"
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body">
                                                <p>
                                                    Today, the term Information Technology (IT) has
                                                    ballooned to encompass is real. Today, the term
                                                    Information Technology (IT) has ballooned to
                                                    encompass is real.Today, the term Information
                                                    Technology (IT) has ballooned to encompass is real.{" "}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
        {/*====== Faq Section End ======*/}
        {/*====== Back to top start ======*/}
        <div className="back-to-top">
          <a href="#">
            {" "}
            <i className="fas fa-arrow-up" />{" "}
          </a>
        </div>
        {/*====== Back to top start ======*/}
      </>
    </div>
  );
};

export default Home;