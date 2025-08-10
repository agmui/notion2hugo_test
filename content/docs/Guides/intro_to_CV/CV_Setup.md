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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EPKS5TX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHA3XwzfYWri1BvRm6QFaarZXXxvfWLgz87vHHPz2y9QAiEA8aDe%2BvW8BgYMtKJ8lzAz2T6ISVrwaiFXe5DBoam2ZFwqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyvFf3s6tPcA6PwkCrcA1fKXFSpvG96JhfTkBEj3mLrYtl5r0%2FregDnjcKsvKunNCkanRcM%2FvvQj37zr5W0VfAXBHeIkdQ3T5GvkwzzI85WH1wdCbRJjm%2Fw1N5FfsotaQKwlQNNFl49U1tW1YLK5kjBEq7IALRA9RmTvJV2C6Y9Xw%2BD6O7E0ppmHrRHcX5hJPocYup0hdNpiaSoBKLNHx2wLdrKa%2FrEfWkkSGK4KNo5BkdjoEFSsxwuG9OASAUYcN9DMqbJi0K3v1QLN6tN9382CnfIuiQus9NgjPgmXhxTnyYlFg62y%2FNybfMVcreURVThYp2gJllB9LVNEziinQUQcn45KsP3M56mE0GlhwQAKqegDYYedOYrkd1u0%2Fn4ahVMeoa2L2qxPXHng%2B5w4rrrBikjt7QRhWc34RqG4fK1Xd%2BsCc7fS%2Fa%2B4AmDDbGhSyVcneWfBkW4wrjzAgJY7w2UCeOLqck0wwGi8h01l01Hf4erPWD1YW6QTonb3iMHXYg%2BuFdWk5kAucgcs5JDp6lpOYgwTTr2plYqCr6ebdGyF1jTTavogwMdA7W4q8190wA8ii%2BDm2gQ2VjUa9XfqeInY5lU737KKEpAT730TvgPaOYj8AQ7wbOHPGQdl8Se9o6ChjKBb6itAuTCMLL14MQGOqUBl1xTJf%2BDB2nwPYyhsiTMaR2JLMslTHxeBrWWhI3KrSgalV87IYYyOYAV9lFTfTaNMSVZUj%2Bdbib9js9rDfw2EsSvJjDtafO29btHGL4%2Fs7jMLQGastbGLv6LGsS0c3KzlPln5rvUE4hgdLHkA68ZpQFQP3%2Bp1Wjtl11yARuidE4nt6Ts%2B6t8fRJZP4zgfzx8uGeH%2BGc6AP1NABwM2dNZzk1AgqEt&X-Amz-Signature=3b65b88d902c784471be910277fe80246c06cc3139d85f5ca286bf81d779428b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F4QVBSI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8lTcdl3GzJ%2B6EIcDbgFpD3ZtMlxczW72O8x%2BvdZa3owIhAPlspcwrt1wqMZ4HdHZGXXLsop0ftjqUN%2Bsx%2B8LkZQk5KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgMtaYCHhbSe5Ki44q3AMxU73Lj3N85Amnw5xEL21nRgtfXLuS4bWVuekbbaFH0scALnUjnUwQ9xEPzBwm%2FR%2BsHm9SDQ8tXPxMg0wdm72MmtSBry4mSK3amIPx3UjnhmE2CJK%2BRCY4xLVsLNQd4RNyEO%2FEnjrClj0JbP3OPxMHJdVj6g7KUoCPAi6CzoUtFPZIqQ%2BhKUHswmiLN6fDWYDMJKuaIDM9roo2tAJKygH%2BO7jKmicLdcW6ia8xwQEg8HY4IfuWios9%2FPa5npg5A%2FYlho0wIY%2B7wxKJx5t6zjdtSM0Rq%2BNKHaF7JaZOYX17L7PenD%2FikG2IBMfEM3JqlvOXnY6nDE2R6HHXDbd%2FIhRSYd2mhZ8y9VkBnQ7opSD%2BtGpKzYNMRzKMo3SyDE4%2FU78hEkG8wBIxvJDECs2wtDc2SpnU0bxfYcyyb3vGhazqaCiku8WCT5vFySCQDHgz36MbgifTzM0Pl9jWg%2Fl9L96KHsD%2BVHgWeUaXOj77yovhnSaWRNVQTpU2%2BH3AQY8hjjrUdQj98xmI0JTCw7R3hMsseElch5ZyftLaCTBGTfj9qbMcIw0%2BI8p4KgQsmDPenf7IZvY%2BTOJTEKkGHrhJKvx5ErHxyr%2BlV14ZNHb1coQitknhR6Mo11huPbZAbTCQ9eDEBjqkAYkySyqumJzUA8dTRUx3cZ7xnxqLSvCzL3B1XxilssTcoTDWgmw407y2FyxZU8Cy3cUeAy4hJrILOViE%2FUDltqoOjppy6a15q1CpF2jhWczWDCwfcPzgS%2F92kyM86iXXd7dH3NR3uzre5y3TkcNfwGlniMsiYb1fHVw6EBOlSVrm99d2LyH1rRvKUfFCTG8SIZBdlA4lpCtf2l0U9e5cCBjTXmnH&X-Amz-Signature=e17247aa61a817aa5742bcb2fac73882de7111cb27e3bb641283a1d3b60fd807&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
