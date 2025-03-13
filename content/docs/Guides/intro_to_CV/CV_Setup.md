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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3QDMJT4%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIETqbmjadN490mPfwR4lF0M6RPy0HiUUwTP6daKE99SYAiEA9qxEUuIpnkljt850SSNHWIRIa%2FDNMN%2ByBD3QwI64wYwqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2tKtYT1B4vAV75aCrcA5lqscXYBo%2FrqVs43%2BGgVcCBaJKLVgVjRETiPYlQ3Q%2BwfOng3v9%2B5rUVNRB2Dc%2B5BJluTpzEFUU0iQr3Y%2BmFCwfcArOTbKZnNE3U4QcO7OWG97KvtgLL7JTAfW5oXRnVvV7ncKt5bXuchKzqXIQDKw%2B2zOnBZBA2Z4gv2xTMe30IJ%2FhlpYDUpN3X8mHHVNCT3ZxAKO769ANDHx5m15jAvU%2BRzRULd3rad4kobYSpfqfw7a9n0sh6xpiqCqh%2BbSlM5zwVUj%2BU63dmYslJVSGYsdU6jUgnj5FRY6IggVewrty5KmAEsx%2Bo5zRCqybECheN2%2Fw8ll6BxRlZYiG3rXkIehY5Iyiydc879MsjnXv5n05kUD7zhFiCQe8doHV12fOB9ihDa%2FmiozXfI5Ym5WxWmZpbNxjZRNTfojW92SMyWobowjEwISuBp%2BqYIUWPXiYYgp1Be4XWbz9cxOqBF8z55D78aNxs6wXhu1ajGkethiJbDc%2Fk3sinqJVnmUsrJcIWM8BvOSV%2FEFhaFcnhmqhMpIl6iVwii87xuV449mYHOZ%2FM%2FF9XB6onFZMRPfgME8tXAGrpx1iATEgwEhjSkgVE6Smx3V9OI8GXjmVMu6OtFKyCW0HEl%2Ff3zcVvNIjAMJH3y74GOqUBJV2jPhqomyooMCTOeNf64qFb2FNvWh3%2Bx9FBNXgtrDb%2BT4ghrM68LQXXisRoxa2clTOxd1GrBCGdzimLXzpfL5Ga5XzCNJa11NZJq5M3DrDB3PIv9q0xNxMJLy6uhIFGIicnsQWMWr%2FKjqmVoOGes3Dp6swU%2FvkKGA618mZpAy0OTXM97qnqxgchHa7Pobk9lWbBDtnE3U7IgGkJvXwVwL7OcXp4&X-Amz-Signature=adb92e5f288363dfef6d4577b76a5445901d7abbb1f26bb180fed6cb5bb8caaf&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAODMDZB%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T161005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6xcdYsyi4u5zyu68PbwNougDU%2Bm4g1dXR9yr46ZZHFwIgZ5hM6q4oZYe8RGs%2F6RjvpAT9Pj%2F2ENvitu%2Fi2V99ivIqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXJgHC3r6Hak%2FAdeSrcA%2BihRsipD86nSNWv9TOmSVHEysi0RjNV8RkdSHNPPVdX41x0yvZA1pTMcm32mVPipSp%2FfuLC%2BzlnzCZ%2FOSoYPwu6bbDp9F1i%2FPDhwaX2L%2FEiNbXTH1ITXpTldA%2BiuwOxv8LPumWCCtHGjJk0tLKMd0RfugO%2BQ8X%2BjeBhz6DHhyLYLeR9H0C%2F1tl9HsX5Qwq1qaz%2B54i4nYjGlhnqneY%2FH0X5d1KvIfZMpoIuvHUL%2Fzwt5GIci7xWz8ZHVEyWp9nHw%2FtUsQU5%2FS3wBRYsjQS4HsWvwqaV45cDgGnZT%2BXC5Q3i9cXTPgDvjAY7t1d8BaRPtPUwxQ9dE6Br6syh%2B6EceA7Yf9ZKJXupKnkWvE2BOhOmP7VtwwkEFqMnpzBm7TnQxi7blLBikUgrifzjlr%2BA7qizWVjWU8f2KPrRHJjJ4QA69jCrAPiQ%2BYyIhmfDMTD6Hu8ffF255pQoGLUQHn4vkW1VDVNWGrLurViYI%2FQICbBltSwXyAFDFVK4vQK2utsOv%2BaKtykJrc5%2BQe8q%2FfCm44bwF6PDyIOtM6IvZoEr1Yhl7MzufO%2BsHb%2FRYcon%2FV1Q%2FvuC7YGn1F7FIct0ji%2Fj8pAz3koc%2BYSGz6TGR8TruGoxG67BsjUrjsDOcjX1MMb2y74GOqUBLCkVdzV%2BQBkDcX2%2FOBjn9qswkenlajnqTjyLqLF1SWEd71X1OovmzzqSf5k%2Fi1ksRuWwv2LFfkajYBWY4JjXHpWXCbjQ%2FIH%2BTgvxf2413h3HR0hjdAqk%2BZZCl1wqehdQnTHnoZwh8F5WRLz6sYo2o4oWTPTtpDzFUqHBPsqlz5EePzxcq7IjAUM8u81WnYbJm9Hp2yB%2FZUfb2HTJvtu%2BrC2IEGr4&X-Amz-Signature=c88689e0aa21f14dd1e72031fa183f8ac7ce9fdc8da9012f04cc912909032e5d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
