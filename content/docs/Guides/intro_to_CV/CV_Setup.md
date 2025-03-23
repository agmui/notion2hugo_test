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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGUMRBQO%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCLL3anszBzU4%2BuB1zItlNIatmVRUMTmQSYwRVHPLPHagIhAPW0gbNgjB8zt9bVPmP8hNg4SEmFn8rEblxOYAW0IDTgKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZEsEEtVTkZpzndmUq3APuWgDsCw2LHdZeoOJctDFgX3%2FF62NAhrE6oTsbNnKB2He2De5OGR8mwvIIWOIXxgQQYBXVNLp5YRSxXnWpz%2FZYn3udqHZH9WfVskYb7Ed4vdaIEWhGHAydHINdBRnOhumQjaiWY09wI2W6TSAokWC4JOFjMGugS88arZE6GU7dmL4T72yMSHuerQtsTQiAPg5mfSlrBxSIFlV1S%2Bc%2F8Bbp1WbrmMSXzTuE3jdavjGpK9uQzlgFmrSEX8kg3bYj2bylmHq9ENLQaW3LjONuTVNC6%2B8kGVPzfrRK3lVg%2FVfXS%2BPMPrYjnL%2Fj5%2BlH8pTG0bDPjbwQeBjXfPNllEofufEUlpj7dRp0BPlDOcWFDsMfMuWtZhQMjUuzqMKn%2FaeY3XU0DfR5VtVW9HCpIHRjI6OlZmZxhL3nWqYZWXVvPwszs%2BPzRrx307XlmZNr24sSxOW8veAG%2FmF1qs01UcEcFQY%2F0ihb5xCBO2mLv3W2ypcFvcXkiNAZwYSlsRkZeTM6ndCV9zEbaObAiEsrmubzO1ISlA1mdNygTgkw04nTUBphvcLWr8Os258EGu8AQUD%2BmYk7aLQUEDCZP9FHeqEX3cT3DFuUyZJyKsuDYvZVepbCbz3XtjWX%2B9718ubHSTCr8v6%2BBjqkAaZGcz9BthCm%2FJ%2B16qxDUG3RhsHcP%2BLqhU9%2BlfNaK%2Bu7W9qfjNDMSAEg55vvLyPpvB%2BvjSdQ3%2FD1rbG0Kd0%2FUn%2FKBFs8F9ZvU2TkIsp5WFMt3%2Bd8Lingjg6umJs8D%2F5%2FAbPb%2FITKNqcorhrwU6A%2F4sYu9vf9EoNVfO7KlT6OgVAxe3cI%2FLfZiKmtVj%2FBxUgyXtkl5M246WwCji%2BspKMJXx1remfC&X-Amz-Signature=ef17f1845e81b00f3651263bd6b63645d6d9129b21774b47efea52aeb5998c3d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DAIUP2T%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIA7RoSsg24QMRRrjtZojVdfWenI9vqHWWiCE%2FgxySPKSAiEAmX9%2Fb%2FcGP%2FOWULH7g6xoG1yr0b8lvf3yXTFoks04pXYqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcNq5w44QqiNt2DYyrcA%2BNGWMw3N6a2rzC0CBFrk1vZkImAkLOcqFS5IO40jb1kSwRYNUIaSkw3JZyPoc5Ly%2F2ptJjKSC4ndumCRberG%2F8JYfg5aBgg9%2BdPv79KL5%2BTK64NmImGL1SoZvpA%2BGiy3Br4k74esEE14rKHKzakzoW2Kon5grBuAI1n1eitJcFWC020k9D8OEtSoutTgRqpDbbcPNoYuaYNmEnCNIXHHR27QiVOBeeuav5JCGcZqqQcbSPhf152Gi63imxGcwsmWWGMTUNrIiyuCbGYoUqOW7odYhysagH5gcK4oeIn8p0GNgm%2BZfWhhyOmGsYEGTbenTUiVrUnqfwYvrwYAac2QOTe3QSmUzH2TwR%2BEDH%2F7Oa0sgGbmoMgGKgygI6xdHI41Nbhnz6QRDtOZPtcfP%2B6HJippxv9Mu7B6tikFeeelW%2B2wSTGdU1BuboS54G19TSsgJkb5wiqLPyOwacv7gs8Ic6WTYeVYTSJaoA57vrefK3l6IfvJO5i1fUJEyZjWlgfuzPDAI%2FsqX39SNcMEvA1ngnVwqgN7o4kvgkFIoQ2v%2FvGo6agtCbMfhZKe3MLKNTVj%2F8kQLKdNTeq0sEtOdwsMvUYi6npV7u3rczQfHp0l0jOYNY2gLFKRDYNiMrjMI70%2Fr4GOqUBDXB5uKbL6xUlqrrvZCkBafLJ0DiKSMokSNIZAKmV%2Fl7Clqb2TgHlqIFgo0cvug3bf%2BRekf54Yns23xMn%2FoGP6hLKxV%2FX7BbbFzhU3fVHWnUNTx5Ga57Vw7SGBpMviDDt6wMNALI8XuQNSzmzGlrq2xsk7oPEnVBg%2BIbT8%2BXylb7Zfcn9YG1pbmMdRqEDMv%2FJtLqctoWpbFMmpgQE4%2Bhhq0k%2Fmb9M&X-Amz-Signature=252f261a84a1dacf14142e0c45e87b914c41473dc9b8eec1cbd3c377ac1b419d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
