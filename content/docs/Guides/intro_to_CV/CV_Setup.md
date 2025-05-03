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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAVLE7ZX%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIEPu3PcCxuva7Wva8gfPuzsHlXnjRri562gIrFNeB5D%2FAiEAgBfal%2B4VhG%2BwrOtMeOEcK2n9XOpPpgjyr7RcZdbwNHUqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCl07RRmo4SU%2Ba8B2yrcA4SMav0QUnFPcMjeS6MAM0xfoQG7dYGwSYgTaU0h8q6Ou1Nm%2Fw9tm4VZ40duEJuSbf%2BU2ESiIk5CEg4W17rQSLP9ovrVZApzUm3CuTNL%2Bs04%2BeT%2Fng1eZyEbHYjht2YTGuTKp9tkUNA78iJerFemXZJH3M8gb2lpPWCNPc97HsBXaBBXWyGaz%2FZyNg%2FALNFqOEjHI9nvBLjnrM1d0OBiTyyWfUXvN%2FOMoV%2FSOh8ffOwdNUVjRKhqq%2BkQAVTcLixClc7RqygmKKI4MTGjDyFJ4W5szG36f5uJR6V7vQQ1juvRazXeTKUYlxRPVO3k7SIj38v3M14ml416dMHOqJdcMjS4xwkPBslzYAb9A8hDmWFw9pzaMSfPhpiBKX6vxNLNesH6z8%2B0C3QJH%2BiXKVzzbVcYYgEq%2Bsx5%2Bnrzxp9%2FPOciv%2FYytTVBMWh6Ws5Z2ZOrFt8Osl4KFxIA4F9Yek0tSUHdCh9N5Fd2XJzWC96n7pG2m7lrXR751QG%2BRZbdsfJrGQRzbOr8Tv0RYoUQnPJ2oVxqyOjF4EwZ94gMv0k1xDzr5X5gfgK8ar%2Fo%2BlX%2F1tCL%2BNQImsveo8Utrmnmxl6i5WIPPQIrUACaNyret8wXEDwJlqiyi5Vy0pqKdRngMNHu1cAGOqUBPiTLpVmTqnxpsurkevD7367eXGSNkxyF9tm%2FP1DG8USQIZOjkvczTWRrazW6HHTI23QL4lMpQ%2FJagbnvJlxjlnZpPGxvKvA65anluVVVI0Sq%2BlrKnzkDDAcLyX5UCC5VqHgQ0gigf2M6ElbU2iKzz4MrsysmISqnfOgjmanAm5FtMbheOpqCHrCfQEvQauoSVP07zwnNY2cX9x9WzG71jFkcHQPt&X-Amz-Signature=b6941549323d870dbc9f54a66c48888c1f5718d9dcde075cc20c03088355ba6a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXDEXICQ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDzOiUVoorXnPa1O%2BPNhBnKUhiLqFwmpqkzN2HuGjzlWgIgVVYLvhZld3SyCIs97IUXZhICUiSV4bFdzQ4WtkLFbZEqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDS0w88syMI%2FKst%2BayrcA7hdvy2VCNPDeu%2BKwrFmRoX%2BLnTCzVVnWRYg8k1KTtyLLyE5FLtsRFTi9xoZ4itLPr06cBoTPQhBZ9mOumO7fCnkEVuxh1WAyz54E%2FBmfVQH2F7iRl%2BeizrYHIdCTjVKcorWwuh2S3w9VBhxziyMysvI3QSHG8EcJlVsQrx%2FgaEGMI9yK6c4v0KSnZmRNa7LmK9F%2FIwAaLVHcbqETQlJwqBZipoZUH84erdtUc1KwO4cDTIzKZT3Xwbl0XQoz0dkFg0qddtc6nDfzEFu%2F8DfdWpq1m35aQMlEr3HuVbaByYOhVYIqaC36NvsX9aIwOxB0ku7sTNO5BaE%2Fr9jPmQEDZCPRkd47kjiuTXMzvAQR578IkZg7mAMKj6dSvcqnvP7Gx%2BvtNfSJPUPYXuMA1tGTqvJjuUCunmQ0pGkfQTI9AznMI0dENap%2BCa%2Fc5QhQcMFmO360SvsYheoUmF2J%2FaIOgkATTUAPbHjB5zJJfdzSdck9BAUVqv3ghFEa2qxDoSsOkkI74GtP6ukNVK%2B6LKZLrHNalsixrQLaSZvgeITD%2BKeCrQZLI6jJyNUSuj64OqQwfSvGgM9fKx7EEgBk3ihPTA%2F65AhLL8171iyC1Hn5VndSfsdEiE7CqTPQVu3MIzu1cAGOqUBc2oYgpSVY4C4x1exW%2FiaXoALMaK3H2Ev8GtazMUaPqdtQRQP2efLngAX0OGBHGDYAMxko4iueigpJH2Pruoz8Hb3T%2BkL3rOIYus2Y8v3TGUAQM6ohkrVt0H%2BF%2Fqi0OfZZPEoOBHSz9EcyzOO1AFpLEtL6VhcuUVS97olSsUk%2BJU0xQGHPI%2BENrH4AsKe7JGgwJoIOiinpz7lzCH9qQ20owDpWhIP&X-Amz-Signature=7b8997b6fcb160a5e4ad00abccad769105645cbeea6fab683a5dca62647e6b81&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
