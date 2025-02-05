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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RT5WQFK%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIDyAVJkREUVjWAbqJJeoXEqMMrjCn%2BKIezfBF%2BLPHqTvAiEA0UsS2mk0fR74EYU8XKCFAiLg3onlcqB9A8Sv2AjR4Awq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDOg4%2FJIcmknXOWaV7yrcA9SksYPtFkA%2FUFKFkm6MTsyA2rTBBg2oXGUIa%2B%2BSkvW5EywCR9iYlLJLIiQuXZcT8xqWk6iPkaox3MYBZ2yzrIfQNiI4wjW%2FUbrYHHFG6WLlJFlYqozwvGmA38ew1X3GMl8tZHnWJ5UTvIXB84rM6wrwHz3uXx0w8PRpP1cwJbCUOMVwOhv8vZE5RaOrMDlnXzVCSxhp97Ymk9JdZqZzZ3N5IoRcjjMf2hfTz0okjxF0ygnv3n12oIDTmGpOm9A8QWqDWe%2FVUefkcT0HYiE4w%2BhCS%2FpJjHP5NUutEZYKALIlOnpjI6t2u1rxxIO%2BxOJI%2BijxOBmu%2FzSOhDG1q01j3LnWTDMo3Mo2x4PlhCLShMEkMh8geCvaDQp1FtDcrPjJbzmDB8YBCHYRI5lKHdJiubOZVXW%2FH%2B5cPlUyc1acfZoWGy0sn0SAA8DDL9Oaq37ZAoq5%2B5O0NeAM7aJwVazUL1vrqfq%2FylUew3Sr%2BJc9D58PRNMxhfxqKSZafy6ZDmDX6JEa5JItUH27tsYfQbGHkNHcsqYsUSAarrAGCZrw%2Bv6mpxCii6wLGTUGfbKPjJ5aKk9I07TEWtSHWDCPi22Uq3rrHA5uMKWOopu6nID6ukLYFDxezx%2FIS92Z8uVXMOCBjr0GOqUBSt39asfgxih%2FOp1TlHCeWq8PTHo159Le95O%2ByU0DRADmwwTO7H8AHL%2FrKqrkoh%2FVtzybGgyJvaqTfW8dL8gBZHVlw4fbHbnMobyygFbirQp4QP0AXpARyHRbpk4FXoeilCOWjuZC9aENy7B6%2F0IJVBlGjkEh9MDVPOXeV0r9YbhzIwViX91d85wo8%2FN%2BNjOvAzQCBWcPC8EsAGgXLhQkB87KBKgD&X-Amz-Signature=b1bb1412de330f585a97cf87aedae16e75ac9f27adbc29568ea57ce78dbe1f93&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO2VLLHY%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDFvhPvwjnsbRQyp8LLaAYVfjjLpISEEkuMeIKxRzCz5QIhAKGZra8ckiM6TusubpulepZjYlatFGoU96aSPFgvALnVKv8DCEgQABoMNjM3NDIzMTgzODA1IgxUpcF4WG9m4rrUO6sq3AN%2B7cH3tpdO0Cb1uh6MeFYECVzqbtdMuzOL6X%2BcB6NDW4slBQu6m4RVjiWTVc2RozuLPfZF91pmUSev2zrnmksWIUYu%2FqjJZlFQztHEy86xm0ucLXyvm4zibtFoY1ySF2UxXF%2FKzc7oBmldAWlUmYBg0R%2BjPU4iETVr04EfsiaQQpfmv2vhVGeHRHafehMYeCQjv1LPd%2FKMYTF6Dwc%2FJfT%2FiURJ5qDNiF9sOli0PtwVNekvGvZs7YSiYSYx5WssaJrCATceEaujRuK74UpqjZC1IOTtl6zJ365m%2BxRa77xqxewUWcBdvx7lMRtG7kVKMmjNK0meP1jM1CHDjBlCESoGyUEoagPyytDSg0KNy68CkDxf%2B4Ao6f5f3le%2BP%2B2d141zle7zJ8Px4qxLwJ6hVn3qBvDw7wYQfuDdr%2BWmSn6xCEXcfxrEeBmR373sZ48C0EVMAwWrS3nParYQ9YiAdqtpqfFmuG7PK270oKzH9SpTpLypTDCqH8SYSr9wKo0mmgqIVmaugDqnpccGcPVQnZYzgtz3XoinzYojK1xrbSOymOfnJiUpNyIx9gzaJvLCf%2BCHxIA8AAVQvBTk2o1VOyiiNbzVddwq9d3cT%2F4Ln5c7%2FuqC6iT3ijaOBgfbaDCOgo69BjqkAUvGbO3%2BjH%2B9Y70yzfrSpSJHsMAn%2FjlvHryShoPAcNdd4Wz03J3vKvWzZtZGn8Hm41e1UG4g6s8rN13zM0Xva9lhH7Xlq2Sh5aH5cPmQmapdnZ9z040MC1xPfSZrDkaIjcoPvpY4ql5jvO2hbCavPW4BED%2Bei474Y8gy0R4krVF4CWTUONpSylxfIrTy99FcoBbKkBw9pmQ0S0Eu0KIuR4KbBBzw&X-Amz-Signature=2eff2404b0a61eb30e8214561120c0fafc0a8f220741e0cb010f2d23f6f15912&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
