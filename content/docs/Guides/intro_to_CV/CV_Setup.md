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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BRISTG6%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T081106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfnbB40qlQeSL9LAb8HKbbaJ9WcLnfyJzjgOyPPuNomAiASykDRFDE1ZAsPM5tdz0f7497ThgThck4JWjFS1ojxsCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQI7WJsgniCip5m1vKtwD6xtyo4HGNDIfgW52Pr3Py41E3dG3qqXL8OTJefHz1mLbNL15oMdMeAiOqcFZHMp3sxo%2FEzQ8bdWLR8Tjqy%2B1%2FGGUqfbWed%2ByJVq3zF62Q4SuAbmlsAU5oAEVN2yMWGR9%2Bnm4kaaf06Bzivm9DYoX4H12jhw5uXOy%2F0yWDZiZ4PxAAhrA3GeDRQouqwlS1rotkx%2Fk6y2T%2Fp0935tdeQvDHYhjZQMkKBM0xq1dke7fNW6TBZ99kK7LWep2jc2hiVBsJvEDRpVqNdij1ztby6r4rCA5nYV0O6GZTXStbiwEwTbZAqPhP9EMlTzbCQH2G2movbTx6RNJPinrxeXDkqjmPmU1yPBYe2QitWGRgP%2BaHYg5w8OY38hPDDCFC0TIOLLfv4P1E8%2BkKNt%2Bjf4nWqpwFUCDNFluuPp35i1QygBtst3xlSjWLmbeJA0aFKg4LS%2Bd6Eit5fUsymSuASrAUvCKUWDCS%2BpvlhawDa1sxVy85wmcDlrITOcNortoLR3P3bS0mkl1PBeumSJmRJ9S1PGfw%2Bg8JT6UgTyN3Xv2FwTmQR5jkCGQSxmXM8RQedbEY%2Fk5gXHP7mEFQV8T0vb%2F3ovApp2SeWM6zuSWeT4NSIprdho5tGjPWI3UorPgMJcw96PKvgY6pgGfGoeIfHOVygc%2FnoFfQYHu8VxLfx7BwYSkHGlAQ7JrDTq0Ovv9WhR1RJ0%2FkwLnTNnMjffiEWMQbmaiWrMYI5sZhqFg%2B2VxSp5CNvxtaBwxTUspvxAtFq6G7kfUt7B2jP1rxLtvh23vdgvQPG2wXS71zOE%2BfioAQxtv%2FBzIHrAFypkXyUfSsqITC1I4lrMm1Q7qBALLU%2FmsKGlhN5uTUEnzDwiQlTOf&X-Amz-Signature=1562d43f28f0d8f963e3362560a762ea054b7abe79db847cdb1250513c4f220c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLGHOFIH%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T081106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwfd1sr3eqnKrAU%2F2yXUFbHjZjL9bjSy2ZziAjdtoOsQIgOfvv%2F5LiWZJSqWQmW3%2BKyLI2yuHxwABNW6AcSmaEJJIqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNawH17zOWPB%2FdCMCrcA%2BO5MwLCIexmop0kTWyG1H2brJ7lCuP9RGWiUdbtnffhuLIjBWsDAOfStQyd4kHf73uCuXqMGHU8VHQ1ZAh2RrL4eHYXyDLa%2Bj5u2bK2%2FvR41GgMt6vamFluuzXthnsCrgbSU%2BVp%2F9J%2BBS%2BuHwP9%2FIL87LTm36HnYC7hGOu%2BQEX1RP0edzF6uiT2IPd%2BxyjxqiDUjA4OHOFp1WLXXmLFdhBbxuri9MVjQorjm2fOPKyfM7K75FodZlDNI1ZcVH9lPgyZCDiJ5gUcO6xo7AkpP06DKZytiLUFhjEowCkYvmRJRrOLTW2gstXxwgPjKgPUw6NcG55%2BuGcvOeXmoak%2B2hfbxOJ5eBe06XGRW6x7%2BPp1z%2BPRBt9bwBJXPWrLG4AQigAhXwuSf3sRVlH7PaBwTnad9QFsC96sUUFN%2BSYTkse3ma%2BxeS2Oir6KOR13rQGh1f8gqUV71A7v%2FH8v6ma0mCavMOYVuj%2FNHpLXusXbdwAQrIRF7WnSX7ufq%2BFlaBxKptVUHoCE3jjreBxGJeK72O0219gQ7AjiXw7VrRhepYdfIH4bkObKSUfloej4A8JPR%2BMCzjn8T6QgRpjzDcAfUJskQeJiqCOYlGXrac4gm2SdQPr87e4rV5MafrIdMNujyr4GOqUBzp8Nbu%2Fyh2sE0TAMWXNZJNAPYf7AqUerayccPyAfzA2VKvuWmn4W8zj2fQbeuHjAuzj1gWPrcOkEIoqb7u8zj6uWDgLyiNAprQKfcGFWIf10IO8Npeqip35%2FO9ARw3J9Le0QRbAP8VKH45%2BRuU3gWKc3ryZhS0I0kxwK2315kZI4Ms0OLbogm37qo21fNZzz%2FzBRsbi%2B3ANIxAiyOqVkq%2FhBDWVy&X-Amz-Signature=6f64ccfd8a05e2e01332a2293b3d2938cbc7cd52826c7549440defa0f7fc20a8&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
