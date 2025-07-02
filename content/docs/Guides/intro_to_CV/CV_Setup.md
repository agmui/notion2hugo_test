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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHXTRQMZ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T132527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjc3LlHwVlutu8cYRKxdXJm6IpbB7dDiX%2B38WR0Zo9wAiA7leUDo8VFhDqFDdXusj9E3aTBhVZs%2B6EY2c7RuGggXiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1wwEQefFZ37K%2FUR8KtwD3m4YtbZeooJ%2FMEH%2FjdP5hmOPCucafyvi9XK2pm7fyi5iuKB7zkHivBugb%2BLUvL4Fb51i1w7JlYF9YAYT1kaFizPwHLaRFHVcrGx5iCbXd67RF59AMwvwNy2B%2BenVHVbFUSGSnDiUc0Lkg244bZAkTuqxcveYDWv2UZuFZUrUSwAnbI%2B4T8B0Gc1v6qlQmedRxyZvc8YNvcBBeS5t7ef3YvOaS%2BDhHSj3iycmvxrpBuOJ17W2wseCNRrxtNk3bkgZ08ULSmO7DFeD9HdphDqPTl3mTMpmS7c6eVyYkpjKfVD7sL6JS9ZG1oJBiw8k%2BOJ3sL7M2LXT%2FCP57RL2Ynqk%2BWCNNYw33hBo6V67I3HKtIj4K65TGCBuaCDSvAwTCDdhnWdy9%2BNydD1EO5lbSi1TMcWk%2Fc3TVWOy01ejjQ4Am53EFpXOBgckTPD3nu49Ao2Xkdki4vWeCuH3Yses2wTHt6O%2Bm%2BvVp9wWYHB%2FYjPB7TnuOf%2BGNugf4iIuZ%2FB21oNPY87tJqzo3dEmkwr5aVPRF652TY9tqZtfgG9hK7gCmw%2B92Z5WI4kBfQeGHyAXMS5WumewUTDduiQ5e7FloHZxEJ2c9BrUueQA8ioViWB1A4H4xtlOTjZCuJBlkhMww7uUwwY6pgHNyBLydjML6E%2FATYiNY1UA7seu5bx7Ye8Zbr4eaHWOOVDbmS1lSB%2FFhPXQ9FXquYpS%2FpZ6vHDjGrV76Lxi4JacjJj0IsvZdM4UiYFlcOKhGUegKZGHdmW%2FVBSxIxuOwHt9MNIV3iChg85kvMKG%2BwMgDj5S5cCjcd5ZSkyz6leOFf1Q3QNe%2FXYwqXLODdHSM0DutUfKu6sXbAhEYkCbOtlj5UCOic9D&X-Amz-Signature=12470e2f5d640347e5e2d8e0a665878c68f066d0282f5175f0490c7b8360446c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WH5ODXR%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T132525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAKn0azx%2BFQoDiw%2B2OgaxOrYUxhp2iA8YXY%2Bn%2FjQV10BAiEA5oi9H6Yx%2BWu7l8weILl9rEDb%2FAW2z782PjRkAtpow%2BkqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIw755pDtx4v1hSwyrcAyijfU4DOY7rpeujFfcxfJj8hh2soKsRXaX%2FgosCHfW%2FOCJTa0E6%2BDxR9%2BlYAc9ZZ%2FqDzGeEE%2Fd4s6pMB3%2BW%2FRGzg4jsdFWNVBrP2T22JmN8goFVoDkxe5ZWz5KOFkbkyc%2BpaKLTyrCJOiksuirZxzHx8VBHKMHiFfRmtYdXGTMLJ00fHDV9dBEbZ8ajX6jlbUzn5pw0wfxA95x2aqTbll5f7uHxBkHtX%2BFNg3%2BcN0oFqa88mwxWGRoxhT%2FNaoBr%2FevSLqqnWnnidXAfWyGVh7nfo%2B67cgaBjh5Xsx6rUl9xfL8pMl%2BgJU1b8corHpjlkfVCuridRkmiRW0PzlvJfA8VFUfW7V6WDD06Iy5oO7bQFYYRAc3eS%2BMiW2aD2JERU9w0yVqogHoAMwsjPc1dur9%2BttG1Vs%2FwLRRiX6u%2FbWsv38gK3m2jbEex1qGRdu4oARN63PvbPoXY7f7FeZ6DOFIP9HMdvAyI9N3OPBd3LXWSB4NEc1nz4JC9f8sH322X51ZpBRSYAH8K7tkT24fpAGBYJAd%2BcmccDu05rAFAsShbTn68L2mQ2vRilvNP34rCidhSmShUvR6CNuQltsfdxBG5IHc%2FPDK8L3w58I%2BrDO9TbM5KE%2FFgF189OJ0FMMG7lMMGOqUB%2BgU9CcWUTXmxgZbNozjpfHDJiSxNft%2BK5c7UJT6DSye%2F8%2Fkx6Ft8rGfd1%2Bprp5qHbUs73sPFo4%2BYS6LxXEuXP05N4N0ugbs7LWee61hMGjIF6Gy9z31bAHxl8hbLFp5SpEQPK9juREeZPDdn9vH2wUatzTElycdbjAzBhUjscL3RergdM%2FyHY%2BjqZKd41cqZT2Rz4eGVolZwV3XUKf7TXaTEn5Hu&X-Amz-Signature=e76f176f70ee39e9f4e2668dee4bfd9f80f3f0521494e28614aa22089939efe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
