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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK6VJU4O%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCljGzHroUMdymDj3jjZTQtRcf8jlrAiMlX6uiWPTd8NgIganFGehCzgUM7gWXqIZdUTGhw1tDrlglMRrGswz6NK%2BgqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAPyr1pt3GZ3gVfHSrcAwSv6mTlooX19i01jD%2FuS1k3RCCbuHmjIRhR%2BsI0TmmrMFUHVW2h8L%2FQGwxFtuo2A5ABJgHO0pvzDcFm2%2BlRZn7FI8xgNb2WFZ44%2Bh61hLTihMaQR2nR0ExoZjIPl4j7IxRaVBu5NloYEhpK09FdYZfZEdM30wdtYBjrXgXt7bh5a4UTBBt%2F9s3v3rg2gTu5vRvPFkG8IFUnfiltpLSWN5WUzpaXTgfsnZKCLcXa%2B9QsGiSgNg5D28jCoQhiodr5gEdc0ddRiTQlV9Reuwmjw2LLif7WeL32AguSZTh5QZpb20hC1KbFAeHyt9hdYjT3sVTRY2iSpsxHa9pFCjjk4w42YMO3IbvDxm1AiSRlv1fnwR0xPGO5I9BqgrgjkDpW%2F073PAUa4Dd0g8uLY8JVys44daMOeUTLJgFOvUSLJWA%2FJB3Sr7WwIMASWdPkjokj2DMS4N61rwwXw99SMEeY6eA8Yh%2BZwYY7gWQO7HmjJ3o5QIhp6khMhSYsiUwQpDDd%2FvejyllNYLwl2Im5I418gpyqcieFct0%2BOjvB%2BUHo3dzA3i2rLV3csiZgJmrwjopTaxzCB8DYbWQ92ku6zld6Bj72MHsLrmRyOnl4WP8xOMBEP8j%2BfGxKTtqWaN0%2BMMjywr4GOqUBhHekilbJw0jWS0jP1tqndGrxkd4OaWtnnjvfsJP9FdrMsrnMDbQ7MxYE6uyaRAMNqi1BRNRL%2FCY7O0zT5GbmBKlKfqpqXJrqtIdA7iwMc2CWiO%2BGyxPQVLITpXxg9mwgiJOgjFYaVTEXcHM3%2FKXoZarwvLQJHp7AB3y8iEjpRlxxvTh4Gj%2Bhm8WmOAqXeCK%2FEhGxi8qponxLn45j7afa%2F9qd8Xyp&X-Amz-Signature=6605dce6f6997340bc129ca7588558f686a6b242cd4d25ff5fd05bb496aa6f2d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655DLGDGA%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIBrLWSasFNv0cHTO%2FXWpa7kXWK0jMKXLcnleBvn5cnHiAiEA64I7EZT34dckgxDCmtyKEKk7K8LeSmT96nqYYS070bsqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVYzQ9X3bUhVvcRlircA5J6tx9761yeWlhwkzO5LTANLit5h8ZoAj3J7PZ03np1dTaJtOupJrwGfvOAssT%2Fa2yoB8kriAkcYKwChrn%2Bgfi7gsDBuo10TxCRBASAI48cFEHktkpwcapO5dlTDaJQmYdjqDeSsCSBeQWR6xM1ydHpQe8JxYEE86vIPAg13s2jreL9bbgpO0ZT1WhQtV1FXh4tBlDgeDoHPJJzKC1NXI5DMOXLJxBLlXqX%2B3OwiPkDsyShGJF3l975hyrGQVCLqXIJpjZNjceKwnGiktUMiLgdc6gLSybnvzY1rSKKXP8KPvC1eBgCytLd1x00rPDtfWZWpPyczwcaNSu13aC35%2FYgjF4odYkQ9zs8F3alNZsAvRVi5ftTiB73odbtLQAGbWc%2Fh%2BB0XD6nn0Hqa0TiPvLuK873MtisHgTeql1uPyBQOv%2FNZjLmYo7X%2BK8YoUUAAPf%2Bb2kKjNkgFzquCy%2FjceYiLhgU%2BlRcIMYrvhur8UbZetFgkYr%2FRmWIdmTZRGhphOJC%2FKCAJzTMyfko6aHexEZwrqHa5zQva3oYFiSKK6FjvN8w%2BayDMGqVm%2BJDNdABTF35uUmI0%2B5nPp2%2FPj3i2M8I2WMUc0jDZRPYM6ayoQ8TEqTFqG5uHNQ0giwGMOrxwr4GOqUBDF1PfNCIApwS2CUOQBloDvUq8zwwf4jyEmECSi%2FY63ORmGJs023tcDipi%2FJrfRYOrVXPVkpKGTthmuzpStRkGOuJU7slB4K4eeTIbbQFD9yk5ebsfm6bLdt4ibCSI55c8oB922%2F5qoM8v7aFxIBL8OK8HCe%2FpLXfoBJRjYWUmGz8d71AW4LvgLrYk4bzGLF57D0Sn%2BOrIYnyhXvBe84RPSXEnhKu&X-Amz-Signature=9245e789f552c7b273b7face7394b94696b6e157823f15b7e70b49d300569d54&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
