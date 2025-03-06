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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFEOWXEM%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T061154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDf7QuY%2BWBmYxSL7g2slAV9wldIQLF2eYG9e05oeci8IgIgCY2%2FFppE%2BFJJX9dZh4rcQ5jhVTsOrYDdGQSyy5ZJhiAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDKzzd7Ob%2BcD00LbKQCrcA77sMdJTE0A%2BJYlbM4v%2BaALUUKOD6ez4MBnLNyZg8s9sbeOy0luDfdP23LIb%2BX943prKx9J7fjzsJav6yTbOsyZR4qDJ6iu2qjYShuoRbZnptRQLenS5Rid4uHhr1DuVtTet76wYciFcYDy9%2FvtepVAXaWqA0sjzbTwFNSlyYHH5VhvFo%2B6Jt9BCoUl42zby35%2BrPRqNsaAmenlhIhT03CXPHLqR6qAfXBq87N9G1wkPmivUTPSy1nsE03CL393mKJWCkGh%2BNb9hGZVxWxYWAgltTs%2BspdOAR%2FfqG7Gydi9J6wTVOEvC5LYbROoPTXc6JAnEO0PH0pqjn4NopstqZN6Z5Px0tvcBe3aD5eyzPlWR3hACSQktXmafhYHfunteDQg1uBNh%2FN20EvXDdfs3p%2FYvkDXbYnCVG8lfIDZOkP90DHE9vUjhXBdNxsw4UtaKUu4k%2FmFHAtL8QSsog5iH34I9YjzMqEJE7zyZs%2FFPiQJ7uF89QAIUauw2hWBg6emYBB7nG9LPFeXA1UqZQB72P4suHoLOHgkjBTeVuzye9RvYoIUJmslom21P9QDkU8%2BiuPfjnHlJ9ZWyX54Veqc5iLR9etxYuuXwyjfUS6cwlpZ%2BR%2BzEkDtA3CkaklkHMKz3pL4GOqUBgGaScSM1RIiiwZEjiKsyVnxNTOTGmbtyv3qAeo5Vd81CbCdrjOjmPqMwrD6uDzESfXnYIfHgfs97%2BC9zLvB%2Bi4545ogxoV8PztPlHHeFTUmAUXFFFzprahicVYa4mY0lurzF7%2FawzfxBuRZk4GeQ5sghm9McblX5yebC9nRQIr1%2F3SLAc%2F66ZftPM5twv4AupPoVqkur1LVI%2FMrt0hA5fHSwLe2R&X-Amz-Signature=9abb9b89a61e6b77be40f18e8e0d3816bc585d9c40405948d1a2c3059e2fc9c2&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKZFD5EL%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T061153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGKduUyo3WDj1gEboKQtDUJrhlgQRKHK8R56jgusQPoAiEAk4sIAz77WM6qAShxJzWFatsX28v7qW4oYs%2BlAfbVQ1cq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDMoxP5iM2r4DqoQoCCrcA0YCAeq1fLgE7cq5%2BCVNNCf5tVkdYTj%2B42RPTCp8DaLR74eRjgnTLDzYh3DTjNJovLzHAxmRN0ysXUF%2FmJw102JaT7JqNz6vDEMliYMUxPu%2FgV7a2NmQRy5JNPoYZ9C6MMVOXa8Wfyi792MxeU%2BmHeZYqn2GUsMKNb%2FI2gZh7k4TdUruiiqIr6wqJo2xa3KdVrySG7R4TX9e6NFv6q022h3%2FUyRgoK4oqV8v91YKazFPzTb0tdccy52%2FZ5kZDixU4Qa5QOcbdQy4CQFXMdL9Y%2FsdWWzANz1HZ1VgSOrt%2Br0uhgxdHgrNzUzTk%2FpMeVg2GJ1mBPxlAG%2F0TOFb%2B7l1qe3LV90pWGgZ2tJ%2FH3etnxZ5DU4Fn%2BoUPzSnV%2F%2FGg1EI5d%2FrQyh%2Fd0bGGKInSISynPf9xWH5fW5WpnnPjBUTCd1E8eAKaOO6npaKdNrl7nmW91qf2%2FcvSzfAatrmY0A1%2ByV2FhRSXCy8LFokT4pYg18dzjLqFm9Fe7lNyxWKnBtYyCPRUL5ov9M6Fd4utfVKPWJ4uOqoTuJe4kESXcZugnHzeCoe9YnE1dyyhH0Re0UC2xUFn0426qWZFeF%2BtAbaca%2FvmoHL14RRxRrhJfqRvgu9p37qs1AGdOYCAe8rMND2pL4GOqUBamNCb00sgxzWVX4t1kzd8b4gz2i4YisnrrqPHc%2FOZXb2n9zIdy0FToyZgJVGKlCICAMqT1333uN%2BLxmZx9gnWKimTL79SfsdGEXRAOFEahn1cpUhmH%2FWXVbYzlGdIgyu3ywVNSeOARZZfjV%2BKvwWdVELu1%2FVISTtf6yvVBg8aSA%2FPTQ8cA2CY3KqvZBm2kTWfbkpiPPf7FDQh7wOHnQERtbKTb9m&X-Amz-Signature=8ea2f7ed3dd9284f234cb959d8f02b61db91729085ee14e05c38e21a7890f37d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
