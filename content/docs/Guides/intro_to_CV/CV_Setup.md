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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TYUPW2S%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDBwdJEOyhlFYCHfFSw0q8eLaZhyxJGS1uOFt4mYSfcaAiAjr6zLKTNnA70NNQsfFObRKJqja%2Frt8UBn%2FZAT6ve31Sr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMJAdbIyY0xp3qITG1KtwDxcjwQ%2FjPD89wegEsCHthvP6DyNCjc0BfDpIbNIppRJgN31%2FaqmtUOG5lwHYChO4%2FFeV3%2BbqFOzUgOsrnajJII4gi1eGSE2U6ZbULrU4rWPlCXwYY1GU20vgAXDf9rKfBJ8m5WRylm44sOQE6cw%2BI5HWoPbXEtiARNcidYVWnA0FtRWgsX8G1DY5eT6iGqgalWFQD4StuPOdupGfND7d%2BIaeCYQ7YR9Ugg1Mb6VsWxMkCgVUI1jt%2BxNs0ghG7PFX4agMMaOuxu8iySbl3I%2BPtrMFi%2F7Fe%2Bl3cVQEp7byDZj0hx4V4F7dLDI5zJG6MoLeqGOidwFtRVnN83F4TOPU180%2BDSe2XNVHUYdZ95hAOf9RdZG%2F8aph9HOvLnQbb9MMf5Q2sA9U8if%2Fyz80JJLiLshzCCQ%2BPwBh3bi5LGLZPnP3rIiLS6sz%2BcJqqaYEyftsBy21LEf9EOII6m%2BmcTpi33Bj4pvTMdsHtP4H8DPYaRD%2BOyLfct3stPKIywGMVgAm85Rd70mQ412iBkAGti2rKObustTQRCDcUR1xKv2qnbcROIq%2FXiniV%2Fpt3RWTjIDJHmdlW2pEgqMmP264p%2Bw4hu6HpoeooPjDOpScuoZyqGWjxsxD%2FFi1pMW8zny0w8dORwQY6pgHlTC7ws9GMCr%2FqKh7EO858vAIto9yD3UPYrZAAQrRj4xgMDD%2BwkuyXdC0HYSjgcdQrRb26k1HFg5Yfr%2F0aAYF9CCxqmpWUs2%2F5b6cEVgk2C6VnNgLi5X06JuUUowtyIcst7AI2qCDSAJDEUBdWfBCcL1Lm%2BbI2hr%2FrmBvmFvwNOwvUcelQ%2FNev1hCI6ErAUbzdvrpRubqWuOpF5%2Bvh7ICvjIMCQgMB&X-Amz-Signature=22bb615eec4c90e5503b31fea471af1010261effe2c298f967d342301380c22e&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KHGEZRL%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDFdBUVDMOX3UKUeZuBu9dWwVvc9Q1hPhFRvukZXKZo7wIgMdX53xkv3t556w2BKR4T9%2BM3NaUXR6Zui%2F1LPENkh9Iq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDIHL35Hla9yX%2BhGZzSrcA1pEXmFEjx76KjgnqB%2BnlUVznO5u%2BcIutRvuNs7enMQpDeE3yW9xyk9F29zYMO5ygCB%2B5S6ZdpdY3EDIpQjBvRh5XYcm4A4IpT%2FUvau18ZDn3Q8gl13X4wSxCHnCP4BYdr4Lr5D0sBFFsJYw%2BpA1WCdBKu7a1PzO%2BlP%2FklnhKav%2BFkf5fQ4x%2FKWfWIWlEw7GU0QTVUBAreLukJyJRkX0hF4fRTSgNL0sPWixCsL4tCvroXdJx73DOgqMOEwyWl94ywwljG4ryn8rKjvnw87RRmv01ZEAlNX7ze%2B%2BFQlaErklpI%2BkDmO%2F5OqIn6MkkOco%2B0U43T16w3y07lA7%2FY6qYqoUJ0J9uw5Dq7XlfZg8Tj%2B1%2BUzClKAmLfJUwo7l%2B5xElGCTBMTPUaVvjgPQ3%2BA3cXvcUdUUGtxC5RL7EF%2Fap1Fu%2BZfiGvqaHZqv71JAVZop5E4nxG3%2BdtU1758ajqCzKNjtZHGm9LjQzLWjt2YR6eNe%2BhxR05CNaCFz2EpGa0tEO8kwWyDY10frpweW4HH66EXduEcXdHWIFKrwzUtAB9xdKgXYiGiTA8HmN7AdulQGc24FHqLMV9yn%2BZVRXXn2IIaUFUEUx8A8HqSCi2Nnb0%2BWyqr9g0BloduuxwKgMIvUkcEGOqUB2mpDmJf4oOTcltCurAh4rPAS%2FjL7V4kS7Tk0L44xB3hLmPMJ%2FVUCfYE5y%2Fjsuiw0EJW5wW5bDzwTwTQu%2B5gDnaZfFf33jFUZTqpAZgTUPpe87tw89uiktOcqhBdXM2Sk11BUguDVQSFGEz%2FjOYaZ1vWdVChahHlG5%2Fz1acuL7mnbPB1iLkh%2B7eYou8HrbU0QX481ZMcvguU4oTBoII9EdzhCaanY&X-Amz-Signature=0f75313642dd44f53f9b29c3583e445154a94a411736b56bfbe0e3fe1314249a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
