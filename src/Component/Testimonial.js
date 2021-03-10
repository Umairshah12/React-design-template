import React from "react";
import image1 from "../assets/images/customer1.jpg";
import image2 from "../assets/images/customer2.jpg";
import image3 from "../assets/images/customer3.jpg";

function Testimonial() {
  let testimonialArray = [
    {
      img: image1,
      descriptoin: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                accumsan, lacus et pretium venenatis, ex eros finibus risus, et
                rutrum justo augue a diam. Ut eros sem, lacinia quis ligula nec,
                imperdiet cursus ex`,
      title: "Aleza",
    },
    {
      img: image2,
      descriptoin: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                accumsan, lacus et pretium venenatis, ex eros finibus risus, et
                rutrum justo augue a diam. Ut eros sem, lacinia quis ligula nec,
                imperdiet cursus ex`,
      title: "Alexndra",
    },

    {
      img: image3,
      descriptoin: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                accumsan, lacus et pretium venenatis, ex eros finibus risus, et
                rutrum justo augue a diam. Ut eros sem, lacinia quis ligula nec,
                imperdiet cursus ex`,
      title: "Smit",
    },
  ];
  return (
    <section id="testimonial">
      <div className="container">
        <div className="testemoial-title">
          <h2>Testemonial </h2>
        </div>

        <div className="row">
          {testimonialArray.map((item) => {
            return (
              <div className="col-4 textcenter">
                <div className="comment-desc">
                  <p>{item.descriptoin}</p>
                </div>

                <div className="comment-title">
                  <h3>{item.title}</h3>
                </div>

                <div className="comment-img">
                  <img src={item.img} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
