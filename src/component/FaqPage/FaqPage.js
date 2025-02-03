import React from 'react';

const FaqPage = () => {
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
            <h2 className="title">FAQ</h2>
            <ul className="breadcrumb-nav">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="active">Faq</li>
            </ul>
          </div>
        </section>
        {/*====== Page Title End ======*/}
        {/*====== Faq Section Start ======*/}
        <section className="faq-section section-gap">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-10">
                <div
                  className="accordion-three accordion-three-two"
                  id="accordionExample"
                >
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      {" "}
                      <a
                        className=""
                        href=""
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Technical content may have persuasive objectives
                      </a>{" "}
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
                      {" "}
                      <a
                        className="collapsed"
                        href=""
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Technical content may have persuasive objectives
                      </a>{" "}
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
                      {" "}
                      <a
                        className="collapsed"
                        href=""
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Technical content may have persuasive objectives
                      </a>{" "}
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
                      {" "}
                      <a
                        className="collapsed"
                        href=""
                        data-toggle="collapse"
                        data-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Technical content may have persuasive objectives
                      </a>{" "}
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
                  <div className="card">
                    <div className="card-header" id="headingFive">
                      {" "}
                      <a
                        className="collapsed"
                        href=""
                        data-toggle="collapse"
                        data-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Technical content may have persuasive objectives
                      </a>{" "}
                    </div>
                    <div
                      id="collapseFive"
                      className="collapse"
                      aria-labelledby="headingFive"
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
                    <div className="card-header" id="headingSix">
                      {" "}
                      <a
                        className="collapsed"
                        href=""
                        data-toggle="collapse"
                        data-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        Technical content may have persuasive objectives
                      </a>{" "}
                    </div>
                    <div
                      id="collapseSix"
                      className="collapse"
                      aria-labelledby="headingSix"
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
              <div className="col-lg-6 col-md-10">
                <div className="tile-gallery-three mt-md-gap-50">
                  <div className="img-one">
                    {" "}
                    <img
                      src="assets/img/tile-gallery/tile-gallery-05.jpg"
                      alt="Image"
                    />{" "}
                  </div>
                  <div className="img-two text-right">
                    {" "}
                    <img
                      src="assets/img/tile-gallery/tile-gallery-06.jpg"
                      alt="Image"
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Faq Section End ======*/}
        {/*====== Faq Section Start ======*/}
        <section className="faq-section-two soft-blue-bg section-gap">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-9">
                <div className="intro-video-with-shape mb-md-gap-60">
                  {" "}
                  <img
                    src="assets/img/about-intro-thumb.jpg"
                    alt="Image"
                  />{" "}
                  <a href="#" className="video-popup">
                    <i className="fas fa-play" />
                  </a>{" "}
                </div>
              </div>
              <div className="col-lg-6 col-md-10">
                <div className="accordion-four" id="accordionExampleTwo">
                  <div className="card">
                    <div className="card-header" id="headingOne-2">
                      <a
                        className=""
                        href=""
                        data-toggle="collapse"
                        data-target="#collapseOne-2"
                        aria-expanded="true"
                        aria-controls="collapseOne-2"
                      >
                        {" "}
                        <i className="fal fa-magic" />
                        Technical content may have persuasive objectives{" "}
                      </a>
                    </div>
                    <div
                      id="collapseOne-2"
                      className="collapse show"
                      aria-labelledby="headingOne-2"
                      data-parent="#accordionExampleTwo"
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
                  {/* card */}
                  <div className="card">
                    <div className="card-header" id="headingTwo-2">
                      <a
                        className="collapsed"
                        href=""
                        data-toggle="collapse"
                        data-target="#collapseTwo-2"
                        aria-expanded="false"
                        aria-controls="collapseTwo-2"
                      >
                        {" "}
                        <i className="fal fa-magic" />
                        Technical content may have persuasive objectives{" "}
                      </a>
                    </div>
                    <div
                      id="collapseTwo-2"
                      className="collapse"
                      aria-labelledby="headingTwo-2"
                      data-parent="#accordionExampleTwo"
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
                  {/* card */}
                  <div className="card">
                    <div className="card-header" id="headingThree-2">
                      <a
                        className="collapsed"
                        href=""
                        data-toggle="collapse"
                        data-target="#collapseThree-2"
                        aria-expanded="false"
                        aria-controls="collapseThree-2"
                      >
                        {" "}
                        <i className="fal fa-magic" />
                        Technical content may have persuasive objectives{" "}
                      </a>
                    </div>
                    <div
                      id="collapseThree-2"
                      className="collapse"
                      aria-labelledby="headingThree-2"
                      data-parent="#accordionExampleTwo"
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
                  {/* card */}
                  <div className="card">
                    <div className="card-header" id="headingFour-2">
                      <a
                        className="collapsed"
                        href=""
                        data-toggle="collapse"
                        data-target="#collapseFour-2"
                        aria-expanded="false"
                        aria-controls="collapseFour-2"
                      >
                        {" "}
                        <i className="fal fa-magic" />
                        Technical content may have persuasive objectives{" "}
                      </a>
                    </div>
                    <div
                      id="collapseFour-2"
                      className="collapse"
                      aria-labelledby="headingFour-2"
                      data-parent="#accordionExampleTwo"
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
                    <div className="card-header" id="headingFive-2">
                      <a
                        className="collapsed"
                        href=""
                        data-toggle="collapse"
                        data-target="#collapseFive-2"
                        aria-expanded="false"
                        aria-controls="collapseFive-2"
                      >
                        {" "}
                        <i className="fal fa-magic" />
                        Technical content may have persuasive objectives{" "}
                      </a>
                    </div>
                    <div
                      id="collapseFive-2"
                      className="collapse"
                      aria-labelledby="headingFive-2"
                      data-parent="#accordionExampleTwo"
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
        </section>
        {/*====== Faq Section End ======*/}



        {/*====== Back to top start ======*/}
        <div className="back-to-top">
          <a href="#">
            {" "}
            <i className="fas fa-arrow-up" />{" "}
          </a>
        </div>



      </>
    </div>
  );
};

export default FaqPage;