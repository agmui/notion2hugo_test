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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L73I6IB%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCICeAFWVacE5mS8rluA3oDfytPqK0F0y03RX%2FRH%2BqsdOzAiEA3fsjvjsoz8onCMSS6VDsEA%2BnYwW6cBQomuS76s31icAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFPtASE2BR5KJwBO1ircA4n7ArezttKlrYFikT3hMqrvfYOsU1PWwWYSdfk5LsdHtRuIrX6Taohi1l8441MQLlA9wQ4TnMzwQxh03UH6QYnx7HuhytvuFHh1U1nPaXrOb6t7vwqt%2F7vl8cm7zyAL4JGz1E8KVun0NkprZ9PkqAPhQRCn63IaqBaMg%2BwUSU%2B%2FMdfYpmm8hlZvJhkj4bOoosS6DnDOma9v0QMU1ZY5TK10FhM%2B29GOkMOIk%2F0tNlGGO4iDVtE2SY12rlrkqXVpxQE3f6W6swzqHOiyNTUWGuIOegpIphfezbnpv7g4UpCSQg34tzPmRT8O6%2Fbec%2BEPGHxqy%2BUjrhV3x47oRa6Qp0Y2zpoToGteQ9A3daysnd%2Fqald2i7WV7YIDmvqS7JAJeOAYbfWTpvXim9tqAB1zdv2W%2B8y9VE%2F1NJSFCi9%2BkD%2BVEq4aCtn4qEPrx5J7jgNV4BjMOfwbG2WuW1ZlpKGKoEhTwneM2ALvemXd3lom6eZFSd9ECCrTqRQsHCvV%2B8EjSuhuDhyiqiTsswwEK%2Fk2OMl%2Bu9Js1tYOYZHYttrq8QFGnzy9RcqPsBgFDl2FFDqiDUwmbB648fa7NL7RR8rDip%2Bv2UwLXWPfRMN%2FzdGvBhYOLl5iPQQSzGaKFaZXMPaSvL0GOqUBJRfUJ%2FLfZBZxxzEc3o4NPeJuWveWCsAfTw5l5lKtdR5UJGq8%2FDYsW3dkzvUtqVHpkwz29Xyy3RNdPE5%2FbhpXpyaoll4fhv11FLve48vq4ww62vjligWKJcq1EuhSq0xJAmUXZb48NJ97zy52j5YeDfuJNRDIuXhaqjv5cPnZVGZxLxDyp3CQZBb8p2xmCbKpQ5z1Z44we1ShyoDsgeL2GVALQ1L2&X-Amz-Signature=85a81e22e8052abba6fc376ef775a7de0927540a48c896f2332a62dd64298f30&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOPPATPP%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIGvuNN2wmYQEuu7q1jQHDa13q4uyjP3jfGJjxyq7nCstAiA7K%2BAdsoux%2FyONYzFLRIYKmhvhUrBbHsvrbD%2B8ydFz7ir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMe53AYWsschBDCRIUKtwDEvudpASm1APmBkHd7Mvkas2acXh1Y9L8Yz%2FGo%2BAYl7qs7fKmyN%2BabVtNR5AOY4V3ipzBBAO0zmFvya2cssZj7OwzLMxV%2B7hrNj%2FpuLn6b0N9%2F1CWPznHoplSfOZL0MkxUiDxW%2Bg6kTr1AQ4ohYJeGrmlbrg%2Fy5B0b%2BbH3JB1jtE2zq3smDHFfGcgd%2FaAC9ZQkdZlDTNymgTzqXOQQYvm6jj%2F%2FzqdXm284FEV7MIXaHbeKmRCVNK0%2BwXeYuSU2sR95BwANvxkbxuejsLiiJZPq2dKUtp5%2BolYKW%2BACu2f%2BcWZHIetCecqGvAAl49NmR%2FSQ5aX8gVcaOpgOsxAaOODsKRG8Qo2avQ%2BoQ8lgcYQa8iUsa2cyIOHfECoANkzRh1p0fQbvjjDRRBPCj5UBW4y7tMul%2BvXKVyLoADIeG66fxG%2F%2BPtpftzxKDXEFfFqdfIw0N5toEvp67t0tZZcI9UcynZwgxJrOnZ9ZhGohGP7A980p56dbi15aq3nnywVtRBpSJOncBqL9e5RkcT6LL2h00BBAe%2BuN3aprpFSJdCecDqbo6Qk%2FTHpjDm1YIiccg6JpwVuGUKP0GerA7ak42qsTzJKW0YxaXEgdd86xVgv1YXFadZl1p5HDNCuS%2F0wzZK8vQY6pgGQdmJLm7B0vZLlFDpwbyvZJWOEZozY2eu0p3iaLIG7tdz%2F7LgFA7N6r5461kNB5nn9xG9K%2FmVvYOpu8Kd8PRdr2RPPrESWEoc4tmlpqFfl4hWIVmcKAe6cbSidhZUBAZqVOqrye2wvHFPb37IGlqND2OiLP7h6tMxAAwAkstUks2xyZAuIXDyXyCbMPHY%2B%2Baov%2FitluLPYQNjeW1b%2B1pkGUd9dDMxg&X-Amz-Signature=7371b567064feafba50cd7bda207c5c41594e9671f66e4f6bc91f50c68069ba8&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
