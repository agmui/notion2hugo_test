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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q3BC7U4%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T035256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXyacC1w1zBzJvjqOv2tFyCLL7VAmKYSkLfPfBghf9SQIgM8rZH3K%2FFPqyqsQgXbJQ1F9OzJCdtzYKf0U6UNcoNP8qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvwMUCI0c9dPR7%2BKCrcAybY6i9aSqNsdYAM%2BiVSOvDW1odhixjlTy6dwj2zpmjJni0axLHHbGWb%2BqvpCVeI33sXahEOqK0JEqXiOF%2BPkMCzDKg0GSytaHAn0WXIQAaJbXk1pY32EMnjeUH7%2ByDfSrl7Gv7iLS7IAJFgAiy%2FQAQm3xQpLA%2B%2BiPeAhy1RUxUjtz%2FvFru6tEHSnVqMuY6a7c49AMquVG76uht6RuaUgB0Uj6mNak5vxBPSuD8kYai3wu6GE1Zg%2BU41slDYTdokLBDkmoS%2B2Zv5aUAZZPTVImi%2BMneiG4fBHtb7eXznCbo6gn7xOlQEIvvfOFcetDkaWSa5orYlrSAg%2FHV46LKE7gvTuDG23QovFftQ02olzuLOD77v5FA3zC3znmIkI0az%2FrJpC6nQfHq4LH7lmQ5NsBQD0loyFl87BbuPQNkbC8TvfWaEwX8a7C8LViUb5S1kXbIzZp27lRgdvmi%2FC0MYx6%2BvnY8iL56X5pSYp5%2BByeRNGXY382Va7zCTnOVFBK3jSkIZcgtBUsX7Xn5xq02oRcZ8xeke0GqTLt%2B4csmtc0xgm%2FTtR2O8olLaPfN2XKspgJ8suP5lfKzwBejnaNBW072JqQQ7NRSvtCCaEvxKwa6H2uYBKDbkcOnbOdD0ML%2F8wcMGOqUBhp6MbhVh0Zjkjab5d6wzK%2B%2FPvugEpKOfu2tbGR%2Fxz2m49exx0s9J4%2Bq%2BBBAUiIMV8ad3FisIdEcYisoChUAMzsyU8id%2F7Ci0oTbMDZfX2zs3%2B7zgZpiYq9pZReLclQGa9ldgpsyLYY%2BJd7u4X6sJHf1d1%2BIURjBpsmPAM5g8VpDvdzqiwEvVMdb4MBYlr69XAxQGakoEkEVxPSFJQqIC3h6It93I&X-Amz-Signature=d358115432f752be940389d49f42db90f2305c24f6b39964ee8304a8fa8ea220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQNGTE2J%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T035255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLpD8Frx3PWVWs8g2OpH%2BER6YukAIFDIO7tMU3%2BLBGVAIhAJevODsy5LeWfWHGOrdujfDFNebiwYwZ%2BH3tsaGoYkAVKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7mjVjNjeh5S%2B6W3Eq3AOTl7f72O4KYSjzNw3F2O1JwKzHFSsTgKCpqcq0ACdK%2BnUsVGXb5GAkMzgAbv7ew8H2x5eXtpQYq%2FV2h%2F%2FLeMPSDs1jyp90CwJi%2BYIAJb9ohjSWJVKbbhcOnq1CrEn5SmHCyDzQkiQ6xm0qUo1FEKo0SnVQrb8Y%2B9ws0s1ZXdkhArQXf9v0anYkkYD5jkgTvpW6NNRK8zwUrLo%2FpXfZFpDfbCQgvBizHoXpmLKkwv5gwgDBQtrV5gBjD2GyOOuiPLwB5f2orrc2oJaEvMFAsDlZ4ARzVFRnZhwCEST%2FMkY%2B67T40y%2Bhm1fxfVv79JH5%2BpB60jdrqBYoPlQs0hErSGVn8p48OB5v400B6FpAewrkBUl%2B3LzJzq95kFRz8U7E0XHpEATqIgL4OPfx1AlcGeBcrbuSIru7SID8CEsEmPD87RjJzlyAX2oTAAxGLLGBmzN1Z1YwAXK5z6vb99K%2BzfraSmZ1OD5cYFqFUPN%2B2ga%2FnoVvo9EDk24qajTA02yVLr7mL5MVGbq2IpgQokaN%2BhNAy%2Bv%2FoaZF1DH9x9bRUE%2F5xay69WH5jiVBIm5%2F6laA5QxrmuW4sQJxaNWg%2BvuS9u2dpOFr3Dy1ZY2HllclzxxfCEJ3vPU3NRCjfbSN0TCq%2FMHDBjqkAaBIIDkeZKcA6P4cJcu4WBcHBNvGRIUZYiY%2BxO%2B4%2Blm67AOIwRAem0PVXo6oViHz3ooicCCm%2FJBXiiCbpME9Jm0pl9E7rfVXszhvu5b2PjSrSiOKmB7C9kK9WfB6UXQPj3TuAVHOgYVEhi%2FsFhaZbpLn7MZMutfzcvKJVKb9S1l84ynu9GkJhaAbXmxsT%2FIi3FgJp14JnQ0uVoPV3gJR3DSfn0oo&X-Amz-Signature=4c025d364e13cf91ead716bf997ab74cdd94255082a77acdfbb2c9a83546efa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
