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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHRTIET3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCRyRyOtnkl3glG26SiZWM6uNVveXAJthIzUuPoiiFrvgIhAKCEbT2Z18aqe9AhvNfkZlkY%2FJ%2Bj2s77wXw8zvCKd8n4Kv8DCHIQABoMNjM3NDIzMTgzODA1IgwDtBVvQEhgZ0LpHDYq3AMClZmQhkwDwS23%2B1Wx7A4S184m7eGX69HYOrJeGI41fFep7Ywwo5pKDPKxAn2MhuPLdOF%2Be6SAC9JkzMNp2FcIVkmh9Z1UYud4L6qJEwK26kyYQHTC%2B65X8JHgsCBqI2khDxtrAzFNRSHYj0Gi%2Bmbveot28Q0aNwpfwRIuV0nISrDl%2F2esd4Xmrq39S49i0caSm6P8PgPWAMrL1boJyuFsZgN1Xd2sxcmkBjD4Y4x3zhwVSM6bGhK7CTI1Q8x6IS2mZh9dM8TANDcQKbHzsMUQBGJzluKq4nzZMA9XtBOf%2BOJ%2BeLBDy61vK4weUYBNHYJC5S2i9m5B5YkLw%2BGtkCJmrBolsEbwvxttuLHEA2OzBIPpYsG8tQbjl8LS%2Fefga5VD%2BCte6%2BPkpIymxq%2FaT7pI143mPQxa7I4t1jE9hgILr7b7d4C2n87QK5dXJ8%2FrBIH47H8T%2Bv%2FUcMf9TMBZoVqg5plyK0MMuc8LSgMFBzXPlI0EKc8wKfxOCbDwhKGJNGcIK78adTk4T4ZcUN60aSTOb3QY%2FFDrSaX%2FwwzDXy8eBMUaZHzOjJybhbvP9C%2B6xI%2B94UfMb9tXV2UNqbnAnuh4gU9rL4z84wCmRrMduLvsHiSQVjHvodErf%2Bc4ZTDM3pfEBjqkAeCLXtfbQVendHy%2BjQhZ%2BIEEJy5WQX1IZoHkQ9jE8p8kHzN1CskHBsQX%2BSO9hjQCCPhrEN1I7bJTZg7DTprHeOdT5nWtXCb5qNjE%2Fclz9PNeKAmkgWv75NPIMwaqo7m5zFOvjHFNBiDwTzBJXOU78pfA%2FTiv6cHBL9cOIToV40dqZ8KmfzgtWoxvinUgUcSPGjSNFIf4sqfV12aivoEPhiy5RWXZ&X-Amz-Signature=2658391bcd576db8539098e0a0c77fa1e637e548d9cdada17cb7bf1d8f5c6192&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOUUGKS7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCeur08aszrNdDmVq6vbzeDttyHrlVNsbhFTY0lSBaYOQIgRGBEUJN6h6UEeDFXZOjxDH%2FaeUM1Ts%2BBze8yb3odbEAq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDL739sp1sPEN3rK%2FsSrcAyfmu8UrWii3h46tFGX4FUwP4VPMUwm%2BkL1WQKpCNk7jd9hR2YrRK1142Armlar0Y6yIbkR%2Bgmv9Cb2vQPguyapt0HZQ%2BSCy1ehOPlnkq4POJJ4nCrliHOmDm6C9KRNqX2iYadABnSDM3S2kgrF%2FDpzq8gIsLSGPwOwsW01VQbQz8NAFr7XbBCzAeIRnwysqW7Ma4Uq%2BqWPQHc1bm13QTHeIHQ8hkoP%2FEFBt4asHrTVHy4JB4eEPXVq5QWibbhpGEMWbvONyYvXeu3SBo4Xn0mtuQHoOjlNd%2BA3L5hHfe4vFvV2s6rQCQH7vnAirWFqnZZ9nKE%2BO99Ssqyq9t3mQeUBWpy6luVbqE9KHjEBeAeZDs1UriH%2Fc0WKF8oLVv2Zbbmbj%2BokXi0i6BDB6Ekp3CrLHtuTSTp8tZ4F8Y4JS1xvErQay9Mi0tkn%2Fdt0UgAOLJss2oBSIe6fitUTvaHyxzvFT2%2F3bwSvUI7hAcPuN%2B3pRwX%2F4bl5yE9wE37%2BWwfKYLE98iM%2FR3P%2BYCxi2n206DX0nUndrhGLi6%2FlkH1VC1BIiZnbY%2Fuv9A6QkASXmZKoNh5Rf7a4iAUJBLFaRv9xjAU5AScFHeOBzP2jNx48SWUE9fxc7cGFmm2ItKB53MMHdl8QGOqUB06cmGKTQc3gU%2B1WOH96WTZZbY4AoC4MQsbEt4%2BdI9B9CyFd3GLrxmO4iZ%2BNPBnniZ5v2FFNetmO%2B03zbEndKzblCumbCYX7sAZhieybewLpMZLa5l40%2FfMCZJO3cdWFEqhD0HkoXrtb2us%2FUh63E3LXmihKP2dLIrnoB9aVO%2FufoCh%2BskYKmMTArpkXyITQPerNlND3YTBvA6tQXOQ%2BW4lc6HE3V&X-Amz-Signature=39ddbd08ba64b7b5743262e8fd37576dd59d94ac9f417b82b99b6cce8c9eea94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
