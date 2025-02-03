import React from 'react';

const ServicePage = () => {
  return (
    <div id="servicetop">
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
            <h2 className="title">Services</h2>
            <ul className="breadcrumb-nav">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="active">Services</li>
            </ul>
          </div>
        </section>
        {/*====== Page Title End ======*/}
        {/*====== Service Section Start ======*/}
        <section className="service-section-two section-gap-top pb-90">
          <div className="container">
            <div className="row service-items justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-8">
                {/* <Link to="/servicedetails"> */}
                  <div className="service-item-eight mb-30">
                    <div className="service-img">
                      <img
                        className="service-img-size"
                        src="assets/img/service-img/landscaping1.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="services-overlay">
                      <div className="icon">
                        <i className="fal fa-eye-dropper" />
                      </div>
                      <h4 className="title">
                        <a >Landscaping</a>
                      </h4>
                      <p>
                        The functional goal of technical content is to help
                        people use a product successfully. The business goal
                        must tie the content.
                      </p>
                    </div>
                  </div>
                {/* </Link> */}
              </div>

              <div className="col-lg-4 col-md-6 col-sm-8">
                {/* <Link to="/servicedetails"> */}
                  <div className="service-item-eight mb-30">
                    <div className="service-img">
                      <img
                        className="service-img-size"
                        src="assets/img/service-img/projectmanagement.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="services-overlay">
                      <div className="icon">
                        <i className="fal fa-eye-dropper" />
                      </div>
                      <h4 className="title">
                        <a >Project Management</a>
                      </h4>
                      <p>
                        The functional goal of technical content is to help
                        people use a product successfully. The business goal
                        must tie the content.
                      </p>
                    </div>
                  </div>
                {/* </Link> */}
              </div>

              <div className="col-lg-4 col-md-6 col-sm-8">
                {/* <Link to="/servicedetails"> */}
                  <div className="service-item-eight mb-30">
                    <div className="service-img">
                      <img
                        className="service-img-size"
                        src="assets/img/service-img/engineering-consulting.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="services-overlay">
                      <div className="icon">
                        <i className="fal fa-eye-dropper" />
                      </div>
                      <h4 className="title">
                        <a >Engineering Consultancy</a>
                      </h4>
                      <p>
                        The functional goal of technical content is to help
                        people use a product successfully. The business goal
                        must tie the content.
                      </p>
                    </div>
                  </div>
                {/* </Link> */}
              </div>

              <div className="col-lg-4 col-md-6 col-sm-8">
                {/* <Link to="/servicedetails"> */}
                  <div className="service-item-eight mb-30">
                    <div className="service-img">
                      <img
                        className="service-img-size"
                        src="assets/img/service-img/cctv-security.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="services-overlay">
                      <div className="icon">
                        <i className="fal fa-eye-dropper" />
                      </div>
                      <h4 className="title">
                        <a >CCTV Setup & Services</a>
                      </h4>
                      <p>
                        The functional goal of technical content is to help
                        people use a product successfully. The business goal
                        must tie the content.
                      </p>
                    </div>
                  </div>
                {/* </Link> */}
              </div>

              <div className="col-lg-4 col-md-6 col-sm-8">
                {/* <Link to="/servicedetails"> */}
                  <div className="service-item-eight mb-30">
                    <div className="service-img">
                      <img
                        className="service-img-size"
                        src="assets/img/service-img/road-marking.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="services-overlay">
                      <div className="icon">
                        <i className="fal fa-eye-dropper" />
                      </div>
                      <h4 className="title">
                        <a >Road Marking</a>
                      </h4>
                      <p>
                        The functional goal of technical content is to help
                        people use a product successfully. The business goal
                        must tie the content.
                      </p>
                    </div>
                  </div>
                {/* </Link> */}
              </div>

              <div className="col-lg-4 col-md-6 col-sm-8">
                {/* <Link to="/servicedetails"> */}
                  <div className="service-item-eight mb-30">
                    <div className="service-img">
                      <img
                        className="service-img-size"
                        src="assets/img/service-img/equipment.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="services-overlay">
                      <div className="icon">
                        <i className="fal fa-eye-dropper" />
                      </div>
                      <h4 className="title">
                        <a >Heavy Equipment & Machineries Supply</a>
                      </h4>
                      <p>
                        The functional goal of technical content is to help
                        people use a product successfully. The business goal
                        must tie the content.
                      </p>
                    </div>
                  </div>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </section>
        {/*====== Service Section End ======*/}
        {/*====== Pricing Section Start ======*/}
        {/* <section className="pricing-section section-gap soft-blue-bg">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-lg-6 col-md-6">
                  <div className="section-title with-right-border mb-50">
                    <span className="title-tag">plans</span>
                    <h2 className="title">Here is plans</h2>
                  </div>
                </div>
                <div className="col-auto">
                  <ul
                    className="nav nav-pills pricing-tab-btn"
                    id="pricingOneTab"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="pill"
                        href="#monthly-item"
                        role="tab"
                      >
                        Monthly
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="pill"
                        href="#yearly-item"
                      >
                        Yearly
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tab-content" id="pricingOneTabContent">
                <div
                  className="tab-pane fade show active"
                  id="monthly-item"
                  role="tabpanel"
                >
                  <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                      <div
                        className="pricing-plan-item"
                        style={{
                          backgroundImage: "url(assets/img/plans-thumb.jpg)",
                        }}
                      >
                        <p className="plan-name">Early Birds</p>
                        <h3 className="price">
                          $ <span>9</span>
                        </h3>
                        <span className="plan-duration">Per Month</span>
                        <p>
                          The functional goal of technical content is to help
                          people use a product successfully.
                        </p>
                        <a className="plans-btn" href="#">
                          Purchase Now
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                      <div
                        className="pricing-plan-item"
                        style={{
                          backgroundImage: "url(assets/img/plans-thumb.jpg)",
                        }}
                      >
                        <p className="plan-name">Team</p>
                        <h3 className="price">
                          $ <span>32</span>
                        </h3>
                        <span className="plan-duration">Per Month</span>
                        <p>
                          The functional goal of technical content is to help
                          people use a product successfully.
                        </p>
                        <a className="plans-btn" href="#">
                          Purchase Now
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                      <div
                        className="pricing-plan-item"
                        style={{
                          backgroundImage: "url(assets/img/plans-thumb.jpg)",
                        }}
                      >
                        <p className="plan-name">Personal</p>
                        <h3 className="price">
                          $ <span>69</span>
                        </h3>
                        <span className="plan-duration">Per Month</span>
                        <p>
                          The functional goal of technical content is to help
                          people use a product successfully.
                        </p>
                        <a className="plans-btn" href="#">
                          Purchase Now
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                      <div
                        className="pricing-plan-item"
                        style={{
                          backgroundImage: "url(assets/img/plans-thumb.jpg)",
                        }}
                      >
                        <p className="plan-name">Plutinum</p>
                        <h3 className="price">
                          $ <span>99</span>
                        </h3>
                        <span className="plan-duration">Per Month</span>
                        <p>
                          The functional goal of technical content is to help
                          people use a product successfully.
                        </p>
                        <a className="plans-btn" href="#">
                          Purchase Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="yearly-item" role="tabpanel">
                  <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                      <div
                        className="pricing-plan-item"
                        style={{
                          backgroundImage: "url(assets/img/plans-thumb.jpg)",
                        }}
                      >
                        <p className="plan-name">Early Birds</p>
                        <h3 className="price">
                          $ <span>56</span>
                        </h3>
                        <span className="plan-duration">Per Year</span>
                        <p>
                          The functional goal of technical content is to help
                          people use a product successfully.
                        </p>
                        <a className="plans-btn" href="#">
                          Purchase Now
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                      <div
                        className="pricing-plan-item"
                        style={{
                          backgroundImage: "url(assets/img/plans-thumb.jpg)",
                        }}
                      >
                        <p className="plan-name">Team</p>
                        <h3 className="price">
                          $ <span>99</span>
                        </h3>
                        <span className="plan-duration">Per Year</span>
                        <p>
                          The functional goal of technical content is to help
                          people use a product successfully.
                        </p>
                        <a className="plans-btn" href="#">
                          Purchase Now
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                      <div
                        className="pricing-plan-item"
                        style={{
                          backgroundImage: "url(assets/img/plans-thumb.jpg)",
                        }}
                      >
                        <p className="plan-name">Personal</p>
                        <h3 className="price">
                          $ <span>133</span>
                        </h3>
                        <span className="plan-duration">Per Year</span>
                        <p>
                          The functional goal of technical content is to help
                          people use a product successfully.
                        </p>
                        <a className="plans-btn" href="#">
                          Purchase Now
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                      <div
                        className="pricing-plan-item"
                        style={{
                          backgroundImage: "url(assets/img/plans-thumb.jpg)",
                        }}
                      >
                        <p className="plan-name">Plutinum</p>
                        <h3 className="price">
                          $ <span>599</span>
                        </h3>
                        <span className="plan-duration">Per Year</span>
                        <p>
                          The functional goal of technical content is to help
                          people use a product successfully.
                        </p>
                        <a className="plans-btn" href="#">
                          Purchase Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
        {/*====== Pricing Section End ======*/}
        {/*====== Latest News Start ======*/}

        {/*====== Latest News End ======*/}
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

export default ServicePage;