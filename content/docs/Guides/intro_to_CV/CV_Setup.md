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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPNJDWRT%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQD6s0izmf8asj7Api7smKOeOP8VRp8dO8OOGWL8oKOQ9QIgP8A6ATR8vAd%2B0vDEUnQIgGeC12wXbphBvxTdoHn%2Fx4UqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWn5%2FRTWra77txP3CrcA5IHYGxkRTBArm8%2FUMdScUONSpMGTaAvEa4PW%2FPE7QTAtfCBFFwRqGxEKn0ZJi%2BAYJR7XaOpK1cF%2B1wqJrD3XJEChalSRnrX3VYlDN%2F%2FFIggOMwd2OZ3zudb%2BJNOfQI763Et6Yex4B9v611NEfSRMgHAjaK28KyqWY%2BgaTQyXnimAa8gYjSq4Elmr4OdpxalET46%2FFXqpkyy5iWjZQNYT%2B4YmszeonFbp2LThqoD3K2LCtaz19CEAwaqeOPC81wcA%2BRLajSetU0fYhHQezbznTWNKO2F0UjXNGgZ8yNhgqq5Puw8TQANkv26%2FvI9EWJXPjS6kqNWXry9dJVtRIT9KNAw7AxT7%2B4XSrueVxbb3EEkEjp8SFKlHY032dGge9QjCdm4nnnmzOJKB7Xbx0Zzu5tlHJPRr%2FI2A29TvsBvn9yiGs1u4bP34bXcEBopHuBMEMnzSs1GSq7c3LQqJ8C9ngsB7fkAKYYJpEeC8zpgViwl2Z64aLAf5eHaseW9xZNNZ6psHpSi17wwH2ayxDt9kEgAd%2BI%2Fh02XNqIoBI18k7csRl2N3U9Ql377KvHpvBXGWM%2BQcrkBd2%2Bl51v4SG7q%2F7yRt24J%2F%2FfOTnBb%2Flt2b8XAFEJUXuNcfndNP6ccMMSu%2Br4GOqUBvIOc6j0N5%2BGKvBZRyvLy8%2BKwT6AlV3wICmS7itn81RHq5a1hp4TNOoshZNw5OyLaq8k084FvPBZNcPYlESLSzCXTM17daXXKIue2%2FVfbxgnwk48CzXyhdgVyPtJlG6TssPgn4Cu6RfMmbN3GlMbo%2BjQkjpzWsfuiGUUuGmOrqqdF7VQ9Ig9MtV9XtvF5u9eQVjHN%2B2zWmSm8Qgj%2Bdp%2F087FrlP8y&X-Amz-Signature=8fbd6209f406cee95e4369016781c249a85d0873f92c03fd87a5a7b100e929f7&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N2UO5M7%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDBM0hYxwKwSAbOiujD%2BCjevpm4phIcfEgWnXAPm3sIKwIhAOP0Cc723%2BIZ1lXuR6D42opDOdz%2BaWxXm4XPKeNo84YOKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzGyN57vVjo8FFDaAq3AMJqTYRWim9BSHK3VjyF3Ea5XiV5Ki%2BD0MYNq91gDecW%2Fv0rPZiiLhwdmKgugm9yEELU83UCOo%2FgHCVOX%2FSc9a6hKhxc5TIfZkK0l4MvZ8H6MdlluzuJ3iClEfHJHzmp54XgL%2BHU1bVpP7ecb31KPXN9xM%2FPgW%2BNCIAp7nMhzNW4uPH2%2FsNEVgg1B0%2BDymh4esykQ0kRFT%2FBvjyosXXSOfb0vFWUfqoGmX8ZxxdqX%2BXKeDG08lT5pPTrSA2INDA%2FLRA7JNrrJhrb4f5EjFfwYm0wEg1uUI68UWMxt8ZDVNP7J0goqZ3DCx%2B8KcKPt1gfC6OrpSk5%2FIt6aYOWP%2BMd0WGTRMxTwhQzTYzz%2FW5az8GYV4eJc5ML86oEobRxHJ63sKBbEjo4IuIG0vKoX%2BfaoKr%2BDc05ty3%2FjDf9YfD1CKsth9IwiFcOuRfj3SINDnA2YyEonxDoy%2BLpSrKRGMrNyvv%2BIbgpFu4%2FcAgjFfUs9Kd0h87%2BPEwNw%2BFAH9%2BJyG6Hb0MoFa3TIble%2Fcj1Ho8fiedwCgXG4mA9n8TIOY1V8ENTBnBcNizwlQzm6kE2VgCDeLipeINiscFJm06OM0dSuYmmIwZV5swJBttVi75rbV%2FBd7TzZViv7IfzTPfiTC4rvq%2BBjqkAWVmN33iuHxN0I4Jav056%2B82iHRapYfcmd41YpD1thtkjw4Gqk%2BCZ81EeIitvnPle8nndYb66CMFKj7J1pVFDzsBbHA0Qg8bpolbVS%2FA%2BDxLvxrh%2BXZtJlsWYRGxHVPkeF0l7ewUPCPzrL75HepuiGhhT6N79HMVbuSoat72tesws0UcDFDMpcaJMW%2BD6CkEnU4aCerrU89aOadvq6lLTtLrmvTQ&X-Amz-Signature=72890c96c6bb080fd337eab52dbe64c4f2a7d3eecafac4a5eda36dded93fa612&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
