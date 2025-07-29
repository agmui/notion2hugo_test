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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXA7ZSUC%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIFyM%2BH0Y3aSJ6yAOB0IW8qeq2SleRHv8KS74MIcyNVY3AiBrRzdgQIv2LGJfL1OKnwc6uKRZ9ZAhTmQIMzMUvwaBTyqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpJmIFZTVjDQfqlV6KtwD0stuPQfC1LSxPkZnqKBAUKeVg%2BoBnU4BeQP25nk92r87B6nO3AhbZVgbQ46IfmNUKHv6v%2BONLO7r5xzIayD2ZquSLq%2BB0gOrmXPsmy0ELttJiBzThXWV2oBeZ4MJrfTYB9qrVGp9joeYDbWpK%2FGKdUOMQXMYu028yDKDLMc9h1bsWRx7wy6bmBjnchtlRmlp5XBWPLsBjBRQbJxL3P8cBk%2BSHxo0qb0O1NMjO%2FVx6EibeaNP8OKkRjhR7KAHSb1Cr8Qih5q2s8JO%2FmUKKUwRtfe%2BsOnTo5gHCSv5%2ByYyrS1Yn0MzFclqCMScwkYQ0zxWbc2kZCb72zv06SeLziSD14SXIGpHhubcRxTdpicDOokciRnFNtFZ731P57pGfUgwVY4m1o%2FEm8YqBsGn%2BEdXjm0ovf%2FMXTssCfBexAdM62T035bFkQi%2B%2Bgdwr1xOTVZHHq3WMZ3aEIMzK2nlr%2FilXzE6%2B2udEBdppOX8rLqBwKB4x9%2B1VoyrZk2gqBWcLD16jXv1HgzwZ%2BvCRvgy2OuWFa%2FU5j8NSIozINmij%2F7jCo4tMp3kLR%2FL6Pox9WCyF5Diq43e2afzTkMDYu%2BFAYScnmwGDLgBDtBWu5u2la7S6WImYRBlhrijAYP0JbEw3oOixAY6pgFWadOaPrWx9B%2BLcfXBUwl%2BN8CxCLxMJm4T6%2FCBR35R0h4QpYQVqDAYVC3GcUO%2BvJ3Bo0SVo4le8ZRXfB06td6hYhNxxj37k6Opd7NdxV66QOxFFDRmImxBkwWvBspNL%2BQ6l%2BC7GjC3AeYmJKJ%2B%2FbiAGKAuAcr2x3MqA3xJTNAAl1z3FzHzadN7Ta8kBnwrVHId9MWl8ipct%2BWib8FG4tPEmP8g8%2B2T&X-Amz-Signature=93d61723e708863bac0828a097851ed6c20d3e2af3527df2c057f09659b9e6a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AHJTR5H%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIF8D7NGdktNoJa6X92qyH0hciZoSTUCOP1UdiNcISAZxAiEA9NEmZTwwrURlVlPkVlieDYIoGAvJMo67tQtcQtCpEV0qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJTxu%2F%2Bn8Efr1MzrCrcA8WNDNFyxuioqwYr9D9tCsoq1TYloFxEl4SZbE5zB%2FUIXeW%2FGY9DYX%2F90mAbFlpNHSQEURX2onJvLFGagzgVhXsul8zeleLZKFk0N3NffOSJapprgGM8TmTSid9bI1QTwKpbVx0sPxmXV3ADW9x8c8XfakqAALdd%2B1MD7epOJDmcodL30GdH9LYnu1yY3kpdOmC8KtBYQfUlhEq%2FOtig7Pq%2BIzvsDpDd4q25mZzQ%2FL0twsvf0CKZEs4qMWpjkaa0qeIDIo0X%2B6QWbOZ%2BcwHSpeOb171lLmdfP4zMwq9xHSjusc71tQiz%2BjeFmIU6oYIcLNP9GpSVo%2FLnSFvF5j7lHJjYgPIamAQQOgVzC2%2BoijOwAHrI%2FFZ7eWvQ3ULgUiWNuh4JSU%2BanKVOJ3ay%2FOlTih09hUNzuJyXiw0kFTQ%2FpGKvqrtQtq2LCcHVN05Q8yTJrJYGICYxN6lX6qUCHdPDSNBe0vCFTqMzVC4PNnPwsxxpI2uzDt7MT2Ar1bKDNIWiC8wi%2BipX39ZgUcexccm75AYwgTUoGP48lY2NRFBrgXO1eU%2Bopnfcy%2Fkr2EcK%2B41OecSBLLIDCxfzCNM2rkha3W2XgzRq5f2Js3hcs6%2BkBCLqgK1pn%2BE9wVJAbesKMMaEosQGOqUB4p2WA%2FEF5fnA0%2B8PVJoeEPp4SqvqM3lASFqSKiWVYtdtFmpGHByfiN5PxMrVgFZbhgJ6V9oH9yzQE%2FSMRhsDeqzvsPi%2B2GOSroKLPpZdfpW%2BU32mvB4kp9uDmS3HqFuludsLSoMt4PbPX0ZThgj5MpShm0axGELL9PCFDMxxWWwFjGbuqhsxKxxxkGpwbum9oAba6haUBJO%2FPgzMuROqBbGlrDwO&X-Amz-Signature=3971bd570358201c6b44984cd7864f535df0d12853f5b5180948f27e062cfaf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
