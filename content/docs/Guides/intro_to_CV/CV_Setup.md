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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTBCXFYB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIGUBOGQwj81VPzQj%2FmDGQB9JP0%2Bn98009mwE00BeoGiEAiEAzrnmyBp4Au%2BSme7dRmKfzfZkXLGdOMy5DjEfQ7q3vBUqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD70Yqc2Z4QnMmRbmyrcAx1ahAKiqtYH6gclUrrar8noN02x9Lw7%2FUzvNAprBCtlGBv8FMnOjEJNuIsSQ1%2FdD%2BGJ66VZqtZObqLf1SHscvclTn1vH%2BkXPybwpvtpp1TO4m7DvSZrETx92BbfOFVwyag8a6mmVHhh2LsBZuaEtulrAGGtAEBZj7TechU5%2B%2FspJcVCekq18bqMlzxi6t62PciUwOKRItd7cEFFcrs4V4qra%2FNmr1J6N3rBZ96kF8B4tOZ8Yq3uiLRfL7YATN1gVQECecUTyHX4I03lYVX5kngTgfA5MWqPOyC67eSizindjCzLKKoF1VXmJlapuFNot9tMVus1FUaMnZ2aeCRrlp8EXw6GbnU6mRDm4zWpBUCT5BfuoF58tPmEQXwwLX%2FtC39jzHzYbzV7zlaYvm0%2BR7EYifXEo9LBSIHN%2FkEfKlCwCKRGpRt%2BISud4y0%2FQU1AVLBPZHOlNpRCvcURoevtODDeC3erQlA%2BQOdKC%2Bf9Aeju6MR%2FYYbkCmkLDSGQdk5MMQV7oIggV%2BK0J%2B3st9rIENvsoecvgEXk%2FczBOcqx%2BZOcNqHoLfPUhA4xsSmOpixegn1%2BUjsaXZN8vD9fgbmqp%2FZxTD1RlQgiBbGncMhxitTLP0X04o%2BrGymJbxJMMKHV0sQGOqUBvJqcxNk3I1Cm%2BmZD5kbuLUqQkrbWMXJ3kJqEPbu8g8lhYf25i6QVOmoICWodp3QdGidy44bHHYcXdwYaA9T0BCHKGHr%2FEq6aLzmw3jKuVjwpSMJpAfHFr%2BjVJkUmj0f15%2BNLSSPCB%2Fbhzs8T0F7zCRwB3S60gUTPFZbhI43KekjQ0mbUDSocigwzc%2BC5gAi886Q18m2LHw9g7yTpROlJlfygK3pw&X-Amz-Signature=65d0965bc24a0e70cdddec0c18f7ad43cf23333c7f9afbba27cb0d154cb26c5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WEWBU2A%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQDkfZe6zS8bawmqW5sgMyC1fBNANXw%2BzZUqFnaF1UjHLgIgcP%2FczOOZohx9yoqM%2BOAGjepDZ9YdVStPCKhXAso418oqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHXsSMb%2FEwq1B1sj8SrcAwb4VpkO6YzhHyI4UWC%2F07igKNjLyDPgCfEte9ne1FoXhKIUJiGoa1pyMAmSQZ0cGcD%2BlAeJXNGp5fcCIGhJ4u7oEVwNSCs%2BPI0elh6IfxXleXuUty7%2Fh8BqKeGQf9ZwujAAQIpfNZGYR7dyoK%2Bf%2Bv4b22fIZdCwCgDmeUNWTjhqq%2F0mN1RvmhAfONGbmnWB5NsK0inUjCCswrZluPaXbxe1TRjvcoCRSXxJAct3%2B7TCq%2FNXb%2FXfrlWgn6OWIW0qI%2FasZVd0rTbZPJnzMxYV5iSjCI1duvHIZE5nAjiUIPPVGaxlW6TETVrjE18ewa74ElmIBe6f9CACHy6fjVAjkR%2FyPFFisw0JeBMBqX9Hm0de7hwi1FO75iLhn4l3iSHeUrBq%2FGs8nNbN3YdA3of%2FzNJ6SCY2SY6%2FND6EXS6P7iPMJyiFHvYt62y1Jp0ia4qEHPVQbmzOTSVDWhhA28LhQmuSrHLafCQinojhHP%2Bqc6iU1egYsJDKX9Uj7IFtbI5Y48JnsrzT%2F%2F1deRmzI%2F7n1Apf%2BLeFlH%2B6VEJ8G5v42wUEGBcIZ9O2vtNI4h%2BGcaFLm2PHwBv%2BkdMmDqQyXxvAjZbaRu9x8aXGTpZxbWgflegjDVTyxggnHpwMpljzMKbU0sQGOqUBRGWz1bzvj%2FADIY6EVcHPSRg4bkq9QQd56WRih8SeoAiIG4c825jImCRQ8QAi4DxVK2w%2Fp8otejrwW20iTbJV33LE0dKxG1jP3U33El4Ai14dMecJo9FgzLllTzuCiF4yngzT3C%2F%2Fc0fevPUao6bp%2FlTLR2swdGoVC3RW0RO7RP3qWy5mHjLvJwUIsjcDG4CVZppdo6yCQYsWjR7FuOQ2JQqWBO%2FO&X-Amz-Signature=82a51e5b0d99e2936c8766556d84c07a7d623f6f446489b4357907f84d46095e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
