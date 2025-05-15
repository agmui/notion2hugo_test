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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJIABRZ7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T132151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQC6eJcMBfZWtFBmEBCkELzTEMCKnm632nrxtkidXyuRtgIgMsFEB0USPWVGNPp3iva5kpiuohjPD7bzrMil6o1LUN4q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKRvzx2qG5w3Fu0yKSrcA7bjp17xYERdqWPECmJ76NXU0Y59HxEnXfTgD1om8onYSmjfo7LQ%2Fp7OSFCjyl5nFAK9QnKhC2GdGdW96y8IrNlIFauNf3YRE7Zt4QOpmUTVfZhSr7n9ClxQfAUd4uEf8K%2FjiHToAh%2F6l3jTSbdU43pVwwCMHIgLfmBB7vZfQxaEJ6Ao7ITskwAQtAYD%2B0qd9O5Gp%2BDZXtg2Gu7On6s9VhOHyC7pu5dEJM4EdsFs4JvDLqSiLWE7aF7gsRDHFKEjUOLSCpTZuNX5Ak6tn6i9WqklzdJwSPUnGPYrLH8JaUtzZVY5TWr7ddERoYDjynE9W9Obmr%2FOez5sKfVWNCH3C3CysSyiexdcfdWlGdqTWMADGFyfb3LLi5FQligYFxDERSYPhQ8OIvPJyXoj2%2B3s10ojuL4BY%2BX%2FaECu0Nj4MzA%2FLkZUPw8hpeLvTpDI0lE9JVEx28oMlzYSPdE00u2Njht4Ho5LiSFNqkh0GiE1iwm7XdgeV%2B5RpguOTHOR%2FPSieV98oYcyLn8Bg5pEVvM9cFURIZqLEkMsPJP2IOjffdOTEs2KfHxio3BAnOrdv6X584kqF7o24GO3wQalA2Zg%2BxrY4Bq%2Fz1qVobE8%2Fi5JckY%2BpDQHrCZ6P%2FKspY8rMOS5l8EGOqUBOLfAGAzDtKvSxu7CupE489r%2F2qhkFlcM4GzCDu9uM9qYDqGjmjKU3bL%2BxVcRcjGKOS3oesKNViS4c7TAN9spIi3OtBxxlkRzBo9F7A%2FWoxbLkAMBKSJBaNsXv7wC7vio%2BU%2Fu%2FiADq2Mn5HwSq%2FSIiqJ7hR1wx4DdqEw%2Fastm%2FVpbePSixPPGAbDJLmpXMW%2BjGkT6sTOpCuZ16DATGLHp%2Fk8jmKtb&X-Amz-Signature=14b192d0ec9e63fbc72982b1d3c254acedf2ec5af400b3bd50afc449a0d42e36&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5V7JUEY%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T132150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDi9zziyBLOtgAHbANLHvM4xbAxrGj%2FVed%2BN31zI4MI7QIgD6Dn98vUq1%2F94jvirB14yNwf%2FIe09TETkW3FOI8g%2Bckq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDEzus7XTYINZCg2ayyrcA8LmfOt%2FMSCdrvJYpUeDjfJiOZByR2FvA7jiJaN%2FQpNrdzqgtfd4zI4GD5O4hwVxxbfqg2HRKoIKQ4RAu57qzJRtLX10gC2swGVbbl733%2BMk40Gcir6QsYGP1Dq%2BA3rwm5Ny%2B6NAkSEl7zijHOXbNgTwuL6zkQcg5DyVdy4LCoh49rvT7fJQqy3Nic3H4Izb0nEhnU5tdPvHer4J5vLBDMTV6Qs6VQ6lmklGG%2F4FWeWozXyFPNQ70qX%2F73j%2BVW4BlfxX66%2BA35BaF125G7DIBLdcBrQbnELECTmNztmGMyeyR%2Fv5sSduWwAT4611nzJ6eSMbSJAONY8G%2FmLQPfCsWV7MlAxhcqeFvU4rZo6EETH6tjz6UK5Xi6KnR3MnPkzpjFF95kkx2HbLHlaC7zWmkpcTK%2BQisTbAl3Ny7lWfzJBvxRtAHrnEwVnj8WG4eZcpkQ%2BR7%2B7bgVnGkc7qH%2Fxd3LAVFWjDsNG7ibgwdE7ncIdWcubOOBhFIvhuodn5LUDWO9GD%2BYfQrJjcjZYr6qz%2FLPn4Lxq210P3hSIH%2Bm9RLN93pbDJnZ89HByZqbc7EELyPT0%2BETHJkPJoY8YJX%2FfSsRmD39kiiG2qFf2jY9AYky8cuEhcwinOdPxFn5caMNS5l8EGOqUBC1Rsm3CnptyYEUJfj%2BvcDr8gRhdSEwhHdLiAMaUv7fh0CDM4AHV%2FZNg0bUYuQj290HmPXCkhSWZw05TwSVu3e4MKfxNP1HEFa2RRsniS%2FmhUxgPwQWBBjnlCtOgNNgXrNQZiW2E20jscQPGrkScQg4nWVrQ9l5xnmsu7uP5XxIAEc5724mI%2BlEcpJMZ6O7c23RyIvg%2Fw9fHbpqsxWytO9GBzAqkI&X-Amz-Signature=0744d955b33442c6e3973ed89dc0efbc95a8e10bdc947991d6202d9bb6371473&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
