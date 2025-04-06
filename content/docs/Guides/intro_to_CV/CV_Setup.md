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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOU54Q3A%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcJyCvC5%2Bk0CzfmLRC8KT9R2xQ6GVGgnpkTgakaTpTZQIhAJdlhFJv7lev6tuTNnJ9ij7Xgw6fo%2FKONOZ4l9iwlgb3Kv8DCEIQABoMNjM3NDIzMTgzODA1IgwmijH6yQAwu8qXiEUq3ANf5BbBw6hpSQu5i9ufLDlPUFYOh%2FlqnqS1ibct4sndmXxvxNALZ8aLK%2FEDb9pgTFFoo02O262tmBxqO8oby90SZ64b%2FQ3g5jMd9d%2F0pWeqlNa5rW4%2BvwWMWO0aadxXcj6meSHoxAAKw86RkjUw%2F9HnROqTmAwZ1k%2BWhidiyEF%2BJto7mxEfRbkjAHWwUyp89ENP2q9Mim%2FN%2FKmXWmZ9tUkLvOWkdcMvWsZbmxCABO0D%2F3hJ8vHuNrr4muCiF4mnC6UcLWCQhWVjh2v54MiBlBhkgRUTK4hwk%2Bqf697x130JxsC8RRXjkeztMn2To0pdoT9yOAfQ%2FkYYqWjE%2BzHaciTIKK3ij70D3ZrDIR1zKt2MtqEpC%2B0XEXHbw8DribiTsaVNQxDYG8rH3frR0FgOpcXkD6UFLDeCsdRJdCd3hZM7Hpk8MA69xeTFZ9trP0FS4I5IhQ7PXTCU2PJTl%2FvJwK0vzF%2BTDYS36Gs1TDQ9OJgxY0zBhLoXz2%2BupdxcLKy%2FcyteNR70XIkawaa5YyrL3uhkRnlGxugVGHc3AlNV4IQMACvTlGIWgzt8WJXo8kMj%2BAqDdNi%2FEqAVvtHNY%2BCxQEeDdVNvb6NrgLsmQCzV1P0FjQanNdX8XS8pdisJ7zCt%2Fsi%2FBjqkAXj%2BzdQFd8ABfWnsPnMK%2B%2BFoIge3B8ILjdtOVr1e8xLhMR7tHHOfDa7QZKBHyJ%2FHRd9eRKdpGJc1gKgLMBalXdG9rMhic%2B9RCWPcCa2MTcsPJovTLSsRgLtEuf1TL5PIHfYlxs1Ps8KlNP6wwnBl0ic4XyCW1BNJDn1KxhjnfnwuPZ8JNa9rYDdWS0W3CrZOAuwQmxouudE6jXayS448GoYiVlM3&X-Amz-Signature=5f8278d97cbd2c10113c3445ab38cd5b450d3ec27e2617b8663d82da671d1f89&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LS3ZGNY%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICe3eZyxAG2Ih0iwrRDar7SklZH2ei%2B%2FkgbixKKIiqJRAiEA1x6kmzs8k9UioizwGtojrMxSHYKQ0iHzOr24h%2BumoAEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKYDaKhUxo3Vrd9XMyrcA4Bu72ltgtii79KfQJeflTWk3%2FKx4kW5WuqKGkzT1W01omaKGTVXc%2BkrKwG33CfVdylD4cQwiDBFYU%2BkHIiiG75HRTi4i379RSxb6nl%2Fwu3xnUgJYS7ePQDpkOf%2FADi6LFfCYtDBiJ33rl%2B3V5C5zmRbPmHezclnWSAQ8YaclWmIrUp1C3y9%2FF%2BQq6sKUKhuWHJ1FxYb1ku6NekNgDPAiF%2FKvI2STHezqNuA1bX2ic5dlEiiLH%2FUZvgMbM2l8EmEohUXdyn3eSey4ct5EwHViV7CEJ1LtGZRgJZ6rbrK9jjlklrImz43SL1pWQh7qlwcWDoHsiVcuP%2FGk3zVY4Qv49E0Eo7vEsrM6%2BKQVkn%2F0jiOrZ7G1TSO9%2FcYmdbosavh4JrTq1gKz%2B4gAznAJNs%2BWUXkeMPfA4it6dFhnHI44W4My8jhBbpC25PiBK5Ipxpf3yJb%2F6JvqWRyXQ5Jl%2FtuxBB4pWB1L7xDQqZ40eU4hmUAoC5Syiu8whouED%2B5mekwFlx9Z1ZvHOmhor5JG9JBdI%2FNL1GnTmEQr%2BZdB2ek5dT%2BhLjCIl27rUdNRVcdGXcSn%2BYm%2FZx99XYAx5iCO5N7ycDEq2uDU5UwRr8Dj62Ro9tA1UPRtp%2BkPmaHG6EaMLf%2ByL8GOqUBTp7DlN1ks1Nty3nlOTOxBrggpKT3O3VcdTLuBwGYjgwjjq5K8jr%2F%2FJ1jW1LP0ZKppYiNyxjgf5y5nfbuhXYrP06bkqmmnSPp%2Bp6PqcgRCEwDTuzq1BJYHgKuKY6mX0v%2B3lzC4Al0qIl0llQjTZ%2FGxL4CFPIwxViHJ%2B%2BDfFprOSv4Pz%2Bay7bOgwUD7oddGAyGC2ONsVZi2MwsT43rIGCkaDvJvxue&X-Amz-Signature=bef6e79dcab8af9d3fa1e7dfcce1b8387f8c2f870e27bdccb2157e9c7a21e394&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
