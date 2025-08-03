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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MZKWVMM%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLnFbDGGQ%2BR705NBjW6Pad%2BbtR3Adtjn1fFVDvODoPHQIhALJRaQvjKH0M4oUKFIdTfg%2FJ5tniRnMIWfikzOasLfCaKv8DCB4QABoMNjM3NDIzMTgzODA1IgzeeHV1hwYOn5CFEz0q3AMJqqzVLTRPHORS%2BNF3RNQ7W9QZiDtsILbXq5FAr8heYIJtIUdDxLnSOBxy6ka1H7lgtwKZSJtBfH3bVocpyKwmFERWJrXzBCTm2xD9IAANSTeZLdDOL%2FVC9TSthRkL0j%2FELTsZWG%2FRmKp%2BZ5ZCDgyZ0%2BqhOodxNK39SirglFJQHjDacub2rKCY4mjwGL5i9q4uQEkS2YZ5VxIbclp9BhC6RsQ5LPTi41ihs9wCJxNCkxbdxyIxs4SQaHdLKMEK34CEwrmK2jISuruju9YdZXYa4xnMpmenQafvY1Dl51H1AL60awwsr8gVjiXBLaOqMKe3mirZ6OVqFwA9%2BorZxBAjRE9m7vnrK4S%2BsBs405%2BxUDzwgvXFsglE%2F33QpBCHXxACbtahI3MG1LJovxNmO9CK6bK6IR9ghabdOC3jWftWXFybOK6m54hWkbFpdZs91D8pYqJ3IXuPpUqpxRywANrBtWzL1eCu69beLGTmErXfV8A3836V5HoLuS8owW0%2Bs2olyC%2F%2BHTCLw6NKdsJrGJ9rcANJRidJcpuY3GX%2FcdQint3%2BNTbpCdKWqJiQqSs5LNe1kJzXb0nz9bB5WnbOJ3kPJ8Hc8JDswhC%2B0rnvD3sCdN4rKvihwa3wWh%2Bd4jD0gLrEBjqkAUZL%2Fq1F2GIym20Z2eXOLkuflw%2BnskNZDwqHJ5U9Prt0M6x8m8lJ27pyBFQatDFl7xeVYEzfwDBymGi7ZDm9rhkZ5fOD1gCGxh1fw%2FJHbhlV5ehnun8l%2BWCVGBMr0Akoz4r%2FSLFPM8Toai3J8NKWEh%2FgU%2B9W0v0MswmWRZ%2BgzbBU9rgtZ%2FU82mUtTVUrB5OaEKZ9WuHH03NLPrVtqcj9JlDqupVp&X-Amz-Signature=0dbeaaecbcddf2e13126d58df1aa52a4d3f43ac996e0fd9fb77fe035c6cc7042&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZPZCSO3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0G8s2r1tT8YVN6wiHATbz0QwLCEHP0imN6kdkNcR43AiEAyIaPbFZo120iJis%2FM44K18JXEPwPfnuVpaVjLrLztYUq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDGcr5wSvgsYbYsQDWSrcA8kyGOUlSOjY%2B9R3I78hERIx%2BeBgkrTuYzuYb3yKt9ZBYdhXAXqXInUZg9rMVAd%2Bn1KqT3pEnnQha6NtGDrTEWlr4cJO7Y3b%2FNjIro5BoAhDtpKgP%2FjbHa3MK8aEaC8MBdoJIbxv5%2BJ0XIVGf2yOSmiY3y5vSQnrzfaE6XSRe8evElvV7Z5EqdTzToVZE6Ds%2B%2BJVSzHKRMzjU2Q%2BSVRxXoHehGmW%2BvcV3rVA3fZMFZRtgnCr6CD1M44Ynw%2BO8IPEx0tXu5ujUgJnTyWcS7tVVGIjSpUkIAtLkV5uJJhFudxTlMVajnFFU9JKP0LDSZXs7ICWWMO9u8ktZTDduzBcQIleUVazx1ApvxPanAorOZDKGBwqEsQG5umWcL1BDQEpYHWNAvb801z8zgi%2BOvGPooITOEkQuxld7jOoK2uD3MTZu7bY%2FNY39DlJBuT9dbsbLxy4bp3fWwLqnKD2C5GaRz40NaYkl%2FLm1YEL3%2FNyEOBeP4EfVUe9%2FScKEjpwYuHL1i1sXGS6T%2BzVWqlfSOJC0kVoU%2FKcmWE1YDFjOWG5aejlRHTnLXc9pS9og3dOTsUmvbx%2BMpvEznG42m2XLbMDeO3pEtZpigfs56uDI8IquhGCFBH2NJjhb5P5bGNaMMCAusQGOqUBbrnvBpKH0Gi5ye4JfxncGUO86YlMPapNqpyLt2a845muoFlomXB3zUlRCknILcL%2B%2Bw1iv3MUKmG3wyIWffqawtodYaR%2BvJnc2VuCl4nYY7KdR6NyckkYG25NXz78E2VAZUb2Uox6BGslm7rLWpe5Fy2OKWR7oWljtZ8oPZyHt4zrP%2BLhRO%2BWicf8pbB237lZePkFdHVKrzOybP8feEjEXy5noqdH&X-Amz-Signature=385b2de290e2f57ab1f997ee04a9d4e2579f959b3647a02f0976330bea929368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
