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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSRRJTJ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQC%2BX1B3j77LdRbXPY%2BPq1O%2BGQRrNXvGEdcMB5dLNy5eLQIgOkyqHJ7oNm71KtNMs%2FapeZFFsJ%2BFrIpChD0zZvBGPhYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGHN6wPsJCbLYdLUGSrcA3L%2B4tBFX6x%2BA9M5farh90R1zy35enJ6y7RRHWYjZm%2BoEEBIB9lYiYDbALYUfpIeXEojVst%2Ff%2FBzNtwMkoymuDt%2B5WMQ6iRQtKUyrdwLwklxIaVPJSkzNBQU82%2BSnHlLFXoUSSfCDQ8TVM5PwrSzKoKzly29CvqlE4LFAHFbxk2CuK%2FeB%2FgK9JDe0HyKPPdJ45nI9EnOkd6BUfHSPMfrVHNb1YmN8Xm4b2QYo1WRMe%2FL4ByL5mNGO0n998IG65uXXK0vTQceXF5WN9LtF6Or5vt0LfTqOhoRd%2FQg%2FL1noLEzjnYHhP412r%2BpsLXsDIZcZzGCvmpEOzDKZpIbDHjGe3kg72E3FEQN3VpDhBPxClu9NY7nv9s92RsG7n5d1f%2Bs%2B84h9gpAkBedUwUpjPLpPdJJKFZRB8WEN6Rp6zrKEX9uPucGUMr3cgb3bFq9WhdLWJJVA%2FfGNKJVC9fX6UPIUVCl5GAXlThdHJG%2BNTrBRteRPjgfnBWqWuDPlBTc6PxryDCai3%2FVWkj5PSd0%2BDqYxIfRuxiE7uJ3Zna2Fap8hSqMb6rx7LAddPwExtpmP6wq0%2FKnoIe9m8HzwatOyRyPMY%2B0snEETgh%2FE1lDXEuJDRLjW%2B0Th3U6kekJmDZlMM%2B4r8MGOqUBxhgM7ka3ws8GrF4lPs%2FT26fp1uvUVDyP48anEuJ5M2ayuIKNYcI5RFqGAfUgE70jnTMiuvMbCPRtYv9a8hRiK3qNPN4Zc7cyZkdMS1TsxthdWZVU9cw2H0nIHFdzDr6UY39nAnCN35Hs8dxMk6qUwjF8ippdGv%2Bbmav09MOccrjsDtgyqHzxfnaSHAEdFx9t0pe2wiVrz1euyh0l97VvtburyEkl&X-Amz-Signature=a1f7440030f40908564b9386b638733901c41d23a9fa1969b55524e5ce10f04c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUH5UBTS%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIFYeZHWIcK4VzbhbOp2fa4FkrgEm191w35k7NoULohQ0AiEA66rki9lLJvFDZqJ02ukY2dkIrDC6C21%2FW7b2FQXSWRUq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEnR%2FKSQNhJuIGzu5SrcAzHpCAB3cW6WqLZdunJVkaDHdRPofD%2FJH60zC1KR9QKsvJ1lkmTB%2BsnKsz0mggwgTjVpbk3Wfnw%2BvhlsmC2%2B9z86c4TrhHV%2F%2Bt8DAOKtcEHe%2BnJZZefaAaDaLXqAvK9o0cH28HheiJOR8jthXqf88IvDmQKOH0FiK%2FeKQXkOSdHTbXOfWjP2QKS0pD3BWsn12dkPqJbVXYBbudDLxKB5xmr1%2BA7Tt8Y6iOK2HyL7rYO288rpSpOBcrL1xE340Zan0yNle4zg%2BdeMvGWuWoORPPKMWaB3g6zdHfWtrKI%2BNfLEzuNR%2FdJrfSXyOy4125XiqJk9r%2F%2FyqMl6nj5uZadH6QV0zc%2BeYEUZfmLTptsF3wP8C%2Blh7JmrZ%2FUjppUkKR7lge830Zw5MVeaWmMClOrlWcbQBqPXdxBCFbyJ4VFm2CUfURJEBHZ%2F3OovVFjRU86FvngZe51gM5FfNglpOPNof%2F25pLAkIK2E7%2FxByILU8dslUGiC1U7hO8SCjN%2F2G8RGemV17OGyzBd1RuccrVbvActlU9L%2BanB%2BCfTqNrn5SWeH%2B7HbguDalrCZV9R%2B5JUGbuYwfyh%2FmMcy5CAPqnczetV3S7QTg7FimSQq1D2%2FF7kjLVuV%2F08oDwgpuzOnMIq5r8MGOqUBw4fjT3nmBxZz2NypYXDGn%2BcXdFz%2FIQXCGOj2X0a8E4rUqbOb2Ai4hqWYq3IK9gjfdtW1yo2O5gDy4R1b9pNoteHJyDHanylGh5L8661SPlAlJEQRMhe9kaHbUZyo9DtDoDp3WyGZG9zfpKz0FmCvWijIdtQ73TDs%2Fz%2F9VPsqe4%2Bs6OM6ZQ%2BzQarp%2FI7DNpP%2Fh676iNXSNpmVOrJL4ee0XpjpzE6r&X-Amz-Signature=ae0a022254f85daa530602f38ada15edb1414d537dbcdfbc4ebaa1947d4e571d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
