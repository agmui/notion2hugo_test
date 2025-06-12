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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGPB7M43%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDxUInJjM0jNQpYvZhyQxcgCX4Py3bAShYYYsoTDqr7UgIgN9cfE7ZTrq3Wn4OMbI7uZMO3UYMRxx0uPjafuK00Sd4qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsI82nmcz2PezCPWSrcA0cKcZoQ8pmCNw2EmOHwrEyBIkp0BS3we%2FJyX18a3MJZEtUmvmrvXRU5pE%2BBWK44KD2X2TowLLNalG%2BHFyrcHP8ssX96qnpG75R80Aw5Rt41bWJt6H0TiJPcNiIA%2F6HEoB3S0h7MRqIC022lD6BhrNQpzFvPZGhrtd%2FSursLBe1%2BUId%2FgMT%2FiVcml0Qxi1olSEds7qqQR2WxRysqBnl6%2FjqiqxaRVfMj6%2FE0mqzH0%2F7es1xOi%2BRi3mQdcZHL66euB2kKHTkA10oNz9BorNCYCMnTAIBBJzGpu7lLOtNF%2BfDsqp%2BXk9q16IgZBwsM%2FDt5fBrd6KkUVv%2BqzdeqVtmIkOOmpf0wHdKSGL%2B2tgc7lRizRq%2FRVqrsi1eV1jEq386YvjpJFx%2FGV4gi1EajxWHjJTWLglFNtJuN5Iow2HxlwhWFPpmm0GwWvfYg1f%2F2Hc1mtVAMVFSm99pil4jEniT%2FwooI3oJ%2FkIGVYjg%2BekLM6zJJU8B77PujAXo6OzBc4ihZKrmMsSUCUMBJU6dYGROvPHXlY0czhyszqlnuAvgVPVkwlFEI3sk7AprPEa4jV9GlAJCdCH19%2Bbas3UQu6HgxJu3HBHmpetMMIw5MhTPZO8nC65uefoU%2FYL7aIqYPMNGiqsIGOqUBm%2BZic6lgK7tsd7Lvv3144XTUcwtnHsiMAhxSMPP6F3R876slYfnfOnPrB9nMYRYkFXtLEMfF%2Bc%2FwjOf329MbFN7krZnTkZBeKAYWcFgN20WDPYDLJQgp6ZtDSFqhEIdWc7nIiezw5QkrEVfFJLxmfPR2v0yqKMnPMeahj58brTzIi%2BsgQdcS6LOUhIut7CwgrvgKrZ2crhydanOH9w9izJJ4qjLV&X-Amz-Signature=a85ac74a2ab79954996514cf98552a9060b8ed2d091c30673557c4ee7311dd6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWXXDUKL%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIB26tPKaWjCuPHUiUVwvKVYeVx9ufklgo4op4R%2FyIXzGAiEAgKVDPs1dR%2F9x0MGxfEPUlQ0pznpzj3h%2FmhyzBR28qoEqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIXMI6AoUpM2D4r%2ByrcA46bkvICdEWuJ0i7PfmrY0ohUy0UQS%2Fbz785OOTPw4AayGkHGu9vHv663yGPltg2oWZzX1vFZjfU%2FAFVnRgP%2Fcwlh2GGR58hNtmPrMmvSQRHXUX%2BCLN%2FlYHR6foIg2WTUCOfY0PJTy%2BOeL%2FXYcKRy5UTDGu3%2BRvnbHWDx7jvHYCBzzRxycRHSvi5Y%2BcdI2PQvPvHEZXs2uTzR3GzJqYwmkVmrPLcgdmUa8bz6ayhMB%2BTu91zhHhSlJu53d1arHchven6roWdZmofbP0GILaJ6R4ardE%2FUYA5z3u%2FbUqyIBh3vVIz%2BVRkudlbb7gjN9ku7goEgpiAtZaRo8xOI0yiUQo7eWdYyJKhNDh41snyTKqd6J%2FmJUPIwzTdnIHuqAgcFCWgA7AEx1iX96E%2BS6GLWBu9j7b%2BVZEsRcvOb%2FiB0vaTEIXQKDeGl85Rck4b9PSzEB8bk55aDnxbki%2B67OMKRq7oKZ6qZ%2FHh%2BDCehfGM5KDyq6kYNchVwHVrIoxljbSSB1L3TXpBiVDdtCv%2B2A3NvgcrdCTqJ1EglzdZfS0btMofY91cX9gEiK5HeVJwRH4XaTHKVIpvs%2BWn2mGRPadrc8e7oxUW3%2FQufWprlZse2Gk7IxztaiACSpWZGe1qMLq5qsIGOqUBoQnyx8vLvdb3F%2BIzmEvCK%2FokuaBRb4BukfGkM%2FreWO6k6QCU0pQo7gGe17h9HG4vey8vWGLaEKQfJ5wjbDfHuuuUAA0arcBQ2JlzKLfiR7bfTzxiwnM4T1Fb0IVpV8LkPRqVJ6fBtejgDS01rVsySpVj95zDH2bZMUaBVN2d63olxjqh8OKEz8rhyKbQtgnRsOjriItMU96%2BJ93Fa9%2FOxlt9zmHN&X-Amz-Signature=2669bec8b41314195a1dfca212675fd22e4587071cd60681d09f2c8d460dfc58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
