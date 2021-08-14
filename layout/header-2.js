import Link from "next/link";
import { useState } from "react";
function Header2() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState("home");
  return (
    <>
      <header className="site-header mo-left header-transparent">
        {/* <!-- Main Header --> */}
        <div className="sticky-header main-bar-wrapper navbar-expand-lg">
          <div className="main-bar clearfix ">
            <div className="container clearfix">
              {/* <!-- Website Logo --> */}
              <div className="logo-header mostion logo-dark">
                <Link href="/">
                  <a>
                    <img
                      className="custom-logo-white"
                      src="images/logo-white.png"
                      alt=""
                    />
                    <img
                      className="custom-logo"
                      src="images/logo-2.png"
                      alt=""
                    />
                  </a>
                </Link>
              </div>
              {/* <!-- Nav Toggle Button --> */}
              <button
                className={`navbar-toggler collapsed navicon justify-content-end ${
                  show ? "open" : ""
                }`}
                onClick={() => setShow(!show)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              {/* <!-- Extra Nav --> */}
              <div className="extra-nav">
                <div className="extra-cell">
                  <Link href="contact-us-2">
                    <a className="btn btn-primary rounded-xl gradient shadow">
                      Get A Quote
                    </a>
                  </Link>
                </div>
              </div>
              <div
                className={`header-nav navbar-collapse collapse justify-content-end ${
                  show ? "show" : ""
                }`}
                id="navbarNavDropdown"
              >
                <div className="logo-header">
                  <Link href="/">
                    <a>
                      <img src="images/logo-2.png" alt="" />
                    </a>
                  </Link>
                </div>

                <ul className="nav navbar-nav navbar">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className={`${open === "about" ? "open" : ""}`}>
                    <a onClick={() => setOpen("about")}>
                      <span>Pages</span>
                      <i className="fa fa-chevron-down"></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/about-us-2">
                          <a>About Us</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/team-2">
                          <a>Team</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/coming-soon">
                          <a>Coming Soon</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/error-404">
                          <a>Error 404</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className={`${open === "services" ? "open" : ""}`}>
                    <a onClick={() => setOpen("services")}>
                      <span>Services</span>
                      <i className="fa fa-chevron-down"></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/services-2">
                          <a>Services</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services-details-2">
                          <a>Services Details</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/contact-us-2">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                </ul>
                <div className="dlab-social-icon">
                  <ul>
                    <Link href="https://en-gb.facebook.com/">
                      <a className="fa fa-facebook"></a>
                    </Link>
                    <Link href="https://twitter.com/login?lang=en">
                      <a className="fa fa-twitter"></a>
                    </Link>
                    <Link href="https://www.linkedin.com/login">
                      <a className="fa fa-linkedin"></a>
                    </Link>
                    <Link href="https://www.instagram.com/">
                      <a className="fa fa-instagram"></a>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Main Header End --> */}
      </header>
    </>
  );
}

export default Header2;
