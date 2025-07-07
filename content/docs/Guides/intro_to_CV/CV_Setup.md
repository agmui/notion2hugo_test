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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGOU5BLC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQC0ZEvrULk9%2FRZd2oBfoVE5ybYpDAYLFO3NZgvKvONhQAIhALojGeh6QreTSx9A5RVdkSIvuNKOKCUEMuJvb2j7Y53wKv8DCGkQABoMNjM3NDIzMTgzODA1IgwMojBy4SNt6pr2m1Qq3AMUtDvfptv5HTFM1lDIlL2zwl9eufRg%2Ful85vHMAFr2j1crH%2FLzh3WXuCQtduq%2B3QmNtAzNCCXG1F2lkBXnZ5LvO5X0LVxMMP2%2B%2Bp5YZKsScOTu9fJnkn5uqdiHfaB1NQkcLWHhDFRIKzZVz6j4upwWwlE%2BJoxfMZCXpjoCg%2FgUy1sr2Do42OX8PWkuH8HUJ9%2B%2BFDM0yEcgcY8PoqtNTUZpwWtVQZdf4jwnqh9EuUEGJ0qDBlm2mtVBsWkuUJoieK4snU1ruz7PrBbZQ3%2BviLSVd%2FCGKlkePQMnW8SE0e61I6OePHJSDz4CIgMoa%2FhIZ0%2FkSLCGB3Eh4TS0QKuZhsvh7OMJaxGCtMmQVDtVGnAV9lMzX2MdVYILJMDXGLi82szpAOXSn5iTprx2Aiiv7k7F2nfaXlD0HeJtMuSaJlhzQtbQKQRpUyHbUcBrLxDxnIAQ1s1N4I%2FdAFIqZuPLtWiXTZFGFO4hgOQz%2Byx1eauOopJ57%2FXPwzTS1uPK4sISib487bwAqSQIBMh%2F1n%2BLhO6JfrsSmMsUPNgKxgqLjkAss%2Bk5T%2F8wMYB8lerL9lEbx1DrsoP%2F3YvLvCH3RAsGZjYomSAVHvijggbasSCnbGEThOKh6L3lxR6PvDz5JzDbkKzDBjqkATqtpwXiip0gG3fa60FBcMRvRPizgtxIsrlFAW%2FY2kViBe53T1e4Jzyl3rhHql7Zuqe4JAsIVsKkt2wJIjG2CT%2BHfM2B7lV%2F0CwHWfxVMgFJTLucvWoyhBn8fRRFgNZIkHNOlcLJsrp%2Bidd2usXKcdHKDnVIeflWAaJYsRJZNfhyPX6ib67gGTm84NBAlULPxubYybwX6RMDxB8pw46RszUnk%2F%2BS&X-Amz-Signature=e29800ca79797cb1e3bb18a317f54f27bfd3eee02486d0c6bc07d97d89469126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGDLGVC7%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDCTZA6kHO416xdFPVWJZg8E9PjCkI4EeAPMMUz498m9AIgOk%2F9zR8Ij7gJYuAwy14doDZ%2Brj5Hfvbo35hbOuXl27Mq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDJVo0HiNPA%2BKoC7a%2FircAw3r51dWWkNl0BK7QeJZQw10C8ruFxK0PS%2BvlN73dsGKLntmy%2FPJEIYoftJaFq9YFfev%2B7cPXUmrRPKCvDj3CMkLQHPJDa51i%2FR2k%2BXZgrQOUSTQnM2SeBd%2BQmImXurJ6482ry1aQbqR9yi1BEUpeXOZENftkadPDPZMcdF0Xn9Jo2AgoCLqUqLmR34na3hbfU5ESvojZExnFEgNYLv7nbdCq0tM77aeezj00c2gjSX7zu0PNnx1j3oG1SfUueSFqYbea%2FdlqFxSDhVHVVNB6rioLDbnQkxAY8thWeihMdKVbjk7Z23mY2RlvU%2BnAcDiExFOaLBlBbSes95vY%2BU66JgG0%2BbUGUnuRjUt6zbBnBisMScpERAEx6vLqXTxuqoMzZ%2BEzMMYT7EslnGeiBfnyKfgExMdMvgEmzAsueLi6hxnAXLTZLHljeA3HeNqYtdIUvJMNf0gW1C3Kpc9Ct8lGoLO5W53BOb4CYrIqUzM6N%2FH4s%2BjJNuJda7tcVLpZX87%2FwA%2FcI1AwIRXtEhiTkjicVCDy03dBlmTsOFXu1J0wayXE3jWmXfR1mKEuvHLTuP%2FHMFSj3CAVwOptliHP8DTuaRuZ7Z7BD7edzdZd4Zi8oPk2H6mtYRae990zN9sMLuZrMMGOqUB32yijTj7RueWa39kZn0wzIvMoqqGRdDmvqjY52%2FXFJxqizPOuxUjhJKJsQuvVx%2BedkLhp8lcrOUThzr65FRFIdeioKSEVX4rA76pdhSOhgG%2BbUWeqwxPE7xSeWJ%2BiQn%2FigyYD1eOIymjJRfFwLsIxfwegFB1jYRQ4BAa359D5jHl3d5tx%2BOM5cl2eXxUBpu%2BOyzX%2FIL1s6gm0msKEEPbyIX3aQy%2B&X-Amz-Signature=05c57d558332f52a8bbd7074f19bbf9a551ef92077b1317911e4104e05ba4d3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
