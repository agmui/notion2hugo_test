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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647LYRJ4C%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCID8CJiKrZdrP1Amohr%2B1SQpW5P1M91cWzEFXVhN7VxLcAiAwXB2R6iyG6eUVAj25J8Wv8YbQbsq6vxyQebOGNjnguSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8AdNA15CWvumnaC1KtwDFe5nJHbLy%2Bo0x5S0mi%2Bamr09l5PPr3oCtd4eaUbsMzee82LquYaMIQcHMN%2BdQnQkE9BE2J0GtrZQ2srXDgSTrjFwcNobTXSWfKo1XXl2rztItHnw0lCc%2FDpTgvwEZ341ixeX%2BbKKrPbteNFxPishROBfQ6ocg6oCqvrpyf1%2FdEitddUueowH25dT4tJQjshPnfqYIpQa%2F%2FEHVsNgCOtmwZ%2BL7C2VxAGbZuHgqGFvwk5rhcSXUf%2F5djGGkoBA9zllLpq7AebrQbB5zxrk4xr4I1%2Fy%2FG7gWsdnprv2CJf1HNoXq4Ag0aI5nrw8hs%2FPe82Qr5copplF5N9SZliFlimd0MhYkoNDPeMpKcck1VIe%2BHjgzcmY%2BpUYCp%2F3WmdonKzxBdhRg1bhs7Qe6zvo6G7mrCGgeTshA0OXY4VJ3PxpgCt%2Fs8IH%2BukpfDWAXrR4jBVrUixiGbmmvy81iSJ0gw8gect8QiFTAFRJr6%2BhfvEyxZnxEGtEIIL%2FjcK8qe7BnoAZEsZ3tc4bH%2F5sxCrtkwz7%2B7UWFF6Zgh0yj1J5o6dL8s%2FZUIf4k6RcRQK6NFQiNXkvAi14a4aWCapi%2BWrtk%2FXZmWuaKocnyM89%2BZyhxk9wYRxYPa5P7uk%2FQemF4%2FQwtvu0vwY6pgGAWv9X%2BGIPeOyqGGJ1Fsa5m1CIaEzNxlmK2j3oeDdZcgNyRUuOw6z1%2Fq6RzAK%2B6dMQrreddzkgyoZqsKVUB09iuSiwbPrbIfxuBgJ1txavxzdnXvuICWlQXZ2Fn4t1Zwjn28uHtLIQxKGIdULR4qz6y%2FuUEZWQKEvqACksRBTzp7%2FWUzWRgdfooFothXsKyVRYUO7fWQF8kjLeDT1b5jAFimONLi5X&X-Amz-Signature=fd8cd052bf697e504dd2f1ce5d1d54c16b260c5ccfdfacf60725185a888ce679&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKFK7S5N%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDLQCGBSb0vIEiG7%2BuoLLSTiQWvhtZsUoRqVeFEB3dfiwIgSp8xrSQoH8EGEFNyivN4orCYmzsd%2FW6eYxreHfIz258qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlfbb1D3Yd2TfNjUSrcAymxww58c%2FNynf2M%2FDMPihjuBpOV%2FvShHvQ4IvFb8%2BUVmUCU7ETpbbrnJ%2BZJigkmzEOOe55ZGEWTj%2BvmFnUNQ6rRjAmFqnruzw%2Fer8ja31Hi2ObEsyFodwUluidMcivTlBzWLRF%2B2nNb0oKpT2IBtP4FlJ1AN%2FBGoG1fE1X67FYuo3hRijuipVCNpwVsKRgtx44G%2Fmh0WCCf8%2FyXxlLqJONvtMTY6nOM3Ci56XOhP4B9tDZUvQc89ggvJLvZpwYY4QW2uq7Tnbw1EIwNSdEOUjS73lwin%2FpLw7SCxUSSixrVBQ3RRUBpNjUUV6GwqwJiQSE3B%2BIgHXillfATVcOy5Cp0FA9fSwZgKItoLgwSlyxS3toXWbW6oN1av9Ao2E2NEss4l6r1Y0Q%2BEetTBKZvV%2B1mJSg524P4qM6ucbDcpHPzYhwpDC6Bf2PL1zfz46DbIvz2UWZftrrRPY35wAYS1FFyG9tmJVVwrD8FtgXpRehuNFxMOyGWejqWNnb91SRN1RfapnfHskrj4UvAiOmLU9%2BRo7hooEty0LgLHyFspneo1uuGJLZa3t6BgIkVgZcb%2FYNHUvHIo68otswG9f%2BeIclQGe9QQAabOmPcUEibDwTjLGK0D2XjnE8fmwiZMM36tL8GOqUBjRULPmX7%2B9zARjGiCyozhiPxg5SQSZKS2tQBuCuAGdA%2BzQkBm0zgIknhW5uytcGObvtTsj2x86OT1sbwuEqqSMVaYOh2cy1WjBiQ%2BSzjee5RNn3HvRHeI6VThtGMNLFVJDHcUPvx17cG8ZQYjr%2FyHewgKrVMmADlNx%2Fcpk%2Bfzv6cVaNkt2LNH9zLGv8RdGq60XOKgQl%2Bp1p2lKagJ6X5FauqTo8r&X-Amz-Signature=b72c67065e768bdad152596f7c7dd4186c17b2257868203edd0c213f734db33c&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
