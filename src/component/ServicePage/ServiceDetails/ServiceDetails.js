import React from 'react';

const ServiceDetails = () => {
  return (
    <div>
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

        {/*====== Page Title start ======*/}

        <section className="page-title-area">
          <div className="container">
            <h2 className="title">Services Details</h2>
            <ul className="breadcrumb-nav">
              <li>
                <a>Home</a>
              </li>
              <li className="active">About</li>
            </ul>
          </div>
        </section>
        {/*====== Page Title End ======*/}
        {/*====== Service Section Start ======*/}
        <section className="service-details-section section-gap">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-10">
                <div className="services-details-imgs mb-md-gap-50">
                  <div className="img-one">
                    <img
                      src="assets/img/service-img/services-op-1.jpg"
                      alt="img"
                    />
                  </div>
                  <div className="img-two text-right">
                    <img
                      src="assets/img/service-img/services-op-2.jpg"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-10">
                <div className="service-details-text-block">
                  <div className="section-title with-right-border mb-40">
                    <span className="title-tag">Road Marking</span>
                    <h2 className="title">Nothing to do anything.</h2>
                  </div>
                  <p className="text-color-2">
                    * Longitudinal Markings. <br /> * Transverse Markings.{" "}
                    <br /> * Hazard Marking.
                    <br /> * Block Marking.
                    <br /> * Arrow Marking.
                    <br /> * Directional Marking.
                    <br /> * Facility Marking.
                    <br /> * Vibration Marking
                  </p>
                  <div className="service-support-btn">
                    <p>Make A Call</p>
                    <span> <a className='text-light' href="tel:+8801877363621"> +88 01877-363621</a></span>
                    <i className="fal fa-phone" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


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

export default ServiceDetails;