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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7AMRJDF%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T051702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD7nrJQFDw3yqdtsrbgD6O8ir2PuWE899Ttep8kuSjT8AIhAKNkWayGwNhzjBsdad3BA2EcgYzWaMg9agbBEFNTu%2FAAKv8DCCMQABoMNjM3NDIzMTgzODA1IgxB5fe6zNCVhge%2BpRQq3AMkrUbwaBuaX6OIf9lTw5%2B6aA7hR%2F%2FJ60DwG1aBE%2BnCjSTZ9PkFC8rwPKm%2FzjOe3a9UUbRKaiu%2FRAnQTktv8d6et6H8GWiypp2bDGJbF40781pOFbJ5wcL1OrynsQbceK2i%2F0mGQiPNOHjqbsktFh7BtplkscGBf5qyL%2F80MuRug9lBa4BHjZYMw1ZlNxVnJCL2UCge%2F1%2FH2mhQFhw1DAanF94DV%2F0nJcRccRtAsSPygMpIQuuuWnCfP37My3zJEPYNZssoB%2FSjNTnqbOTZEng1fSckLGtRJXBVJR%2B%2BO%2FsVx0e6ArS8eJ91XWv4qA%2FRzKo9QjBVBBYrl1PdoWjNKWzboeqtOf4G3%2FNUlifkZLwGUhaHmrWPwGN86Oa0K82uOLY1CyZDrs1hoEpOvCbo826OrZWJEE2sO0bU8wwgLR9Pj3%2BoEp4XHeqCSanoZXsLkPOoHlKmGJIYENAFRCnACsXWgBvhoCExLbL0D5w5KcVVEfnuANk8GtqlbRmvmKPiWTAzBu4yj4HTbJXMES4zWtk4n5bakNnaEPM3fPun%2BwUfayhKpI2VvLd5xlXUhjCXp65v%2BVrP5wPx7%2Bk9cOei5Dw2lLA9IkkH4fRBhEjC%2BCL%2BZFfYnlTe7tM21qcAgTCezNHDBjqkAVGvMCqfP%2Ff0zlsamLfHQ%2Bf8E%2F%2Bts54DGsmWEWdebx6IK2JNkL5GFxFhneg9THFFdtnMvrctuOqeblsV0H15uqQko0mBxFCcAn0b4Pr%2FaPX6Ymnbgemg1EfwST1T%2FXmMh%2B70tAggkNp3ANEdQtkyT4pTCdCVprEPBgxaTDtYLDjhlZdqDUBHUNCubV%2FLaxSDn8bKSsBy65156nBpIDGPRVWIhygE&X-Amz-Signature=f9ea81e11968b041bc17cf3b7699717b234f62024f7607ebad7eacbe58bbb6bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PI7WV63%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T051702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDGbOVkih90P20JHTviT3oRiwdDZXM2v0N%2Bhphk7pWhDwIgXgkRYvY3%2FKwGbw0PFJPoP8YMrecjWNvqTEpGSGLKY7Uq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDKdU0pzmVc1RE9XZ6ircA1YSd%2B17erMmeEL5l9zJBWH7xtNDlqY2TTsKU2M1AWevk5IuORSeYabAogDXcIITn8PTOwk08I2S3cuEFxrW04MP0bSQp26cKLlnz260%2FTLKbW83iNW5Dn1VhvcYiDiE%2BO7dWeE6P7XgoLqKxUziWrN1fIJreaI3TJsDcT5Ei3htzpwU6WJnrAz5%2B5lCtHc%2BzUSZE40sDipthh1OloWJdhBzMPsLY1djgVugMFg%2BN%2BsEJWFwmx9aQIEZiOwznjxB4wtuVk1UCJ6NdwVZ%2FgpadUyatGfVRkrXWiCNQpX84W54YNLO84qyn1DCBirLD1Wp5ezcLo1x8ECWHFfDYyq%2FU9e3sXmRPhxdxFoCf10MWStZ4r8FhXZlYL%2BmCLqX5OBhKnGpowX7f1DHICiWDR%2FJ3AM7Jl0mkyBObXPivxi2YYdO4EtuRE3wG%2BPm3%2FL%2FWN2EUpe6Omenf7NwGx7tnRTt3jrIXisXTps8YdwRoly4oMWGMnf6wkUHWNNJAQ6ldMmC9%2B5rP4uCXDGHTE2FzHq7S3f1TgTlsFIZPxxdhesUimp%2BBwfcGICtGXcGwIQLeRWY82uS9FdM3VI5BwDsv74asx2nXTG3kI0XQN0wvPJyshq8HgvyaNmzFSkgVv6UMMDM0cMGOqUBIHCiVkUt62JOCB7NzvKwNVtZzoy3iRE7jVIOPzlN53utomRbzVKf4UzHcTSCQ8zFoJumxij1unvxGRB01gx7ZWs%2B1NrICGBSj3wrx8du1sIg%2F3W2BrpIz%2FZ57rvNDP4xPRStwjPpVaHNkLauWZ0kZrv%2Ba6GR4vEfxwSLbjjIDEMY7MkqJYNRKhswJrFVLxpUCAVpwOzMwQWzhEBMbuladhU14d6Z&X-Amz-Signature=21da5a0d97dc9a30406ffec5286932eb20b8c5db30dc4c6135e3021eedc3ed39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
