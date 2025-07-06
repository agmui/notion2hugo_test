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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5J5WUH3%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIB%2FaLPs7NGkvfEUr5Ys3Mht9pC7keWioPAQK1%2Bor7BMUAiEAhUREw%2BzcIDPIGoqgh%2FvD%2Fg1pXs2IPB4v%2B6%2Bf2bDsMr0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBRIO7MGjM%2BXheGakCrcA3jn%2Bk07aabLgpILXzrD%2FoFme2zc4nafltJ88BINAOLZshXKvQJeJummCz1vP3g%2Fg3yO2i5mAwMhWH%2BiPFAXNltyF5w6GWGWnHHTZOwpe9jwS9XhTy8ZnZRn9rm1JQKxxizV9BlwtholPCMdTJFe%2FPJavMed3LALNe1%2BHa8iLrmRR2jxvoifVUPaDZVLbO2ZjnhVAw9oL5d9oAF0lkP5T93Szb1qUmkg9HwqUuiARf7iuVJI0MblXiWWBoQOr2BBgkMJhPB0zLvnzMlNPi%2BYc8XIlBxaxM4Pa4Im2KUvAnw8qpGF60Cy89uW%2FG5waBR0nGsaLgK8tpdpsPVLVF0AIFft%2FNJU87nTLMKOyygzWIBDnXFr0x3p1eN68BjSy1ZLfUTKtkG3C82WVYCzPI%2Bm3MTS6xBTZMujcKiEP5bKXs6SUJkKL2mCAxRaH3BN7wxykfnIaspWSrQs0Yj7ystot5Ot05IAlfsb4glaSVcsbq6zyy7q4j%2FUFML0dx6lW7Ef4rtCCayAFSOgu1UE1oihg9%2BtNZuQ15K0FZrDC7qEhnDd4bDj3QbSm9yRrAPD3nyx9eoMU6NdGOKNLLG5m9rxvuchMUBKMq82kvp3f4di8%2FI%2BTiP0mmiLYOjg3JVXMNrzqsMGOqUBZw00bPJeHAfTXgRT%2FylkgUfDZXr07ahiBt0oBRhgUXnga1wlQFE3aK7bcazV%2BMbcqmrqrEhde3lLS3kcz68bPkBEfL5NYNRZsoUWRS2D8W%2BWn4NoFAMCl3Ds66q1Snq311%2BaK%2Bh63QKRZIcvavdI0x5UuRehe%2B4jurWQ4a3MVErAimgNMalS10R8DOYkT06AlfiEIoXOFbPTRBDsKJZluHF1GxfF&X-Amz-Signature=9c327c99bcf8fcbf13b44c8833d44dbf119f3d5ca59842449147ef87374876ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LOQJX4E%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCiQcWIR05Xx6lu7oQyNXZVNUnStrVwccHUti%2FIPeBLCgIgChh7f8W8bMWpQ7ZICkPaqSMdz4arMPo4Nc9flqBytf0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDN96vHU60rdqyvbqbSrcA2NWrFLN0f%2Fdf1ld03gnQdzXUoAnSV9gPzhMhhA8K2VupgnFA%2F%2B7q9uvhVv0K1%2F3wxWB5QUVy9bK8wW77JNMPhmcAb89e31kT0LShnS%2FY0IYrFgCpTjIBKmNKn0JXkN%2Fyf7QZsvtwEZa9iynMxtzfuTufJIpO%2FLUPFAxH9bsAda84qx67yyTzkybcQo8KgmyHdsmyBRiWVIT01NtS8emOSNsgzm4GcwO8%2BXLnExSZWlzQuulXTVFAZ1t1EnQ5JzcZ37iTX8tI7APvXWqkbxsE5DsrrSA24ci1QxFAyKzvBNNFdMo5BI%2Bih9EKwT%2Fub%2FFiQuujeLbRYovhlx8kTp%2BYI1JNBTSlApq7gdGStlVfX07OjXuR0vbsoiPkN9DJnUZvUgIGHBNZ79Fux46Uq0eOw8%2FO%2FsPofXygfcW2OMnIj0yrA8xgYYJqb1YnVffoZ%2BZiI46ScGe0kogFFl2yx1ncWAarfuaSJRXUKcE1YX2iKkUF5egf7Du%2F%2BtVP8mMs2u6Ps%2B3VYReQ1LRAsLitTYs%2Fgv%2BUfjRE3rMTMEO9s7TcASY1C6HPoxlwtxPUg6wkSzHdLqq1OG0K24V2Kp9WqG2I6G54rsez67JTOp5NFYbIDhL4D%2FKQmU999P9gxWgMOboqsMGOqUBcD4m7RTTUk0t6oSwJgTNVnO%2B8h%2BmP2RqgThkLfDrYgpiuG4W4jhvbuXwndV%2F1BCQlcv5mhBVX%2BP7hV6AWbKFIdvZ81pXglLNGrb2rJeUenlaKl%2B1BRyhYiF3JumQeLvoa1NIdsGIeTrBseEhrcoiYrMqQyiJinO7RHTcfpIMo53BS900iwotdaBEV%2FIyktlzXDI42AxNDsiAtX2DU15%2F493nL8cF&X-Amz-Signature=eb281c0e5fea8a9406f88a83829ef013d8c5434455cccdf91369bde214deff74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
