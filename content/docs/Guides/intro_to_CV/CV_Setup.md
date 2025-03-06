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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH2Q3Z25%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDudUz6cNUQdkScKoAU11fWts29utSE4EeLMT76cngxrAIgUTDoCq5CQnseaV48c0YShcQ6gggC5JHLz51djiZWnRIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDK7icXPxpZ5wurWfmircAwP6Ho%2FsKjRM2QQy3qBTlNnyQOxMy0JlbAikVTWwDNAZe5SP3nhDgP0fMhDNDF4L5%2BY%2BZ%2FF7llQ7jp3kqPOKnYCVyXsPNbL5wWaYmv03rpSlXOZF7azDA8v15ld%2BXQZ3gVp%2F6neCY6eV%2BQ2EYOMg%2FSbga2S91qY%2F2w1UGt19k0GU6ZRc7C7QOktc%2BrapwIeLy9B1M0YS2Ev2cbx9hHT2J5w0kHNfrnx6ugRCVViawCdmh93O8Upuwj4b1UIjwlaOHKHi%2FMijHPps%2FmoI0%2FtsVLDcLNXbEVwq%2Bsw9R3z%2Fd7cFyYScsvmKylR088ez6mPmHxKQE0axHqFkRQXsP%2B%2B7Mmu5hMQZPr5slvScdomHoRnk%2BpmdAHDxzd2PWfiM8zeuTjpU48zm8xJ0rE%2FRd5SsxHqcAZQFZjCHfku1AlNesfLYS9gpwTVdvg5l%2BjEHRyMIDsqgwd9uVmfQUQ4qYCH3uxwHBtbWbKxSRs%2F%2BYgwb1jsbkv7TNAaR6HwgSBUHwTFfb4xpVAniO8bTrDUA9R0UchoxkN8K9jxYsV4rRZTk8Ig5%2B0qXA2VlVRgoC9JHpjCMUD82iyOdjUiWN9o%2FXo4dk50y68ibYMZ%2BgWC%2FJ9AmYHeEG291IK7Gb776i7l8MPHPpr4GOqUBcjfl1r%2FM1kZ4tfDc1qGa5Xik4inCyQm67eWt7XpTITR442Kpn1tCVAJSTBPSGI7kyNtMVN2sxJcX0b9tvXJVqgnPYvwA45FTThSPtBcxOwoaKPnJViIUwSKJ1wNzkcCba%2F5rddQ4uo%2FmVJNSr7%2FN3M%2FRiJYdiJA%2BxgR6XmX7CLQ3R2GWK%2BmbLmO6NgAf3ujNjIBF2JytlUm9TOo6v5NInRojPUbA&X-Amz-Signature=6fff8bcd2dfeffc175db72f159f66f4435d4f3bd569b8ba8cf67caa714fa3b0b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLP7IUYO%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5nMJqFL8rpgci98EbYouVXFCCHF1Y0Ve9rQa5RknvkQIhANaWggJycPO1kMWgnBD7SGdh1EoredWtrv%2FqLbHO05tLKv8DCC8QABoMNjM3NDIzMTgzODA1IgwJz7cOOvRxQ0179aIq3ANR%2BO7p4o%2FBtWMRePBJSCYz3pVfoVIWHRbOI2G62BxBZQiLH16OZ88AThENdZFD4%2Bt4rXf39jLiVHq%2FrRB1ES2kW1VhxGUd03CsJ9nW5DhK4cbG05h%2FHuWx3p6ac3PDv%2FcWPB73nbNU9QzZEvDqUNKpv4RAK3dmL%2FNZsAQRaqzNo239PZEWSJR8NyT2kDnwAf7GRbGBPc76TEeaPmca1f9OmPn8qkiPVq1G6exKbg68UkLCqvgCDoz4TIqCjh24sLZbPsU2T%2B6gxqJVGDvnVmpwnnjDbRLF1sNtXWe6tsAoFOEFDzZLINBqFRLGKHuQ%2F97WCLYzwcgO3IGz7vnOO%2BITDb1vWAjM8v%2FNOzlLRBBbF7KsxEDF5KqlWzYXJTdarIwvaFFUrODbbVG0CmqX4yRHfpWYMmXSfzZF5tWl0e%2BcOej129eoyakbI2dpCjH2o90HOEXpDneA3mcgKyEYqXBS4%2FxLK6lbMzLqripFzDLNHGPwAUe9w%2BIvH%2Fr17ZrryMbeizNodL6EWmbEzLHIsPZ0YtfOhGgM8r1WfYd916O1hYJExiQ6AYpPdlYpNCSeA2Qf50pN1dXT3uWNuIvv8KQjDo19YBbuL2mxwCAfU1I4QFnRD%2Bzx3MIQ1sS0KTDZz6a%2BBjqkAbQW0%2BnFtcG5h91P7sJJJiKXZ1w%2B9keUf49TYgnMD5qJ9x%2FmGZmRXYMUhIBKqvy4NocDHmBC8iLRSBqBldBXeLeQpvaDl9RmEtE5JRuyVc5Hp4PgSd2vXk4RHJm7TE8LCxrusgfm3U13z3TBDua57NG35d108KDHnAtUIRtYvrcR3LlDvvV9snWWlU4E0l5b47DGWYyENW5bzx0TrgMwPm%2FJ7Cro&X-Amz-Signature=dbfe2db8d52e0b82937b2907fd8f06ba1329e6fd56f9288aedd79b323f6cee9d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
