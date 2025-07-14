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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AG36GWP%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIA109auqKtpqsnTHEpnuKh4VbaTG61tpHOWg9h%2BCyA%2F%2BAiEA7OLPULxrTCrJ66nvp5nWBZzZpem9bC%2Buq4yPAQkTAvwq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDF%2F%2FHdWV4vpz4r6HaCrcAyUlHWCoipaz2TOeUQ%2FJR3oFhP2TE8TZaa%2FGYH32v87GP4BDHZRhsWgXqBT4s0dSwtizP4rHj7K%2BrHgEI2ue5JvytFhOypw15n9a9fLKU%2FQHAcCRMaugGO7WEZOXwRWSV%2FP6M9Lcwko1O5YEtbUjDrQ%2Fxa13pXRuoyEhfK3vX8H2QQktDXPVw0SclZV4t9EjvAyB3tNerMdBciuDzEEjGzCDPnOvIHp8k1wgJKUcJD%2Fsg%2BkwD9F1C7%2B1lHVS%2BsdlXIfUPTP%2FRR3iOCUDjbbaFl1JjN%2BYZvp9FRTh2%2FOaDJhLp%2BBqpz5ztSaCbVYhvjkLsl9l7QhTZGQy1mrjW1OECwY96tp1TEdgP5tAl%2FBlQa%2BlrQu%2BY9pFyN00p%2BfUEQ0JeSOMzgeLWvl0R7z8wZ2Z7%2BKnNzNw08h%2B3%2BY7X522SmwWHq6iR%2BHfpDRDk4BmhU5Bgv%2Be3w4ZTlslq0pZh1N20Bntbjo17KycUpW78cYVOy4I7wTLu78AxWrcXy7FHgjAkcuEWvCJIFMXkM2VXv2kW1A38%2BWDuVyOzR75QR%2B%2BqhO%2FGZsFsGq9QrPZ9nTLWiwZE6JMuT5n355Q68ip4l2hHXakhJp3Ixd8vwmJdhAcqNM3q3aPHs88YGeL%2FsDTMKPM0cMGOqUB5NEfu4MPb%2BAPrZ1Jitulagi4nrA14IsvMHACW8W2YEtU175e8ZCojy5FFFoM%2Fkx2%2Ber942a6VY0cw8k9mmh7Ek0q7%2F%2B%2F5S%2FaQGBCVVqtikOJrbQYpoPdh85Elvir6jMSsNIE6sIWCweaYjpVA5bT%2BW2A1x2E74cOwxPrIQlxafdJ6VrPUyPn1wenz72jdiw0IkDBVys3Pfvy3qdsutqJPn2dSFEX&X-Amz-Signature=31770dc522fffb53d4cbbed7b2c857deb1e315e5943d4eed3a1ef9722d1fd368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJKQ4DSW%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIHu7IgOMFO1v7tpy7tJao%2FjZqGcjJ48RqQg%2FKHkqtFXAAiEAhsbxLOI3b2qS5tLMkl2Mhi59cS%2FTRxrkelsnGlbkOKYq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDIV6iDUe8gSIBiN99ircA8b%2F1zWdm8cUskpWbv2wNEDtBrjet9q6I0EvK2AbIdZfcxkvwsrAZ0Vv0GWadYISmzoM6BuqJm%2Ftu%2FY9X7VlFU3ZQjIqyPMQPSAZjHmc8kJZYXkVFRevu03LdTLQDzMx4YfUJEzHSLJzkYcnmA2ZIwJHO4uiZHJmfBGGdVKmnOt%2B0jeUW4rvPTkew1cLIR8vTtpkQtSdwnRBwf3zjv%2B15cghAb7Hq7Te6HKlwtCONDIyPcAvUo8evoxFiU6koZNHHMY8eOWd5xmPPy5SMqFqdLanYTDVzXAkv3Uel1tLWpDwzUbHp%2FjxvDgtgkY%2FfH%2FM%2Bu9qLAsG%2BZQy23sePxcWA8kxy038BgU9FEbWfbsdswtWV%2FCzwRPizUvRNNIRC%2BqCzhr07XccyG3ka3mkslEDOGmWwgVQr%2Fpb%2Be%2BY75JyWCJDAW6n6Jl1LjIcTuid4THZ9vOr2aZD1XiXjaI4kwBkU234mvccVTW9DdlsibR5N80yMF9x1LukUeYuCCICIwjxZF1LVcSi9hmVVf9EygR0RhrCAYWNSTqpR7drZb9AYjFZudXhJCWEMg8wfRsQNXbOvYm3oseB0qU45SeVpbAssPU8247nmbCL7%2Bab07VUfoooA2XZ3mCiB9%2FkJ6ejMMPL0cMGOqUBwEVf%2BDo8aKH5Due%2FPcm%2B%2F8PPM5PFS3dBK6ISEeGkeSZr6QxlhV%2FKZZkfzqypzg0KCA0jy2QZZJCURuRjUKAjVv7AKPKcUPT9rNByBo8GgZ9oVHeeelBGjsdhVvT6ayLBAdieYlFz3uLlwzm5T3hCLznwOGkPsIvJQl9p7TkRbW8%2BWc%2BgRg4Bp0baV1fN091sCjTeXyrsa%2FME7UNWMfgPxOkViFOM&X-Amz-Signature=a9d9b0558eccb9b114a2eac7828c564d6528c5db4c136e2bfe2d50cef128d594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
