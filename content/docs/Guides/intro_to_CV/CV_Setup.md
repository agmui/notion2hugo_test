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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X3X4SYY%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAnotxRm%2FpCUgFP%2FZXpAHiqLmw8cRQnT1gfpuhXUlThAiEA6rqgJSvoD0NnVx6MlxBf526oR3qbLDs1CQqELcEGhu0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDGQ0kazlVJ9%2FOa2atyrcAx5Qg129H%2Fv%2BZdEgJjqHsQ3%2FHoCOdIgXGiiwbUJqm0ayZ7J2Wzy9V5lT%2FEkXwoZJ8Qnhj%2B0SSDUl6GI3w8T9GZPgjSfelr7T%2Bzk2MxSHj%2Bd2eyi7CAOvkoie8RpLEEBIVr39P12ydPtySsvSMgKI9eZtu2JFNF1%2FNktYs9PD0HWwAnZaXvDShxCmIwTVRZSDGcpL79oeRUKM4wB33at4o0PAQ%2Bfb89ZFUr9o6%2FpjZDtb%2FpAnuCyYFNvXHtujxHVd96DyXyfEXCxXtzi8uK4to8xeXoBltKSOKE3qcJhfLVMvhD7xik4LEhJU7gWNwgYd5k4xL%2FELP54TxmpDPXYvmw6PEO1EdjmdP%2FpWmWre5XbkeIsTFKQ%2BusyTiRVEK4CWN0xH4je6noHRkRa0B7FHh8hU%2F0VgTFPL7mIpSF6swr98AHPLVj1%2Foy22xNNF%2BX81vTguOPycX%2BLEQORUenxckW%2Bh4ZEDmtxPBEyO1NVdZDPSDyBNC75nc37VQgkDdZ0%2BfDdAO9u0reKBY2tw4%2BKvRf3HITfHMsc3TfRE%2FPUbPPq7dRpQoWpnBMbkRg%2FRm33czuvmCLUWTfYIsry17eq5cto3TB%2BfMnIugXXf0c3TrkzDFEvAlyt%2BXi2B%2FgddMJGQnsEGOqUBKW3Q1ceh0eIOD%2BmxdualTUUV7MEyiXCE3wMeC9AyHFdmT1IrgV8LQO5KNbzSaN8U13D4rauGpD1B1q1InBfLRxauZ0ADb126%2FoGmI6hiGy4EKoKZ9ZYIh8BnSTfesjumbc8qyIiF2JWsoECARXj2bdljr9sHkAzgFpjHcwww51II0ZcrND6hsj4N%2FVVLAgYh%2BXBAGn986JD%2FCEBrvmcpVeeDtJSI&X-Amz-Signature=b89de351905f58346adf335968b8d84829e7834b2bc22cba6cd1158065372244&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB2DDU33%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmuvQNg81cG%2FmzRoTIrag69bpXl3IK3ZsHP0jf5t%2Fq7AIhAN6YLltb780nyJS%2FY5W0lcYvFNzCcSjS29VJHdr6IFc5Kv8DCEwQABoMNjM3NDIzMTgzODA1Igz%2BxmC3M%2Fdi%2FYDECs0q3AP0z1yd73%2BxZ1XIZWaBE%2BcWbHOk9ZHl3oGXtWxryIgve3%2BWGNKxpMOUIPS2bXR0uvI7EzlTShTzCiVrHn0tHfVpS7bKfXqpJFXUkT81veJJZP%2BMAYBEstYfWSLvEbpmX4dwvk7CsHxpUU1UXKVY0eQ%2B2aRInHHnxbo0b1YJ%2BSewtEL0SjHszG23mWpb7iJGCe3Xidws222xqSGSYXzKGgPm2ZhpZiGP5V6t6p%2F7apubnbwJkKt%2FHeASW%2B%2FgujjUP1vxjrmao4wwkSwKhRvnzJZEqFAQesqE2wkmYPzuozc2iYZMlfMKouhaZ%2BKxD16ppugpcYa1sQk6seNe1JZY67uo8fN0cZM4LpNRZ6lf35xG%2BWu3gvPSJLVIWHlLoHDCwmDenU4YM%2F1M%2BF8YS6XZP9b%2BpkJaRyTsxnheZQUlxUMLAZ9tlrv1al6IdoiBqKGr3Dxjx9rx0aHUIfAqQYGsV0Uq3FGkDKtBW8uJxzISBadhMjA%2BdzH5yaeaX4%2FdEdRWwoKu0rLr36%2BbOr7NJqQCALn%2BXNey2Iw42ocwtYzSoEi2dHbUC0RlmszxkxSGWD4M25PoU4s2RDUGAikRABb3nhYP9jtzEGq5vHh3kaKdg3r%2FIchyFdEPonKoqH4DWTD2kJ7BBjqkAetQ7rcmm97hNAYFB5tAIu1aZnIGnFYFgHovLApcY2E4LADX8acy%2BR6upm5SXAghy6STwBQLWq05cTPDW0rejD6OEAl517m%2F47fUCM4uhqowqBkOYpz0xPixwkW65otYnY7xAGRY83pv2was3FDuB2NagsQf3Aefx2mUgZGWiqIO5gwgNahhdp04Uo0FF9qeJZ0Lirvffg0CtLdULKxX20KRCJX0&X-Amz-Signature=92fb56b6103152696beeb2eb029a1be6b549f0aa3d7797c1b0a0846b0b8b4b43&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
