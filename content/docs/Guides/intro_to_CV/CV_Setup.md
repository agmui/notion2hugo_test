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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3RRB4ZM%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T140205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3zxoVwpawuORyybWLqLkbHYYmbJrsW6I7VyScZTqmrAiEAh%2FipOjkj9kHB8i1FVRWunQX909tYHqeODPbLFBOLq9Aq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDKhx893aWV81UogdHircAyK50uKRM5MuV36SqRAaRoBOCOWZsPUPpuR4Oh%2Fea7PcSpjqBybn83JUpYbZ9JnQdXMNPND6%2FnX4Tgyrv9nBW5P%2FycK3GtMSaXpDloeJboAxiENkGoehP9hLiZ%2FgbwEAuT%2FTDK2vY%2FWGPPR8TF02IDqp%2FMOVwSikGTZQ6aS46p3NzIDSN7eKOZhSU8sE94UTyKpp%2BypmKVXpjIFNquJxbbiR8VvF9FZz%2FSnaz7t8QUhqDi7PoGHqEJjWvBN%2B5igtoRPvxLx2QHF%2BPv%2BuVg4X3lbaryQ11F8oKVPOq7JRq%2BOVGPNJsi7dQliDjb21QMtYnp2rpveZ9WrXwYH%2BABKgeAEBxLh2gbI%2FMFXrl%2BRvI1ndYw9edgUM478Aw9d3SBbdYPfTMAUQ5Uv2ngh4u8DtQyEupKntJRWcb5f4YqxpUqU4MYzPFjt1g4mH3d7deoLu6zPSN1UpvGjvloA240dt7eywYTJ1aZLj9UgQv95Srow%2FwinxtSUl5wfpv73rApXP1z6XdYTfUcZgMDLbqia%2B%2BSkFtF%2BoTrlAA3AdfQUpt9oo%2F0Rr2ZRjpxPq%2B%2BMXcPO5eX1G1B9o5AbiuiF9%2BoKs049MgghCtH82jjrhyDCyj2eRb1jOh9OaklTb5NrBMNz8670GOqUBBYrDaBGZO8%2B1bllqyQQ3YY4cxMKo5b9AqNHe8BQzAQMOZUHsJ4FTWBwHpPbw4MPweGF5MUFG%2FyZvxVurd6MEHgLvhYSOoQSEHZqny%2BcwXDZ2aTi6bCBsUKdxGk%2BBnRWhEkO9c%2BaNrxWyYODG8R6eu8m0ymHsMPx%2BEup5mOpfabU%2Br5t%2FFM8eWWwAiqMLqhwBHOvs8aR%2BB3JBoOhKOrykQv8lPEs5&X-Amz-Signature=474c5dbdc8fa4e4568bbcf6f743555b3a0688b6efeff39bbc49fa22a4eae4de2&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AUVXC4F%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T140204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGT5sHhkkalzmhtqbHWz44v0V1re%2BF5vIFcnFCxYEMShAiEAxhHdoWfoR3cbhwulBYArgmirK%2FKXKrq%2BO62o%2F7wX9E0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDMb844pwH0vyme%2FqFyrcAzcwOKDOF51YlyiOaAr4ONqRAS3XH%2FPEowknzo5lFQV7eR2zUlo461%2F2RFzr9ZNnBgNZVIOGhX9T5%2FSDLyy%2BQKCO3LEJv0mOLoJDZ3WCAtWCEiVkschuHWWQ31Jd6bPY9qhHJeiJgHGv8m2QxColwTZLBoCPseIKv%2F35sIaSdSOGAX04iqMp9Q1grVnm7fitGnCK8bgVKKmH%2BOkmGXka5geaGXXh2S8cSHAcpKx3KXA9e3sVrv4Txm7hGoXaqe2ZlDGo7YRR851P6AJlTxz%2Blp4ZzD9DGud2KWqkP%2Fy5deW6612%2FIGIdSA1YF8p1UyibKmcpBTbcWgeJV1P0UAdgW2GJQ1gI59TD2hU7Eh54%2FAEU3Bu3Nht5BDTqSUAK3z4afQvBO%2BYF9nBtyz29WR7gPzreRf3Thn6whjD5juGXpOohc6JZVORV8XF0KZbUyOUhlt7By3%2FY5sK2vbSijdX%2BfTUwXbwuShk8wG3eFPxd3jokVq2sIj6BGog8hYC2Dz%2FK2arh431C0N9Q9qskBdOXVl%2FdYVijhiSexL4CAy9S%2Fvv2C2ArYg1L8IXJAepQ6O0s%2BA7wNSWygt1W7OcwkzIWZTi%2FhABGNbde7X2XqGmEDibXfXaHJRZoDaE2x74oMLu07L0GOqUB16Gln0p9aJ2YKXXuOHqVy3V9LRptoguWSBMAYsdrnzbOleSc65jq7ooeMDrXK049uyVr36u9z2372GnfWciuVBQqxnm11zMY3Qqs%2BwITQgY5hnOnLGtTqjNIs2B%2FaoeZWGAJrX1ZxwcSXhDgyvSMyMutrnBzBVq%2Bys6%2FoISY%2B0rYaswSjBgu0q%2FKX4R8845cSSymcgSCVmt8dS5piL0tC8gIOleX&X-Amz-Signature=95212e9c8b7ad8405f5f3c4ea2e1bdb218f88941d274c587312f8ad6dbcbc069&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
