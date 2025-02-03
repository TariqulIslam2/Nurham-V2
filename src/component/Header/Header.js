import React from 'react';

import { Link } from 'react-router-dom';
import mainMenu from '../../mainMenu';
const Header = () => {

  return (
    <>
      <header
        onClick={mainMenu}
        className="header-four header-full-width sticky-header logo-color"
      >
        <div className="header-navigation">
          <div className="container-fluid d-flex align-items-center justify-content-between">
            <div className="header-left">
              <div className="site-logo">
                <Link to={"/home"} style={{ filter: "brightness(1.5)" }}>
                  <img
                    src="assets/img/nurham-logo-sm.png"
                    alt="nurham"
                    className="main-logo"
                    height={100}

                  />
                  <h6 className="project-color main-logo " style={{ paddingLeft: "5px" }}> NURHAM LTD</h6>

                  <img
                    src="assets/img/nurham-logo-sm.png"
                    alt="nurham"
                    className="sticky-logo"
                    height={100}

                  />
                  <h6 className="project-color sticky-logo" style={{ paddingLeft: "5px" }}> NURHAM LTD</h6>
                </Link>
              </div>
            </div>
            <div className="site-nav-menu">
              <ul className="primary-menu">
                <li className="current">
                  <Link to="/home">
                    <a>Home</a>{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <a className="nav-link">About</a>
                  </Link>
                </li>
                <li>
                  <Link to="/service">
                    {" "}
                    <a> Products </a>
                  </Link>
                  <ul class="submenu">
                    <li> <Link className='light-dark' to="/elevator_escalator">Elevator and
                      Escalator
                    </Link>
                    </li>
                    <li> <Link className='light-dark' to="/Generators">
                      Generator
                    </Link></li>
                  </ul>
                </li>

                <li>
                  <Link to="/service">
                    {" "}
                    <a>Services</a>
                  </Link>
                  <ul class="submenu">
                    <li> <Link className='light-dark' to="/landscaping">
                      Landscaping
                    </Link></li>
                    <li> <Link className='light-dark' to="/cabling">
                      Underground Cabling
                    </Link></li>
                    <li> <Link className='light-dark' to="/db_lt">
                      DB & LT Supply and Installation
                    </Link></li>
                    <li> <Link className='light-dark' to="/solar">
                      Solar system

                    </Link></li>
                    <li> <Link className='light-dark' to="/lamp">
                      Street Lamps & Pole Fitting
                    </Link></li>
                    <li> <Link className='light-dark' to="/road">
                      Road Marking
                    </Link></li>

                    <li><a className='light-dark'>Engineering Consultancy</a></li>
                    <li><a className='light-dark'>CCTV Setup & Services</a></li>
                    <li><a className='light-dark' >Equipment & Machineries</a></li>
                  </ul>
                </li>
                <li>
                  <Link to="/contact">
                    {" "}
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
              <a href="#" className="nav-close">
                <i className="fal fa-times" />
              </a>
            </div>
            <div className="header-extra d-flex align-items-center">
              <div className="nav-toggler">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;