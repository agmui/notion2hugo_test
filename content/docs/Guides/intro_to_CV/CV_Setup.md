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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMCJQVP%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDotgVvuu9BMlcaO9wTmbf9YDryHI%2FvAzVJeDceg9UwYQIgA1SKIgjW%2BCyuZOEG3G63U9YhNjRwEPBoCNk81RVwhFgq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDC%2FT9iKcCoTWrhK%2F8SrcAyznZQgoIJEnGpTtwzMQEGRVtSNbCyApqyss1wNgv2%2F002bc87uFJQ%2BPVJyt9kMFH%2FN1o82EqNrIdhVWLyOPnyeJcoOHkNvJDUjdLLnqQ9Fk2RDHnBo2F41%2F5erwSHH59z89cpeMieE5WjCjPUFv3mFgvz3dQU7g8I6DoPepdzd2oF2rHAltEYn9GLlkiCZCjLodgJkgMmQNmedtncPc8O3b7bIPD4Qwm9Y1mcPIDrdik1%2B8MJYN1K%2B1NPBtpvhqc%2FcatKsNBDGEI7K0G3QO24hFZ0SVdWkJjLt5sDKIlgEmJW0R56uHmzHsY2fDklkt9FA8z6gpqyGCaEJ85u9niZj1Wed33cXa9g3sU5pTEREKL39bbIdt9CFepjKWHw81gObSwxFaeGFGces%2B2a0R3Pn13FcJTeKr9aUzyIpgsILGEKmqPXiPvUVHRytUb2IIrdG7UVy%2B1Tdp1oJ6XbG4LNrY%2FPJPjTNu0XSgJ%2BaC50KHPOFGjS25xnUNla1qVQFhl2zNy8z93%2FMX73FMnjfjtbxoWdM1p%2BmhJ%2FzgRkRH%2FHEbp3AVIDvZxS2%2BAThjCTK%2FEeMt9tA8jIvFXtRdDHOld8jMtk%2Fc8JhG7S%2FwPOXiKCy8N1gm%2BAFBmZyfgqhDMKif%2Fr0GOqUBZDYN3qMOUCoL237YavJvt60Ke7p5WNNTXghhnzty8LHEMkvUWxb056YDL%2BXRLaS64WaT1CkWt47fRCZiLj5s99ZdtK86JALJDJWNvtx7hKeNXvUsiDCyjSBHWrA2maeVIM8DYlNsfLvD6%2B4r7KJ4KyxyCWttlrqKBguNUyO7ChJMk6WNuYqfgRZsBzzOreaiEeP9P5ASuY5VpAIoHePngyr3l2YG&X-Amz-Signature=3af7b2b5d5d392a0f8f55a60fb3fdb83620855716fc0a25867e4866fa6be18dc&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZLKRSHE%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBRann7s%2BaPYTC4fPd%2Fqqw9TbydWF0qz2Hd5GLtAFh%2BWAiEAyKaHVLsu%2FvEKi7MSQRINBWxrLfJ1IQQnGOVSowYSxQwq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDFm8l1GLMxxQFHwqgyrcA1U%2FhAHrt0yVKhoSsW9TjlTV66ADRHB1d9nnpyd7bp7Fny1VMsS9bLsKdXalQeAnFaK%2FRBST7lHIjcuSb3uJqfgXoVnAdV%2Br7oWnEyT8vUoYoad71CoLbajE8kL6MW%2BvuPa2KfsQWnU2UjnDXPmH2q6ePklERZQ6pEB%2BRh9QAPwHEj%2BVCLrkBXWOQNobQUmosTaUyvlbtAcdgC24fWK31kCH%2B58MuBORIF4LbtmQfjsGdfFH2zMO6n1UqV6Ok8wW%2BQqMRVn6kf%2BTqU7Ty8xLj41y2dTC0MFtEuZAKw3vfpom%2FQtgNQUOg%2FksIztPqNhn67stSedrutx2cM54a8CJOJ3FjI3PlWN9e8T8w4Qqn0nZXOtDG2lMTHWSv%2FFwuu4%2F7vUkRa6Zz3WHl2eInm6EsgG5qIdU%2FMX1HqMXKH4I5zja10C9%2FMx7YVfIKT0x%2Bx30D001Vqhft%2FtJkoxfARA6xo7kbTCAUsKMfXj0RbFZvTSaZGnVYbCqLbfskyRF79pK4nJ6tr2Odu9D3KFvD7qXHiTLMh7xZUKuqycilXQ9%2FrWVIJOb5mCbQ7mTC8bnTzZdlFXjnGVKMRRG%2BB3CxcrYGhVguJSA59cYCLFPBJ0z%2FO2stT6VHy8ECzt8BdzVMPSe%2Fr0GOqUBkZBDXt7Ydvltp4%2B%2BCWZyN9iI92bD2rCjMm2MGs8M4LbfLPMYx7X%2BTtrfRywip%2Fs4KBcV9NfbBnSj1AEVsH9DcUA66FelomBvgUzk8r%2F91AAjSufpo8emCroghFlTsv3Q7JS0pknh3iGASDsfXF6Z7NcbN4zWugBe9uaaa7EZnffppwZ6kCLbFIL1kkUtgDQOg%2BeOW6ZMS4er1W2e0%2BF3JLBTB%2Bga&X-Amz-Signature=985a4a3da951b73067e0a0ebc505ee7d3f0931792666849002a0f19ee2439fe1&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
