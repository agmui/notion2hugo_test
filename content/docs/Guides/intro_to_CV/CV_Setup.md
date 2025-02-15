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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EMLFPII%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T150151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCMRFX2yCjhx5KO8wog2eg8uQvmunf4Wwyo2f9SAZmvWQIgeOxb7okhyPlFKQ6W%2F0MOchFypCAchKQjVBuhbb8wsHwq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDDzQH8AqphJhpvH%2FxCrcA%2BuvHnRCh4gsyLicMU3xBRDcl%2BMGwnsUOvWIWYke2aZHFQ8lVPArSo0JZl0XSlcSPWNLL4WwPBbQN1mkUKC11k5uYMUSsx4dLKeo996g%2B%2FghNi4KxxtJL4zdtOLbZiPgJIgVQMSCw7XSxOc8dR%2BkhDnSaTSCN0YYemoxlbAVZEMPA2PM5IpQY%2FnIbi6f73nHXHWnVp4lY41NIcMY1sB3DSIZj1kfq7S63Qh6mgKjETPGdST7%2B%2BBmhKx6zKk13nZQb94yl56fc6g6Wv31wkWoIJwR9zuXRE2%2FoQH1hbNlfJ%2FvZxkyiwGsOcEjwYdEah5ndjf0gCjZrkdjv2IbsKOdcq9txX2VPBHQ6vIWDBBVNrp2%2B%2FIqxYCA5mxQcgyixh2LJx24kEmcKlrmidWionXDcRLmmToxhVAqeYRkb7x8dsdpnSauNjuoSbAoNBIxzkZsSLpfYSEO6inxAdRV3pLQLKaluFATccdtxi4lSdBs4e7ybK0hlGEjkZDxI3V92N2eu7w6nsvo5bsbswN7Pfrdwyjt%2BoKgksGIhqVYyaN6IZQCqJUe6%2FIiHod%2FAuKanICpsOg655cP15Y88f2pfbsJROOXyWCkAQuuS4ajiSwk0hUSv6VOrgMeo%2FYy9DDfMPXGwr0GOqUBDh9dqbe2f3Z9O4T%2FJ%2FHTPcaWacJCAldK2jC2MHIIfPtTbueg8GTDc5BJ7hAiDmUTrNdgNZH4lHGXp7TTFrfrXKuhPHN2jrmsffr0iZgO%2FXJoi0FBz2NH%2BiT851w6oc6bvIkKYa%2Fz44DZxOc%2FuiTuALyAKfrJEzskCEjytDd%2F7I%2BLGtaqVlD1WdnqB9okAxZsV1bXmD0jR%2FtTcy17aXMHfeLPMs3q&X-Amz-Signature=9e4ad2fd00c4421c31cb7b8fb044978116d134829c67b9556b7bfe0159a4829e&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQVUFM3T%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T150150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIA0mHt0jsXtx5GlnkALxKd1FnDf3Ezf4X26XZUqbZd2gAiEA2waGLS2b1BkrlngLrW9RxD4lqP2K4H%2FULPFROMp2lb8q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDFvWgfKJoRo5wgDBHyrcA042PWYvfnFexXQwGxCZ9JiwPUA65tKIBUZp0gWnSUEg%2F8NkDymVhuh5zL8uSWiQBxRDnxZ9rR1v%2FfalDc4V5nOyVimq%2FlVBT9%2B83UehJFK%2BLbBdQ3DPQFAe1R%2FsPixslRNC5EsQTNGcNH%2Bm9sd%2FqJUKKhqheX6ichxa2HZniqBPFmUZ%2BIBBsSPam3kwdQLHPHErQ34fjiloBfJnXZz8iMwyV%2F2pr702FHEl7%2B9ESXK9GLxImgSRIoZNBvCC5z8xH8cmygUz180PPp0rguO4pxpFM7M2hb%2B15JzMjvo6B%2FPSKFEXqF5e4B1ilzxd4KxVyyfT9kpGL4sHdptghziMdCJ8PubIWvwNniGfnoU4HDZz4e6TKSUqEgRrS7FbFMPb0aDvSW6yl947dDAXimZVIy31SeJlNMESozb9WXCe%2BysFDj3LCo8OexE3OuU8YSAWtOO%2FgrQFGzNIRjMJ7mnefggcjFnCqrZ1PTo%2FiPARF3%2BrfA8vy8sVp9vx8Vlyg98eqMBfKOCKoC0c9qLXtg3ajoiuwGnVksMI0i2BZ0WhQF%2Fw7Y9Zhg1z8xdIFNL1s%2FoWUUYcSpDqDr%2BcruGP%2FeCXlymJb8MKMLwLDTTtqB%2FpIGhlVP0wWjeaa5IgY1tcMIPGwr0GOqUBgxlFLmb934f6RFTmDIIKQKxXFwDt2EfiIUoDs1aEd640FgW9bpTWPKDx%2FYXAHBVmUWifTD5exNK0J72TKWo7mXj67uGxQhYQ0h1ipV%2Bk0Hl%2FwIAX58gFLb8Z9f8PDiI3y4S9ND0QP4b4K%2FDeM9frWQcviTwdEiwmpUxPUtBzxQezGAcMUp2d0ww%2FgoA1rEo4kCLVt1IRDci5xCkz8H%2FZDMaDVQfJ&X-Amz-Signature=794829c079ac9ae9068da7c8c59a1a63b240141b4b4ae2dbe3c91ac1f3544e06&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
