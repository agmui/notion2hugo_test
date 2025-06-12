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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX7VZYLD%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T091009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDDOvoitj0S9FyyI2sWgB4t730zux%2B%2FvmjiodIrIpMVQQIgZ6W1FF4945IjX6%2B%2B7mqwAL4eGM%2FrFoW%2BX8xauF3jUEoqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIncm5P5U8jHlt6n5ircAzw34JDWFcWeiX0wCx4EpOxylpNeIWZ5iZFSw5ynP3yBR3Uh3KMAK%2B%2BBZ%2BsSPKLvF%2BdSuejkcOkyPMNE8EgII2NTfzLiofV%2Folc7dog37haP981VpduatVwph1eJVYxOZ1nwjGQctJ3xigCauTgBvrNUq7YSJ9%2BvlbvQnHPuZ00qFXrppXJbyf6XCSJanf9O9trjJ%2BB%2FLhO7cgqk5Itt%2FS7VRHX1CPCs6tqMy%2FkmqPwNR4L1Wcgq20P%2BkJEALXiDYmw4XFRVs1ODlop3D3D4dYUeVce%2BzZg3%2FbHVEUCo3%2B4EpNT10Bcv0X22nLyu18OssceiSuj3M31ofgqpbq5L92zRLD4aj%2FC%2FaqH71r%2BCMi7ih4devQ1eVm6r%2BESn%2BYxKxP9Sc7NSnY%2BNUSZGZjHoEyL%2FSHDJfhrv5PU2HDtQxajX6XGk5T64t0PRiObd6kw0%2FYX13CZGoSxX%2FvIAzhKt4jp3Dy1oBW4WVm2JDHKhwY7WpcvuhqO9fgdr%2BRvywmvBi7pTE8UNczynceAfcn6Xo%2BQg9ObjCcD2PopEiGsRL0zgXqus0z7xqwdWW%2FSjpymhtpsp8UZsgfhYXtwpgQsEhnxiyyz7rwWWArvZrVui8eIXq7oAjiExZQAEtTyFMJmTqsIGOqUB0Gp%2FScRWRva6JSHpMGaVWjvSj%2BB4K7wsWsdm9EhkFr5gspHbgXfQNH0%2B7Goe5k7dXW9Wxq8DZ5K5fDcK%2BUYPExJnNFsRII6ruLvzwxiom1%2BWp4STyQD2Uj3TlZZWrFnya5s0egDPwgJ3veDkjTtb60002p1gI16aNBu8t6P02NFXEVin9lmGIE1wcrbFDVStjrp6X6v9hkuFMelq%2BUlEktDxpzyB&X-Amz-Signature=5b6368e09bbb454d6b4d6e6baa9bc032b127e7e8e80bd3ba82bca7da434909e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626WUYL7N%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T091009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDmqUa2IyC9Gh86bI68%2BRfheT0g1mwZeO%2F6cgB3617zXwIhALnDYu588wuVEpGZ7pxHsr3b83RK9%2FqqTmlaF7YEDBGRKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxT3ZlBuZD840KYuJ4q3AMuzy57sGxiDSvuaLIguvgzhsiHFL2PyXiAd2QSbAZ3aaDVKlxtt15%2Fix8Q1KuwlnAQZZPSmlNeUQc6W%2FcuhDJ9%2F92uRw1lZGxO3jpeQ8jzDELp3f2mwO9M8Zu1%2B1AA13BX1ZJVZYypNbbheTLH%2FYoY9FVk%2BEtzEdY8KrCAxTNsHgHSDEn37W7JS6iCXqXSx%2BbK7qdSoa543xZQhDgTqocqAL48GmT6gBdO4PEoxK2BwoUgcq1Gtc5gogK5D2D%2FlqA067NmX3njV63Yvb2eH3C%2B%2FutUL9Yi07WO0IZiwu3Tvk6p5tn1vRW7yHT1WRoMrppdsFhPVwpdNl0qD7RmqRK8C2CwS1PsoO5kW1ZnMMW42AfOpZ6p7IXtxn3Q%2BmZZeHZ08KPM4IcbNYaEnlaOpwOM9hkaWB8fx9y1VRb5QAK9h5LPcdPSY4Wq8F5E3mohkit3cmjbLUz8aEVM0%2FvQym%2FGwy4KOYewKPYmMIJHgBhVZY2FhKZH7iZtiiRmI8v%2B3M4jwsjPw1NyGqEsZe%2BKNYhKid6j%2BFxiI%2BOk%2B4uu0A3o3uuYQXcA8Ke%2FHj0rdxf0qTm5VuC1I7S7wNujhNrD50QbKnJ0T2PWpD4i0uGwr6SdUjqmmkxHPBVZbmeikjD3iKrCBjqkAViln9DAks%2BwzQVy5KyG3pXongFuAjtucw9z4LzYcQvZ9%2BdIZ1grydnN6JHIaSMv%2FAE3vJsTHOU0RLgJIVcrL4B46GXRvwzfnNSewXE6%2BhaO0Lf4NEMVUvlnJjQmtk12J0TtYod9QMg2FJAFHqSuoRqHRGAIwSjRWcvWEEJhCYbnl4OwWXkcrPJCh4V5DWUPdNYF6OlVeshj0O%2Flcx09E9wH9%2FWi&X-Amz-Signature=ac1a9d1db58693d55ae3a560d062c94e33c73ab34d5eb4c61123015e99fb4b4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
