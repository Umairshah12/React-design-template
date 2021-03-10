import React from "react";
import Image1 from "../assets/images/work1.jpg";
import Image2 from "../assets/images/work2.jpg";
import Image3 from "../assets/images/work3.jpg";
import Image4 from "../assets/images/work1.jpg";
import Image5 from "../assets/images/work2.jpg";
import Image6 from "../assets/images/work3.jpg";
import Testimonial from "../Component/Testimonial";

function Work() {
  const workArray = [
    { img: Image1 },
    { img: Image2 },
    { img: Image3 },
    { img: Image4 },
    { img: Image5 },
    { img: Image6 },
  ];
  return (
    <>
      <section id="work">
        <div className="container">
          <div className="work-title">
            <h2>Our Work</h2>
          </div>

          <div className="work-des">
            <p className="work-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              accumsan, lacus et pretium venenatis, ex eros finibus risus, et
              rutrum justo augue a diam. Ut eros sem, lacinia quis ligula nec,
              imperdiet cursus ex.
            </p>
          </div>

          <div className="row content-center">
            {workArray.map((item) => {
              return (
                <div className="col-work">
                  <img src={item.img} alt="" />
                </div>
              );
            })}
          </div>

          <div className="btn-sec">
            <a href="#" className="btn btn-default">
              All work in one bunddle
            </a>
          </div>
        </div>
      </section>
      <Testimonial />
    </>
  );
}

export default Work;
