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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMJWAUVY%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsk2f1aCwFLZyL5s%2FMuoQ4d5jfpQ1j6HHOXvRLjqXHIwIgVEIPODMgkrpLW0CSlAzbn3bMGvkPOhij4IfSgOS6aqMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDGCs92pBCKn9%2F345%2ByrcA%2FnVvsGMaUIwUL1XQRgcVqvGYuu99UB7uWNYE2Iicwy6N%2Bt0nDQ0JJHcsofAmWkOMwGE8RBl20JEizLzOo5LAyGWAl%2Fgeo28Ay67cDHIS9FDcMrdvL3PpRSMJfz0x5iXnupYc8DqTUVAbNIVIiy%2FBGRUfyZaxyd67LpFKxMteKYiSziANq9WKpsMMNN0v%2BdkbtvlTzpnBu5BdzqPaUaChnnZsC19%2FmTVbT3LcRdtMsh1V3MYcUs91Ji1LG1t1%2FHX5cla%2FPA5t%2BMbFRaZb%2Fynu8gVx8drEbxVx7QrCytdvPE9WCEGTji%2FTAAeBaELwsOOe1r1GOfa0jeRBAWC4EQUS17%2BMMRVuz%2BeDuUb7EEqpVJ0BDXRroXKxiYdEtK8G4ndqjeXI5LkE1WMP0c8yXaqsv4WG2ZMJR33qfOB5QlM%2FdXFcsDn1U27%2BiEbwYWN3oBafkvMPbwh2DfZ%2F1Ax90TPOxl4cF%2BVdF91iCChLdOJ2ZbaJheV2vdCCSY9HpjTl9ap5o7zSi4BA1gd1k4YGBHYelf6vQpJY24aEsqOxJ92YWBr0hMN9NiP7YCHvU%2FN1nAuOnRhWwp9ebv1gSd33c7DOeQvE1%2FTKsrdVNP4FcV5dd02FPA%2FW%2BZ3yc7dg0mNMKG%2F6cAGOqUB6S2U131cwbn7iOLLadoJKsRuGnk%2F9eR1%2Be%2BrlFQfjI9Fw%2BJGjNuat5Pvgsr%2Bc6SS%2BNbMkTh38Qqnx%2Fa3IzhXw8aMic5HeBB38xuKmfgzMqIpuhl%2BBuaYGPyRFWurtxN4mdDVD7ECvTSWx2XaOsZUUfBKpJi6G5hlUkTOnWDuG%2F2lyu9c9AxMOACLngOqnrema9DdBCfKEHE3Qmkv6ykJt%2FkxhgRY&X-Amz-Signature=f6cf5f7561cfde1995cb31572b2e1112a16040ad6490a84fbbabdc650c34ba26&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V26XERSM%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FlHYBIlC2OTeN1c3mesAqms4qqGhkYP1dxhpGfX%2FgFwIhAOswfRtLs1K7YEtgRrPtF3f7JsxbJVP0LcZxZ2Cw%2BKFiKv8DCEwQABoMNjM3NDIzMTgzODA1IgyXJ8oR6K%2B44ra7dKkq3AN5rj8fY0Y5x6POC%2BGb8HwksUUm1HOx8DROzmEvtmgotpFeax1367GDndq5LUh%2By%2F5Ap7%2FJQqWgEiyVNG34vpt2s74uQZIstVZeL940QCU%2Fmg59YIvCmp6OBsEsZ83OhC2oV5ksxkN7Y4Q4cttRsbmSzxPcvaE8ZynUMevpXFDxW4vW8QQ2ZuEYJ%2FHucM3jdYoAZRO0x90NUm0ezWdg9F9hIMXI3pwWzLw8N1JveRzwkd3vaR%2FzWJTP77UZuf35HVwBdrw%2FC7kXOwpcgFWxEhULplyUBbNvULm3h7dlz5pXuKRFQzFXFQBv2ItrrsbgZ9ebkYOaX6Y0fPVePtFyh4oE5Dj6hNI76kA2RvIFzlS5GBO50npYliI2ipcdKoGlgGQUo2N8h2ttpGDr5GHgMTDFt52VVkf7kuQ0xiU4TvNpobAMm7O6kQ9lyCta8HmA1BJOhf1jFtDIlP5DtpdZMjI57icq6dhG1VZbZITs5qZjg670cBpacSBtb2b1P18ydktDp71DoXAjk4I3FwjGkaZQFVVQe%2FkwLfEwmx5LvPp1Rul8fZlqPbkB4mlszHUEMTAyZhF%2BvFzkVKIJ627Kj6TulrvSuaYlJGb3vDySTxxcyDDQCSkVmGV8g94pJjDys%2BnABjqkAYGUUpC1Kb%2BF6g2Q8tOPXglxBZzW164BabqI%2F%2FDh6qbbUhAmO2zKJLJxgjN8WJDPtJA7KHJnOPYsHYbgu%2B4EYqKd75t6ZAUVkP9NGZX9PpYIV2GtFCfjlwGI%2BOCMPBox27g3fxBfpxz6W6luuSUxk%2BO%2BriJhYgd2ZtRiizewSTDMWn9knjQOcEAfjgCCZ%2F1U4wz6ZiC19maK%2FALTpM0gszHllp%2F8&X-Amz-Signature=0e78f50442e5248417a584f2265eeb16aa38986fbad6ac62cea4d91b6bf0c24a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
