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

Detecting objects in aerial images is a challenging task due to factors like small object size, cluttered backgrounds, and varying orientations. In this project, we address these challenges using multiple object detection architectures and an ensemble strategy.

---

## 🗂 Dataset

We used the **DOTA (Dataset for Object Detection in Aerial Images)** — a large-scale dataset specifically designed for aerial object detection.

**Key Features:**
- High-resolution images collected from various sensors
- 15 object categories (e.g., vehicles, ships, planes)
- Oriented bounding box annotations
- Real-world aerial surveillance scenarios

📚 More about DOTA: [https://captain-whu.github.io/DOTA/](https://captain-whu.github.io/DOTA/)

---

## 🧠 Models Implemented

The following deep learning-based object detection models were implemented:

- **SSD (Single Shot Multibox Detector)**
- **YOLO (You Only Look Once)**
- **Faster R-CNN (FRCNN)**

Each model was trained and evaluated independently on the DOTA dataset.

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
