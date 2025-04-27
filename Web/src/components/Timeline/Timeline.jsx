import React, { useRef } from "react";
import "./Timeline.css";
import output from "../../assets/output.png";
import ImageUpload from "../ImageUpload/ImageUpload";

const Timeline = () => {
  const stepRefs = useRef([]);

  const scrollThroughSteps = () => {
    stepRefs.current.forEach((step, index) => {
      setTimeout(() => {
        step?.scrollIntoView({ behavior: "smooth" });
      }, index * 2000);
    });
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="section-timeline-heading">
          <div className="container">
            <div className="padding-vertical-xlarge">
              <div className="timeline-main_heading-wrapper">
                <div className="margin-bottom-medium">
                  <h2>
                    AerialTect <br />
                    Aerial Detection using Deep Learning
                  </h2>
                </div>
                <p className="paragraph-large">Precision from above!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section-timeline">
          <div className="container">
            <div className="timeline_component">
              <div className="timeline_progress">
                <div className="timeline_progress-bar"></div>
              </div>

              {/* Step 1: Image Upload */}
              <div
                className="timeline_item"
                ref={(el) => (stepRefs.current[0] = el)}
              >
                <div className="timeline_left">
                  <div className="timeline_date-text">Upload Image</div>
                </div>
                <div className="timeline_centre">
                  <div className="timeline_circle"></div>
                </div>
                <div className="timeline_right">
                  <div className="margin-bottom-xlarge">
                    <div className="timeline_text">
                      Upload the aerial image for processing
                    </div>
                  </div>
                  <div className="timeline_image-wrapper">
                    <ImageUpload onUploadSuccess={scrollThroughSteps} />
                  </div>
                </div>
              </div>

              {/* Other Steps */}
              {[
                {
                  title: "Backbone CNN",
                  description: "CNN extracts essential features.",
                  img: "https://miro.medium.com/v2/resize:fit:1400/1*-xPK2X22QAU7ssU8ErD0pw.jpeg",
                },
                {
                  title: "HOG Feature Pyramid",
                  description: "Enhances feature extraction.",
                  img: "https://miro.medium.com/v2/resize:fit:1400/1*CRRtxq5hz8BfeMqMnRmmig.png",
                },
                {
                  title: "Feature Map",
                  description: "Transforms image into a feature map.",
                  img: "https://miro.medium.com/v2/resize:fit:797/1*slzHFjXRkTVtFhRipPl8vw.png",
                },
                {
                  title: "Region Proposal Network",
                  description: "Generates candidate object regions.",
                  img: "https://miro.medium.com/v2/resize:fit:750/1*JDQw0RwmnIKeRABw3ZDI7Q.png",
                },
                {
                  title: "Sliding Feature Map",
                  description: "Scans object regions.",
                  img: "https://miro.medium.com/v2/resize:fit:1400/1*L4T6IXRalWoseBncjRr4wQ@2x.gif",
                },
                {
                  title: "Multiscale R-RPN",
                  description: "Refines proposed regions.",
                  img: "https://onlinelibrary.wiley.com/cms/asset/3c6a6182-fe96-4180-804b-138be16044a0/cplx5555121-fig-0005-m.jpg",
                },
                {
                  title: "Enhanced RoI Pooling",
                  description: "Extracts feature representations.",
                  img: "https://www.oreilly.com/api/v2/epubs/9781789130331/files/assets/fd24096b-b00d-449f-8124-137e82e2a96f.png",
                },
                {
                  title: "Fully Connected Layer",
                  description: "Classifies objects and refines bounding boxes.",
                  img: "https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/3_fully-connected-layer_0.jpg",
                },
                {
                  title: "Detected Objects as Output",
                  description: "Final detected objects with bounding boxes.",
                  img: output,
                },
              ].map((step, index) => (
                <div
                  className="timeline_item"
                  key={index + 1}
                  ref={(el) => (stepRefs.current[index + 1] = el)}
                >
                  <div className="timeline_left">
                    <div className="timeline_date-text">{step.title}</div>
                  </div>
                  <div className="timeline_centre">
                    <div className="timeline_circle"></div>
                  </div>
                  <div className="timeline_right">
                    <div className="margin-bottom-medium">
                      <div className="timeline_text">{step.description}</div>
                    </div>
                    <div className="timeline_image-wrapper">
                      <img
                        src={step.img}
                        loading="lazy"
                        width="480"
                        alt={step.title}
                      />
                    </div>
                  </div>
                </div>
              ))}

              <div className="overlay-fade-top"></div>
              <div className="overlay-fade-bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
