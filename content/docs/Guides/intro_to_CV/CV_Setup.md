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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4OKEVZY%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T061231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEsF9DOLUq%2B%2BaZbfGZ%2BtMAeKeXPDz5rlrO5TTuubigwiAiB05EFefMYT13jIpRDPzEby764RXW7esczjjZ%2B29zWvSCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKD97YfYtsUJJqo6jKtwDeBlpcK3IH%2B%2B04W9P9bhdY541nwUNENv3a%2FiC7gUGNCF2PZAUIDVwy0S39mv3wpJwetiIpWigbcyWEuf69c8%2BUHgBC9XL8g6q4vEgQ4UN1B5WHAClkNfOuOZLpImPMsZIOtR5yvYdBVYs92EEGJHdfyMDncbbiWT0bIjcZoOTzJ%2FCJQ8k8qqa6jX6wz9VvIwMHw28eFeOkYwZFw86XE%2Ft1Gs7jaL1VC3%2F%2BM7ATTWpIyr1Ha8eGsdy1%2Fq%2BCX6ref0nVsc6RohFOIY%2FZ3fC1%2F8BlYIoJq%2BTBKyyC4%2BNmuLwrIFaaAiWdYcmw%2BeCTf27DjLYu2MXRo%2BQRUNaLoprmROecwrFDk7BbH3gLIo2%2FBhjuLouYmRj9MRUFFPj8JzHSt6MYWqvB6rPOjmkcAjnZ%2BRBlxgKBdeY%2F5xnaH25G3PLr1sSsvF2soV9gTIAPS19Anpp5Mm6pSqy75Ylg%2FiHcLdDCkFXXRuFUNlSKmdrZfCm1bMye2%2BCDj9pvYhP0CebmnKDUBetWxN%2BOwkPMCNiCZkRjYb%2FDo1ivfT%2BLyI%2BlcU9iVhV8y%2BripevASmLvG64BmkS8sWFzXDxSHq3zHyNyzT6oBeqcz3UmMUEOiyYixdJmzA3OSDaOGHAl8wsUsww38e4vwY6pgECEOpGu5vfj2rJ5E6rTabOj54uVwYoq5UDsJuUFtVBvP6uqeL4RzCLlvxPR4i2r9%2FR586sfplkX3wQ9ETYTRnIoJiFpwi2fXBawtY0eK2qwuXe0a%2FHGQWl5qNPywOp27rDOlbh8odzVXZPDh2xWWPQZRGVs621M0LrXhKFb03bi0Hxy8Efj2KaYbtF%2FraHbm%2B%2BkoiYfIKMZzhzPdr%2FW%2BSGfzXKBCJf&X-Amz-Signature=7412457b2beb8eb5c2a6641c55aeefa1a3bd70d5404fb762fb6b2c234fb2f777&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUF4Q6NP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIEecvgZcd7%2BDqD5PK3POk9ZG9FRHz3irJIkKGs0WtugAAiEApfe5ePMvlngIZ%2B%2F3OcTo0uy6OzACOyvx8M%2BXw6NKxMcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9acpqUEjc818QIXSrcA3EW%2FFTdCecppnskzMEn33BJjDV5upQunp2kvQzfVJDvjO%2FGDul96hYLr7xFLxpYUp6sPysNoNn5KD4Y3tT90kVf35ZSKCmcx7Wi7SwM5t5R%2Bb%2FDxqNtn5xAjRbT4g54gtver%2Fmj1q3eUtF8ymtkmd36JlHRSOde4GizEyFoynj1GXeoT4yx7J4UMtcMeQ8jQ7R%2BHyIbsLGRlVax6oP4t9sW8s5hoJqobivIXIvURlDdvO1wLPAHDNkfsKi%2BY%2FVkhAuRAKYs8pUFH9TIz%2FjbMziL3I9RvMvhlC5J52H%2BYYnhPlEXdZTEgUTgokNQ8E9N3HTreyshydqI6yb6z8fMxy21eLD1DPYMzjArDch8hhI4rzzz%2BKuF%2BFNXdBs%2BblfC3pltpCMCGCtlVNz2hAtLYV7SSquHgD4oGo7bU76ceZBblPvcjz%2FbQFIuPusVacx%2BoPiSKi%2FsaiA%2FRR7KcEtA3G2dloRILJzPHoQ7Mqn5pzrDVaKZtKnpRbs7GTegfT42DbHGKzVHZY9MB1fUx%2FYzDXPcamuRBEo3ycBhSphlhCbXPatXV9lH4qUpCKTNYMDhHCUhCUZVXZJuxpz2Mkg%2FM4D%2F8ZjrOJL0hA8npws63j1s0dptnHmMO52EZjNMMNrHuL8GOqUBYCziZ88j%2F4MfmcQZarMEBnLMarEYc5OKd14%2FYdsZ4VzQuxIHDlRWd%2B%2FLiqKgQm5JlWWVYK7y%2F08vAxC24SM96zlGyYl8N7V9x%2FYU489WCSPerubBbfggw%2FVR3nWVySm57E8SxIChAKy9gx0Q4%2FWaC9Tc4XZ2y3zsxrFFDJxxjkIQKM5upccUFbiFfDDp60AKP46GYspHH3060mCJI4IQL077hWo2&X-Amz-Signature=fbda8727ea8b4ede6b37f2cb4c6ac9c81264225d1180053fbec831e02fb00865&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
