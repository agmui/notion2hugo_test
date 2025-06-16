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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USM33N4O%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T081351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIChG2GmhvD9zfCWN9ZIEAwMogAF%2BeEIfpvW%2BK8vZMSJhAiEAi9y4y336F2jvbzV%2BfMkNHm6gDWt4ukVVnVH3ncqpZT0q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDDSty%2F9EBzMgLi%2Bk3yrcAwsNtOZPlb4VJCPuv%2FOkK98OmAkJJQHfS%2BdLr08RAPB6Nj5bjFyZTJURAm0u31AnvhY%2B2jua28uAY0ZrmPECqlnlj%2ByBZuXs%2B%2BYNYAmN%2F2RwGbV4an5G%2FJX%2FVSv5BVaKiON95w7L5qH2myB1BSpqgFxLFg05mOD%2FjYV0lcZI83iYPCGUGsVDMgKVeywweTUTGS5W8WTpojHKxojBM0hXg7FCSzBLyg246nR7fbliX5cl1eyi8jphrS5C%2BwhBeyiQEEynWjxOo4jJ6WJTbEaxfKqP%2BCftrIqPf1BHO3MTdRmWn7zJSFqYYXZBfSZ1qNkT1X9wlIS2rF63MgYGX6gko33GMp1GpY83h83eDVjUdpepH1y19njMHZY2nzKjFZES7xqAG3dQUglPSmTQnrlk4XjJanjsPwP4g5t%2BQbb3c0ucdIjk8LFFdwvlVSgG70%2F%2BJ9XkyHI25ZNCVcT3KtKSECYw6dVoz28rrD4S34bUSEkMNa0jeMSdOB1X4sptK5B8IQzVkqh2eXNjofoSSRxvEeR7faW%2BGyHW6kkOhmNX28XogGi9AK6MuQfjsdQ4XlPiuZQO50HPJ14T9b3A10IzZfOadDCenFc3JiVdVxOuRkzfsRZQShhvmd7c6oj%2FMK6Jv8IGOqUB7P12xzBeYNBYPIlPlmgnXuLVQEVEAnczN%2F0emJv00ra5lp%2FLo66DzX7tC0Cibae327PC%2Fr9YgIATcEOK1IBvor%2B77eMlnxO%2B79M%2BHnNUD%2FUNdsxXIY%2F93FZL4jo6VrfGTXKZSKCWEwCzWYyuNstHcPuj7d5iHT56SNQIc5RoQiSCqxCmvqMUeWwAeUHtaJfnupfSKgc854JAFnBEH0e0ZzvL6f%2FB&X-Amz-Signature=08f1351436ea1a1371c4c6da9d41a436d4b790b4758e2a23b23a4b899c1341c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXHANF66%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T081350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDQQdYyGXpyo0jA6gZFgSt9o7gYuM%2FGtzbp9Nhqef0%2BHgIgCTdRcM0odoUyK1tpMHEn9qmFvrYinJwgNjzaB96Ylfoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDJHRT6GTy8FqXPUl3ircAzBGc2YlysY%2FHY8tdNVIBeDfSn2wbSxafo63FZbr4HpG2cIdtHgEkIDnaxU%2FeoTXyl%2FYCzVZNEn2N5iGWTcZvWhZQvfWUlOaTqxSLrLCQqg9uyHI4ASx%2FoS9FitGe5pRPr2eZ8a4vXKVrZm5VwLp4chYdPMCoJb9cqwCCVh2mXNi2WWPZqycuH1mp03VgAcQGm2c4Z1p8aUwn%2BsDvOKGJcAATM%2Bk%2BzC%2BvsdkqnN6DsSbQuT%2FjfMJeRwnx1quRlT1xTQesrDDKm6JXuNKw8oK%2F%2FQzNXy0Su56Yqu45hH6o1JlrZ3faVKXLDKNJJoneqrAHihOVzIOposoNXqHpdrJmvVvsJroLhjM1nteJNWHFbwkYw%2FopSczMcfoP9ciEtiCxapeqdenzr3nnIt7Wc0H%2BcIAPHXBLLowpfk3WtqAidm9GWNHhnFN%2B9HMmtCT0EdKgqOv3%2F8jzEjwvbACttQcHfzrugvX4sb%2Fe49DGx9tqrE67UHjbYFs7MBVylqKJ0VWE8JCYFcPxzJN0Obd7nw%2BEM%2B9kePwcR7uzQ6dR25pgxEVLeQ52DDU4oz%2FpSxvHmi67uF%2B%2Bk7cen87B1D43GuULT6E3j9Erju6RdYIuvOM%2BnWATtU1%2F2pAHErNlvqsMMuIv8IGOqUBuVLsk8rkQ%2BjzrOt59g9OYborpQk2Cb%2F5feuLFsU3yYMi7Ejfdgc0geyR2R4DWh7gb6f3B7BUGi6dweczEv4gmKKJtM5wd19cVOz0SCttsFAPh22jZ0qWFOWtJF9rryD1OjF5eYFd7tGtJF8VEnhY3bm%2Fc3y2UOQFioWrR3CN8SWFAH2V%2Fn85I3yjlHSBBR%2Bex0rzPuMvhufrd1EbDH4ycnRFZiON&X-Amz-Signature=df34385eb79a196d429a7c7538ee59642875455c7fa7679fc4effcd2821c3b66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
