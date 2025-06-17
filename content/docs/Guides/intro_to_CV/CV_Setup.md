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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5N5UY4V%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoH%2BfYVLg3XfJDh0%2FbaWUEykgQKQg42NHwmLWUODubWAIhAP16IXera0dQw2kNDnwsclClIEtUhwnKFoETXbohHtESKv8DCHUQABoMNjM3NDIzMTgzODA1Igyf7Uum3l7kRZmg6PIq3ANU%2FQ4FKnVqiPFX5CYlN6buyqoufZPR43%2B0zfPKcZBmKOuPs1sYPuX6WVNtsZPs5uUkESkROTVL5vQpfB7lj81vDZ3ZPSf4%2F0mhg8HANtWK4TvhbBfwNrvBNEbHTeY5qY4UEd4ukK7n7OmjtCIw4VhbH1N0lU70PwFRvOs3n9GXIkPoehxxu3SXJS2YtkLps%2Bd7ceSvVfa2wKUI%2F6PMJjRovS19SRgqlK0agEQ4eCkFErzfROza0lnrfH1lTcQjKKVqoHO1BSxUHsRVDRGmYw7b6%2FTU32y9QJFJ21gbqNYeIsZcW8KFbbaJ9VcmQOlyuOvXL12%2F0LnaZGhR8iNfpx%2BmVNztKexJ%2BYlEppOj2unxSBjpec2z8Ncj3B2uJYh6Vmgz%2BXrmM2ciu7cT8whbU9JK2zUIkJqWc2gOY0NO83%2BShs3wiTqy5ObbeQ0abqkool5K4wipbeU53StO5nSkb6Y0AULDG0Z%2FNSTkL%2FXEMn3NHS1UcoWFaAPBJm0dzuNwfEaOZAao5bdx6yoY6J5ep0Nqd0Fhj2AvH47AvQL35oV0gR4nKWpkpCFMgkafr1Nhr3nU9rRUCsRyaa0pFprzSG9dUXa6PDqbObEi%2BO3T2iYzld9qZxdcHjo2yyGA7jDcpsXCBjqkAYBcDM2E9GJMTaRGnMTQr8TRon7815MN53ZAs3lstLUZ6R2B5RlFuby5bOQuGrSrYyWa9vvL690xes0o8oZYAF6Te9BqZc3onHaghIcnXYTNjGX%2B6eIooegQMy7YAUtjzzqgvhfPgnqE4t89FO1XNHJp2DJUIT%2BHk%2F2hGwepgoTfZGuodqzpbFUC0KE8w233x%2Ft8uV6VAm3i90mL3eE7TcWpAB2f&X-Amz-Signature=71e19a3aebdedf527801173efab079eca9ebee7c4a77fa03d20ad92b0b3bc906&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466773QAOCL%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnyPuuhy0Zbi2XbqxLOkZbup56MaE%2FK1305dixLV91ngIgQBJdZVZxQjfTW%2BJBk%2B%2BQ0axATbXvWSJQ%2BYUdinqvms8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAHABfB%2BYFmO9lhq8SrcA4md2nbuUH5kxIlE1PJRo4997vPobD2XIu7soiyULqGTg2NS5C7JSTaCxiVy97b7xIvh0Xf3uS5fBkijLTKsslJsghW2zmKtUXDgfN0%2Fheef0GR9oud%2BfoYOw0akR4JbLM1cgWgEuIzrPCEDEUbjc45dfpDKzVxVRX%2BNin8OK3%2FfZpeg2b3poI9oFsFAlmnYJpZiUPl750ROVosfJx3Bom9gvd66CtvJLlMOrrvIa1MVy7HuSaU6HBVtvWK1ZbdD5%2BwWu%2Fr1FwaPL3aa01pNtEv8orVE6wb7QQfj7iUZ90ZSjCncrXDs2wyvEgh5RMTOq92%2FMwNnDusGHCAOxSbmzU%2Bq0Vw9B9jm4Xfaat3GEfXVL3h%2FHlu9VN6FHwid4ieh0Z%2BRVR9yPHEfC4R9i9jkq%2FNqVa3xOyL8Vk%2BH061h8KWrv7kqcvAN%2FnAr%2B0cUKtP9bEG4Y%2BsWuVblRl10ZoWAlZkWwqlGQ1YqBQWPhUf7%2FPlR%2FIaJ6CDIPcL%2BrIdAa7ONozT9hhzAv%2BXK0R0mvieAc0u1LKS9E6Y9tTMGfV0gdK6i3ndE5CgLSN148Y%2BvQsdPeK6TT45MVGYAHU1gFVQdjpn%2B5rm4VjTP7vdYMbk4RyARKi2rEMp3JIy%2Bu%2FlOMNCmxcIGOqUByYM0sSYtEISInJVXVZnKUAwE6XyifVm%2B709K%2FjCgA0%2B6xBT29Zqi45QTLYulFHda7g%2FIywWcpaB%2Bdl4KeRe4WuAeLwivsLgzaaMrOk5RR7Xp0duIEwaNgiTnRoXDeRheNNyHdfWQWbQViO6%2Bi8FN6uz%2BOG2FjngX0mWQg%2BjXe05OPoC5a2qjOe3X0SJ%2FeEg%2FUCtjDr6XQXKsPHT5lKLvqAMP6Wd3&X-Amz-Signature=5f116bbdc12c0010f6161b341f6fc20050ad948a918c35090c3d5ac345993c6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
