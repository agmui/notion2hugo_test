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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SUJSV4C%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCNggpB2xYl3rGeEaj41NQNQkucTfFg0yV9G6w8riKMmgIgNoVlDPTr1cI33TDfp%2BNnNTYQ8ujxGmfP2aXUU93eJyEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMt0T6kaRxgHxbhdyCrcA5m%2BsOSjuHrj2y6YjfWOIMkQSJoPsWt6sfSobYoUl4VOWISKrSu52yOCErF6HzRr7%2BEVHHUsPs7iPbsERhEpU8BolNfmGtjf9ZORZmE%2BgWkDOW0XGryy%2FMD0HMAMO1JMF2dj9eUNCBxORarfZ8kUQaLDhOdUl%2FM6bNnVUjQr7KjdqtcJEKDw7CxpoZS2jme6YnTA5jfURzh5Gg9xSnJ0VGShf8oMBgo81OaCyz4vo2e%2FZEDM4TgeoHtO%2BipVxLUY96akR9xjlPsK5k7r9vSmpmuH9S%2FZNI4l%2Bw6cJFV9XMKoRPrJp8KN%2BsEb4UL1lfhdeO5eaYzM%2FtfpwKHmXI1LUPjlaY%2FWgiLW%2BZzYA5yogZda0SsN9oFrYm17w6PDLUmcBMmr0twHBiSug1g6kKPXBVEIq8v5Y2IJKJNcUGJP%2BfomuEpGeTJNreQQY6%2BwUpWGchIa8JBuIFizLl3zBExNCO5QNFFBMoM227Wr7SeYbsCKTvRZDpH6k%2Bc%2FA8zwHGvqrYn6cLsDQ%2BiAXS%2FLY55IV6o5o6ROOjEVHUwmT0C0BKtojWFWD6FPKPWuQ1%2FWv27VFc0PHX4%2BSDozr3ZlMQS1q9KjHt1cXlnZrVK7NgOW%2FhFFcaOxesz2UsoTw%2BchMOTy%2Fr4GOqUBY8fn0ocWyL9W%2FehREpyy3pIxG9QxYEEfDtYQ0rzzblvUVAftaNTTYOWbKG9xYy8uUo8utUk%2BW%2FfjmsoGIsgvqPQ%2F4zYWdLAMbpZ3ek%2FY3ejzQol8b79H9nkQVal1qO23%2B3VBZ8qf1yzTBgilrL72xc2JF1vViBxFdBI89i3ma01TAAmHuJC6fdMyh%2BN7mmjLuRTVe6IDpF9nfFT5fj3UUg191bGH&X-Amz-Signature=15682fdf8ce7475e45c7bc7a5e36818dbc7c721f3e6e13764812963be852c6d8&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PQCMXLK%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQC5dTK6r2qoSoRy%2FTPfKZGO5OHIT%2Fai2JAVPdHGtKQa%2BAIhAIeDSKxePeAzMscgRQLArCyULS%2FrjcB0P0COgdV9R7s%2FKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWxerwd829NgeL3zoq3AM1vxblRF6tPFVWqw%2BLCQYppz%2BgpZubbBOfvB1R9TyOIW0jD3jYuZDMj4XcSWo64UvLfFnLxUlRTaQyoK2eMyJgFuajOH7riIHZacwcUD7k51JW1UFbTKxWMXZn2AwfnVk67ZAAsNvOG%2FEyCMqfQfSUns9mT6%2FQguIjCPBfOZEbsMmrrastvkp65zwdKHc0OZpllSHu2teJNmN7NXVtJEVa8AcDsGyDfnk9k6DpEsL%2FYtzR6AhPeShK6yFNCHJxYtu%2BL%2BPH8wKZic7V8nopLNICwjcBDpc0TlvK%2BvQUIP%2BN5uXLMMBC4MfMNXoQ63nPmYzc6LsimT03%2BaHn3eN%2FKhNniekO%2B5U3S9PsRDWKiW0%2Ff5HBXZgkm0LU%2BkMa%2B98I56LjL8ObKoDbntDotIgfqc9r1SRTFY38XWxRMAeFzYrOB%2Fek%2Fl9jJ2DvT4C3%2BbllxZ4zkUdosAE1biCZfGgiKyzlDdRoq0fPVmVfaPwrXRfjSdz49%2BEiQqL8kB1rUKQWc8%2BpYZFT9YhFpIgXA8vJJ5xbwG%2BrCNxSRJPLzjA%2BgcdOlagTk0i%2FMm8V2jhHrvyFvi19Rx9BqAPSjmX9kFnqxtTsD%2BEx8ojoK0phkWfQADMSGfA1eiUpKxpe1%2BuPKjD98v6%2BBjqkAYhEUtISTtOJK29wZ8CWuKd3P2RbuahRe6yvMUdUm%2B5NFfk2NjMp%2FWYgLLvOINM%2BowiyRGiusYG6wRnDOvOeQ94CAz%2FHw0rSS5b11tvMFuwXtnhZOqVMwDjlsREYX61cbNrhfeAEbalq4otKJGrNq%2F52zmGcGz9sbOZ%2BtGB96tV9gVRdgRsaMMyDUzXStNyX83oeJfyiOefJqUwCvq7jXBUzJZ3b&X-Amz-Signature=8df245f9a14481806177349d2f46729ff87893cf0a97bb67ddf4393544d7350d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
