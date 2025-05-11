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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TEGET5G%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQC9XDCAwWiHjp%2B8oooGifQvBldX0rH7ybRnsc%2BHUBOc%2FwIgZh6CHl35sxkzZtjCZwYl6kfeNl4s3b%2BgNpO9dtcaWLcqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmWA0DhlrtrQALabyrcAyrsSFeql5rBEpYucshuwXS7tWrW3lagr%2BspN7FFjNCVn%2FNNyjrPSvJkkTbkcCUr5m8ZS77G0LKhK5nofMVWWBUhpFJLcsmRF%2BRDfSL1a3EjzXqP3m4v2GxCpX%2B2cugShziLDDyD5YC%2BuYCzui738HaFmINKOd2bGx3gezbZ%2FW%2Fxs5%2BJ9rKAUAbs51sbdJI1ZK%2FQtdO%2FqicyFKSJ9zC7%2BCpIyDKtFEpK%2FRQnKJPzi%2Ff0Mz6MkghM%2FLr%2FVNiX7Vq1Gg%2FKAphxpEKrQJK3kPOErmlUy4LQpKVJNk6dtP60LePkAP7ZLVsqG46ZmlAJLMLGhGLCmE24%2FJDuyu21TfrteFoJLhHdk6eknnltjlbfZb7FXFFeMohumizZUEJAD48F1%2FlPqk%2BFn7Iy7j6WIY4vPjvWD%2F03AzAUv2iq16VduWtRo2cFpJFFtbPqBHWZ9a4aYxlLi6PjdF6HY6I5FoIjVqhojR8FTVdif9fdTFRZgW4HtMnVKi4WPWlx3xVxV7wGibJmw5kpEbOQOPjVn5I47SEXgPV9vDp96uDY0Xq48OUhxenDrCiuAJOlT8e3IMceXY4ZJNbkt1g6GyNBtP4XDRar4QeMeSf%2F1p8yfryw5x17gVvbKGX5PUXCZpTDMIOKgcEGOqUBOOsG%2Fx%2Baz2UC191ZioAxBRrZDjH3RifbmItyc3L911KUr1HQ8FSty1wo2vUpVupz6eO7xO1wXhC3WH7xyvnqHOB83MSKnYEOgTXdDj0fDRL4DP6xQC26KepiFR8NN0tgqXFC1UFtt0izkIk5f3MNPwQYT%2FlEzXUIvQMJ7KyTMNpdPCA0XQWNeZTaHLflMM3obV4RLXMFauQgDZ0amXc5AwYWit9Y&X-Amz-Signature=b7d13a17a47a9d97ff8d95dd69e3675206f647b4a4e309bff3ae0c977cded721&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMD2HZBM%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIHYxEFKgIvsBOqh8HoI5wd87qvKFr3D9eAqHikH5aUuWAiA8ofwj2Kp%2BG4%2FMMrhbretK20jh%2Fi9jLTv9JskMdFj6kiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfNCi7vwjEDpu%2FyDsKtwD91zUMjQrdziOtDHcErPZuLWLYPPuRmLc8B6uvi580auV1E2UpgA5KSWXH4LpZCcxLukcyaW0wiJuHOXQ6v07QG5LIyvNLN4MadiJp4YAv6CJUg1KyUni%2FKyMVhz3aoBA3C9sXq4Wmcq6f4nGTvhGnFh%2FUdfvSpZ3Y%2F6jE9Xpk6SoeFRGkH1b51uv39YCgi6mpiIF%2FgXelzgPrE6L8SfC0GyS0q12rv8T8yfnm682oylVBF8eEcY8MB5DytBHVL6yo7uEoMmua3UrDn9XSGOslYkX4hcmB0LjQGBmegQCNGX6TRT1cYQV7%2FIpMwHd5UNmLqILeUv%2F3byyI8Isp7fdX0CLcPJaaEJIiaY%2FHY7lumlAMu%2Fh%2FBGVxVBHAZtP5bYaCoH0%2BBfDo8xmphl1TVAqrbVcBcST6skJJH0tATLPmL6vnf6e4Ry5rS96OKJvGAnncz2cd7vx2fx%2BqCmnRhWJIYELTFGsbP8ojBoIszK6h71V%2BxwU9PwTyJB7Fdd7LE5rTjarHJi8aHNXWtGxIXvyj9n7h%2BIp27sWDlvAoRRM94WPTRTMGDpeBjpZTrhJblpRYl91e0BY%2BN8Wd8JofCzWPgnsegXJYM2fKqNZ7EEiKMdvHgWmE8aT%2FV8zF%2BMwteCAwQY6pgEbjro2EtmkCQDGgN8mbKIg7aH0XX2EWLD5B81Ykpbtka1SpSjCzRA5mglJ3B4lZ0oiFWfM3LQ2HGV5b%2BeMjlw0aAauh3uPBHN9HQbqmO4MKGs%2Bb8MZTiiioeF9hRdy%2FHFMiRHEm%2BbmikXk73ZRCJufOUhEmLcKR39Hxxuwy5faQdGrpw7cUadtC4z2zmHmhx9g3AqG%2BUdioyowe9SzroWXMZl8d3XT&X-Amz-Signature=9a98c8bd96f33029fd0beeef78d6ef1fa570691578556a873e75b3c12f94a6b3&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
