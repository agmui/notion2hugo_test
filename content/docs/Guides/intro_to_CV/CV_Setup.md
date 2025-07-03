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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U7EVSUJ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCZpmDGOeK2Pla1Z9edDEh6ze%2F3ZJtnOcKbs6it93bmCAIgHJclwk723ovkvp5gJ%2B%2FgI6noMcbhz4UgD66H01%2FnmS4q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDJZCu7YpM0DEgxPolSrcA%2FI2cNcfODc80vLTFVgnzy41KMo7uAGekDBSl6UsmQbOVU1HtJfl8jtRgjsFw8IYKIPKh6kB9zqNrv7j0%2FXMbCZab2uBQbZthqSWwsdY5mFjQuD2wZRYuPIs7dVLEv8sfUNuPHm7OAzSI0J6%2FDVZNwWm3URy0GoGzwdmIsrHcB1E5Y1Ln06T9i658%2BFg7L%2FKK4FvXdhUsOKrQreKjDIoN8jmMlLViI3aOTQTfEPH1JJWqhM76J2kvxP6gr5AmZj769wpes6BFWYBFO%2FdnX4xZ27QYwcDPSjRHhT13neEZzm2700DyTR9rB63uOFnc9C8YNa%2F89h2QHylDgQWG60HWkPdnmkF1VOZ9Vm67oH%2FH2ieck6THXUvFaICbxQZAeBOJd8BubjhCAusVehypheZqqYIAEj4cNQg1siMZUPWvuUcG%2FS0w8ZzuYZqAFtbcvU7kJD1V2GtdZ%2BhPvGmbI7PcgFMEwRvzmrPc6SmGoRCLfXUZ8RN1elRBPFSacbPxEf5fbtTlnV4DxL9X4F122xrzg0MlsXIMN04EYOUhlr8kBA5mXgFWnprI1yZHYtTaeHNDBOcze65WVShQ1udprGVc06qzeX6nRNhsMFvwXH8OBahuGfjloCJYLqaPYFpMM%2B3mcMGOqUBZ2JGAZS5k3SemkPMdoWFvc3vSzNMODuXEWH44QlSztflWnFhmfhDpD81v%2BUN0FE176q%2BE2JD%2BMhGxBRI8RQd2CBBsSMBZCtxX%2FhQbbv4SkHEHwJL48wMH16MU2%2FbJun4e3KmDv2Wnvys2roxoT8%2BrejuDSgrrBqd5xFOAaqj4iJIdMI1XHcd3XJwzrk0N05LGHUbjM9BCZcwdjoRBrTCXqH%2FNDRB&X-Amz-Signature=1297e6332e6c54cd96748048f227365ae36d9ac6d263a5df5b9377abe67a24e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FP6HPN7%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T110828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIAjxYPGxNx%2FT6fHicmPRcr1UKpSaiOMDhEV1FTNMbOn9AiAferDSeKT8EuBecErkD0dp6UukY2thdFjef%2FzzFOwkQir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIM0b6HaOY5liaSGGzZKtwDaxeZEQfovQEasa3X6SWDXzT9sYtIirpPs74Z1QsUgMI8ri8zdKqCATFoELW%2FRUmMetrVQcboM1gLQp3E%2BpGwpqafIkn6xtFbkB0z1nAuznpEaNj%2FLSSG7RfgN286ZAU58nPEYMC%2B%2B6uwcem8URfK1QSMRi6yZrOU0fkZXJ2hvwDtJ%2B8Ibh5wvBjqx9zeRSPIi8meZ18UOQN5wIwOSZShlOZakBrm64YLOGgRN6QzDKIfmyeycxoRRvZEy9g6SeATP7rXdrx0mNYQJ1Ir0uvriaBdw%2BzZryHa%2B0%2FRJlXskF3tJ%2FqyCM3f%2B0qNBvsvO10nPpVtrAXjhEPdI04xeVXy60HLlJa%2B2HyCXWp6CXnDrO%2FVpHWCDSq2LlgqyukqdpNrnZMywsfbsP5ivwgWf4uB0RPZJ%2F9rkckB8kiRDQPZrcTSc0kFRvGwAIHqbGB3zADMIe6lj%2FvPRRXTOtQu9GJp2CtgmoKhu%2BfcQO221kkKSfCvnvjA5qREYvVGxDD4b%2BvWatyqbY0Hp0jzQH6eusgH1HOpOW7g8P0nVZ5SJY3JijIdu%2BBBHJk9GDk5ULhm35XyAsj5Ps2l2k9GRkqnKGl50KOXm%2BzNXrug9Qt4qXJ3%2FrG0JL%2Br3Gj0wdIP6HkwnLeZwwY6pgHpSHGv9yZ1wLLbjS2N5xq3uHjgamdpfQFpmnEI8dhiU1ww8N68kMcPPqS1fIz7rKXJn0ZXg4DQEQvPCrZRQRpeXtmjXpziY4PjZbMOGatZ80wqI2eGK%2BehhhwEW2II2cY6ez%2BruQ0NeeClNYgHOK3oW9DkZJGYTBh%2FrA2AvD1CjkrA9qdVvYXGBP3%2BbZ1FsViSrJ3%2FTwLiKYS%2B7ntg%2BCmHyjqCkW4p&X-Amz-Signature=ea3b0dc5aad020d0b1397f6fc33dce01e99fff5378ac3689931097ba2a0d1008&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
