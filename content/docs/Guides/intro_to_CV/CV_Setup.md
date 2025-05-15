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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A6EMFLT%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIE6KURALMG8kEi%2FCzSxaL3OSyh7feYT6nKl9LQJfEdtkAiAol%2FMFTZp3jRkVTd4r6dMf87iXwP%2Bd8SZ%2BbyDAM5mrASr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM%2FaB6JHIKU9f0gvFsKtwD%2F1vnbo%2Bh%2F2%2F0JHvc83%2Fp5yebXMkUL7ALMdc1mH1qsZZlGvdasjs8n7XVotr51ylD3lxHKRmKfjwPM%2FKP8fWdxW7qbf3Wd4sNUjyahZ6S1CW4gHOdOc%2BN9TpKGeZAF%2FLvthEcD39cff0AwaQXDTfCv9OnNSOYQzAjO5%2BMn8M3f%2F80awMGlDsr%2FBvR4T3aWrS6VCQsls08ucovKZ8AxoIdhmszEDR9HFhy41CnOjK4JBbzbJUXhy1c7yeTug%2Fzx7e%2BP1YmF2bhyzxlZKIr6Wg7%2F98DP2INt%2B%2FSrrkrh2uQdjJA5mbmnqEmZ3Rn1ynXLdtw08k%2FDvlUDo1Z1dlB4FfRfM7XVRKT%2BZYOu9aFj6lmq7Wt3k1B%2Fd7RNh9oDS4vG0NSqDPdkkMzoBT9zjP1BcmwZXHk0IVnOP3%2FLuG3E5fb67gzz4rLxqL157FHJDuIdayD%2FwKsySzgE3i5BeLm496j6BC8NpoX16u465cL4pbbT%2FH6eQItu5ADU1%2FbQJh6uXiC5xuCYeANHd1Ct1gkzXYSvpURRoO6OUZVOe%2FX57QMm946%2FuIWcSaRpkkpAkmjNRvib2rano%2BPnJAAS6qQqtyNDQng6TH7%2FisX0onp%2FktAjrXYHmfjdrfda0ZnZg4w%2FciZwQY6pgHEnZth3urKclx%2BJSSgwFLTAiRsggGHCOHM5XsJBJ%2FYUDdE3XQ2B7i%2FMG9uP9fuUHWtpdMrYufv0xBYev1YAYO%2F3gyX8%2BEVHGZEL4%2F9M9nM9WnByv3IRubK0tU69auOPP8tXKYfYGSfz6sKBM0jMZcXkSr%2BM9orkptqQFGgMYhUguomc1%2FwTVODLYm16kKqJ0PfeoqNGB9LjkmwREJvY3S7soUTyTal&X-Amz-Signature=be69a31f371843e79342a4916ffdd23b4596d429c4189a6c23f08da98667491d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BQDIEHA%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIBUGO52zHX8978muJVq1CmJey4RQZieJ3uc%2BxM5uxiOCAiEAsl0D7JqOeLPc%2FMnj0NQfWJJ2bsTnVqvdzz40aTIraDUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCxSqoSqGBHb22Y6OSrcA8iSk7wNr%2B70f1YJuUBPUtmg0r3CE7orMeJ84cv%2BHiBPkyJkcBGVCi1yosvOf0H9icvbaFwyajp9C7HoFbepS09C%2BdF8vvn2oVHNw6eg81UP255N5nJRU%2B6cK5miOgwZbPPf6JT0mpSXF5odEfDJdidAj2%2FKUL7KH%2FPZQiNPG5KUtEHK%2FVXWVuh7UI%2BcE9c4p%2F5WaORE3%2BUjquQEmbKNpllGRh3FJ11%2BL8fSM0Q1%2FPNSb2LMqhAXKHokpv4jT2p7SU8ZKPoNmL8xi0iUQact%2BlP0UxmtbvlnIY22RbHc8rvcyweNY46gZ4rmCSv8rl0Hg1Ye00ctCCWy82qZATalJ77ooN%2BMM9Rt3g383A929AEVeqt0KW95oDPquPTUmgoSZrpAYzvdhgdUxzL2He7C%2FQY%2FtG4UzSZ11MF%2BOExGibZSb2f4%2B5qqrLs0s0f7c%2BwBqymaf%2B3M47QehgfAg4hdbASHU2DNKrFvBuEf3C99AFbyJv4IoKjgjUHX6pnQCWIpNmisYVdWxOzruFKYmasX0LA0HWravsX4Uw2xM8fcB0p6qyErzE%2Fna%2Bnq2xqnz6hr1WJ5%2BpRZETace74cXJiHdCH9QUpgiDSLcCTEtvYaXIEnuXLEai0wmQvX18K%2BMJLJmcEGOqUBB55uvShRLi8qK15rXyw6wB47%2FTdTgAe9F1McBNczoLG7q5Fu67POwL8r%2Bf5W5j3dbvmA2q46qScPN4dePAt%2FAUX5ALbTFmKgXuSiUZi4zHhwwgzrydAS57BTGaqnKQQ%2BiYdZRYOB1ZkdVTUPfleQgCZb9UqpqW13ZLcjA1eC7hiIJ%2BSNjKgP%2FyXSGXiVGkE%2BaC5mkeh3dSR6l%2BukHDmvICc%2B1wcJ&X-Amz-Signature=ade22d4f5b4c2669037430231298adb8aef749de872f9c14d3f8515996a30dac&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
