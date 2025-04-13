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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675KVIRET%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T051615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDJ2wy6nn%2F%2BsZml1RYOxkm7ih6893AtXmznm%2F8p9WpX2wIgUsrx0UWh1RIzHql3COw6C5%2Ftk2Wv3ktvmIUqb6y6UhoqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkgXvuV3h3AvKVVfyrcA4CbK0i77rHT6bNkxP9arVsahLFQ6Oe1S6pSGQiUQOdeHXWoaf9jCLEKAUe6JsFr8ZUhW2%2FkbQSgwSlIuN7IG5sHB2mVsrijj9xlLuBM8nHsLG3Uxu8rUAdeioebmOrnArVtuOk18VKlJGkwzUcFIKum23LkwguwrXfMuPZVdomqXNBN%2Fw%2BKLVjYBnduH%2B4Own99RhH4i6bIWFcelsntkc%2FVweSE3q0YRwKQb%2BTh5nuaRDWnryBgcbvmH9iAEb9%2FrTDV%2Bkb1i%2Fp0RNp%2FkrhmBvNnZAIHcrEqZmLEEi%2B4ISfoWs9mAFpD4SfZgZzk78Ohd48Gen1r%2BQaxzHLPxMcFfBWahPiNIFKWWCAYgIX9g0E2Ye6dfkXVFAvhoZDgYTRvoZTxgdIJ%2FiwkfNlN287O37JovWxtNzNxJP%2FcGZO5jW8QHtJxmUvAt6tzPK862WJMVSIBBTIj4%2B3gIMYNgKlgUTKTRBMufXPfvnXgo%2BSGjFEDk9zeFKUE0U4X4gSiEmMjEx2YlzssQsV9woQrXl9aAuqdP2hiSNWT7RBdqghgFvReUA53TTKLAIjiMF7nQ3%2B%2FnuB%2BUANZe9uXhg5a8Hgg24X5L7%2FyCqIGsGG%2FwjC3clPrO4wiSL8miv%2FAdURFMLiN7b8GOqUBeWaGs0W4IyJQoAefD9SQ5LHeV4QxK9MqNSuNWx%2BVICVg0acYDvmM2soMZiBuTQYepn9kbKl83wPpPByuovi718y0TmtSlAWoQBZ0W7txrWZTdswDu%2FZWaMe4F5xj%2Fx1fw9VJlYqeOsZAEBGo0ZZ%2BA6wt6KCUYYQ0bzEklGs6L8V4dyOWEgbnyCpJAaCOupND4Pvc%2FyLrWEGaYcgq1T%2FaPgziW1Ft&X-Amz-Signature=3cd278bb0206e0be0e4db9e8104b0904f86c7d6724ba6d83738bbdfa410c21fb&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB4DK5AK%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T051614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCVwMTg9LoXzLSbczqGIs2mMtJFuhP3DeM2RBj%2FViSk4QIhALzvX50QiYRBeH8e2wIP1WM41YbgyWLOFLMd4WXWOVTUKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4DRkiT1mlpeFKtV0q3ANq9VXSiepO5lNsdL6WTv%2BQjLCwgeq7C49op0g3%2BEdr%2F%2Bq7oYvGXi41rjPkQMVSy%2Fa7WDHKMTo3THXw0W6hza%2Bg82j25I2nhlFAaQ3N0n%2F%2FGXp7rXYLBFlpwemxgAsAWAWwPaTWrkTnDUMCUwBpMoGKbx8blcCyAVYboTYeQjcuqhUijTRs84DMQdISYbTPng1dppx1S%2FrCjojtJD6ljm60NJZ7FjSRqR3y7VmPrky8bE1U1BIbVGfYhhCLIvhTeXHQ9emjN9uf%2Fjc7vd6dx0Ma1JoJKT37xHoi0CYso8YOqEQI3rum0m1N8I0sqST3E5ocvmpMLK4BqzoKhFGzZZzegfmuOkPqu0ldVtKAZdJCSgwcvKmRgEvEpZ2CQZw7jf%2BFb3AjUBSbpIEQdAMyXmnOD04YSK%2FqDO%2Fx76u0hGX1jF48QP50WeytmlSjqZjinj%2F2FrgY1VsbXa3ZdAAtPWMKDSkvqgcTqY703oGeJzQc0%2FKtcTVwWHLjfznFUvssAcRJ0%2FlNJPj8936zp6LgA09T3AYQVA%2F5U2XXi8WRTrxL%2B2jCtWtxaZyGl9Vp07O56xXI89wCkOi7y6T68NOM5tDzUDOVXBp9QysM1xJTq%2BUXNe8bwIlR9WG64qqqWTDgje2%2FBjqkAXh1RlKUwLRmzZuOnEwyINauHl8X%2BWGMh9XS9cjc5r56GaCNjUG3bseU%2FBL2U258lGLIjFkQQDQIXwXAz8pXOqyrX9hxesQ%2BeI9H1jodSB4ONBgkggYENSzAWK00scvOEnsNMsF7XWnkLYg5gUaBn93AEpI1e6sDhB0hp6fyV4lKmBAPpKeP%2Bn2xnlraCd1uW0kBBLa8YB2GM3nXxp0s4zyYklFu&X-Amz-Signature=f6ad5e9757dfe0b4241bf327fe0757e5ec078018e001a1cd1768353d42d22266&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
