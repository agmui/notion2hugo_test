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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKNWHPQQ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIErccfUIVdN0n6faABMh8z7ge8xHiWa5yHsdwgQAZNiwAiEAww8oQLQmhdYyZfvgMNcyD1S4anXR9YNGeX7MKDoFhvIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDFFVRlakR9Pz6tyxjircA1tx8BTb4nvcfxozu5%2FY1wiGMTWBFsVfrV7VhZW%2BErzX2V5mfgdIcQINZA5u%2Br2XA4psVP8dZtAr2aQiuRC%2B5XaFhwypOUFdxD%2FysnGOtvGLVLCkfbtKmxmLlsR7Fwnx1GxffWh354xvjxEENUw7Ycbd%2FI6ScpVYWkoyqwriyKorM7nrCvxhGHD9rr0P8xdy7YMRo17PKIq8YvF6YNQg2HNW9%2FAPdVv4gqJGBSL2mmN%2BBxENU%2BHe8Sc%2Fgm%2FF0UcItATAbq7GNtWu0JXBuCN0cQR4N%2FeFLsIeBltE9lqEEVEM49wqkoPIV1Ta%2BRhCy60rXFxalnTgX%2FJms5HOZ7b5jg2HDQcydFKewTRtsddnCxm4Su22a6bLKyDia2klg3ZwClMTamQjFFi4jU38Ft%2BpeGYrmY7Zu0s72nLeNWOKq7sI8lHwQNL0WUVV4Jaowpt%2BRSESbAafWDXsmXhJggSnb6fVjJ3175hq1qckVmC5ki3Rc%2Bs5TolptI4Ng%2Bk630sma16FqmLVLC8bV9OP4q8KGhKwuwHrFpYKgPSZBY175JDD2kvGzyHQ%2BHlmNDMHtEW%2FeRMSPqflsFlxfVQWHv%2FsLF0S0Px%2BHAbVCdbjIeYsBaBLZ%2Bs5PGYy8TSbVERTMOGezb8GOqUB3%2FkPNaYw%2FfgCJ0QGOM1sXbVPCD6gZOI%2FsD9KhjqtrMBXvthnnUrTzWUU0KlKzjDWFzF6P54atDDZ2fqTNidW59YiaOwgD9w0vR2CtzgtqE3VO0uZWU2JKS79XYePsMPkluNvuVfhgxJ4kC78QY%2FO%2B4uQonESm49eyUWjIxAzBSK6X9BPHW1QkhFUtqjeh2TStKUKdn437mBaGbx4zWenB%2BcWYH0X&X-Amz-Signature=0810eb51080e4ec0601694183c1c1e4b0c6745287c2e94176cccd90b567042be&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRA3H72P%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKoDs5oP7kprMTbNg93%2FUrJm9yNuxGtOYQgOKnv7mEiwIgQverBVmLVcdvjqIEsHQfuUD2Xa0twkgJkg1p3c2KK9kq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAE5zP24apby1pC%2FnCrcA8BZLK4%2FRayXQCvBNRUo6Pj2g7nGsZxSnBSI9bUHhzFOndqO%2F6BXtKqDv6ALXWL%2Bw4TRELm3C2ySTNl8%2FNGQesoRfGm499Z8XYv3r1F0DEJTqzSWuda6yOwlCXBOf02WoqUDaYh1Fn7lcSxfaMeRbbiSR6RyAHGquIGsAl4%2FvhtPemSi8FhsjtShHqu67A9WwC4Qqy3Aus2hH54yg5tqVE3k9QI3EWj7wspQxHKSMU8WNWEVk347PHXhw7wq152xF8JTv68hW9pQhydN1Gg3x3u8ItvCFuIT8Am0f4dA%2BEHT3rQqGuOk0SOBXp2PJoBqGsPrzMRKAtaJFa8L51eeOrd3sFICC0aqyvFGACBIkWbNipukqqa8tebNRLwbvuuuTM4xM83DvaF6eKCFiG9d5dKgQxpeQ%2BktQIRLWAT9KJyenitzpoDrchSp8tiXTLGCF3dwGTvfxVUgUmjF8euxiG%2FCmihgebVKA8XHONTo8PhNzRHtr2cJ5waXxCaX2IGj7CuI62N9k1sV4mOWhadOTcRavvMmBGgw9otMAOh679rpCqje%2Bne5cUO8p2qyXaNyT%2BUPV8AMRF7Jh7TnLrToE6YZCvGPMVjPkRUkZ6orUtQqT%2BmrNA2LKLzMkYEyMNaezb8GOqUBODetRSdY%2BiXKri1rZT95WxTuSJ3vYSFgK5O%2F00vHPW%2B2jCToOJSRdI5PgGMPuVBjnkcMUzTeTUbIkio9R0%2BeaGIf%2FxID8Sj2DSizrmaD2ps9pI7beNdwI6ysWephGJ3hie3O52pc90gRrXNgdefQGqkZPxdm9Mj7yvZ8Vi5E3LqiLveGiJNDfHzwFSTRJnOVo8gCJ8JvIJFEtbDozrIncbh0CJNE&X-Amz-Signature=d76e03b908f592585ae0ea34a3dcd7ae7a9a957b5c6def117278090115feb667&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
