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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRBL2KEE%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCx%2B9G8v4zJLUIR0lss%2BmSR2mKdsQls8Cu0%2BvkLeimqzAIhAPuBlBA5ENzVlS53C7Oh%2FQNqqogiCirljuM6CfB%2BQSlJKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqpSPI6TJuD2KxrC0q3AMRJ5Y5%2Fp564kG7E6bC1NnChJNpiCxJvINRX4h50i7nOPstRG6TNKjPMI%2BhZF3XkWasQs%2BOwqpl7z3FDS5XAqRdk03mYCvE%2FpUz%2FsAsKc%2BlszM9DO2ku4w201mpoOX%2F6L6Yq%2BFcgq9m6ZwOgd9VW6n41OmyRZ%2FAEqaShpqCgntlvl%2B8mH1%2Bu79rz0hjyAMQRK6qK%2BUDfiGY%2BSCQWL7iW%2BK2e7B1YcYiMztM7tuNI9duofr3k0RKdhQhJTYUKu83old5IpTuEDuGXMZxzAjDhXx3%2BmD%2B%2BmtRv5CHU7D90BQBWxvlVDrRDKB%2B8wsxrhR3wRPvQnw7RcCQkAaf3l6rYVet1Rlic6z%2B%2BaV8hb2hwKw07UjpO9jjxiAdcW9AiNtu2rejA0OkvtZ9mm1LPAWcV0Ixwbq6q%2Fx3QzaisMGdFmO3FIoPm20OFkzuqdb4Lu8RdmRbD%2BaM9S%2BB%2F48a8edbn80TPQvXFAFrI2BwBuNGF0SaZWHBNW4jHV7s2NqpNrXlHrW2sbJHP%2FCdYIc1988d%2BEikp5y9Aff6hu%2BSGID0b8MPzvTU0U0TI6RMA5ncc%2BlENFYo4hxAINjwbjaRSPH0rTohtbBiAK9yRQ3YZjf3KkkURtUzUAJSaPT%2B4kSAwjDzr%2BTBBjqkAYmBkHLuG3LdA10vl3prcO2GYihVbIGQkFtsAYhpZvJIH7cUxKMBMa18W9v%2BnmrluyOcHjzJMrO%2BaI9spG3UDE22UlV9NEPfCLyyZukvR36lk%2FictHNDp3mgORsPwQaiatyVwhPPrh2ERvTfvR61fLCSruh1txe3De8E41%2FIHmYr4MVrUIrvUnZFt3%2Bx97Zn6do0ZZvR5drDuFhaj4ko6Q0uQiOZ&X-Amz-Signature=c5be33e98bbba3eba5cfd00d89e6ba914ff169bd839441509dd5915e9fabc9a4&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL3ZRVY2%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiCQ%2FNPrYUI9qpyeP%2BGQqEr3Ew2pXc1pL9C1AOlyRdNAiEAir0TSMRwqaeLJbkct36DkRaK7HkJywnacCPU%2FWT1ctwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPeyQ51%2F159XdBlypSrcA%2FGyaFiassjxyxwKq%2BZokfkjE66lagrhAvee4HQgpMDV3DZqMNoQDmE9m7QWgPg30SObQvNNxbXh2%2F17UswiZE90i1%2FUyIGr34%2FAblRa6THbOgCXldP3GFI4ZGApByM9uvLPxRoJ73GHwybrkbKckwS1aBvLJP9bCyJeMkio7atTGBFO7IPxKqwDRr17T%2FVWKvwMUNPhnGTNu%2FqL%2Bl9Qyx8UQq9UnNr3rymfltJpp7SIOzNTRdOnSg62eKFj6%2FO%2FZs3Ev1ZsUDbgsNPQ91kzT5NhTaJvXFhQsqO3Hwi0YDSKozRciCFjqZV0dGtOJMFSGWfW8aNZ23%2F63cvwUEaMaKu4ZtGXlgVh5K6Vb%2ByF1TVjF2B%2FI4zG2wVCtVSUv1L5kN50DK%2FfKM7BV%2BdGAJ0Zl2cL40tlvy1krs0Qh5w%2BkI15sGrNVgr3KZxsSnYJcDauzG3N14YLlwQq8xkotAYsxdJdK3tkdj%2Bn%2B5fAjhr7dEahI%2FEDOHJD7IG4MdgccnZqQkKCNuqobGMKVPCGGQkrtKhqF3BZ0y7AQQCEBL7VYGOT%2FsFyH62u8rY6%2BmAG7C2WyZ6b0lsntIPVzKYL59QiLLNGR5enNigNLGhOqp4l6Z1XpOHkoLlR%2FAjIJYgzMPKu5MEGOqUBaFshY07krcDtSxUeLvt9TXJdLB6chypc4gLn%2F7oXMYoO0wnjCfK2ONS1rifVKZIxK6cfyEmopIrmAXdK%2BkQToxVYRXGYmBDCFurzl%2F6cSChwrk4%2FC2X3h1gL1auVSjrp7%2BGz82bqoOI%2FTlxsfRaSAeZBo0xgTYZvoQEfcd6TjZa6%2BKcVAvMMNOoJHkzlCIKK9cDEG7J9dKVvus%2BmBDRjJLacilbK&X-Amz-Signature=68d2351a98cce5ece787ef5c1338ee9c5d92b5be99d70d194dd3c078ae05db3c&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
