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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HAWBRTX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGyY9YwBdA0Kh%2BSqLUzbabYU9ml49%2B3%2Fx3adQ7iPmUUvAiEA0XCb5fmUix%2FmaVNPcRcC93zAv9IxIJd%2FvEtTs5fn7gkqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMGFy3NvSLG3nmScXircA0DlyhewpyLwNvZ0CBoLNqN%2BaYz5%2B0hgBihnY7DVnxFXin7TJHkisVZyJQQ8hOviB%2BoOYLfBh9EXjc5IHwYIgK4O34imDDdTnxAhk9XOKfSvGjBEEuXqs2sLxCopoZLHfqgAlR%2By3fTgam8JEpgpirzM%2BEBFL3fXazx3A1Au0DVNMyahYrgZi5uXuqUox3C6qKjBKlAw8MbbQMlARXAuB3rHyds9tfiD5LvAdCuaKi%2FLu3YRkyV0Bbm8MIfg4Pawn2Szb%2BL3JN0tM7hcCowJf9pTBRHbOjCHNp90%2FP%2F0nos0aNnrzcVUP160h3b1KEuUtvgh36HH5g%2Bup5NWiXkAs5CCC8%2FaizCI%2BWu4sWktrdocIFVBSm0K3vKS4IfivxDBbH6NpwS%2FXz8mcjICNPcg%2FjsLRvpZD6aPtzUaC7bgHiVmwTlOK3CEqE3SuJgrPby8krlCyAOtlNuQD8hj1sVZcYzb9lq7Q6%2Fg06PMwOq7s63iFaxHQQM%2F4Jpea5EpQejlWp08Xs7mHWT8cGhI5wG0nB8do8%2FOnpxCmJyRbFtIxXKWv6OGZW9cCUPw1bcUn2XQtN3uw6icngvgWUNoBofibkXWW0d%2F6zH9HVL8hss%2FSFN3EPFiM2Y%2BiYNFzK%2BgMLuS2cQGOqUBdcCDgFlcNp7niHDeJ10BZuxCzVae6SpHifHtsbQavw8sbGF4HJD0sa8aILDG562Hy%2FuoJrIV5CNSUyr7GplmsL64iFp8WrrSF1%2Fz%2BNEf97K16hOgORolllOwBmTPFjGbQx46%2BWSPtPKSWnnVXLlAdwsG3kd9SBKkYV7nd02xm0Gv33KIRUrRzLDgBehBMozsH2P%2Bb7VAYo2431mTBIKxr3sBNbjE&X-Amz-Signature=933fbec8b489a9a5c668074764f1b1723bc8f9a62292ea61314d80b2f1f5f141&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y7EA3LE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDkBY9UhO%2BffT9CZpAui72RuYrevgmrVN%2BA6pgvfPuvPQIgEW4SVFKDzvUizDRSZ%2Fx7vd%2FV82JhY6E2%2BUQ%2BO6KxNCQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSTIS89qL3CSq7CeircA4gxd1lklOH3WUrzxpyRZH7wrhfMxQk40lC5uVxKrXorNnl%2BheK8SkYp1GFrlYMNvpxwZW77DoFT8PxVsDHtYE3stXsVvG8cZcE882ZPhVATw8K7LxXX1gXLPBgBpa%2BkSaLS%2FHYgmBofOVZZ5fHr3PE5WeD3XClw0hwkINnfhqOKw8p76MDbSDxLOzU1MXcGLPsuGP%2BUfMCf66dPV6XyDz0ggF5wNdSFcy8IqYO4hAy5N0V%2FNtW19%2FqFXR5uZI27sMCRR%2FX7Flq6HMt7crwRGTinZfDeDaGwN5nrtFRh8W950DRoiVPeEdZET088N0hCkudTtL2Th3ngA3bqn1f%2FEL2jKgBNIKytYeD6O7NDfx4kw1QykLmaQBkf%2FDyzs6N%2FUApKbR0f3x1KDDOqmfXfdn9bo2IcMLKkzOgoXlBYBF8cHQj42ozzEvHhAriNGMP3zYKyYefLveowZU%2B2PgyEhYIGU4Tp40BwVcRGd9jM5xk2IeJlMrBG4%2BOkQfzY6jSMKCyUymR5mFY1fanuS8JbHsStk2l%2B71b98dDwT4d0cjongf%2F70FzV84NKx69dfk36rlUDYyzyLJw6mQD4fMJS1IpJzBeEmF0%2BGhuPxQ3p9%2BB%2F%2FWo3n%2BI9a%2BHfYqVyMNGS2cQGOqUBPoVSsMu7UY5BF6l9AxleoalmLnhFjK9S93aQ26Z1w1I9RBbjc1By1Y%2B8ff1QpdbmDJ2BMipp777POp6JQpr0ZH%2BqWzDm6TcRPqMwf8D2f6OW%2BLRyt53AXWrbdAexcuTYUich770be5fDwaC%2Frv6va0lp4TTXqJv1PukI9W%2FT%2FUE7nIUPVXwNZk25ManwasiquHxOlHRhcM8DGZW30W6r39tTYkNj&X-Amz-Signature=523f56b6d01e89539f59264692f10d56991809edd5ef4f4bd1d1bc5daa01fce0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
