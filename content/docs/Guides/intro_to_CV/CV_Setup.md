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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBXNZRC6%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T181117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCV%2FExOd5TN0BOpNZzxzBDxMb3IJ9K%2B%2BaJ1fXUOLnxDTwIgRkGYHNE8t9gQIIVcM2AJDNWopx01jH%2F68Euo1QTmDrMq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDM8fSrBkt%2BL%2B2A69rircA2hOQ45%2BnT8UOPa0qD5VJiFdQb8cd8eLrFUw5GwzO9E3TOEwtotp%2FfSX%2FU4oM3%2F7aqmIQIVhEeVqhovkdbnTbtFi%2BWwFPSpdxiyR6GxzyYpTKV0ZeeVNHJQrJqb%2FJjM8ES0on8e%2BselV%2FxthuEKGdFjGfTQ0jMYiOshllIndbF7cNk%2FxFOlHsZJUwobyFUAG4vgU5bemtcGjZZh5EV5BR0MshQzWsrnvcWVW4RXElORuTFiBQsxe6I24B50JDjiXvSs%2FQotCwraHwinrDAnfNKN9YmX5%2BNU6qL60pfzVb2pQbnjOxBbaU3iErpBvNmt%2FeGBlzvbDmL%2F4bpK6DqsRWEjzoWU%2BvF1Bp5RmBkLFOLhmnEneu1WbvAFR4KGezWuL61II%2BTOQWJEUwCCYKKRDyf4NNKnCnaQaPD7eNp5IUPq4Sj7Xs49mHEROtSE7Dd4Byr9abj%2F4ZiFpyI1ELTwFxyTm0N4abTgFDoFfmrq%2BIAUbwRmpLdKg9BTTtqaYeWif7MHtkCi0UUEkNM3ZJ87D4%2FIgOCgFBXthH4T28GTbD1Lt5P5O4JUKKgQhCDrJnXJ6jLaZXSwljWYb2Eru80wmL8aFh8ug3SBxJa79ZyWxFSA%2BpPq998B6HCoaAOIAMNzSgr4GOqUBVrUwd54kaOhrNva6ZG%2FfPNI1og98a6DaYuA4mS%2B1M569mlLw9K60S5wNTsKnyVQtse%2F7TlF2FNuIZkKdqvgW1zuK86OJ%2Fb7fTQrTrzMUQIw3zXFucYrtBj6yyPtg3pf6jKRpVZFoD1YlKBu7Ia46P%2BYT4xCkslit1L08A%2F9hFWptn5vYSJbz%2F1CYrqTzFZ8frGFMgSRW8iLbK8uH4u899z9Ojkzy&X-Amz-Signature=177bd282fb44722ff482e1d800cc409a7aaa386afad28aeae79b8f9a4f4d2ff7&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQGBSLAE%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDH2jZwNWhauGPf%2F7r56QWG2UIDVY5lYTJ89xLTUhEzPgIgOd7ZX8mNkfhO%2BTgSTohmmsHHs6SOwGAbSEBy49E9suUq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDOrUWaHROwRvoapNhyrcA8l4iWafDT4X%2BLl1vP%2FNoYCphYXq4UP9%2F5dJMSYMYBXgV4yfyJ4KVEtNxJvFdTv0cTr%2BRSwxWsqrbqVGGndmE5MHUBQ7IRUJ7c%2FiaDJ6Xj9cComqJ57elrp2cESERfFid4fjoOtUKtO%2F%2B%2F281tHgcdaIptAU9KLlJ0sTSlS6Rwpe%2B6dOFn8BRThZGYqbU1p73TvU7YrpuSxClZJnZcif0GZhF9RKXi6IreqVx0GBEmePCQ00HQuU%2B3nW3Cu%2F%2B4FXycUAGlfj2xOWawX%2Ftk8R3RoQ45qTzuBvsQz0rlgTwzmz98h9t5iq7Tp1vaSLCDPL9OfPHvyVXRYSzAvQyFK39qIHlPAmh1PmynGr6iK08I9SfiBfPredVig6T9C%2B1lzEUXIGS5EbK2Wvrmy97jydyKnYlp66XgjcYxwSdIMcRgk3VIQ9aAvE61CtZjWMDDsbisSVnebuLZCiIyj7fX04JOsUMDf8KwpekZqupYGFeP87HqjArWV5wybrqwmNdTKzGKQvpcTUWLP0gqTyvyKkabGkypug1hOlLTT%2Fw%2BrymX%2FskNpWrgNDNAK9LlZLfSzCsgu0HxlhEY2t1TRA7%2FzYTkQ1SJbwPi1BSvz7wAaL7QzkZj3hdNDOXSpElKIMMMDSgr4GOqUBD2JLGRkGcVK6gX6qotMVh%2BeX5GGraaZ3%2FKdLvVK3mgdcEcLAbjqCwXM4UMPVA0jm0VrcVH2LsZpSMyh2wo8Ao8tWlkPc%2BHmhQr%2F0DdVRZnrEaZJA2AjdfKq1pbP%2F0FqCOz6oMM39sXQvXl5dprUyOInjZqpLPr1aJRrYzkKkjg0eEZ%2F2We9DwyfUdy%2F6SiL19t7JTITXHFgc5cX3pwif66NguLgg&X-Amz-Signature=cecea0a2c51b7b932495fbd43f2b6fd617718803e2a46912f3d20b31f9262afb&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
