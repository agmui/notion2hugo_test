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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMJ2LWDZ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T041410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDV1Uf8zSFhcWq5BK%2FN4beRroRCo2euq8ffGZR7%2B6PXOwIhAIedEj6PHgUuIaJrsqasS1k%2Ban8%2B0sZmtD8k5ewimwAyKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3aeXIzNargXjqZv0q3APNdbkPKUivlSauIa0vlNqEcna57QRl%2FLj1%2FkW4iyQt57iYsY2ybmNPwOYGjOPgYkWgMIvULjS%2BYGYO85aan%2BvZFCnLFb5mr0WeI0Wzbr2Aw3chhKD6ZHI4%2B6%2BUrAuspvnsA9DOjkRkgCqkwcp7uO2XHHQlghctop5aFfolw8z%2B6%2F2JS%2F9AkdYXugrfeRGoPPlOTyhLEQzuOaaCYvOEQqB%2FpYXQISsa1%2B0TG%2BUhZet%2BSSb80Zgkdg7WJF5sI4KH2l6awkoW4Z6g4hao0Vp4TLi6xsvVbaS6PO3HdJTEsqUreblpcvn46nqilI7%2F8cNYp%2FSscQrTL1RKgp4tq2xulUK%2BkUidMvEHUBbsh1IJaZTH9Zzt52GQFhdk29eFP%2FdmRoEsR86LopASg8Sfm%2BU0Jq%2Byy2entvv4lE2FgdWEa7aBL%2BIB%2BCx9RGMJoMJ5mMFB6kpdSykbWbktO900KJOISVb9KB8m%2FKtNgdNaxoDUsPOGeeWkqv8GF9o1P7r7tW6g5n9lSdZY7FYpEDBPhmTg9tGSHsjLicRZqbqxGAAVs8wx5Yokk8S%2B0%2BRMUonrzOTde9c95MQUxpJQSJyppLDorNTJ06dF3ORrgDFMbycScWCSgaN18N4YvA4kCwIsrzD9hYXBBjqkAbSt8v79ERmkWAYzh2S8J%2BzkCkzNa5Fq%2Bt4AbA%2BvHdG5Rnk7dEh29u2xKODRKG9wKgda3T4XB%2BrMXW8oVNq51f0Y6UuD6X0LVA4U8dGNeOfazRw6DFGXW8Gqvhxb8TyeRjBtLPkdxNrxU2LFMwHcQtBggv319oE236hB2cQGRSrKpkAZoh84gP%2B8gP8%2FPM1yuXBCFJ15t7uts9dMKKwW0bu6nOAe&X-Amz-Signature=a2a46172c84fd75bdb25e67179f8d8c1d9fbf189bb474f949bc2bf622fab38a5&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOKDDU7W%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T041409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIAhXk6qqaOsr2ivMGwIggrnXACFeKR%2BX%2FxSI0vbQ9UmcAiBYSXjoc1o2ZuGyrFKG7yIkCFyJYwWs9VEoFDxGDg6ffyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT3JAlPFjovfLaUX%2BKtwD22wMVvLWSj9d%2B%2FJAlngFrieMN6sC0IIa3mNb9gh7Y3lfYUEeianTRcocV1dCEoY31X%2FGQEBqsK6xoqvGcKpYoio1NAuSAZan29K5ZpjwEIE7vDDEe34wbhwr7%2FBzNewwVTw2Nqrge81wFkZJa83nwZ1rCx59ssqynbFK6x%2BB2f2dLT2EJvnF2QQL754vq5hUvQxYj%2Fq1mW59K4YYFC%2FQ5B0hfGCWwkkUgYMCoXHSt8jrEjd24gQwpSXm5JNvE6H3O9yHBEqZRmoKmoUwthD5noCZWvkxMRLI1ssAqCI%2B8oygBZpT0LKPAcr3HUMBC%2Balcz7QcQVm9sjAQjIwt5yss1JFjGMTjNiehR9ZdX%2FoLiTXB7lZ7fF%2BVoSl0hqCOb7aw33%2Fj5nbIJ2vK73QGHhdbv1DfT7lPPEW8NYjNcNZQiI2Fvkx0hbre01UBrAXTGMvx9mYEj%2BuJs676UohfgKsx89zexZ8gTiLtRACeRB3s9kxbZyW3eHHD5rysQQ560Wbbq6UY9aboaUEYfY8yZSJsnWQe4NYOMPYJXcPtOQjAMHuWkhCEVjAXkN9vFo0Qh46Fvx%2B3JRcXrWs0LUZqi%2Fz1HXghGhw7OvNfG39%2BiintRPc2x0oJbcBjbhc7VUwh4WFwQY6pgF%2FlOhnkvXGmJ2x4e70UwBtlww42lgLrBQoI8h0ZNTp3jxcF2V8xtwRiCykpjypTmizIHrCO6axocgz3em8fMMmKdXRg%2FqY6FwNogqKLpkKkn%2Fwb%2BAnLpujXknSrAYKqONDOUE0T4VeD5PY0efm4%2FnvMhyOCXqUxpWZhDI%2BK22g8bR4VChDL2%2Bdk9Fz6z0vIbvcJ%2FnKZHBYWOHBUdGdF5K1SEdd4d51&X-Amz-Signature=553a208cbb4b5a57b95e29ca9702e24683a0fbd236ba52ffbd131d3998c37d4d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
