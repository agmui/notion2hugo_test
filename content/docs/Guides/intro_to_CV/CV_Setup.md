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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWMS2AVZ%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCaBMd4E6RNwlqqAIun8B%2FXjrJ6lJqPKQTsF9sJJwxZ2QIhALZr10IQ3C7yDaV5U0rOI8B7RfsK%2BUE%2BaRYN0qaIJUepKv8DCD0QABoMNjM3NDIzMTgzODA1IgzfK7sfhgRoY6uTV4gq3AMY6Pl6vSiGbHHK2JZBGubJ67iaqKs3ShC%2B9b%2BnfQTWSxQSBw5ZpRfkZszZ1mWVPloZZ9z7FTVh2ZAjkD0s011VrQJ%2BMF6NFtedC4v%2FJ%2BKxpwpGbWLEpTFASpfRMPv6KpW0151C0EdUM5k6o9P725ZS%2B77HvGAYwNF60PZWrAWlXfXBPWzuYeMZuOuHGQSI8uaLxbQN8iH10AC%2BmsRbQiv7CZxBDrfa7oW2v5ynhRWCsIoiAZam%2F%2Bkz0l2dMWFTGDZ6NAT5TsnfyWlHIKmpqrZRWnLR%2FBssgOlJrc978zQrwqUU6Aos7q11j36pa%2Fvs8zmny%2FZBjnO6qbIM%2FMW9%2FrsUw9Cxh6q0ESeeKS5phIIDeVlBzs4hHjjkSu91yc3Ax5QR0o2qx5uzzv5hoWdVsJMtQCxx0NXkIaH%2FIPOG%2FERLAGReO1sLB2rI8TMsoQ1nfX%2Fq8F%2B57elXNiERZRj4UldK4ERirz4JKd%2F9UzQYcBA4N1rq%2FFg4GTZjMh0fqOPFqdHUOcx6fc2ryRyi5rTArx5EGvhdkRp7LahsmdF%2FccN9zxoAs6SP3R9wV328COYRIpce9xep0NvPYpCYwlCZSdff3JYX2aQf98CmliskNw8HgpRAwz%2B2VQb8CsbhNTCf%2F7jCBjqkAVaOVA%2B9WyYR2kgSSvbWJU7lUH%2B6Io2cW28GW96xFNxj2uqtl4xfAn4Ut78judS8kWslxz5Vd8QOGlykEpoJPRcAWtMeWIHZQ%2B%2BXzXZbiPkpfbqwHaoQpnahRGSmuvfnW8vOfGELlAoYV6rrX10gJ8D6ORlmjVtv9Muc%2B25S9yJQe07qVmZN09WBgehNtiVMpIyI1OM1HTQ0%2FkdkW6WWFnZ%2BW%2B43&X-Amz-Signature=0a30a3a7910745eac3ad233d14df4de40d0051b91d712ec49086170999ac2aed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666XXQFO%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIFlEaAIoI%2FbdezCKudloEHq1NUUQKh39w3NlzCKDxkDdAiEAjBQqaLs2X7bBRRY6bz%2FV2lLLLdkJ06e6037YdKYRYUEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDP2RaHUp7wuZWOqMXircA9fXJNaL9yrh6baU8Afb2XvkrphCuH2mjjIdEOX9aO5pu6Qav%2FlrjhirIPj3bowTboeH7XZRorK8k5ODR7LNXPeE0M449iPfNKIz8qZEckoGsUm4WVj1672gBaU3ZDJPIIbVmgHm%2FG3OntvUdVQk%2BUmKS3je8Qc6TaW4aeYrFyWfUYPIq0pEjWFT6q0Db9sEWBxtKayEI9Si7KAxkzwlyirloMQCsWs59GmYuhCKSLpYqFX19BSNIkPNfz3swEQU31hWvrEpfRJyFVeDfyixmNOU5Z56%2BiRWIBzcHXBkgYhzPJvMskoWobeyXIcmEdrHYSvDdrwoU%2Bn2YP2QNkljfpq44ENhohwDImZiKGm6sT6ELgEpESv%2BWjZiUXCfORZA8HuJWg%2B21tlughR60oC7T3R493fQaBBYJZj5I45WGT7bCR%2Fk0S5K18Km0SjYroso2qxBgU3tZkuTXNeG5TnerKJ8IT6SR2nhZebFshW2Bhhy864d97JFpqsU6NJXtgMdRBXlSJDlWZnZ90wKbmPY0Sh4OTC5Kp1DJJatzTD2yADaSxBkQF1TGckcxQVXa3%2FnMkeiZoVtSljeZxOlivdcPlrpE6OMc4H%2BSj9WCCCLC1%2FA6w9MpAr8hgzonlpSMIP%2FuMIGOqUB9wjkHAIG8I0%2F5YLvslOVBrv%2FGfz%2B1D%2ByCFVgSvHLQy9qjkI3NS2kQ9394952WzUF1Fw0LBg5n9KR72Ke5j6PMG6CtK320W2WO4DIDQdKrQlV3q3YO8NxgnURfgJh4%2Fjbvqf5RgXxMh4msvDXsQzc%2FMW3DYPHvM0uERLsBhfp8g7p8xERk6D%2Fv1399bqTjUMKqHIujFZSONSpduxkakHuNt5ozY6%2F&X-Amz-Signature=138d249149e0322b7ecb12267c04e2d480b1999cefcb9cde2a689e9b98d06b3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
