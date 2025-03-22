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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643BAKOEP%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIHBBfzXAj%2B3A4VFOHmRKbuXeDMxpb0%2Bzvv0%2FKkbsLivsAiEAvXNqkXAJWMnA7PGNzVDZI4Mv5qsmt93%2BjXfOJrgwVaAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAScJ0H6eZecxPYlqircA0ISud6BTgMj%2BFdcfHkMLywQoBObSgszkZm5432EPhfncasaoHlONJhMWQojran0TYqyadQOcNRtXUeEeQBIFF8jCuHC%2BDUMn5odFOPKexeYCXbY3vgFJN5Jmu15%2F95Wmk8CwGxFNnTq6LFgx4gbBj%2Bj%2FWAwU4f2BzgOQXpKBgkoSdVJM5v9tJZG%2F%2FGdYqGM8Aj2c%2FaliGNAtFxAY4pZWr37i7Guiu5qscQvVluqG5RuIJlcxfQBfGbS8iVa8GDeB%2Bs4l8Rqe66eWir6CzL2%2F%2BQJc5m9IvdmR%2Bc3doxY1p8qcS%2Bh%2F0o4Lot5%2BDesDw1%2BJb7VZnjKgocy%2F8AN1r2AdXco3KC2JNdHvlt2xngBX8CXnxP8g%2BpdA9Hp7tzxRl%2BOQCpO%2B05ekCO%2BYCFAlQ1nY07U5lSiCA%2Bhmykg6MZUNUYHJ7nfcYwa7WF9ZcoorCk6fPtaZMYQiv7wo9jOPiz1KTC1Ga7dQ7v7NylF0rKPu0elGU91oYtFPRESwek1QxnUg2BGbyLOjLZbYSO%2Fic2p00zqg1WTL8q4rxM%2BL4U%2F1gkjcMway7U2c5HPIeAw2TR%2BeyO5jR8KD5c6D3B6mPtwvTFU0dyjzZAPJ2pljPByB9yqdGAkDQGFoRaznZ4HMIG7%2BL4GOqUBTQCmq2H7TDRNKPGxOzI06D5%2ByN%2B21zjgIEu2yf2rrBmVIv6m3lHUtS71ajyiVVHW3U9R4FH8RO%2FC16c9Qe4aySwCf5Hn9nJ65tMcSK0xgU2UM942mC7MUYXQHKixYdCu6X2CTYiqBRPU96XmJ%2FUkKQsxgRbYptbpGU4Ur99KqmTMAoSEEeZCZ6kHQtDHO0PbdYvmUKEQQIP%2FYPHUOWC8v1HAG8fk&X-Amz-Signature=5f01b26d968b9a2c6f45d75ae554f61c24797f21208ca40bcbda419aaf208f61&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCUKRHYU%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDUbJhnkacCGpanH7XvxB7mt6gSCF%2F0j%2B2t1xY254GfTQIgaIVejJ%2BwzqJ7slHjVficXQvZ6yzBWh4kHwr0ILvvcn8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPpTxTRlDZWLSJBuircAzjL1OvimpUD1XaUibvEH%2BkfCAf1rVIcnfLlJmMJNE%2BwgyU4MnfysEYs7foo8t6pe6ExTRLEr9cyfBpaTfRfat4UIak57oA87lrYXGhJutGxhb5GS%2FaxQ3qJsR4wPo6ZRk7c%2F%2FqidQVmTIYZVoqr7MdHY%2FLt4VvVJebRVuXCjuN9QB5qqkc0Dz1jOt9rdj3TK%2B%2Bfe6D20RqKenKMcHvzAzXpxL04KouB4%2BH0%2BOnUf5sDnt7sZlPvaV02YS7Qg9lXhh9Ydot%2BbzGfZhRexzZDHjyrPiROVy74158jRszoIt%2FjefpHWZeVRnEP9zXER7UGCR3UF6QaavwCscYAM69hRNHUZd3326KJBV8NLg7TnWeluxITU5ZbK8Xt12WqwjXEFPAWTBlLO9ha8HzCWdrFSCd5LPRercVeWdIJXQw%2FK9VHeaWizaL7bAeyN%2BaTJng1X%2F0adA%2B%2FiUZr4vMDzQkSWIbtLVOOxIW7c8hf3XVP1CYtCs3obGXJJ%2FkZZ7siELr2TwSSYs1Q8zmoHlfaY0bvBei8RSypvpyEtFb5r%2B%2FwVjN5lCVatRheeqG7Zllxdv%2B0JRDOfs2acM0ujTvSv5DTWISDvj6svRUMQjAaKJh%2BKGbrc76NQsMBGy04phlEMJu7%2BL4GOqUB60cbEc7DmU5E57fZ9LpQF8JgHQcEW%2ByVzqtq2hCEE3H9DEFEFbC6w9Q4hSk9v36hia2miVLm1Mb4MPvJ%2BOaY2tNCE7ypFUsNtlW8PratZgJecnApUzCci6GDQZ0YGPOtemtI7RaTrurjc6COwIzjNtw431QPdnraoF7zNLwdy5qD5hmv0HBBtKY39aomlJPYnHTXgTnP7NBp8p%2FXpiaVGkZxWhzb&X-Amz-Signature=640ac69d0ce2ee0c7d0d895cea382fb2ad18cc261e9358da5e86f491cd21818e&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
