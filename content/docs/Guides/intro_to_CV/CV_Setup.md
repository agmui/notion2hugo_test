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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGKGM75U%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDvyD7j%2FhWgBPnmHWgZU7zgvx3bTA11FcddRFfyXJ6x2wIhAMSS773fIOENk8mKBOGiX4oqeMd%2BHSA8GYpQhzFn6CAAKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxn64cVmzqS%2BN0oJWIq3AOzgHIEe%2BWmT8CKY2GhB6okDgqujngAqGR2AU5hzrzAhePZ%2F8AdM2%2B1RoI7NRWa3Skqaq8%2BD%2BherSqboeJFhNAVdDegXVV41Dgo2wH1Vqj5Z2i7l3cEfNi9COgnFmNQDq3%2FOffRjNw%2FxihoCrvPQIzNJDvF4P3dywLSvohfwybTFvqfzRbH7PVz18jpUJXHKG9b56aLeitpsLQk5dXSDo6jpWUPpNcLMwRwkgAwaGXy7m9UvxlOdyPS6TjlDyoQ%2BEv28K7jWuoBqacLhq353RIDYllGg4uHdRuaBbNr67Xa4Ge1Sa9rcyqkc5iSKCMtzN6MGsVliGaF5Be%2F%2BQJirnbxtc6Aa7eHhb1ulBMPWyVF3fCczLq%2BKEpB5taD5iNwdNC%2BlBYeiQXls355ThTPMG5OXxHLmYi%2FpGUEzNQx8OMV6avqjapLkEcmk9ex7IEcOUPBjk7MZSDpKJ8ytnVn9hYatm0cioQHloRieaD2GjcU%2BisvQUkEUYhOs3x157gd20B7UwEMQD01q%2ByuBhCi4qh%2BJIWJK%2BomTUE%2BovSsBVJzuaK1zyXdYUTOJgMQ250Vi2cAvnFK0gYgP8JzluXw24Um1bKMWIEe2RXKyNK%2BO4YElBnl2D3Ni%2BtWq1BE5TCt4bzBBjqkAdjtg4bHiHVfwY1qthjBQHgri87CvDseAgGscLPyU%2BAO2kKtg%2FMN6LpFfgV%2BcnoIn05MGTRjTXjBcbwRRaLA%2B3zAUsah0YGsfYafhWMaEZd35O%2FkHunD22nPUE4D1i5mL2M3F0TOK6GP%2BjfhhhlgpHTwWuXAtpcEWyMgI7y7Ca0MF%2Bkzma0Q9UZzk3G3o7TZwZzsHcRzwEUIW%2FqHhza8CW1XAT6k&X-Amz-Signature=f642b077e8b75312192bdd50e81ab42084f7b2a9df37226cb77b5dcaab242a13&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MXIKWCX%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD40KYKc1gmiOAtH%2F6dYOiUHOcfbFkrlE%2BLVGJElO1d4AIhAPYTekwGdz%2Fra3rxcMJfdUUg6QWB6OZuaAUwBMqTrWJGKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhvY8DxfelZEtGYU8q3AMY7Yku3B6Mwb%2Bp%2FggsSfVtC5ZQh%2BUBu4cIps8nPzaEsPSRvPnLjH2bpG7FlpLKfHA8WVQbgfWvEXGP4j30tqtgCiKCw8h8esSXCZ222ghCZDgs8i32r%2F1odSavvoilLp6M%2Bnqwf4xf4JxOMtnFWUDQoPpU0FZoDbGhHdKuSfBCXq%2BKnMLC3hmRX6eR2TrNCf5vy5bJj9Lu%2Fjf1HuM14luxys%2FqpbFJIDI5ca3ZqYaIphs2cnrcTcc2xp1kTTsnGJQy%2FN4xw7wz4LZF9T3rSdxyplEofBWf7jp2tga9mPsUuQATBMzy0xTabrvP2Ov6Fmb7tkvxTy0QX4K6RK1AHUcJn5eUl3CgnMpRThsXmyjC8VZIHx7nWtk22x7Y1iEftNoiIN4pC1W6xDgwb3AWeE1N%2BvQTskCiG1gAhnCXHNKGbK8lqeyDKMGMKsEdqxfr%2BBCFOya%2B5WT7O6TnnVrUjFGAwCrNMZeK6UcSSE0yPWJiRhtmD206Bf40FkAdtBddEvBAuVe8dWI%2FgFX8ZiszVSazRe%2FfVo7Y%2FxhqIXWg1KIqkLBabvDLOi1d3bYY8Ek%2FYV5UvsN2jsWFJ4NPhd7E5eUaCEt8MMF8mdgKxdgDMRJlMr23L5V%2BzgjvHcsAETDH4rzBBjqkAVI98Io0vAlfwaVynmnUrnZNE7E%2FMFY7z9fAk8%2By6bokxCG11RPjVEypc508daUOGZem4X%2Bbso1HjuKiTHy3iltzJEBi1ahVv4sEpfbSoIVrJQq18LUB%2FYNUILMzdwQFJt1ljkPdfNU1j16hsfbyW%2BiQ%2FrOyM4ldFYbF%2F3zblZBTYCmxDSRd2zMYpWORLgMFiW8OtvqmCrcDdxrJfdwZwHh9L0%2Bo&X-Amz-Signature=e6fa74f476f1fdc470456d3959b3615017568a368df47aa0beb5efa4010519b5&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
