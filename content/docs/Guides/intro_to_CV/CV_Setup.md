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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EOIZEDE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T160307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIAHTfekJuw3005F%2BPuLIqiZ7FqcEZp8W%2FoUWgOsjzRXeAiAOUPxQtI0bQuXfXZ1NMHVWwtZf3AReGkTzaQcVDqKp9yr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMirHope4hZhajRgk%2BKtwD7qqZwJqDrj3w2e32OO4Kx2XaiVAKeiGJI4XrbqEupI%2F4HOUdkrtAcS7B7mzarG1gk2Eqct8CIbROqiP%2B1gDKGgP%2BosWPm1vtLO07nG2BqYdHAZ7L13SkPBoI0G0lmmaeX3igm84FiHonNIQ%2BscRbPfB8z1KNlGYgWPETXWtq6dl%2Fr3J4lGrXZZDejZcGp%2BV2VoR4mqfnZhdyZ5Qqqs9BRcJRxjymRzXaF09xNRfw8SIsmhbf1ogEAa%2FcHvVZ2lxz39%2FhIZSdVWp2PN%2FhQ6I3zfKqlR6EFcY2Yn6UHCdtr2y3AaiOQ43SSlM944YkmsDohjoCUGwVsJcPTj75ynNNC3Df4N9KMVOwnx8fjBTiYbY%2BoNaKDKV%2FZpYx4jqXpV3tdYQhvJ5n0B3DbUQThtTSAeUOSO7v5lsuq%2BdPH6H%2BIdrhVUOdujEG%2FNIjzcXRA0qzorp5e3KmvyaG0qW6a4jwY0K%2B6Zx%2B3lrOEp%2FtZ7rQjXfAKhYOFcWIvUHRqqH1zeQFIhYrmLvf49O4fV%2BE2XcRzL9mJIVghKUpDSG6F3tYukaKNX5A%2BmnK7qdTsF5WDxBh%2BoaMxVvJHy4RmAUEy5uB6gq%2B5YzY8C9Of%2FdHZHu8VQYzWzZpCvjH6%2Bp6XR4w7rKxvgY6pgH5lqZaNwv76DepGgLos5OmgJBvj113suuGR6ozG2KKf%2F2kiwcY%2B9EFkfCzjXiGtOtty9F0EsDn8JKSlSFjU8EePy9MSJ73VyS%2FJTZCDQVZA29g2BPsZne2YtHo3V1PolsEUFFeOs0yGu0naVqsXiHXs7Pv98nK4zj2%2B8UB0%2B3LYkvtwMrA%2BfhIEVMeDXqRNT1M6bWbngItDvivYexDQtn0YSa4tyfs&X-Amz-Signature=218cd20b8c09c58d1cff7d3e423d1c32f720307075cb96f712b40681734363f8&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJRFDSHU%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T160306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIE3IIp%2FWH0OXsmhDvgr8ycOcmVomWHp%2BqPSz%2FasoY7F%2BAiEAqC8gq8U%2BelBBHdCFoFzfvI3bMmoP%2BvP01pqGnYxghRgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDP1iTjR7v9VN85LAOCrcA%2BvGbd%2FGP8hgFxq%2Fxkm%2BapQ5Gq1FcsMMKIzatQ2jlnBWeF0n%2F8l4W31j339ZvNQLSrFJXVCncGQ9z46%2FQgeyDENh68kugG1d9BvxMnHC4SIPhmrozRD3CED7aWwdPSsMbstqsokOTZNJluuMdDh2u8N%2Fo690Thyve3I3YhTJOYwARYbrVXAWxGJ1l7qvnObZZrYQsb9HyqggzAdElYEeKKXAfrXBaB4hPW0p5mKjzUJ41AdBoVB9Rk4kcndOGd1Qbtk%2F%2BDs%2Fhte6AXqsN8FqrQEhEzGtbVEihAoq7VSb7Knil24KC7FBpm6JbiYYBsK0VWY8TZQTLCeZ36ZjhLi5Z%2BY%2FjxUgN6OB03eC2JOtEM%2BYPmQIskq%2BKBH0FsjWM9D8nzNBvxquZa6GWidA3a7zF6ax6P0T65XR%2B0k%2FCU9rLBFjUcdRfbj4Qk9kZtrRg04aeicRC%2BaWmxk0N9k5vw3ERzHxkfXA67EsuwRk0d6ZKAWdWX%2F5srYin7M5eszW1cgZqqP1Z93TOb9zikzfHIONZlHVHlRWmM8ErfLrdMIpFa3nt4x7ejUqVyIyYBfYdTZnASBawaFbMdUgy0kC1rt9kafQrbHEhXeHrLzgK9l%2B4q61eai9jyTai8nYslpZMOaysb4GOqUBqX%2BPf7L1HnGSL%2BjbDRRI91uqANZmYsIBhfVwCL1n9VP1FDUjR7UpPYKDKCBmKWyolKlMIw%2FuHAzLZUuqmOu16R%2FFaSrFsW1l9yByBK1TB3kvsnOwQMVyYfgVf6LRGfi3emiJXuyUSW%2Bm99DD0gRLn%2BT9pZrk1dtg8Fszhthn4wLH%2BrJhffxdGoX2zg7yeZwC0YeIa2RVwpUpb7%2BkV7va9PSdo14K&X-Amz-Signature=31799389a591f58d207a9db5d282c188c3eed937db5cc16b5bf7a26a0c916eee&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
