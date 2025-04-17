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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JG24RM5%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQo9qsa%2F4O7x5iVRBxyKrJEiMQRIr9wBWBI2TWfXlSJQIhANclAiS7NrFNTStpSCnFSoIE%2F4TVlqpxJDxN83AC1mCnKv8DCGYQABoMNjM3NDIzMTgzODA1Igz%2FuMuikY1fG%2BX4LI8q3AMS%2FigH3sXcy9TTza7HKcQ14yKncTE27me71w3Arb5x0pixKtQ1CQ72T32cqtKAJwFDaflcJTFAaU4TD1PN0gxR%2FGnNHOd4OIrNvZzdMyLu3CPGPdJlupohf4dNzJ0npP1aKxbFVPMrxQn3fMFtPYAUoWCopc3JOjylgNdkGziq1myQp0V9S%2FMUxdyiTBN6Z1uicSh5Umv%2Fqf8F8xHtyAldHCmkwswiWeSk%2Fik%2Fvd5JzXesb4zbHWK%2BVQtQQfxg3nIK25V0PrehZOzjKI484ebYfY51SBqOfg%2BioJfgDnWqj2N0cmhlf%2FZOXBA3zuMuELXEFybjlpM%2B9uxXhw2Tn2nu12hq4b9oVSxEdBJIa%2BQLetpyipzXpOSHwB%2FqT7kI2C47%2BeG0nJtl7F9CIyDMVAC8y0uYOXf%2FWUqqbAdCksvuatSWCGN0Y45VEjPMRrszcQviR8b9BdOl1sleMPRtyZrGzIP%2FfLMgKrre2%2BqC4tRaa5%2FCC4CDgejO2Jtlnk51mLVFCLJXb1ZOgPo8%2BHJBrCGw7FYAfOj4bLB0rFdf4uyVps6SOpQfZNiU%2BODYmLXsAjzATD9liAuwtaQKfALFYPRUrC3%2Fl%2FDYgDwHAYg7zqQsGhX4j0CBN%2FxjfU7NyDDv0IXABjqkAYmUwEEDSeu%2BZMtBrNdrRzPuPagC0ztTFfAHnwQ%2BcQ7jp2hIo5GX5ww2oZlkEpWbGDEV65Ljb0M0HZ%2BuZC1naK0XIcYTHXdq9SEhCtnNVOQ857Q19pr6edzu7B8aw9zzA0VvotIAAId999I2ksgLIpQ8Vy9pJ5WewFb%2B3eFN%2BNWYd5Xow5PqE01ooMv%2BppGaC1VuFxhC1eEVVNCX3CKaTMYDTHkG&X-Amz-Signature=a1649acf2521f7f02d9640a6cd346ed06600d4a04550b5b76d522fdee724b368&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656NEBNZT%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtGhMtY9sEn14ajAyiJfl5l89iUyQdau%2BRJclEEsQsfAiEA9TEWkdUnviVim0q13v9fHZClh%2FciITD1D5otAyyyUI8q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFZgH1OFg0RFgaL2UyrcA9DP6U9%2Bx78d%2FWASwNaXrqnbmHkecf9FJyd%2BmCRIq6Z27X%2BLt7g5DC7G1XZYrJ7FawvHBzRXjVxCBKnMTNeQ8BiCQurkxTdPnL8oGZKY5ly6aPyDtNwr8EGrjKwNw0sjXXnUQ%2BqFL1ci5jZ%2F%2BNixMeBMmCmKyRMFvvP9qPBPq4Gavi561edDucGlaU0AgSYv8zDLk7yPMM44PgPeq%2F4afMNQ9hSTbgZZmOEenUABWEMn1M90ywEay8MyHEx5crsv5dKShkhPXF4dJP31fqceer1BQ2kaBE8sTDCo2cgpz601tKaQ1lULd2nZU9eydpPR64SWI7IgNFFgJHSVRnpxXof%2Boj2fkU48mNxqhCwyg%2FKVTwdr942WhdC9F375DeQDkRf1QcMz%2BdHndj81QdEN7n%2BI19%2F8V66EyVZxAZD1AZbVFL3YJVnOU%2ByPiY0LNecxeuo1SpgNTCR%2FFf%2F1ZrqmeKbS%2FDhHDkzMEjqP36mEQ%2B2wL%2Bk0dtMR4LFiB4EAdoyJKMz77LEwfvWa4dyDvMc2XEmd4qY9fx3AxYOHq5zBjwl7fyomEcNrT1ZnEdBC25m2O1uP4GAt%2BUJg4UMO6qXqjZw8z88kQkBm5WqXiXZFWF0m%2B5qjDwAnZvld51UoMNrQhcAGOqUBQDd63Dgxx%2Bt9ZFICSVl6ldehv1jGRiaqABzG8R9%2F6gOeyy0W3i6CYia5HWyiGc3tKQ8egqxq23iqUmDgnVfRxvnWHOrqLgjknTFnKmf9bsSTqOTnYNvnh%2BPv3rNmCYQhI3EznocI20D5SXdnl8lYv7fp%2FF3e1IroPtqYy6F1KWlamvnUeUw0TU8yluUP%2FRuqYV6SqazyifW1OPSRz0AGQtufmtmr&X-Amz-Signature=1983c8767c391a9eca79c78357f78bbff22702c3dfcf0ba0ccdbd58f71e60f7d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
