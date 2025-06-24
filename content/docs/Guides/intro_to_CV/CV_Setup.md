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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKKR3X2H%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIDCmlvOaxpeLNGtN1UwVKw1RQk6DU6PdDUl78gMJtV6xAiEA7t%2BUBGIHWZR7fiFsFQbLl43QbyIQiTyo%2Bg52ibMlx%2BYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKRvqD1AWcAN4nN9PyrcA1cLYstXZZ%2BL%2FGCN0zyId%2FQUsx3bAXDaYxzW%2BU6EXV5hWO9OC1osM0CMe0mJVH%2BbFblxImBhHiAFp%2ByjS6mHZXK2SCCh0hAVCBC%2FO3WjQR68%2BMYvsFfraQLQtFPq6CoDIwHHAEsbq9P1medHsxW2e5AoLpE0B0Jf7%2FgmryqgyZMHSnwt3%2FP6vSFfSLWDJ4QLtLcqiTil%2BJLqm9iL3UXefb0ZmDRKAClK3KyhIWHWPMWKZmJCOEnTDF17IN4HGP2WghZ1i1N6334GQtWt5Y1AOARVo42GPW%2Fcwl8t7eVcCN6XrRKxg%2BEMNW4m1WrkKL%2Bz%2Bl8LgA6B3T585fgZgsh7Qv4iQGxmNOYW%2FwU8tjCZLKa8Axl3FbuRuuARnHn%2FXk%2BbD17RCqgvALqpst4aJSaYK15OpZDmDDdiq8xfddk%2BJYQMs5tX0qZd485X1SuV0Ts6847yRD0ExOz6kkIYI%2FAoCHsdQ5Wye%2FH1WigfdnmoWwtTp5V2S%2B5WNugqNMlSm%2BaBtRcQ%2BLSAcfzmgg3tRyo0zWUchl0C7nfUSoWxCoHItOiZ5cU%2BQRpX%2Bpk3G5sMrSqBRvgPnxZyqR1WQvxbRpG5Kux2inkEgaYIhquSW3dfvAPiDWSCeup55aQEgfLQMNKi6sIGOqUB8t1cJE5oNiJLCio%2BKPg55JivySIRx1O95r8xOTrR%2B%2BykjsLKRFSlfd5X58oS%2BtcFYw7MHEuoUZd%2FeSdQ5DbZQIqwmAZic2LG%2FMyEUmxSxfo1CY%2BZ1%2FKF%2BwzU9tPV0MSRvl0UEAWVU81V%2F3JPclHpPl8NKu6qbjspap2E0xQMKIFPYEOSjay%2FYfOw1j3SUkjeRA1xzfYGt%2Fx3k5p05RGAz4jGkYns&X-Amz-Signature=fc37770d28922b0f9b2043ca71bf9fd812df8e2ca4c432473be4635b99a4e30c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622PPX2JO%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCm3LiJ8v%2FlI9t9%2FwTnW9moooqasLKLhC4nEnAGC%2FaqbgIhANcP2i1CYUYtvx8QMqKfai6LU%2FnaRR%2Fb8dBhfy%2ByC9%2FJKv8DCC0QABoMNjM3NDIzMTgzODA1Igwe1%2F47kR2kDQ4AA50q3AO6kvthFzpp1O5C%2B%2BuUG%2BATxuCrKe9bXXLPQ3V%2B3Y5kDBM4XmhScHyZadcLGyylpYv5zEy4OeZQqqWfpdQ2ersvA5C5cGsG%2F5JJYEcDrMmPTKBV98H2CqigMjKglR74lfgHx6lcjMqt5NM7qO2uc2s9Bu5R6nHP9tcEGHX7dFrTMX3vyagbrFv1rXl%2FTTI%2BYvCKXriOW6bGQLLMoa1RFCnPV4esu%2FIs1tWvnRUmsuCGqjyUvalSb8FIFyw0r5GeA8t4VODUDHAP0h93FVGBaf2CmCYeUAXYHjJmWHcuFJdCu825YWL%2FpTkEUPMh9VjtJPpp6Sss7J2GMhbce0itKCUdsYjPQ%2B9iOrScHUVU5385sMaVga1%2BpE8aLdcoLdhSJCu%2BC79dC6Wz8VJdOJm%2FB6GWDsTSFSqUbRfCzivebFPluL1TU2edRNN945CAs6nFTBZNhfCz8LrgYmFqIo3mpJh%2BQF1wo8CfkjPpVSOfNYFfnH4dEjgqZ%2B7LzhBj8GQ0Fw0F4zH%2Bcc53LnRR63B6%2Fuil4hNBsmcsxhJQwNHEz36tUS06AREzGn76b4FzDomtJ%2Fd2YlJk5o0i%2FS7%2FNcrIDw9B4RF3DA851HR35rbQth%2BZfeRbUoDb1XN%2FK3JWZDDGourCBjqkAfTbJXrkCQ%2F7FTTrnTBQZNsH8GkuKw7fqfdREmZQQlxbVKSqdAz1qjaNsnFrkdrbA77Xm%2Firh5EfEtiILoqnwLPa3cJC99itC2%2B3Mya%2FmNngHxVmo7R7aiDjsj8diUzXY6%2Bt7%2FSlvGX5yCCHK0IoVgaiwkzaVOkuj6S2699qZWp37WZuqPfd88UJXlQwFExCcQVrbZ1rwktF7iRBGxw2E%2B86wZBY&X-Amz-Signature=e412664d856c69b8a40d6bbd0e15d8d861c1896c1fdc885f4f065f4f1eaddf71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
