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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UYQX652%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T150932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCpaC0K9Ch1TCSgKhpzEi2QHf2KoWX5lTsYyBRhKx%2BlygIgO2ZAVId8quaCOy2S1CaDCqhRejuXhk07%2BdYFuAtENG8q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDFeYsOUYFfswzafhtircAwbxZASKk4dhV1YoECr5txPPQh6q3%2F57%2FGwnBQeiqpfWAYM6yMd7Q4ywRM047bsM9JxKo7IySk9ynjPpsogm9xKm0yTYICWSUpe0gzQmWQzCeBsPPjgn6s%2F%2BxjuUVu3iWF6fSbwJPjf0Pdr8QRXPPdQcmPtG2b1IM4h%2FmYuyMH2oqGArMZjLpeTAihoGwrKY1D9EmqoZEVw1NWkl88VXHqHHCjQ39RUbWoA4NbWVhAWO5fUCK5L3Ob%2Bgj8xKlvD%2Fuf1U5PoXL2bRGMxp8AWincUNWZvr3sZ7yICI5b134IRfs08QmXowXAI8XGQMKzQPx5Wj%2BQ4QuDlGkB70LHjhI%2BjiJZrxR5KD49hTiETznVnz3I9wmsl%2BrXlsQ63VfP9BHEDeNiFrrxFa4zI%2BTvkpVjyV5qJctjWFB4ossVhPR8mDFqxvjEwQJdPAl5jv%2BlTe8%2BV0BBWWB0lCHYJAexgPXKM4z9sYvJ9pZAwR%2B5EGbN2yyIo7%2FVZC%2F6aSD8CeX%2FPFIc7Y3DuXZS6KyhkqpNkwUZD13PGLaciFYD34xxcuwv3NGowM4%2Foy5AiqBbmB20rCSycs6qF0Nmqvd2KIxvdleUlwJ9fxcx82cOWePLxcEpiUa777L5Fz6K7Oda20MPvvl8EGOqUBwG8c61vezo%2BwAZ81fDGqILDyCXp8vB7F%2FAcQc72Qe27qozDeCfGpYcagKGUOOeDKlFwlMcx%2BDFOJ%2FoGGCV%2B2WPEaDEY15hyq8Cl%2Bod8QwsYxH9d8%2BVh%2B2i8Y%2FArKmj7Ot3unfiuY125%2FIigL8Qrk2Ok%2FuQmbMuI644LGSX5HB8OSLbOSiD5z6J6XZeQ1t0%2FjdCQ2phKXuM0oAoTVhKPLcoudLiLb&X-Amz-Signature=bbd91df7646fd7cf81a8a86b9fadd983e2fbd0bffa72ed3abaaabbe353f4b5a7&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMUESZUA%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIF%2B1%2BMKXo%2BqHk8175qkoZ1EMcYHoS8xvg5xvOngGElhzAiAEcXO8WMZ6GjnUclH2YBxuKSGzWIaoufZwEhP%2BB4PRwSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM%2F2%2FJsGCZflV2apmJKtwDLMyEFDY233ht%2BN%2FNSOOaNBCtzL3q20BKEU%2B8jOauQJuHGGeyjhTcWLRk974UU2lMHEfBFudzHTsApqJWLa5io4p%2BGnPKo0WEiRIx8ubcPz%2BGGqCXwwPDyPX2ZJk0aRYGp%2B8ogp0I23brG3hwwB3Zp1zJKK6wBar7i2LnECQ%2BwTsRGCo%2F%2FUJAde%2FIVPVBAHf4HqWZy%2FY1uEqd%2B05YlZowULcaBrX2JHIVIpt1AZvAZujLpPx%2BOWrIBGpstK%2F%2FZqMICF%2For00qyoqct0l%2FA3k88mhpWpgrfjzzvRBk1P2xMMmbHsCzpM8%2BLVBNdol7PLyUg0NucNzjcBCjjFmleB3rvX5NqhZxJY7tWJ%2BEOmkSJKjeTe9PfXzR94ZEBlXKfR6mxqp0cTuQYT4yBFho6nH7XlZt6CNJ75snEF4MylwIhgaOpa9w0hCfk9LNUz0dWuRztVSqQuWgFYSXWbQnspIZG8h2tY%2BrIZVLFhlzRUR1JxcaYRWfRo7uNAi2EsvBZgPAKR5r0tof7rxpN8P9%2BAF%2Ff1GmZZO2kVAV1PBFMczsmnp59DjRV7PdHsffFGkcWZCTGVfMY7TgFBpry9IF%2BHqjz5QpvfhyLxjZclVGRlKvo9oWqNfHuM1%2FmdBpSUsw0%2B%2BXwQY6pgF45XvHpDxYEdcD223p9%2FD%2FQb8xSpBJE7hbbZmV%2BiXpnYO7zA%2BxfOSz1JZ%2B6zrUEPjfPYeXTJte5%2B9XgV1xttQbhitn6uTpKC72D2zI46pBkbkZLO4DpKcRECOzC5GmODQkv%2FhTN5asZIbIZ5nlZiCm1bGNAACrvT2ITz%2B%2FTFlpfyXwfjIn9snthGSUQu7x5lh9e6gPv3PdvOMRjDgDf8jjAGqJAJ58&X-Amz-Signature=bdca6d0c13d44f3b6d5f5cf604141b28c3a9fcdd6a5a83f137118098b05912c4&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
