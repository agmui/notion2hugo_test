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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRFKP6IS%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIDZHRKewCbPSFG9XVXuwvNaHYmK8v1lzHtz5zENZ0SVMAiAwMW2S5YS%2F56WgtcoM5NjHt3xvrKlsL%2B6a4wv1gckleCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM07DdTisrEwyyLGCRKtwDGkYcr%2BUwhyv5p8YufcDDzdnh6Bf%2BHTZHcrH9WnvvF%2FThkyshEMxt0RHPdQwyBV88aQSkVxBH%2B7Vsdf3E5s85NozmPDW%2Bl%2FjmvAk6OUFY5%2BIN5INNmvBaIWyxrx9y1295gCxgE6e%2BDlx6gwFlHubL9XER2gXhyTaR9W18WO8jbiDjk%2BiVEAzLnWGavcEXCLPzyIP8v75omvW50Y0ZBOD6fDFDksqZr5%2Bp0XAuMHTIEj2w80G87VZHKu5mun0bSQIl%2Bw3FKoMnoqFtTs6sHC7ZF54qbGoUEsoEW%2Fa00s7bMHA%2FmI7rwnJQwhm9EPPVopCyerui4%2BBNEAN5GIPgmUOrbMK3bsfhhACNoxk9ra5vWJiK8GkfX0mWBXqgNGMogffqc5C4iRVRZK7IcQRAvxFU1jVzp%2FrDpOYer6CJtJQGBGWOPABOepGgYz%2FBL8zANrpEQkjUzIPJLoDxWeWw3DtC52sSa7xgrJzvazUw4Ne6IpfHuBcYwx7CmL6LO5HvQVw3caVgM6IrzALjwvU4FBxJOveo9NCaYIpLU0Muj%2FndKRlKHahpyCUG8qthFzdMQptGykrvK15MJ8DlJdgq408fOznke%2BdkvUtzYqsBlBjJIaf1S%2B5eIMo9xKFv1xkwpbjswgY6pgFqQct5e3mbw1k8ry1WfqBQ4HQrrcF0xq6rXA0LjozYUhp0I1rI2hsrPSzraMG3VyBzhic%2BGcTQFWePqYqP3I1crpZwcvxoQvGad79yKZ78iS3tea0tA20R902jz5f5RKHl18JoZF99czFnLVWCnKJ7uN%2BblXOKdlIhg1vzZ5Wi%2BbvUJ5Jai6jO7xxpHofXgUZsHStWaPJivBcufufvPlli%2BHkl1PG4&X-Amz-Signature=cc31b6e81656b6167439d01c85d3fe50a8217f811110ff6e612b62342569eae4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD4OFZPG%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDLMv5YeUf8oTZzznqYeXZLI01K8dqbqbb7rS9jaWnaLwIhAN3xsouNuwkse071O0wk3F%2BO7FtIKyH0nI2%2BFaPlciFuKv8DCDcQABoMNjM3NDIzMTgzODA1IgwjWCSNHVOXn5GUp7wq3AOaIdqz4CLMTlNE4JUugT%2BqFi1iYjfTQ%2BFjwpV5%2F3phKWfExj3vTgYFOfhFWbifU11Wv8%2Bu8v%2BbtTzjX6WpFrDJnsBxlkMES4aV5iX1IIYxNv%2FSPxIhsRqIdD9UJjfdjUfjcfAEipk2NNQiWmuOS0fpSmaxdI2VFURYtLszsMuLJskcwkfwpG18ym3LMSVjxJ1u21yfrZm7RJFcMNO%2B49AgNpsCQK3iPoLYi%2B8kUvleTIyyYXhG5nHvjTfCKxSp8cmOT7UdjgPexz92%2F7vKLZvGZ7PjTnB85LJqijXca62TOekNmqNBQieRfnj9c2UycimdIutjZsbF%2FmuHTJJjw%2Bh4MLcXAr36BnNELDBT7zzUjBJ7voEqIhRdzxBM1YtJDQ8%2FbgwFlzja077WZD3QDp7Oe9FuTP1rd9hf51vX1VAsiIvwXQuZ4POOSLGS5Vq9CQgSwrweY%2F1mNT7i5XPM0ztzGkNUC7aiXt8mhaq3zuGVXsoplQwgkFltote0nu4rzXTI1SuyvTaFLRQDODYlut3Ng4mamZ6hOT5z2CweqjCvhLTl%2Fn97w3SGjtK3jFadSK4XjFEt2VRajfyR%2Fsxo0sAhOpJYtOoudO3hMzSOg5mSs%2B%2B69CSdW1St%2FquNMDDjxuzCBjqkAbd4%2BVVIkUkqVQ0h8SMmgOhnIkHvRyeXAYIgyVE%2BZvEcB2vhQgXmX09fneZh15vT9SbNwQnXRqAPwXSjF%2BBDsVDoe7lPfQ6cNDnqETS5BWr%2FFoD89mJMJDJvJMvF52lr9R%2Bu5xoLyKXPTKQ9%2FSJeaR2KmWrHlMlTibc8T2EBWKSwrT3aYtDUC4wqYI29FI0t3kNa%2Flm8b0fGZRuibukxXlKLvoCD&X-Amz-Signature=02e46a130d08693360010eb780cfb2a6bf25422d80a6519d94cd12512b899c05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
