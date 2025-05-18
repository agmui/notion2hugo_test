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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF65H4Y6%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGK%2F1qU0z6PR0An2szpWA4mKF6LEsZxPYBf272VDh6x5AiAZoqjHt9qf3giOZrhX98KRF%2FEeDTmHYcHZD9mGmYERACr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMzm8KsnzTFKGelOQnKtwDafNdygHyWE1SPlojx9iSpvNo%2Bkm9jickq%2Bu8djYJcOJOQESig9c5qa3R5C5A%2BrOzSJMsdkege1WLFNZjtj2BMhrXG2lx5XwtpAFBUwAZUaD%2BGb%2Frj3DuG4xbpcCqkSASLG66HjIZqFSnh7JcmAiIRPBiim0v%2FWql180r6k3GvKg7U3XhcfpR%2BmRy5FSh7WZXTA6D3FkojZyP1bCYq0aszc3gs%2B7fQLrWce2DZ1O9K7m1Q4UC0d8Rqk%2BJwj34DOI9NBooo6sbvWHU%2FTGT96ltYsQFGz7VeHR0B8t670NozcDSfUKr3HPaZWT1loEe4zPQdmbsBRHdv%2BTS0oEqHG95p7GX8CBozJo7Az3B7MxX355oywdxSVbf3yjppbjVX%2BGGM0s11ykLNmeXkey5EFm4NCe0Om4ehMTgreTmI5gV3HfD9xPN2dCdx4pF2hswwd2LLw5uQRBvTTBO0VadPjoFnuC5LlwMBAHhm9%2BWUYBdcMDoowymIC6XH7sd6C%2BhJXQrtsu%2FYY%2FVQwkU6VtfMG4BQwC9xMXtPD%2BZuPD8vzvYSzcq%2BxRGI9teO6RmSBntoSq2E%2FNK0A3TgcG34Fk8TGikwpTkHb41g6Dtt%2BP%2BVOpkN486qsKkSn1Y%2BUi8nScwgsKowQY6pgEy01QlZ683RFEEtQCU7n74nFRgxzKSciO%2F2y6cMFH0BY22o1oJbReXzM2d7ukigzQ3Z5qWigy1E3xE5bCgi%2BmR8wddbaXeqyJ%2F2uHT1vBgSLO5MEanN2icH2JOzT4tVy72cPLb5AkrAcr61n04WOhYzvBSWSEAbNT%2FeZ3N2D4p1dq0M5%2FxrUDBaG%2FQtzhPZHkdvQi6e8Mg9wTT8dpmuw15Xr573Vn8&X-Amz-Signature=a431b735607b9b464729cc64401f8698f3eac5ab862f4e8321e321a16859ff0e&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VSNZF4D%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4sOsssORnW%2B0qqDS%2BediIPPHtUeJBVM0vG7PKo4S2AAiAbxBpCkRXLvIfkQRrRasEyA2Oo2y5jlildjGHEmZaqiyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMwHLydyqmHMt9hd1oKtwDHZNibkhDo6LREOzcQCmS5PoP3tNZ19D3P7mOq6zaigUISkNJosRY2S791qvYa7H3fQAFzXGOxgT5eTQ5ZAfCGPcPboSMgtatTMbDSB46frUnq%2BCII2lg4Lmv1mTLIU%2FtTBDAMZIgE%2F%2BoeHfI5MwqkYaNOpE9qmRpZ3H8IzRwq0kwwyJFPO8EqsCVJK8devWoNaJlKe6xvdDUoY1%2BR0MfjzGIJYpyjStEzB89XEipwsQSx0sk%2Bg1xTvT1qlba%2Bk2joeYRGS8VyDbHMQ9zM8o7EWIPz6QgKcVg6Y3yzqkFxtB9NuQeD%2BxB4BKr29b3cdxIAAosH50dGvmT5QqTeKcClDtrpyAFWqjNP1umizxEakkPUFbmIAGllvheK4ySD9G1beCx3YtXLArytQ3sBnesm5gKRb9M1ArWVhN8zft259d8vP4HL8AA3B%2Fx1WXFIzOlLBm%2BVeFhu2sCB649fCEgHSaWCYxtCbQFAzzzsbM1LyKqOiJbyCU9j05mdW1e4SNRw62i2zoguRDro6MfxE1wItSPArd6DHd3ZFdtVD0KlWEtEO5B79RJS%2BLAV6lETaNlsmRabYRyT%2BuH3H1T3%2ByW7caqRfcDyYMLEVhAU6%2BbZSSpGDpAFkplrFtWrMww08GowQY6pgGNclqF%2B7f%2Bk7yUly0tl7Zb6qp6SMvELQ%2FRt64oCsmWKc23tN%2BK9IALUqWPeirLk0oACfLKBYnU04Sn%2B8t414ENUctPX0XduBP4CZ1jngctUOVClnTT21d9yKW7diJso7aYTznA%2B7JiYemTrji45S5XMODRGufv5SeeE27XnFAaxcUKWgQyooJAWVQTxooUjjJ1QS5e0LgIMK%2BjSowAEWvmi2pZDdkM&X-Amz-Signature=b6f50381c07563fbb2053766587265b57ed145a0e88b19b84045846e8128c9bb&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
