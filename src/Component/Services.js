import React from "react";
import Service1 from "../assets/images/service-01.jpg";
import Service2 from "../assets/images/service-02.jpg";
import Service3 from "../assets/images/service-03.jpg";
import Work from "../Component/Work";
function Services() {
  let arr = [
    {
      image: Service1,
      title: "Branding & identiy",
      des: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                accumsan, lacus et pretium venenatis, ex eros finibus risus, et
                rutrum justo augue a diam. Ut eros sem, lacinia quis ligula nec,
                imperdiet cursus ex.`,
    },
    {
      image: Service2,
      title: "Product Design",
      des: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                accumsan, lacus et pretium venenatis, ex eros finibus risus, et
                rutrum justo augue a diam. Ut eros sem, lacinia quis ligula nec,
                imperdiet cursus ex.`,
    },
    {
      image: Service3,
      title: "Web development",
      des: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                accumsan, lacus et pretium venenatis, ex eros finibus risus, et
                rutrum justo augue a diam. Ut eros sem, lacinia quis ligula nec,
                imperdiet cursus ex.`,
    },
  ];
  return (
    <>
      <section id="services">
        <div className="container">
          <div className="services-text">
            <h2>Our Services</h2>
          </div>

          <div className="row">
            {arr.map((item) => {
              return (
                <div className="col-4 text-center">
                  <div className="services-img">
                    <img src={item.image} alt="" />
                  </div>

                  <div className="services-title">
                    <h3>{item.title}</h3>
                  </div>

                  <div className="services-info">
                    <p>{item.des}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Work />
    </>
  );
}

export default Services;
