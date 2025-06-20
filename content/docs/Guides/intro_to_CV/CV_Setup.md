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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KYT7P3J%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEA0k2Uj7fJYyYuRTBjRyVqznXu75rNbPjAKOMoPLhaqAiAfu9kKdV%2F0ehG6OJW6fs7%2BibdjvAwGcMih%2BG20u0noBSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0OZwe4QTBZ2%2BF%2FVDKtwDKdxn0AUAh%2FCID%2FkseEGb1KRLKZ8KMuaJGuD24cEVZofsbTHAVOwU%2FBvUtByeOv3ZWNv24CZtMMwUkjw19sFp8Vm%2BXahaQsYSMaEt%2FCFKYXGIUQChW77wjv%2FJXFb4I24qweR7IELVintPI1YdcDNjxvcLhtPVAg4DVXJsnbWXkklXJySbxCOOjnRujMBoHbmg522CGR2vMRmiEHY4bC48e%2FSg%2Bg1FPqzlvyyMqeCekVHEVPGCl6FAdSG56XRILL4OkPl8zRcFAK6pkJl82Y5AlLysG2218uhtXhOEl0ulw%2BAmVlQAth4zcMWS2C%2FCE0bcL6yCOXyPbx8cXNAoZRvx3srY0gjyP1jZ%2BKA802EpNTGkbe7S9ICewALORA%2Ft6a9UQll%2FUvwKB2wI2YBtsjIJy8jLc%2BG9Li4WSKMaiyDR2lkwavJiKyAOe7pvWo6mbPoPhZbkgBAKbjBB1UN4h5q%2BZDcoYfzebsU4yL2xnlFAX%2FpOdscv0qJ%2FLKxiuu3UZgipi%2FlkG7kfIBOJGRFqLngxNfBKh3oZlpDsh%2FPoTOOcOh4BmO7OgtVnl2yLOJ5NapdMLtvqg3l8tznYcDVcrevmI6NIktXLvVNbBuDeYpzbJ3B8bXVdPxZC%2FIM3o7kw6qTVwgY6pgF66vBLuIuN%2FaoI7AGkNoqjM1cJ9ITIeHienzLpRLvhf9IFbXbVZlkyV%2BVGS1BWlxbpHhEDEBBJZHNVVuIUD4aU%2BeHlDlbqTZV5ylHTm7RRhNqSV08I3BjUUhrZ0Vlvbv2LfqGkLcU7wTzDYU0HBb97zR6ruK2XbfhnOWnxxHDZfPovSTDVj57UEHGf%2Fa32QT5ckxCQ2mk7QCSRLGW1eIv%2FcofZcb3%2F&X-Amz-Signature=1bebdb3291429c2c9daefd979c70148d47c005f1dcb15857f89fd691cec2ce6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LYPGJ2R%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDffKSPnMkHJz43rhbGB0xmUUoCbOyaxEFCkTk1cY2oRQIgLrL50zCcXL41OOBk4XTyDyYJwU2%2BvU4dhd8NL%2BLR9rQqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEGn6jOT4Fux70vprCrcA11jY0Y5U8l55FMUK%2BMkqIYiDvrjIVQKVjQTPKOk%2B2R7avt9y2TBP822ZKZanI1lBPQKbTGcPi2fgjoSSCmfvPYZOynurQQgthL7y8AsW3MJPj0WL7coUCafbQqAOxH0tZFDvSYwV%2Bv7UuUHLPZtZ7CPoJTK%2Bl%2FYlEXa3ud3TNYUaMIlsO3oE8KWSgzjhquxwC8hxAP0bEw2MVe0GSYQwJJ6muFLyyM1JcqfkrEkpH4Is1obvkimU%2FVi7GvKZHqpymFhk7i46QOxi2Q%2F1L5izclMMzsUsiQWW9u4EmNF8NWbCqvLMEHQlpLHKafmg3v7zQe0ntg2pVnNsIFPkJ2eljjgD%2B5nAloX%2B7Ng%2BbpI838nSJqzdFXzylU7M8tt4RRLQiglGEIpZHhoyhIILq9hE4TnSO%2Fy%2BikiDWesQ4yI5uERW%2BLwJLBxCyzz7%2FlPfgJLoY1pkv6vo%2BSrQJF0hu36mz6nYkimDN5YI5By1%2FnE1j3bJWuDBeFgJGXr0tvn17GJeFamAkMpjrN%2Bo3f2ygAqC9hewfUelKRqYK2L2RvJqyfFW7V%2BAeTE4AiNwIa1OxOkNzt61aHY%2FWsMisqn%2B8SaxDMs%2FfTdKklhtCwoXXACs62EBwFW8L4w1IzGnACMMPWj1cIGOqUBZJ%2BShpYznvjDJD7%2BsYVAOzP0br3XT7XDRavUAI%2BlqemXMtXAZ%2BMSbyHsQfNPcWyQkbePoPm37ntJu17ctL6YkgqKvw8BWsYfW40mrGnS9aJy6WLMHKlaEhbt1kfguoTDRz1btKaVnIarE0Qi%2Fj8jriF7ofvnnd3e6Yqw6OrqmLZBQvGJhUYQuEzPwM8FZZtn3Ui4itLslu%2BjooQWKx02be1QNOOA&X-Amz-Signature=e602eebd04dd16e8450318d3512e67e4675a77eb52d65d6d5e93b2146550cb31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
