---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2024-11-03T22:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2024-11-03T22:06:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 161
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

[embed](https://www.rose-hulman.edu/class/csse/csse132/2425a/labs/prelab1-wsl2.html)

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXIT33AZ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCszuKA0OYUobKZbGESZstdIojbz9hGIPb294%2BmJf3Q1wIgf4%2BjJ0kOilkZ60w2E4H468u6uokyva0kqaPe00euM4cqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDoVJ1MkBfyNR1NfmircA4QWZpxehZfiGgbFwj5ENXJzIjGTtCT1G8zqMMUaB0Uk63QwpRBBxgeKnRbZTtL5jtafwWvr7463Xaw%2BE0j8jidPEJ2vccef8JpDPkz4ctwebOgCcqX6110g5zUtfhYZ4DXZLaDVDzEMtjj38rpd%2Bq3GqjELHUVtTOiTPWrjHRjsEt0dbJXsdX%2BN4IG94EW76yv9X%2F3Pjcj5RYW310fJlGcEwFKE7WSQlirHPSYTtm2ZH9gAaJ5Mca9%2Ft8b%2Bqlx%2BW%2FoO5mRgPY4oXna81ZawwATSgnphakX4t8aU45o0NKtcSoCle7CLUIU6QU%2BQtG4AtFf1lmlvYXeflV7mijD1UzdOEQ1A%2B14mRtqDDvztSOP28CTcGb%2F3dxS%2B3NF6MR2HMk1NNXgr3lbfr%2F6osBAs4ZuNFKpBAn%2F70RF38Vzxmuy6gb%2Fidu747GEyK67W3RfEH2EAWo0NX2AjJ0nhRLG057twaaMA6qAC2b3AxcBzkac9bOPG%2BIj19TxIPLgKCenTPCuM%2F1lQMk7MyMAZ0wEloN4N%2FRO7h55GANQ9mdVdubwuNOUYnqH1A6wpxNygxXNDP0hgARBHJhjmJhgicvURmYk62SFk%2BknaC5smD%2FQQ3Esx7qjV6bCU5MLaFduxMJ%2BKgMMGOqUBgXozTxB5NfNf7DFGTsKD8U%2FbWi2wn%2BU6VNNCVZQAyErU4zwZ1CpQb2OMhO48I9kgOSD7CEYfskvzXsRTQu3SCUDY04wiVReYJmW4gPtvsNuTseUGD46tXV7tONPyBdcXAvWzH2L%2FO36IKf4tJrhcaMg645yoiBmJz7aplQzZCDws%2FSLxDAavxAatt%2B101GLAxVDq%2FdG6110OyudDH6qEUdRac4ny&X-Amz-Signature=09117cecbd640e81f5a03818be7f0d458330b437f3f361c6e1a52fc1df4a5e4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- Get people
- 

# Cloning the repo

[link_preview](https://github.com/Thornbots/CV/)

```bash
git clone https://github.com/Thornbots/CV.git
```

## install python

```bash
sudo apt install python3.10
```

## installing `requirements.txt` packages

```bash
cd CV
python3 -m venv .venv
pip install -r requirements.txt
source ./.venv/bin/activate
```

### Open the repository in VSCode

```bash
code .
```

## dataset labeling  

**TODO:**

# Running model

**TODO:**

# Congrats! You did it!

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH7THGIJ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAHVEqeWiuR54CbOmEigW91T13%2FB%2FI3wk%2FkdHybLFKNQIhAMtv7HY%2F2cKNDww4gBCNrv5Jnq0LJr5JgXUasHoX8tuhKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igys2IT0Y%2FP9un%2FbRn0q3ANEXdYy68aZSIMTPz2GzZy9D%2FCxg12sxaodWi9oOi8JtSE5YoOJWjJ9hKl6m8Gdq4uoNbdayo7sGKW6wQxDGB88kmTLxt3AKgBUYE%2FGHfL7spFbw0mthC%2F4uvX113VsiJTNbPNBmVcyCqBBL22a4sfKArAhag2kmtoz3Tfxlu9sQ6wjcTEjO3CRIiHkeKKBsMHD7hv7NzcyG%2Fu8EihcpHj8pKdxunIakjk5UfwXY9ZNXTBH4d6EzcfA4vurca653zguOBTMO%2B%2BrzUnkYWrf2raUd5nkaTAGMQIAxpG1DnDxxsZkPAKDRO7y6mvWSE7SCR9Sa4jwwSuxh7%2F5GbMrlUq40P1xsdEZNRet7yD9368ijN3jC0N4FaUQyxgFN4Rq%2F83Qppr6adN3L1FF%2BQSF6AP%2BbddXETKPwbJ4IZ8pkAimrmPNJWbd3Oj55HZu4nkSw1LXkUk%2FifUqtqTF%2BFsAtXrSQxuvpbIwOhL6B4hUMnISXwh%2FCgAA3fcw4l5mV3wC9rHss8kpm908wCo0cn5n5QeiWBKcWtJEMNt2hgjefCb7ZOGe7swBE%2BYDUfA0nclSb%2BlpJWV%2Fh3e%2FCxxjE3nEDY7EN%2Fo0l44SYcmf8HgyQjwDSep1q9EblepG3phKvzCoioDDBjqkAdQOMu%2Fz1GYrzGr8tosjYpHPWIglGEecw2x0jdy3%2BGk6N9AXKahiyaHSgdNqowai74y1O67RrpW60FGke7OlDivoTjaIBErAMZWMHFwZKNs%2B4CAuKOKZFd1pX%2FM90tFMqEcmTdPNERdES49Dz3MhsCED0Q7ThVnp29%2F%2BVTyO1TwfPHxecV3seSZ6M3ccCGVo8StrUnhR4XFkG6VNAtDlyejoupNV&X-Amz-Signature=5ba4579d0426e7eadc82667fc5221a90793a0509f53f26958f92a7ce7c5e33a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
