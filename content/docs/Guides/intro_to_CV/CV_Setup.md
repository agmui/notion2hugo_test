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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OP3VCXZ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T150907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIGpHbyfDlzupkfKXZK7RDYJjmgK0PirvsqRj1K0agY8uAiEAjHv6leuD3%2FRiiC7uRgplbrBb4z3Wg%2By1tbREENhA%2FZgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDHDz8ubqw8Er2iPTFircA%2B3mq8X2UBMH8ZQBIKxr777O6Dkn%2BtnoYWpJ7BW%2Fz7wsPjyCJVkqBAghtgeEHYWVnUfQsmd7RrchXvnXa2LzdjQuFRH7EocR1m1uftErClAgRLE0I%2F9Vp71FjMMiGMHXeaE8pZFWVMll0zQmYik9UvxDFEi5C4qT6SOHhgDRwOWyJ1p1nwOkA6rLF5TdFlCx9CavCB%2Bn9FtVdTqngkeG%2BsSknQlLI0UqYRl7qWJ5%2BqxKVZcE9MLWyT2a4ISA%2FXUYeJ3gmjVdk3XxT6OuScLIIXqrny89Du9J%2B%2BwYO4Q5b887LJHMG9wyiS3rhwEp4HvAtS%2FNnIQWIlopaIArojXs5I2hfaDQJE5WGWup9wD%2F94jxrCbPapBHsZQyY7WtvYvp%2FFKwNDF1eXlEX6a6hz3jy681ZMN%2Fr4Z%2B2Yprs6cY%2FFo2piUW%2FKCzD%2BJt8bPduAry%2BkMrVXlObP1Hyktx20HM8UOneqWmSjXPrTdV2B1OqE6sWY3FfqrB7tDCG12L7rlW0d3ITNQpHTXb%2FEpwBRGixCO06n9%2FtWqIwIuNqwhlQ3PTNcygRep%2BjE%2BuP6fkCdEI5yJDnj8g3x4b2omwIuoMP2lEFvqAfuKkhFwJiQgrQtXYgawVX4UvghtzHg5nMIuV5r4GOqUBVnCmd60giCw8KVpw0x9REBiPSWzITbNqw57uenz%2FYbN%2FOqMyufOGMhsQmxpsY%2FqXdtSc%2BmLeGVDLewUp2mmoW09%2BJBKEwnz2%2B7sP8mAtDL9%2Bvu7Y2rF3sbJkBaU1aeCw8hpmctVpKqTWnH3HjR10194cjIKi9x%2Fhato06GZZNt7qiznyxXBvHodh1jCekOhwPlpA2wOdo7tNmTt0e71utz2qCFZd&X-Amz-Signature=2ea7a88a84e10e2f7efd8d69a7d9ffc08d73f384f7b3024be263a489ad4c9aa3&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z4PZLUQ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T150906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIHWhE%2Fr6gLqg%2BJWQ9xt9noMcuTGV567WWFdPK5mfjoPVAiBOU6Z2RuhtTCMl7xrnDLy08WqinUmWC4OqhH433PqjwSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMpp7dnzqd4F2U3%2FV7KtwDxUAChAqzZzk2NhE5XfaSUYcol623bCdRklL1My8ILWBg7yhbiO8bfMeN8syvENlJqVqjPNuUcj1tIVtNon9%2F2SZ4wWoGiFIlZMy9r9CvmbvTST0kC2j6WiRfIBgcHga78Sz3TWQDuWAq0rXkClZ2OZm%2FuReBi22vXCj%2BJGGnzo1zjlfRNgOaxBTvNP41A%2F%2FjqNPGWzMpVTDRF%2BYYtfg0GoM52Z96oGP94hhFUQDpOGm1OpiP7gIXfYgM6y35v4Zx1qMeb1ZgQaaCwTfbsmdgaTk7gfUV%2FyCAyQqG%2FZ3ByNC78KV6a%2BshPMPfAD2fs5lnUQRmYHZ%2FGLUgL1FysJUPo3N2mLTXTHbSqB2wPr0%2F6tI2dTikK6AZLOwa5qcbPdbEFAqatqarTNX4h257fBaTUYgsRUqkPngXvIhcLJgJBcoGrbL9wqn3sh7p0VjrcxNznk0T2Io6jLuGHMNin9FMuNuQnaP7qmr6tM2bBpXwBxlVnnEdjz%2FPgu00j3QTxKSG12irRxrda30x1%2FbPZzqqGbbh%2BYtF5Fw1n2gPmLlVd8TnP%2Baunn8I9h9dO8U%2FMn1d6Zna1Ix1h%2BSwzJuxkOcE096wczb1X6TsEoFR6ov%2Fs%2FH%2FTU5qYX5lJGRH2Tsw1pTmvgY6pgHRM4gIsPf9t7n0FIYKFdO452golbBv%2FFC%2BSh7JkqdnQgWARatzHcnUXHnqV%2BSXGI30INjKffS4F6f1j8fSq22Ik5FsHhxESRtb2egANwVRpFKP%2BAsAbPf1s3gk7BcapTz%2BTcVOSgH3nY28uXDmZKoKX17pEc7YAPvOiaRECgZiCu%2FHpJ3UUDlEy905cZ8EqaUWaMI7AHxLwLwof4hb4Xk0IxZ4Rfmq&X-Amz-Signature=3aba6034d697e5d40aa6ab01839d7d49a36f395a314f6938fb89ecf6a4b3c524&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
