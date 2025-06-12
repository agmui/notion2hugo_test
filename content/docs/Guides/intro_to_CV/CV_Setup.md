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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMDDGAPA%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCl%2B4QjJLkZ%2B6ReeeSl1hgLv%2FnUAmu5htg5H4ZLVIdV0AIgQvEsNsMF2DgRCcw6YY6ZUk0QVH1eQCN8HEryP6yfVpkqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFEoQIizDj%2Bu3xUQSrcA4e2GxXj0qiSaRXgDonP%2BTgYe1LmzburChzOh58sQNWxVkTgFwG6EwngBDmsv8uHiVEuA6mTSt2P6Lre2TZGl1JFfTf77jULUSoCngPfNb9sf41zXeOPEKWAUFnfnXg%2F6vCPhxnMWRDe%2FXd581C4lLn4tGTDs%2BQQXvUQqGmIUPDDOOscyhaTKXbO7NQmwFH1mx4yGVNZG80agkPXqovr0Jvu1q11IX8%2FThHi%2Fb%2FJboRpgXJsawAqZpQNLbOnVIJHG%2BcHJa5ASG%2BSAOeIkOxWxZjKrngaWXGNRduSOrXdWaNQnQ2vGkswjciRI99iGA3U5tKOHsvup6Vvy7cII%2BmFlDErZ9Z8K%2FsU5XZqNasT1KF12hi8hoToUADaq0VyksauuQi27KEF%2FMhD8L%2BOEvRRmpxk6%2BKYUiBuZGTZwat2oNU7PcyQTZiUdMhu3NyoplR5EmPnT6UnKbY4YhBxHlo%2FCqA2iNvZGXV4c7bu1p3K%2BEwLNgPRWc4eetLisVJktxYNuYWBXZrf4FtNVwsPGsQWy35q5%2F4E%2BJgvPWn8zMMZelrBE6TVLqcofYf2HR2MvI2AMeYDFTcMbG1UuJgdFk1ZYOTkFBhPt%2FZ2%2FxcMS3Rv7ygAs6q%2FY63YGIdtVYEfMIrWq8IGOqUB35pBVbmQDuAE8KP4wfbNGX8TdtItrKWG7H8JDDD96GQ%2FoU55dCyKpCuI7uEnVKZktsBUFXbC4qlAnT%2BVTjADWh%2B5SfQ0%2FwyL3JNEql4JOWxINiW9VqXZEizk8UYgh45GesE%2BX%2BKXOByzWnMgFEBFD3l6xIieIYTwDCG%2Bo3DbRCLShpQI3AomTUqMzsWRnDS%2F9UWALsrv2wZxKqRXHmYVEhsoUgZy&X-Amz-Signature=979407a356d217d6e534b3841b5ec90194d167827635a09c5e4c830d22466d73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA3CFBCP%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDLHc9sU6yIyz5ukRx%2F%2FHFNiwBtzMI1aewQp6CIfaOfcAIhAPc3ftlX0igr8Fh4LFEWD28kyuSU4SFzvguhJsNXjAzcKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5%2Bmu2Lajt0xmaSfsq3AO%2FIiJ2SLol8LqvMCF%2BiEjUGJ4r2drW63fZk0r%2F6cQb7Kk619kv%2BmxT0c5RT1PcSbGXRjPwSPvDGqh8DYc6so3KN1dXDFiiM5IfaG3Y3cHJmdL7gp1AeMRnQ0AVlRLYfNwYT5X9%2FfoOvSxWNq7DjPcIzparysbC8fnS%2F8Ta5NUS4QTiE0G3Mf4sU57J3%2FuBzIyQI0%2BO1vRuHDw2jNBYciY%2Fl8WHm4%2FAlKSxHZ3dG0zdiY7etxEGOe1hn39a3QHHlP7xxg2OxAUNNnIus6I2ukdlcaMtEqRLsyrhBJ0Fh3PDuSvEx7tTyXHkwUAEf7lRdBWom%2B8MHbu18nYr13qn%2BG4ha3GvfUW5r1%2FV6mNk%2B33FZq8yMcdtugT6tDJhj5jy8UmCfdfCjwGwtU5AXjFlIp2%2Bg1Tf9Vm6aH7M7SnKm0NE%2BqahLKK4FWt3TS9QSDC4viV2YvnXx%2FIYW8YxReBa8tx2n73Y7BN%2BB%2B5ocCht%2FEfPAJ2hTLanQr5%2FvM5bfhf3Vu7JLMCRNS4z7pjlr0uptUJfk8n%2BMp45Q9XUWY%2FWGrAJo0xrxrH10xJqw6i2waiUJLGSGxuuxEy6lZ6aOXRmuzk5HYxcyVPe7SqvbcNSiDlZ92o5qaaDv6dzEqVjsDC7%2FqrCBjqkATAzo9hQzKSFyCCEBtoJj1zwwTWXXqgjmPw3ZZUqSozBsugmj6rTuJwv1jI1ZhVwkzBAcly7gRfTCosBhigKi%2BuMw4cBv2b8wKYbwmuN6z3H83%2FIWi5f4GYyEQMoxV%2F1DklNQNC6gFXbWsx0RdPLiG1YHW%2B%2B2VcmSS6V43V9zfnQzSb%2FIG%2BA3SDyvOVtwCUKVQKCyE6w38k60U7XbohUrbo0AlVW&X-Amz-Signature=95e7d87fe4f2a4922c60edb82177769c57a65d04eda9bbf981fcee97742f04e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
