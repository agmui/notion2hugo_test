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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7BZMO2W%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1KIEzxA22C%2BOaXiFHXJ6VfJVFFON152xPIF1A26ccUAiEAoM33hEhaNh%2B2Tk1jlbWdA5bjNxQ6s4D09MiRWsXOYcIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCXb%2BREfEhDflLVU3yrcA9Bleg2T5ulNbrf9AE28GdWn6pcijmkpjUiMi%2FXyzYpsTHcr3HR%2BPnld%2BnAJvCmMAabmt5aT211jdg1q6eiszd9iPe7BgAHxLGVRuW1xxI3xrRsLBd9qst91wXi2Xb5dbSvd83m2brQXeUX61YV0kZNhiOnbCsHoPSZx5Q1swNHY9eB4sFq48lcQh%2BID0EYzmqT%2F5tNDzg82KSzn8Nw%2FbkH9GtXddGDKrDgsGTyxLZ%2F9VmSCoBmXJmVNyKvAjy7X0QMw5Y9cNTogn4hCLpH1oSc9IeVk%2B8USd7EC94qcD8%2FjeNaYbnmL9heN4tYiUq8WSdULXsFatDjqqd94hPNhVnncHoQ%2F76G6L2MHndiD5IddDCcIGkB7bdiSjyQ7T0izzyKKCArogZ2TUswqSvZQ4l%2FP2whmI174H3ujoX6hnXq%2FBeDSyY6KBGPzheqQPQXBfqByfnZZnsdneRoV5tzfxH76f0I%2BaI8pBpEr1lIaiUUnrqiGSlApd1M4NJrI85vwnDodzChJVS%2FND%2F%2FdzfLlgZgV9gHGS%2FcZzyfz%2BWndG6hOniw%2FvcliAIJVXLG53vhfp65UCb4N9mmIbC7KVbiJvjidPmbgaNfu0mLqtcEiH3Aj5imfNEEQkChXg%2FlRMISf0r8GOqUBJwr5TKbpfdhGmSMPW4UWsoVAN5VMbfo4GKuUgrfCJIo8cwVY%2BjzdguzSOUi0KmYg%2Ba0xnPQF%2FVsrjsq4wcnEdoJBB6RVKyJXgiVXCIdoQ8w8FtubzbCTIzpSXykUM273ehftJ7LitytBmK97C2tgMjd922UuXQnIdHtMh%2BU7jpV6XQF%2BncDAy1jBxbCbKSqLr8cFJE66Z5WcOdxd%2BAdIVp8Q6LyE&X-Amz-Signature=c4a7d030c3ba58e757ac4618a997ccfd351235694fef75d2d2001e980f83fc0a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVB5XBAI%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAMW3jJmkDkokWpaH4%2FE8BvA2cBjP3%2Ff7Dp8zp3xYw77AiBVzAT9IDjW0mXeDDAq2zVagkSkFwIJ2X13N3PGNwAgzSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMfrMvqDrnB%2BuLbko5KtwDkOLQN7WuWJC5Nb4cHGdSiBBPu2L2tcmiogftEGMAZK%2FdeWp2K1AhUZgKY3H29pAMIASDWbK4jwe86E3DfeEHJ1XXrbHvtAgAqaRxfnuiyUv1G%2BEhwrrauW%2FuX8aZlWHPgB41SiRdga45Xza6Sb0zZNdUpzCopwcSjMFFq0YChr0APidytxTCnLY%2BdC5idHgrf3ErqATsjvcxcStNfZ7WCQXknENCxhkpMUSn7PAZNc3NGj2ZfxLSlXZM2d8f7pqObXvP6aFGzxPmDadafdAcaipAB497FvxtiRb4IedyOLTK4ddmySlJVPugkC0snN8K0%2BM9B5aQYkOvXmiiYYdvR2y2gkD3bsNASBscnABzWn4bzvCJ6wbq6pTVOabZWEwN7wuuSE920vGoiWCPREtNbJ%2BE7Qhl%2Fk1tGghCu5VZnrCjDNtrsO3VbnGCnS1UrbtPhIHz%2Br3yBa4wN37OWCy5rP61jxdwkeL3M1Of0ql21%2Bi4I62N1RSiCWidVrFrqsyu0QJrHhWxJAqhz0ao%2BAmPyzXo8aNoYdBPGyV7fkkDsqKh1J%2FpIHWcvxSgqMn8XrB9yDXbwImwKhs2eGYxRBRuvftOb30onRcxKz%2BYQyX5ab9HfvZUZcwKDTqmtHEwgJ%2FSvwY6pgFOO5xzC%2FY7HJqzw5en174sn4VXIHQXXcheaneq%2BBmHJiYlSv%2BHROTROhSyup5DivzSYsFksrwWf1tVymYIdEn7GD6fDaogqjvbMfdj8pT%2FYsSDuT8fu5hncyCiidnLSjqC5FzS0A7p9pSfoQg41ooZoNt%2FmaKG6dXQ1KT5o%2FQlyG0wmLvs8oAK7jXH8Iy2BVQwOW1u0q0LxiPlh9UyZGnnC0v7KIo1&X-Amz-Signature=c859ea999b7f14eed995dad236d357d8775eb95157f3b8744140c4d9f3bdf111&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
