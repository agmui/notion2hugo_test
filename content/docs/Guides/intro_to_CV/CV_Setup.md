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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SNWG3OV%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T110129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDgqTg7GPV5JIEAQj2469WqDP09WmVlrUuSNp3YvAmrrgIhAJ%2FTyOyWsN9SU8AKqRjaycJVmZItTnM4gFUD%2BohuQOglKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2OJi9ZXKYNXPY90Iq3AMCTL8w4dZzft%2FayPC%2FMRHQa3fsgOq7q%2B7fYIFqVGXJwGHZYVzwMCVkIUaEdKgmcLcAyfEtn9bn4YasoCh3at3b54tYjErgpOYzbchPpPyD9v1sbcUw9BMkGCO1cEv1thwLZQwwdK9Zad3szK5p0IZGaY0oaxEGq7mQPhtvMC%2BPJweojerNIyk9zDej9tl5VGUCSred9r1yxt%2F%2FY4bCFEwHfO6WB8VwApJcQEjaDi4hkzxT1ipfLdxPIiDQk3EKLuP4mhJM7BchUYVjmu4e5BWzQmKHZM3pJpWwdBC3okNB6UgPDEg2ki57ECQm2pZArToOCZ%2BS8MNtJ8ZzUUHtVK7FLaLhP9R6yuNewH7aeVBoezH3g3DVKPT8dvmxuyeG2wxhHWpKU3%2BxIfF%2Fo1Pp2qvi8gl%2FMiKCBOF8e5azvxsop4DutRH2pAePxCc4Jir61hQUrmzss%2B9qfGb46dZkvL743sLhUIRNTsiFnj%2FzHabwSxzXBofJgDxlw2d7qvdjDSj7ltdBkTZ6YactPNmAawpHTNLuP76IxJvmGjUAT1nTvdcVO%2B%2BgcKo4bf%2BaTZ%2BB53rPet9iaSJdMokpNXDROhsgFfxXVNlXvOQ3udbBVNY9tCW7qjre5W6kniTNXjDSiru%2BBjqkAQI1jKVR4ohQXOKzWiGxhxkTrFtw26BBLjIQ5PhEy3%2BlpJbSNoHFdnBzb8wG1vvKkotVw6vr0s7a0Z044ynhGcY1tA%2FBCFauG7W60o5b2ghnNtQCuGKCF4IdcxYjZquaj5Xg7o1K0Kc02DmoYqQga5xhSYzYDc8HN1GhkRyZzOtn1yZ%2Bm%2B0HprI%2BALjGIen44QiI5EtAH2GAspARihEqcYtav5mH&X-Amz-Signature=5868a18bd356f6173fe2b11c13a9b25b9749be652c3c66097dd4ff48808ed6d8&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHXULYYN%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T110129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCaQz4xoFHLzxo6V7kIrYQAJKVSuI74qF8Y7PjZa2Tg0wIgYa2GkJH3LTvDEz9DAaY%2Bc70WeaKO8z60xxPD%2Fxs2DScqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnJIr%2Bs9hYoJ%2FNPmyrcA%2B8H9tUeTJJqrhXAkc64E0sxva%2BgWRvwLQA2Xh2e14Ns2Pt6YooVfhzjJXqQ7Tcb37Tvb4zmRVIZWMtVG0U2Qb9APkcSXvOehA4L9LkvtTkyc1lhU5Bhxq2kujL9cSqFjiLTMqJw6MLc2KcvF6%2FNHCdKjM6VE1yvJ8YEH49kLOGVM01qQq6mXtsgnO3gm9Zpm3kjaAnmMsk1lHkB8O%2FJq7%2BG7gctP%2F7L%2BgIXKXVLHQXQ74XxkNUdF6PKmhQOb7d1dHomOxY3aiIP1MhDN9dVCAJxDNautJksqL%2FtWvuJmK%2Bmu1TgVS3xyrpIxdWehhN5vyQyR2R8nb1rYq%2FRw2TMrYR8eSTKXqGHC%2BYgGjJh4Xb0HJLwsOZKwy8uhlY%2BnDGZh9%2Bdu3ePvRzPQXvzte7oyO%2BD6Eyj7xrTrbFYrKb6bPIHjIJF%2FMHlG%2BD%2BAOjW76SL0tWlY1%2FVYnrlNdAqZpDeMETsIK09OcxqDdTFXcUDZ9OTT0lFG8jA8RdcDj3X9x%2FfZfrp%2FeXc1qrZYs0gUoIyiiZ2TyfKl4ZuETFuS8%2BRBcgqTXuTAJ84Y50sx9u%2BxMcVXrdqd1AnEUUOuQ54saWULdMSED1le0MQBKY7ypdRzWJYdT1txtpa2EnMvkZ%2FMMGKu74GOqUBNsRX8C%2FZxyzQT22wUieQ1%2Blj1f9zAJc7S%2FRSqS%2Bv4ge8%2BrbNP6tmEAkWJ1Sz%2BdHkEAuuybhD%2FXBkZTr%2FI%2FccfVIDhSZ06l%2Fxah%2BMGSou9%2F9wrv08uUnIxQzjYsErwagvvsQE46klt%2BJEwf53kuCausrSjpOm7TmQQmL%2BApAMzeRRIPsrPnoKxef7FRMqK069mMaR5dE8baO4AjYGjDydIbkb%2Bzw7&X-Amz-Signature=03308b66af99fcbba720e1a7ee2583383061ae55a599de17f97ecd91d8e8ab60&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
