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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QH2NU5Z%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhUtn9xlW%2FzTZTAslNPxxUsb6Kgj5A%2F5M77r47HaHrWAiBeobBRxergQoExIERkqaB%2FzqrtluHaqH7%2BOUU0bV0KMyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGpt9vOB1e3KIvPnwKtwD3LjK9KL9%2BU5L1jnrgNS7Vo2201BBYukZH0WW8BWgbBr25qDn4BxpKGwERPrC5jAf3ZQ5AAcgopsh2BsM8RAQEcUQ3KgZSPeaNc9GB6q5ODn3bQG1W5pi46yMAASRVv%2FBkCquQsc1JSJdh6JdEKO4vi6%2FWL1yPDMAfNmJ7HpQtiWUkxJ41Yv6t2%2Bkr9RY4qXdcLvWSHk0Hjgbij2fgBBeJw9mnRz1uOSL6YznPKwoDXSvaKlfe4Tw3z65qzfVS4XEjNGwN4IS5pLdxRUCXwaPIetcv0D42wa0enz72%2FIlCRcRsnxwj%2FA0ZFUXKfXWCbMbNejcdT2tiJJI36Pfd7Cu0e3CDDCADpgcO6EEMZdCsmMO2N4EFRmY2OsdshyIAYZDgplOJtE6rcRb5pswsp7pXeVGvhHP%2B%2BQW97%2FSNKvnnSROzJrEthZa%2FK7iPd%2B3a04xsy7Ck6UvKflDJsIZLOJrAwbuPNhodgvCoZEd8T0C%2BVLWfj3tpMU8fuzPUwmjH0EQo77iy%2Bzo%2F6vV%2FrI%2BuhvMvpgDjKiDR9Z4VRkfjXnBNe81NQ9ASbNSdkW8qKzOvLdUfK5OoJ%2FNIQT8bH2TNm3z6auMlB2TKwY7OAwJGPtCgavsuUqOiz0WMfiknkcw%2FtG1xAY6pgHpbuY5V%2BCw5Iuz9%2Bm5np1NAereRsnPts69Gbg%2BhuoyIiK4GRqHcni4V7nl%2FgsFCjV4rCJEnXLGTkQ6hoP1mYHZxtya0lSXqnUlsa1QFhPLr7aKijEk2jD3RM5%2BrE8Urf40H%2FDkij8GcFF5iYz0VHAx8DzTPqjnSjmysOVj24B7ixvwQ7kxw5Vkv9ZE922QxR0PKZpIMxYcMX1PEM6hWYGaf4G2RUjX&X-Amz-Signature=71682f05beb0fb4d48ac498dd40db526172e2986114a70deb0d929a2dd7cb547&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667EGOKAD%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFzrOtftSKNRxflR8ZM6FLeHLXTx4QqxcX6TLf1TAGYAiALspxMPkhRgJzI8ZbCK4MQRTMl0fnM6acKmjqN8FOmeSqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkDNeg5KP0da4CvXaKtwDh7H8oRzGi%2BTj02uvPwNsV7rE8lRv3PzvUGntKW6zPRkN%2F5%2Fp7LCAYVADH8ex0b1IuyHu9Pq%2B4E1CKeiruA15IrXJ7U5TNQXEyZoClCiRnr8A57WybMlkVLLjbgTOrlA51VjvjrAEinq4SapkGFkX9nj5QcQ2Ujd7FwprXmoq%2BAcH2bGT8VQA29fAg%2BwkMNSRGiZkn6RHVvWExrEh352D6ugE0HkqiUOpGfuIP66ysJ%2Fpwud1XHhm5PictRvdWK%2FFLU%2BNurMimhUYJGqe5UOp69ifkDIF0Yi0WB8wFCrw0TNRcmybJ8caBpLetj7RgrYx6TO8kz9HJcgxoLToGYBDI1bEcQYrPaKFUF%2BTU%2FqKYr%2Bhbll8vg6mMwLaljJz4vd7U%2FQqJYgdjb%2BWEf4jYqrnP50nTfsvNpJdV%2FbdQJvT87gyUqiHf0cooUG3L3H1%2BXsJmQzYLbyMm6anArR7193yyfuUUdQbcw1JGVw3DHVOlaM%2F4QPDOUz6VDTEcw%2FW0wZ8sjX33Oq3%2Bb%2Bjt%2FcKafptJ0%2Bfa8eEiTLwqHgD4pKMl3p38HmiOmRTUY9oBcoL4FG6zehRUgmr6q2bmClRdDdrUmZlOkbWV0%2Bzi8CAzQC2kkyonGtSVjvuBVZqGeQw7Pa1xAY6pgGvkp%2FMV5SYPKP%2FyHFeWtq9f%2FNH0j81YV8In6GAP%2FBrYwK5KXsqLS8EanzopdZvy5LmdWtoKjTWh3HpxFrdMvuCpvgGiWg6C6dZh9BVGpLn%2FYNMJ9pOF4p2TlbZ8rDphZybzvaxs2MJ%2B7kpzSBFJxYJOIda2ugt4fSunVxGcd9u5cNBirYPrjpZAftmxvpkUezYZfoI7KjWIOqazDZX3HN6D92gxcl8&X-Amz-Signature=ebd5ea1f4133884a987cf871568c01a4f36e703cec53478b19de7de05ebe4734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
