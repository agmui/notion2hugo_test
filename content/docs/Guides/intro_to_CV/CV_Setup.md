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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VOOOXM5%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T022034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIC5M1tolscHqEAvo1dvi4r3y0C9GyjdK9Wj01z0Q2y3sAiEA3La86UJW5%2FHr68OuleKANrbaPAAP5ZKCua3DV2nnAw8qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhi0thjLkFEfHW2oyrcA3AZY9pA7E9n4f2%2BLDHC073rw5%2F%2F5dzJOcKOkNtHRNI0QbcsMFcPdmmNihHLqYtAlSNOP5NCUjd6yFQJMnBsbd6GGoVs3AquTWGkvqxUrCHxx%2F6y8CzbsswPj%2BFqAOB0jNpq%2B6SiQbdfm2oX1MCGb6wV6VbXMIXhjgiNV5RqcD1nMfsHlAYf9g78SLt%2Fm59CugL8of9IIOmbfTqys8EWClWTJ%2BvJ0zGdvZgfdbA4O0nbvpSEMSIVpI0riN4sXhFU02x59nVQ%2FW9MCsBaWzVqqo5S2758bx%2FJq19txCd5uk37K2r0QHwSo2gOGCa2j8cFhkWhyShCpJFuaT8gmi%2FRWSNl3bG2ao%2FtgcHBj%2Fzvnx0F7KBdSMSW50x%2Fpt4VDBFoBjG2RMe%2BTABB9W52YUi9Rqh%2BuXGj8JcA6gmH1VTgXNTFQWMLeHwx02ODaFpx4LY7YjvtdvVo%2FGtRtvDY9TbV7v2eYrRS1GbZ5QJlI7RuCkBcDbSozo%2BNP%2BNglP50SJVtTZL4LT%2FBxcedLg3UHJbmbP8svTX7T9Sk0VAnMbUqRZWpzFYYmfJZsMicrUBu%2FwGtwVLkPJ%2FetQK2jCpd%2FmZ5DSNs8WLxg40A70nfM4VX%2B17HHgngNLzGDFDv6H8nMOOj178GOqUBZwdnVeUgF6Xpe7Qw7JPiIhW%2BC4tFTGuzkYqQVpk7RftsJnDa0t%2FBQkBYj3q74O696hAdw25J09MTfa51gFYKLxyx3vQ%2F2ql2fh0%2FJJ%2Fpo6dfEgzonVvN3Khwvl2hLCdh%2B5Zm5YsxxFoHl91k9k5xcsC%2Bavu47UDZfqj0atYRvr2TzaEn20XDLW8mZKCzJKl1oR7183zOEI2kke05zA5j73vv8HOW&X-Amz-Signature=756386c0e5ca9cfaa3bfd86d101b62e1ad9a020ec1aec3c4d779081b236c85b0&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDXZ7PCG%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T022033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDhCBCK0Oz2pjaxA7BiCEidTSQtLrPk3mwRK%2B%2Fumf3O3wIhAPpmesFupBzfIRRq5AmM%2B8CajU4ProzBKU7THwF8TRliKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKhHWjN4fNRdHLO78q3ANTNg2gVKJRRp0FXLImSx2rKG8RArapfG8Ls9RlFqXgsurBm0E083KLJL1DKNRFkfN39MTlTfYkrMzdDKEaWWX08LsNWWfto1lMnLnBVD74SLjWsR2UsdDLzNvLUM7ErXh3hvz8%2F0tjF%2FKNDlkd8ocgImPce%2FlV1TqYmRc%2FkxUmM%2BvK%2B8PHILIutVXyOJiA3dw8WNgRMVXi0o%2BPHa9y9jtyeVHp7IfCtdcAynTzDWQrRj5jMPlbnO7P563NDkz%2Foe9YiePD3E1zoaDM6SfA6WRq%2FsqJTIqM0LE0ukKhELhwE41WN%2Bv4nCMTFOOWeMPry7FzBIDn1u73dF7sgocATu3EqmtE9dufZjW9zmRPvQViuzhmKfkk1jYc9uu1C9dBDqekffiyn2s3bbTMwUDN2rXz3yCyVm5o9z4VQ5KehAne3WwVZT%2BdBAw8MmaonPpd9OGFENQ5sJyZKs%2FTnGX3t0c%2FiitWpOhEK7ydd3HN3oGPDoz%2BEKEOfihw2b4DriWOGkFbPXfrwnO0TVvR6%2BixSIPwwS2hU3i%2Bfz3Syib2GATnwDsHbiW4cKnSmGkjyEXLIfPPHQBb3XCmtq63bmNceLam8GLfgZS0%2BMUzaafIKohvXmX%2BxE29cmoNmg5pOjCypNe%2FBjqkAbToQgyb6Dvk2x%2FPqrHHCkjPCD8uBo%2F8kKC0qyyTuwEv0kqLMPWNyS99x6i0xsIgBZm%2BcXraRAk6lYKivZZL19DF1ppx4nH%2FLM3WV89A5pbZEriC3ppqTQe6VvZJKqMT3QIVZX1S4EYqtTYYcbOXHwlTztZbh7Wj3OkFf9HzzjCEa1GQEwT5re7yrhwJP2lYOoknQ0qrNppBFcppP6XZCnuFuDEX&X-Amz-Signature=a970782e5ea767f59aa8559204741abbd5eee53245b235dfea326fed0d189b49&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
