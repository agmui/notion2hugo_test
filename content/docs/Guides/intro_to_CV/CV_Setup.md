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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX3YMZMV%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBWnbXolpuPOtFa%2FHhbw1l0hqJrn3uPYAgt1qY6rycvAiAKugJpHrtPgHc67w%2B%2FOa4pgDqZ23jKpXxyHB8vg%2Fqv9iqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPkvhT8zkgtp0MzbVKtwDK2W6QHJIMthbPOEqQ5F06jqm35Ef%2BG2cKguk6eO2iyGHdCDP0xUzKNBP0FiGRejp3krCK0MhEK0xavQWVObvsFRQKUXv0ENoVsmdCCariSh6R7rGqzhdNDoIDfvhMDaeZmRsm19CdkrippB3ZXo85FFmDYc0GsWTmPMBbCK9QKjCdysCPPRjPhEhAELJXekMQmLJRjo5bsN4VVHjwCbotQazVL6TRMWPnqtduM%2FBpCSeAOQ1HyE9d08yolNEW1mrUTb5oDAYXa%2FTUsg8woefcFoj6oOcjCP5SBh0ab955IhJGvz6PNAyDnVG73TS81TCNRC9oZChCLGxNnXsm4qUX1VGvgtcQNjBAqsPLdPbL%2BvZ0F7y%2BarO2I0WhOMo%2FUp0iF6f5hZzmyW6iwpOTf%2BLlFvFESTMYBBKvo0MWMmSTcDQ0q9grG69FOoBGmCmgan31%2Fd9v3g7t68Sin9UHtIkywDu21e9zbPwHEHwoeeGsxlbHiOxHIZUm3Ifjip1ot3St%2BQ%2BKAdD2SoepgctjWbFqKA2vOOPwMMWTZ1HgnDxlIB6PHm7Ct0SR7AsUqIV4adJ9uqQfpF0JvW4YEtOSULYPZWkX2Iz7nyIztRMB8dni1n%2Bbc2dPo%2FmbwFyA0swmqyBvwY6pgEVI9X0%2FQyCjXo4%2BeuHmc%2FytOIgqLkHNqhL7sTioOKuRUluIJNcm1fSErS9zmOwfqg5MYQzOeQ%2FX%2BY63awDuOkCFh3jZaAD%2B%2BHFeDO%2FQYRwJjBALsH3JuMQiPTWeRMndQXYrWjGYDGng9ti3yXzi7BMRjDPdqFnVYChlqT%2F74GSNzj04xSSfJswCidvUc6QmgXlO6zLyFDQEibMmHbEhxvjUceTHgoK&X-Amz-Signature=2e140cb0f5fb873bf18abfbade6cce1279b4446b54d0c3c22bbd295b8d5df59d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MYLC6IH%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGfZJmwAMrhtentZQ%2FVw120%2BwIHyrY0ouU8DlYkC2B3AiAdy21vON%2B3aztIB0Q1UoQflSwbHdSeLrr1tD0xbnJjnSqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcHEU29YG0l5wfT5AKtwDObc1OkdopnmbV5JK5RTMfPQJWx1pUegb9jFSlSsDY%2Fgw9FzTDbN32T%2FOoea45CYYt9Y%2FVNFT%2BbtCfiTWvvqJsZVld8q3cyNbmii%2BSQFrPfgX2W7Atww%2BqYWqly4CJJoy%2FsheCYiZ9KFzLvfEGMgw7W9lrCk2g%2B%2FLKiVqDUv7Dta2WiPXaJxdg4bcBYA3VbhapTidhKxzSWYDNjKiTxrm%2B6rQs%2FQl3e9YQe3%2BCPDBM0OhujO6c7kxJ4iktoqpU4pbVdfYTgEsuT%2FuuouyQdQF1Wqnfwe8e1YyYj7D1vTa2JXS5Q%2Biv0kkAf6HvVK4wgCIroe002QEpkUHqWmbiUWs%2B4YXjnzEWU867t6EX18ZzqWRKmdL3O8h2VMFivrwtUukEN%2B3eAcdR5rDtlDjuaEViU9iJXDuoRiAIqk1nG52EPGoPVz%2BS%2Bw5DpA%2Fc9n19iQZ6y6ax5FUAIaMPfFG6Mu%2BCPHQhet5vhScTop%2F8YdOzLgZuvgeyBSgfIk4Ecw4eT%2FZUsR2jmUvFcLgJgR235T70UP5FjO8PUI20ANrGhm0JAPLGAw%2F3yBDRBJFJ2E5br6Zg7dSI2vx%2BDxvVGPwEsp%2FOwcq2ND9oE2fJ6KZW1GSQriYQE8t1oIMOTtHxzkw9auBvwY6pgHfG3pqP6DU%2FTbZrJHLhzB8%2BxAdPbeoAQmbIAnAS%2BZ4EItSBwmLxniG8ZTsEBJt2PHB0yUzr%2BrQ1T3Rkj00n2r%2FxISJhP7ToLBhfTdNSi6ZQ5pQnvokQ02sxeo3fM%2BXy2ymCNlPx9NJ%2FQYoObbwA81%2FPuy4Jbj%2B43MCZ2ByZe2fdW3hN%2BeqEp%2FzjBWnDvdChPhrCWfQ1MSXkvRPROwW0Vr7baHKI7a1&X-Amz-Signature=c60820d7631e3ae22e2c5f25209f5d39c56a8e6283fec1bb555c0af037df7ffe&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
