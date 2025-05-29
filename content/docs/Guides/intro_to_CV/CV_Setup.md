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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEI7JNCL%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T041442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOdNoFnmsn%2FiGrlsQ8CmxtgS%2FdD%2Fx6TkaHb48azQNgDAiEA2KgvVggh%2BD50lOUGWwvodzdEi0yjiV6yzyTX%2F7dHSsYqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDldim76Wam8ihjaZCrcA1%2FYgVIOIL1MkbPIwUNA1d%2FRb793mx6rePd4K%2BhUGGo14VmaPvFUv5kW5Do6E09R4r%2FVKwu0yRmIty389zrx7tVfX1Xsxd07g1YKnZqxi0HKNktAHpPeHyr2x3uNQ%2FhZIKZlyo2rwv9ZNLS3j%2FPLf2eA3sdXJKWVtsphpGdC9PRWkquxPP9xRvvkX73dufb42U16zqQM9hB4192LPleJnYSmLhEbrugyGIisB3Xg1p0%2BWoolPRx2ZfglfGORztRTJrkScV9CjqYXqSMTwWVuLS0hrZMsUIZ%2BTpAjBhnNF0U04XZBQSHZJfu4wA%2FrsqZkIOpFZm7JMKaSitvuo1gJffxuv5x%2FWLml9ZEGKvpHDD9P46Pi8RvQhg3hPC6jdkbKtIWYjw42tC6W9zpF7UGN5Z856xqijpXvhUA%2B42wIJfCZbGgrYsS6834YUO2gl6v892ZoVHwqkQu0zKo0BRebvvtW9nBktWA7cc0fVgpy67w%2FxgM8PWcJ7AYHWtbj1bMSYFMaLWN%2B6mNTWZFVXkJuupiarxn1SV4xlYN7%2BKjX%2FT9uJYz6u3R%2FKaF0VbNSzKsdpwx9BCPx8fCap%2FljNmVxSlrFKBwPUuPTHYhD05YEg6D9Sft9tcfs%2FNtJuk5ZMOOv38EGOqUB2VaBIfQSGIjo5%2BzcDqJNkIVrMYmXIxNzHxv%2BSqvy4Qt5Sj%2BkLZDk5bF1nzEDkQKRWyG33yUsO3XJ%2FQmQRMEIIzcuDYH0w1fyagYKctoGW%2BVIXIfOR18P2Rq0cugtWl7Tx4Jxr3h8gHp4boQNtzKWaZw9dmRFnPQntvOO8cRflOn6QhdIS42KVv0aENV27Qz%2FvcOgoCPFlbwbeBjtsJKgbpR6muRd&X-Amz-Signature=5bd44b9d513237eb7ef4701509eb354c866c8befe295389db40039f3dcbb2f66&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4H75YCD%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T041441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHluQscddQ3OfXqge7pdmMowZ4mZ2hwUtU7nXpSB%2FdYXAiEAyGT36tyXuTcRrJMwsVLxoxBaw8IzGW%2F%2BHnMZwGj7GmUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0wWT3o%2FNLRgkh4HCrcAydWFCW5I9FKx3oRu2YaAoBF%2F4SkTOd0x%2BZkqfGb%2BGjTbD1SUFSksaoiUkffBarSO0QdoJZj2fqnOF5Nb%2BmnbJDVSkinH4n7igAoeMAuOUbTDQqI1CNLAwxlQ4No%2FUjqjdEbz2vxK1yWrODjYml4GcHYfZlVHumnBmiVcvnRDjobGu8deahobC7L4lWK1YwrlRFuwyE6wcWghBl%2FrYFluS5RpGcBaW92DYbcC4vtYKvZvy9pq3qagSb2n2lT5bZxkza3gIBt7ilE74Uc%2FptsFIfdis%2BaXNkMReD4XPhArtK6rBpm1wNzfo22UlWRib17FPlIzAa8GqtDUKa1m4t5dQQTMTjvnW8vLBnI%2B0AAvHEVxZHSO7YfJJBxUZuX%2FjmekDJ7OLHgwcDF4dEMriV5H1dDMIytMqURcfvi%2FC%2F6g3c5fQZ%2Fv8SnywLNanJVOQ6jemnEQY941OIO7DJW5XAwpblshusIERGo7vGsxmRDBLbM1QaPvzgJmpSgM7WgX3OBS6ognK0MI%2FT%2Fk8JpoxyJ2XX8i0AFsv%2FWeFxkoidPbmRvJMNGVmeSVNrzRNd7rk0uepAgKFwLODdkDBTB4FqdZx88WvsBrYYmpOy6Tv0jdlNQbLQnyxIJ1vfL8lvZMMOv38EGOqUBrZdKFT9RhKaugqGFKSP2eXC6UO%2Fnki%2FELh9xkA%2BN%2B0cDvbAi0tDrauPUt%2BbkWNuGof%2Bljf5Qc%2Fi5qDpw9q3mM77yj2fk3ryehS96068yGFVoiYTFov2bnNqTe4Q%2FVN%2Fk7e73IPeWLHL%2FJJaRnqfiHEBSEQhr9qyX3nzrblBlUb%2FdJaStSlcVpNwT8j%2FGKJ9cx9utXI9PcKO%2BczpExU%2BRP42ztP5Y&X-Amz-Signature=9341f8fe8b4ac6578fa7196c4b138f8c192e78c854a7b85fcdb3577fcda74386&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
