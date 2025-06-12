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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K7CI3LU%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIEEIrk0sMk4CcxMEDAuekroGytpVmF3b1lu4H%2BBu%2BW3QAiEAyn23iU%2BEmsZt3BVepk8%2Bfj8HCCw6xxgQWKOBClUwZZoqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMV9BmHXUqXS5YAiyrcA5PcORUkTe6wTkDiVgBI7QkCWzb7OFvg0ShJv1RXq29QUR8pvCwG6Px5OPBtwpMtLdKwcI6GFfYgw1RWbuvNNbat1vbIljlWlOkLuQQibsXCZNuwa1yS6MeggK9yUHjbjgFfjL24ub%2Bio53lpmDZU2qOXc8G7G40pYAofFJwoRdZL2u9X9dOefcil6GABhYoQ5W5Tfy%2ByE3Ao3717KoyGj97%2FLrcj8PoVA%2BEdCLw6w9jRsXj06iZMQNS8SvE9BEjJdv5zMZe0VLvxtVOKn%2BJxEjuEflkcU8HxUem9rCGvFwlyIXdQcNBVFJPAW4Sz2fJwlAbdtGU6LnF88cCGxAa%2FT4sOcw2waBi3PxR2N1MxVa8a97arKl9wqwWu0qLNa384qZmLaBx9abtRwpqGXSq1zxoG%2B8zmZcsPJpnYEFx6NbcCLdBh9nk8nMFVk84Zy4lJw9EjxOcemucR7YfwqtvpYYR%2FNnO4mgzmDWmjIuqZi3HWkStjW9rJ%2BKxlygjmosO%2FKVySXp%2FSUFzuXDDGTHU62XW7GXxcn4k3hZXNeVFOWPmKqYjOzFzr3ggEBWZjEV92JpVzoLoP7rDpiLqAHvJyOEoW8Mj%2BZDzuvLxnDBmj2GHP69ZtFwQHUpmbDXsMPvBqcIGOqUB359kRxrXDGKWVocHdn5KMmkycOEj3C9og077s7%2Bys7Qa00sYIKuGC2aUxDXUzxJXt7PZrSWp49%2Fsw%2BsQF9Alw4o9ZRUWTZDKY7gS4O1fQxI1cvc8mEgAPHsjOOjbeBSJg%2FHLjEJujFDclpJKvEPhXJ7L0nTkGStpV4w%2FrdHwshGsZ3v6dIfGgk1mHdfLs%2Fq7ZAUtEjnR9T5BmFvpv%2BFEV4u3doFd&X-Amz-Signature=331e1ad3f82d8be567b0e7a156835ce57d0c0562b7244bbd2d29f9a3844383eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7GILOFJ%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIDBK13a%2BEFmT86UPoOvyK983t4POfEQl6WbBiM2AnmzSAiAZxjSOS1D64HxeFhOIjsytwCUvOb9feZwsAe8xJuALZyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuiyFhpoxNQu2qmW0KtwDUZFl8VPi6ItGoYs5M%2BleESNrYVy%2FYagxGvufv%2FIkbdWEf0%2FdAkPjaFgiXwaq%2F45sXZ4Cg6eVvPakqBfeAF8jqfp0o8jcGVeOkIB50Jsy88EqBgvm7lQDL1m%2BR5B%2FJYJz%2BTlwk2ZnFi92a5fWerYNFMgRCJrHJRDjyiR1WduidIzsBJZIRzcNQXdkH%2FXM5E7CJ2xppsxxYQm7T3Fe2902pmVBFp%2FbgIjVn0Zf%2F1cQSsUnHoxkqKUhMqgB4bmrSNKclWr%2Bewp62485ge7a2ob7su0pNLv86gwnm6tqlgcC8XIUCDKy5EiPE7MiAhm61hvvMe1HxvzBBaHQcVrtmm92D25GIBcPVZiKUvU3CvN%2Bew3GXYc%2FL02xb6rb8tRsSF1HOkM%2FR9EK6NXpZFoU8zZzeg7oDcKTPVJa%2BNrrFtpEwbhnH2LesybLyky3PUkcLoGuycusb0hAEjTOKZKCTh8%2BKTffgUF00YpOJDWmr%2FMBlIyPjYPX6iNfH6bnP7iUG9H6RT7V3hEjIHI1s1jjVuMW7yQjE4YClKyzccNdV5k03L3LOmxtDVn%2Bf8rbiIncHiN21NUaEg%2FndAw55YOzl3CLUBERp69kOz09loUPstOFSeNU12SOfMLHOzcGeBUw98GpwgY6pgFi20BzeiGDvlrwdh%2FJDBtKgy1jdf9zm%2Bl0kTErKPjhCndqSvxDy2AI1SUm1jdz%2Fu3jnOKRALOsz2PQIPcdxHTaeWUSOWswZyeVkgHJMAfCys8V5CaVaA%2B2bSyYWxEFcUd8asvMhILillbpeUlVilYiq%2FMglpd33emR4wiNGjSfLtsRywkVlqaXfSqYuop8AZj6oBzkt4v9MK2JM8g9cl3nfh0Ewsbw&X-Amz-Signature=7914da2ecc6b20247f1b21a6d60a1750c0a9c09c5c39f2e3f898fb81b42376d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
