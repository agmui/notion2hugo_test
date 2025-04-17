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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEA3SNWG%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2%2Bet6mvLduDh6bqsGJzStLhlu6fz8me5h4dt2zBS41AiEArxAoi0V0G2AjPkVtSo%2F9UsQbe2Eu2cZtAFOn9vH937Mq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDN83WNyMaSbg4qkR1yrcAwUYJgTGYPXbKG03b01b2vlsOvJWfRM1VdEHh41tJH1WppPAAsvjOWQnep8fXQVMbmUBP3FKEaMktqxWd6BbTJZtzjDMfI%2FB2FI1oeev5iBkdD9rn%2FKZv3L3ElPN2ItJDlZSrvsyYtRd6oN%2FpUr2FlE9yKIY0goKbW4O8pa8J243WrPE91uGOsRX%2BIU%2B93jr03Edjmi9ye7je8jijpMFSOFn6B5sJqsYoRfZ4xbqKkriZZCJQgwVTdilw7Y3nsrG5GaVXsyjvZ4XN35ZDkfkWH2UYDvxtHoBLOoxvZCcZy3lgFGtyHNi%2FmuzFW9%2FWlCdA%2FKYon0bS%2FTlYXDXChmm0rb9Eq2xH8qwRa9rBpNIcAyD3yLzwW5VO8NAauqDelGy0LgmVrKv019ruzD79BKEreS8vdMQRviCBXokY%2Fsd9MjoAafP3pIAh5RAbaFygBasAHgQ1bJDzlWkYE5QnGgoZGWwEsYNPfaNaTIUh50%2BOY0FsVs9VymqoMjjg%2FJQhUKbMLPP3htJipY6TQ%2F%2BiBiHBumcxtxYREOOYzDwXl6MjbYk9Or1sTx%2B6nIk6RPB1zK5yBApoXCK9kIQOMrCsjnCufvgZ64mTj4NSU%2BeokPlLuhpgJCUJfLOhom%2FwXk%2FMJ2ChcAGOqUBvMRyC7xlL10smk4fP4cfb%2BnYMSJFnPZ%2BQ%2FMETQ2MB2u%2FlTFeEVQH5ZAXiQ%2BGnWIuG0ZWHSOcooskui0FWFwawP%2B%2BxK9Po20dBjTHlT0GO1pcEyhbhSUcZF7ChZufjCpGs5R9wibPqQhtrkpYx4GqI%2F0qKDkfSZZkGkcUtCeXzOGT7A0j7ATWA0AHUR%2FtrActqH3S40F3CgAwBNmih8nlLJzCSnq3&X-Amz-Signature=3c8439c0786aacbf40a38256c9c72260a30e1ca5a6282358057dcc20303be71e&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644OHLDQX%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgJtL03clHQgPSEsDE%2FwDksKvhYQhyVhDvpxxpkZI0PgIgTaelURTbJfnTcaGxsQ3IaTYFHa6I20nU1SyhNxccUxkq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPmsXs7aNoO45R4ODircAxspxPSjR%2FhoUCmBrZ1d1rQxOFFVM0ZDTnt%2BnxLkMQ2yi1CCr7Ei%2FLh4XOSmAUOXWp9hyWGGugyR%2B8gfj6X9C26wuOI3%2FR15UiidG6DKxTGLAuBHD2qKsdBYwQUg7iIL03oXctgcoX0gOMkMYhpBKXvqcHWnrhKy%2FnyXwVvnBltjBywj2i4pBeCmnwHZ2X5lmnFlJCE6pVk6htGT1kX9rdok4DE4WKZ%2BLdz3%2B5jRNXytDHK%2FOh6vria35U5cucWEi0zrgiC2Qm3U%2ByPN%2Fb6kNQDsk10riAaA5bDhuqPpITxTvj7Nr5e4B6YWQ1%2FERm%2Bc02DPFnAYkIf5WyCvYX9ggnYxCIJF2Xwwzvc4ewkZ8v8%2BjEgH1sEWPw1gWJMJS5fPsHQa7SjwUb8%2FCJsE%2BcKrR1NTGxRFcHcRheD%2BxkYnQFIopGvxl6NM8MFUM0O46%2B36KeBoVnGLZ4hn%2BbzJj%2FLoyEF7cvj7zRe0FWkB5gEWogKH2W8cdhnpsRDY6g9ArNTTW%2FQ46FIvt6Fo0xowTOQiBfKWlC6zfyz%2Bg3WihYYWorJvvRbKrbdIv8FUbPtucREPoDt8ukzvvA0TbIP%2FA58b4Oc0GJMQz%2FtGmjtkHoCJcp7kjlr3kdBm1L4%2BNddAMI2ChcAGOqUBjYyKPQUXwfEe%2FnZu7mL4bLJfYfTJoF27psSQwPxoLMiyQM8EZwW4nW%2BVOlzTwmncW%2BKmdGs601e8svHtiAvCcoQnhgHmSeP4Odxs4Bro6fS5T1DU23JqN3ONtJ4BvaYnwse9L08z7g1YPDYPF4SRqC6cDTpue0oJWSLK4Oxz%2F1wG82ULutEv2n5vZzB0rAbVX7%2FHnzEbqtvbP%2BekUjgpD339UqRj&X-Amz-Signature=1a9d87cbba0d40d894da17d947ff20d3a3b27fd749459ae9c43dc648f2139ac7&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
