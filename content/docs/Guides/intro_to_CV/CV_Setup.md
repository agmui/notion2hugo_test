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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3J6T5JG%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIHfEAI5pkGHxr%2FeSpmM0IQVVGLdEV83ttdNjTN%2FKt1owAiEArUhAjmDt%2BHSTi5aXMB0nAlWqZ4y6DGUWMskViL1ifN4q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDFcUKN3BMar%2FL%2Fwc3ircA2zILoSXVagmzCS9FO3RFKqlkkZjyWP7BZ0N2jk5HQ5HtvOK9tTa5H63csahM3%2BdL2TBdjbFi8i8xn%2FmI9he0A0m0RmmEAy1WTUbvIc8j4GxkkbqnCeGr6f9hwthF8IIX72OziA4pI9g17zAWhapAO%2BoVdQ0FM%2FsJLSoO8RsFCPcqFKaDxJMMhO5eq9qDMjgNhqA5PWY9U6V4JxIejmZ%2Fsah26jPmqALe5eAoe%2FZavN%2BlZqi82wvzZcNVOkXTdc1BN8WjPr3Gv8Z0N%2BYNK0IrFrgkGkT2yS6Vj1VVLVu%2FDCla6QJ7Uehr%2FNypZ4Y%2FRKnGHjhqN0Q2LQ9I1fJTfJbQLHCgNe3ysc9KYSJsmkQA7eLO4by%2FprqTA66%2B%2FcQjdMcJzZeOI2tvKStAUvtTCwnO%2FmR16ojWL7eOP29qmx9G4h%2BK9w16C9Uj7asB06e22lbYCBz9FnWY1UyXsg%2FOFXZ077gmRXV5OYr93X27Fwmc5PMyqFb8aeFyUkzDltYBSufs%2BseGCz2XWHB8%2BQjfV6bTCmlAuVpWgp%2BY4Pc170PpJUWCdiyYzXftPMVG6%2BzQR7IhPswmbmE5F59EJFX2quHCm2u3s%2FmqdndK1q5kPIUts4tfmiUTlMEnXI457spMKz%2Bxb0GOqUBqi1HT0IFzP9tR0Gse9RiCkfIK7%2BTX94cDdnSxGRciaabSvY0rhovnA3DnH9s3j%2Brl5gFK2COaG1C3kOQfcVmVFXYT3Gt6GXESMeSjz6Wn%2BTA%2B03paip5Hi6yGc6pjfdlLk8KV65OwMy%2FXfHlBbg09bzZs9vbv0AGcWqRtC74HobxMCL5fO0EQ9pdkkObA13e5i1NMbMupZDoDWiSLCTvBsWuELbF&X-Amz-Signature=2bd94374e285890b71bde35a5f7466b1511cd851764ef5d99aa3be6b88668473&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XENLO7Z5%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIDUmSKjr7MuXIp%2FQYYZNsQM6dZ%2FRdj4TnHk8TslMkALFAiBkgPosZrqKyaF4EoM7Vv0zuu4fZBQf0F7a5QDNgDnd1ir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMgS0Q1cWMBwVpGb1IKtwDAIPi6seV6NuHpi7uuG4kk1KxdGCyTdXDeiy%2B24%2BUzffab0CQrqVSdl81J4Z0IxeibfWDycgtFQariTvpNgi0aCeEdaDXGhbSdq3fkO5zL9E7J5hzmO1dcJpwB8VoVA6cAzB0YMs6pD%2FOJM%2Ba12ubk8Jcy9HsFGxAbzdMF%2BY9Zjs4DEGdEu0e8f2%2BNgDw5d482%2BWBRnG8YZprLu4iFnNgReWZdnNG54AbsbvniU7KEUnzK%2B2u3C9l1tCXzgQEoBbPFLj7S5c%2Bh5%2BDPijwa%2F%2BJL5lx1qhdboCbZ1Fbn6Jy1z09HCEcWGuMSiOwA0NPEOK3w3fhEVxCg0FlEeKvC0an77CjiNzwcXtONA4VxqG4fwIDGZIKcuOuq7s4n4hKRWSeHC75Qb2YJviHTLZMjZCsr6gVascmIUHedlQR%2BJMMf52o6vQrJuBQIY8G6kU6bQcvaxgY%2F8y0MaKOkaOkD9U2SfTFqrAoGFxWLpXTzICjPWm8r0TTxHbaPWfjr9QrYQhizX280mieKOBI94vcFT%2FBANOrPL2hDJFVbrYuoRzJrtYXaZGpVW1p5%2BSU%2B76ZcJenZF58wrTRwCuh7HzKJ%2BFrGQ3AE04iFNE%2Fc4p2JfoRerNartcj2xQRUwr47j4w4v3FvQY6pgG8GmLw8MjJH2wTJ3%2FOgGsbIWw8lqz3dn0eOYQy%2BXn017aAbhJeKf%2FuliCBJxlpiJL78aGhLG8aj%2FDmm12eSQwxlLDAaFtWb8A6JukJZRr%2Fl4u9oEXF2lia7zq3oGfedaON9caWiqmrLpov3gpmpW4dNwrM3NTp%2BHOmolLgwn4U%2BivWh8v6z6%2Fa0wOdII2%2FPPOSY6qZ3pQDktOEQQAB7MB1cbnSLqLs&X-Amz-Signature=c98ed2bd52fba2c5fc19498472c51e5a3ad00787920bd0dd148d0b347316d3ba&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
