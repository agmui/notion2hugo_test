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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYDV53AG%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIF%2FG6fAQdjZ1XGQ0bx6Yk%2FHPw6txOmTWvPmormpJQBnyAiBLdjSTH6tZKkPPU53nSAdTgFP3ADqlAlurA4zMGe9byyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMblnsCjABrOP1VyjGKtwD%2BzZvFbxunDMiH6JP3bEIjfKJIv%2F4BRybh0nC1ii7%2FA11GiJJy3AFkePTnzI3QLDwcJ0Bu2%2F%2BvKJB7dGyR2Dol202HlUOX2HYBSO7w%2Ff3CfdiJE3WRLniK2x7aJmX0zxZX9BUF6BfINiwmlcnFWOthwRel%2BzwSqzj81Vp%2BXdMUBci5L7P2Imqr9GL1GQFhXR0%2Bp8qlcWnT2WauZcjY8nR1Ff%2BJlLVFyZVuPBrE4g%2Fipj%2BJR1oe877Lr8eUssgmtmRgp8MjJfABq6C9FKegbVJLLTeJ43jtRI5wUdHO%2BlWAOw4YG6OOTk8AQwJYEwzTz3AWaTCOuRzSvIGdwHqGHCGP8n%2B5lkOKyMhiHtgjhJntL%2B4Y4NXrBmTvbAZ0sn2eDdmsg4mmhuwNXRv2nUrxCcP%2FvJaACjeiF0F7lRvEOaoNNHOYkHhhJNBe6f7Tu09lflritbfp%2Fp2o5tr%2FUm4bXaA2XepKJOr0RneDk0ZspWO%2BewvynWh6bQRYd27xebmDstvZBplU78VkM6Kw0xWTOzuPWAzbPV5NKD56Fp8mWKlWVbLPMjw9p%2FBnf2hB2RSdgucfm30ndHAEsbEUkkymOE0Aa7gS%2B6ZWyV4E8ErA%2B2ElPIQVT4H3G%2FhI8chPIswovDLxAY6pgEHJ7%2Bdbj00d%2BGEFe1%2BsiT%2BUY8%2BRm%2BqUYVYBxj%2FzjmTqOokiD7Iji8IEigDi3eEc6gGMeQrMNnWX0db5xR%2Bs77E7juXME%2F75IAvmvJ9PmWFA%2BioVkn5Nf1jZeTEGbLMVYz6lBA9ONhFQVb15YnzFJmhXLcs9dBgyjpf%2FYka3h5VUTPQKEOX0u7vb%2BJm2goCVTVHf9SvaMPwT2vqr1o05cTk%2Bfr%2FHaLb&X-Amz-Signature=cbacc50c35d21f79652d1963fd09fd7706abf82ee5e8d26d43a30909c00a8641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5PPSBO7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIGeEZLQEMAAOdTFffbAVYak5H1Ir7Zc2gwMa9UItWKG7AiEAlzc0VNjKRPBNvdVa1RLCQ69sAoTRdOBE%2FT7mNFWKfQYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDFpELELO7ZjFX1eYoyrcA8%2F%2F4kEAYbITflnj3hQkSN%2Bl23tY8KpRyw5hOLM7jK7p9bCPKvWhfueSvSv1mNH30ChN27HHUGcyp%2BWJvJY%2FNU5f7VDU5GYPo0m01ZQMuPJj6zmGqMgZfS5u%2FLon8LV2wncQvBY9h9J4Ki%2F4GWtrGacHT6Mn%2BxAxR9ayiG8ZBvJL7mXRw5J3G%2BEWUno%2BgPWJehEcED4R7eBqzgzyZqMfvz9mPZBLtyHySON9GkLKSwzeoRpkR%2BIwZVB7imZ8BG0YsCpFi4Qa%2BHO9M0KM%2FCfPbQE%2F5%2Bz4Kkr2f7IBY3mfxc%2BeqGa7smwOXytfGlGPdt40x0sJDH%2BAWJ06KMUk%2BVm0QfnSNb%2BCFI4VtZJUlGgphanu8Ww9AKthdxY0URXOFVDLPRSn%2FaVYDEKV8Eom08HBjPJ1YQ1Ph7VEd4IwZVWkjOCLOOBv924Pn74kRiqlzvQPDJMVuUba0huXWi219sO8MYfbRWkDHynHfSC8uyBBO5obnGwk0OJl18YVjraJ7pQ2kXHTFqIUZNbxP4w%2BPfpEZ9cXhiKtdo5%2BIci9oh9R5tlYx%2BZ3M7e7oMO90Yh7NU2acTWUZ0Zl81UVfvepOJVZHnzIz4nJSz3FB0jY%2BQF1bd6ExA6NCcDFUtJtx4MPMM%2Fvy8QGOqUBdodfzF9YPfg38UgQw1xULOcRUvWE7g5jONTxu0u%2FY0UkhbQW%2BpCaV1A3LYYu8U7CEf7HEPCFnGOzBXR70te39raJBsP45yPTd3PUyjYvKB3PDqBBKtPZDjdsBfCf1SGane%2Bu0O%2B2VAVRQg3EIGwEUynjHl4FZcak0XCSQlPLNlnX9R%2F3j42k2KCc%2BCdDRpmH6yHF0ex%2B%2FwkDUYQ5sRHv4egdB68R&X-Amz-Signature=0d77dc957b69a608e9648b0600b06288adf415d63885f038049931a9fab4cccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
