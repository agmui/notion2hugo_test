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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEACEC6E%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T150737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIFmsk0%2BO%2FS%2BlwjHi4B%2BpUpyQTN2n5f6lqOyR5%2F%2BKqH8YAiEA7Nt7eAJ0RxVYIMgKekiSmoB2awBNi3f9ywV0bRcoeLYq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDBytq7F6Tq4JsXa4uSrcA%2FvML4f%2BZRCLWbl1iIw5dRc5G2wEFGMBS8F36kkG6xeP4dAAmUERkwDenOIESt5m0YdMIsf%2Bkayw6uDkFCQWRlqlZmR%2Bhu5bvqwYdkJXKjiXxx%2B%2BDEHY0b2Fb3AeNYyE8myZUBWm8uqd8tHPv6hJGjtu0MsL4CmcqFnGqCLMCYRUlBtPfHThZCQWh4S2iAImNDYryk6Bs%2BvS08yXkwgVYJ7F9fUBzEMQISV%2BFgejWX3F6KMdPHlYND8lQgv4xbx91MWfdzFDb4sTrwmIuukieDxcmrR%2BiVRiwmHpeFyGIIyZTV0mIi4wdHmMexlkujEZthbYB0u0TsmG1XvQwA10xFB%2F8gua5hzICsLEqMcrBxx7oz3c2Zqoorx1uEhsfy1KKxFmE%2BWLAQRVOfF%2F9yeCsO0Yp%2BxMPJirNu2NxoBaLPHlArQov8K8yFOYzOKLq6uMZGA4yI8IC7WaFVUQSeNF8jWq4DXAs8JGBQn6q1WfeiZFihivgc4Qg7x3dptNxqfUOBtoZnWcl8YDTnZDo2I0hjm%2B%2BCJ0O5iH1S%2BG8kpg2z6d5Z7hdjn655DPEk4JU57dQ4GEiU4U8j%2BIyaTpoRvNBXeamqK3i25nmuTo%2BFzD1yFpWJ7XILdSzJKjs%2BzhMOOP3cAGOqUBiyIi5nI1z%2FdwAsmiFkfxZKYdVOenL1aY5VQrd7WmM5HOZ9Dw4i%2BLgJsUKZdZDb8KhZfloNyoUjLA6dljbBdN%2BOA7Wz8%2FfVjTfFjTtF4RBHeE4vWl9SAr%2FXaq3lco7T8AD27yWhAdkmSK58liercn%2FEqs2vOJhMImBd9vfiN3CvAC0Q1iSQzLmBd%2Fga8gDUqHa%2FmKxvP49SOKD9ljmq7AWvqrPyYm&X-Amz-Signature=299e66ccef1f482d9a633be2073df78d9e1d881755d7eb7323a0cda82c5ab109&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VPCEDDD%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCdRp8wu9hNfR%2BonI8zl83%2F8vbyr4GFW5K%2FfJRxN8ZOEgIgRbrvjmdzwj7wHm7KqCSJYRSpbH5DdGOawz1RPnZQMwMq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDEVaUn38fAMvXsMGdircA5J6hWd9vsRWlTbHtxuKpCWrQAZSmJ48DKWGreMyzcrlrfJbSwXWq3pmSYR0IWM8dy4aK7dP6nDhV9aZEEkJKlYwtYGk6SN6r4SvLOxLU5hegd2GJeWUCQHBlykiZsm4MQYWVL88DfCyY5jVIK6%2BLeewkuCKDHKy4Ks2Bj5dcjcNzilJOka3yOXph%2BlzVq9mZ5D7S74498HyxK3oLAQOXXPCwf5nBWTQeMBp%2BWBvPkX1ERLwzcowR8MNU8ZE7vD1vqlg5nYzfFw%2FztzkmP6VA%2Fl3IpUMyM794aFqYvTNRlTgjF7z3au870xPxjXcJc2ezLk8NcR36kv7SPQEsIaPHEk0deBFfnDlr%2BG96Upot3icM8tCo6pu%2FHr8%2BSJG%2F5YeJp9EOUFrEbW%2Fatc4Y2nTB%2B85%2FUILQxcrbpREog1sUu%2BRegSSozAZXpKKmV9HDk%2F3l769rK0mx5PKdSd0WkCShjZDiVqntqQ2to1tWK9PFYUsGsp2ZNdYeOcZLY24qbkhiZ7ihnnRoBR4iBgMQ%2BJ2on7Iq87efd0H%2BTz6VGnnVN1E1Grb3le3%2FlH67dZV7q21wtx4iH6Khub9h%2Fc0Tt8pXkL0hXc77q2wULCji%2FwQiepngb0dVsGmSU49ZZjBMPuG3cAGOqUBeAsJN4bl4gTCMM46N26JRNTkqRvhMEzTTlK8D%2Bu9nx7rbAB1qsUR5f7YerEb8%2Bfis8ubGMzRW0rjw8mwctxS%2BlYD7byRemUyKJ59gfDiZ4spM1sILx0MN8jm%2Fagz99AsZW825e7g9HSfkVtqfTUCZZmp35bpVxnn6dJr1FVrAy0bYiM%2BFe%2F%2FF%2FoRduiKAmE8%2FFF3zb9yJF%2Fz1gLJuK1CP%2Frme9rg&X-Amz-Signature=da1005b54d07f80c0b98d144435f2b62f0d5c60637eceec357b9e3bc58e207ce&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
