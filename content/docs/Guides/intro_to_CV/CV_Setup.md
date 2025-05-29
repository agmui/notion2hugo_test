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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTKZCGCK%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T081301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDveCjicQy6CFwRFKZV0OcsAlF0lmyZy0z5pHJRXji6zQIgDLRkZW2Jn2QtxSRt2ZZPSJ%2FMtlp6ejeiou5SVmm6sVkqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3BuamwJ2mEbqPj4ircAxDR2D1R3PJEdBnSERGYDRvThtS0Cv4q1t%2FMF6fIT%2BJA4eYTu3mkU4I3IMRrEuLJTZzvaD%2FhlFDRHyBRB4JXrkAr0SHOT3Rb2GVPG3Ty18BdhiLD23VDDPzCT7CJy%2F3RzELAV5q5iiXWaruGJW%2Bvh9YRzlT76RnmDICfEn%2FL8phaD94xSoIcEgGvfQZ%2FXKgXro6CNl3WlFmwUBQe7znoWgBMMEebLOhQ5feVbjd5yYD%2FFabRVG2YL%2FalaHt5Nss5KZfDbK2MAJ4oPuwPEomJlpyEeEx1s4Vng4QUWKDmvq5zQpS7DnT9RjprG3HNPFD0d1psI2Kq6XSHVevbY3iSUKASYnaBV6j%2BgqEQL5PeJK4ukHrgH96ijKLckrxPm8a5jBVu64wugrZUpjpTLAOPb7CndWKYlFnTrOaIIDWOC2Q2gsnZe0Ye4ws3L6faf4t9xqj88Lll63lieBs%2Fpe4Bxt7UuX0d4yaHwXyeXb2k%2BTJhv92C%2FUEcD3r0f8pzO34KSytvfYK%2F8fof7xXcIUTA6gIjrB3w9uIW1SvDet8Is08m5namJJZPgthdC1Ruy8LxhR5bFUS5SecJ6ztHJQfCB9jybih5gnrv65vEQmUelcBut1Vp9svN3OfyIS9bMPH838EGOqUBGDT80gHaYsyiPaUcXN%2FirJDO0Mtffd5JopfPyHkdrKpaQbsKGt%2Fu2S5NX%2F5RgEaHWDu36pwbb3hgPo3Fgz0N2uRLUppLfA54r6VCcIMQZzlZOY68dtqh3EZiIAAItdV3p05G1kgEsmqiiAzWR5UKy0UTu2DpeBEdGeuHDzfBT9Dd6tny4azI4THOTzKc7WGiUuF1ANBqfvTR9VoDgabdGXQT0lOH&X-Amz-Signature=c11da694aebc05b751144ec4206250249e6f8cd43df84865aad0190ded7d7e46&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HZWNWWS%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBR6ySJUWYiMOCbq4OAGNIdfps3SbGLAo4m4G7mtQJ%2FfAiEAq1n1uYbKLniTty9X1gNTNfW2agjeb9K1EDeIQJczaB8qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAs92gRI4pNFv0mKUSrcA5PBCWHUZFQDI0E11%2BRG0D2kGRVWCi4bz3R%2Ftwyp31pDirtrGztIu3prX60rT3%2FDfB22WdvFCyBub6P5cWBEMj8OGOH3pHqxZ%2FiIxYa35aBTaYU1TKGLGJtF2B42pnSNAUcSuGDs%2FVNmWSWRviC4EdFGMwKsZ9YArwEZ8KE8Tw4%2FeaW%2FmnLs2FtHUkgxEfEZ7xUnnsCebDXgtlqvf1uFrbr09WjjAIHmW7KZ0SC%2BB6UsfxzS%2BrKgpmD8pWFeCN4f66Ob%2BmTnACJW6mVAfv51epp4NyOEYwzI1vy8K%2B5jIW2qFUEuV12EJn1DGNpnZMPsh28NU9wzEDuQC%2BfJSD%2F60inz5bEhtPGYQX1VbaX2Y8myhiFkfFa%2B2jby1Bv5WIF08FoatERBy8VKz4l%2BezW9s17vGiPYNxZkcHUEJFn9TQmmJtH4tVMaVyUN1K94qgrHLZBdQKdwUNfR9RXFshQLTeZe09kecNsD5NOdaQQ8JIgUT%2BPzw0EwJqgA4ZS4dI5sPEV7H9MmArrx4Eh5lgeXAIA69WuMss19X48CWzQgm7pk7xAVKOoQ%2B66porHcRhn71TbGONmjxNGzVE124DKM2REgtL7z1SVt9VmNN9y2WCWfHoys2bsPQRKGHGmMMO2r4MEGOqUBUztYXsKWXs3JMaH9vZ0Oz6ImDs00qSNApCA%2FSAzPvZB%2BMP5da2pyZOoT5min7L3u%2BhZ5EYEtjUSkGbELjXkfYg2s1BUodYnbw4PDYGDxsFN2O%2BZkTbFnsgqWOOw7u0CdsZcRX6S7sJt51MaYHbYciVjbDQ2dYlqUyDaqMAsaauXFQGuqWpbB%2FBMBoUO67Avm6hm5Huh3JfW%2FoC%2BnDB6qCxgUaKjK&X-Amz-Signature=f2aff3dac63ec6b5e89fc6e4589a413dfb9a64197bd37b0cdb4f6941c09ce58a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
