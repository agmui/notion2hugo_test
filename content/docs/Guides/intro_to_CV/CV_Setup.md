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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOVZCLB4%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T022713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFsTMkGj7COs6jjc1pAwYN2bYuV4glknpjD1FnnnjGBHAiEAsEoug6rmebKxaZCK9si2WX9T1K3bMZRlP2VWYudm058q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDAPD4h458yQyNHdUyyrcA%2BXPVJ7ytWVALdBwrW2CuDTLHEQQqFOZaGiHUCL12dQzxhdR666jBIVoWKgae3CpCU3dD5DvfTEwYQ%2Bx68Q7F3a1RMkj9NELdOEX3k1OICFAJYzYDK8xqGnXPpwsVCh3G5vUhc45PZ48PZwduZ2FqJ3Ag2vauCbVeUnBnV%2FLbAAFvi4HVjgR9wUnK4LiyFNWewuIO9FepNQXWLiwDACczs4eOVWKY2qEGXDOI%2BnPqmPJMQzfAsj1FMCQf9EdghGne%2FJXRqxz6aKbvXQ%2BeFc06WdNQSM4QnXJ%2Fa%2FQk6JJg2RjqVNptEs9O4e%2BuVvskDOEL4elljcl4CUWsre3KN7xU3vz07qnHOxAN4hawnl4cipluQYHw8jgQbhCc2wG6%2BYlzsKI6Z2r%2FwwQfzZaBvpe71W78Y%2BwGeaItXfiM9sAbcrBI6LZcJXzuvjRDTxPK08g9KlBgXVvHFW04da%2FiqkwiXPVTdwjOT1uKx8ejLelzZuR%2FJ15CBwfJe33INqMfCSnQ30lbovM9I%2Bw2bMECWQYyTZPDZHxXmhDPp%2Bu6qk01AGLbKhMtnDe%2FuIg0heAkO3jILyOpzUYEkTwW10cA%2BuNwYL65K153LCzNFOP0aur3Fa0iMOvT3p9J13FJ%2Bx0MM%2BotsAGOqUBaIf5GFH3%2FoIJaTV%2Fvl0tJft55LGc3EDyf%2FVHdtxSqLzCCCUzFFmzhxSJH%2FZBSeDMRZRHWb7rZAgN%2Bi4q1d2S5YvH2oyQXpXP1Vg4ac3M3NCXQLMH%2F9V%2BSHh4jsMWomV1PrzkI1tKVNZ8WfYC6e%2F9YUNu9qqquXBiHPTFX7s5Lrcc3H0uAbrcralJD6SPYc8%2BYAC0kkF0r8A%2FAwmDxDby8GXpCke7&X-Amz-Signature=8dabc2a1e3f3a03a2f76b238cfae85e10d59fda4a2b1a10a1bf45240b5f3b7c1&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGRHWSYB%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T022712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgcnPaOXcYuGG%2F6%2BmhEzLAQUYQbbQ81uhojpZ1CJU56wIgWfCrgAvIEPk2z6Bvi%2B8S3ZjwJHh%2Bl2zl132ehcR1lwoq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDDlev4NuCA5zSb1xHSrcA8B0OdpWQ3%2F%2FPVa6EalPMFTRs0smFkXNQchLM6tw10J7KfuHZvk6yNa4apAi5W9quZ65AAotMVHpxFxP5Oe7D11XThxBBGOPznd3oplBJRZGXTCJ2tf5kRObVGy6nzVLIdT4GJb6RJ69SOlmlHVDHkKdDKNatTEP27gtNd1ME3uSyBU%2FMI9BcGK4O0JVn6lp8UomqXP2iXXhfaL6Acp2XF%2FuwIt2R2%2BN6QaQFXjlQ2tLnkVCnV%2Fhk2AjwtSmkYMxpVfLq9Ksj5fEgS2bPwKwWztGqBfwi%2BOSYPvgCrSN2iHerH6ZFXJiDxjXdlR9xgsyvrudDfYlpTbIBwpRGmDHwm0DwUJ7H0AdghIg45gp%2FrUA4%2FrQjtGblT9RJaTLpiNLbp0P5a%2F1kHGIZKgYm995d2HemdyEgt7hbM6l%2Fo%2F5jtV2u2gocc21Bq%2Fc0yPPVh6wghh8DBjVrD1moEj%2FfioLwqU2mKPWLqRtuQpdYI909EGR7Xul3HTpyM9eqvEUl0cWk9blV64pgfXjNKEJX6FQkv3X%2BV9hau9Dv1wGn7C0Hy5ufZPneM68jt6StN52t2LNbg6ardQSK1de6NSPwHAiXUbOqSVbc3bPtGaYUltN1CzJwR0YQHCPPiOV9iKfMMy%2FtcAGOqUBVd9xQNrL%2FZT6LVvgxSoTK1JRMT1sWvSkpMot5HjtaTW%2BrILiSYAMVSgU7KkaX7JRSEPEGnGB%2FLvAVJ2F2tK2aqyP5l6rwqbNhdbJ6VHOtIgQkO0p%2FAnRmxvp7%2BqAwFgTSIHxhKLQfaFuqGRImQ6Up5ymsUc%2BUT7FmeFVqaXj2VLETuKT72dRlL4R%2BJhCOAY2SxcTKeqCz03Ks6lnyJDwKFjikQjv&X-Amz-Signature=f6aadd79314034801690ada0236da76e755feda0eb2e0df825665890d7cebf31&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
