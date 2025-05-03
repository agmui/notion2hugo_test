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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTA65KPP%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDKOygJRyOjCWNm5Uich0fUXhtzWmFuHX58WMbDrFMXaQIgAZsikUIQOZ3EUJuVk5cTZPfa%2FqBl7MJRsbme7tefPLsqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRkwDfDmqCubOcLWSrcAx5ltAdzoieSB0jVpLLSYTIQSNqv3Ldi1BeeVQwiFLpwRF48pSg97jQitUU3li%2Bigf8Qu%2FLy6dbcrUzkjjAtuRmITZ1Kf083Ya00CiJjK9tiClIbsblGNcVbhvNUoDB%2FQ3TF6VjkMbLwz0W6HQu1%2F9pO5lLY1oxC2wVK6fbQ2Vhj4hBM1mTua8a8snMP%2BXKKLOS6jWfnoXmhW5QVPMNi%2F0XaRsX51AJsCR3pkPkZ3V2odWNe26MeP0b3sEr99V1djyYNUfxn759%2FUr%2B6NWku7HNGs67ziDvGDw3xY8gTQ1xjDYh0e79%2BjnAe102jkNNTC9DO0FJ9rktdbtZnGvSRN1Rf%2F6t8snp%2BRPxOifjfQDenprod8ITtQ%2BqFDJaC0Ve4vliA1nMHC88Gf%2BJG%2BAQi6%2FvT1hPTijw8c49i0xI3X%2BE%2Fwom%2F7qxQn1sEu%2F2mxCT9gHSNY%2BBwRdYIY6YDC4l%2BOaKAShMDGBXWerskVvxaKG510SnQK3T37JnzgHoo8jeuwbXL%2FpoEQTLhNJT8qL2p2HPpJri%2FwTNfOgW7ybxUtAq6KJ89Rj%2FMoHdqHG4uRgwWO%2FNpGLWdXdt6de269vVRjKFSEFE3zRRmXtGoxq%2B4CEOIJOGeSfnk2JA7r45uMLO618AGOqUBc69TMNJCaJgQpDd0zPEEQJtYLHONBzpRh%2F8HPXLJ0jeMh7ZI9YvwJJpKpfUmQh4dAeyS0nUer1xq9gfzD8tgAbv%2FU%2FbaFiCNzNYyo8JDXEBn1SzWamV8ZagCC1XJN251s%2FjsFl36Ltas1iBy4ziUsmyGsrvEuzLtRnjUADT8sT24KsAWoJuBYDpg3degjI1wsKG3367aGYY7o0kZMETUp4QcXvBH&X-Amz-Signature=5b341913c292e3faa23624bfd36b00b89504eaadf494929a2629a83516d51e86&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W744JGFT%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCPa6ibMkcQhYRpfYGMMsP0LA9K5n8vqHutsyDbVVKWqAIhAPKruz7A9M6oTzwQjphtJURpQ%2BA6dfx5e0ClznfqwdrVKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCHyui8a9NmxvcEukq3AOjjrcU6Abih8gTMB0f7dDa12RAjKlbNus0yE8U7Qg%2F%2BnAcyVRP5KUyxqZhyzh8r7xwG5T75Q75FQl3%2BZuoAxRfWVEHM%2BVJsi1dLElEBhE38xt4F470ulUZNy1xP1TxiS8TWS0IShMKgR9HE1ZHFNbfQpR3ctEls63kYq7kCSNva3PFshWPT%2B6zP1NejWLSDZ2pDDMYlmClOlVxajn7RFk4nyxrJg8kMx2L6fyABSmo2Nxg7esOLmrjgbtiKYj991zoq0%2B%2FQXY3s5%2FCO70XZV4PKsza%2F7RFFqJNcwiH%2FDqje0IZmdMYf8bT7%2BSwU4BsAhCld6InnvTX%2BqRkYFu%2FjToUZITX7D4VUMFysYPDQ21P20nAnum61mHQDqv6kurzINKmo51sx0%2Fb633xaAOlxOOpDp7jTyzP92WbZzcTwPYEyTjl%2FNAzegDEQC%2B2TuleeaMszSyVTnuJieFLwBrBXi%2BJwP%2BJmbW3%2F%2FWOZw2Tl%2FyGAP%2FEUeKWOQ43yWhLUyFTsMzyrwnbsWfF8yNuNhLmtHbJpr%2BrubeG3pCNq57xOgb%2BqYmND8nszMaXeRftxn1evJTZgEnaa50NZvCx6Qoxkt4ZASqsXej7DupDUEhxdcZjUI5AATW1CnZBqSZjEjDrutfABjqkAQSGQo8frHIQllZmGDs3Q7Xdo8RaBokVlpOnckWomKjn9XrJwXQhknHyqFu%2FkKqw7v8ubvWlUviSc%2FklBKjgskhY05PN1AWlB3M8ZkboiCnY3iVxUBjtkAyMz3Uhc4lYYPBXu3ukYS2Nwd8kuMr%2BzSOO09QB5hIVnNFoABJjSp3ynE0Bavu273pOx8pBSmaCIKzwiFPzXptXNaQ%2F7gBWshwMfmBS&X-Amz-Signature=074e6eb9134372d50e5302a088c2eea7c8fc3a018c8d23237d9baff57fedba69&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
