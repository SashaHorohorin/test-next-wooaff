import React from "react";

const feature_content = [
  {
    id: 1,
    icon: "fi fi-rr-paper-plane",
    title: "Online Courses",
    des: "Offering Interactive Access to World-Class Learning Materials, Serving as Catalysts for Positive Transformation.",
  },
  {
    id: 2,
    icon: "fi fi-rr-user",
    title: "Experienced Instructor",
    des: "Deliver Interactive Access to World-Class Resources, Empowering Transformational Change.",
  },

  {
    id: 3,
    icon: "fi fi-rr-document",
    title: "Earn a Certificate",
    des: "Offer Interactive Access to World-Class Materials as a Unique Catalyst for Advancing Your Credentials.",
  },
  {
    id: 4,
    icon: "fi fi-rr-calendar",
    title: "Lifetime Access",
    des: "Experience Interactive Access to World-Class Resources as a Unique Driver of Ongoing Progress.",
  },
];



const FeatureArea = () => {
  return (
    <>
      <section
        className="tp-feature-area grey-bg pt-115 pb-90 pl-205 pr-205 bg-bottom"
        style={{ backgroundImage: `url(/assets/img/bg/shape-bg-1.png)` }}
      >
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="section-title mb-60">
                <span className="tp-sub-title mb-20">Our Offerings</span>
                <h2 className="tp-section-title">For Your Future Education</h2>
              </div>
            </div>
          </div>
          <div className="tp-feature-cn">
            <div className="row">
              {feature_content.map((item) => (
                <div key={item.id} className="col-xl-3 col-lg-6 col-md-6">
                  <div
                    className="tpfea mb-30 wow fadeInUp"
                    data-wow-duration=".8s"
                    data-wow-delay=".6s"
                  >
                    <div className="tpfea__icon mb-25">
                      <i className={item.icon}></i>
                    </div>
                    <div className="tpfea__text">
                      <h5 className="tpfea__title mb-20">{item.title}</h5>
                      <p>
                        {item.des}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureArea;
