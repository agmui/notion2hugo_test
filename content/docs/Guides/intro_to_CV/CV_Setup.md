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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBK55AHH%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQD7UQox%2Fcj0Pq%2F2WMsgo8O80mIqplHTDS6SGLHBsFLw%2BwIgDMjDN9d3Ux4M9TOzKs69US3uceDpHL2ClQQ4m43Mgw4q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDIBD3HmA0YZy2Yr4xyrcA52nMUaU19vGn1QbcgAzJ7%2Fp4%2FKZGRMztQfrqBTfae5CogLnBFNG3UXZoOKPcE3XImfKnZW24LuQecjRPD4wqr16%2FbU7iqqLNbjLj0UjJxey2Tz%2FlYaMJlJhY5tABzrONlVaK7TZl0PerFhyJzHXbLFBfaazcjk6800npZ9ML%2FUEhasQUYevDR%2FEGFQKydiPFRwmPBMS3nBx1WDNl9w7vXAGiO8YJtMF3lHHscilFL7Rn7gDN2zmn68VOCZdAFP8GKsEAQKnjX%2BywPjDdRFBT%2Bv2HW2j3x%2FJJdQ%2FeAFWQzeVW0mCRAb26nzyJV%2BT63791ca8dRHKka6kGep9JLZ2pZ6UkAAf6hXt%2F33l7Lh%2FtzscoyekmaBqkvqsxzLuQi85315bLCHPDpQAQ8K0BC0saHfK%2FQUr9oIgivudKsoFbxhHiulCzQm%2BhxqJ0D9Pu881y5qjPhCQiwrDcMFJUOZEc2u5kwjpWxSGwqbSrb4dddWuAiKKcdj3EcQd6TeAdt05iKXLMkQk7vSTU%2BohLOG7eAYpc7eg%2Bp0diG0D%2FUWU2AO9RtOzw4duJiJCLtL841zDDHh0eSB%2FjC8S5MpY3iyNI1Cba%2BNeV1lYsWHRNuD6a3ZQJyFjabvVnqqS40U7MLX19sIGOqUBY3TDriaWFJ9mchvIkgg9IPwfORmgB846rrZfG%2FhGuS7%2FCEXH591sPq41vXUc3W7Z5Sq3t4g5clcxVSQ1OFO0ySnnLeBqsC5onC%2FcQtIC%2FkQr4nsjvkK3Ds%2FZInway9i4p5iWH0o%2By0uNcuxWhj9w3kQsmWb7z54G6pH4qKIZId2AiP5jdZcrnE9wrEsSDaiDVex0O7Ijx%2FSi4maB40xCh3G%2Bzsc2&X-Amz-Signature=9ec23c35c7464237e82a87519a8aea0f6163e38c9fe9350f800fe1d2c6755f3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ2JU2EO%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIE56qQZL0OIAfAq3LI8Phgp7D4yuOI7zVIC9erCS2tKgAiEAo0boI6Oie5RMR5sozZ96Ysiq%2Fxt%2BqPdlLUiTNzd4buUq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDP0m%2Fr0rdFXrQrz%2FFyrcAzDpaTv77lUIt5BSjTZXi69W4iqnSgU57%2Frkvb2vd3wqBgbRW2UkMWDuooLMnWe5OvSngKelp2igrs4JYpvOr%2B7N4gDb8%2FQjs55gC%2BgdAaR09BZphDAgZ1sC7T5T3okP3Gw4rBMX1lnFwVRwupsQOKVhf1Q2jxHSuH3pTPSY4uAtaWOcBtGfYpMDru%2F5odNjC2zw7R6hinR4ouWatFD2ZhBBHTH29qeQXXoTxqiwiP%2FOz7PihlnJITxUsoSymeNQpcn%2BTesggQAZWP%2FJohf9%2BAvc%2BjiCGLZeoZqjywJm5xKna8ptSerG3VdOQzVP0dZA4E2OQ2UpoQb4KLguXOqEULqRWPhHA5jc6KFBFIAb%2BVZwpxQsFzIIq6kpQiAGjcO%2F1AxflAtB9Merp0CF5g1iedPX4NwgnEZ%2BlLm1EHFaPBHUYaFwVHopus%2BFfUWqRunjKPL%2BRYRav%2Focb2CE1tf8w4S1fAMVTykVzYlqlcK6RFcLewfd2F0%2BmMTviNv%2BIuRxbKw8TSnOmsg1sZ%2B2mp4xxnbDEgwQRoGUUSJOOBRpDEHMndjxERKoxwkBRA2KDkIQgEAaB5GglqnHoWgZWmpeNCYoY3rnc3EKqZTb3AU645x6v8XIsHwFkAERpu51MNz09sIGOqUBau6TdDUeCtcBnoLdRAA3r3GP5YAPttq0hdSRDfSq4EtLsgIrf2L0UuHnTuVrbFj9SqY6LXJmolnxJWugE5%2BeDz8E6OR7SSkvSrYCPHIKm7FH8IScG3nXzoklPjc2zdI6fKnnka4ME8pAONA7XIbbrueobozGr9HSyMXqGlwblj%2FORX1gCE0%2Buy5zNW7M1R7LphzmU7W7rKh%2BI2xk4gSAgkgb3hHF&X-Amz-Signature=d453c897c16be76086764125b3ed97fd92788d8fd5d661745c699272e5d8f0aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
