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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PNLCML6%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDPPnHyQscx3q4RrcAkzH1pECpAizjXGc3KR7fEONbLXQIhAKX%2BdI180AG4lujb93JKihUrsFWv2%2FT3XArV0NPuZ7lGKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydYcS9ZMmlytc8mq8q3ANPBcahHCXasEzA74OuVlAPMkNXYNTjDOZtAtBf1HX04AoXTQFH2P0U7UyTE2fmmv4agbv4WWdL0YElJ0Ho5kdoJ4r1vNs5D4YBlWU36Oi2diGvNWkoozPt8XnSezeW1cp3GCDeUjuwZM3Dee1qxaBk2MgNHCV8DAQ8%2F%2B8B3rl4dAq6ext7sH36T%2FmpGUoInd%2FfckfGEDRfP6jXICFOfs6pcO%2BDqLbqyD0YmxOva4F9uvXm0S1Y5G7bInxefTCRSiGO1f002P67HPPHugcqdNxY8exOcesETo%2Bd%2BVmg%2F1mPIwKgwJOS1UwrGbAskmN%2BfVDEE0I5NFCH4IV%2F2Omv%2BYj7O%2FroVFP5TWediqgWAsAx%2BUVXJ9aLWXsY5fKwof4qDytyqRKK%2BuywJIB6HuQBRTgjb%2F3YYyNwLyjymG6H%2FW%2BF4pfWo9uxu8Ivr8qKUO5uChkDypBZmGM%2B1BtX%2BlEzSynEH%2BIgyx73sM3pLVcLCogkpuVCG6yjV5U4qzw4zkRyImT0yGhGWEyyhMqRWqM6LUnMlGhUO3Ckjsc7%2FIismnO9g0htM%2BQZFynD79GF4GSY7%2FG5k%2FQoGGlW4gZ5jbwF6U8zMli8Vgh46h3GMFI3p2DUdGvvEgv1SpuElw0lATDozP%2B%2BBjqkAZ6W51CQzZpDj0fxVq7k7ciPxUpsQfcBvokX1xh%2Bldha6yhJkD0g8ZibVVkxjK78pVi%2FNFHHWrRDPJG1mSBLzlBoC24cN8uKgdV8Vvu0p%2FCK4A0RK%2BO79z3fwy0OPYjs6pWSiLwUSRtktNgtrzj%2FIt3r2sioSW5Aa4rhjEdPdngpdCbq5ys0EfSsALbbEKOZ2frmudUIGBHDUNxfiA6iucofsLu2&X-Amz-Signature=98af5bdf7f021de51aed80002c78b61988985e2cc83c82629ecbcee611476794&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZJRL5BB%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQC0fIszIDQfAmhqsa%2Byaf0nGh%2BpMry%2BrZWJYOsreGlPPwIgXxvtk1mBLCbHKNUx6RsA6XyjJlg2SjGbi%2BmV4HxjJI4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFV2DeS1YeQy0y4xWircAwYili6NmyvbKjgXUFDey4TJt73%2FDGsfvzbxCppHW7ZWCaY1C0efvmk4WpB0rSrm7k%2Bu89Da8GWHyRESfB3DfSOHI%2Bv%2Bp0i2z%2Bh7wWm7DU%2FeEYfpHbaJgfXVlJY9IjxuN8RkkotE9PEniUpWK1z7aaOLU3c%2BBiJZXLDsbwCmCyuRpe3wybbOhjMLR%2Fe0qh5Hu22BVeuLWnuaM%2BEaRYGMtdoUybhtSGAatdqFKbUUCuTW1EuZ9f%2FQFOx%2BLk1HoOHJJf6uLvcKqQSICmHEq4W4wnpIcOMP%2BAteJjOQVklaXS8T5C7KdOP6Lv3vyu05WHq0AQFMtAhqFVhS6bAPHhRKUhoI1O3w%2BBG2YcfwyNtYJkEzm%2Fshvq54%2FyAV%2BrOuwuB8VESEtP19YoJgH4Ac9A%2F6M77l72N0kVxi37VsZVTBiFaAvkqTCZjoqumuuZxquLXjRncRz38dYUlPjCQ99VCbAyluZxpMeOpC2tmxjnVQTICcf9Y1ZIjeVlbBZ21ZtUaQx4iiJapCdlHngbAA0sPYGMT7h2%2FMPcaZw6MDkLkSl8bzM1MbZjVCw3C0%2FQzcD1fPSWb6jCcsDrkUKoxIoiBufBG6qYbICeQeFglaweHOtKiGcioLUK4LQ0wnJ%2ByDMMTM%2F74GOqUBBN7r3nOB9g5TQp5wQJZ9uP8eJDmNRX8KSLRKy8SUsSOUcigkEVFo6pr2VkvnWIyIE1S1aFq1K5kkD%2Ffr%2BC64Qc40Rdsw2v%2Bz3pN5O%2F0xJiE7696IWdeSUxPQ0IleNp4haQHwBVYOoNdhKvHhEG3qrWyX7a9DPrXi7TxvcrsnxXvmKRINHE3T4aOJqSlBntvf4WXYQcqOd6d1fjNv%2FyZI7oz0Lyms&X-Amz-Signature=364f24f2b9821451bb9276823a003e88a973eaa28ceae331530eee9b161c6f27&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
