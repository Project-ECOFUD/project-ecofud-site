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
                      src="images/logo-white.svg"
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
                      Run a Node
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
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Energy comparison</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>FAQ</a>
                    </Link>
                  </li>
                </ul>
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
