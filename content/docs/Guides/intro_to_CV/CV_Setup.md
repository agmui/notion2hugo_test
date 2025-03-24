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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM5GIZN4%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpewIIHUoOeFQb2I%2FiMkNOemEmeeODFuMx1IogVE7c4gIhAL7vtbHFqA9Msez5GfY1kl%2BDwNA9fbHvf4T%2FofCO4TKUKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxyEx9buSjd63FpkBUq3AOLjHP8WvtP8jibELYdoOttgd8DLGYdShoy%2FYmmdM3aIhvJY2Y5V%2B36Ed2Bm2N61ZR%2Fn%2BeT%2BZco9VdVOKsTvCO2Y%2BThI4mHy7vR6M%2BaEBj1ztS26czsPeMpw8%2FTC%2BhFMAb7c6850aOtwYmAND4C%2BhAzPqz09s7852rd8fB%2BRnrFLhLC8WP4OFPqTFKakCvx5HONVt5r7c7q9dJ%2FIKcwI3%2BdHopoeL1z2ROrfOzpIohvXWmiH2RvkuzTmuLUKepcNtfPrGCWZ4y98DEVonCKVTc%2BJNxqr1A8chXG1p9Njk76sYJX6EdlpwSkqtaamD0Fp1JtFvB%2FkpgtSg1ph3Q7uD9B2Dgr2Rb0exJTmCEDG0Ywfb0gZ7FHW2LZUgl3Zg1kB%2FqNq6EhEEZ8fSW0%2B6rm3nZUjODK91dktjU1PL4XVpV97sI8ZhntaqiykqOKDyvPjD7RPN98Qfi1ATWwQSWvCQRHgDhmV5qHtHcNsY8RYvLJthbD%2Fdglx5oDRuXrx5xOmCzkKCj4TekR2Uw%2FyAAH2d9JqLRqKt4WPLlZrQ7c8yR6JkIk%2Fie7g%2FaUA%2F9C09joAXJp5EvEFjdaFIM7pi5NOwLiQVF0iuKrYnoKqfGvw%2BQPqHO7Yd0CQQK9qQ3PgDChuIO%2FBjqkAZnr20P4ZjSAc55chNwMgDEkXHCYP54i4srJfyav7SutyrHL%2BEDT3n%2FwBeXCYHVyKhSrzkt6V5SadWIeTudK20kmgbQHhMoTSJDXl3wn0DVOXJeC10wmEevbYUxtkW9mlpSjL7KeVhEoni%2F4ogTRSNXcsqJP0cLfRTx%2FApIsG4aeTMExKzG%2F%2FYhfYUupDfDxlft%2FJBWVdiQma4Sy1O%2FcugPoeJ61&X-Amz-Signature=f8e7be838cafc8ee1473e2edbb30437ad328c988ba93c2405b896fde391c185d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632Z4IU4H%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBBjG6bc%2FFlfR9LgoJgqJOkGRJqsQskyqouF0cJRh3aQIhAJiVyZKqRy282mpSylBoZ9nvcNTPcibkTxGIIMJWw4hLKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6sCbH2yrua6K%2Baj8q3AOHhRkYXgfaQlPKkI55hyPleR525fkJZT9g%2BIR957hCzwq1r99Cnrz6Q5ww6u4%2BzcrVgBAQpLGyKuXxcR6gvg%2B4GvRFz0vEag07RLsOy1i6IaJ4kMRIdP44XGNOfOvT1nNRz%2FehRnkK0bgqeSCYdhRMgYB2X64uzufq%2F0F9IvGf%2FjP1Ie%2Bno459%2BCUuHt4nMFiQH6qC3enUXUq2O4b4af8NXdXr2B5hlHdD9Edvke%2FJJJcVGOurk%2BPkxXRpF4iBf11vQhH3yw%2FMOMVOVMqwdSV%2BbmX9QtJzcF2c6kfL1qZGQockbfKDSeCy5PGGKxjCnoCiIc7VXhFyM5zZk2FahCawyfX9zrplK8zowhbYw1nhCXPy2qppHk6cNqHuw4rs7cPUMNgNH5kPxn2%2FQ0FOQKd4OoTmQ66WN482A9ydOrqSju9qb6tlrPRnMuudeyepoxWv825IMdNjHeLajkOgz4IGy%2F58wfScMUki5QELsNm31mOyjLi64kgcKED7CeW0XzwV7wLRtAErDEMuC4afDBHbYGWtM3u6uV98ESvytY8CJMmj46yI2M4XiUQnygTcUQF2S6c0Pa7S%2FQd5SMNA0yYFCA0EvdZqemHSt2QCeHzqaCXMdvbFWYZh6fHagjCtuIO%2FBjqkAXKrJwL9Nwb0%2B%2FXy49sTl6Mahd8Y1Pz1dfpxNxcMw7pl15m%2BMWRjCaUNpkFREiY2j2Hs%2Fherfbm%2Fu4CzMQRNkhtS0dwHhoIOo1Xn45iKxn%2FgqUhTwQAymlmO2PMipNCUPX61Hq8%2BZwxjSmctmFHDl8C1BMk%2B5qxddhIE26YARXHeHqH9LKATOOwpD6%2Fp9BNRgz2%2FYi%2FknorrAjamz5fIkGyYbBsu&X-Amz-Signature=c44279d237a95c860464afd094ee9ece3d8d8920d1167d171d3a5c8e96130ebc&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
