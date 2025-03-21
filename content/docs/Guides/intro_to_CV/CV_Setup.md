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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NKG5YHL%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCwUyvnd7FA2xbO2tv3y%2ByvtkFVTv0qDDLqSBG8cxmAeAIhAM2Gn8NTYEDgZUH5RJGdgvwaT%2B8gEgCKUgh6d6Yj3TESKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmSwhJIBE3sf6RoaQq3AOPRBpCRpC2DN0xLPQ%2B7gJtgMW0S9Cmc4H0HyQZoiAymo%2BFCVrwsIUBqWo110r7ezh09%2Bjl20Pv4m4d8CpJ72%2B7IP7O76cZP5shiK6IC%2FSfGIObJoSKiMpyQ0sz%2B5rmEYpCJoep%2BMpdm7xjRoFdQ5v7M3afnRONCHTp7zRFff4J44mXbm21n9BCpg7VXXHjJnSxcuLU68d%2FbudxCPy%2B1t04wF4tL8O4XpIHfC1a5MFK83Bx4Lmk%2Bvt7jY24Hao7kgmJkYqU3vsDz1f45rPejDYjlhb0a4OO%2BZ0Aki2LuBYgorRDgf6AXmRnGR50drtIRcu6w7I1RQul8Ufabk5QY7Hqlskfd1AmbmNitpj9JLNDBPCG2X%2FihSG0XBmVQvNoiMMYkUjqDjEx2y5QHS9Pt88JwCLseYj9%2FXoVYzSffHgQpx08oFyqTt715Qi5R5U%2FnyTrEyLlbVrzke%2FwL0H2sCIQrpV1LLUHe6llfGJ5fSc%2BPiNOhqOsB9FccNOtH7uklGkBB%2FUdBQJHLvZL1PJgzOwSJMuNsxnCWBoFAblcCXdW8KMN0N40a70D79LMvdvM0E%2F5um1O%2BnW6Bbpzs44Itv8tt6FH5MF3jwGMkK7MZxQhpIitW0ud55yX%2FByTfDC72%2Fa%2BBjqkAUjqO8R%2BKlYaJrA2dMdibZozkLkHcxpge4vK%2FgnW5rmFJ%2FODJTG6B0rGiouT4GjMh7lk%2FyaPPoWUyIJcUyqoxbOvS0Azw5MhKzGeAMn7M6uPKYTBePnjVcwcEdYuU1moRDO9a2NG7Oz1lnacoDzYJYAiA7a3CwcWSi3pTAidmHi2zDzBVnspPUKJF1XAj3ZiR2JZnZTxnxgXulkDWUq%2FqUY2p4FP&X-Amz-Signature=7d071bc92617068b00305a1b3af8d1097abc8bdf9e882f8777926704b1d0022a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMXX4O5S%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCL5pxzjCoxcebMN7UbZLGOei96eKbWjlssWRh9OpzRsQIgP4Kqwz7Ekyo%2FOgUeAy12Qc4DGN2s4B9jy5QGizvp74MqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnxwQP09zkp86zIlSrcA2%2B3fHvKgGB18UiU3lSfcCdWAMs%2F%2Fxojpw0taBQjw8GQiZka5mEMeQeuWC2C0xRvu068sBxYtsNObzgPkEAPtRN%2FiifMzlEPZoAN%2FgdYL8XsRarPOHZKIE%2BaAJDz9%2BHusf4EXxKtIiX0%2FQx6jIOr0B%2FrcQ9HyV7AqzSviWwaBW6CoPIzWxWEJbOozi0SMtQ0NndZx79xzKfIzQQdx08VXgHSNVOPrUEW6Ygu1FA3HOO7jn%2FUUuG6TmNO%2FujRBvq5yajgKxFcUjFp8w7NXxSYU%2F5Fe88Z58X8ce8M2fWpfzD%2FiQ56KawHTa%2BMgSi4kBPA0hAsL%2FJDBVngsBGdX%2B%2FXbUPxc77sMYLVdKKyEHSkQWO8PxDUB%2B44sm8OKN6%2BjQpWjGgWyChTO4TERwP4xfzi5KpUfdTeAg2J9r%2BP%2Fxt1Ag53IGSCee5bBf8aFObPr7Klv8bh5U6%2BcBgzuJqU%2FeLgG2s3EIk47gaVVpxfR%2B69Dtg3NI7v1ze%2FD8ulOgJjYRhrtv6QAAPXjk0hZEB1KWqoGXtxSPldYXCbuZFtXJqURkaGskSlLkHYgcyiZ8JSGGQZQpINpvd%2B5ZREiAPoKoNbI9eDW90u%2B6pBz2o3SZYEu4qbcvFidEFKRLXgngucMIvc9r4GOqUBrppHVa16CsXa8RrAMKo5pWJ7seePiUEvFYf7CeScJnr2j%2BxMYObCGKjh%2BEtc75M5z62HBM4L98V%2BN8UpyDZZT3fg6nw6jszL4dlmQkmQQwXbwm%2BwOWwgGGmhFKUm4B9lMDi%2BBn50BB8NUoPntNBdRmZA907GUgpyt%2Ba7PyqH0MYwhUdpAhvjQ5B7oozQyb1jtY4ReD5J%2FgzASEtCd2wDtG6oSwIT&X-Amz-Signature=75afb88b5313573bfdcbc6110d93446eadc6e2f756a13e31c58090ab4f2d715a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
