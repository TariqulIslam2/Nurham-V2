import React from 'react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
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
              <h2 className="title">News Grid</h2>
              <ul className="breadcrumb-nav">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="active">News</li>
              </ul>
            </div>
          </section>
          {/*====== Page Title End ======*/}
          {/*====== Blog Area Start  ======*/}
          <section className="blog-area section-gap">
            <div className="container">
              <div className="blog-grid-items row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-8">
                  <Link to="/blogdetails">
                    <div className="single-blog-grid mb-30">
                      <img src="assets/img/blog/blog-grid-1.jpg" alt="" />
                      <a className="cat" href="#">
                        Design/SEO
                      </a>
                      <div className="blog-grid-overlay">
                        <h5 className="title">
                          <a href="#">
                            A series of iOS 7 inspired vector icons.
                          </a>
                        </h5>
                        <ul className="post-meta">
                          <li>
                            <a href="#">
                              <i className="fal fa-calendar-alt" />{" "}
                              <span>23rd January 2019</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fal fa-heart" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                  <Link to="/blogdetails">
                    <div className="single-blog-grid mb-30">
                      <img src="assets/img/blog/blog-grid-2.jpg" alt="" />
                      <a className="cat" href="#">
                        Design/SEO
                      </a>
                      <div className="blog-grid-overlay">
                        <h5 className="title">
                          <a href="#">
                            A series of iOS 7 inspired vector icons.
                          </a>
                        </h5>
                        <ul className="post-meta">
                          <li>
                            <a href="#">
                              <i className="fal fa-calendar-alt" />{" "}
                              <span>23rd January 2019</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fal fa-heart" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                  <Link to="/blogdetails">
                    <div className="single-blog-grid mb-30">
                      <img src="assets/img/blog/blog-grid-3.jpg" alt="" />
                      <a className="cat" href="#">
                        Design/SEO
                      </a>
                      <div className="blog-grid-overlay">
                        <h5 className="title">
                          <a href="#">
                            A series of iOS 7 inspired vector icons.
                          </a>
                        </h5>
                        <ul className="post-meta">
                          <li>
                            <a href="#">
                              <i className="fal fa-calendar-alt" />{" "}
                              <span>23rd January 2019</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fal fa-heart" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                  <Link to="/blogdetails">
                    <div className="single-blog-grid mb-30">
                      <img src="assets/img/blog/blog-grid-4.jpg" alt="" />
                      <a className="cat" href="#">
                        Design/SEO
                      </a>
                      <div className="blog-grid-overlay">
                        <h5 className="title">
                          <a href="#">
                            A series of iOS 7 inspired vector icons.
                          </a>
                        </h5>
                        <ul className="post-meta">
                          <li>
                            <a href="#">
                              <i className="fal fa-calendar-alt" />{" "}
                              <span>23rd January 2019</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fal fa-heart" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                  <Link to="/blogdetails">
                    <div className="single-blog-grid mb-30">
                      <img src="assets/img/blog/blog-grid-5.jpg" alt="" />
                      <a className="cat" href="#">
                        Design/SEO
                      </a>
                      <div className="blog-grid-overlay">
                        <h5 className="title">
                          <a href="#">
                            A series of iOS 7 inspired vector icons.
                          </a>
                        </h5>
                        <ul className="post-meta">
                          <li>
                            <a href="#">
                              <i className="fal fa-calendar-alt" />{" "}
                              <span>23rd January 2019</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fal fa-heart" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                  <Link to="/blogdetails">
                    <div className="single-blog-grid mb-30">
                      <img src="assets/img/blog/blog-grid-6.jpg" alt="" />
                      <a className="cat" href="#">
                        Design/SEO
                      </a>
                      <div className="blog-grid-overlay">
                        <h5 className="title">
                          <a href="#">
                            A series of iOS 7 inspired vector icons.
                          </a>
                        </h5>
                        <ul className="post-meta">
                          <li>
                            <a href="#">
                              <i className="fal fa-calendar-alt" />{" "}
                              <span>23rd January 2019</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fal fa-heart" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                  <Link to="/blogdetails">
                    <div className="single-blog-grid mb-30">
                      <img src="assets/img/blog/blog-grid-7.jpg" alt="" />
                      <a className="cat" href="#">
                        Design/SEO
                      </a>
                      <div className="blog-grid-overlay">
                        <h5 className="title">
                          <a href="#">
                            A series of iOS 7 inspired vector icons.
                          </a>
                        </h5>
                        <ul className="post-meta">
                          <li>
                            <a href="#">
                              <i className="fal fa-calendar-alt" />{" "}
                              <span>23rd January 2019</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fal fa-heart" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                  <Link to="/blogdetails">
                    <div className="single-blog-grid mb-30">
                      <img src="assets/img/blog/blog-grid-8.jpg" alt="" />
                      <a className="cat" href="#">
                        Design/SEO
                      </a>
                      <div className="blog-grid-overlay">
                        <h5 className="title">
                          <a href="#">
                            A series of iOS 7 inspired vector icons.
                          </a>
                        </h5>
                        <ul className="post-meta">
                          <li>
                            <a href="#">
                              <i className="fal fa-calendar-alt" />{" "}
                              <span>23rd January 2019</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fal fa-heart" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                  <Link to="/blogdetails">
                    <div className="single-blog-grid mb-30">
                      <img src="assets/img/blog/blog-grid-9.jpg" alt="" />
                      <a className="cat" href="#">
                        Design/SEO
                      </a>
                      <div className="blog-grid-overlay">
                        <h5 className="title">
                          <a href="#">
                            A series of iOS 7 inspired vector icons.
                          </a>
                        </h5>
                        <ul className="post-meta">
                          <li>
                            <a href="#">
                              <i className="fal fa-calendar-alt" />{" "}
                              <span>23rd January 2019</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fal fa-heart" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Link>
                </div>

             
              </div>
              <ul className="page-pagination blog-pagination mt-50">
                <li>
                  <a href="#">
                    <i className="fal fa-arrow-left" />
                  </a>
                </li>
                <li>
                  <a href="#" className="active">
                    01
                  </a>
                </li>
                <li>
                  <a href="#">02</a>
                </li>
                <li>
                  <a href="#">...</a>
                </li>
                <li>
                  <a href="#">10</a>
                </li>
                <li>
                  <a href="#">
                    <i className="fal fa-arrow-right" />
                  </a>
                </li>
              </ul>
            </div>
          </section>
          {/*====== Blog Area End ======*/}
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

export default BlogPage;