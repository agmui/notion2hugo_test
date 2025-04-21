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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGGVMCVQ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCICyqQUPQYERCivlIAs9mX1kyLpQM5jK9axYGyxvy3vvKAiBD8G6KniM6MO37JOdAH8GH48VQEyjJ6XIkZCxygRZ0ziqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7jCAgATTzJj%2FTfsxKtwDNZpHhUnfy6xdgKZnXBxq4sANSAWO4AyIfOyp5Zi4DROyIbRAZZ%2FHeexxiBCewbWX%2F3Rw1jfPyC%2BGmTrrV4KWsqbmDFciWXbUCHV91TziZgEWb%2Bsx%2Fd27iRSinbTkF43uz8q2VLkhUARxzTvQz2qSMEs4m%2BDhA0YLQzWkjLILTSm51R7ASOt0AKR%2Bv3tpf0657rPESLslHSAqwRHCl8NV4%2FydpdlE9CIrQ%2B%2B2ep7TFPAhw4Z%2BMQtItznPMub%2BWfyeHg%2FmO8jV3LfLwjKe6YdKQGj44djSUnf8JIv3wBKrpcW4hW3TAPR8TNr1Ax0vLNfaSf7u6bvB%2Bg95rA7RaJUOqFMyC0k96msIEW2yv26Ebo7JpH%2BvneDbej%2BCrg9gKp8MnbMtOgazfsEQj%2BlBGd2B70m%2FOCNxiobDXmY7ITEu2DIrtTHCiZ5cd6yNdA9NLNvtpgOzJGr243lJkoF%2FFglw3%2BneB%2BCxFyJTbhn4HAqUjcCwK0AYyerR8%2FPiI%2BFBf%2FUed4pyOVFsGUci%2B%2FbFjrlQKoZK%2F%2FJpj8dFZ5nvgn3doUOhoIOg8jdVdamPgX52cX%2FVhydwXMbMntAjQjVlk4%2FNZgWnqGG%2FqXT1p2hoPeTMx4KhtFJzflDa1Ddfgn0w9dKZwAY6pgGrkQuuWRY189jMldu%2BiPeeZOsk%2BwXwD59QxsF7dbrOXSopLEBRrWAnmdGJyEw3NXIFeXF02SyWvIFc9O9r8zsWkXJ0V7AtuLbh5AW5ktAtEIi%2FkspW9mBtzRITutcfxcjRP7vjzM0P%2FqtQ%2Bv9NSeAjBHm0I3LTuhJ0mPLaxYM%2F50rGk%2FMpr%2B9iEL0%2Bp7lkiDt56VDpXyJospVucOEE6AxzffkwKQk6&X-Amz-Signature=13513b67aebc83e661a34fe649a6b2a46a787b9e4b8dffc59b1b522a5fe2e2ac&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I6ZIO2K%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIFsozMt%2FNqO%2By3tFgFRLYRknXrQ9jWZ%2FZUeJDOeCpV%2BjAiEA%2BLsc%2FXYTB3LmPIQ0i6mmm5ebrO4t0QVlfB%2FMeYf1Xq4qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN45GH7QP%2FhkDv5X%2FSrcA7BXauIQ8YLNV2u%2FSMcEujj9t%2BwbGbG%2BvmEqF3pxnjBPetwvLmI1xmeBDNtp7wAh%2FdVz1IgPZ5UBVxZvIlG%2BnNavtuC8AAW0tBZDiq8l4%2BKBMNYKSV%2Ba%2B1up4wrSzGs4BaKpM3AV0pI4FHWgqpjAAg1Ee2yJmJbnsGA%2BDuBeD7YKWwUH1G36jeAHWJU8UijOToVNVB5tXSErYzu3MWj0blni0J1Nwraq8Os3l9O%2FQZLCSZqazUHZzzlcjqqS1HQr6kfjaqx4wdP7CE3Bzorb3rMXxx%2BBvZgzYO6CncBCMajJjQQUGvbFHrdJe%2B6u6m4QYxs84%2F%2Fv6AEus7EhrlzlowJno4AUEIM83ISEwkRxkFDYFr82M37QGYWXOoJO4Ak7BCFqb4zICobk%2FVa4UpwfJ%2BGLqW%2F1jWIL5gUCieY9vx3L3So8l8zSaloRuKMFTTrdyBI5lzdY3C9%2FuTRxC7io6fIK23WiB1hUNgRK2dkNET15XhhCCadB6drXiwz9mAXoJD3BfiRAfISZ3CVLpAVkpZdoG%2F%2FPtPZ9P5BILGknReOkQiyOUptpE5WRH5AFw8U2iN2j0rTag%2BTwSK5nESjYnMUPG3Aa1aHUHDp%2FbhIdh2GrgP0GGGWQdCP0D86sMOvSmcAGOqUBOL7FzHpNTbqNybGDusr0JVhgZKQVsOo0XpMsz4gI%2FVx1N%2BBllvDRA7EWg0PrhvWZborb7rb9Z4fEDXIW8fqZ6zNpg4N03jNCEGC7MNr7JESoy%2BJVK1lCCzdshu%2Fec5C1uCuY2b4Gl1K9omQBKk%2BK3%2ByTIb9ZAvC5ox%2F1iXGe4%2B3P49iD8d7oVRw0%2FH2CGtHZugFMX%2F4A%2B1vyNUkgkuN4Q9U077Zs&X-Amz-Signature=19a9300ac454d0b4312b11a51c61a2c4e52171504ead4710ca2c8d1b46f2f396&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
