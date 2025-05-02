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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A7Y4QZP%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIHAP5m7S6ctJ40IJJMgAP7xcxnj6It3IMLkdVq4ZnB%2BrAiEAhzLiYP8ABaKOQav%2FCg8SmK3nw6AbRmjh7W%2Fj01tiZTMqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWEQgn3PYXCJdU5zircA80m%2FJqIu0IpuP1WY7tggd1%2BTYr8%2F7BXKOoy3q4MXWSHN10LspB%2FwoqHVYWcvM%2FY%2BNLNu4GztA35BABGVcOG7cQmIaBP4SsZ3yxWBrL%2B4%2FyuBZpgn8nqrIm8nlUYE14hPcOkrxzVii2vjzlJfYCDlqnQFiyn%2F9QuhF4%2FTm3%2FL%2FQpEUhrAS8QV%2FgAjhs6ErFcDC5wjdI0Dxlozqu0c3pDYcI6WeVTS7bk6wKSw6Pdl5kIJqkYeaf5nzYh3OVj2tITI23ia1yCoAsJIz86z8QckMt%2FWQLz%2BumcXLo8QPkPp7cASx9L3AaCslX7TOJbsDSJRQxZOAYLaEGKxUOGCoSRFaBbZj7jKPH1aVO%2B%2FjZykYZEc4gsSkpwqPmdw7YDwGpn0oRjzA5P1isPtksgYhYRlSs%2FTj8e5%2Fk0XxbPW66nVUApk6RUbqdSX56oNmK4fHOopMtHlH%2FwYiT%2BT%2BXZ00irjeYjGb5Qr3n9MzAI270aqAbUGXY3AqHhK8mo%2BO4Bz7ASemEH6uJ5PSdx6B3Cs5AjzbsxLUXX9WLCE0br6aPsJACieQlyzRELPhN4DNpYIneKahmxb0OxcOg2btyJcJB6u7RNPztO5wr6LCiiHJLfG277WKor5lPba5NKFn23MK%2Bp0sAGOqUBtsyyIosTnCdb9wRGVrnNF0iDDP51O3cgVfxT5ymWUjy5Q0Ei4MpS%2BEPpBY5uV0%2FKLcHpqd23ZkeVdBDIyXhrGCCetYFhqZNDA8YCA2Sb04J3DM%2B%2FfmjwoKITmaxHlpY4H76o4o7SXnQpl0ZuRUGCe3nXc%2FRCCvso0SYjRCMwuEhny931oRTmX43C5vRXE2qKwI7o1V%2F8EJIBmM9eF2CuSPg3yFzZ&X-Amz-Signature=7f37854402f0f1b70f140a4d357679ecc63d877317d8157719852f0e78393e5b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXZVDQ7U%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIBPtRq115svTUJHXlmlNc9Ix7xKUZmsqGjSDG5%2B9Q6NuAiEA2KncOpGXgAUxDqqbmlTFJVrtFJte0Yu2908sJ60nWNgqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGRqy%2B7P4KrKQ0WQCrcAxCB7392K%2B9N8JczPbCSh6xD9ipME0XWlsty47A85F6nmBXoSsUVBfKGKwM4ylTlr%2FhrwDGMnuuCuWw8B9mj640h6rsuGhdqDDrbiSDfAX5KLihz6t2CftDRWqbEJlrK7U40%2F2vXv%2FZicQQLo%2F2VtUcdJTiPnyXi12e0x9A2%2BMc8FHrQU3azsk3Hg1WfuyX67T4TvMONKOmvTtIw6zBtovcSjWfagxxGTFek95%2F8tbzb8g6uDG3m88oUGKlUmQk9pelcITnJPTGdofgyTcgptoRAsEn3mAEot70BZNrlOIB0cM6EFjLAxfQQJJEb6PIivtD%2FSjrkR%2BftcFuK1MPWasz0J5wYjW25K%2BsdIBC0IvvoLZS%2Bj3orTH2Ykfd99OP3sl%2Bv88lhzlj0n0aqnzNpO3gn6%2FVUtBXytrwKujEhfhGWRv7ytesxLCkqOi5z7hWfu6TwJcoFaJDgxR8YU1i4c0%2FwNHFqBT03KLejZiifri4pykSh7jqI%2BUfx1u2NlRiFPGctij3U4Gpo1akiNdbpWHzniY%2BK5AeFgoGRjlPCFGNcbD94f1oERJvkhpVgiAAYGRNNY4M%2Ba35ljY%2FEAZCeBf%2F2vlGZvTjkHSp9mHpbkKvlmZOjrf1Cj8HlpI9zMO%2Bo0sAGOqUB3%2Fs7mGeGIc4VNeMF8ErflQCMG%2F4eX%2BnXmSBTID4jvVNDV46BUn%2BMyZ%2F9mQvDc4XBllBlS74fzLfPmeEQwmHYtkssIEyiPhXsa5NUyywSsN3o51ktzLhgRpMWHWcQfUsTuJXbmbetjnBUiwXPQUCx7nbak%2Fq3xjIsuY1lg%2F%2B6zRwYgd1WrqIueqVwctEfVcJqYj3EY0NHy1ojEVxOFuyqmBpQhMJD&X-Amz-Signature=0367caebe50cd3732a721a4159a8517a016d8869f81b00e4a41bd758f6bf8b7a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
