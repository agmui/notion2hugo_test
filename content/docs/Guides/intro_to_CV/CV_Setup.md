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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZG2TILB%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIDyoAxQDvC0nvKbWkY3lUhuxi5lPtKTGFWOO6gchVMvaAiEAjgRFhUZsH253409E3vDNzd%2B%2FPdli6xbySP9vrGjovxkqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPpKkib22EwNTRI8ircA5XjKSxOidE7tHIgJa%2Fp6FuFXBUOXS7kcxmJeDZavdl2H4xNqiVdFKIqrcT7eJv3EJsdCO4KdhzZcsXHJ6JFDNl7zKJ083VLqeJ2DnGOI8%2BVTuyl69KMpgVYHCjCbMFKbaBlB%2B3iZAL%2FFoCYdXIzAOerHHybpCKNE7a5F6XfMMGe3QLuvV2fP3tERCkO8LLP%2BScFCGWae8%2Femw783TEMNLtXDwLLlX%2BcGUMmzyesMMKhJ16RhMN3s1sFaxHFRZEVHZgwdNs6rJh9KhhbGSsd7zGvGtGvSiEwjhgnFuUM%2BaonbqgkR4hBQpeB2DsgS7H5B4UbpX3InzyAIxlpcP31iQLxVl9LHuTssLOMFKErqqrdKMWxs%2BaLLrWhmrOD%2Bsnvq6GDIaxCW5bH6hLtx7oXxI9Hl4WmU4DZ0ZErhigL7KUR3H4V4fJKU8UGuiI9MOzgL77ZSjAusux6YmjvcrJskETHN8Kzyylv7Tkr%2FYQ8Ukc8dNuU%2B91aF0Ddl3CBGVbmFGxTS%2FEG%2BIvpI6oNtt8H2C7G4WUdh6lf%2F%2BVxMtKNq87DgrUVZJAEDATTIYRna%2BN1h7Soqj6unzgrKwQRVTHpihxC3PN3%2Bhrr0O%2BSE%2BEQ4qIHyVu0nTenKeG7u%2BhAMOWM0L0GOqUBzNrmIHY6nbfXm6hedorKDMy4sBwcNAFZYmrvMxTu58prDNuMMLlbE%2BR%2Bi7cPPfOZ9Kw%2FQ6HojuY7VH0B%2BYcP%2Fra0x7N9geJdRkgwOkiBC6LwzrURqMVhxRyTPIvj1IP9cGUl7qbpJR9DvNPRZ5w4T4BL7JMSuub02hSQsHG7%2Be0DOVvNdkJJINIiU79rZPNzuB78%2Bm53SBMknku19ojvnpYvXVQd&X-Amz-Signature=e2767f23dc1074d94daeb7f1fae677d06e086974c055d74d363307360b7f50d8&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVAC7WZ6%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCICcj4WpsUO2SbGBM6rZxAvxHFxl1f4enPU%2BnrOgecDfhAiEAlEZ%2B0kyHdzhr0y9DHWKmnO4O4DLWv0%2FQxdU1kQ3KMPsqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAI3fJKJ1uyDYD6HfCrcAyIAWZEDqUcqZT6ny7od4Ljg11rxz4yyuQ7M27bmRHsdfw9KxTOZu2lT9nqNZ%2FQwZnD1ge%2F1J54hSEHZKTSmOzjZnAkGzSMuVrEUn0gfGTm2hiuPtm5HyatSSlwLDIVWvHvXV5u3Yow9qg%2FvEP5TwQZYvi7IqmVljm4quyrd4cFahxGfniKi89SlTf4WD69fWr1IpfBchz0hIG6qJ2veSEtU4yxrXsGMn9JHSe1plSbK6c9vNAnAQIXhBIYeXOvdmpz9B%2BiNl2Wj%2BDswL8zPWBa2Wit8sQpz%2BCxdkQjrt6Wtf3A%2B4dPgWndKm0xeVz4QYYQsYuIVAcguTZROb00xruym7Az2lyU2eIlE%2FVoC9NSn4zlXji0TtkIiIJ8%2B5iTmCFcLD5QB8Kpes9kVUheSnXJNxrUnkrAXEMFrr3%2BSIjzBYknNTXDEFnre7s%2Bl1PIt6iAf93Qsiu4wHXUt5TgwLQJs8qVdQ3RHGZf2BOUH6hdEA35yPhEqHUfFCSOJyuXbLK7suvOVeeCa6gqHi2r70B7N9KZO%2BM%2FKywyC6o0%2F95vRPgAuurJIxaLB94%2BP3msVZsVZDKSlIDC4kbPDmWtApZsx9KyHJKmTEVzOztDbB%2B1vAcYD44FdB26vxVW6MN%2BM0L0GOqUBBsthiuSVsFbMxFoeHUuGc34QwHM%2FQLDdTb0GlwLnZfzjyccaEyyy7cAvwSGm9r%2Bqi5lJjIsVikiFhV1GnrTU35J7TPTshQEwIjmrePBgTt%2FP11arT4jrHHg2Iv8MrBFxg1yiEtVAMV1F84BnzY1%2BlYA6AYcLzKq%2FE11Dp2Dd2fNZ0umbY13%2FJ52UxarTqaWhKHiIDb0Qt6NuY5LHQFTbwUFI8IVg&X-Amz-Signature=e187d7ae8078d9a7f5bab072e4534e900730fb0ec0d10e3877aded69923735fc&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
