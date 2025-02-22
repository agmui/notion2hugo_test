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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIAB2QIT%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU0PfVaMPkrQNQ78REunhTLnAcCcAa2GS291F7AhRnYQIhAMQ3t8SxYNDhq81CeE3iq14zwKLSwGsHX4SXrvDJ9395KogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBy2hn%2BkDrFvvP5bsq3AO3epPU6R1LOzqDEfrHgZ7VacoSHCxLkcgNeeNYj%2F5W1of0irTpK0Ai6LKLXnX62Q0YxiPfQY3gnprzhMf8HKeNa1wYBI7lpmIqU6ZXElS2IXdqPo%2Fjm0jEsIH1eZqWiMacNMBR%2BOYpLcnP6xKNvOMgFPlQbdRuv5KmRFqejKAzqEXl%2B6Ak0NyzR4sU7EsCLPtHupwH6uexpkYUKC9KOUPK9naWvlXSyAZvBCAy5Dhg8moC3GMnKZ3k01YpcAW%2FLsY4%2BnUMY6I%2BcmLX3AqymSdev%2FlrZCOqF0snpERz0eH2PpdnhJQW7KCcBJjnLKLC%2BCdL18I6KkqOlkUiSyAnrHrUw6rV0by5dGp%2F%2FIZ0w00pIxKvOghqT0BcOO1g8FYRV%2Bftj5HkBU7iXiZ7iDhvxdxgcQPlApHQff1C6XGjMbKvSPbUH8xk6GJg5btxUfxWVHAxc07UA3zYMPXJrKKDfU7bs1%2B1Np18wam3XQegXmVqOsO96%2FuotRxBG8sPRS5MnWxYHZbtgo4lZSvl%2FgUNt8B8pIGZa5Plv3lovSMdUZFVvxBVMpNaDRMRMrv0pDChMFG3krqxHjr9ZWbQittZpp7d4CwMyUyBwkR%2Bh3PnefEGHlztPZsEF842oSEMhTCRx%2BW9BjqkASpsY0mzaZWqb88B9zaoK0cqGr1FZGxY4MSRd9eCtZkrBzzRYZ754MVH1mqnflLxcnNuwZOc60MQPinCuYjIpFZuRd9StfwWodLlVwTWdmwbv34yzBd%2F9MelW%2BsF2UZbKpD0krhssq8TmNUMdhOY2kPy8jAawqBWij2i9DC1t6eg8oJx17HuFIN7b39pDTiKY0ubE3rV%2FmYDuKNvR8MDPAewMoSY&X-Amz-Signature=c7e1826a6dca420f6767c0dc200b0f927749a00ae96d32c72dbc4196ec1c9860&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQFQGRIL%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICh0MbKs9pSVKV0x4QUI4WJT1XaDXRiXu7u%2FwaG7FvhdAiEAkUt2xnVrrmJd2HaiTQq18OTTZwJSVLptcm45LKxaDTkqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDu1S0r1EoU9HevGhCrcAwuA97nDgmAVkgdWKncLVleHci2FvIMMDbRr523gRMJQqnahZKNtzErE%2FYtin7VNkaTT%2FNrb33ed6ebwCxfhnwzNr2Spf%2BaWbPcF0mf1oJI9%2BTUn0mZEdyy8iBebkWx%2BKpVfkSNeMhxBFYDX8vhhBDuNBLhfbmqOlJmdEHXPUxrQBRlW9jPP8emP5trOVon4RzvpPmd1EeSv5SLtHZZoMBgpo2DSdTbxhv3GkRz%2F48ysnsDKUfWVlV7WUmR179cdvGMP2cyo0BKwe4PkrmyjzGRLYKZMP1mMODFrZsDGjkaHEzam7RCEz7Ag7Gregxdyx84xEmxuvQ8%2BjOvYxg3SdqrLUe%2F5vTT6bBDNzIq3EwvTHTbH3xa7aMD9anYnq6YbsslBXOVVSgoFEouAzv19iIL7mEvEIjslzaKCCBrG%2B1MynILI8iF0RLLy60%2BbcmsjRFMDxA31msYDq7XbqgM6%2Bb6VqseglgYTjd4CNN4S%2ByTbPem8NbccCAKrNs67fJo%2FLRgoiPEAtHAuIyl1%2FL%2Bzrx%2FIx42frPSAgnerKa5KWcmC2nDO%2BraQ5xtdIcz%2BQnQ6Bt2LpO1KibLx4eMJXYJUszdNQXMvMARsOsHJ4O23cSlEKFC30dzmfDq%2F94w1MLrH5b0GOqUBuL6TBURZzPwZviTXEZp3TuMIyG1OU01OnksA8lNHg37YISEYUbFUCy2cCGOBNgjoUT4qFYL%2FsOAk%2F4%2FCFncP55%2FEhG2Ngxh2FMNtOP68ushT%2FWYEy1Ov5C777pRGBpx3JfpEQdU8Qjeo%2BZMyKGq6L5byEHyll3tri7DRK7Uv%2BgNYDyV9Piouk1IhlUvYb5StS2kS7aGjkcu7f0ru6C%2FheC35jd7z&X-Amz-Signature=e6de42d952daa81b24a057fe84dc614c857824420fe379cc3a0828fab8d11373&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
