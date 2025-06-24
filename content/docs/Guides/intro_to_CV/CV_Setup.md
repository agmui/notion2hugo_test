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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PXC733P%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCFaJ%2FnXAC9A2wH9KvFWy7g4%2FDaH8WM4scvqSoTKeXMgQIgVNVcE%2FWrfqW4gS0T930wjaNF4kLKb8frBt7P49XFRbYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKDkg2btgWKg36P0oSrcAzIogJzcOIIJ43TrD9QdcQqJpBOW%2B8MtZg0E3Bp83njn%2Fyakq7rKhuPl%2FjWvcqjqo00ObxhpZFbP9faJonvxx4yjNnYEEEmpOXzj4lgqn6hiD51nVmkn5%2Fm6z5Nxlksw6%2B96PPQ9098V5LewcCeNBGGqn0o9lgnXzo8pn2Y9k9U6iU7oTWKGHIpSa2I19vRRnId4knth8PIWjvxD7knGZvhSO65H8IYpBtL6QHeDk37%2Fixu200rlTkyQqzWHvi1cXaGyGtR1zvksOeUqkuqAN2csYU1geiDoZ38q4R4cu%2FXXprJG%2F4jlMTCXZMCCOWolGf8UPxfa2G7zxEzzbfV3MRIydKWveDqqlhJl0WGos4yN1%2FO9bn%2FmOAF8w9tYSdYJlG1%2BBm4jOLv%2FuMMUFUyYe40VhKTZ2JUCSu0My%2FtSZHvcMLHrQhrOEQmWh83ut5I7eiRqf8YK5So2LXEA%2FAg%2FYWzlPBVIAAlQfz6JmC%2BdLyXsYM7S7mk1FCyCjnrtASOiIRvzG3b7SIxiG7Z%2B%2BtFe4fXh3hsuLzsuvYiMwGP6SZxnUabhMhSfoeLYDVhlGQD%2FmaKjVucCZ5qoUtV2HXw41TShj8AFrKoL565rBcBh1d%2FR7FXkE0%2BjYGjxT9C1MImj6sIGOqUBWiCu83PVR%2Bm1XKgqUYw5%2FDRdrtGjt9ACgPl6cTivvkWEjkzA7UgAJktPxrafdLOXY14hNMivBHVcu86TR98cE%2BwIlGj977W2ZvEnuFNGgEgEjdSPeMfiOM4SFdCRa5F5CudG%2B6rhP%2FXSEHlCBlPHu%2FVm5GNuRZGsjAKWxLwc0hvFofMVWTd%2B0upCYh2IXnE9O%2B8FUvnuo5977%2Fj6Knjms2OFh9TD&X-Amz-Signature=c67f086307a0674c13689866cc288a1c3bcc82262bf12fe2f701258865cc9da1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSX2O4I5%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICWdJ4QAHPv9pSigTkGZZ6LS5HzbEG58VztjSH%2B3QM6fAiAL%2FwtaP3fEUmevPD8iSY327%2FmDCoU%2FBTQgHCIVM6JjYSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMW3Pl7pcBFPEmgo4WKtwDOWDa88Un2X1vKc69ohPCM4rm4j5yCMwNYEJ3aYv8aVvXkCHs954HKCmYgXiiKhXA%2FN0xWc88SaDAK2wTvqqvCEtQcuV8B5eu0MgLMGRCxu7g4T4MCVe8xXvpSsgKqpuURLkaKCaAFfm%2Bh6RrRtsJgv1Xm%2B8W0USJO%2BkVAeA3p6Qjx5kMfOFhLTGThoT4h1VPcA7KBfzoM4wupLayDTCq%2BwKeAiiU4sxfx1R%2BoxS%2FK55AEEbQYSTLsaNqri1zga1kBnSwbOwms0yJfQcI%2F%2F8epFWLYfTX0PtndnGvgY2hP%2BxY91S6J2QDHzZQVFEM6CfGxeVxV9JoDmMmJnhlUIqMevAtdoCGIi%2F1KM5vzq0Me5%2FNFA1zIT2cIkknc7IRr8FM7l1YpRHMDOEr1OHaxNYhjRZfaFjSDucXBsjmNYO8X%2B2PLiZ55nkMTroFG0Op83B1WFtVIE4pWpA%2FhoBDRJP2jd85H7l03obiK0JTfig0FUKyz2tIz64bzGh37MW5LryIKF%2BiS6uV1NU2FTBOukNtGZZNazHFD2grcMauMqRLPahQKNO3u99WHNNYlKibHoaM9Y1QnWAt1M6fF3YeegusYdmNlXEIE3n7OnRqnHQKTQ6bLQE%2BeEjtI8qgbzIw8aLqwgY6pgH5AwfHqSUxMg6e4jjsMClO3EqFD420v7ETjqEW5pMC5rYGhIZnZvA5ipUP%2FGKJEE7NDDLxbRXNsVgIu1LG8hQxQ8YfrpXn%2FFzAVqQIeE2vUXf5QxngerMgE1Is5IzPg08UADAlJR3PWFE4GaKgDciFvDb1fDmHzLR3d8c%2BqX%2B11O6Bg5NJ2Jz1DzlAskZ1fo46P%2BCdZBNjvCiMTzUuy0pDeoJ0p%2F8V&X-Amz-Signature=541f64d8bac1ceb0c2f575787ce0b6516b6fb1cea19994910bd2c7799b2bc6bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
