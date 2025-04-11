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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMR4E6PL%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIHCWuKlOM2QtD4wUwMZxLzdCRwTk4LwfUqwrfGz5%2BeKRAiEAuaIjEfBAIcOQ1e%2BQcyFr5mF4wUyWlyZc3SmdvGgbVrUqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiPA%2FLwqKWA1THSQyrcAxfAxCRbIoDJHjJPEyO2Bq%2BrfFaa3wyLoyUQXaz0GI5VJA%2BUHD661xyRiR193pXwum%2FF9PBGorwHdEaDs86tSXQaTTzA1qpUKsHQ5h1RVEf4I2%2Bu4amlj%2F8xITTfmQ%2BGRNKH8Vg46tp%2BzdDELnOi1e1ReGlIY808FnV2QQHciECPrVZvwCKlE2GFgPg80TTJiZsvt6UPmfxwTySMVUptUAemgJAd2ETAnG5BhjbNhYjN%2BOYxvus4WR%2FXPm9inqAdLDyzHuk9a%2FXFSR1xWd830%2B8qH70KgDGnvswVVmAgUOkLE4bfr4be%2FzKbjwRiFtnxMAjiW2cimErB9HFpepWmTU61ZCCmcbxzQFsvEfHTeAGgfw38Jchbseq4o8hrm9JKEnqVmWiNuxgwouSDbNdrhemsPybvQXJGNkW4kSKKOX7p%2BsJ5tInUHYTm18yQ0GD%2FRbWSYT7tAI7I8XbXu9fNvRPdJQG7VjYNlTjO10FLPKAJo68EAA6bFIaLXOjAN0V96if0899zy6BuadXQ1%2Fvg%2BAmMA43p%2FzsnlxLONXKY3g%2FUHaXRA80fyYBHbwlwBz7eGeDG%2B3oKWDC%2BaxKPAbdgIUmlu5PYSwozBrs2BEh3qPwSrUYJyEAj2Hc5f3zRMPO75b8GOqUB%2BHnEjQM8qFiy9NGAFF31ztgr7QZSynRGDvk4qFzbng4PdHaP4krH1%2BqoNWnZWFeAFQ4r%2BdO3jDu48PM%2BVfDyg9g89EttOb5fmuUs%2F5JHN2nIbfpue5fI%2FK35PxNunL2RebjCgAkq57IekRNcCW5Nl3lWfB7QYvTSDtccOa%2BeFRy57xTBth4a2VbLmCmHy8KsXAwut651f%2FcbDO1yYSeSrQfseBe7&X-Amz-Signature=d5c2338a00c5a396067f42440c5ba414e4ee46fe9a6abec4d22ac38fbe577978&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CUJCIYZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDWo494rSgzjlN0Dw6MdH9Niq%2FkhiZ848VDaU3iwYzXOQIgcJ3DwB5NWazlppp9cTCo4vJnelkgUIUQoQcq3uknRIkqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG38%2BbzLqhrTsXSUGircAyKLsvx%2Fxg5lKoWF1hrM2xEammdTS4VbHp2ZYJNDZrb52VvCeOo4fBPb%2FwGRQMC6WkmYdE7O5egL1Q%2BDuX46dExH8lmngb15VYF1EeTQ7fDlD6baTIKT5ryM097Yq5TByXP1KxMXHpTXmtkQMb4suOADYO451IhdCes%2FXBkYXivHrXF6l49j5MjpCqsTmBh%2FgdYdDoEtjMgF%2FjAiTLhSiwJpZ%2BEz6KPlsXa2MzYAkDZsErjOmzqp9aosJ3eHFiBMuFgRPYiMe%2FiI%2FWRt%2FHg%2FZGtSXLmGPZ9%2F67Dk7cG5I%2B9jv%2BOYQRZfnNWKgHebNlOD3ajSQ9XIiYwOS%2FOTiB5OeQxjXGurPPZj4IxNjex63WxRcHxAMkugC1ZnA3AWtWZK3%2BQV%2BwSirvDcTS6uXc0%2Fpp%2F2NU80wfLLoWFO3ZwA0vnSxuYR6Lp1FrI9p7N46fka1gLQeuIol3PyYwGAGN1cJpg5ory4cJKsuWu3neeAKMcEa4LsZvFZlj5cYk8HJ%2BFTrJkkJ4Ov279omcdYHmrU0IESpfIjl5bstcVCMgQ3pwldxfFZoWBWo2huQTb%2FSHha1LplrFZ7nd5CI9e6sLxio8xJgnkqHTKEaUNUqTVy52Opi1Z5yBDNRGkgdQWEMOi75b8GOqUB1nKX0q%2Fsb7E7E3z82ZGwxZd8hVd%2B7UcU57i0fM5Z7H4E96sy8YAUQQGZwsDy2jjN4cQKoZt6L1u7sQUPaDAKIMhEhlLjjXtFj8feL0IsIiOptLHOKQwSNK93%2FXkJXX56GB7p%2FIZKLOub%2FFD5YcinPRzkkwrDp0xwnmIyJ%2F259uRddRTYURvCM6%2Bv6Du2zn3nC9pgnUJH3ecAEhLFSV6OxUz2XQzh&X-Amz-Signature=98e4184a8f0594bfe375be83a8fe30dd129ad02d7ba3f86816969bd26892626d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
