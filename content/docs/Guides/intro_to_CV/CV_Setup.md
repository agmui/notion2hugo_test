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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3T7YZPZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHlbU9H1RiA30vJM7MR0kYevY9vTElIAZbyb%2FEaEJ1GeAiEAsq0%2FZ4MJsIb1hzhIQsoMc0tP%2FtdF5H6uBuUH9C1lgy4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDB7g4bbBDWFnqRiKGCrcA%2BbjwQB2qJbmf8h6h6CJoUAfMpXAgijOYq9gFohEJOQmjajGu1OI9JzYRyEhlbKM4G7E3FQm%2FZt33XoBeJpSF%2FLmguZCZ%2BlipOtDxQgIZkVw8pduWKOSs%2FCtqS5EWU0tMwG38p1D8zZwJJP5%2FY4ujCA2pvWK35hfezv1qlAkHkqeJfWSHSJiVtUWmvsarloApwACDDTInRRNp36vK2nR1qd4hlVzyEMoVS4ZYghkFT4ffLwStOIJzMkYY%2BzTuX2clH%2FP2%2FMV3pFelFsKyBBXSq2YYTcw5NtcVPnnMqKQ15YDx0IglU8qcDKF1NtX0wXG5ahFEDU1GLns6PHGWz8FJh18QH1JDVgDL1JvQHppZF%2FUtL8%2FfVt4AI3bR4p3c16XJxCjVk6xiGBA%2BYP84rVcTDBnl9HTUdLF4Cp%2BdKsEeKzisRQ4a9tDqqx%2BY%2BJ0hY%2F%2F0PeOyPF%2BrZNc6JvGkVZuzgDDTPzO00cKpz8u38p1juUbIJx1w5mVjaCdPOXPLPRJEl49OJATRatH6F9K0TTTopxO7MXeItZPZHtc2c%2F3EbFduj3E%2B4LqBze3sfZzVC7rMEfK4ezB1ydbeqIJIEF9uTiyzWJCQ7e5Sj40GtYWsjUHxnRdG%2F7c7gaAYAmNMLa7lsQGOqUBiI0VYY12xuswa7NAU39ZGm2PeU9F5xocszYJokJPegGLPH8Prnt1A0wIwbcWtVGqfQypOfYW77UImmTwBJ70hf6Ww8K3BBbh8Lttrw6JA5066ZVJ8I6fhxkMCYGs4rB50hw6afkTidg%2FDiCHdU52xYqS%2BSTQ1dPQnl%2FkinkAC%2FXnI%2Fd7p4KmIRnzswPteh6CyZWLXDFYC7rT7DGnX%2F%2BDVoanp4q9&X-Amz-Signature=1cff9165e099a46386260f43582959a0ad360b747d54ef6a6169e70bef019f79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466437GCI6H%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIE9%2Bbw85DtoK69%2BjhAXERkv4zRNf843uBTrfrZawSG87AiEA0f3fmRBhk8LWuqwsJGAPIRsRje%2FwoKMaJgzvd%2BJmUFQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBxrZqRPWDD%2FPi1keSrcA7LCQj1NBNf7J4qepcZ8KRKccgFKfoTbt1hXBAclH8sxumkx04uwP%2FJYXnSbBZPYrOaJkIAPmxKfui0ci9ZKj0ee8VnOdB3vS5wUjdeV4dY1P2iA9aK9jfOLgLsOtupGARzmB0KfSsfS%2FJ33Qu41DcgJq4rL7jVBflspJMOxaVnQ%2FYZVoUCdkEl4XAORaa0ZAyIxc2pQFHHenXkGZb3c%2B01yY%2B4%2FmDqIRzNIsJcZ2weoobbPaflwO1B2UgOg2JNKqXl6ZS8gSZpPFT9GItnRzvLyui6h%2BPCILUQtVLcvhMvkH%2FXAwM7LbAskcdBfvY7T9jnYededYA3erdl2f4rJA8Vc%2Bvh74Yf4XsyVlZ91aJlon40%2B3ApIbneMBkBSC0RNhjs3NaJw6CdQSeEyEl0fHeKy2c8LowpkVJLtHrbCU4eBTfvir%2Fe0VG0HaAnqPvHSkwxRiIUKAhbNC0IJkKhBGYBcYni818WJWU96ZbuHIqnLo%2Fy8lnBi0v0P3tGv8Ruo8gN57xhNnAlUrhHMB4d7Gt9hVgxiOXMaho33iT0wWLrnw8W9bTtGc7i1oXeSsP49gjPedDLd%2Fyklt10Oh%2FhESYe0GNXZBCINeHt5o1%2Bf5la49iIHuBI9bBjzuChoMLa7lsQGOqUBlT%2BQqxJ87Q7abLZSC4xPT8FtJT6aJqA2QYH4AV95qhlt7gSsZsGLDYTII6QXDAI%2FXAaUMG9s7TC0iSd5kQO%2F5wsqww6riRZdo2FntnSBGYul3Py5YwkhSnlxRuat02xWxZrJPP0%2Bi0CI%2Fmf69xd1geJd4D23u9Sg0CUTN%2FVMqi6MM%2BPcs0O1msw3EHM8bH%2F%2BMpDoxFn2%2F6%2B68TWosPDJD7mYVgr%2F&X-Amz-Signature=583cad61deec5aa9e67ce50b04ca51ea145462d9168fdf4ccd74f435ae066547&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
