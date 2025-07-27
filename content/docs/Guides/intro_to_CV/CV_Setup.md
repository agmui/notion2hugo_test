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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BPGUCVC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQD0IO8QBnFXVRFC%2BkPjH%2F5oqec6dQXH6FX%2FJGRhwC%2F6vQIgWo9pYLBrrIy0qW68CLNVMbYDPjnc65dbT8ClhZEYt%2FIq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDJy1LKEFQ2TA1SMnNircA%2BlXDVZdGchUKI2j2NfTh6GmRnkQt6%2FoT9OV4N8wVdnR3GeWYSpBVpcbsSmR%2BHrF6vW70XJf21twc5a3P17EDORP%2FvRQ8oNnUbJ6Asb%2Fu7oGMC%2B0u%2BMIOpnDJ8XoTFHof%2BxlMWsv1Ceiz0bN0pJqP7TJN8vS5wNOTJ7eG7DVBxaIUivUm6C5%2Bcy4n%2FMx1KnyYHhIRzDeM%2B4j%2FnJK81BolYPRZjjdOWMcNyUrxkrxkNH3acqscUyYhwX5pSrW65i2L0N0LhnX%2BUJ9jRi1jODu2uxnrIWuntE5QRHjfYy0rlIK7nBpRiqvERh27LGwXLeVUAWCz%2FvfWGT%2BJ0fvh%2FmC8tBL9keRWedlhIkgnXPW%2FZB%2BrBxxiLztWQbV0RnemiGLFl%2FLZK2e62aqyo%2BVT4pHenbiF7YeiSTOQPuF7ZU2vPcBSZyUGigxA1mpCj0V%2F9n4EiNGHhbMi0yuI801QFue6wThkG7NvGNQllKiJSQUKP5qsAgkIGv1xgwzKBZpmL0rRrqzwGphs6g4%2FIMTXdg2Tm94FzDce3VcpRVnee%2BO3npeHsQ%2Fb7RAUN5XZoA%2FFb86T3UfxYYZIjJcaGleweYnSD1q%2FBbf%2BfhsndqKzmEmECJKBb38HWb6M4dtRsa0MID1mMQGOqUByeBh2qgo2wZ890B4P9PsN4IkQW8GeUJOhS0JB0lAODaA71uGwPzPKjao41Fu6O237SW2nzeSxoJEiAyRm5RHHujtr4XyclmjdEFk5hSLd8VOLyMpYX454J6MEUBo0aaJyRK6Qa7b%2B6YJmPHIElsL1%2BkQy8FOT%2BRqzK0DKi3C9VORufirQ6ULcd70Rh7HEek8swIHblAVNvT8TdmAcKANS%2BAFRFW5&X-Amz-Signature=6e213abe8ba781ed3d67a9316bf383d46e537bb1e324ef6d1709661a012aafa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655O4D5XN%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDIMGc0PXB38pIL6nxpW%2FJXt4Nl3Q7WGjl9if2PZlyvZAIhAI%2FQamYa%2FUSIDXkxpc9f7dWJtFgj1IUubFyPP9NBLW4FKv8DCHIQABoMNjM3NDIzMTgzODA1IgxezxzGQksSxMhIhyEq3APVHN9nEBQXnUMHvMOuQ%2FdRluY9Lm9HvHWnF4dFV9U8pN2%2B5bAFt40ql%2B19RFY8RhDB%2FJwjW5eKaiqSMs3oej%2FWPNzah%2BHKFeKxp9tgIOuzGdSxID9T57pkbWA5u5oGqH4ORDupTjTPdt1yWdO6BszxR%2BSNBfqyRi3Bbdio0Lv6DgT7YTNOvW%2BM7VddGRHljPQmm8vthJXqVYxva5WfeLXes64nH%2BRtHDUoziXHmRfkcEbHrVpXDz%2B7stWJ%2FYY%2BavTLck%2BlDX3IQ0ed1gd54eXl3BYVXB91vmKH%2FKZtZoPz6z3ROqOApq8TZQcryKdyVL0PGTpGZRN%2BHiwSnl%2Bw7o%2BuriB2tjHChklMI8ih1pUKCnvWdC7IQMzaTe%2FaugZVz%2FJMv%2FU31A5kJ%2BEfQF%2F4SJ2HQQ%2FYvgQohobZ83p92fY7TgjgbsgY9%2BL43Bii81DvllCPUj2KtKTlVCnjxyBItV9zK4kUXRUjeL%2B4Rh6SaNAQdf2iahHsv73YUYXJmJR%2BQD0CV0sYkz%2BczMQRRwHO10DhgwjEnSBk51GmIGJUGVjCBP%2Fk9bZVpPTtyVuS5Gesju5nOBmxZKlNJ5RPGP%2FVMRm8wWXuFE18OFI3X%2BiL1PmJma6mG%2FMGIZ3Z8In%2FVjC53ZfEBjqkAZE17MWnkRRPtWEYG9qJzw%2BQdX2wLk%2Fb0teEZtrWbqUTG5BfKEF%2B54Fen%2FdcdwimLrycxxCS5FzinWvUyaelR3meCEO0Rb76PavRjHHl%2FcG9Bs56NHqSRikq0LGocN%2BCQ3TamldfSI3PZPC%2FythhoAL7CMc52zgk%2FIXadIz1FRtTxAz64KbsfHWi2%2B3LTW%2BN3%2FFcYLFZNW2E4yJvPdzTxNWweW%2FR&X-Amz-Signature=0d4f053a5117678bacc6b6f014bd2aefce5fbedb40d20958a2492660f8d09f86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
