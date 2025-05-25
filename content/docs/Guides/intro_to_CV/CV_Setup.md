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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ENZRVCU%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIG7vpdY7wDthJtDyXpoTqJSynYkQ%2Bgemnlso9h27rOX1AiAnadWOcE%2B5QrVZWPqN%2FURpoef%2Fzwwx6hQUd7K5lpX8cCr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMOlziWeQkdlua25jcKtwDt%2BfZmFCY%2FBVdWXRYvmYQBryAYsemLuMhK76X%2B2Xxi80c1hFsURM0cH2TBHZqGZgTFgwje1EG9d6Z1R%2FpEWRG8HN3Dv3VR1b4nOwSNEkIfpd33h31B402B1frSPXvvEgHB8m9Iz7554%2F6fJXiFIKa3NRpFC9dQ23D%2BIoUetC9UE0Potg8089E9rY3YOTWJGuyjfgbZdfSEAjETfI9%2FBT%2FKg2wvUAFnkBwvXCmCaL4gDH4X0v5YzGgeOZlg1sVTP5LtEJ6rk5REGhXGj6gANngeHCSaEnQp5tU%2BkIjy6z6ei4HdMsl1nOo2%2FoK2%2BjdvQIRjBfBnT3yMWd%2Fu5xq7JDxKa0pg7Mm2sF1YLXIRhggDmMN81pIJJ50HjOws6vvtt0t36Er277lNWb7pDyMcL%2Bwi6gmB%2FMdJ1lOnsHFFt8deHP%2FsUm5UoSE%2FEOcV7VQUTlgLQWoQ%2FFuSJB%2Frf5xtN8j3TUkMKtMFFU5UE8%2Fy17m8nEiW9oN7yBbh9boqeV4%2FlGvSe0RsWyWDZbDbJzfH8wn%2Fs4KU00bq7yJMoYItR83tOumfbf8lez608sjcwRaFTpVOpfeWjsPJ7zM%2BDzprPrdeqhf4ombttg7gBOpknmvE6VIpp4U9JTDcVjg%2BsMw6d7MwQY6pgGrLQqbrYSAq%2FUFRwQgXmh4aH1ImZweJUufOk8YrLv%2Bm%2F3XNoAy8781TfUGA%2FAeRp2bqZ058AnX6nKMovUJ6GxKRfI3MttDhyHjvs44JsUCmQ9xknanL%2BGLQMsnvDsF2V76PTkq0CFZC6tmeM3Jt%2Fcu2%2BezrJH2Cs0y2s74B3VjGJl%2F0wkEIv8oSpJgHFW5qjE8O4tTiejeBL4unnhnXVhWkkN4rYHP&X-Amz-Signature=5c31487aefac183a20dbd5de59f746ef4e46f3270cde07960423c17c168db1ee&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NKNNIY2%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDN%2BLeieKMMPo6r4pLtTbDyYpGiCCSBBh7OerGj4XV6pQIgD8qh5aEfwU2WYJJajO6zSXEa0eXE18GobdrlIsAoJ2Aq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDCagi70hYXhK1ISUOSrcAzRaohYai7GYBg742MPLnPxXSYjEVwMGH%2F5%2BQZTEt5fTKEhOxJsR%2FS8Ng3hvuN9z53i%2F1QlNlJl59KO08UbUpyb6r3eYKwfnUEbFB%2BfLJvERcAKVxTpZWcYBoAtA0haPaKlqXgAMIyBsHhlrTCeNyR38cDGYLHXp8ztL0ycfaPSdC3shIlDft2AAg3C0c2p929snVPscOnmNmx6a%2FDkqcEjC%2Bp7uaQ%2FMMOmmulI6BxfY%2BbkpzpIU172zSSpN70jFdYrpP6qF0mhRFnrALrZWSAM0mQjiG9a34MXEheBgg89uSXHr009yjc3dOw7aBis0hw3dH6tpV4mRfVEZuTmUi4zrpVVQ%2BC%2FuxAKr4bdxC8STzh%2B3SglM360TY8nt%2FNZE%2FLZPbj8CaQWqQ%2B7y%2BhANvYok786A15AjUeK4WWF2I9I76CQzE%2FEq4LyVXfCUnShPO5WPkww%2BfJy7JkvMZg3T%2FEx92xdRx7a5FKLSFbVD6dDD9oyrS%2FPI%2FaKVgQwgNSUnOnWqB45425Y8DEyOq229lDq0XJPNvjzNQs5Hxh6KzNQco4dLBFPKfCgn4mHp2oEqSqRou84fSKFqs3%2FDHUM2NORd0CENCrxXn%2BplvfLeyF%2Bc4pj4bFCNF0rGrdGTMLrfzMEGOqUBRZuQAINJsOFIYy1CGrF%2FpvuaABapj5N1eSFgb%2FtQEFsurdfizI2B8DYiAc8BvdaHB07LRgiMDDWwrtvl%2BlNcy1e4DuYWjkK%2Bc%2BdKGo4ypn8TPEIDChTvav3ofKsWmjy2DHXy0xeyLAXpRgsr8V%2BdhZgCMlZ6XVXa76HpiXy5exgZHYuTHU6nZn5UeOWi7txvvs%2Fyv4q%2B7wemyyrjYWSk0r8Hsy%2Fv&X-Amz-Signature=621fbe09c80e7e0b50aa186ea451db9532b1d0bfa5764d77221904425edc579e&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
