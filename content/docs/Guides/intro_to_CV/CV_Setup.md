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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MYLWZG3%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T140811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGa%2FLIyhx9q3O514lQFCjmZ5eAfDlA8M3Hoi%2FOROGr7nAiBpm01FFgwO5oc50umrGxa4HOYutB7x4ycxYzdt7YaZUCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnLOkT7DeAUDdu1nlKtwDGAZDyh2CoRg4WffwUyy%2F8lDqR84Ln7aDpb4hyKwsHNEwXP3IVJQxNVwrJ%2FsNW3r4aNvuAd%2FNuUIz%2FQ8Y5TwebO6NisjIi1MhCoGkGU2s8qms2Prg9LpIKFQ2GfMSZ7h7oY3IAg4%2F8qejzvzOJcvEWGsKPs81O297%2FsLek7QTIH1rpO5%2Bz9lcclTZf%2BgiHEJaZNmEZGMUFBZY4aek92eq0mOTOHgcmiqb1ttkmdpdrNQNt35pTgIsP6frOhe2wv4P65vm5ajTaiHv6kTUV5DUX49cD19tQyFeBM6jgXH1yyApaUbSc9TMdk6Zw6hOPjXWPQvOCEzXrg9zitGsxyVuyKBqKAL4VIuyCeymTkTd7wu2xYf3Ut3dAEk19wfwZ%2F8kSND8ymIjBJpylwjpcC6zztP2nEe4QcA%2FoeCzqP79QPyD9sXlxVEfQ9PVHLHMNiJctOuEdSP4POm4d5EfZJm4vP1FgUpNfKgzSryfJU4lNZqGHmnATrc1vEnljtiWb1x%2BpLswgQ4VYVJ68LpI35fjR%2BHrSkYu0lKtgZksrKn60YZQXMSIh66yGWuiCsq%2Bz4aEF7LU35tfR6QcIODk%2Few3FA%2FenUYsByRNfkFM0wHjkKJGwCBpa2Cp%2BdnoWc0wo7juwwY6pgETg3%2FugL%2FDayClOU17SQ2x14glFCgNsnTkGwj8aAi9nDU0JXir5VgspzMHAQTOULKGKgxoCBK7ENFyTuUIRouXIsVDvbqwr9xm83ZXQXBEIvUFWI%2FQggLHhRg793HuDdwnWqqVOUSNvNYsdPpwimveuQI7ufBOwZo9px8Ci%2Fu83N6D8fYR%2FsrzuKV081phDq1lRc7GNT6zI8G1WWch9qrVN5uSg7%2BO&X-Amz-Signature=1c0df6878d5dfe5cbc119ea927508ff60074779f6534c76ec942c998710b80bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WUD6RH6%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T140810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZbvZf2H5quzt7nCD86zFiQMS2FbipdTvbM9oECFdP2QIgCo5DjWmQZAgRan%2B2zVcD%2FFFNY4m3hdQS4E%2BaXv70i1kqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEduatewAPwTBsiVfircA0dwTcd3N3Z9A0EP72k5nsw%2BePqpA1PjBbKkdHHkw5J7GZap%2BWK%2BiCoviskQs5%2BqPa7Q9jpZmPF2XxYvU1g8bLR7zqSuElTdKRAYbxMyvAjmr45xgtQIm51I7Uy5gjXsFo0riauvaBkAwOjEwxZq4%2BdfLY1x23mqhLSZGI5%2BqwWlYnMKkkrT%2FAWodiOZODI5%2BDpeFtkF4BtVJ4GCCb7gJWaJduV6jvqlL6qj0EaGPKudIyBKzlbywIDmGiW8U458DCeDxt9ZEWQFEtJO%2BobcUWrKlWrPzPaXDFJIGSrthRN2AdkP7cwywytt8OpIsWzIvDp0cgmkA1YbLLv4sXghXgMxNsXbJfsuQRgWPfkZGcZ4642Ofg3CMhk9kZs5IB7JpBs9U3TP1AgM2sP4m9%2BfPqZwf0fDRMdgUuv%2F3lG1MaG%2BLGzelmUznM%2Fk8uiKqERhweycC1aLRo91yIbVG53QOoCXbzgC7IraNe7IVmzRLQuRfuYuJs%2F%2F3qjQcHhCJXMjYzyQ2IQ9lAF%2FCfsbhSoI%2FYs3IxNPErzdQfZ1YgLxYc%2FMR9Thwo3vDyN42GEAvehLilMlGGrzyoFzV9GNFUHsqC68kRym%2FVwTGH6RIVwcwwmRPX5O%2FJZkewlGRX1UMPa47sMGOqUB5J4fCKAjrVINpCp59Y1j47UwjKqYYtMdN3irrB9ueJnZozobWj%2BOp55aPfOpbsPltAdhrTSEO5PcJ8hhpCtkzgV3O6zL5dRIaFr6LLJR12D%2BECsXOjgBTdxDww%2F2UFTSAManl2d8aeJN8Lnj8I01FbSRhI8Ra2IweqKhfsx14G92FxEiJmWCSMVSUDC3EyflE6Gcl%2F03dozt%2B%2FZAmcoJVEdFdVXX&X-Amz-Signature=a073a5205b21ad78f55aa2e81ccd352777bf88cde0f66996dbca3cfd75adcc93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
