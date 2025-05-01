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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP5TBLHO%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIBKy8dPkmLK0shJqPKs%2BltLCLZdjA1s4oBCiLlGlADp4AiAhsUNeb4641Lhjto%2B6Zp3HPU8JWQKtBmprBDOym96DGCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZJl%2Fh3mdm29Yy47XKtwD1PFYFZ52JWiLCBgbg2Cpy0I8qooO%2B01aQMzMJgZGQzrkMoQBvnnx0w8GlUjgygCjz5T9d8dSS7SMgwuKKiWKBXjPVJ%2FGHTxCP99hbDGvekvbMMk02wDbB73PMMmJE1aUPK3%2Br%2FpmkQj5ixNWtWrI9u2onfVhq3zvzuERTIiZfZ9N%2FqlYfYd19JwSQ3b60l3%2BOFVrUpxZ8XPtkhm8xmARZcIgQ%2BM7Gm7aCcY8woBiQccvwqu2hWj7mxCol2wjOLPZeEO6pWAwAiZL%2B3%2BQyLEYbJX%2BB%2B6m3ALuL28EKnMxaUVDq2jP0QCE9b7uJUIRCoSlaZnTLbu8tkCUoCY8APZY6JwnHCSMSRs0omW1VagVm9TALxscFxZlik3o2uV986iL1WiUnd0PHHScqunClVyp53UImnG2jCQr9YctbSoN%2BpxIpHxpIsl%2FgfuGeyiyWB1KRD95eS0NywvoEIYwt0V3cndlh49CnhfTrhNOGpkoVPEC%2BAbo%2FN96oDRCxmIHb6cNowg553Q7Wg92c2LcQf6E75K%2FssE%2FXAq1VrSd5nKV5ePS6qLGZVkyobsDuHi802CnyyMUw3JOdj9%2FrtMiXAgLvxMf7EpCLT9oRe1mrQJqyY8DcnQ5te5wUE6e5T4wtZ7NwAY6pgHeszAqMOsKWmdSgBEqQu%2Fnqp7C2FCFUr1ah%2B2eUy4UUQem59iUd7v2YdMFEOm1x6MDcoAHx9jKWsHgESQ%2B9zEoUkQRhrwEboPzDlCPCEljJjKYbgN%2FQfwqd74XJjSiaKBi%2FECVN4Tppkiaq5rMIKZ1oSMplgIURj%2BEJNiLeH2BmSrDAu8B22meFbdP5PEcTeVdSTH2X7zd7ETOgpOwGi48ODLsJuLk&X-Amz-Signature=83f567352880ca6b90c518c452dbde7cc33d6a8b02cc776b24a99b6c4427ac51&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAI2C66Y%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDLkWG%2Bj6%2BHceYnN7%2BT%2BjG6jq4Slv%2Bvfox8UUFSasAZhQIgN3ysLJ1G%2FDRUZBKKSWET4TnsMZlmhQ7dApDN64QiyUAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEi2Pf6%2BgT52dv8DyrcA%2FNrMzRMp3AUP48iSNPFjwqyz%2Bo8Z41W4r93x8joj6N10120YrSbE%2F50bXIJ4n%2FH4B0gRQsphIqgrtjiBncWRMv%2BAzr%2FKJ9%2FTYf9jxSxJpUSZuq4S3Ffaq7Uz2MJ%2BenIHr1N5yj4nE5ZM7hqOJV8LdRP%2Boe1h8cKNCQ%2BhBa9SYg4GQokXFuSh7hI%2FzkBS2CLloH9uKYs8JcdPmtagZNo2VffCmir1%2FsOnQblqPSzpwmZv4gKR0Y4R1VrL%2FjLBgJZzqwRQR%2FYKPFeZ5ZzcOYHn5FX57SHHpN8luyK%2BUAl%2FuQVGiojXMRiP3MV%2FCirWSeaf77m48%2Fj8L2mHWvOsXwRCExqeI4tqwZ7wHQwP5G3jkfw4Rc71E1D6zLeoOwGu3W38vrBuIjy7GzwmWLilE5hQOnEh5qZEilwQgL6qUVaWMxXbGz%2BOU3I3ECpWy7mPssIzf6LW5wXIhB9K3W8STsR4CRENsfeHhn03%2F6mn%2Fl4%2FyxRGR8u5198n8xRl87tOVmlq2R%2BqsQGwyvETodGEEyhi6IjpDZAdCy10ZKdJomhFzl4tc3CttGat1W2aPP9JUd1NYMww3bvMxMwHVGrW16WHpb2bXrHT5ZbDpyqQuiO8Un47uzay1g8d5%2FYCCh9MOulzcAGOqUBQ1ER7m4wjvun7njG272MFVi6nFELOmT6inYvfvUJZqnS%2BRw%2FaeCSWVAUAnCYmcUDWKiTxDgWm58%2Ft%2FtDuLForGKwIY4LQLpFhU8QY1EeiWIAcTCMFndojmwC1ZBLVM7213EDzqIMT5PH9fmSglJMTqBJpNM6%2BYW8f7P9zT9W1Z%2BH039VQ2DRFvcbjlx2a%2F%2BzXgFpgtbfrxymt53ylN99MVUUT%2B8G&X-Amz-Signature=df4042b982ce45a3d7a2222fdce0741d96a71fd0e4ed1a502a8ce58e0f857fc8&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
