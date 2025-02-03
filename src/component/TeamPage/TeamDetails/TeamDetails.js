import React from 'react';

const TeamDetails = () => {
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
            <h2 className="title">Team Details</h2>
            <ul className="breadcrumb-nav">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="active">Team Details</li>
            </ul>
          </div>
        </section>
        {/*====== Page Title End ======*/}
        {/*====== Team Start  ======*/}
        <section className="team-area section-gap">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-10">
                <div className="team-details-thumb mb-md-gap-50">
                  <img src="assets/img/team/team-details-thumb.jpg" alt="" />
                </div>
                <div className="col-lg-6 col-md-10">
                  <div className="team-details-content">
                    <h4 className="title">X</h4>
                    <span>Founder</span>
                    <p className="pb-15">
                      Does any industry face a more complex audience journey and
                      marketing sales process than B2B technology? Consider the
                      number of people who influence a sale, the length of the
                      decision-making cycle, the competing interests of the
                      people who purchase, implement, manage, and use the
                      technology. It’s a lot meaningful content here.
                    </p>
                    <p>
                      As a result, most of us need to know how to use computers.
                      Our knowledge of computers will help us to tap into
                      challenging career opportunities and enhance the quality
                      of our lives. It is imperative that quality students be
                      encouraged and motivated to study computers and become
                      capable and responsible IT professionals. The education
                      model needs to align itself with dynamically changing
                      technology to meet the growing need for skilled IT
                      manpower and deliver state-of-the-art, industry relevant
                      and technology ready programs.​
                    </p>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-behance" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
             </div>
          </section>
       
     
       
        {/*====== FAQ Section End ======*/}
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

export default TeamDetails;