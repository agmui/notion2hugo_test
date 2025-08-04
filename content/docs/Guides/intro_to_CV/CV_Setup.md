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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DDNBAIN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCICkCo1Wy%2FJxnLptb7E7143avR7%2B8YYvIpfYNBTRWpCaOAiEAj5wrxvJEZ03Nr9cuH1VAzOPS5kE3BPY8fnCdHW7OxiIq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDJmb7%2Bu0gFJxaIdV2ircA2G7oElX45sDUjbb27fIiJZBfLv4D01L%2FVV6oEjrQO0TPdCLz5vqLHrCRZ06%2ByNhAP0cRFruIbsGKDx9ujGPTBCpI7tMKTdYNHCuAVHygWjQ2chmETzef3wVlmjo%2FQrvUoirYIEhHK7tcvtgm4EH80wNVcV%2BB%2BMhWSfafKHk%2FslLtdx1HIygFJfDjYtbRA6toh%2FQC8FOphM0QeeG0x0Uifapki0mLvZxVYBDjwN0SpUgaTiio4aIXq%2BqKBksi9r%2BRSMWJHOKYlCGzAKdPJD9oPdwYWgRKwfTCUvDLZiwPvndsHHoQFyZcM%2F%2BcVnSd%2BQRv8HiwfJ6hmm9h2y2aEh8Ja%2FKB1m%2B4XKYQD60xJoUFyictn8DrZjKirrSZC3%2FQ1i4aOgVLsV6s%2FeIODQRb9LVYwmETN%2BatzLbr1I8AK%2FMamCHx18BirmZoEuZy%2BnxU6dpTGioJ6vdwfHcp%2BDDV4eO7HcVMffJkplkOIPOHobhLxzSkYUZ292hz7QPnqHwExRfAVx9fDU8Uar3mH2SrH3WlIHPi3jFJl0Ag9BdNU7p6r3%2Fu8aOEetk%2BKgRhey%2BPcKNTNTqX%2BfHAh7234rRT2S%2BT%2BhKyhwF4DWEvIamHeYjUU7Gv8KwdvEE6ujlKa4JMP6cxMQGOqUBgRdz8a306%2BukisgkgmVteaFFbueInivClwFuGNa9OR1H41iCpNgXKU0DXZVooVm2ggcrM%2BY3SQzXfAoih8gAApS%2Bh0t9WTij7MPLGeEFgbg1R6P%2FoJ63WCkOVJQTkhRgONJ9vbu7diewgvFBdZw8uDp9IqkIxDwR6da9cKT3hUsehVTOZCfWvt1OngCukjibFGmlho4Xh04vVADm9oyu0ES5SxFu&X-Amz-Signature=6447768d3d1f9892fd9fbd6ebe8a83226e4c596f0052c1b4133f9f1fbb5d9e06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKFN74GX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGjxaHMGr7nuwNAtau2qAh8CpHK4%2BLCitq4fymj4Vg%2FAAiEA8FQpbCqs5Y0l1Kf7OpuRnlqVXh0r9Cd1bGP1D4WAqlUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDGRsOeYnw%2BPQJyBUjSrcAwpORBth%2FaZiOKRxGt0HmgXWo1P49maVBaxZmrCPASBYhTBcoTw7nyVrdcCoCUNEXSJ1ov7CLb555VDUvrWi9Tfh4GBgDPbwQmVAjFubs8xSuQ%2B4OuoUIQND%2FAciFKSefGot1kVtAyXHNc7SCaZ47Uhbii00jkpfNZlsE%2BY0pDPB0EuPC%2BQPLXelMOa9l29gxdTUvsbbmZx%2FgWpvT5nz0WbaDu33u108Nx2HSZx6Ron3Fv2P62D6taqQ%2FjRnikblHd5PgSGoaL7tGyLxTCxJNIXWZ0lK%2B7RVAJEsAxWtLVS0ACFXexrCclwpFU5IPhS3H79HS3tSqWpKtegSP6UETJzwpgscx13rigPWANFTdGOmSfcnBmaa5UNxFF2b37%2BUvUY59av6cv0QdZ9K4WMLkyVvXRfYA4YcwjDL%2FiuNhlISTEyD9FY%2FOvNd6p8jBL8VxhVz2LSoi8GFGuDHRyahhsnRP1Qe0BFU%2F92UkplZnMo8h6kdnS%2F3CjwmOsqm0kLxGiyJyALrpx7Wdz47NcN59wCA%2FPQ2IZvjPWtDuIbvLajidzCQIgNY0VRDgfTngIFXBkH2KRFEAOahqDTIqbqb1vzzp%2Fn79Icc2m9LfQWTjp76tLUdNQ32nJcgsTnuMPKcxMQGOqUBdJxpaUFXl%2FQgW7jG9%2FGGGi%2FMj%2BcU5TCSYDKPtlq6SO3latTE6Edo0xTB0c1S%2BtftCTe7go6BPQ3TAOAugWYXa6OyLCUM2pRtQqkgC43VIEL3dXpR6WgDS7Bhb2JWoIMC%2BpVoz%2FXkwFDMKxHqDc7V0A%2B6jl7ERLq7%2BHJeUE0%2BRFzJMbTdCltG3fmYru09NsWfrxaOO0cXv9iFN5awUuwIVbW7gy%2Bd&X-Amz-Signature=e6a61efd47c2bbec27bea267e3f66cb45b5ca5265d65576a493a5e5c8b06aea4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
