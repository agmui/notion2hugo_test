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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU2XIM56%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIC0ZF2mOAqgnWh0sKc06CfKLtMyPuR8%2BNwMMduB4TpfeAiEAhw%2B71wTCcsvwfIxlSF8%2Fih2A7CSezAIz5sVn9HODy2Mq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDOyNceVOvQGjwSSHircAwCQJ%2FZKnPB744TVMXB1cRIGbTBpIRnSD8ufceV8wBIH2jUu070T4vHdwO9WYOWuQq9qGPIqlpsJin4nztI6is4%2FN4TYBPkcLOjWaJXdB9h%2BY5m%2FgYL3gXBs2TdHMx2znvIdtm5cNMyZb4VugQYL7n848EOz7tBZEDvdmaU3RB5NiuTCj9EEfSWfWpVsP101H7RTVxPz3pPYxkmyMmu0FdWQEdHZ6py1JjQndII1F1YN%2FJoNQk%2BGQB%2BBpt6mg0hewBZQk0RcAvzNhU3X0HXZoAsC9EXxeUzlJZgTRrSZxhn6FV3srywKwZg4vUU739rejYVI6S4SbcmB9ABQk0f6m1B%2B3GTfZ%2FEwbzzaUCm45sTKEtSwpZhg4Oztc1uXf0g3gBoMc9VhDYX2DSPj53I1EfOWVBsh735EHyRGLMnjsvfiX9cLp%2BfhBCj5DoB%2BIj4eBpBoVylDaUjaH%2F0tMgvkeS6BDceItunIOc%2Fr%2FJirannEh8m6VOMWF%2BxdphNA6MyzFg6W3MWDBTfxR7O0yD4rSChnb0q4ss3NHncZcXysUb3UkSasHn23chzXIZD3Ws6kI%2FGFuWh2Lbfrl0eTf0wxM8%2BjxRSnz2g355JlBcK2sOUsC8%2FxjDeKVBH2uOd1MLPPw8QGOqUB2Rq7D%2BBPlEwBsIUMTjpEMHpiQW2I8g915i5E2c5dQBR37fExBgPbWx8KAw3ok5HuuLjItquG1WeqSp35TfYJ%2FaSYr8xMXzQbcq97mmfz6IuAQj%2BH%2F7Koadn3D3lUBvdMD8e6Xk0jzsF4k1Ny18yxzY2nre13HiEAKU0vqRIhog2oGPdY%2FDma4iDKsJ8QG9j7MlNP9jt5UyFPBRFxI%2Ff7Dj5BOL0U&X-Amz-Signature=415f70c8801dfc9114a94fa02c6798c511b39f1d17d4d6ec9709b7ca359ce5c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB4XY3HQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQD7DvJnwf24kp8mhCJ8bHY0o2a2H4rqK7M8gSACt0EMpwIgbU%2BaS7dhhjS23kj05Kn76pEqo0DevHwWr6IdlajOT%2Bgq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJ%2Fq5AnL87AYv1ER0CrcA6JxDeSi0N9Gwr2ASFhF7PXEfAcv2lVYDTM%2FSlMds47CB4M4i6LCINDgLuuMdWd%2B3gUpMPB4tvaP1er7Zs1gKA34khf%2BRYQqGy9UhMIx%2BT3jE9sGIo7rOgYSRvx9a2wrpZgD2fxWppJnaVvI5KWW4LHMTeQeFFynAKLgMA02x4i5JgU84TnogpA1IytoqHf4EQYaFeaq4NlqAD0xtCXlyFq3Pxab5gv1bqQWivAa5dYM0bpkNfC5uKs7gpRFpdUHfz8tKhTfRLKEpD4avp84Pjg7N%2FxSxVJML49tNEaY9uKuKWo3csMizPTM1xZ5l1VL6FN%2Bl01rGJ4Kz9jzhGLAYXwv%2BGCQmjJqbYLPYF7vbtGJXe28XoMxsZEJLt5Uie%2FeJpZLOf%2BP7JTtvzdWIDT6CLDb1Znv7GeshiWliiyer5SSIBE7MZOnelod6ZH%2FWVlfrVr6BThESHfvydW9CO4zWKiMyyt%2BRg8D%2Bto7ABbv1qF4VbQqq%2BbgDCQoA9RZD%2F16yxtuoo7kr6vlztOUv8MCKGXC9Kdqzj05MFbD8F5gi2p2EKN9rCqrcW4aIM36q7pty0EVv9vvO%2FRM3RKfNIMsduhVGRaTEQhPS%2F%2FurXl9jmPaXA91I%2FdS%2FjJ2KDUCMJLPw8QGOqUBaW1dci9MakaSX9pj1WeI%2BaBueoxwss6h5HHqoAU33EwVMZzP9L0fGqhd0fLCCFxL5bDdLMlwifvTTM4lBK9wrGFt4SVmSBXCg%2BnoBIFLF%2FAHgeazekSObrToSvYqe2O1T8Y0yTMVbH%2B%2B4G44WejDz0B9sqZqHDbC0Km5Q8QdQw7iRsOWxIul3a0EL643f2ItY9lc8rhl%2BBG1H8EPzsqTSohLi64O&X-Amz-Signature=e5cc6a83e387b97fafdec4422dcc678d1e034d9b9817d665eaacff6d004f70e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
