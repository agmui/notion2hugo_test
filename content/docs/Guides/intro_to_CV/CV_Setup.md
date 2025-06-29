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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667376OVKT%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH3JWjEbornQTuvQX5EXD0dIEajdF26jBCn7G%2F%2BQO3pgCIQCMaxyjubgdUtcC8d9pO6YK4Pldb1a%2F91HVYu9ZnRZmIyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcMteJoK%2F1U29zS6UKtwDg6WdUxxOK4nKj5DBsNuHOmm08aBr%2BoCeL443%2FFtQVXiMhuxXK%2B8PEyNHdYEo%2B9C%2BtsEjxoI1eNkgsW6UVjFYjv5Iqv2J9ES829AFPu96P8dF1ML7wNYFEMGa6%2Fffx4QfPBgJObzCb0AYORQP0i798ay1v0Dh%2Fos4nnF%2F5J3ddPjoYidg6DDQriwbhEaJQdU%2FOrhzvLCVa6ImIOlN0vxGDIzbYwdqBSra3tPGJ%2BZvsouE8%2FQcKk%2Fk1S5kywdP1ucjktTDu5fUjpsO9gmCPm0yECHLTl1IdccOXyglmfXANsOwE2hU%2BlCIuQVpI6xc8I4pkT1RgYQONJBaP6f6emlavIcNPjZagqQ6yMm4xdRHn0jEkZPsKAmsH3n%2BAby%2Fbw4KYdXX0LjDIm5Gp0uUotyglNCdiOxmsx89YCirS0vm2dUY2LkvUtTfs9aLqropGUAGyosDgGKkZXShMHHl6vEsthtjQf%2FjCZznexeaE5Ug8ohTP9QqEu08U2CBxFpowYVKM%2FYWEDndsQeYbyuN5xI0kIQzt0B0yrNrTPffzN8xFShOLz6Z3gZ56UNsmVR6UQppT0p4SkOfDrwtaekGiqP4ppX3Envh9gPxXmstxe5ZAavW4jHJPANvn1mi%2BogwiOOCwwY6pgEOQ79fLiZ1BH4Pv24kwGD5qDANYdUz8nwPPbMqU1OmciUjdo8Iv9FjovuP1p3EWX8ZODof6qzb56EBL6579PoVKgCYxHNM5RupDzWtH%2BuImjdTYoxBiyr21z0zU7jiCGtRHN8nsMbNrCMr176kr3B8glSBVTO4ek9QE94eOW7f3gWC012LlGXz%2FT2dR%2BDYWMBxOo2JgP29JMAu62FnGjk0TOSolqgW&X-Amz-Signature=6e9667150075785ceafe025012d2986a76cae213986feec61c4563cc33be7da0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBU377TJ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaAggTNsMLygEmENDU%2FBsQDvGZ1cGRO4miGTxz8APaiAiEAmLCm5rquyvk6YP5XKnwQXz01FSFPnz5QTqiJQqaDSm4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJlAfTPzO2FKFfgJmircAxIX2uCatgcBNQTzDRdHsA87N9goge7RHUaYqZE0TEYVDNXng79S3pugZ5mFLvOWl71p%2BnaUCPyd0GwrV3TszCe6X24NfJn8HzvVAbo3sbxUUQN9qHCSFUZG51Cy7o0fgDmLBDzyL4TK26OTr6NC6bgR429atQq3m7CKBkoEZPrtBwOYmuzyC2acLdk0IG5HtBIGaCHnfUof8vfIA7L558%2Bh0G64YScuN7jj16IW2uGhiM%2Fcffep6RqJpWwVww3%2FrNe%2FlAAgJ2JcIImoG1DiP8OJLzk8o7lkfQQQJYi%2FOs%2BGJpmXw7b1GqDo1Lfno8wmPMfwo77oIabK%2F1V88IflcI51kDo8DSLPw62hogrowfA6NGNziGzpM9K4ccAwSP9gQxbcZZQ4PwQQ9M0WiTx1VxndHkiLblFilk0IrrgE9PHMfNR9c822y%2BNb74apzM0%2Bbe2ixNtHFgQAsL13rZoagfAcjuIXy7KNiBtHGzdguFmlWF951nyYoMo0NrCQ8unUQH1cfiQ5qouTz0gWJPkKcto3SXr5aLnFU261TSvXMB%2BcZ7uzTfr9vxFsL0Gq1e6v%2FchsNX7Y%2FiyrFLKIRF9LNzdIUh2U3xtGrUr1meWXuaAFd07MeXLevthfU6MUMI3DgsMGOqUBn604XETFbFja6hbwOHQUuyUytqPFMihY2OKJMg5il1JkIHEQcBo8OI63tRyTzSRd5r2I9dzPPw7Y%2FHg41usPbEOqQ3vQg8dm0gIR5jFPDtSQecNWkdLEC3gd%2BB6IxjN%2FgpAjZzbDk1VhNgpsbnOXjqrYOP%2FNJ32yBs%2BDPzqvs5fdVHkb0HtK6XQKKA%2B0UMFQknbnlXyxCkCU9hiks61MEj2SMz15&X-Amz-Signature=005da7e7b6cc7c035eb071add81f2f92f2fe76090eded9f817e6bc49c8e46184&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
