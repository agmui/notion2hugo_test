---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2024-11-03T22:06:00.000Z"
  propFilepath: "null/Guides/intro_to_CV/CV_Setup.md"
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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X65UCXM5%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDUiRakXPK7MyQgbRS2%2FzR0cOeAK7HnuN0ZM69LcjcZ2gIgE6xnBmg4B7Ul9p95j8GXjYRMSaxD5iDOyqBDGP%2FSyrEq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDIzYENxBJt5qi6yJSSrcAwMp8IGJsLj5elPyffXjp1CX4DDtS3VkzloX1RjpMUt82iyfktjiBRdeb0scl6cZLPkyiJg2DKNB3OG0xSiXnnJFedSsQbKvdxx1JhHbgoL44zBDWqiUIrrMlqAYF5JUw%2F36e%2F0%2BuXmOhL50Tn%2BpKfA05H6pB79k7xhvl3L7zGFrlVt2xIWGldwC2EPP2uYi42Gnhw6KLLRBrvF%2FX59btJCKX1Tkq5hd3Y2hxRgs5dhJs1F8lrtfPB5sgLY303xzi59ISRFsEXo0DtBf0NQHjpYhk76XE6y2c3%2F8iQJ1Krxx%2FWXC5NQ8lLrs0zI5N49Jz%2FVG7EAJLR3X06keHhymNCMqVK%2BJId%2BVa4o9Am2mdZ2oywg6epGIqhC8gxjPVueZzeZDtal2gs%2BCbdAi44nBv9ltgTME%2FB3L0OOD4XqpUAxon6YE8DjBcxoE6Kvoz%2BlTqFR195BxFCvdH18TBUw1E4Q0mNCWByMT8N48FimIrsP2TEyHKYr%2BcyhtYFu01zJbzdwI0sxCtQ0wHgeGnC%2FfzlG2PROwpldIjYMyEpL59QfjkkNSQ6Q5aQkdJoszqQYIiJC847I8pids3vy7LLGCJPBdDWsFKSDa5TeaRewBz1oNM%2BP5i%2B8EaP1z1nooMOjei70GOqUBXxAbgcd0W2Ffrj%2FKTVTeIoAu8WgSgXhDb6f8pbHqufg20taqwRsf6ChdDsCShhOrL6W9pxw9116KmFZ8QHRT0oGn9jS4j5seGvZnA1qNmS8I99deMhLzwOw8i44hk7xT0IHZmGqyd5MXhWF0zpsJQYi%2B0J6q9E3yaofxHblVM8ehTispUBtvPnGbsIfk6IPOiHEwIaKSq2TesScGZ5dl8pp7LMHi&X-Amz-Signature=c7c5cd28bc8a17b59f412685b1aa6e8d1aa0841ab551f43c60a24bae6c1b298b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BCA3KQP%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIDikfJBGwoFMghww592aZ4mZxU4U50wQiWe7AzG13JBCAiAKeRkzNce%2BMwcpaX7vv1unO2%2Fzd5V0S%2BwJNpVRaCu3mCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM1w6iOisWnwWjtpR6KtwDiioaPCpmeCjHfxOqvoOKgKaHjDngK1nwK1VJtjqIxGIoX47L6E6PhoiQ4F7f20xu2GAM72mRF60uljrZ9M9PR0A3sIHkeS7ZaTzFkDCC3oh0pv0XkwyAWQCgrvar%2Bhe8tJYOGQVTvbSflHvi%2F4wwsC6eLTmZOOHtZIugXlzVsZdVLLyx65VujTuzx6eTQx06tPDdf14iO9HS6TINff1kWOY8I0JrOgJ1tx62aRkFNLkbKCELP1XL%2FUDNX8g6qJ4dDaaLS8aSp9AxuhISNIIX0iB9jtm1%2FnhEzb1KjDPHgDPmUZ1pq63%2Fjc1MzkqFSXSuPkZ2B6kWIgjBJxrR4KQyPKVXsQBoAdVceE0Vy2vMuKxBisooIGtDGMjK48i5O6iZKaJj2aK8aU99HKw9IkGXhdpXpSd5pOfCJSLf7kZ%2BDHWGy6X0s%2BpV4Gxf5rLRCupxJng2jU5eGWdnb%2FU3iluyEK91UepkpfPeCcMENN3VLZLYUf7FTeS4Ltg2vvLqJMRC5SsJ%2BwgNqHIYYvsXfdkzJJ%2FO%2FHxXudhiB%2FstKbSqUnOu3nOHoSOGj%2BkSR5Gi%2FPLsdk76A2jMFlsqkKOI2ukDh4KuX4EEaOSP3bpAKJmIUxwdRVaECXXIbBbGm7Qwht%2BLvQY6pgHNOMfF9sS%2Bcj5AAh8aUZoPN%2BIZXJxsA4YjyUUiZrjekPsr9V05zTmNBdZfDeoawIMzEPFb9ivRQOeJrQJynbRYAcpoeJU1UqwJxLfa5%2FlhjXJZQ%2FH%2FEFVitgfc2QQCk%2F1pQoxvQeaSIpPRW6pR4InuYKgnK59Ov7cetf5ga28o5OwyFWG1%2B%2FltT%2FVQlnZsU%2FcG5QHQGAfvFBqMChXGJMam77XuR8Qk&X-Amz-Signature=21aae608b4526e61738b1f6c289cc4181ee9e18a4fc530e655cf9ba90b8d5a58&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
