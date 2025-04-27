import React from "react";
import "./TimelineNew.css";

const yoloSteps = [
  {
    title: "Input Image",
    description: "Input image resized to 448×448.",
    img: "https://www.researchgate.net/publication/338383125/figure/fig2/AS:960089708048405@1605914632450/The-framework-of-SSD-SSD-consists-of-base-network-and-four-SSD-layers-conv8-2-conv9-2.png",
  },
  {
    title: "Initial Convolution",
    description: "7×7×64 convolution layer with stride 2 and 2×2 maxpooling.",
    img: "https://towardsdatascience.com/wp-content/uploads/2024/05/13bNZtJlIMKwyRRHR2tkndA.png",
  },
  {
    title: "Feature Extraction",
    description: "Multiple conv layers (1×1 and 3×3) with pooling.",
    img: "https://content.cld.iop.org/journals/0957-0233/35/10/105023/revision3/mstad633df6_hr.jpg",
  },
  {
    title: "Deeper Convolutional Layers",
    description: "Convolutions expanding to 1024 channels for richer features.",
    img: "https://www.researchgate.net/publication/369065735/figure/fig5/AS:11431281157583941@1683857386499/Deeper-convolutional-layers-for-better-restorated-feature-map.png",
  },
  {
    title: "Fully Connected Layers",
    description: "4096-neuron fully connected layer for detection predictions.",
    img: "https://miro.medium.com/v2/resize:fit:1400/1*yPdCqSkn4K_Rrmqpr4IT5w.png",
  },
  {
    title: "Detection Layer",
    description:
      "Final conv layer outputs class probabilities and bounding boxes.",
    img: "https://www.researchgate.net/publication/343459192/figure/fig2/AS:928889845063680@1598476005089/The-YOLO-fine-framework-including-residual-blocks-yellow-detection-layers-magenta.png",
  },
  {
    title: "Output Detections",
    description: "Final detections with bounding boxes and class labels.",
    img: "https://www.researchgate.net/publication/338383125/figure/fig2/AS:960089708048405@1605914632450/The-framework-of-SSD-SSD-consists-of-base-network-and-four-SSD-layers-conv8-2-conv9-2.png",
  },
];

const TimelineYOLO = ({ initialRef, featureRef, deeperRef }) => {
  return (
    <div className="timeline-container">
      <ul>
        {yoloSteps.map((step, index) => {
          let ref = null;

          if (step.title === "Initial Convolution") ref = initialRef;
          if (step.title === "Feature Extraction") ref = featureRef;
          if (step.title === "Deeper Convolutional Layers") ref = deeperRef;

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

export default TimelineYOLO;
