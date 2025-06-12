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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AN3YOIP%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T101003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDc53h36fh66AVfDLc6isqY7HP8zfflVy%2BVehiiQYNRfwIgc7i0ev7VVXv5eD4ReNkKl9VFbW%2BRSpBlP9Glmf3UB1wqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLILTGTT%2ByeGMaloRircA7Y3sU8XEDOJIc5aOHn0XW8qb1g%2FD5M7PBYFbUGzqX3hIFNPKZa1IxymhjfYY0sXAOuzDsce4azmbG03%2BMB56BPg2qllyz6pkmev2qpyilVW1YvfpyNXadEh4Jb%2FIwrlTAlyQCNwRJxVpdOro%2BANA3ssH0RaviF2E6fSQKhrIwrvNnjgjPAOjICFCh5kP3OVoDBWCjZrvo3z8NsPrWPvZ7vyPj4FJ5VB3JgrSxSP%2F88iMEIcu2992Qlv7V%2B0yJr4UkLAFqCYoHy6i2EScDYpSvBS%2B%2FUBHLyUncSw4DIQvSiyZEh7WmhahdRTMaROi2MUDDkcI14Q9WNzwxLYyq45ea6DIuxPs5EGGxb7ENO6h39c2ZMJwQwg2dxHbvuxmtZKA9jCR1KhM6MtOL3WKVgE6OY6Y3Cj25uPV0UAfdqqJkhRRZVh8KoZmIrJEHKZTyvOviRBn36eS74f3HOffDbcqTAfXs3fNdekkVDm5h1CB8WQtaraFiWvnPwN9H1uBqRycUZVLM1JeNH1x0KElx9bYdYGx53WrQooee3fkItPKrL2J7aYNjNof1Cq25jZvY0J%2Bsk7Q%2Fzh91miNbVQibUVsRWMW2J7wzpkMRHBXnV0d0s5Hi17ARwaNpdMIx6ZMPeIqsIGOqUBWDFH5NHdx3EmNN%2F3OpqU8FJXUcT%2Fw6LlqGf3%2Fd84%2B2Bil9wQexFUaFjXMbuBojnIv57L8945GdDn%2BslRLCXc8XnNNOVureuZOrcq2y6rwPpX3z61Fvnfy%2BGxghGFobsE9kD3a7cteYmE5OZabrpaxrIXAO%2BDGoaR4vTKUB6CbY3rjkgw%2FVvRDM%2ByPTjivPkmVYzaskiDSza8HEjtJI%2FQrEXDcjqJ&X-Amz-Signature=d8a51df8150178406b03c8c6a0fffa4c48013a0402250c538979486c89190a8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RLUEOQX%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDxskyIkes9rm7KjiCKMwzYdfa86byTXx2YrwIrvApFpgIgNZcZa2BF4fClKc1XjaVNlf5dr21s5sz7r%2BzGmW5w%2Fh0qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2F3DUsw8nlTcfcqaSrcA29Qz%2Bxd9cthwjz8uVw5QFiKU7yBY8kJPhxuyf8oX19Qf2xlW4UZTGGtnXERQkKux5DiQtS%2B%2BqPx07%2BA44KPewgoVWJQwK4ahZJ46R%2FRhkRsANpSBEGD4SdzMYgS5Xaw4K4rJ4K9hAhOxYwSZEWN%2BNxim%2BUnNAC%2FXbjb8ulgjK13FXXXIn%2F2LIRsd8j2a2SplLBrDZTeRRCpk2jCswkx4WKb%2BoJb9EwA4maQy2yHA7CkwRhgngIJ3d%2FwzYuazihKIZtTk43oCdgX4h37e7djqpI4EYxt9UPz4PFkGjFrPL44ZVJUW8Tp3Sq%2BvLqMeESr8MDcqKiesGr3LU70u1I082Z7Hi%2FMa2aT5P8aQ%2Bl67DWLDnVboSk4l04bXEwLwEf0yI2H%2BJapC18vMt6WJhKw0RkUBi8xJH6teQdE0%2FIh40uIh8UQbgD%2FaAWPE8G%2Fb1FonmJ0Pl1uMXiEppUMo2vSWp0gsB2u4b32CtQONoCtsiPoQ08wJrvXPGXSnxgnDvIe80H%2BYEea812umvvlIt3zFBJ7qnnbt2RN8%2FjTgbYU2TvAdY75LJ1MmkiDBlwR82xg3tsi0inAu6zt6OR%2B1ffw%2F3X11M9nbw26jps4j81UhXhQJuaVr%2FbUq25VfeERMMiIqsIGOqUBHRDVCuraWGJfeqWW%2BCApR%2BDpXoY8rwENXOp8fZctTJ82lMzMeKttZrlbrZ91lwuOVvJO%2F54C8y54TwqGWT0toVA2XDUlC%2B95W2jPI68wWtJxvc0XeSK1Etzi0qc6t6%2BhwRyu22Abr5hpSsBfeMw5hBz%2FmcQ2ZRFYFJgfhwAbbkDO%2FCI42v0nFM4COluh5JR1Ru8zybQtkgVNltHmoiuxZAmVYuuB&X-Amz-Signature=b7dd2f85ba84712f101509753b98a5e41dd4bd476082d73cd44356fed4d5ef7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
