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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU5U7DWZ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T091205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy25OZXRY6FQY%2BKKce%2BI77tRIRb7BiajmuEu42ySY7jgIhAKFNQvsg3pveuZ5fsYR7E7Zgk0DpItWIWBPiAjPSBCySKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGitgCYnElWvYaqc0q3APxmByA5X9KQDKpt5LpBhSv33XCZwWtPqt7MRxVb9k7EQT5ePfzb7Mo9BhgV56op1w1GdQOUQDZImRo%2BGUfMuH09R%2F%2BxJE8UoVyequOPcV3uicSsFfJV%2FDXvzivf7CjA29ss4KpnokE8OPo6QyWer0f8kwrVUb55dVBp7Zfm0ilfgf6l84O7oVtN9%2FVMceTKXc2J0ZwyuexqYnFcw2dqfadHmILsSxLjZIepxiEyljI9KGqOTjVDfGZNbFc2CirlC490Lnd4BXeJ51zSsk41TX%2FBHCO4fRo%2BVQAUZcrhmuxneFeDJg0s35lbOuT38zmFtfLhItEeuH8Zq7dI1t3iEKjfntoJ5JWsZiNVhvcatN9YgT0DC6fox7mk6gHnLI%2BAp7rr6siSFxZ6bDA4H4DOr37YGN8gS%2F69IBOMXPvzTi6iNm9UDKItMigSZSY10hujvhlGXZYJWikkiNaF8hWh4vBII0SZJ7acomOPu10Yjm0aKd%2FHuG%2FRwDGpSDsUCsHRt0lOCBSpICUWfIJhsHZ4n1MqY71jCrmlPFwFgMJlL%2FUSzSvQNWawOJsPRb9wIwVDc6EMr5XPBm6VIVVDTE9ZNWgz6Ib6%2BVZasUWjDqEnOsNaKKr9pv9BW8rRkG5QDD7lLPDBjqkAVZNQM1mBBXuqLKjy5G%2FRLvzKPtxRubnlKbEktHB5XUe4KrCUIzhhHiqOEvNEjoCVM3RDl%2FNWovlBxbGdjMWs3QlYl2hwwvFk1MaXsc3fZs6tK%2B3W0UGb8c8XqwlOhiPrjBOWchuUSzqdpiHlVOR3SEOTgngaVe%2FkqqOYpkXfq44AErOoczj4EpEnVUE7KaX3V6jNnMzmCbevwzcbIewSaFxdYzp&X-Amz-Signature=f32111f5de74fca83d7ed2de044a9a1eb46eeb702b13ad64c17df96d8908af97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3FRBMNZ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T091205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVMKTHh%2FNyCGUqnsooXmr%2BnMBABvdUMg2EYYG%2BrGO83AiBpxRq1hd3aZ34tn1YcGnAQVD1V0VFFtxgjtuZ3iJ0qFyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgQWGpgCUKP%2F7cpUWKtwD3ggSxrnkFz4g5jLv4Eae7XDb6Jq51h%2Bq%2FkCPrgDXM7U6XD5qxTsoP0gOZm%2Fz5hu%2FmBJzrarxmjweCoLrCeRNAJTnqf0%2BTV6q8KTtOZlWWsb5WYDqfIb6sChWqlVn8QbPUJYaA8is%2BZje1SRIX%2FvG4vJvk04V4o90G4qBMUIMayv1fIT6%2ByrzCf0j3b9nLI1ydLb%2F6m9QBRGmRAeydIcB%2FzJOPj8hyNmEi58yIY8uSyYPgd%2FN0Pk42YrWSLfsZMB1epnsUjGxctyYMZCFt4B6jDcdxWYx6%2Fg7Dd6oa2uCyH9wMcRjZWKymEFd5E6q5IlqPUBYdbbpBO89NQtruIByYa340F7s%2BphpOsh1lbPuDvW6A1bJb%2FoA2jQlR2PUTbwdK4mwsNTHPJkScjHy1sJGpn%2Fp5UftbOfCbpwJ08OrEFpB3X5winBLo%2FBpp9sZZrR5%2BxSdEqT5or0%2BIfYk%2FJhTcKI00%2BINc15xqdJ6dtaQzJ8nG0aBb%2F0p%2BpyxYhwUk6kxCzfzkil7dqMZENJGdYd4W%2FdTrr4ibngAdHSRyTPstokf9uJXorm78uTYozXK8wQfJm8trfPyCK3hz9U1hcYSG6qyISJUxDr0dTk473wRi%2F6AwpCnfa0o%2Bu%2BdXWgwxZSzwwY6pgEPlJizKAWTgBuysxIYf38hH6Bj2ENeabwAR3A7LYHYd9zeey40sy5260YUzJfacZdpkBT8zd9WjyQ%2FOI1Ssff3ex%2BM0Q%2FLad%2BmXb41TFHCxXdMdT0icU5skDx4vz%2BdiFW6bDcnWbQwBvSnz0ijkMKCqBna2G8S2Bs7ONegPPYf0FV%2B4m%2FIivLlFwgZ%2Bp7q7uTOwOCjei1ArZaFkPMtwQdiZE3Z0%2B66&X-Amz-Signature=a3e9adb6c040f1949f9d57668f9d4438fc7a162352fee613a1a1342cdbfde56c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
