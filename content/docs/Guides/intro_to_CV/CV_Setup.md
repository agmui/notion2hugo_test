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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZEKIQJO%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDrVxBjq3HGM4Xwfg%2Fab6fWiVfT69KNadHHz6NLWqpzvAIgZIJiHM1Mp0ludKEo6dMOMo4IouUN8bCiZA%2BMBC42ucEq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDN8jemaRC%2FKYYtCG4SrcA83krGO0p3toc1CpOcF5tFmRVrQFTQyPf87RE3waYbEH3LeqDRVNF%2FXPY5ZNecOk%2BNVGbOORv8QZuzvhpPxp78WRb%2FKfOgBwHZ9WjLh%2BptfAa50QALI75S%2Fo8%2Fo%2Bn4BbLg1b3UcZkkz0U8Mpe5QfozoVs8J0drz9Jqfo3XxtAx2YOb%2BuApmBqI8YgnubT74uyEp9KHBfU7hjA80FSZRFQP1SrIzRe6PAj8TvcrV8W9f5v2dQxCHQY%2BzUq7IyEbA77tv6qHIEgqfLiXHXWEfq4JU2LPVaU8R0owMyGt5rkOAzmuLtcoN3a0CxnuR1EPABqJn90QxXKJzUpXqSqLMrHBgWmHITXu4JU6yqYRb4aa%2FwJ0JstcMVsUTS8Juuv6Yh%2FvmgUI0G21sq9swajlCWN%2FI%2F8QzwJVUdCkexNFumyM1Pb4WOFs51IWFUCsE6%2BR65kjLblA7ViK8u%2BllXKfLHbyZdEhGI%2BmONoGXc3YLyizXvaOdR2pMoLBIQ%2BtC41qVknC4dBgUQOk09s%2FLUHA%2B4dkEKop3%2Fd1nBwFoHUY29WcHHadWUc4LHxGclqapoBJ4eZmKt3MvlIXqQ1PkCByDg%2F8XmuLUQk0k8y2t7ds49w%2B4qIqSStDaZCQtmLAMgMMH9xb0GOqUBmIPk8EbkDy9qR6TdKioakjF3B68DJuk%2FsBs1rlqFpCHkEJT3rVqfwTO9S9CwMtVNSDpNjPCsH%2FVlwVnaKJTdrlHGaYjqdMFGFnHQdWX%2F0HEZGg0E2roHR%2Ba3W1Ps1WFT21qBLFCFLjL3f7IFpmDT1BNDE2VWnM4D6xckqtpGyZo%2F7Ri0hv6ipD5NfCrWwQ%2FGfyXHPVrogJEAXHobKuneGsCpzluy&X-Amz-Signature=2ac11302caed5464af199cf565ac70f1e47db0feff4bb4d590377d47c1d7ecf2&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXV6JVZB%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDMKUjKHj%2FccHeVspGtTOUb1PBMAPK9agzq6jcNPnqGkAIgU2PcfwUCFdStg%2Fx6fxofazmRULONvRgQZQSebVLreSkq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDHuL1YC5SG8xeY%2BdYyrcA4z9sesPWQf8m4LTni0WVu9Gkq%2BzirDmfjQFAaS9LpQITH%2BpzOnjWdvU5KXJDheD%2FRK9%2B6xeSibsTwxFGH3SW1%2BKj0ar8B0%2Bx8vc7xZ0kYkUamhXZBElkCFu3LJI%2FkNRRW8F%2FFUhyC24H1Kq0kLfIt%2BGcDRwpF%2FTMm38FpuKPv0jEBd9mOuNnjnTowNUsZxC6ClcqQHPSSBOYmWC2RgmoCC7jQUMlNhNc1OyI56p2WDq9D1ChfDKAkmrS%2F3uwxkFAQy6HkZd5CzfPJGfUYHbSy48B%2BEl2DdfQSKhpOVd%2BXBA8%2Fi8H8hGQlAG6X6CbpRqDDcMNtdyH19ifGwwjfOwVi8eRPLbkSwsC84l2iT9lp6eiW5c3u09GRHgR2%2FVnYZ09IF4PIKWv05BW%2BBlJmQ68eDv1TIwNErMmdIODM2JnlC%2FXRMD2uRowLXMOGkTFKfqwcpkPfUWmP0DDyZefrxLtIZpb93twX%2F%2FQbDBZuin%2FnDSTRXJjKupHDrBC25Iwep7hYh7yYiBha8RvvEzcAyrFoNCOj8ZvxvV%2BmanmRxGvpSDVwZhj4W60%2FMD2UXRK5Ez%2FfG3WRbq%2FJtHywiebyV1vfdRSo5lFC90vAJVs03449QOXn66NlaUo5YGg4h3MLP%2Bxb0GOqUBSSJaKCppUbKoXSSAX2uFKlVSvRtGGpf7Hq3e0skpgohjjG0svpwqh8Jon%2FBALLePCT7bR9tIHf%2B4UaNexjf1F8oKhn5uQ%2BYqCyrF4ctEL%2FpHX9FEAWPBTdRZY5c0F%2Brrivfd84izwEGbzgwS41zu4%2FVl1UA95uu9sYlHEZkEnUVNlODH7NQ8rCJsD4n9k0euJd4lTawzAkLst0cURA6ezcictsqZ&X-Amz-Signature=ab70f6219a79c562293be9ed8def11cedcb709c4f06048b22957de5ac4baece2&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
