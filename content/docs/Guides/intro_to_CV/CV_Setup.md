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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR7R2STY%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCICbIOn6FTu24e4vO6gFvy6W0SqOhZ%2BZJ0D4unxWwUgGmAiB9UQFZj986MBKgrmy5tfr6Baoj21AJT2rCNrbXU1HwUSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMskepmG8KxIc1OdSmKtwDLlJ531BGVT9Ywh5XjDxR2lWI4rn4t8WFR10nRlsKPHx0nvE3qSFc8xzqIsfOJxgbHEmuKmob%2B8HREaV9MonezE%2BQTBNGfM6ct0egBZIWIfWCd4pNemHiLYo9EJdmI1bgd6FI%2BgaoyTg3ryQEEunRkwtHoOancdGW2TJthIug9CmKr8eYxypim1AKx9LOOgGijtT47Vk65v%2B%2Bsmz78iEOj%2FcnkAaTF52XfkupoF8ICCrsQuIPZnPjVew%2FffTJiSkCCkrgjWPlUQoCQdb6zSPm%2Fo%2BquUtkS3qi1syYfSSqxTIFHOBkrzrwb%2FdMCk6oyZ8JKm%2FSqisCxYvQHrj0ufbV7V6M%2BA1%2FWcm8%2Ft6wPdpYfIjBdsg9MrLk53XWYfKfv2Lf18KPFM98YWpzSxWmZ24Y4arTnlCjegsM26M7ElmxqUIHlzPIBhyYO0rvnQ4ywusBAjLFIAR6OFTHdObwztG8Jd4I%2BFsUCezqkd%2BkLvUvmg2AvIJbA0Gqxkn3ObI%2FuI3lgqDaq3D7aZecjIowcUDcFJ2eF7xG5Ub59fMwtKrcAgXUSbgvZK77TILnEwttVGXvNqP0nKLwv9MrddtQ8gpIuoRc74SoCvPqaXYtWVETrSatLsjcRptRIc%2BwxREwl6bwvgY6pgEJu%2FHDwhFoiXpimkUHYA2b3mYDezNmRH%2F7KL7%2F1qEu8w0lVE%2BV7eSTIErXqCkfWxh89lb4tKQwZmjdpgzKPudp6nQeUmlFkUAAKwXnXu%2FtFm4tkWl4q5TVASMaB7a2owiVvou7q9yilE0CbvJTP0ZnERGDgmDKzVEMwV%2FzM4nx4Jxnv2eooo9HdcZlSRqfmoUqqj67GtstroFZhtO73tZLqykr3WRa&X-Amz-Signature=df3ad15c10cb6d113d1e511fd99441729dfa9ff0a7c3cd0fa4d7408b15a2ee92&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYCFWTTD%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIESRQvFeUhA5Th0fsk60raaLw1FlIx088bTDgqBLmDDrAiACwSnbk0GnHrk6cGybBk7OFTYYWGOUc0mACZffPe9LRyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj%2FnfNgQawH0qouYeKtwDysSd7oFrBYQiwGB%2FxczZhge%2BMcxS6QHotB21cb979sfQOz4xQGEMMYLTJKK7ZWU0L1d2enr%2FNtRYYP9xTjyD3H2tYqEhlR2SXdzJvg89pbeAVyQ%2Fc9WKerBXKnesO5iVr0tmenDOrDRdWKcbCZPjupQa127qHMX5YdG7VHRG2A6DnC%2B%2FBKU9kiDwPV3E6Gf6cZdAETTtcLw%2BuZ0p5Fpmvgp4x0oUmsd%2BIzeQnrMaeJ2otA%2FNoKmK2KQB51ER1%2BK0oxxoyBY45Zx%2BxXhh2eALj69wyz8pEJLQCSaCEgU2mlTzLxpGU3fz5RkGfI3U7tKA4C98VIrk1v8QHY%2BotNyUQlVVvWk4gOXsVHjmnGXSnrFW3zyccRqzSLtjLwnwsNu1CLFHk9NEtp1RGEqP%2FvEcBqy%2FAigv5tCCuRSmj2U5oWKBrvibOzOljPE862trEBKFoatb95o%2F9grtIfGZp6OoaOHg2rfLlVrcyE1tryCrt9qTS66U7SZOem4N6ABbWV4wa0ENv4%2Fldrrqr0fPAQO6wkxDYglFzbVZxhk6SaMkPtVfwIOekjFJ9I%2BpY919Mvk7CvHD9U5eQDuSgqbHK063%2F1eEZp%2F4F%2Bw4x9bzjh1thC18EvTkBxfj%2BcWUDZAwxqbwvgY6pgEyrKR%2FJCJCYWr6xWL%2Bo62lrVylzupojPLvCGzZiNy1EKJALffrADz3v8d7sZ9KqScm%2FHGHSXbaPC%2F9eRWJZlwXHMPsyTrY%2Fnj2ITHRK5O6UDgQf16WgOBvodgWv1zJx3JyaAU%2B2mWuvUx7wbqCFMgeyypiV9KvZOh9Cqdn4jZHusAuRJMgUlqeJ38O52kCfJvisQ1X6qCGp45pgHRwhiKZUe0uyFc6&X-Amz-Signature=1586ca232a253054c31ba70a66c96dfac00d5f011781c0afa82d9bde3eb975c4&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
