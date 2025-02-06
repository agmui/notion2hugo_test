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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRIHN7QD%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIFWjxCdo1hHaYLVtB62FYZ9XhRahF0CZIeZvSLV5ups9AiEAxQrdGw4K78k1JHIrOQIJr1sBL%2B0EX8NGX%2FxDprvJuJsq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKTx9Kqb6CJCXbG03ircA9Z0GwUkY%2BxlXDAKJAc%2BS84Qf3iuab9orR4XT1Dnji05m2sNIwwRmM7unx%2FFWFie%2FblqK5NmJQ1DNUZz1SuoUZkoysPdSxwiCGSphJywUP9N0TRn4QYvegOV2Fqj2ixHQwV0H9htGENlJJbTDCLQR9v7wUMrK5QO8%2BhQv%2BFlTnYduo%2FFbNpwzdCHGW4nZ%2B4oLESaJwBfV8dYZf3CG1hzNC%2BO1g4BIyVqpqw5ePdCID4zKG%2FFiJJAyNDxjm3ufQmf4cZLyiAd1%2BARsAp1bMsY1VmCcurX7OcYpPNUlv8qjCDahTtncTQHL0K8iNg1q5Vaq%2Fo8wZc9ppqtQLjEdETQaaHN5y%2BDTeaWFGNICKx5KJddckOsxQLLYneD4hu6oPkbsTDDFiOoFjM4BzWDLyX1MYq8hHclNQtQcTiPJeCgqWM0f%2FUkCrFX9zpCiBnZQjH1nKtiyOu9t9naVTPBzMSJ8jTEMbpimbHgJkKOAv3Ja8AlZQPba9o8Wq9T3veWoHnV3ZhOIgsywkZE15pqqvs8IWn%2Bb%2BQCGS8c%2BSwxqsq1DhNVM2CU8QcxjQx6aMc6QO8q16PnYsV%2Bu9E0SFCh2MYrxR6T%2BRtRymOSRz6Gc%2Brx8%2BHRvXMRH%2Fzd%2B2lVWIhnMKy5lL0GOqUB6Iw6Dosqz%2BVcjH%2FmCF0A3CIs%2Fn61AaxobIx9qSEPgAYpkWfseVZMxzQjKuyqeT0HqYCOCqR3mPjoORqnmZaS2ClAEle7nB0t50REnZTCxfCw7bAD7RDyZJIKboclg7prYngQzPLp4zNeT66vhVBrrQBi2nR%2B0CXecL27kQNnee3BfC2oy2GAAEx6m10Mg0nnigJE7MmslTYZU2ieI004QaxpVlmn&X-Amz-Signature=4e757184a67d3717389221acb4b5cd7ea37ef8dc7ae00d2539e96c09257e0a7e&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKUJO25L%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIGDET6CJtkmAbmWvPPkp89uSyQT20NYUuVKMhzeSzBeOAiEAvGIa9Hu5%2FCPXulHJC6FrCr3j47ATe0a9AEUhIi3uBLQq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFhXAmLn80kRKrHaOircA08bLn1%2FUbV%2BbenXh45KEiOcjh%2Bnc70R3lGa4agM2L1W2P516B%2BSGIt3I1ll6XD3G9bjRv6eNiD5i3JVNNo4nsbGJvpX2RSvaS1Jzz0FVKLgouFdH3mmKADj3qs%2BixP18G44BJ%2FsErgjJ5ARa6qYEpNmZ%2F97I3QFW02z%2BKHWdy3sJm32bSPSzuwioYpk2P2VPcS%2BF6CkUpCZzj%2BW9ejoextz5gVxMLr%2Bpbe7aBpaRIlmzhTcdwA%2Fq5JRq6jx%2BVXbLVFflrjtmeUcnmF5bZF%2FwJjs2%2BNiTx%2BfjxhMx21dzPvZT7TbFxuAWN7iOV7yH3SsR%2BhgMWI9jusJjP7QFddJvBpidD3sbmZ7WbfjGZk95ne0dWOGeN8VQ3gEIscuWPYm4vYHlND6EPcg1YKEeavUs8eGauHe2XCIhWXinLvl2%2B8SuanQmS5Kbth7HuMeGoHglyxMFkCwq74w8OhCdYTwbJid8dWVT3C873YvUvpSyYiYEAOkDbmDc%2BOOoSERn3496N5odqnFCvMkpulmMdRDuB9hneNrPUt2TwL1VowoTRlpWMkwMse5Md%2F3gD2IDWgm%2BIfyK4ybW6c%2FHqDR0BGyZNSneK%2FzAZWnaB%2BTr091ASN9oc8PKFiQBijY1Z2CMMO5lL0GOqUBBZcJdShUPYiIIajFGvV7nzMi5TVQhVxiG3wPBDqr2rNLAFYCf%2B%2BGB2Q2UUjuAu%2BTL%2BqJ6NwRhYL4S72fllknXDFkMrAmY72Eq7XKIm48YF4sUWuDfu26eT3EVUZrlXr8uxAjywyHqFikq8Dk%2F3oewjO1VbZJwS8JytRgAdOCqdVflYaO9PLBVckKrsDE%2BuI5nkT07lHkx3jlXcaSceCzs8ZM4E%2B2&X-Amz-Signature=44b7f3aaa2854668c55d4e696416d6d6d0c60993fab4b15d5c16c2ef58747fcc&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
