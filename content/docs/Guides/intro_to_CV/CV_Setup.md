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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DT5643J%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCICcxuX2XSvrMORBDkn9fXKK0MPgxPtfYTvx2UEjQXHK%2FAiEAyJo1QL8N6JX2YBZ1MqRUAHd4PFpvFnio95mM%2BTEfxYwq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCu4ILsQG55heniKrircA%2B930NYpRuFYmDhO%2Bquk47pUpLxt6wUYJKLX1rwcE9%2BIMR4YK9fr6w39iX%2Fv%2FSPeqmroFWM%2Fo1UeZH4pd0u0y2PRBfOPwR2I3gUwYfzsYuKrCCBz1wNHxYXBZ%2FP6%2F4xptdJq8ErtQS3gScSYYjJXgUukLXR4Fnnco3noQHnecfmPA3wLY0M1Oz%2BqqO2RqAyT%2BeSHEqHBSUgmkDTikvQtKGaWI5Y6K%2FyBkq8Hmo9%2F6jrggBTt1g8Qa%2FJREWCCFf%2B6QEQKPnEgGRBD2%2BO6JTnKiCZ1FS2N7Q3l562JIz0nyn3zgBwEJtX%2B9UzWzrFO%2FUTbmZD68i12%2FCFifetuR6lhbeFvL%2BovTRmNt5PpenrVAjVZOnvpPttYWt8SfVD5UqF9msmySfyT%2FLCbSn%2FySetDCBZtQAVBqaZDIUvrnVOMVEhLShiWICfHUijKhyI%2B4i%2BiVE6YMOL9goGyRr8vrctAtUtS7BpX0h%2FPRD7VyANzJxZT3TcbxZv4Bih9ISxcBc%2BG5XLv59pgDWnxlPJ1ps8%2BUB9NstUXxRIxH9Rn5R1VdRNnMm%2F6D85i27RgjDJ0Ds9kuEfB2gbFW9sNOStB9L%2FR3lG6F8k3uZUqtKGRypTuMRuEQEFeuhU2UAleCsYjMPWTtcIGOqUBozsu3ek3cv55QgqMcVrm9nh7XK63DltJaxqOdWzCg5z%2Fc437CdYtTrN6UDmgT4grh3QpbXboSKQbC%2BB8GbFMMPfFRbK1c4LGBFbXD50SyDuL0js3WCw4QaZGSzolsCIuBxh102zmStruj96O%2FnCnjPuE9b1RQKf5Y4leQjyyyCDouaYGAxnqyd7%2FO5IiBt2avo1tbTXtwuejuVuxV7W%2BJiJ8plb5&X-Amz-Signature=8fa8070c5f232eedf01fe464a104eeda4cc429cd54ce07092cbf7090e3f3668c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2FXITMV%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIDVAM%2FKECQXewVeUKcqQyg9OAKhrbEwpy4s2SNUwzON2AiBa3O7%2BlPjqndx0C7svi5PyIAFvJUMnLhfTbYREnBXfgSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMEf2OfViwNGez0A2fKtwDb%2Bw95ikWpHb%2BC%2FX3EjOfGpGnPBPr64au3BqOJbSwTJ89r3NXZzT1fk2ZFGDsNUsnNEV3pIboptyFBk1tjBn3PwZdfSogHMQz6GgIiquaoSfoxK2R1pupkaNfBL6cEGsWJUvGcL19OFFyz4Ac%2FCT0HUfr3J%2FauP0w9pIHod3Qe6Ig9B3QCLTp7r2lKx6y9oZtm7YDGq%2Fo4tejoyLQuUDBC8IeXko0c1Kq%2BYH5Dy6XQmqgFHQ5aZ1nPOsq6GCFZgBIZ4Yyf2Eg24SbAiX0lIdVGIGP5OKVHKyJE0dpFkfr0TMXoZgnn%2FGuvNEWZ6FAAVGWhghpYCTyw%2FYxD4WC3k0WPMiMsY039l7P950HgrBEfrI7YpggOjnmvPgqr55RjVFLD6XE1WJWGmZay%2BXuAx0D7JgBx%2FNH9klftro0dFCMFpPqtC6HK3O95xS7VblNVh5nTRmT9%2Fq6I0%2Bdac1pA7%2F3v2oax8RWvHQg%2Bn8nKCer985AkLXOXgvGhKCDVyKvaSc9hVxikc9HNqeObSjBHzrdAcMN8N4dT%2Fa32ik4ySaXRVlVcgVhqUcT1o6OmpiS6yYQtOWwWQS2SLbSlh%2F7loCgk%2FA6BlUE8bLkdvFMPADCmlpHnV6a0ionmioC3Ncw8by0wgY6pgGVB2PYaQDMfHqI3aqY4b%2FCbtVJdlx94hGAFri1cyjFJDpZho9bxjTB01f6VqmxYUHERbDpFSi07S8fzSCBkkEITaOSf9HeTQpGaoe6wdqka%2B%2BNiU8LAB4TV%2FprJMT6soVzGBRlaU1ZwkvE7UNjeSO6VMqhVTXd2a8xXTc2okqYz3wtYeLvvAAUmsvil3Th7XCG4fud3UXoBRAVL8LLh7YDTz6bVfZQ&X-Amz-Signature=476407f019d533d278ca7a7870f39ba834c361422e8781ca940dc046a83ab131&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
