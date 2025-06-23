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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMWCMKOH%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIBqeCg%2BaqJTf1staWyguuAvx8beOLq7QxRb1px6OD5P3AiEAmPa67DUw6gac2HoM7NMZ%2Ba0ykwfCSd60%2BLQbW9LvP2Yq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDEUnbKkjVZ1gvysKwCrcA%2B6Zx71rOn7xzyRVBcgBVCVTfmE7rQv%2BrVVe7pduXyPOU29iexl8Cjby0XfYLUkq4Nre4jSjb4CsVX4UwCkCKxN773jqJEpwW7T5CADAkQ37pB2ofts84dyDAjG0jElmJyMgKbxIWngmIA8DFsOvtM%2Bsx3s4P5Z13QUC%2F87K8SjBvjxUlsn4FbTN8A4V3bS34Eo9ggeKIb8dkIKTmXRaDlj2vzSOxF%2FKCfWxSp%2FlHtMYHjhHPt81SewBheUK%2FYdVsPv38y1msxA3tmj5hcFmVaIjZmou5JBaIgbAsZTb9EqYEri%2BT%2BllUvZryJyBXM0PEDmA%2FIkvgaApV3IVD%2FIh8%2FW98PpU6%2F0tNDovElRGnpxERmzv%2F0RAw%2Fo3iuYRZwT6Z2miUPv2u%2B%2BqXQsiJixNDAXjHlUCHnYKDZNvas%2BxnBWuiiO%2By%2FMpVFRHhS40Wr2Ix0CRHpF%2F3Z8zi%2BxFRf0nbzOIjQldc4ogIJkH3qKAofbL92oYgcEp1vdkyBe58YlRYR4zHsyPczr1wHdvjeUSYGSYvXqv0mqUKQ8aNU2xYXeZJcYk2L%2B3P8Ug0vHm91Tdwgp%2BXsKZL6ncmmMaEI0jF2O3SSXh%2FrfQhMv7bUKdb1jgOld5H%2FwDCYaooGe5MIaI5sIGOqUBHolHITrgBs1KZskDfo0qSCsZkGTxN2BLDnGn46uE9fJL8WZVhjdwxD7Q6ilVX7i%2BaK%2FDMCQ401rTjeJ8skZKuKW%2FaMkmJJVV76h8u57FVxidXuM1FbmR6R3Riaa1heBUg%2F%2BIbqUz2Sb6eF1l12bQfUILh2M4uCQ2qLks5OupP2tuGKgf40n%2FPeNOMNXA8mwkgJG2bRKGbFoVbHngsI3Sz03cY14X&X-Amz-Signature=78f7d15a89bc0c4aeebdbceb1a36c5375883af806d59862d9f789e430341f415&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P5AMDSM%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIE6emS3FC1Zzv6SlnArH4EgVz%2BjUMi0WQ4r4VPjPWj4LAiA3UDPIxS%2FXIhk4jCGjPKtfv6Tky8kJS5oU%2BRHmaouAXyr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMdnsWvHPvSZRiJdkHKtwDrbR0Sgw%2Byv7miQ%2BF5boJohAWwas9YmHMGfqZYme7xtWGxnse40jcqZ7dpLtxKs6%2BT%2FnZ69S4ZZjmeXBhF%2FT%2FUgJxSVhIppIF8hQkbg8FCn3wOk90%2FsPZlyupI3nYkfz4NzO9tpODQ6VDDlJ1RrCp9YXCtvocOWMOk%2BfTR1kvIeyyuvx6%2BGmH0NuuMfwY%2FSXcRPYRoShOb4VtLP6TsnTLKorlyR%2FSKo8qN%2FVwTOkIEPsrOGfnRD4A8LJ7BqEqE1TCJ9Vig6LoJXWtEv6iHXW9CuUdhqU%2F9NKo2CeoFRm1RoemjM3Eg5JNFa%2FddOEfHmJdBZvEXHMjdhZDLIW8VLofZmEBOu9NrQNZzkxaZdGll3El1I2ei2PR80kJOzYY2YJNzVaXOW8WdO4E81y%2FpgB6d0nbo%2F%2FLVi%2FSGd4lILCGivBIsQa00DMW5Q1Jae0BGlEgE0SSm3wGS9k7a0Z69r9lHCS1yNG%2BgWXDx4stvwV1M%2FgK4yZVWgAN4Z8%2BRMgjFCfTrBmdpZLMTBU9%2FAvJLcGXOFlMfJAQ9qg5y1u4AmU5vE1eV4gej4wHrR2qUpsz2vKK9e%2FOL%2F0ZY5e2uRvd%2B1FEJZEgr9tk9HEIkOHF3bWRtTPjLzYIBo%2ByZV3Ksjgw0IfmwgY6pgGbnUp5QN12iloJdHnpAJoy716zFIH0wKhr%2FM784T%2BYdARoyV8xnfbHtxigGKl3Y5DEYM8r8OE8TJ2qRklBZ%2Bpo1AWc0nMnbtX54uH2D0ieZ86lMCA7fu%2BPkHw9J33j8FCRiQkZCJrZKEnIMX3h7e%2F%2F2UK%2BtJdSROwTdX8w%2Ff65euRRJfnLyNYxYsQt0iCF%2BtvOwB3fhzE2KiJnIKL5ucshJOWd5BJv&X-Amz-Signature=8161f962c10a7c4dd2df38256f88bc6105161e216307f8beda37bdece82a0567&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
