# AerialTect

<br/>

<p align="center">
  <img src="https://cdn.pixabay.com/photo/2022/09/18/07/41/logo-7462411_1280.png" width="20%" />
</p>

<p align="center">
  ML-Driven Aerial Object Detection in Earth Vision: To develop a highly accurate and reliable model for detecting ships in aerial images.
  <br />
  <br />
  <a href="#table-of-contents"><b>Explore the docs »</b></a>
  <br />
  <br />
  <a href="#architecture-and-design">Architecture</a>
  &nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#demonstration">Features</a>
  &nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#contributing">Local Setup</a>
  <br />
</p>

## 📌 Table of Contents

- [Overview](#overview)
- [Dataset](#dataset)
- [Models Implemented](#models-implemented)
- [Algorithms Used](#algorithms-used)
- [Model Architectures](#model-architectures)
- [Performance](#performance)
- [Results](#results)
- [Ensemble Method](#ensemble-method)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Contributors](#contributors)
- [License](#license)

---

## 📖 Overview

The objective of this project is to accurately detect and classify objects such as ships, harbours, planes, jets, and other surveillance-relevant entities in aerial and satellite imagery. Aerial object detection presents unique challenges, including small object sizes, high object density, diverse orientations, and complex backgrounds. To tackle these issues, the project explores and evaluates multiple object detection architectures and employs an ensemble strategy to enhance detection accuracy and robustness across varying scenarios.

---

## 🗂 Dataset

For this project, we utilized **DOTA 1.5** (Dataset for Object Detection in Aerial Images), a large-scale and richly annotated dataset tailored for aerial object detection tasks. DOTA provides high-resolution satellite and aerial imagery that closely mirrors real-world surveillance scenarios.

**Key Features:**
- **Total Images:** 1,418 training images and 412 testing images
- **Source Diversity:** Images captured from a variety of sensors and platforms
- **Annotation Format:** Oriented bounding boxes to accurately capture object orientation
- **Object Categories:** 15 real-world classes including ships, harbours, airplanes, helicopters, and other surveillance-critical objects.
- **Challenges Addressed:** Small object sizes, dense object distributions, cluttered backgrounds, and wide-ranging orientations

📚 More about DOTA: [https://captain-whu.github.io/DOTA/](https://captain-whu.github.io/DOTA/)

---

## 🧠 Models Implemented

To effectively detect objects such as ships, harbours, aircraft, and other surveillance targets in aerial imagery, we implemented three deep learning-based object detection models—SSD, YOLO, and Faster R-CNN—each trained and evaluated independently on the DOTA 1.5 dataset.

- **SSD (Single Shot Multibox Detector)**:
  SSD offers a balance between speed and accuracy through a single-stage detection framework that predicts bounding boxes and classes simultaneously. However, a major drawback of SSD is its relatively poor performance in detecting small objects, which are common in aerial imagery. Its fixed-scale anchor boxes and reliance on lower-resolution feature maps often result in missed detections or inaccurate localization. Due to these limitations, other models were explored to improve detection of fine-grained and densely packed targets.
  
- **YOLO (You Only Look Once)**
  YOLO is known for its exceptional speed and real-time processing capabilities. It treats detection as a regression problem and predicts bounding boxes and class probabilities directly from the entire image. However, YOLO also struggles with detecting small or overlapping objects, especially in cluttered scenes, due to its coarse grid-based prediction mechanism. Despite this, its fast inference time made it a valuable benchmark and a suitable candidate for scenarios requiring quick surveillance scans.
  
- **Faster R-CNN (FRCNN)**
  Faster R-CNN uses a two-stage detection process: a Region Proposal Network (RPN) to generate candidate object regions, followed by classification and bounding box refinement. This architecture achieves high accuracy and better localization, especially for small, overlapping, and rotated objects—making it highly suitable for aerial surveillance. The main drawback, however, is its higher computational cost and slower inference speed, which may not be ideal for real-time applications.

**Comparitive Insight**
While YOLO significantly outperformed the other models in terms of speed and efficiency, it lagged behind in detecting small and overlapping objects. On the other hand, Faster R-CNN, although slower, consistently delivered higher accuracy and better localization, especially in complex aerial scenes. This trade-off between speed and precision is a critical consideration when choosing the appropriate model for real-world aerial object detection tasks.

---

## 🧮 Algorithms Used

### 🔹 **SSD (Single Shot Multibox Detector)**  
SSD is a fast one-stage detector that predicts object classes and bounding boxes directly from multiple feature maps. It offers a good balance between speed and accuracy.

### 🔹 **YOLOv2 (You Only Look Once)**  
YOLOv2 performs real-time object detection by predicting bounding boxes and classes in a single pass, making it highly efficient for fast inference.

### 🔹 **Faster R-CNN**  
Faster R-CNN is a two-stage detector that uses a Region Proposal Network (RPN) to generate object candidates and then classifies them. It’s known for its high accuracy.

### 🔹 **Backbone Networks**  
- **ResNet-101**: Used in R-FCN and Faster R-CNN.
- **InceptionV2**: Used in SSD for better feature extraction.
- **GoogLeNet** (customized): Used in YOLOv2 for efficiency and detection accuracy.

---

## 🧱 Model Architectures

Visual representations of the object detection model architectures used in this project:

### 🔹 SSD (Single Shot Multibox Detector)
![image](https://github.com/user-attachments/assets/3c2d26d8-8d90-46c4-9db5-86fcca2e0576)

### 🔹 YOLO (You Only Look Once)
![image](https://github.com/user-attachments/assets/c2d26006-e985-4457-8273-1231bc4d7889)

### 🔹 Faster R-CNN
![image](https://github.com/user-attachments/assets/fe997f89-3330-4680-a1c3-54db556617a9)

---

## 📊 Performance

| Model            | mAP  | Recall (%) |
|------------------|------|-------------|
| SSD              | 26   | 47.61       |
| YOLO             | 34   | 31.51       |
| Faster R-CNN     | 51   | 57.32       |
| **Ensemble (WBF)** | **57** | **63.41**   |

---

## Results

### 🔹 SSD (Single Shot Multibox Detector)
![image](https://github.com/user-attachments/assets/df102505-5426-425b-9a8e-d66d76fc105a)

### 🔹 YOLO (You Only Look Once)
![image](https://github.com/user-attachments/assets/afaaa0e3-8cc8-4357-a595-d7462d64511a)

### 🔹 Faster R-CNN
![image](https://github.com/user-attachments/assets/26c2f63b-e5a9-40bc-a354-465f16e0d71d)
 
---

## 🔀 Ensemble Method

To improve detection performance, we combined the outputs of multiple object detection models using **Weighted Boxes Fusion (WBF)**.

### ✅ Why Ensemble?

Each model has its strengths:
- **SSD** is fast but may miss small objects.
- **YOLO** is balanced for speed and accuracy.
- **Faster R-CNN** is highly accurate but slower.

By merging predictions from all three, we maximize both precision and recall.

### 🔧 Technique Used: **Weighted Boxes Fusion (WBF)**

WBF takes overlapping predictions from different models and produces a more accurate bounding box based on confidence scores and spatial alignment.

### 📈 Ensemble Workflow

The following diagram illustrates how we ensemble the predictions from SSD, YOLO, and FRCNN to generate the final result:

![image](https://github.com/user-attachments/assets/389a40f8-49fd-4225-bbde-68f118864765)

---

## ⚙️ Installation

```bash
git clone https://github.com/Hamzawp/AerialTect.git
pip install -r requirements.txt
```

---

## Project Structure

The project consists of the following files:

- `SSD_Implementation.ipynb`: Implementation of the SSD model.
- `Yolo_Implementation.ipynb`: Implementation of the YOLO model.
- `FRCNN_Implementation.ipynb`: Implementation of the Faster R-CNN model.
- `Ensemble_Implementation.ipynb`: Combining predictions from multiple models using ensemble methods.
- `Testing.ipynb`: For testing and evaluating the models.
- `Playground.ipynb`: To have a fun and experience on models.

---

## Authors

- Hamza Sayyed
    - [LinkedIn](https://shorturl.at/hjAEI)
- Om Shete
    - [LinkedIn](https://www.linkedin.com/in/om-shete-25748522a/)
- Mohib Abbas Sayed
- Parth Puranik

---

## License 📜

[GNU License](https://github.com/Hamzawp/SSRS-Ship_Safety_and_Routeing_System/blob/master/LICENSE.txt)
