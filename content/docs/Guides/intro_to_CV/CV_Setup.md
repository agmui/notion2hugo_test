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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPIEMHAF%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDWQzZtxV4G6y7nKiVsZffszZaqcy%2BSbEPyhtSYtl%2BgagIgNDYsiYCpdgn%2FC%2BmucYjq4kxuydOYSRxfegdgrJcm73Qq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDAaji8YgqLZT94nsyircA0dhdVem9NeOAiBVOSJYuKPvbw8cxX1PrVqqLkuRTrHVJsp%2FOv4HCuXwL6p6l83XIhLHJ1VuJVhpPa%2FGvr6QbKMXCAHK8bpl0FuY%2B3rgb52b7WhBTY30tFTCv6PPXJBXdKBaHW9relaiUm%2Ff8Swzifekfu4e4TxlddzkIkaNEne2N1QxG3AAWXXHc%2FL892XhwhW7QSizMfcWIKbnCLlY4htC8fO%2BTvyk2cWesWridMupd%2F%2FtsXMQ6K7VXQVChAOQgpH1h9Brs3iIfInLW6ITdEYRrsQbc%2BxiiECk6g5jH%2FCeSEfYjI8ozXEaAzms7tvJpQonuhS3gKCyX3f%2B3zHFxMSoSsZvKVfYnM4HLGmhseO9hDZCiaZejCnnRA01s0o4ybPctX4veHvCjvwlCNnERvP5nNgkO3LkewSEXY5yBTjYGKOqQooWfHzv0n0%2B9LXFrq5Qqq3YSRT12HEcsmUePhnKOQea75gazQSRiMIoOi7l7M58f7d7wU95XyMBmkxVD8IEEVUsyoXto2drH9JNR7yQldPOaBeOQLyWU3MVn73pLapTgYQFoZryB1ZbIZGZS6pu26s8BuUCL20H6qJUk1uqJPmEN0ePH8K1cs83arrtJ4sfLY9quZD73E3MMKDTtb4GOqUB%2FDB%2FJtZhyINQ1kAVTHk6FnfdfBF14XyHeXbm0PG451Bk8JoxYy%2FoIJ4XmDsX14EMnm6OvERGvo6TcAjBbZ%2BamMZ31Ol1S9hETUhIQBu%2FFs0UQtqVyyasAvWJyfJdGLduNuYM8QKvf0MB4rAfY9T%2FUbwyRcayl6FAzsqFXD%2FtkCzkI73UdnV%2FNzIysnQCxiIaatF4VkpcokLL1mGpGcZ58wJuYNtk&X-Amz-Signature=a34dbd2aeb2170a162cfdabc3fc54069022c45117b240ee5c5c74830431c63a0&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEZ6EW2P%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDxZzuopmLiAEwWURLQ3CKFVFQ0Dxp%2B326J69YV0IXOrAIhAIC1MvKNkk4c%2F%2FswE9WVIHLxcfVlrxgNGOH1ewHgFkoHKv8DCHUQABoMNjM3NDIzMTgzODA1Igzu5oHicsoAG6UzrRgq3ANBF2jMdK4F%2BHN39iyjFjoG7GEUMbFh7JTR2GAS5%2FeLWbeZxkimOu3F2q7jdJozojzVUwSxYDyxGytqAj7p42auALu46JMatI7%2FjQbdrjDlWmbeyXtJrPSftjiyYlg3nKIjpTzzBHkv5NcODK%2FrEk5kIc5g5MBdSK%2FchNDbuWUv3XyeIUQ0O96CUB1NMMA6BX846JyXg62o5UkomfBZiK1%2FkzSyYFWxjppvv%2FLnK8U78EypBUfzv1jPFoSS0Hrl2J68QYrU4fJmHUxwjAyaY%2FiBQLhWIspDAqXPm%2Flm%2FQsH0BsWEo0LCf%2FMvMpRy%2FTae3v9lHK3%2FDebfQ9huBxwhl1VziaazhiHQrVLQ4S5X1eQCGEpIzy2HgW%2F9Zo8V7vTn2ie%2BjnnWAiHdPTU6sfHOINFWASG3PgGjJcadjeqEd1jff%2B0%2FcBwnka4pHVqHPoMutHh5jDWWeAKWWA7nOG7vGgiM02ilePT6sRayRQKzi7jljN70heI3JImUER3U2DJHhm8GcukPRH7oTHCvWxHCXP2Z9WeyU7pNfnnwKwbPYqAlfCnntHca9H6k5MlevohFnYM41Djf9qqgjwrpZAAcFbNruqLtSQOcf72FNcl0CrHn2s5%2FK2Ujh%2BD93WyeDD8jLa%2BBjqkAaHwe7JOwmGDFph0Dz0yQ33FG%2BuV%2B%2F5e09rf%2BV6dw36V6hsTYmTVx3CLIps%2BCwZB0SnAGTrhurtFOYnCTVGp2lppIRpTFJK3ca7ckhpql9oWCxmQVPqvKEZUhdPxG6R8M9QW8ecxCwq1eeMdlWMdFJPJb45OclWiwvjd1Icg6%2BFAAGFOv%2BUWvdB8Bz0kNAXx3t2lQcAldCal6A9WiS1k6wBeP4wH&X-Amz-Signature=f3a6427b7409f5da995ef698b9ec130755c03ccf845d6be6eadcf7a90227a01b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
