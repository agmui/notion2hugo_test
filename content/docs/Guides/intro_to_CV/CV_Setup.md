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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDUBKTRA%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMdINNwBg4sVPq96KlliNKcSU7qkxMmK6SgubDDDh%2FDgIgTvgBXYt8jhUBr6qT4HxYLmN3GXhhid6rLeWyl9OF7z0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAvYhpTwl9eUXNiZeircAwrdKZ5VC54HFLYbrD7bhEzvtonhY1Cv3Ycte%2BDV7bpSmOVfA9EcjPOZUOFNWr5PozaOhAj2O%2FgttnsDs%2FkgYeM1LOkA3b1sASsHFxD49TMhtyW74NNasPDaVFsK8J%2FE00wIJR20XR4lKEhBGtdRYaHEyAziE4ZtEXl5DBM%2FnTL7XSA3QzNzqlp6zc2yaqD1txN8rjJGQM6Gmzil49mCS07ih3dUm%2BelBA1W54NMueM5Wu%2B%2BLUCQw3a5TS%2BxvZd7Wm%2FUv71LHpeBVO1n90xf4BYnCgcSeHhmrvcckpuYOvexiWVx7uym%2FCaeevAlDu1OqNMtAEoBm2NN4lZxn%2Br2q%2BB6R9%2Bs2cOh%2Btc%2FiJIQ7ni5643TIF6W7JfZHQjNTYgsHnqiFiZ043jXF%2BfZ9%2BUmpzOtjBV9c%2FGpauV7fkDU75rYktULXEn1XrBM%2FTaj3XtcqVkv2pyUGYhz2H%2BjANH7saCbZdwwPswUgDo0ncuWqAZLI9SskMKNCmE%2Br4SLYlWKKOHByOGysbq6MGmInfQaRKyReMGww4O9SnZezBGP%2FdgNe7UGO6RhDUOCRRjXhnAvOwuFW4DhPuR%2B6b18dHNGU9oABjQzdbrV2qFw7rB%2FIEUlIQzS6KQfaEBnz%2BpiMNLB7L0GOqUBH55f6hOcMxH7rntRYv364MDnd0eJEmaeZBZSYa37vIdRCf2xwfTxBVM813NYA26VgEnSfc1LakPUHeBa87PQS%2F%2B6ZuhV4GTILzBM%2By5eXNxJlXp%2BoKge%2FVqQQzFGI2ZRNBMo3DzG9WbE8U010S4hzDdWl7eoWddOk4MKK3YLZHt8PAbQaYbcjOvO08x7TUIQLdRbugVHh2Mqkqnd93ckKfAEQEuV&X-Amz-Signature=8e971112df6687cbfa3bef9fd87962885038e668db587050af903e5201e4b37a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PTQCH3N%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDu6CVbGjFVH6w4ySBvgtNHj%2BESlLrTEdpGSTitTJaWbAIhAPA53Csjkh%2BptdgXF9%2F6dWIFdMmiUyt5q4IzH5mxc8WIKv8DCBkQABoMNjM3NDIzMTgzODA1IgyXKLR3nENl8Yn8WbEq3APXw89gxc25s1LlHoSon7fohoyUI3dCo2sFnsOoK3eSi5AGSiql5cXGlPWoxjFC1ahznMN9DStKQ%2FYbG%2FD%2FEZ1srMQuKZ10synFJtaE5Nbcgmtk7eUGw%2BCp6A72eySgpuu%2F%2BDb%2FWLELB%2F84Lly0lFgFRlkLrvtOKUpqR9U07cZ877%2BBGnVQZHOuvc1wpKnrqNHdNwq%2BJ%2FHHOr%2BpJPPmrOQvS0XXPAAw3Po4AmpekdCFGO2JkRncq18TbxAH0CctsOY47DMK2MKDzU2PvhH40OhUhpLxVs6JKRU%2F1zUz4Zc4k7qv86Fr8W0wWjqJws6Iq1UvPHgmN%2BcX1Dw8uy8mCDfJ%2BDgGeWuJ%2FqpV3EHu5%2BVRpe1CFRR5q0fIzhc8vcK386tJ%2ByHBnCh1UccjBvWruH0ayhFtWWyCScFB3BZLLx0fSCZ%2BU3Bc%2FpjeeUO51%2FHZ2ovoSSMxyn0CscW7MwBL1M5tBY8tPKRx%2F8AXtB7wy%2Bc7z2QMX07ibrV2UsQOzWTjUl2MlG%2BZMzdt02r5lmAal2sXu6xWl3c%2Ff73xmbIB644dDIE344Klulx9kKS%2Fc4jpBNGF3966T1FctSO52BMW7JV1JuTgzBTxC88xcTofLd6hbNC5Sp8cNdlUTbfPMDDGjO29BjqkAYXsWQ3Nbsa%2BgpvvWygNSt8OSC8FOpGQIXWCvK5PodGObFvXNJxY%2BEQaKxltrA5wYPxCXa0iRahAMpPPtwcOpJ%2FJemq%2BnigvguWCTwr3l6ARu0tix5gSIkzE7quwamgy9tWNcnbxv7gearPEq4RutGBvvvn7ArXlYad3fzi0E8WjidGHrx9MIjXwOrDvPFWEx%2Blh4QE01FeJ04iNWIAQgUxVqAAr&X-Amz-Signature=7317a842e7db662f57bdde70fc51893addfe2173de349b361b6d0ca4516fbece&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
