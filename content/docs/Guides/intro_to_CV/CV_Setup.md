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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665434NNCJ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmSpcLwswAgsm3ZWm2AtnHZeNiJbb1e3fQnVSqSrSzPgIhAMtBqcn2T3fCW0NhepQNK9A%2BKqAxHtfpDZSx7qHu0l1TKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMP22s4mYsvA0k77Mq3AMpIVyjr1Jyyzn%2BdA89c9CCxtxQGpcEvmexKQ3iSnzLTI7rwQ2%2FzmQFToCKbTykBcX0wqn9gfUnBEIcsalubwMjNNGJgU0xeUmXEFX3Ddwn8bx5jqi4%2F2rTihyDZPRzAQ9Nma887PLv5poOKlWLcr4WlAPpSCz%2FMQD0ZxQlzrqWuA1mgzIB%2FBkdQNVMRof3iGOeI3TZdrRZb7yZSHUwEPSjBL3FrJNJaTwBLuzpY3ssbJnYqUhAp42gPt1L1dXskR7K2NHCg4Xxossq9QjnRKuEpJpT6%2BsupOFsqjKMN8a6%2F4zCsxcAzcSfkMRCI0Y5xifyEX%2BuJXiZ0trJ7PcvMdeQ8SwFLWq9G584nB%2BB0OVZytoh%2F4tswpek7O5hmXfeB11Rx%2BdC3oTj%2FXJRQylS4ZKTlzVj%2BCOP70IshOvt9Ii5H7g5Q9fPxfNbi6mDOYnaYMC1wwQj%2Bv7ZDKRqfQPyYBCcS54KViV%2BpoFUaVvIuiex%2FqdxEYn3xvaobrhYh1SsUAeBPZ%2F%2BnCj2emQJK9zJdU4V%2BjEUI8LggokQSPulyR1w%2BlVm%2BeT2NNlbgbPQUXkHbLoUYNzfqJlf4RHrup4yhWWOf7t0zfuJkrZhVFIzGQ9ZiHXM65Xt%2FRsDrIDyxzCChOvBBjqkAZmUbiqNXbclV176CM4c0fWd%2BRVsUQBjroA%2B7LK%2FXDOa4IjiJKLVA5A8pYPAjQW%2FWiEs6%2BxV%2BfyPJw0XMzIN5vKsd3Uon5mS%2F8wmpw7WXFdFdtk87azMGLS10SXzrKjMzdSsDaS1AOekZyUcdoy8IX9DvYwqlQJXFdtA3OTCaCFZEcCUaqltpIekPHPwehRYa%2FQowyY0BSP0etR0OEd5R1L9%2BVnN&X-Amz-Signature=463c0afe580ce2623757ba53338d951ddf0172b2939c52c40ae688829a5e3337&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE2XTKRC%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY2PyNRWQog5YqyIlvMYCzHZWhKBnwemQmlOq6%2F6wy0QIhALI1M7cNjGA1wsLVNWgCZeGMa%2BFkOXClAxVeg9P9olm8KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCYo%2Bq5BaikCryX3Uq3AMr88lNzx9zTmzm7%2BJ02CICfcFGBCYcRwg6noq8fSg5VdmMdS5QSJ11aW3B%2FDbV45BXzSDlrwgcqHswncek8HNjGd9qb1ETKNiGbXuGB3bHanTZXqRfd8JOl4ldN7L4YWX2lGWH7i1SQnO0Y3InmKhHN9vj5QhNFbp3Try5hgHPO70QaPmeZg70ClBhvqeg27dabcMv6W%2F42aLI1I8Zk2A4seCpkGKXpUyJXdZzOJybNNL5Izg52P5WplRpzmyOLSi7FgdSrPPP5OtijZfu%2B%2F%2FpTpASTmKuVIcOMiI7WJSC%2FxA0H5yexEO9kuGwLkHihyVdrKRuiHVU%2FeaJRlezF1ldbP2DB591KS%2FNiqqH1FcY3SQdMm%2Bo2c0H2GdJscA2wmcIqCuuaYNe%2B51pKl51ZOAZbHJYTX%2FTlgKd9RqXEZ%2BwMGYUpks9pdW%2FbkfIB8Nq4EB5Awe65zeY3xnTMomVj2NQOZ2DbuCiehTYCX%2FsaKK4ksYvSHstANpQXyQiHRWhQg2XbPdXaIMnfyg9HYQmwdZcyDrErHo6DUVNJK%2FKK%2B5ahdCSQXiwN%2B6IEBs4qmM8w6TJBFNrOq%2FWpoXcOMgSoU3QmSYrgMQLKFgy38TL97jzFu9qF5F71Sp69P%2FF8DDd0uvBBjqkAb2umjBJ9ZYkpVMmfIjh8daYHRWxIJJZMTSAHIzi8u718wxiLpP7I9sGcE02aYEB60pnnBp7i8foRmvN02a9r8gJ3Y0kJW3MMFqSQd2Wi28nSkK3ZBpnNffNqf9EHo9nKef%2F85T9NlD%2BDtxumm%2FynFZIqPNTi3vhqrfGNdF4MhAEw5H1pPABflpMl1ZzY%2BybxlMz90waGNeIRzdpHt6NkhVGrrOd&X-Amz-Signature=5eade1f6b264fb3c90cca8ed1ff8de1ba7fa301f8c393d2e512c1c97bd19f597&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
