import React from "react";
import mobileImage from "../assets/images/mobile.png";
import Services from "../Component/Services";
import $ from "jquery";

function header() {
  $(function () {
    smootscroll(600);
  });

  function smootscroll(duration) {
    $("a[href^='#']").on("click", function (event) {
      var target = $($(this).attr("href"));
      if (target.length) {
        event.preventDefault();
        $("html,body").animate(
          {
            scrollTop: target.offset().top,
          },
          duration
        );
      }
    });
  }
  return (
    <>
      <header id="header">
        <div className="container">
          <input type="checkbox" id="openSidebar" />
          <label for="openSidebar" className="lines">
            <div className="line1"></div>
            <div className="line1"></div>
            <div className="line1"></div>
          </label>
          <div className="navigation">
            <ul>
              <li>
                <a href="#header">Home</a>
              </li>
              <li>
                <a href="#services">Our services</a>
              </li>
              <li>
                <a href="#work">our work</a>
              </li>
              <li>
                <a href="#testimonial">testimonial</a>
              </li>
            </ul>
          </div>

          <div className="header-container">
            <div className="header-text">
              <h2>Let's Create Responsive Design</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                accumsan, lacus et pretium venenatis, ex eros finibus risus, et
                rutrum justo augue a diam. Ut eros sem, lacinia quis ligula nec,
                imperdiet cursus ex.
              </p>
              <div className="button-section">
                <a className="btn btn-info">Lets Start &rarr;</a>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile">
          <img src={mobileImage} alt="" />
        </div>

        <div className="logo">
          <span>
            <a href="#header">Creative Logo</a>
          </span>
        </div>
      </header>
      <Services />
    </>
  );
}

export default header;
