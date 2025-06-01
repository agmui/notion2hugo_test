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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665REGRVON%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T051010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQD1BiQQft0hzLfgdTvCO8MFqKtQparRvLd%2FiNIWLkS6IQIgFdapS4Gigjj7iB%2BzwvUTlVqY%2BLW6Vb%2FlMJpwGJaH3SkqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkQZBRgwawEiKd%2BmSrcA41tjayR3%2BbqAfP74t2IzCH1o700oSVrPxhyUQG7nfFxXEhwCh%2FwSE9QnePlLLWyN9JVSafdC2O0FquIYxsYe3HXiT8bsVCoV92USnwdFAuKnWUQWiXq%2FTTXkB5cp%2FJHent2VbItGPkEZU4EiOYSYKU9yDqg1z6VCrAZzrPI98cQSS1PVKYiexKmtDVIyZSro5oF7cdKWnyloTcniqOS8wn6sH0KCEgHCHayEEA3HX7U7ADvwQgfS7Kch%2B198j6%2BbvRCi8h7mAmBgBSVGq4wjDwEfw4V7APdVmHXZB7H1A0ZH2jTr0EpJmAc%2BQ1i2lJJVnXjBZePs4fYOp%2FQsDeeMfqSXDlab1SliJr0MrUHg9ylzH%2F1PccEz95AlqWBkKovITbh6I57rMlv3L%2FZXSLiEAV4Ag78Ae1knsqqrzKcXwyX9sQO6IWLttTrbAF34TqM3ezmq%2Bzh8kWJatKE2eYeSjoeq1q62HTHU%2Fe8C3OYceoZBbriUDr%2BG1TS9irZYzoyEP%2B5LpMwiqM0BLG%2B%2FYO2O9fV%2FS2d6jZ7RJYsmmjpBNdfMimulU1r8HIpKbBwQKXeg7S22nIOwzVtAEEYBO12umD1bh9uSWe%2FGrRQUalgYjZymNn0hDwWx%2BOhsx4BMJuY78EGOqUBaFZ%2BRU0blvMYMc6dcYzEFhyxg5O5ryEtzKQMY12FX9AKcw4Se7AoO3P68pz%2B3v%2BjngH1BcXW3ru091fIBf62AmjdRHor5L6TZBizxpPAkB72gCiooRf7YGfURaGbJ5ojOLJiHmiegIOJhZUg1GBYAM4owqvoTqo1bDp9lA1n%2B7%2Bpejvw2lU5VLBLDVLA%2B6cye7%2FA9kVn0RTptPz5lEq61vnAoC8C&X-Amz-Signature=60c5d1c0a95249440f58b6828490a64b389703dea057f8c99e4eae1709c98a8d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLCVENTI%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T051009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCyBAzSqKV4xPW7voBrrwXY18qTBddnS5UuHMyuumEcpgIgV0qub3ZLew8hUli93GV3XZXfsAZksFw1T9VV6Z%2BwTg4qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQazkIkSgHbSzkRVircAz9bIXIj4xpPkWfc227RE6prO41qrrFi%2BGEk2aD5Zy5jMV3UBq5%2Fgr846ro%2B13TwOW0cwbA%2BdhENz%2FKPa%2Be5TaeY0e8G6k1RJfnr1B0HAyn%2FvYzZWFoR2weNpVo0VjtSO6GU6c8bCFzftcHBtI048wR4zuusfvFe5CIPPzXurmtBes9v6pA82jCvGnF9jbL21gw2cRvzvpi%2BjLPezx9dLHzmIFoeDfDN9NKFNu48BVWv39MJPAAcvhxP6Jbg04%2Fl3xME7PA9e76E89HM58gwqGptHZ0joYCO3MLI5b3QgyqjQLwBbHzJ%2BOdSyadOhmS6VWzCmE%2BZPY3Oe1mB%2FvrXOm7FG0rf9wCOt%2BgVZKsWwVHwv62a87jAhKjaLltakhzpBZcFee0pJAclWKXPJaM11ttxs7NikDXywY2iXEJQZUXyHJB8eK5yCE4JhroCt8M8AQUuOvwj1bzzUh3MNclTRcEXYSfubCwk1ifb2Kd9JOhQDmqRgF8%2BMnMqMHCeV2pJ4FVXLRUCqJNNiBADzJ0VNyzu1tRX6DG82J%2BSw8HMZyMiSqIfxDrfXyAYC0Cc5Z509qvxYw0Q0UtJeCKBit%2FjHd71hMg%2Fk2FHvBdRoPkenS1vylSCJHSIwGPX6W6GMO%2BD78EGOqUBF6hnF7Z8F%2Bli1SL2LR5iHCwlzBFO%2FechGfAfb%2BbnS%2BOdhpyzmRIgcyigzcWSKVEl3f9JKRMf0B2I9nBpCHHf5QraRzbAZqdVQm%2BRmluSm6XjwT9n0rY6JZgN8eneKQ868zAewiG%2F4XLYDmtjM0%2BtD4sEWWq0RFR0gdGoH8pIuM5sHRQO3qeyGiwqLp2mpzF4nZ7k43PiSE7yUgEwZLC2%2FLcQiBUY&X-Amz-Signature=19d8749c8263b55bbd1052a3936f2f20e0a5028287c8b8c3a01847debf6a6c60&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
