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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIVQLIXQ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUwFk3uBChNPes%2BRGzhwIRGGXK7Pbz6dsOZ9K1tj6MEgIhAP7rRHi747Xlzf5uVXml4oo6mlDHb9Wik8NVggzqwjm4KogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygTEiPRMXkYTTC40gq3AMh98%2BIpiMzSPx%2BRE2SXmm7RmMhkKkc7aUQU7o4Sn6p3gLeqU1BMkK271OuxAFjjzrXE49OnpsScUz3U7DHfLgnw5et5fVq8%2FEyRkMnjS%2Br3Dh64cjyn%2FRTk5yeDiHmyJA3xTNjscyaUVJzfDDodPpGKmF0gI2fN7DFRKeZKbIyy3AQCaBQ1jQf7W6c5f8BQAMPSYPVycsL%2BQu8o67aEe6hwBOtCuckObDY0JYPUl7vyITx%2FhVYiL2hZb2t%2BwtUHASaaEOHEpmwH%2BtrGNzMe9Y6gVzwPsai9GRKUSm92CzblRxRziAgF40N7rAGeHihYNtOfOwtOoiLya7a86vrj2GCeLby9tJ31wnT4C%2FjVhQhCo7BGtn3vxU%2B6ROxg3%2BivbttCZXM%2BSGYw6CRk%2F5L5%2FXwfInIkQ0oWTXLzmqaMmbDDLT7uT5WCFUTgOR6L8u3%2FakwSSJI1t7zTsL1vCj019p8WVzbkmsnElY%2BfCctq173frP5pWBlKGzO%2Bkf1H5Yo8yYDi72qf9XszMRM11Q%2FwWiG6rJbeu8jkP7OcK56G45OqSG19wDZah2RltRr7iAqVmP9l52bsvujPsx9QDIw6uf8eexuvRBsF6ENVaeUdn79LULmIKzIm%2Bb5vaXZkDCY%2Bb%2FDBjqkASZC6tVYKytkhqCE3%2FlW3x5lHK7qZGR5lo5DeBHvqkkXKPIov2BkJAZugl9YZ%2BtJHi5tI58sdhx6pBA%2FTiQpIcpCYuU1iaBswAFwgALoBmf92L5iDPsUwdthyI45E8StAIF24ZjVl0v1%2BnqiWp3qfAXhF%2B0UCfQkCrg0wtfz5lGE3zKemW0jfbAQlpatQSQQJ8Vh%2BYWfMj3B4b%2BKNv8fFI2Twztk&X-Amz-Signature=fefad75d7d9450a36c405610ecabe1c62642d4770e84138f8167b962f9018301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4SY2PFH%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ%2FydbKKd6KOtyxDmz%2FBN2C5UfMFcGf%2Bf90fvChyPKRQIgaNsMN%2F%2Fs3U380BcYc5elIFogQHq6tVr5YQG0cNrW7o8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2B6omdxhLanFiv%2BVircA45RrwwZ5dgBDJnTMLEoUxu1Em%2Fmq607TXbdxdBwykIhJ8xH6zPYixVurl8afBCfsPv83HQqlFmkzQeXGn5Le%2FhZ10kGSqdAbYfBQJuEwNuJpqk73oKShlh9e4Q9aredwWb0G66VeAIfAGafU2O%2FdgeIbppcTIse28ny7AtvcMDUvMe1%2Fq4HtyK71HJ7JAlvQ88NlKAu8hH04uH2EN2VsynvcKFcVo%2BG4HjJvwsHVcC7LlvTea3xDhEDS7h%2BREOUXH8jtIb3PdDSNSQMto1lkSuK2rGMXNUz8PQnaDg0Z7rXr4goihQH5HB2O%2BqYdNHj68HeL9Z8B927VAMo7UBpgew3lMwVGwwPm9tmhVGOwND6yTEU7DpgGdLGWYco5fTCNkGfBfDP%2BoDKM%2F9VV4QMX7HCZs3ZEShMDVigBjgmg0dY9BerXqzSCD4pEDB8IswwB9Tk9XEh4M5TMTAyk%2BGYGIZgXEY8v3NsmM6vkwEqBd9zM3WI7ly8nHGQeCIPGli0W7LcNWt9pkG8eF9Xl4b3IJwrexgMSg1QT9i0aicQFwn8bbpjlYjesuJPLB4XWfkFWE5G4XHprSfnKYQTwZKdP9MWxfBZVe8Ya4%2B%2BJbsCg5O6I42d9pSgL6atM9YdMIX5v8MGOqUB91YFLTiifP47IKbtPBvEsy1X7dLc%2FjiaNQ8YDT1Ymd7awXFwfWLlSehg%2B5xAfio4I4ChLxHZLJyZyHEjaMpvve52iQwclUO0yeMxTj%2FKwxzxgp%2BiRYdF202nv1JCMOAuiasx%2BMqnx%2BLsjTMP30R71pWqZfaCX%2FVjLppc0Dn5889rnhebHbplKYSot93Y65z3mPMBZN65dnatgM%2B3ATG91B%2FQErju&X-Amz-Signature=df38fa227347dc79079bf4e104637ec847aa79787d54adecdfdc9b0bb26cbd5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
