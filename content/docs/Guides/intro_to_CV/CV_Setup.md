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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEUYLZC5%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQC8uutXk3Qr9EsBpD3U1vP68cXwRR1AKA%2FuFnPQR0C1CQIgI4NEw7rpjSS0O3Z%2FArAfa%2FBc2Lf00Eboy9uK477pmOcqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKunTfaPJ3z5Pe6hlircA%2FeswPP2ogoOJxA44uGkFc1SCzm7A5%2F9DP%2BmCWYHClioVgVfiOmWo7kcL7mvKnA4XdAF5WcxOv8iMad%2BpyqfIbYDcpP4ASTskGIwFs%2FCvbUa33aYyW1fn1AOhsn7plE48kzzw%2B4zKXZmdaXb%2F6lvgaz%2Fh1KEX8iJLsdozmekazpKAwfnW%2BvHWdSZJVs6OYm%2B8y%2Fu9bmL6X5zqI0z0Q9mRryevCkNQsS%2BdfcnFJlIbiO1LSqwIbhrmq81mRGlIPG8oVsTqsIwR4DSCLgajwnIaUJulUEb6wCf9J4Uln5p1XQiy87Tak%2Fd6h08nanHCltl%2FA78Gx2gLRAHKr%2FCgY3az0XorDktNRtzI2gVduViXppjbxg9%2F%2BWEZftTGnGnl%2FObX9NVdV7oqxpMifMJGlyTQPfy7RZiUNLlMmwkSzUQE0Ij6a6dpsgEohUJhgFbawKu6eE4xIGm6UJKBiBoV28P3OQyDqZtDcM%2BJ%2FiBT8yMEjGz87%2FKVcezBHHAxc9St3cg%2BE2gJcPAajWmJ%2BT1Z8UKjAyTRgLEW1ofDhFCHfMJbhcSkx6hV6g8L24IiPqIwq1iGpFHvXpdVQLTvf92Zz9Nt0JgE0HP0Acs1K%2Fls9TUssEQ9mVa3Mn6Smf0DrWHMIWHqMIGOqUB%2Fht14%2FDyYu6v8S8izpE7Ncdz9Z0GIjUXid3IJBk4WAorKwCw%2ByeYt1bL13RMFGiawA1W9CQiKPH5GnWTw%2Fk71%2BTZxYLJE6xcTL500H85Owwc%2FJKyWytl4FWgtOevQkymCTzavVC2JWDp0IPMWiBTKyaB7pJuI2c5v5JNmwRxPAOKaGEvmt12Z7XJNHMNiNU741k04QRPBzJUTqkKGhsTxwnrrUoq&X-Amz-Signature=784fe57fdf25de5a3f204d63c92ecb9eb63794719affb0d64ad4bcae38c38793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664AQPKG4%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEDxr9N7LrCms1qQkjmw53WkeA070NBKfsq6phHEMGFbAiB0ZvtBq2X2g%2BXAuFTNNjEnNcUZ9I36%2Bdw4iqmZxfSGzSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg1eiunTEqPL1NRLJKtwDgvKVacZ3rOEJ9tUfujAoWIUi4%2BXOGJ%2BCTpwSkAEizP2oxSRukwoje9n9hG%2B%2BMVJlXMTHi7njG1U3lUrT%2FgvgxXu0Au1vES0EneZ%2FmnFxmJvuP0rMcGIyoEzpZPgcCPXqnm2hsTGEbR5yg7k%2Bi%2BaYXCu7XHacB7oovZG8aksScCOh6a1jAhoorE%2B2HMh0Q%2BsrNTmotOdOLi3X8PnRQsfcnjp53HY21Qlhs5DoP%2Fq5mIQkPxAnDAqtvgEbaZGkteix4aTQljRWPSjuPXIl1OuSSY4i6b50tF5S%2FSyNGpzMU%2BszUaE5JhFoH7N0qgztt%2FdSZj7q8AC99VtNsNboRSm%2BjMycCOQtFPm1LueL%2FTdsFl5PxDrL5jXZPAGgJfIevd5hr%2BlyEaG8hNzatGPbBVzIpypOmo2Ei1EuhW6%2Bvoof5EHnuoAsAeFR06fpMQE%2B3QeIlw%2BtOLkwBT%2BNQmLfYdIROUB0huBUXO2g08DoYPRAB0rrBWL%2FMSwKY6jQmRThD9uwIKEfibYWM8kNGWQ8t5Fh5Nd5Gjuuxd%2Fllxn4MWDbB3QwWr4MrhT3KG8yztVDdH5gAIIQwRaykZBUzKaxaPxBJQLf2P37%2FS3HdqHOQfv0FbvVa4d6nDMmHBrYCDQw6IaowgY6pgEv1jh9sJ0NARcx4eellK0R1wGS6bTBW6Y7QOzK2X5SbZE6P6Qz1H8coiSez6ceSxHKyg2Xix4WUCgBp33W8%2FIO2bNztnOpuwSRY9Q%2Fknt7Ud1ExI2kOqTp8bvXbhLTTfGQjIGqIYSEBxHRSj5tW43JyPk3FJF29eQYUYHQq4rLh9ITg73gM6E3arXRq4h96pGq0ld76jmqxyi2qtjCPbpUCPagQbZV&X-Amz-Signature=3af7a6e805154d28d7fafd7bd6d6229a0eae50638145cfa60ed6fb1b1c0eea26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
