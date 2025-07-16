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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDAUUXSY%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCgjRasEZMtXMxbNbt75SxRNzdLv2sA5IBfvaYXsmVluwIgPNDe0scs7ezicyLTZvk1JKuocoguXu2IFeadHBIePa4q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDPjXiGExFLlihaq2ZSrcA47h8x3W5TERifN3wtwDZSkA%2FF2UpB1KWF8xjo92tuJIVFS8gLPFCjXdCF49fsynQpAHFJhg7G9Ej1msr22Bc%2F5SaAKCI%2B2R%2BCxYQYe4OCbV%2FnMDD9CRN8wkuWp3d4ZSMw9e8CbUgDmXobhJH3aTOd42xwMw2NnUpu9nPmo7utmP2T8g4AXepdnzQNfOu4QQsJRkHOyHfXUi9KeGkUDo95HJ9qTXfWlRwz27qCTpCzNTuV4cLPQfunTYQrkgQJEfk6lTq7Bnot6q4raq02X4HvyilBELlBh1UZvL43%2BzxBQhCE9y3Cv0ShxgITUYwiJXX1vRC%2FduMzEKE3pVntA64KkDvu%2B4g5fANA%2Bb%2BhckjvOJuUxNcw9JhDu8JlK%2FCgz7nWA2YB9S7%2BY0NAdZsFz%2Fq9CmDS6ss%2B8xKpwDesYUX8e0nI53ms9QofwysIXyZmgYgFCB0gIDGBhComsQbY2HQpBHTmYK3PZiBUwsKDx0jfL8aZ5%2F2MrsTeWTB%2FTib4X8%2FrAFT%2Btvkbe8sWZbQ6SPh0IwlKYHiWtVpa3NjvFWghhvoGTnovWNE%2BLOKKiOegh8Fe%2FXwWTkXHv%2BoPvxO3JestJvT0%2FGxWB5%2B1piGXcLuN2ytKsN2nA17HJFIi2fMIWT3sMGOqUBWhW%2FKePsFsu5xBq3fYN7ozpbBL51Be0Hx6OKFH6CccqdBI%2B8DncFGNXiQurO9H9nvGzBbLmydaJKs%2F5Ty4FsKtlHi9kOAPf1%2BDEb3fru5rUt0Tc37ohYHF9BQ9x6s3Yx3VLIyBAg2aSxvQf6tBRzylhK0uHCUrDA1oPkxuzZoXop3sT%2F6yb9iSU7mn1R7WnjGsUJS44Hks6ZBZrZuKve9FqRADLs&X-Amz-Signature=db434c442d491a2ea11644ce4203aaee359477fb023b7a4a066ea5a495ce3ab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSYWANJL%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQD6XWe6vV3giI4JcnTiLTe103jcXAPgT9lPoiCF3PnVfgIgRF8d7LXlnRtP6y6sh6VoPwiaUCmCaaWHni6JoqN9164q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDC8PSwlGPMyyMt%2FBeSrcA7uffSUAbQSsfkxXFM%2Fi4YP3HRm8QoOfocLA7Y8bvHiuXZd9KW6pPewrDQsdLpxAZaHxLQEkef0CF6aqofVs5mMB3EypjjRnz7vIHafhvMIQPhp5xBLOwfgGJR07Oe5kd3LrofUrmvqnM4tKVa3U7nFZRdY97kRto1cka2MjwNRv%2F6ne4p9yyai2X%2BxO9iYPeY5gOjOA0SLwYK19ym1ij0UzOY3%2BhRl34dCpVW%2BrTWDaesuYmhnUzz%2BfRjlei2h%2FYqLSP6HbITIEOiHEtgCG6HwE8V3%2FmIrFKyjgbhlGCdzkXh187yAcZdQOCT8UxYHh28U3%2BChokBWi8UH%2FHKmPO5fFBDVaplWAiA9DDK0ZvmilIr3UICxYHhmL0RxkZMvwB1iqeOCV%2BmOYXb%2FOASthtcUYOKsdxzNL9pFrkdH8DF7mFQ4iwjjF2qJgdc3N%2FyYFyf9EgJWY29Sq3T%2B5xm0DsaKlZAqyNn0bpdw5x2NbbSxGkBwojVDpHVlAIviJy7oNYqQXvFfj27otj12sMc6icEKMsnSxySDtuz2RX65uEovOYHARa4BpL62HUEiMOddjhoo3NlUnN3h7P8FsqwOMAW91KxP3ejh%2FDOih9jBYwb4rDMgi4RPTpVv6mDALMPGS3sMGOqUBHvUzf8mqfZnWI4QkW%2BmJbsrWsrwFr9SfoU46HLpvik0nkqYWUqMFU2IsLyI%2FOEmeZ5UH58nU7Bvcz2ykF3ctuUV%2BLIYp7LxSaYndr6CnKadUtwC1rsa%2FEmNvxWXA3nE4XgNcqKGCY8HWqWjlWRQ7zCJKsBfxScPrbopXKbRCmUoKrvBkSuZJ5khdp4YbHMSsdx9gwcdVa9E6KwrP3zJKgt1PShxZ&X-Amz-Signature=67497e378b0227c1b57e7bb89e212a4743a2ae0d0b9b26faf4e0398ba799dbd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
