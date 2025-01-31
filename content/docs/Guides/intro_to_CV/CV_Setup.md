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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4FX5ZRD%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPY9cDbQZlnvdszZw1IsCX5KqIykzOCac%2BnKbtbJBeLAiEAgSOnVgP%2BtD7ZWaRtEXzeuIsYGd2IRRCeTaEG%2BMKYtgUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0PBaRIRZK9xwpmdyrcA1EAOmg2g%2Fjkga1G7KAOWnVgmdN2pUhyO%2B0nAXsEH0IO6ts0ScjqbBNFZ9M25jjTkwlV7dOyhanEB7bn1CTkc2uB2WVuMfy9yIdHz6%2FbhGrCvroBv%2BqbjAtsKqqGAXCD08Ti2qOseEkg%2F%2BhCC9%2FH6TXIaISgZQ42M8cpa19MMOMvtGmMOpvadAbfTNkLwjKwa4d9MbeNUwfT9xmC2aLOVmOJ6EedAOlrmikMX3N%2BewG0wPckXXM4VAStKzeJkmom1FZocAV1dNAMePj3D8xT9K%2Bt3oR76M4wTBHXMHoWSXJGTQjipVgR2q%2BisIZ9Fm4AR8DY%2FmmX%2F%2FmXbeb0u1CWKNFKYCKFntvSW2iL5M1BoiEd9NECaw6lbwAmNUxb%2FLUht4v%2BZrLtq0tE5y1h6bWuCCfiDM5Yqv%2BcuQle15nT0K%2FTMv8MBuBwzyafeT%2B%2Fn9SXQEyAK73f%2FSPf510%2FHuAuC452n%2Fq1gLVmp7PLDgDXSEE7NgLlBIHNOiYKTKOFlU6eFTBWCrFzfgTwBSpD5R2dWYR4ZfU7XmszMOR3lpi2BhoJZ1wjsBBkAq27ZfxgTXtrXhZ%2FNwqtilp%2FUsUBTQryuuIqF9iGoO1FjkG11t95LbUa4N5BpnR7rH1EqxRKMKjT8LwGOqUBpb%2BjeGRputHQupWjhLfEliZ%2BmwRfQnjIz02li%2B50CyAa1%2FORA79mDj2Bzm6QB%2FcA6pJcnIumCMUDTHBVetO0GWqjBJoRLGjb6DKeI4zsw1oj7vRNrqjIA7fwEJl4iepBvbGZRpEPFeO62Zvl7NkUM7BlNbfbrjGbiJZNSOTshbb8G20AAvMCPJLQ%2FOJTTkiT0R%2BzwuevbN%2FVbu7cxJMNHrdB3fFx&X-Amz-Signature=b752bbade07ae740498df982e8c6fa9ce7a02362c13bb590ebc89917c680d83b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN6V37V4%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHS6Uig2cFlegsqUA4AgaptJPeblG6saWO7BdPjIVnCvAiEAxldQjsqz2Nq11%2Fj9GebUhs7bzFEpFn9XViQF6lmH9IMqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNCZhntyFmXNxSQeCrcA0pqpYXLUqC%2F6hyCUjOBR2E3q2VRgDkkiAEgt7YBW8ScBh9zbYlT7lgD7LntiQIFwTIlWkQykp5b5kY%2Bsg9UtDs6kNrPMHZxcsNmj7YzhNn6MXNkk%2FoDa7ourCvWKS7AoDqFZXJUqsDaECqCPsgq0Ndu3NqMS0Dh6eoFovsEVgixn9T4Ul2c6VutRyriEZR7J7Q1%2FfvRIBZ3OKWj5pHnDEMu9i5nnocozsclFgfcaqkLMat3ZLuVZ1rvMhxye05rMkovivEyoym80QmdwfbqoxTARiuw3Qzhd3AYcQqzqfbW18pUoTB2GfrCHHDN07D5lOSmNHwFb53U%2Blr3NSWQloGL%2BCojdag5DdkIXj2r7xBJO6Ab4lVSSNfycmfOPBc3gybT9Ryt2oy9YoeHz9aeejdqmLQXyTssmJnvFXMKa38KplOhGSERux7bjvAsVhEhNZFP1vZiiwV%2FSzFjhl7V4Q3Fx1IESqnvlubPkdJ6eCRtz2A6KBCSpUC73jisn8rlLGQOg4d7niluufuOM2oc3GbBeY5pzSJ%2FqHe2idIH%2Bf5GIiMDzT9A9mPok3LEkZxz3QsS4ghIj%2BxTNEnSN2kd0kJsWmcHFlvyqJwc%2FPQQsFiTok8x0QA09iQg5k%2F%2FMOzR8LwGOqUBqW7aq3evsRDHPyjF1l9UkCv7wyckaGeHIB%2FIavs5L9oJiaa1EgBOiBIpqkiqBbPoBuJchLrCRjVSxlug6WsGpUdFSQXw21hzOXbJwu0ILFvNNa0TZfz6QKhiCIf8Y05hmRJs40wuEP5KTaGSVgxr2geUafd9WMatAIms%2BkAIlEG%2BvqdZjE4UPz4lMV%2FoPn1mqmsqUV9qyr6lcqdODBo%2Fy2hFPBwU&X-Amz-Signature=be1906ea6b75a1b84ea2611203c0ddc6e24d889b3b26e6c27e1b124d4aeb8f68&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
