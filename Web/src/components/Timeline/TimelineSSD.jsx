import React from "react";
import "./TimelineNew.css";

const ssdSteps = [
  {
    title: "Input Image",
    description: "Original input image.",
    img: "https://www.researchgate.net/publication/338383125/figure/fig2/AS:960089708048405@1605914632450/The-framework-of-SSD-SSD-consists-of-base-network-and-four-SSD-layers-conv8-2-conv9-2.png",
  },
  {
    title: "Initial Conv Layers",
    description: "Feature extraction using conv1, pool1, conv2_x.",
    img: "https://miro.medium.com/v2/resize:fit:1400/1*aex5im2aYcsk4RVKUD4zeg.jpeg",
  },
  {
    title: "Intermediate Conv Layers",
    description: "Further extraction using conv3_x and conv4_x.",
    img: "https://miro.medium.com/v2/resize:fit:1400/1*aex5im2aYcsk4RVKUD4zeg.jpeg",
  },
  {
    title: "Final Base Conv Layer",
    description: "High-level features extracted at conv5_x.",
    img: "https://miro.medium.com/v2/resize:fit:1400/1*aex5im2aYcsk4RVKUD4zeg.jpeg",
  },
  {
    title: "SSD Extra Feature Layers",
    description: "Additional convolution layers for multi-scale feature maps.",
    img: "https://www.researchgate.net/publication/338383125/figure/fig2/AS:960089708048405@1605914632450/The-framework-of-SSD-SSD-consists-of-base-network-and-four-SSD-layers-conv8-2-conv9-2.png",
  },
  {
    title: "Prediction Layers",
    description: "Convolution layers predict bounding boxes and classes.",
    img: "https://www.researchgate.net/publication/338383125/figure/fig2/AS:960089708048405@1605914632450/The-framework-of-SSD-SSD-consists-of-base-network-and-four-SSD-layers-conv8-2-conv9-2.png",
  },
  {
    title: "Output Detections",
    description: "Final detections with bounding boxes and class labels.",
    img: "https://www.researchgate.net/publication/338383125/figure/fig2/AS:960089708048405@1605914632450/The-framework-of-SSD-SSD-consists-of-base-network-and-four-SSD-layers-conv8-2-conv9-2.png",
  },
];

const TimelineSSD = ({ initialRef, intermediateRef, finalRef }) => {
  return (
    <div className="timeline-container">
      <ul>
        {ssdSteps.map((step, index) => {
          let ref = null;

          if (step.title === "Initial Conv Layers") ref = initialRef;
          if (step.title === "Intermediate Conv Layers") ref = intermediateRef;
          if (step.title === "Final Base Conv Layer") ref = finalRef;

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

export default TimelineSSD;
