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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JJFMOQL%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T024404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDceURq%2FP0vfPSuXBdxtxHnAAzT%2FxS5aKEQXxcOqnQDtQIgOfIIcgp7yWH2S3An90XHggXFf3Bu2rTbTl1TnLQ5Jr0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOOF6qia59Sd2mmlpircA74KG7Xypu%2FnLvvBCHvaG%2B2VpIlMDNgyqj8jth6z2nGZtu9BawR8AcDXJBIzHayPBQ6JPyJzusfujH1wHOKgWFWhBwiA71JUYzwevA6yll%2BcnvOllrJYK7U69ilVnAXwgDIcFHBDRAlI%2FagH3fGiVfpoFHQlnH5aPNmjDcqdnfDXnFXEl9vnZcSWbbOUM3ZFrQCRh7uL0hdeyYExtPLgaIWBIpexbfLsRmXUrUJ39tU9ZvPwOU6Dle38WqT2pGEzSUqxnMK3VsUGdeAwwFqjy2%2FjIgVAiF05SeyKjqWc3UnCYWis9sc57gSEm%2BTPp%2BTvh5C0elHlhe6yArVSB0mQuvk3VSfYhl0Ezl76llEv0NOaqm20lH%2FAgQARaUZwWaMb7xNH17JBlBia4JpBu9DMoz2RluPv2KYtvytX5LAnkFyfMKn%2BOmP3Lv7IBPdwp%2F6NwVANNWtLRspIiEjFFcQH6b3lqDbrtRqmQS9Bcpteb8v1Y8ydHzAHHjyjp26%2BpmfDPh2wxdR5TMZ4ooyCaEQWNnFmCO8vaZ1N3SdOMmNEEwqf83SZH4Ww%2BrjIAQUvIMaPe7fPQrBilirHwnpBpr60RtgwtdUMl2AXiXRl74dr%2Bri1MJgkxJKcTxLmuctxMNj%2BvcIGOqUBFnjw%2B82DTIfmDK2Ni2dNQHBdrttkzvMhdGGsYvEKNDsLy00lBdAEEP7P0b5qh4%2BZFU%2F4DlnrRf73pHZgAWxbKUGXvdRX6Th5e7Q53gw7cLaf496Zo%2B5vmN68SIXp93OJFI%2FPBlfR%2FjfxdXJyLajctDX3DXrUnTjCVfVYpegYM38z8%2FM6usfQUbrUV9DLhMbTtH4AJxDmDnikZKg%2BA%2Ba9g6uCHnSx&X-Amz-Signature=e2cb8f3618daf8e906d6181d31a66a262f16854f0977a29d266b894e923a2349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZJVHBQD%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T024402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIDr6lJq4QbFYNg%2F4LGyFGKo3oxysVs5oFCH8XvSKeleMAiEAs9HxJ6vIHaz%2FUv54TCqsWPz9NFaTdlUM7fXFcOk8E50q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDiVin%2Bv2LvLyA9EiircAytfawUCoAsgLFYH1VPeBcYix5b11XU1WpwOngyVWkCWQdVQYmc3ThA5CSl51lkNVq4C5Wjx49591iaYTAeOFBX99164ekM%2BNb9eoewLJBiNA%2F3kR8gfZpKD8Ce6ByTv6ARcF00D92RzovcgxeHb%2Bgpg8rtbJ5H3pFd%2F%2Buao5uQq%2FDRd4RNx6DPxMZWhEcWOKUuIwxv%2BnP%2BpCAGhU0DaLXIKBykANEK94L%2B7NzIq6WFVj7O8EYbr7q6ykLXOTNA42F2JqnzbYALj1%2B1woVebGLBekRFb%2BQLwHJQAFwI2BeLurU6FDWIwXpr83D1dWyFRIa92FJwzKJRJx%2FeyuMl7XNuoWQXk7CjEw%2B5aUlCXKn6meISX2qC3HNyZrMckrOElWPTTl4Ne99km1ht1l%2BdG5q%2FUmxv9%2FaLl%2F3iJNC6kyfs3w9Gb6fcSiNJHVqdDp0yT6vohq0e9Qj1MN%2F4oGtAIIhVW6Pbk4N3o2fjqxPdy4wF08V92rVtZ2zG3TTy71ZFtSVWjlA%2Bd6q5OgyygGYHCMXmEe3i3Cx4z6Y9gb%2FtlYfHWEtAGdcX%2FPLmydODAy78yFlbrOe7Vf3Dy%2BrfhbykWj45oUkZOjn5YA6fUuZERZHo%2Fv%2FECASOKJ%2FMWTOljMJr%2BvcIGOqUBYoleSRhGO2UFZ5BMLuJnfuKSYo1CmR6bIMcJ6A4IB%2FTNAmmKChBOo7cYyleH19nWR0Dw2JLqyweYSiODi04I6zMyxIXvIePCF%2F6FqcRtFHWgWHxv1fwz5aWagZYeETIHIlXv25gb4PYhS7WtuR8As6GXQpprN1osh01FvIwuj1s4hfZi6XCvDARigeCyCq%2BvD%2BX60fOUiBCaR%2FNqol6YjmfwG%2FaN&X-Amz-Signature=e86ad69a1b1968bffa6d0480b775b1cac8db41b8122a78bdd67c6f0811ecbe60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
