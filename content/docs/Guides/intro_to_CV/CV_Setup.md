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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664STMSV6D%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIDVI%2BxZHiZTlZ1Wl7R2Fl5bKleTHahSd4Kdj1hlPNCdaAiEArePfwocFXR0Ky%2FASpV%2B4X2XHlJ1Gzp%2B8KJNbOfktbfMq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOC0UKcwhsVRQE1PFyrcA8Ty7RZmtt0%2B8viq%2Bt51vZ1RqzDWZVmhPd%2F%2BRdz4mxp102uxnJz%2FuQ4Ux4choWwUTOl62AUY%2F%2Bb%2B%2Bi9kuSDQ81lzwVDT2vA4rxhURZaRypNAXVTL1zXpQTSnmxauA1RvsP6igh3o50xpBUoJI5cV9DfLvZaSKi4I5a3AAG7FpjduXanekQBufGm1rbTx%2BS8tF3zgz7vRI1D15FQODvUqwZEyPjmFPL5Lg9FlBZoru0mCM9v2IjvBf5f45Ylav5v2o1ZwwZaQTA1UPJzYsNLNXArrgPIVlrhDniOP%2FFnN%2B%2F6Ns6UBvNpKDHCXcctpNB0yI6DLDvuSiFiQOIFmPChdMHMznu5B7be%2BrmRIMw0cjIBbNmxeVuGTRY1%2B%2Bw0QOG%2FnadAxyhOzB2YCge3PGnC9qgZ%2BAfjMOwGpNlZUbYv0pz%2BjDdk4a5ts2whE%2F2VOAEmP6CsK8%2FQGLGeAUwvm7NafT9frpIq1ehwJSEb1Qp0B1kiJa1hdrpjacYPUcvOF27yoIjTvQ96LMQrmTmYu7a0%2BzQOvZ%2BfjfsXsaBvHzvv4ckwcW60YYl8ZT74xhHG1frgoFIPUq8lUjP0jijSatVpyUPZ9%2Bfk6GWHQ%2BCoraVq5jNjK8vQu0vjmDtux7UudMKPxkMQGOqUBzVPjuQFUm8JkAxeRB%2Bm8iuKYPr3Ss7JOcUdLFXWxlT5qOMSkQet8w3TTWeH655G6gp8tGp8NYiFqWG03ODvN1wgyaVUxqx1hnuFfGu30sBQ%2Fer7kZwQpxkImmfTY8kHulml3rztc9P3ATYTc5dFPgQYUFXvNkC8%2FRHJPZxhkr4ZPxBuSyzdW3FnAEFlseddJlxSuERNrmZwvNcHkPWGmw6cyw4k0&X-Amz-Signature=af96c80e9a5dda18ca0998b61da7c65571103303fd35abc9ed9ffce737534e2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C6VWKT7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIEso9nvxSURk3LX1sqlBlFwZaQddNuMqTkiYtgKOsWlAAiEAl8CtZtzt8xwyM2FxE4uuaDtEFTq2SIXO1h9xhEWrabwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDPkbSxeUIcf0BsF%2F3SrcA%2BCczjgip6haXh0%2FdgGvxEifrGhXt2gynXdsppt8RVH1OQnTO%2BXHSKtgPlbuBMYxGBTAGfzlvqxwl%2FCPWyKHnrfzu%2BQ9CQEdjn7jVSuLaOLej0IjhCocAAKNtstRlD%2FRbQ%2BJYCGU%2BdVmfPo0X1z6xFE59GiujvihLq2mbMmnPRtENr%2BM%2FhmiufFi2HzNkQPmlRswdVWXIy1wlL43jKJAh100aCJgbJ8URaxc9ax%2Fbr5ic9DPMKAwYjCiLRNL9FFkSzBJ2EII41K4ABiMg8lBN7hRJYgHwBGlU1zHcv9bsM%2FMZttSTn4K%2F3CDwT0vTZakRY5mulivhelBnSEjFmntn5N6r5QYQfAwBYEXbJMh3l5wHkirZLvTrPI%2FaRif8WJD9LPUf9OD1GdILwZaw0ihENGkPUMYhuCTGSXwaqgVmp5GE2E1rQ4NSU%2ByayTnacNdWGTthZR4ggyp3%2FADnhq8aBreYLZu9RnNdAwnGV3ZJUyWAy2wFnpgq9zFJQiA0vOpecjPvA2ltItLQLkXHBpHr3Cbnbh676EyzdEbwBaCMfum3a6roqAppL0n46qErl%2FEJweAMxIbxr3V9OngQ7nw2LBL1YHCFh8hv8aEQIbtt%2F0%2FPoBchS8ciWBvCyNQMPf0kMQGOqUB95dwI36EiedpNSfkEyrNKVm1qhcA99sAy3Vzs5NQ2TD6%2BxPpqvgprvVmR04nql1pJeqHNYSG9YS7m7fcRizqG8GYOJPBBkDHkrxAM7eFFnRMLaspMapnJrHEWZ9cQbogDaLGENgIAPXY8sN3Kk5lZVC4Gh%2BEto858BLwYGDjRedpefFNyf%2FN9%2BrZfkL32b55B3qhjqceR6HRV86lFhmZ0%2FpjJAG1&X-Amz-Signature=4764df4a2e8b556e194fa262b1c9661e81438be340c2c3fa9d549738ce9f931f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
