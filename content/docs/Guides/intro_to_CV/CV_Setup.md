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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TZPSPCH%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIChLgt5kA7l6tEjTxMBpQDqUojMSKA0WTPBWX9IpI6jkAiEAvausoQCNUEF9hFV%2BGYGgBaBKVOxmc%2BkPkCj12oOuDM0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApFfjjDXP%2F4SwxaPCrcA%2FTLrR%2BnZY7Z79NMsIUtZnjDyJmChrdKFxLaOy3Uup4EEo0Y8ILT1c3nbiSXOpGZGG%2FgczajEShw5bItfJDw%2BSo2Vk4Zu%2F%2FyGT45v7mOAbFXTNJ7cOtbgcZ0X9dMee5XuwkFwaU3sfPplyFydY1UeYCPvEtNXkTzGecwa9hB0BcDMjFBs8VT6YU4S60DZsmSHh4zUBmyXVML%2BWDm9%2BbrcLq8dCIrMylbqTc%2FfVdVU%2BL43%2B7UPK5kqj%2BtEdsckbd%2F7xfnT0TzlIdwGz8tVRM424F8OngskbBTDRL3pHdcxmVFyyp1%2Fo6Lg94bQvxpVmiRRVlkUfaYJYrAFUJ4irjU2G3F%2F1%2F8K453sW9Qv5hlBBG5IMNsJdO48fDK1t%2BaewHkzVPOOWmcikmU3kaShWAVqRxH7dmiF2u5qtHNtX2twDaqr8OkXb3Oi50jL0X3lZNL2ywBIKR4y5xeYqhE2au2bn0hqVG33AjaBrKDLEqTDBqujEpJuWQgH%2FoET9lMbKUbvtnVj6mRpjlmYLhM0hhq0JlBgTxmz0Z%2FFp4jSHTfZlTh%2FM1fVc5KF75wOfWagadraIb9iSAYpVcfOi4EWuWLFX%2F0ZfHb9EIDE97cYFZMTzbZBptM6xShFktkVK%2BgMJrB3b8GOqUB1MGKlXvvPH%2FZA2TrjPVEmZBHsFcQnWw8e0UtYILsg0DOA4nCN46kMLfQmxmWmoFg7Fe5feLtmH%2Fo6IRaaItVOZEJY5DVKa2o89I9eOeO21k8FE3HK4AMYchs%2FI9%2BO%2Bt74%2F6hZM5fGvDmuyCYbi95L5zBkMUnk7ruYZqOfkUlievgBLIVw0Hh8hP8XBTDRkku9eEQPlXEjgjalM6N3JxqKt5yrGGu&X-Amz-Signature=535325d122e0caaa0b6a05712a1fb0db4a8384c44d5c3c6e8b848b167f4eafbb&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VQRLHVX%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIA%2FtxND7yfxURarF5q7ZzUFr82AEdWlomTfnsXXJbPUnAiB%2BjJ1oM11lCpz8vVPmwd3Mk4y7JYw2yXc2KpiuekUYniqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCRYj6IyTKBX3xwHOKtwDPoCDthxzDKLQT7ThpYU2oDg%2F5fxGJmQF2buTgx6u0aeiLZ%2BgKMKpUkh21djmeeolSRFTvUGXTJVn%2BECKX%2B1La5psFG6vBu16UktwM9PnzFHk80kV8ab%2BORm00DqiypdYDbLMRPj0acAeUeGvxYdCPGRlC8YnuZEqS%2BKPa71qJ%2BHIMQbCUi56U5trZAZMVUistG1uOkT2eEZzYqylrmoy8ALurDJkfJWdHtg1OFYyy6qOwLpn7cUzH82%2FXVRiWADUQKLtjFukHxSNse57T%2FJrvdnynfvEgp3EvDrmXJHK1re78DLlKWNf4QEiQLJB8ZbrtXVTYd06V46QYWBOVlHho0Filra%2B0d8CGxiHOgrOe9UDewwiD48TXCYbf9A2JfaQCXPMsp7TXGrE99WjMZUPpee9YnEGPwJfzGKK29CXJoL5zN5r9norJdvT4HnVRCZbRzWZbPUmozFeTaXC0CVsSGZWceTMtrs1%2F3eGdCKjIuu8NbLcMvF0XI9a1zLRBqdNRmUk7PirP1tjxP62C5N0kk1WA6CK1OqG181eCEnK21A6%2FEM8B7QkwPXLC%2BsbJ%2BhuTbYFFZx0E6VIG%2FC%2BV%2F0ry7w%2B%2BtxaxNrbG2N%2FyKuJYVqc9wx%2B8qKIf1sbO8wwt8HdvwY6pgEdf8HS4StYwqGo9Qz%2FMslY7vIspR%2F3HBoty2udzRw1J8q2ms3NeiXr0CM05MRNq7IfoZX7xXmRD4vc%2FyTIUyZRssMykU%2FDN%2F5NGED9pkwjYtPRpa2YqH04eVnOH2YM%2FVRPaZDRjO8H%2BpaMADbAXMZDSxTFdUiKE7K7wsczGcG%2FG%2Bc66GldsNW3XCRcPXVJGKCcF7PXVRJHBp3LhZf9dMmicyPcqi5q&X-Amz-Signature=bfd7ddd1b312a644103284fdce06e83a75ede202bcf09f00ead3da8d160472a3&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
