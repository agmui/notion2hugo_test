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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTRPTJ2P%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHnKKTDXC5ayBN%2BmYcJxrHkJ%2B2ZqzTzbRS0P73mc164TAiEAyd0VkscFaf20zJjVeDYSptna3nzUrsKAaoN546Pn7q4q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDMst1kWpzWF33MSWOyrcA5w2L6sFSnrVKzF3xCs7xFEQ0JMoiKj7odQS6KCgNRHeJTqBnOwgXT%2F3u9ObGCozLhfVmcanXGfQ4teSUjPnKWPITLDnnPMCHB%2BWP0Wj6faMK%2FJvQGZKn2iCL8Dbd3e7ejorFnLz4RyuX9iyK5s19a9ONDiC5PwZLHcNvBCKgyfpzMXj81hlZCLi7G5a%2BZmSj2IBNO49mOCtv9SkUMjDo9U5bTUs2sWhjKyx9%2FdPJjLM6oWeaHgrwLRjaoAD7X5FPZ4ejWKeNYcDOf%2FJ7U441GEzhlofqayobvHgzOdB3LIMLCli2W1Wi%2FKrCzbmZQaE1lEpLT6cBeXXU8i3GmhZ9RDjwCSe3Zb87L4F8ITjEuihWDNcv9Jyyk6NGVJcGKi74p458MEz8LSy%2BIC6KH3obMXYi%2FYdivXmtyop5fYY5vATR7VmePR4TmtXfIBNKp970Cs6xPzF%2Fs1LroweeX5IcrwtbhUJHS2NGXGC0xAmDYA0TAG56oPkYelrfdhKrs0okX03k5BrsJvrTrG%2BQODwaWkAevVJbdgYTy8rxx04Lklf2Y9IsABoqVC87m2Skfevz8YpAQze1zw43f23vIed1uTSCmBM15qTOTxOWLs6V89D%2FfxCT86ambBVnqbhMIHfwcIGOqUBPfBpycoW1SxhOR3sQUq0GMguxpSVGCaOFAToWV7E0N%2FsxaSvzcGmcupWr6A0xxSH1STNDgk%2BWD3F5eT0PnkFaoz%2BltvO0y%2BgCk4ihIeepwnCVCrgvmxNGw%2FZ1x0DUNzFPtEB9meGrwEpMGZE25k7OFVl1cHkqLKUResT8TT%2Fw%2BOMhXkQ%2BklbocvtJWPq9%2F2FGxa6nXiegPUkBN7YagxU4She%2B0Mq&X-Amz-Signature=464afab94ec766cb378905a3106bcb0473136ab9a345fd9cf4565aac2d0d7a09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GIOXU7Z%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T201007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIFg3VCvc9JrrF3DJygI3vMEMmQO91B3Db3X9QOHDQZUXAiBey40LJzgWW8i8aFWzvuljNDpczPBiZfmWC4uwt%2B3pTyr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMdCDeCDq7dILoSL%2BLKtwDrlk5aXTRNY6pWjeiVUotPhEFrfNCO5MY15eiEfQJ1E1VKuJQaPWXs4dph%2FvTOdoTDsti1RoLwRnqn3jTnyoCyHgY75%2BjDdGldIxhdGUXyUpt0S3J2fTBFRnYzykioKAze6%2BgyfEcgZPwVGv4SLlSw71rcvb9sJlJLU73ts%2B9al6xmwaOVxRnrUPLnomMd0Hori%2BLRZcN74%2B46ioMZ%2FsAXtaNGjBgc0HqAi5Uuvzd%2BlYxlAJZExTKXrmS6fXsu5S3Bk45WbWDPk3tAC9jau0h8U019Tohb4lZwbLIxeZLom6x%2B8Xmu%2BRfXTSYYxlLsVALkHgK%2BYzeQWgnKXcnr4F%2BzBP8TgszeWaxIFl5bnh%2FReCaHNL8wpypsZkEMxB6FLN%2BYu%2BInY%2F71xovuBPRukT45p7vDft6s82%2BYnl5KI2Uv8L1GGdlS6t2MQtYkavgoOxdx8XdMP459u3hWOYJBp%2FGdWoJ1TWbSyIMVn57ck4byCbdcsTAphbnE%2FONa%2F7wG7mXu0W6Dh4ewWjNmu%2B0EIARzr9Fc4RP6zcdShwHabLbzMCXznU4A0sI0O7RTyIWQld%2B6IZK6zNY%2BJrlS5oH0Kg39ZVvh0lJdkxtEuZzNBfJN2ugnRYVSmjXlpPQ4nMw4N%2FBwgY6pgFLjB9YDDyzzRV7FG6kUPLZKPuHA4vW8JLrhGpGkFzeCg7vFtncZGAz6jaKMbabFGB8N5xCzuwTEOw0zMYtP6zoPy%2B5VLb5TNtKn0WMxTJ7p1WnGa9YY%2BeK2wz64Lk1vdjcsjRWPR4%2FS%2BNW7c1Ld18DvqyBkzBsHbS%2FmrcOQftQmR7DQuL6YL5J2E6Ca9VjT9933ikBDn2zyI2n%2BIwZCE6DcDpYbZkK&X-Amz-Signature=0827aea89ce301c14ffaa7cc1b83a033d5201ee31b4c94c76ccfe490d3de6598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
