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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL4DUE7B%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnz%2BCx%2F0pFE729%2FsCf5eDdEanGH6%2Fd2QSVw9Ar%2Fv7aHQIhAL%2BuOcpw1v9JujgAxPvHNBACfyCwF%2BVAPyrGZQ%2FZN4wmKv8DCC8QABoMNjM3NDIzMTgzODA1IgxZCXpoIEVlLdf%2BBYYq3AMMSCKvXYVwQUIM%2Fq8EzdrngC1wxqAxWMzggOmn25budFI7DaA6piRo8w%2FVrcpFgMiayG1GsuIkKVf2rXuZai18z8yQGVQi7NJyQKvt8gJAWPfg1Mt7eL58MTpmgz%2FZTquezo%2Fq9%2FuyvjEtcliVLu9rOOQTOgSdh2VBPdAhbdhqCL96RlPt82QqUhPDzCrRT9aeHCSzzV8M9ooO9PMu3l0l%2B4Iutt3vPQ2Fq9YSHtE%2FUqvc8gla7XrWyHG3WSEL2ez%2BTdcqI4owlwf1M2Yi2wWAeeu7Xc%2Bh%2BTXktuX9EmSCJmW4doVn7kSuDeJfLtJ2%2B68kQ3Zv7uP3qdk1cHVPOMpK7B78j3VHr%2FhFe4SClozWdxaJjifaZgrULOFI%2BGso1i7FNKaCS4pm5ysn9aln0Wln8thSV3TnhV2fORLzCDA2avPSeWKgeRGkcs14sfkkJR8F4zX0sZ3y1d5KZNrRxsfiu2KtlfeSPNVRJToGXx07cg0q1Ts4kMpFM3C2Ub3yC7S%2BHI6OzR3bZGTUXhs%2BBZONUfuGNqDSR3fS94NExElRLtsKXV8DegCFJa6Jjj8oVW2BK5Gb1fjP%2BYr1k0krlmOU1c3jIRHj%2BraplbiYyOeuxkYKHoaHQmNJZNW8PDDs0b3EBjqkAeq2BSC46ppOjBrDjKaYN2jdY4gxDhL7AICcypqRb1lBFk1uwSXZSrCUzYxjsE41UmemQkxyaGDLWoYCXkwB91qSv%2Bbg5kB3kL%2BuwPH9sBOscbnJUseY5dKSNX26sU4l%2BS%2Fnt9JZB3DxtKy2bpW0mra2AUBJZkGzmFvB93Np58IN2l%2FFyhiAXGhVOdP%2BEqp7eBOD64oxMrLunJGNX8SOxostmK5y&X-Amz-Signature=443c21adbbe72ad4f0a615811f83667c3967682ed7fcf404b6c1be0064457864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DCBYNDX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8kUCSgmK18zxpMVaDfP6TZawV4%2FgXZd2%2FSF93vol0OAiBqeLWFuWOOJmMfRD2CrBR5cuefFIeZG4nXC%2FTEzjTs0yr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM3O9xGgIG2JnJJE9CKtwDy9iHtVzHEB7o8FjT2auLOBNRfzXY2nvma%2FMXnyZfEv9Out73e7yT5ojAnV0NlOIwrkmkl4s6r15fZUeuRiK3PC02%2FgrZtfyG8okj1YHKeBmSpHrlHQzYGFfefeliCX6Y5mtHSBKGzSZLYI6dNogxzhVtfDk2nWOcnJRsABdpiRTYE0TEPaLPF8jZLbEzQzTLwO5rMeLHg33BUxctSVpH0s3YwCniX25qzy%2FPy%2BIL9BHE7DWZh5%2FGQw0Qi%2FIPBE11fUjeoE1rTzXkC%2F4xCO6YxKnE2auHsmgvQVXoH%2FFHziReBs027T6G8EMlbWHngX%2BHqYpcDM3SSxmA4IjaV3Xr8nVi5MW5lyY%2BhjkIQiZD70IKO%2BUoM0A9ah6vd9FQTHs5t0HeHXwB8uBGWaYZusWWP6hhvma8aifVSs4eo%2F2ZhPNlCMc%2BQGB8suTLI8%2FS8mE7IvjlcD4uMXmQ1HW7ULAeNJTFplBtMwC%2FzPe76Nf9TJ%2FctzyEfVJu9aU88SvNNjaSNKLYNJrZfjOIvpe%2F5JuLWNbK8xmf6LFCKwxZy0NkfeGJTykjHjuCfgvnXPgPLY9aZh0zW9soDb247cXRWZB%2BFNM7noSvpZbuHPEC5swRGuWpXYeX1nYF%2B2G8xNIwptK9xAY6pgHntQGr8zcwLJVAS1thke292wcSMNxTgsuRm8kKZ25nGYwUJoFGbAUe9lCJCWLxe%2FHR5ZU0ZFV4Wh2XBNor%2B%2BaLfk6WtlY3%2FWeKf%2BJnvZr0RPpAngQ%2BSH81j6y%2BHmcGLAQPgz%2FVBQ%2BIbT4iOTU%2FF5sAvQx5yzU7GxF0mkGm6levCxNY%2Fho44v6ViNZTjhl%2Bxlc9qBttqlqdVs7sNHVnlfZHDYiXfezy&X-Amz-Signature=dd513f763d9032cc1bfc99aca857e788d735584ff8584e10a04ae504930ef05a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
