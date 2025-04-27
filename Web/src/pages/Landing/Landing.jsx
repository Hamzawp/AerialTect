import { useRef } from "react";
import "./Landing.css";
import TimelineSSD from "../../components/Timeline/TimelineSSD";
import TimelineYOLO from "../../components/Timeline/TimelineYOLO";
import TimelineFRCNN from "../../components/Timeline/TimelineFRCNN";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import output from "../../assets/output.png";

const Landing = () => {
  const uploadInputRef = useRef(null);
  const ssdInitialRef = useRef(null);
  const ssdIntermediateRef = useRef(null);
  const ssdFinalRef = useRef(null);

  const yoloInitialRef = useRef(null);
  const yoloFeatureRef = useRef(null);

  const frcnnBackboneRef = useRef(null);
  const frcnnFeaturePyramidRef = useRef(null);

  const ensembleRef = useRef(null);

  const handleUploadSuccess = () => {
    console.log("Image uploaded successfully!");
    startSmoothScrolling();
  };

  const startSmoothScrolling = () => {
    const scrollSpeed = 2000; // 2 seconds between steps

    setTimeout(() => {
      ssdInitialRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 1 * scrollSpeed);

    setTimeout(() => {
      ssdIntermediateRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 2 * scrollSpeed);

    setTimeout(() => {
      ssdFinalRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 3 * scrollSpeed);

    setTimeout(() => {
      yoloInitialRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 4 * scrollSpeed);

    setTimeout(() => {
      yoloFeatureRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 5 * scrollSpeed);

    setTimeout(() => {
      frcnnBackboneRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 6 * scrollSpeed);

    setTimeout(() => {
      frcnnFeaturePyramidRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 7 * scrollSpeed);

    setTimeout(() => {
      ensembleRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 8 * scrollSpeed);
  };
  return (
    <div className="landing_main_container">
      <div className="section-timeline-heading">
        <div className="container">
          <div className="padding-vertical-xlarge">
            <div className="timeline-main_heading-wrapper">
              <div className="margin-bottom-medium">
                <h2>AerialTect</h2>
                <h4>Aerial Detection using Deep Learning</h4>
              </div>
              <p className="paragraph-large">
                Aerial Object Detection in Earth Vision: An accurate and
                reliable model for monitoring harbour ports and airbases using
                satellite.
              </p>
            </div>

            <div className="UploadImgContainer">
              <h2>Upload Image</h2>
              <p>Upload the aerial image for processing</p>
              <ImageUpload onUploadSuccess={handleUploadSuccess} />
            </div>

            <div className="divider-arrows">
              <div className="arrow-left">SSD</div>
              <div className="arrow-middle">YOLO</div>
              <div className="arrow-right">FRCNN</div>
            </div>
          </div>
        </div>
      </div>

      <div className="landing_container">
        <div className="timeline-section">
          <TimelineSSD
            className="timeline_landing_container"
            initialRef={ssdInitialRef}
            intermediateRef={ssdIntermediateRef}
            finalRef={ssdFinalRef}
          />
        </div>

        <div className="timeline-section">
          <TimelineYOLO
            className="timeline_landing_container"
            initialRef={yoloInitialRef}
            featureRef={yoloFeatureRef}
          />
        </div>

        <div className="timeline-section">
          <TimelineFRCNN
            className="timeline_landing_container"
            backboneRef={frcnnBackboneRef}
            pyramidRef={frcnnFeaturePyramidRef}
          />
        </div>
      </div>

      <div className="ensemble-section" ref={ensembleRef}>
        <h2 className="ensemble-heading">Ensembled Output</h2>

        <div className="ensemble-arrows-container">
          {/* <div className="ensemble-arrow">SSD</div>
          <div className="ensemble-arrow">YOLO</div>
          <div className="ensemble-arrow">FRCNN</div> */}
        </div>

        <div className="ensemble-image">
          <img src={output} alt="Ensembled Output" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
