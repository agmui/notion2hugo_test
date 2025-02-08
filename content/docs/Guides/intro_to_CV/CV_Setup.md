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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QVMBGIF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T080909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCICVM5R3GF6UBA%2FsSrIAS1QPMvSWlQf%2Bm2rY8qjY2ePb%2FAiEAj49LbdbM7UZgsHLp6LuqgTc%2BpOK%2Biv7At5%2FCNwb5ceIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8%2Fh1PoyKoINdJ%2FdyrcA7pH9QFI%2BUJvHmHHc89nGQKzKdStTsMXac28L7P2gE1vJ94R%2BP4Mmt1QXAspIOliaejF%2FzPymASt4xEA1oeLu8MRoTVGqO4xlX%2FYaaFUlHAnHR4XNWWXAqfyV%2BGULuLyD%2Fat79P%2B4J7ArUGoR7jADYf3CArycBG3MbHLd2Gs5kIlykvXcDYD4fu2H3BpGHTqQvWWUCiPuyc2yMT%2B5I0TKLewzvC0QcqJRvRc9MGkXo9nOCUFKjgi9bXQSOMVUlWSDuEipirJODqJ%2FBsmVEY8Fg0fqZiCFhvl0FhbtXeuo7xjvDK9ju%2FCmFlBMI34Yl9Y4%2B8yO4iiWqP8mA6Ocs25Jwdfr%2BH3Y0Jey90Sx5GN0JLiDI%2FC616mymBtOlwnAy6VZVIqKVYoCeqGBrYvMVWi2UnBLY3X%2BerPg3B4iGWIS%2BOBl3u5uDUbQb3b7sEByO8h7Eoh6mtBbzv3AYOSkpDavrP6yIxIAtiY8vbV5Lahim7lg8i8lR%2FX2LbtE9gJLIH8Mq%2FmAV9QPwesJZyfQv3JZnvKcxsvt16Yr6QP0JEn88GLYzRYOuu9YXnztvpSH6q3znFnnwjQzvYv%2Bj%2Fac0N2J0%2Fy82%2BGIpl0UQaCzr%2BnKjCJGst6AnlwNl8IHKYrMN%2BQnL0GOqUBgJSjOJGdVKOWwgYK%2BwqdalhI3DdYEw6kIT%2FvaK3gE5M84VdJeecjR4aM5JiwqPFNKLq2yibdpui3iAAnxq8ZOWwEKvFzwIh6VW09hn%2FdF84%2F0ysMRk%2Fyvg%2FKHMsDwverNW5qajs4WwAAxTHR2%2BvSIS25tyg7MAi4VjpykVRTxsy4sp4ZtAXBehyFf3EZLT6LasD9R3YGWdmq%2BccZ%2F2qzzjqFqWau&X-Amz-Signature=3191a051fa3afa19ed3ef174fb5424356694c8be4b3011ce36456561892fb51c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPBAY6FP%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T080909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCEn3y6fn0wJ2KeM8qT%2Fkf6u4TVMKNFyhIBarKrHrUipQIhAJHFDNGtpzK2BS1nMVkVaZ1UUlNKl71M6IT78Rf5YJ3CKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1aUOgT8HrHncR9qIq3APCJeNGsvZhGb3%2Fd8j7wiQFVxsoGITTVpT7WWnz9CHNdxwRZnPHSEFHyy0Ksa%2FAAo7EJWX4pqOAfwkSrrzkeEhEaQWV6AkiiOCt4YE5OD0AyTDnKUXYrsiozfaibMaBhGvkH6%2Fc6zitAdwX0TUcdu7NMigMZPi0zEh9dH9EG8qAUnoF%2B30gIMKLgPv0MwMnDcclf%2FN7VDnQtj7q7kCEtpkzEUdsiibJnCKAO7V8tbrlT3uXGB2s0gFMmQI6aDtr7Ij0qQTqtYEyYYfzNHTMMVDTdzAWgtKVsrwoMgIyfb7djr84zV1GQwtbOKGphXWpYNbvV6734GgSLUYoU2wnDb2J4eLy7jM3wK1L8hsewAZKNb6uHctqRzr9J9TRExIChG5owJbbpC2UCcayF%2FbY6z2myAYyJO55X2fSRQDW4AuIuAahU5dAbCWZxUU%2BSjqvcnDDCFgC7fzc0yExLJW1rgHAQ1PXPaOfS%2FmqTsfMTr%2FpCA6jvm%2BcDU621xs3J3LapKZo1JxElpV84ix6RLQYMzM3lUIZ0xDyqtQnBFAVfkpogorRlkjFo3WB%2BEPb1GJ6ij54U5VDMW2W8voH0m1kR3VWvtHEwsMqFbXfkeFeDzMiyW1qHwwz4%2BgLGIKfCjDhkJy9BjqkAaBHWowO5iBLrdBbCQDzk6MG95fRFhZu%2BYJDWCe685JLFX3Qegdfq8dufCXc3DdqpCFHZYALqtw80oSKe%2F31sZ8L6Ccyr38IjcAx9zWMbSQd4eK1uS43syQcs37eFqy4cGODTuyi9zWq4cBK7LpkTLCV8HFq16lG6PzHdvrd36CwwryJ1%2BqcTjYH6OftIBATJ640tvSA2gKguUkkpQG56AhBE2en&X-Amz-Signature=3739e2ba546842348ccd7e5b2a342bd396421a9c71d72d4d7d15c525b2812950&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
