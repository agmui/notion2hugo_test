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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QLX5HIH%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJFMEMCICynNmgEEDix%2BtLfzBOeyM9pOmyK1kd94LkrHt%2BY7pErAh897pKe051c8js1jdKs4vYjvQpeS7PmM6uWN2PLViuGKv8DCHgQABoMNjM3NDIzMTgzODA1IgwLmZqqWUB7Fn7%2BNe4q3ANYzX1JkcpAEPLFEyKBBBckX4JfQSrAJQrNu7XCe6zez1wkGePNdBpjbXOHY6E3Sn685mXy4JfwrQxHKhRekohaQXduUCW%2BrzGMSfxK5GEYB8HgZxXcO%2Fw0HNJJMIQHWH%2BOofyHM8RM5F7aaJXwSN9xF%2FF090K48eDd%2FGxEYTcNDvFUuIfLiWYrTDmQnKbrElVlsa5uVblNkZIae7eRdr1qgOxwrEeFYtJk961Z7d6B%2FUHndYzYcsAyfG83U1IST4VCSvXZi99S5j0b3oQ%2FolHXXdWc6dveB0joAQff3gTQhl5xgv5jWGLyzDvzZ9%2FRth%2FNm6ubdl8LBR%2FoLMA6eW1mVnscm27NiLvv%2BH2fNsJEekJLwxo0dbWirrCG7wGRUwwHz3oSxixuLS2JkB9s9YwL%2FIcJmYBD3h9CPCkUKdHUMymj6QYnjf7TvA1oCUBXZVy7Vt7XLDQMyLEWBF4%2BWHjeG0LHQ67%2Fl7%2B4eFBxNTVyfZbshbK55IZW64uuLRr1XNh%2FeunBQEqgdFvty1eEzn4PYhkNPI0OkU9lA7WWhZklPCGx5fERG5A18ccgQ2avGz6UYZamanu94WakGmmeuQUBkT1JVI2ahDRB8WVTRYFlg14QeXa5gqFCCtuEqDCPvOu%2BBjqnAUnk%2BPU2UAG8Tu1U7ycjlKvMLTcCg9M7uHo%2B5z2xuzAXzDjxn%2F6X0U0VievdbzxcuUIqduZ1e1C38rLhvKL4xh5jS8dJ73CjuK36QD1K0MXzrKdYg1wTlXbHUQtsvtJEVQEH%2F1xmK2c3n9vqvzpzqyzPVKIBI9dwVUynXHZbY9VHQgHvT8C%2FSmWqp2WJxDQq4GQFlDfrEc5ahhiZZic9apnLNAYzytvI&X-Amz-Signature=07c557e817f2d85354e92f24e65b226389f0e28fb791952b3f1ff68b8a2c976b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OUI4EMS%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCra014nocrLZ2ZMal5im4%2BQs4WTUvCApY0rZwOAEG9agIhAJ%2BAAhiU4QyT3SqVGeeUhW6BgVs2yLSxn%2FkGrKXBJeq%2FKv8DCHgQABoMNjM3NDIzMTgzODA1Igz%2BxoBdS25ePhcZoqoq3APs%2BMJl2UGC0dDiDlE0HC2j%2FU9PEqHHDk2exTAZ%2Fw3i3pBUka5pQrQxP5h1MH3eFCj%2FfXUqibwUlgjm75A7TXmMAlFkJAJzjRnsf9ZQgbFAs%2B%2BrvEq0Qs1vqO6YS9QQ8VfiiFk0AFZL1QmL0xKqHnHsyRDalZ7TQmrw0CVmKiqOdOoC25Ylt534XEbD%2BPuYH2b4vP4ClXoAxabipXRI1m7%2B1zdt7lep1p02kq7lVyKwfC%2Fhxh0w6oT2cIJQ7WMQuFw2Af8hxyc%2BPqriX2%2BwkyotA8qpKuTyoM6iMTzpgZvAjR6dkPb3p%2BK8RLL%2Bv%2BpGbqiZ3XVkD7fcyXF%2FfLnUqoscBcaTcNTnRtw%2FLtdeOSInUBNcmXBK%2FBZIE9n5znDqeks%2FZIvY2ROdJAJcNy8y2PBbICg%2FK9BI42u%2FKD3Nkel1lZvmEf32YpHOIdUJcKtfFnNxvPS78AWzfbcoAtwbXTFY5EWRKfhiLrovmYbk1p0FxSjkHDyOPd%2FkQyA4jrv6TP2edkOfpThF8z6KvR5fU04IkW%2BLIGGZ4sxvTOY1Ev6yVmPztxJeU2h8JabwNlNL4cFFr4625VtDXh1o0Gc%2BWiMLX%2FNoALrQ0L6t6Gcg7lRNtpGt8HS12IBBi0%2BmEjD5u%2Bu%2BBjqkAbwh9iSkSL9f51fGclznNQQE1E%2FTpj2FQe26m79v3dcpveXwUCEJ8mlDPCB1cDVSSlo1AP8OkL2DuDobFyjpFgLpDpIiNZ6lKqndfMnMRx8jMoYuUeFWdfSVFU%2BM9YZ2f2cDX1r66Ucs%2F%2BwdRnZbtXSZ5Dre8yE7p%2FZOcqqrd4UpO9T0YP5pUZ6WLgFgpJgK1IQ1%2FFOOpQl6Iq%2F3GU17pZGZSinJ&X-Amz-Signature=eed447290235adda9296abfb00a4e8f3204126c74aa21869e7cf3b2c970fbb13&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
