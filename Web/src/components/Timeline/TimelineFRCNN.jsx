import React from "react";
import "./TimelineNew.css";

const frcnnSteps = [
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
];

const TimelineFRCNN = ({ backboneRef, rpnRef, roiRef }) => {
  return (
    <div className="timeline-container">
      <ul>
        {frcnnSteps.map((step, index) => {
          let ref = null;

          if (step.title === "Backbone CNN") ref = backboneRef;
          if (step.title === "Region Proposal Network") ref = rpnRef;
          if (step.title === "Enhanced RoI Pooling") ref = roiRef;

          return (
            <li key={index} className="box" ref={ref}>
              <span></span>
              <div className="title">{step.title}</div>
              <div className="sub-title">{step.description}</div>
              <div className="info">
                <img src={step.img} alt={step.title} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TimelineFRCNN;
