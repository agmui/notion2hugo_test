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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLI2TLSX%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBm0RZh7%2BB8OZfip8jhnBr1p%2BC0ZDE2j5pVHy2qH2OFDAiAKgC8S%2FBDYhytne2qfsFaNEPnYtdVRvPIlMaTEKGd8QiqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7yVCz%2Becpx8ePAQfKtwDogpuAZMb1D2NLsD6zykp77FgaGEYZvF%2FCnguKpGn%2Bd%2B%2F4MLd3LdzoU3uU1zjQ5vKDpqEgEBfVUuzbATfADaJ%2FkX%2BGdbe3epLNyGfWIuf40Jp8N%2BTauuxomUib9UWHeWihYQucfKufP5%2B2XUbL2kOm5GCTRpBb95jxvi6BBl9ZqFkPXx0UlIJJIcodzwxh9LFhkvRidQ6nomndCucXoIc9IOHkUtmpXTmG1PfU2tijDOE5UjBfAzq33SAn0h1YvhIdiyM6UwEdldgcD43TlbG12ikjC06fO%2BAIOZPTi%2Ft%2Bu7B6c8xQ%2FWyZTmh1juCBN8qlBXYezpWBtPiUzmC2SnE8x%2F8jbILLZAD2uSBQX329hEWyk9cqKHshndVW8YyA8ztzyGeakJEAFddh2RNADAiVJqtiphrThzwmd9ua6oAX3vKUZ%2Fqw2CNaOUC1LHNmkkkCFrbCRpDihM8lZw%2FA3azXwv1D%2BdSaxkPhxGURP3ihrJLRmO4Beawfehqg3qj0ozZQc4Oqwa2JSNXejRXtlXOuc57d8tRKFBAUEEH91Wsw2ronCVqwH4xH3yZPs7o0w7ZgSL8h9xWvT5WGolUmQEIYJ7Wscrurt0YawllYPffmHourSJfA0qu6ozjo10wuqbvvgY6pgG8zCgVgkQv6pLRxP5u7dI6NQr1qUYaOUbaFXyQbK%2BTyB19glCO1BtyApeDGSdXKEP8u%2BYgCsnAEdcH2tdXi%2B1RPqNS6DeW%2Fes3Hh1%2Fl6Xchk3EqLasY5CkYzC1N7DkqZ3a03v35Arhq1L6ysNIcX%2B88VeGrblSD86aStF46Oj%2FJgkIoYBQx0z%2F7ltG4Rj292seIZg18mcpZoNOx1o2NaQkLQm3OCAX&X-Amz-Signature=c33cbec289e2f8ed7c82e63a96db15c31cd22c12a57dfc57b2d705efd7ff6eee&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY53AJHY%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIEWaudArJdnOB6ahfya4epCowHdH349Sl%2BMYQgRVWv8sAiEA1YmxVLeCK38Iczm5Ew7swJ%2BVoh32P0xQWw%2FbKjk0FwwqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1beCYx5YrZVSNkXyrcAyBr%2BQgdevoYtxN1wesDEaMZe02utRGwoHJLBhabj3xWUcmoUrG0rPOsRlWngrgEjKYwALFXBl5XkGvXya7uOwMw3%2BSXdcM5Kqk3MVbTo7j6CueUTlHJVHC5F8iGntQ%2FyF5zR%2FYFhyubI6Y1I5xQsqwm8T3h%2BvWETepvBtHVALqSbJIi%2BwRcLdAnojwr7JiEPRqyCA%2FdbdY%2BCf9UIUFgnJmUB1AY72O4vN5L%2B7IOdP3wJWB%2FvBB8iEsl4xw3SRkxcKx66nUCG5ktVntHToF426IZaIaHAbJw4%2BmP8NrIQGPu40LgynWgfTf%2FHdSScMaggvpdQL4RunULPp9HihdEM5kgcm58q8BRQQJgSmzEn3ZZmGZ7N4qIjcmbod0W0qPN1gocy%2BUGRY5DB%2FGWz2K6aXpYaP6ppr6F0vr8scjpwvxrYTt92ncQGC8E7ji72mqVWKMTP1UdcC%2FS6X7usghVWvhqYEmxKc5k%2F4PNmwtJtQV7kY19FuAZuKxTwk4nS%2F14igbrmlY2j%2BB43YajziYtKAmRvBTFvkrVOlQAiLTf7oSH1hlpNMlFG60K6XN%2BPY2PNvK2zQ9aJBqwKaDdedNI%2FLFvIHuO%2FfDkSBz8vQTtLVUBurq%2FVGlx5%2FOYTrP7MLil774GOqUBSXThzKUKpFf7aJ9O0iHXSCHis%2FwZdLMyypqyrtTtorxW%2BbFrCzo0%2Bx4WnYxGoB%2FMRO2HZ5Bzu2QCSWB8dKZZ%2BzYjCcY9IwUFjr3f7qZzvbgXXUVBO7rwxuAIqm0diL76r3HVvm90q909dslRBYiRs0XPqzsSKGHi%2B4pXIa%2F%2BQe2uw5YxqlJ3%2BmRJzJuE8QatBRHS8YbUN3yBKkQ9Htf%2FMjOT%2FLXY&X-Amz-Signature=cce628cc490e03d54ab8a4b0e25689265376fd6587430193477a43ba5630ab8a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
