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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4CHGBG%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDxoEls9KXQtwqusA2wKzcJTLHd9DS5QQOzvBbO22zhWAiAVjzmxRtv%2FeHIldGfHUer8NkNjgNcUQUGDL149LLxl0Sr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM4gutlYDrOQrC5m3oKtwDmpcoh3N9E5%2BNxHI2Qf1Crt9rAa4zbpBmoQ%2BtefZU80IvuzHVN%2Fjr379buMUAGcI9Zawye3bf0gBM%2BQ3VSo0XaCS37OKEgDmbjjim4FKuAAwIaKRL7TQhlr2YqsCax0%2FmLeZEzGsFU6fytrF5iyrcMHM3UMJLyw8hBo1wytcrVqdpmlbZSPxte6GDcZtdFChJl7u9E8G0M%2FHqkH2rdxQuBsQoajoJ6JLuvfjITLooz9a8oiXcwDVqkhvknfL12h46QzcsHodd5YfdMcRGJwcrUfdT4k7qCqko%2B6wIcfoNL9U2Q8fEb3E%2B1rqdMiWEajZAlQMUxhBACpyNyMxj7XzUdE3YOElDZycF9vExOtKQoK3GNjetpi2asefxAO5yaqgkkU2xLhCNK4jFXviTOq%2Bdtf3LwFkVhmRa3lwBZCR1DktjNybYp8XWV8raAw%2FCc0GT5M%2BOeR97ST11aIWWIcSPwgOsQEWyhiEwFWOjYo8G9yB%2F7Db2cZ7O9SBTwfKFMUS0dv%2Fd4rqakHiv2xgtQnzW0jYyw1rGmc6l0uU66OCnEUgFEcJwH3Sd0on3NiRRzLREw9ST7uXv4fhhgKe97nCJqvvAErfYoZoAZpUZRg%2FUvkq2XWuBL1JBXhHXcCIwtoufvwY6pgHTE3NSObDIXpAbK7g5r4iSqt8wm8THscW1KJmbevaj1iOikudPCgyBEFsDN2bvdbsFSXqEOacc8vVnrw2vmVNXKu%2ByI5Wud2w%2Bbd2MUR6BwQhJ308xhouKyY4CVA%2ByV4rQpPRVL5vHJNrf6e6tlmcEUF%2B%2BzbpmlFLT4ia3aAQhaZYyTLJ3dh%2FjRKClKC8FdkCW7ORTDQQ5cwuGhFVaFMM7QlF3rucm&X-Amz-Signature=b3292e91e29480cd07fc00b5510f1695942f0d3df669e6b365b2968bd239389b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z7OV67M%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGHKaRZqiYK3MUDHJxevPBb4fcLSmtsr6%2Ba6avGgCZK5AiEA7DH3Yv%2BjUtKmYr8FPKUGRuaxSrN2Mqn6WrYxX6xbc7gq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDG6SzI3Vb5wwsAp2nircA2q8Q7MgdNf%2B%2BbrzgX5v2JIPc7%2BcueWkqCc1ILZtrs%2FrAAcrgQHoY1AOXLTx1iaVdy5%2FVHcUxsyRea480%2FMheHBjbgcKRYDWbuRsBIi2vfCOk7LFDfKYdIZ0gzJq2ipMGk2FjE4AeJeqh%2BLAgR3RgWJjDFnZ3FqPQdx2nn6RUFh%2BreyvZayDyjgg1PFmaxxU1oA1XqRzHvXFinW%2BF%2FmxydlWVO5ADjOQtpLvM0gAgazhKZ3yC8t1v3mRDG6twqVQKGj6t%2Bqrc930Udx4a%2BpiAj%2BZG4S8oyr15mKzmp66Gd5ubeGaoMKlhsStq6D511a%2BzJD59SYf158sKy0J7ShgB%2FmDXbg8vQNT0wcRtGHbYlZs0vMStLdnK2UBzXb0ayFe7QwSwrgQevXop0b31MLYe3yBQYTj%2Fh%2FCeR4VAhBGTvQnsRiM3W4gGRLd5opf4gbZ2zfcsrkmnrHI4PRnFUfhSt38%2Byy1IPJxvV%2BNBqCVXtbJrQBssjizVp7pseTnd2%2FVirF7e%2BmDGLqpfbacBbLwm2889D6Bh9jin7Fwio%2BlsxuOL1%2FyeWND5FLAsZbl1lxfJe6l%2BDmyNA7RnjGWyQ70ptfEtEAPjWQ2MGO9TMGCCG0Lbg3ZdwYuJblcux6fMNGLn78GOqUBamVHvkOzXhrQD%2FGK824r%2BivfDMFg3JankbE0J%2FRXo9mVU%2FgcM1RTE0aETVpNW4YeWr7EmcTW7yGEZoledK645ZF%2F1Z5o3lbnW9aeU37c%2F3ktGy9FeS3pVgSFl9CerqHFLdFwdf0wRmAVL25lUcFESp3PrAb2rUk28Fj%2BS9RoFqzr7cYWxjBZqzpwb5rs6c85qx4WiL3MYtQuWPoeFKl%2FNQLjk%2BA5&X-Amz-Signature=854e2d592cb1b6db4560452cfeb9cbc5a4fa20ae99572a0530f439851c9d0dfb&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
