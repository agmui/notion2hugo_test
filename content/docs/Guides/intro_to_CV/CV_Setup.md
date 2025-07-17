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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD3D3Y6M%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQC8drlU8wwLfNCby9mnd1jDB23ScylREf6ZEJOSqWJyhQIgVZrRslAIfzRjDaEEHHZ%2FpR0xNvIEi%2FpOidxknZvK8wMq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDP5TyjDoctW168iGlyrcAyTmqIQHmZdrewrtVuYjzwOIRmyW%2FOxFXjrBQaQaRC1GIiUXZDzEcqGG91ohz4ZN8fD%2BTu9MH6rONhW1JgF6ZYhfSz6%2FX%2FYwWRJNry6SwtkdsFUUvuONJAPlf6%2FQiYdkwqYP4GEBPu8%2BLVkYOKOGFWJBNjrXBKSIuuo7Sqm4YGmzfMpUk9XE7y5lyJHBRjfpXDIGm612aR5hRf8xWrh0gduibe6OKqQeLlPDof1jDcpDRy7xgSEpzDExuWf2irYqUHanVbra2N4T35aPo%2FKNfy4y0crUy6iQ6UWk6m%2FTJ%2BGiROMlY5N3lVumWKRRBe%2B0wXsZj6bCkc1%2BJj4ObZtQr7hAYrj0X%2BjxMgOUi1KwPG5cUm98utihrf8AodKlJIdkgoU3J2VRN8%2BLxExQnEHmgEiPulNSAogfHFryB%2BooH4NmELzNrEesSTU0fw3OMwWFW78w4%2BCGjIhUmw88wztTR2bsbma%2BMTgBroe%2Fi9i6My2zhxB%2F5aI1t91l1CVrme1PCCbGVP5vEY2pNvRIAWgzPIG7ct7DBnGmcgXZq6aMU%2FcOXdJ6DlObZxD4XScIGNG0uDZnhOU24%2BTbRiF%2BASL3OBSQuIp0rxK2wPZGNYCtnz8HUrd4nohWupZ06wK8MOmV4sMGOqUBc91R1QKHW%2Ba3x6xEbniOG%2BbHzpQBBooh0oVBnT0g1P1h0vf0l%2BwkLvebnuHDUO9FUcTaGEvbga6AmvWNa%2FZ3mG0YtYDgF4F%2FPspTbKEgQYcHFr6zWEjTeC45r2vNCnQL%2B15KGygeaz0mc1MkRSO%2Fp2BFmMRm2UrFbdLpfx698P9IRuK7cVFnLcw7TXImfd2SRfJMCpuqtVDT2PVJ1sqxZi%2Fnhyio&X-Amz-Signature=a68286ddcb79442acd3712f8abe60bc03f8c97e484ffe7533ee6dba133fc5f74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK4TAHGY%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQDM%2B3Y6JeEDLv07B%2F5D13XhFtPUni56JlVA0gYYgJANMQIgb6vRNLj38r6qBOp2TFWpChHhatGHQBcwbTwPk1ESKxkq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDMwOawX4acdONgFFhyrcA5nCpL3S4Mcp5ArB0JXIqbFLxnnZragQqYeCFNOAUHXKJPLHdETGPaIFyxflKELdsVB7nvInKyraN%2BiPikw2rmrWUbUeIytmgoXroKlw8H0SdMSc1%2BuIMwriq4UCLAFDUayp%2Fqrp7BjGoSFlAo8etx%2BxpJtQjrokIBG8xXfWNXFoGYlez3lSDz6hj4pNQ5TZ8zt4Fu28O98DYmUGxC19vUe1FiXC6rQrZ%2Bk%2BS%2FJDV7UHS3zW0Y1UPPlEuiOO84cYN3SUQB5S9Xto1MVwxGq6U%2BUg%2BFRDVGJ1pUEWqjf6gt0igWJybJkNvdJ0dXeUhifQzRNSUt8VegHWrk1mThap6icNw%2Bn6Rk3irrWOF3yJiavaM3cMkdGlGpa%2ByRfrr5suQzZ6ubecYLCLZhWydGiklVxAxpMK6hLfXTrP9bF1vHVwt4htqTnrmtdFgpvbDsGroXRBXQz4OpE8HgIdEbLgBCDDlFG6LALFrf2DMxWDf9jttQEYaKz9qWDV1zX300CJDD2uoGlM1dOHEVB2xZTHaumoVFbHR4ripyvUsA3G9uR3lmMeb1HQ6ruXZr9RvGL8L9CccRetEPnyIw1h1Fh9RBxVBgNwvuWRCW9vgAQK7CVfKGEJJXvaNZ5pXygiMNmV4sMGOqUBQ%2BGhTc%2Blh3fLhNEpOF%2Bv5sMp24pFdv5FC3bUaFbD3YDceulKaTY0SVvB%2BQX6jUufajNyiO22ey21tyuiwtXo4inqJJ1Wr5b%2FR6kiA11G%2BcHKFzlAxcIf8IbtLyrTyH2tqUv68VUTNzCina60xsHMQXTqjAShVkSzscJhTgB8P8%2FUvHoNvTv8D%2B%2B3J8t3Ro2Hya%2B1BEBKZIedwP7y24G7aMlIqjsY&X-Amz-Signature=4c4862fb91cd69ff0d5ca2b6453ad718f18918ffb10a5849f51fc61f7455b63b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
