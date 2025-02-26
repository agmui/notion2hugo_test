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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTDEVIGW%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T131702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQChGRyC86VtRUiIt0H3KprW2CzNeMM%2BKo1pY1v%2BW0m%2B6AIgZSJ1rOobcRynjdMFR3W2pc5FaP%2FzFcfkOAJlTmhY6BUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDJLh1BBNoMmN7gCOircA0EOMuiLcTVCI4RUS8%2B0lDXUP4ksb3r1P3XJnVFjk42%2FvqezPJog6pWMKH7yhKFsJuyITzHYj5V9GkyJEoTyQQ2%2BI%2Fsm1QmdHgERGT3mDNpEqAYFtyT%2FhqREq8qh78K%2B9%2FtBFyWbXd5o6KkzspKuP5ga2%2FJTWn5l71%2Bp3nmLMJPzrcfFmB66nIdzVSt0D2OQtPJ6LORRJ1COSZg8diiciS1Nb8wTi1A0km7Wt4dyHmH7vYB99%2F8HoaG3yRepZp%2FsMoaFDgky9Z6UPGBzbUTTtRHNMiJ4%2FeozsukuI0OHWESq%2BjPd%2B7uhLEpTVcTpW%2F17YilTeZskSjccbrB4YG5HLBAEEbQOhXoZH%2Fu%2BlBClU1QKmIYaJIM0nBVUnC0EViCYI5P93SrXoooRXsUFruhh%2BaZDolZs6QQnKZV5XqvitP1Cc95MR4szB2BxNra7oUItQs8WVV4uB%2FKUvBbOd9avG7t3tilJzVFz9cF8c%2B7xaZgQjkbtcpPcot5SQ5MkVc%2BdvRxyOrzt8cJsnL9Ymd%2BIsVAMj882Q5lbPQqUPK5WYFNkpAU4KcCZ8k4R5XXuF7HU13HTGsI6DUXeVeW1Dn2W%2BrQkjonNMlzZTiENf%2BVfuIoyxzJqZ%2B9ScvdlIHayMO%2BH%2FL0GOqUBhWZUaJxtVrcSVp3Y3owrThNRC0fbEve61AzlqTWkk%2B5Ha0puTh99pI%2F9gtAZ0z9udC5imPiiwnbjWcRI4MyQT9qa1HVUYR%2BJzdm16Ez4VSWZpeP0m6uR8jYSUhdFb0jnDzx0QHfwdESz6Vt9ndeYT7RrACXHUV%2Fc6YoPMX6S%2FRlY3%2B6Pgz5llYcqB%2FRmgXIct6pR46qZahjdQYRaPVJM19ES3de1&X-Amz-Signature=d7b77dcd8fc3dc545019cbabfac31a7554df97d4210c0d3afde3960a98df5385&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFZYRDYA%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T131701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQD438rHfK46MaX%2BZquPNn4t693m8Q3antkD34%2B4tnT7swIgW9zXjUbglmgLrJcPgiER06qnP24xixjXWPQxiVKmNPIq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFYMZ8bg65y%2Bj65LwircA6Z4ca%2B%2BvOkh%2BGVzEkDIoaLiZ7Gbf71PT5xWgfTUUtijaVPJGkn9AbAkH04gOMCHkujxZAl0FL11zmNkx3Z38mklyyc%2FP5Y7CjtrRP2%2BVLBkD%2FW6Q01MajkcBioW7swv1P%2FXMx2%2FTHlDMH2bOrQroNI76b8V4O4oM1wSSTal%2BaZQ28Y6ECgqo%2BsMUkCtpP1fY4Ju0ukbAYsRMRbEmY5%2BoUqOnOZ9Mc7LUlAQL2mc%2BycAsLQbN8wzsQpSra0aRjpudL%2Fl%2Bfcq9lapXd7%2BJ5vml9COgaQA0Tp2c9%2BIEHU%2BqDRDcaO%2BfzP%2B1cQuIVSe4YOFZQ5aHKemPB8l2J4ivxDY0ccUgKrhQDfX28dw1YliseYp34eiZMoehtkrnpNrkySkAoiqCcXu7t1sGb5JEim1GUyugEURg7TfovC%2BZiJXSVrGNmDgp8y3FjlYIvYCtRg4HFRyGDPQhSQx09SkT8mHjGxFz3K6hqQrpteYzvmczkHIjGiPeQA%2F1UMtaT2JWMAbbkNbSQm%2FSZoEB2X2XCPxnQN7DVA8bhc8Jhenn0QihuB2TeEkA%2FJv1NjFf2D5h%2Futkviz7TYQP40hdCXKaNLqkB36MnNjG4f%2B0Y8ENgxr9wNO%2FfOvlWfPJcvs1gMtMPiH%2FL0GOqUBnrcrvxmPf8p2TAiYOcgJWqIK3AV8pPZ9idAMXqUbaNAup00yy0RCbVDDa37RYptzMVU%2FNgbygz2dIw4dabs%2F02tLf%2FhkvY3JocA%2FsspeIvTwxkN9xy%2FBrXJoWbjDBUB%2BWwUL90chMnzu%2F6H2LZitDfrfvOUol2NXvBTL5%2FcBEQHEjOqtvBUymE8%2Bz7SXDExhL%2FPdirxrOojWZSGi5cpizS%2FGtZX7&X-Amz-Signature=76350e1e21763b4fb4388a6e29a71f7b4aaa69a20f3db38c7615161176934ef7&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
