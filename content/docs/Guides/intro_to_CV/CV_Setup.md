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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6SG5IKU%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDtrYt1l0BOVMnsSrNatdhy9RtM8reXPlhV5Byvch6YkAIgP9R27Eeg61jbgw5XJf2f0lblL4SI7xsOizjKY2RlLjEqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BQdCnFBc8NblQL2SrcA1EFfeCZnMuZflze%2FyQoY1DlxJOz%2BlawMivHhJWW1elQOLJvxzOnRYYDr4FY9%2F%2FwCyUvspmDnlYiQAqSod3N37dEvnWCBp3XhX0QLuf7C4q2ibISWflhRaIySHoAW81ilf5FYYr5G9xvH6LQvj7rozsfs7GucjFfK3eZyK14jUvBzzF2INK8IjldKS4mo3eB8bzSieRxsTELuW7sJCopEUTVpjPtuuAaILGDHWawgJNCPYdCFMJN3Y2z2trE6aP35sBYdeHjA%2BXHX9B7uoHuF6etEo0whlmTiatqjM29iByghuEHtG%2F7cS0Mm8vdU8W2V4l0ukoWj%2BP0OW%2Fezzl9b%2FtO2QgWmPLw5jNXuPmCaxwdwxQpsEwYd0l92rQaA%2FoIEUnG%2BJ%2Bntiy1m9Khl52dlnWTi7kFNlzFNMoRLCIisxU9R2sQUE6v%2BL8gJuwz2TESLO%2BcAlrxYuCFC0dzAVCBP8L%2ByjJuYqawAjh%2Fy8Do%2Bw98TJkXpRLpmB8u4IYDtxTop14qXX0CAZDCT0a6JZmwkdxGXbhXWvUYKMm20%2FXDQYxvxSWItAu%2FPRryeUlxy6zIyRmghx%2FNLoY7D%2FJkcwxy4j0blXRB9%2BgnI76LM2VQgv%2BsQSrwdKG2LhQ9n2t4MJm%2B5r8GOqUBiArvC%2BpUsEbKzvr6BlL5sfk2pt7puE7jqnrHeUFC%2BP%2BxAuHG69mu5ezuoPpIfrr0AQc914VlXuC0dAexs%2B156%2Fr8b0%2BbcranopAcc%2BSeLPAJfQlZerZ7PTN9GnNoFe8iQB9X7AtsatnzfK%2BCmgEbUMKcRfTD3nGllLsR4c5T808YL1aV%2BJer6Ns4BRXN4rgP5T2Uf%2FV%2BZfs5XjFMK3FuWyOrCuLF&X-Amz-Signature=e1fe73a3e63f409b6a4197198a239aa071fd6c448fe6524f0014fe50fd0dcb71&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4EAP2C3%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDZvgfp6WVDafofqjoNN2Dt6X%2Bg62ILO1z2Ge0OpjcTBAIhAMRi4yuwY%2BWFUyb%2FYB2JOu9rU7T47AterVWk%2FHRoHHbCKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBbZBpnsTbs2ziC5sq3AOS0xtM6fayxol2lkCrGdTBEpsVCYYJ%2BgiARBwzQpXDdAtywTo%2FyNdTwi5dFPGD0CBQg1STq6CZD6gPsyShjsictkOjtGyxd5%2FMRk%2F%2F9I22xuWvVKxt%2FWFrV9UYU4UN7w%2F96Cac%2B9sq0ZsnGnR9eNl6aV0PwIxt6ZY1LluGWtSH2Y0ZezVvGuvfmnMuUSTtkD%2FJ1Y7LQlrqAbOHxN6tzFfeCPl5JlIy2Avk9JgXtD1wQvqAh3MpaMkLUHGgQN3FgXxvvLk01S9lt%2Fx9f2H8a7D%2FXcgdhFx%2FvK9V22lb%2Fwcv9CcrhND4NK9Wd6v7j1GV6BGXcGXvDhMW0gUuNpPIjCIsvGVqrq%2BOx3a7O7PUuF%2B8%2F3pSl%2BO1XodDDhlpUG1KbKwxk8sU4NTHYX17MnQvjDsbLTbY46%2FlIZA8fTM05mVsCShhX3Didpoz%2F4e8xfVp0J6ppP9fW72X6%2BGEe5zpdWx7m521PQBw8Vd2OSdZNhAJODBvVs9q%2FlU3h7obwmvYqGtP70Fa%2BSnB%2BS7YoOLIouVnmO1uc3K2BOPonfp7SAKT5T68LuQusMNUbk8t1%2FPwC6GWW%2BZyOQmdhZXhNVVhnm%2B9vnR46WsHURoqTXTL%2FTxfueyiTOweOtB8s7n%2B9jCavOa%2FBjqkAZzKMrYQKdiAszbXPprOYdMjyJ8hJoqDOhnx1RSyvHVrhunK%2FWEgUYN9jaNBR5HBWwhC9bLQhXKwVjxwvCcBaE70YjVD%2Bg2sU09JGV4P2yRhOACfFludojlVsXGZ4WD2%2BO9bM5Bl8lSeSk82kO3GBQybysPyAEV%2FVEDTuEuvhQcXT4%2Bq6fDFjcgtfX9S1U6ECPPXFqDhxZZ4VXMNm%2FyIk1BNoXph&X-Amz-Signature=3ca3f3e78e2f17ff43150d8c1697761086157c47100d39b6f4f67c2d5b110731&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
