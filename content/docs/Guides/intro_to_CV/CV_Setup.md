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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOM5BNDY%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFrq%2BA4BxrZ8EWcdDx3BfJZMKXMSeGUWzHGHzKBp1U0tAiA9vreUKVtdMUqFcaa9FwMmTzB4gJTj3DboncFH9NUtsCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMbmHL1kPmK%2Fcf9EjlKtwD5cCcnI7QzkfAWjOytI9gmsfRQwmjR0YdW83xp3UvN%2FBTA0P6VoKt9A4z6JdGnc7LdPKE80tB7gKuj7w2jDyGblciCblBXy1KHocB5gR4Ig8bXd3%2FOL%2FS9ics%2FOFSUVrrc7QZN7eKXK0OIPjK1jtcLXy%2BdHO2AZFBVPt6IesCKA7K1%2BeO%2B5SfhwfE3RMVB4U1qwkeIBvAOqDbLQWufdi%2B24dfhO8JeWQZ6cTAo7A2vnjGJAgblKq%2FqNSoA%2F%2FPr2ci77ye1sARLusp4NqEjQatUqPmz7X2RLRC1RXR0tsUZI735S4uUrbeEOrJbG9R7EkEPvAfYGZ6jFFNKSRQS69TYqAxt2OAWSzBw9FrSva2DhTD3v3h2k%2Bbrq1YqdxSgeg%2BKUCrK6yV%2Fg3klyvmfbJWXph1jJ0NODKk5M%2FJ8q%2BSxACGvbB1wF6EzdVyyEmHbHHWF7DOYzr0frug1Oba7ihke2SozTyo%2BKn6DbSHAVcCsfv00MgIxfnMB6JPX1ggNWLXapKZ1CuF%2F8H6bvi7ws6Lbv8uS1S4eWqKgqoyxt0wTO7wZ3cli40spvANuFRGu%2FKMopDfntHMdThetz0gi0VNMPro5Y2LS6Um%2BIuErE%2FePaVPFOZzSNeGAzseTpYw2eCXxAY6pgGUDNpNLUxKXdX9UPyUelO%2FOVvr1%2BxNA6skvf2Nt4KFxaNnk60ZevSgEjSVs22Vi1TjD0sAFI0amJwPabglMZarxpZ2xwlCnk%2BzsaA5I1gQRNzJKrn7oPjbKJ9IEhpuzWNRI7hHdz4V%2F5WwphQ4TPC0ZWvt1ZElpnXo0HSjnPjuWiWsI90XOqjk8Rq%2Foc8ZIJc2BX8nmB%2FFTEi69opnDRvDM2KXud%2B9&X-Amz-Signature=72254cc42e06d2cb4d9891a71e6a901a5135b9eabe391fbf55df388c188fa993&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHYSFLQZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIEBysc0CrJ3UtyqT7C%2FYSVBktVR%2B5gPaRJpoiN7cVMRmAiEAwEt%2FhzVvszjl2c%2FBTtU3bmijFk6QFDU28WKneHoFwXUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMQWG1nKwj6PD9bwOCrcAxZI3gO4LAqXB5LUIBz1OTp5nAfuq0MXb5BEf65H%2FgLbMQKEJEcsI7uh8sLf3F3yOyDtuZCMmzOXs%2FUHROX9uRpAHMxRiwEkEdMOI6epzQUmEvJGD5%2BO%2FSM1uQWDXn35jm9jjtTJszXLr7ulqPRhGHq31PXO3EJ%2FTfpKolPQfockESOX%2FZPZanTRgUSz8a6bPeAECAzOsPzG%2Fu0A%2BNQ8ZftXlm91qydkJf3wOzrYJfREjSSCJjsBMFtHugsLPKoyAmn9U4rkSXHafHq1M%2BjOWOxHziW8E2Cf96wqKa9gZlsqgEugrIeiVe0uNwMkcwCX2bA5GfMK8uhbA%2B%2FWnNmL0wrEjdy3zOBkr07aeNewf7rFHHcValZUvgtOXvyj7lJcLcWhXnIFUfRolh7LmuYqebEtsf4j1PXguPJTUhHT0QLOHkMGVVsldkOPBqT7rkQmUQwbX9%2FCqiEHH6fWcoi1TJnqZ1Hx50ycTru%2FyX%2F5xyiZ%2FeV0wyziMZoSAQ3EQTTdMI0ce%2BMIlRT8alC8ue4gwGToMU9JJL8oRuBNdx3tVzJMx%2Fz3ANkOBTyipfqvOaqbbKDddFyAnP5XIKVQ2CGQ4MdEhzSzpproheg3W6jF179n7l51dtHc4pt7JSiwMJHbl8QGOqUBnWwrs1jHXKPU%2FWlLVw8UW7RB0%2BvzR7E%2BSozrxCPhYQXgsjoYFxbPdNXtKVvOzZVlS05UFGWlMzUFNzYG8pksvvzoVTIaTpqiIfrPiDCSH4pwg%2FAoR4LxNieqNF3D85%2F%2BWwwrmHqzgyNphnJsIypJaYCa%2FiE1%2FT971vF%2BjN8fO8yb1Ch0itig9EZomf79RPveg9F8PWZbixle7adjIU1o%2FENQtQL%2F&X-Amz-Signature=ad4719808aa7bfb87aa178f08904b26c85d5e8152f6f6e558fbd85cea74f4712&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
