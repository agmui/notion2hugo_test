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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM3ZZBNT%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCaP6KWfEieUy4OOQLT4Pqu2lwqJtKwNi%2BPRmqhoebZtwIgI%2FknB7yGnVvlwM6TSKs6KXbbQ%2BvKrJO8wdQNimezcKAqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVtU%2FkQCOyC%2FQMjMircA7WM0tniIuNkiuK1ZPEJo0e621FRaHN%2BXmlAJ5TBMUTmaY%2F9IyXtScUbb%2FsGLkHHoRy5JMlmGVtJDB%2BDdTKTuSD4nCGO0wXhR1MHKfADCkxEtN1dArKV69eGOe0%2BvHHFjAGiMypcnH79L1RyWO4dhh9l0Mm3wHHxS5S7oPzXge%2BbrI2W70ldRS0wer716wI3pwaJrm7dGomViQkmj8Anrff1YxcAscJok2pgkweJLg3xx4%2FSOplKTtxXUdZz3TEZ4V%2FZcQTc2FXmN7cD4nkQWskCBlX89golVIiXGBGcwGq%2FfkqTcl8lznqAdijMh0V63Pv4fpwaLNXKxU1p9NxYmRGbURuhKS%2BYrFwxlwJBfISDESgtp2tQxeFjp320CirbTud42nRoPR%2BKgjfCncE1chlHWLWS7V%2Bc24b4Jyte3k1vTP5Ve3vDkHQLtCqDYPKI0cerqXdhr56lOYs%2BR556bouw5%2BmWx5EcVMV5oPz63k3Un5RZ46%2FLr0ZQ3eAOeIEdezT6s%2FiLdOoXN9rqRQ7DZcoJ%2F1qX7HSs5%2FfKzOTRCKaUD2JGvXka2IVAtHYfIz3XbQxNg%2FIEcKoxoBmubzVbYQpKAcbKWIPVOyQb9yxPeCUiTOzn0QdIJlBR2Ub8MJKv9MEGOqUBrfAeffOCvFQYyMxzHb18bGqbpTq1V06FGDvFEfLfLQnnvp0j6EVAOf7elET2KTT%2FtgfhAiw6NZtz%2Fe1TczKGjccs515T4vP118WNtPZY0HXDfs6y71XyQ5axBTLjkdi2nxsqgVwHimqb77ZAgLTvS38BKbicDLaC7hkSwimKcWtZADokjOQLlJ6ybQ%2BuS6KqASF6or75Rg9PnP8qr1VZ1V%2B2RvKH&X-Amz-Signature=22412a31ae3ec77f52805bda541da430da4f56279fed655b94239b797dd21fd9&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626PVWRRI%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCWrnUVmIIzUZHgaxVnNfjDTxprlOoNnlcNpM5bUEKsYAIgdGru8156vwHqUYhHQ46AP6zVRppabmJjHZVwccmPDJkqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiupywE3YGrG3fTjyrcA5iDp1K45WmZZ%2F6Xouygy5Cj9ri4THFUei%2B2U7%2FFWF3Q0yw%2FPE3CuwY3pmqFwTZH2j0SZzQiBnvzEa0ohBrFDUOW%2F87WmtRySpPZ%2BpJrGm6BE59QaYmcgIvW5lYHYe3F7LunKRk23OQ9bg6LJnzbjTmvL1ecD8%2FS0GCgMp9yi2Ao%2Bl7wgDzq2wVZefY0DI%2BQIstgsyJGdzFPuUSen1XUwm6GySpxRCLroJNrL4Qnp8yUUCu9B%2F14wDVi1JUFeahnhPmQ9NSQUaF27gUWHev1EMqRN71HuTjlq8fMmDCV4%2B%2FyBteyRM3U%2B6B01IsCb3GE7UTzLN%2FoUovxEA9mDw27K9bpX%2Bko4uV4tat0%2FnEvUS54XFAZzRA7aIuYWCRzuJZ%2Bne3GQX3rLWuazlFy2mSgkz9oOKOaTMeM7TaHxnDYcRfv35jhRT%2B2GMW%2FXAyvaVKxana54qEuqoo3ZAXSNTRWmLZnaV%2F6nbDF8mRtc7EQloOZLWS9Ou89%2BF%2FFYK2%2BhW%2BJQqi%2F%2BkcdekJdqXq%2F%2F0UCtuSe0RAdjZbReFLqp1Hvddys0nGQFJiLp8GWNXJsn89iBCFBR44tybTTAe8oEgtHaLHr3xYkq%2B%2FWjwtmmzrv4cOr53RMmfbtzff2x905MJ6v9MEGOqUBo8VUTlZguxEgGeGsPApetxWbEBxz3AjvxQa36r0tnqEregGAo2Xdm42mo77EgWV5alC9arntxGwFmPWH%2F%2Fw1IU0gfR40FMTB0Geuo5JuFo0K6MA9v%2B95ZVfL9x3o4I%2FoapfFrNDD2Xb328Ooqw5Mi1ZjuEr62qVv5xAaHw8lAfJ7FVeh7ZSzjyLoDavoav97j9JH8oAYJXx89aUbOj%2BZ1Qbii21O&X-Amz-Signature=913e83fe4271c7e0844bed433a0e5d7e65ff594ee256bd929b9832aa6e157f91&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
