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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFTFTZ6H%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIF%2BVXTHYcSL4jmlgA4jRGCuc4TRzOdo%2BZDMSEy7zcQmCAiAtFQSzZy4uomwTw6NgR2C1R6D5%2FvP4GcuBumQqhC4BPCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMfbHzG1q0ro%2BUzK%2FNKtwDN9mOKqZQP1uuAn3sJyPCmwLK2cYOZqBqOfTqKG1uHUkG0WngdUKtCAyI6RFBy%2F5luDAs9swi9HtahRdNtJvB1fv0UDjpJMHPBCgcl8Sq%2FY8HeIO4tXcgaVm7vUWx4pSqV%2Bh2ig6KtEkdZbRXOj2Nb%2Bu%2BUs1dukTZgxt41boJ6IUWEI4PfI1g8Khnqjp%2B1qd8oewTyCsvI%2B%2BkpraFZmA78iKWBX5E0bjKfNsnnqRI8r%2BNrt1V9N9bkVQK74ZdAPEpLWhFjzp60m4mro%2FDyOj5F3DgfCu6g1z%2BU0t7DkXRRMT2eDA5QHAqOiWsYKQ59v7BDgOr3rH6w2CH16MERy8jP1y%2B1yOxb4qWpW%2BI20jjs6k%2FuW5h1NtH9ujvFCg2ZvlwQ4Ovkgqq27CGu4hOKvoxQYs6RInv2YqnRLegVQoK%2FSt4s5JgfCvSskw3zyvvD8uVJ5JdEi8dLvC8bCJ%2BiLetz%2BuqGXADaWyi0f223rM8bV2BiWFCdAhk4Hz3OeNr9Us%2FPWYGZU4SUg8lm930cR4WJkW1VV50TU8tmRJNV3XxY8%2BxQfvRSwR%2FMyD%2Fe5tJ3QA%2BgqsjTkhvzUEH3Zwulpmw4rUnER1UxsiNql%2B0e8%2Fr9emz%2F2sPPng6INIylkIwuq7cwwY6pgEVfcqvUfUYA%2FCUJOASf6RtC44kJcbQsTWqaoW1tN%2FDqLuX9EIseJ2XcP5HoXd4AsyfNfnqMRjD3lpy7719QhIcSBKfDrH%2FV%2Fj7D4C%2BQHkosr0yxWhkp1Dl%2FhYCwLmD3VmnSO8B6oIV8WZ1g%2BZ827WNoB1B42lfQVHMoFUVUc6I%2B3TSIbMzXzWuNPZ8iZ7p4Ydp7jlrch56dra6lNdXfOP26zahDsUD&X-Amz-Signature=8b955d8964f03eb77c075e11767e311fd9a6c2bcb27f78d62b11c96e507c1da0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK6QWABG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDJOCPbQ28wxBMtOmczQJXXkLWl8HS3IUu3TlMyMe3mSwIgR%2FI2Q4h2fr8RlQWHo4SsMBwS%2FU%2F3XzIDx3MYJHkQYncq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDKIUgZIhdEyMKcfYIyrcA%2B8ejDoOcbinH%2BeDHrmbQ8%2B%2BZ6QkujrZElxzfMpx01BOSqPbLbQesARZocESqcvOXwYVE7NBP%2BNHyOh942MyL16x2i06116XYP2jv53VLVdaaB8P6GYXOD%2Bttsv8Q4Stg4RVwhinlOOQOpNfQ9NXwMxbQgdzdN9DNKEo9uqz%2Fw7GwKkqgQ9vibhlr35AtxkFz1YHZ4AHlYXcuhGF%2Fzh%2FfiVe3FlabfvDPqZcLnC8pVRUTej2HCjuV3X1IcsXw4y86lXoZXOWiBi5dY%2B1U%2FvPFy5KoIq1skvEo6WCNcS96RDj7SkoV9w1kOY5Br6gUOCRNvAveCvA6VstckWb6YvQ5CgYN5KgSX1TA37nUw%2BHF%2BbndrhBqpPcb3RMjtmBE3WyFiCG9k3au4NMgx5v%2BS%2BuD6hleDtiLOFy8JZS6aeAOvKHwK5L0Jg5A%2BBvP2wLdbnjmDCgUSjVS6Uc%2BUsD296D6sbpvdQMxOdJyEZlDMaJeMVU6%2BKXhaXPSsz2X8P7EeQUsKiJzv64MO%2BVT3Lm4K9kKMYdjk9%2Bu%2B%2BOQlenyBm7dza6bMLMTFkvu2MHZwFWNLNgG3zKPRGh3sMbnIS3AJ4LiGRT8Huq%2FpzJ9WBcpJJlqS5jyQ32ox5nWxFjqVV6MKyu3MMGOqUBbJAfJ7ib2wOhNUDKL4536%2BNImgo0C8Q4C2tL5BV8At3wHRSVEyh3sb4HGeS03QiU6AQcl1YM8bNXkaUxtysYjHyUBq1s9KHgexBn94Ym01jkm3y7Ul1vqPmxuPtB19c0tDxDfWD%2BBUbowksga%2BZJ90pBd6ZUvi0alstxL%2BqgVA2UYpE5%2F%2FW9uKrFU6A3P4hs%2BinooH%2BXx5c5fzGaC2hscyUiT%2Fs5&X-Amz-Signature=dfdc6786cebccd5f47a11601f6614092c38bf951a0426c05295e6974e3e91c69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
