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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM2C27NJ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIFu3ZZg1%2Bg3yYClXX3eoXSEC6mViUnIEr%2Fp53VDoMIQZAiEA94v57d9vHY68Hgs93Mf%2FFLZ8u%2F7hNdsb1ylGH0KaquIq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDHztem8DjQm%2Fgm6zXircA%2FzcMpKRAMqb0cEuJtR6AT0JQZargf9c7uuS1Tb7vb3t%2BclhyU5z%2BxrtSDtbN8Jl8rJLGWvFDCCBDnaM8SJcCxVlLU6aHqMN0OeB%2BycyQvuknXO3gtsT7ueibZhtUUkKyaLNJjYn3KH5POpMHDwFVVNlXR%2BqaybPBbsdeEo7yanQHkiB%2Bnhxz3h5MRnA7ZLendEIeFQUnNUoFU9TIbPS6WvhQhFlh1LJlep5CGhPu6hBMZFN8zw3iEldMcDk7a4BjGUGuivlRIJxTCp3fFyyHngtTbz7yARGQvYQsDVsuJCUm693rrXdhpNPsnJaP%2FPLoSS2x5EQ3Biuar%2Bm3sknVK3XyyBxVpOfeHMFsoU9aR%2FGwAcy9ThVRFZvdiXz1OV9%2BRXVWnCSCpUzHZNxmb%2BxGJp23X%2FXKEJWR7IrN2K31WQGNNd9sBh0Ag8VA7p5aHUUUTDLKwW76sdrTcGSLlZUrx8A1FBXtDQPsPIKkJR0JPA6A6riUBlpauUleRv3%2FWY%2Fgs6ztOXisaaC9Fc2zPruOd%2BvE7EiN72O9Ojd%2FkdJUdNWCwDwnu8f7KSJE0dl8aWMX9nZ11yxs8QvUekYt%2FHCfsCHmuhytb29BxC73Qywnyd3nqPi2k5PI6HhB9nBMP%2Bqnr8GOqUBX0cZVpEKHStIuZ8XZfMrDUVTtMSLLcrSK6I9M5CZsKzYgBo3cdZQFz1EqobrlSJ17cD0oy1PHQYGkCiCOwneqVUFGZ536NlMsqbJrPnMxnKqYkxk6XiGLGfk4LsujMefQXLWu5dUcafITlLjQSIiDbe13Y8gGdWPPTSPwbcHvX9rmQUAyZZtso6FfJcvNra9BbJQiPCDviJUdBwmC%2FMhdJWi%2FJm%2F&X-Amz-Signature=0197b27a57ec00d666f5a2071f610e90bfdd066538d81bfeee47fc5934e6162c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ICEN26K%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCo3DK4Agkf1ehZm4UK%2BuwJWFh%2F%2BjuMTndMCMs8zKtK0wIhAIZw7bQVyKRgpC6y%2F5rkl8ZDGdQTex0UnVcUW4mRuOgFKv8DCHAQABoMNjM3NDIzMTgzODA1Igw6wUcnhNh4mNzng%2FYq3AMC%2Fsu78M1YQljU3yZLUvYHqnxZ1AVryEFKf5Uxa8KkO0C%2FtM%2B37OA6z9xTf2Swr%2B6QperMNxF9uT2rXX2Rg%2BvumlZH%2FGaUXVDwquncr37SrcgTChFalbontYTgjbxSOdtRmSkqmD5kyYfL8sDTsICbSbOqB6P95QFCcIoY%2BGYlamOXbSt%2Bg9J7fGfSxT%2F60p37Gbba6IOJjuwaosSjjS65s89UM1MpnAnOqx3a9%2B1oooTG9NkSucZCANm2ZZymsQrL%2F2BAc%2FpQZFo8JUTioXYg%2BEGGn4MewfIiWOxETccQh8HZCjPqhZD5JcQ4qlOh8JEOI30qLT9o0Pyl%2F3%2B3Z6SwZ1klk39jjWNSAXHfEFjBfCIcE0JiLv7%2FbTkpFeH6h0Oqu62OGsmfV%2FOzBLQzuC6Rb4HllivSfg3csKU9h4DLbAWTLBF9nWAH8gX6sQYfzJ5Nh0CEgRD0Ps%2F0G0yzh36S%2FtH6RG778aJscxhCziI%2BGLF5Njdbz5kzs4Po%2BXQmCmTAqkL872oHPQXd6S%2FTEmoTrs8ZlfK7FK7v7aRs3iBKZAwyknTvvwwjaD4n6hO15pjELzVzpFaseajzRYT%2Bj%2BItH4UpRJtAmQxgUGcUitJnKUEUOk1Nu6wBN640nzD1qp6%2FBjqkAV1toU1zzBx7hnpLIgJV37cyjlHS17m8uy3Fjj%2FCDyTK%2Fd3K5ovIdTOEvHXjTS21AQjItwTShD5JelW4vjGQPLWUs4Ohmp0ZQuhxV%2BLvdFpuKr%2BbjJR%2B5rI1vX0YfTgeJMaxzuqWMVnkaaFdybbAOV7gG72tt9OCvXfcG1cVbabxbRlMeWxVLsmzM1gwEA0Ebpjc42jmX8ciuuMguZaV4ToHCe6q&X-Amz-Signature=36d59cb0f46b5a041e38372eb590571ab388e753b58e7b1503a330ab3e063485&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
