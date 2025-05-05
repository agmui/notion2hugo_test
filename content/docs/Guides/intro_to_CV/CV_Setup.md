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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZZ4UBIM%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSolMcqGWRM1COsxdrQcFrvae2SQbNVJfb2wd9z3T0kAiBl3Shv9sZjya%2F3n24xXHmFiA0s35Davmv2UKmLqA%2BI6Cr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMOwvPTRGRUaOeSP81KtwDFH7UcBfGMoqUgWYv7TBU56D9XvLGKOsSp%2Bqs8Rc9iBGpCpz16e8UDWi8T2hf5phsxHu8e3qn3iIFDI1%2F%2FCK%2BIAge9KyumzZRcaoZ2iol61NNB6dGhRuLT%2BgcFvph%2Fx9WPsBZr2vpgoygSpBs9lCZzzPSANwA30bGflvjoKkmQu0xcFikpXpEvIsPAWDczef8X9cL6DodCbgdCGydz7PAaMb%2FzLuipCfi3DCLYayFcL58auDCpyRajd6FEUE8y1PXLc9e9Sy6BDwkWy05S2pADm8BGX%2F3cstBREPlf2GmuN4Eb6DP6fVI9oC6FfUglXze3E9X9JA57pEcdqWmi6XpYLMgfSBv1cBDTdh5wv8t3EIDTuBJ1CQO4NZ0%2BOg3Et9ReVHgDtENIGRQ0ruPbKMN5V5t5UaNvV5BsQV7DwIsHD2cKpWPuibTSAlXBG%2Bl1cNsz6Zfw4ah7HLo1A9lxDKH4nbHr%2BEW%2BXbax9tCuS%2BSpsZKicKcEUM3X5Z7p5ExzqZxP9%2FFbeirdpeqBShjDBKp24D%2BDd%2FJ8HRXTgSrh4ZO4adQG1ZkUMjBe1mMr5OAcIC883nd2iQJeU3f2imryXs0Ih6FDyPIpEhHzbjJKTECILRC%2BuraVtQjMQYGF%2F4wy7LkwAY6pgG8u0rV5fIEUKwGZQi0BKSambQ%2BCcrHGHX6eR4xBiSorccJmkU5jXakUkMUORZvtI%2FnLZBidJriAIKX8hFfgEETnf77tQYEFNTqb3HyauLk1Ib5evEnRL0CjxBfnmjL5DO4ragmiwahaspBzEICddxpbM4OQCungAp65TwpsNPsHvhrs2EwIrPKpr3sugkCDkVXh%2FAapTUKshz30oxFTjZ9X%2B2iNVbk&X-Amz-Signature=9e509acffc2ae8a04ebb4cb01b0ee89a76fa3b5db09affb6a196d8b2281ffa38&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBIDLSGA%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1ixzoKPAUgzNf2Nh9R0Cz7w%2B7WLKS50QiWjCglVGeRwIhAOt6NilCnG9Bc%2BKt2yUNYzkvGK7GzGX5Zi5J%2FHP1yQm9Kv8DCDUQABoMNjM3NDIzMTgzODA1IgzlKmtIapmpPbnH54Yq3AOsdeqIHb0nxibwbV4%2FuzrV9JZXboB1cajKHYwXAbHkigzy6JdrU%2BPULSF%2BaqR6OQg%2B6IDltnh5oqNbReKJMIoDuY0VXa0OzH0RekoyCdn%2BEBOnDWFX%2BbRoIo7SxSlVNX%2BDGA56s%2BL%2BkcdtNp0foszxCvBQavY%2FjoLknZJ4qTwemNy7xX731ZFTYJMBiUI1%2Bxhd8BOVbWc%2FnP5q0PB0mtLIlCLz3eJ0PHdiAgof3dpADZbHQr9qamoUCBMCRVZ5E3%2FESoN88RTZYQq3nmijaWbaxtwemPJawMZ96uxKVQK%2BIAUg7e8wd%2B7BNNlSsd1iwyAD9S%2BLgVwkWBI9Gr499RQZAqjeo6fsOdLmdmHfVgy1jxVVsBCQCVubvrRVt7qNEk1PjpkmezIJnzB1HeyNuohkxNv46axYpBrDR34biKHN9yVuD4QzMX3BU%2BY72BjZDVM%2FAWA2kFWT625yMbfiKAJsFNrQeQv7eexVVR%2BP%2B4LMxo9tfmbR2iflOoqNUIN%2FHE%2FTuSMijfIRmC6WGBLW5VR8hWmFmxD8ExcCACBMBxa%2BRxj82d6SupAKIBqczASQxo%2FJqQjIcYknQgzW6jLiVviMAkMRd5vwxnmXCdTie4cN7XsWhDJ%2BlkJGonYJyTDlseTABjqkAfOyFzM8gZeht3zt3WoVMo8ibaZMzilITzkJSZEoAHwy3IIvoVgD4iuh3f3ucEmfPQKKBLDtYQbOSNs94DIKlkNwHEbRV7LpFsiB9C4OYNe%2Fx%2FevufUbL5aktsWcV%2B9C3z7sqD9vpE9KbSnXyUUa3vpiY%2BKD4jiTBtuwpvGAQAvPfRSaYB6Yyxb1VxHlpLrfeSj6X3B6JqTbBNBI9zOkwbPh566r&X-Amz-Signature=1f208531f17c47db7aaa884b0382eadca78d94811d51e2eb64f4d129669f58ed&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
