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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DIJQMAN%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC8pMaHffy%2F%2Fn8eJ0%2BnPeibewUXFMKnvshuTxOR2ldJqQIgCBXGtyTqXBXXISL1LlxPe%2B4tiUrLNwPFSU3DRH%2FH07oq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDIV%2FrSFh1u6FMW0siCrcAwuaiSDo%2BL8UE9aIjB%2F8t5OJ0OR5GOpb3DOdzZIbJXuDnXYmEA4bibSf7ET1XehP%2FyVeoSp7bQa5gaijWNlW%2FueX%2BUyxEpZmcFgNgltU3TziAG1aeHwolARlFnpe%2FkKO30gKlM08ph084iiuDP%2B1%2Flx21DQDFY3DmwmlnLqQmNikU8lMKp0k3OItxBEZEi%2FaqScYkY7wsJ9Rx4uE6%2FtRBk2CxSM3VjsxIdgbBL4zZVTPYx3wjm%2Fxx5HQi1GuRaNic1kWTBmLsnbQ3cC5SxotgnUsFmj5sKfIUWq5ivb4zQI7Vp3MxzOyEXoK7MBYp9qbJa2r6ArdiajNYTf7YeTXrRvhfpOIoLd31AXkHtsqEKn%2B99lMDhgKKjks5l6M5JFAtP%2F%2BA1An0iXDaC%2BiJCV%2BeoVR7HkV5iPQ0puCcy7qH5L0yrg6R5%2F7xvyXzOJuMT0WYVB88SUi3%2BBzPFLI6P2BxO3S0RrpicWchlZtQREtyPVBQ5DXlLVE9hS84tVWFKY639Xwj3qHAam9ULOj%2FxZbNiQTeaYB2seeYmZKhEPfSNsnZf16QrSzMeV9X6H90WO09QDmi2Cf3pJC8lcbQJNkjCD%2FksiNsvx1ZdlSGyxI86uX7gl455MsOsdrV%2BzyMIr198IGOqUB35asaYa5bpuMS%2FdOKLof1q7jvsp4OH2VM1pDI%2BR%2FiwS4uSw4obiJImfuyB9mIUruKuyc2mIEyxK9hbyAUm22wAUWbSeVlNyKVrlvGNv6z%2F8PzGOPAom97NBSo%2BtHBSYPRuo4PSa8Ddj9Dx5joMFemObzXEZFtII0TuCsZHuIITRP%2FYnVShnqllvG7PY7ZJT1iGqeTEO7YtnQyeLk46DTIxQCVO0m&X-Amz-Signature=78d6ada7d7d14efb13d704c85bde2932f65dd82c8f9f6c702cc5c6bdfdc45bce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFD7UMSX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCFtA7pmsabisIlAz7QJBi2PdVDRd%2B7Sf7XqgzfoJojCQIhANhwRMGtom3nt0shzgSU5cHSW5nOChY4s0Zn5KNPh7qjKv8DCGsQABoMNjM3NDIzMTgzODA1Igy%2FjvJZOSAVfmiFGE0q3ANeWEsIDNH9ahxo19ooesRfNIgBby5FQbGK9OjgBgCLgNOzwbfevUFeQHRT780Inbj5NW2UbOLcR%2B6S9YE9QplUpuSsOTYToDF9CKsvW40jZv9krf%2FTU9Brzb7q6fHbFEMwG5uOtsFoJXjc2zeHfJNbVJZqRa1B4wZ9IcTKCub20O1lS1F9WilcnQKhTGDdbq1NWLsyqRUMeUZ7KGcKvCLc%2FV2XblKG7k99FpRDkacEFK3aWJbSBx42yn9dEMsaBceYxckEK0V5ywz73S6avMg4pifybran0bDDa%2BFPUyFBvNIQX3Td3ttpYEuqYaPrhGi1i61GHQ3dQ0WqdZnopO%2BZPrUPsgNdZvkBdpMd7ti%2FLFB9Uz%2By6kNURvBheFSp15E79rdhhEEisaA622hj0nnzncZtjl0gL5UjceeU0Nzo6t9EIhSQ5QEwMPgTl7dK4tQXqvG3vxnrk%2BN2tlExzEgXZj%2BILY0%2BPmuxy6Sb%2BE6jLSGGyIXR%2BE4tdnRAUfOEalrjCRjCuFUuIlvE8yKEgIDBjDmMVBrfulD9W2qtN0cg8oU40zoIMfcUz1aqBv22yL%2FjuBdInx74LE4LiA51E%2FUeAXCcMbPNCdJ6FbYm9UhWIp34BBe3oJzhKmLbgjCZ9ffCBjqkATfFnAUUhhWIy2ekLtCqciRzm0WqFmaKoOkv4qlxKApRLE9WuvG5airYEvbo5pk20r%2BjKaByCLBJ8kzNF7T5nCn4uREWSflsMeYoCxU4TD3nTdTZoma6sgeklcFXBYrL6OThWWIb5UPLtjXgd%2BLaYVoIlaWkeIm12nDflL1mkByqQaRx%2BPyXOj8XtnLyAEdRCM7guvQ%2FyWlIVRfcHMPYYKNG24BG&X-Amz-Signature=8be2eaffb73f7c4498b843ae9c250ed4634b23e6a5138786cd90e7a8bdf2968f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
