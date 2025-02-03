import React from 'react';

const TeamPage = () => {

  return (
    <div>
      <>
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
        {/* <section className="page-title-area">
          <div className="container">
            <h2 className="title">Team</h2>
            <ul className="breadcrumb-nav">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="active">Team</li>
            </ul>
          </div>
        </section> */}
        {/*====== Page Title End ======*/}
        {/*====== Team Start  ======*/}
        {/* <!--====== Team Section Start ======--> */}
        <section class="team-area team-with-shape-two section-gap ">
          <div class="container">
            <div class="section-title white-color text-center m3-50">
              <span class="title-tag">Our Team Member</span>
              <h2 class="title">
                Meet Our Exclusive <br /> Leadership
              </h2>
            </div>

            <div class="row team-members ">
              <div class="col-lg-3 col-md-6 col-sm-6 "></div>
              <div
                class="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div class="team-member-two mt-30">
                  <div class="member-photo">
                    <img src="assets/img/team/mannan.png" alt="Member-Photo" />
                  </div>
                  <div class="team-content">
                    <div class="social-icon">
                      <a>
                        <i class="fab fa-facebook-f"></i>
                      </a>
                      <a href="https://github.com/ArifMannan" target="_blank">
                        <i class="fab fa-github"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/md-mannan-hossain-9a7529168/"
                        target="_blank"
                      >
                        <i class="fab fa-linkedin"></i>
                      </a>
                    </div>

                    <h5 class="name">
                      <a>Md Mannan Hossain</a>
                    </h5>
                    <span class="position">Web Developer</span>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div class="team-member-two mt-30">
                  <div class="member-photo">
                    <img src="assets/img/team/tariq.jpg" alt="Member-Photo" />
                  </div>
                  <div class="team-content">
                    <div class="social-icon">
                      <a>
                        <i class="fab fa-facebook-f"></i>
                      </a>
                      <a
                        href="https://github.com/tariqulislam29"
                        target="_blank"
                      >
                        <i class="fab fa-github"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/md-tariqul-islam-sakib-4b222919b/"
                        target="_blank"
                      >
                        <i class="fab fa-linkedin"></i>
                      </a>
                    </div>

                    <h5 class="name">
                      <a>Md Tariqul Islam Sakib</a>
                    </h5>
                    <span class="position">Web Developer</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 "></div>
            </div>
          </div>
        </section>
        {/* <!--====== Team Section Ends ======--> */}
        {/*====== Team End ======*/}

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

export default TeamPage;