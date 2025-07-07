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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXD32FNE%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T101016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCICSA7NImR99cfRjdKLvwLS4um4PYzsBcrQj9JpzL2rQLAiEAqOelIFQnsg3UPHRSLEdDduSQFtt8dZlGm1E%2Bm9lBhwUq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDOGY3GMRvFf6qvGS6CrcA0R%2FxxfiFfhT0Pla0Q%2B3pyzKC%2BufVhL4cJ3OxuR5ru%2FXcLEsOQ9Vn%2FzeCzZBVqo1usaLGrQmG%2FIJ5Da%2BbrqCN4sgXt8dx5tpsi0sxgA0xZo%2BP53fNpPtJt6wGbL1p7t4vnpLXX8ARAZ6CtxhQJ0D3tZWaU%2Fb%2FVAB4esE8%2BtloAQYVlSJ5w6NDIo0Lk8%2B74rK66%2FrGACT8m0yDe7kCR%2FVOVhyFICqWt0Z2Rznp1vyHdwWBOgCxFYr7BaCAcW7tvivrfQoFzGILfAWjWq0MwiJGH%2FCtL7SqQVQHE8yzww6NFqlLaBIKO2%2BElUJ0AITvBqA8JsKz6WgRXBUExngGDHMcoRGxpOLg19%2BUVPBNDzoMY39uR15vrWav3ULuGPxJ1B%2BK87Vyl6Z5ec2K4Wq4BpYX0B6ZKsAu63v%2FsJ32OvIXs7gd1d6ttdgRKqa4l1peTeZT5tZ7FajXcqPnI75JIVimXGq6lD1iLR3%2BQpSYzKn0tVK37bGcfCpvAy5XAXnbmXXMFaXU1y%2FzGWshtSozE87TPn860LdFYqYjEf%2FL4GBEbJKCXFGpvhxsA%2F0yhM70JcIZQfAJDYKjuK%2Foz%2Fnqvj2Xsvr5LnjGOpOgWJk1MeXgT7xci8jrsiVDCt%2FnESzMJC3rcMGOqUBpSKaEde9GrWSCpFTOCz2zV6RvBblmBytTc6%2FFQgq%2FTmsHCStSibLU4qUxl87u%2FvfyN0BLo%2F5VyYufgth9CBVd%2FIKF5ctH%2FyVCzdCmJf0XYwst2qTtPnH3WKnxiA8yy9rq73UBSttmSve81tt0w7Uc09jlOSyVl4HJMnadMi8AEMN1zJKHTG3A325dYayVt8VQtCyZcOjzMA3itKYo2wBF6Qi3kix&X-Amz-Signature=13b1c943a9bba9b2f98a79f9d91f988cb4ddf269d82d88799f240d0a69331ce4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3J2DBUI%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIHLpa97CDA6VeNun%2F7aHZUD4QBemQMBwFavlSYZahbpWAiEAijo%2Bv4gwqVoIljlVlRHRTp7JnwviIU0IBwRy6WuwvXgq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPtZsBMj%2FnwkhC%2Ba5CrcA4hZNP%2BRnWP853DQG4uwy%2Fbzww8aMe9BkY3RNJKBR%2F6OQuzzLUXboKup8fuw1sKox27Aom4l6yr2nGKx%2BJXiYE0IGG2B%2FhzW7g9zV1OkKj%2B94BWEPxfKMsltRdePzkSdX96Sb%2BNwaZe3Kyn7aH5wgehPqdRMZzKKBznN4OPdEIZs73vx70Rz33ERVAR6hfrmw9%2Bh2V%2BAbqcueLanBjSowMPhlMD%2FaQcPrxzYu%2BIy9%2FTwKD31A%2BVbMl9zEjv%2B9EwPCwht5P1xqw%2B%2FGkFsgsxBIUAyNuqDYZnrkn6gKLp389aSJE5AgS7vvyzWoIzklYhgjml0PWCK4MoV50GGPmN9hB8Lduicxw7YhkQBnBkpkRdyxjQHXtJUqNJqAmZw8kI6UfmTpQ6RU%2FG5O%2FEcCrvIE%2BLLwcSuvS9E4pTprWC78%2FjKKYeFXvA3Xm2fHJYDUazMDXXW%2F913a%2FhXfBXoXPbPApuBsOOLfKdne%2BtxLAoY9bvciXnFPZIuXv1xshXAAfAI3rtfNVXDcGQoLwirpA9tOpafJtj%2B5MXkP9D5KPTuVnfZUsujxJH4pzjidc2oykUrFrGxSmEXkkB%2BOcg%2B%2BNpCV2UYmYnvU5dQ8QSE64JFLTWsVscL3t5bvC3mBuz1MIm4rsMGOqUBdcOSXY4kk6b7d95yxtEva5p0XqqKmMLWbQFj90d4pGpT515U%2BqcxzBdP7FPIFNMwI%2F9vTivG1q0%2FwgFRuOPr5E02f4gow0KYbpskg82d6CzFBK0gUfWEyuYfIdgda8Al7YQBNRJVVwbFsFTQbLcZMtCt8HF6YU4BP2HnwXx7JOeObhh5ZKEE2lyJ5rc67DktCXoPzGfkqwUeWPE%2FuhV%2BVaFhdplo&X-Amz-Signature=31ebb9889226c680922a3443714af0a43945e6bc223e861959e7d4866a452ab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
