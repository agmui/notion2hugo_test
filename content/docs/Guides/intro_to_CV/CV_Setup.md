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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FCXL6OC%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy0%2BfxernuqyLgChV3Tng%2FyKjE3JPvMBgbiPBoUYYLsgIhAMB8jgg2yvxWoEDyMgJxigqCw5hk%2FR%2FAWhbp8FKTfTHWKv8DCCEQABoMNjM3NDIzMTgzODA1IgxvmBgizVDf%2FazyGUoq3ANxjFsIOSIOoommLMdi0ExQ7fMoDetlWNpxMYRW13fSQbTqRsJUeozKBSch4NFgmQ0sn0NftR6Ij%2FLYxCvvklOkcVORTCHxi7CWXbibGsbmA6o46d%2Ftyhq01UTya2weEpeGL6iUQlEGF8FVkKbhotF2Vil6hBjzjNv6biT32pG6YmsQw5ouPyWLf%2FuiNNJw11vSFT%2Fbkxxd4plG6OozhSyNqqlbpWON%2FwVQV7ygbZ23oB3HiqHcTxkRB%2F3vOfXQ27EjYxnOnOnsoDqE2WxwozO094XgkQtek03rZbQNKEGl6ipyafyjMws4yNy1%2FGBWRtt1gsOWjClP5mrgcUUUrZeSHmd41GuM6uGSDP%2BbP9ANCL%2F%2BXYAa%2FbmMQ7wKZUxuiaiDWROCdotFy9lKPxB8e6xFSLwbDMjEqcCy9TPJnUvF5xayeE90ujcq%2FP1CZyfG6mf4i0oeqp5uPY%2Bz4WfyW5BHUL9htCfcZ8ryPh%2FWv9Nlyxw5l28mossD9cD3u%2B7Xaiu1sfCuvTlsWERrkU9TxLhUF2tyqI%2BLwI6JPOj9Ck6csPYVb31L2%2Fdc6nCFkyaKk1Sp9ORMuvmLeOuv6GAOZ%2FIi3yCUpE9OvEZo0W9pc%2BZsLc8JvonF%2FtnadHdoWDCmjo2%2FBjqkAaftFmLD%2BC6XUuD%2FLpnGkmiu8bv8kzQTx6j48vNy88vOZWV4esxlbnjpCsRuJUrwSE1gBmdaS%2BMT81XarrTEFOGn05r5YCAuez1O4Tfi9INCGNTti7ck54fDZfLrj%2BAECsxPbIAqtjxC8CD%2BMWzBO2AyS7PLesi1QzHR8gG7emU47ee%2BWR6ADhRBkAjrdw04ByhwCDgUeK%2Bq73AEw2M5Jm05P%2Bnq&X-Amz-Signature=c192dec6db44d5899a1995ca8356edf1b895500550d153df32ebb891e21d3e00&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QANVAEYF%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwyDeZqn0JiGHvGMgcjTI8SnHRVuyLUF%2FOQSQZ%2BZDRWwIgJdf27MDR%2FOTOOb8pBmrf4oGyqgvVd5houTEl4DQ8Bmgq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDMo2lkjwyYypXX9j8ircA%2BT1ZW8LGa7mv4267okWmysE5%2Fl1vKBusXtV93kWA5PX%2B%2FEIN5eXYwJ0frWjFZ39XzWjGsNLi%2Frf0tnd5R%2Bt0DrRzuSyM7xW6HJ25pBKmQUw818nPVYfQUQ%2BkE%2FzlnHeKp42ycglT8msfOdG7QRyRycCnuwoOplDhQHhy3gf97gzI6l2McR2P%2FD4unFCXjax3rLbeCU4LUqRwPC4EFxCbxB0RfDlTWLk1MPSlK4PhbS7PiZ0qaO8iTIpsE53cr1NGBgQXfbejY1XkjnJZTuv6xautWUPyW9a1Gihefs%2BRNS1lztghi1j0oRLcbKh%2FsIBU4hXS%2BuP6CvJ%2BKQYQIDnxPi93CDaBM19uE71oVErfRshNmPh2%2BThaIbG5jhptUAhfn0e5FNR4NJyPWY77TutbJNDaKpUKw4j%2B%2F9MGyI38l3FW8uTLDrPmBMy3WRnYxltq0AH4YMf3cZIShecpcM0%2BZr8nJMGJ9jJfWnB6EGd%2Blx6p1OaHl55bSYxVTnbhEjj3V%2BaEwzYneTvv90OetCsfwjiI%2B2FMnaUeoykHmGBhH7aNhsbvQ5FqsMWZq69ZRygrE4FhDevGIB%2FLetr6V2nPD4lHgagAAjHdovA36uw1BLeU78vSr0FGELpyTwiMJaOjb8GOqUB3sSodlZJN8vf7OcuytunJY0HrMvOlBGybZjRB%2FrtM2grNFdjjczi1HxjdAPzJfaaTQMfvuWMrRV4HaSiWGGRQ5S80hhgD024FDoV7OYaFRv6jHIhb8tCiyBwTP%2B6h1uUMg6WkmSpMeH3O7BFGXwETfM0ujLxmMB08OIXYICmzBmvja5H1QOI7QnjSmgtzZjRs4JzICGIpFXC8t3sfM354WQc33CD&X-Amz-Signature=4e3484b24b6a5bcb9b4f83cc50ec8f9cb47fecb959e317252fbb4b02217a0272&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
