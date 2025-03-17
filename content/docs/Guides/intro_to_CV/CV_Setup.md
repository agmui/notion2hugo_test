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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLAIPKSZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7xsPcP%2FBlbDnasSSpMKk0MPXQijzQQ44yxEUtM40hjwIhAJeQpImOc9%2BnQthihmT9oOJDrf6nF5NZFdBn7BinRupaKv8DCEsQABoMNjM3NDIzMTgzODA1IgyouhTMPisCGFHSK9Uq3ANx7hXAiiBKgBjEeMMO1Wa3wPaOQYOqeVNgQP85TbRJ0GbrIWy3XYPMRKPeWPBu8NvD%2BJryZjgBMB8G97Q8IJhD0OLKdCkcmVxoomjSq2zpbuIO6ns%2B9NBKztetW4%2F9udUg7EqZ8l%2FmkEniRcGWgrd7nEt5LbO7Te%2BKL2Yfh6XhASDZ%2FvrUycbWzOjhFHnPoPPlFlm%2FBQlJltRLDujkd42y9DGnVR%2FOnuafuARE6k%2BoCjB5xpWo16GszjtilshDy4KPxpdVuVcUW26z8Ja9zl2tsOrgcQ%2Bfe%2F%2FrYt4nfarJpY7xtWjzFWVP3fCXL8FtBAfk3tkmquas5Kth%2BiSUNKwpmW981NZWs6z7V7ERW6eL0%2Bkzy0Slni5r%2BBeEVskeeWQCex1wPEyQsYDFvGaClX2fJhh3f22L6LD1oFdp19kzga8imn5jodBcuGC1CzuQb%2Bdbeikue%2F5m4CA0HEM%2BdV0fw6r65R6B1hTsjzhPlq0Vzc6AlhP5aB9Aqtvv0D5C4t5MQLRwVFi8GxXxNs4hF5v2zO5wqMJ3S4LHkQpXHAKLJDt3yOS%2FCVrZTcKe9RksJI0XAkyA9MHgi3Xy7G8R0T9y66xBHQNiX%2FXq5KlXr4OCYTe1rhsTobSW3llhxjDPxeG%2BBjqkAf1VR3aoG4vLwfhnlpX02LL4uFhmhom1bXp9ZWe8loZMLIkSjF15lYS4hL1TME%2FBT5Hck0VFqQhHnSaWKS47ZbWhvvBugN%2FFRMgCwugrAx7PTTGzezkr5I%2BiMnjaiO7iS4sc0G9m1CaNJwLbTDOGiXAfqPCPY1F5jHerWtvNaqWSt5s%2FNvwKsj0lJ7r%2BmjnifsZ4xTZlMCms7bq0HL0q1F4IUEOK&X-Amz-Signature=ea20b1f95ed6f07eb76abfc0afb59e51ecd4f4d6d92ef1d320eecc27543a09cd&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM2UX45M%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBL%2F02SYmrTNwFUjKZGX97q5UFiSTu71xTwjLYybg5r3AiA9uSsKg7PMON8q2AabTu7uNxMTyKlkA96aFnF8GIbchSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMHBOniQl9XrYMMkRlKtwDvCORhfnJdcAmC6CiiLIj8ddj2SKQL%2BKb3Pc0ubBi9LomdPUpuvxYq8NIGbhZ6bBpLrY8nOW4xfef3X4rRQfuEhZ2%2BbhpQRxX%2F%2F5xDETdspfKUjUHCV%2Bjxs02yyOfarSngKueRdvvw6rPzUk0Ahnmj7gPs5H5zoYh3%2FBToWMYG9h0%2FUqqBqhENxOeK7kowlR8CwtwN6xB1CCe6Ful3W48PSE75FLEekQyGDE1eNVE9JSDekmowlT8hlUzhx3pBxdwVXRKeWDpZ8sb5s0KH1HHYdKop0c%2Fgtsevb7A0W5XGV2606quzUtZJ%2B2kA4S5WXH4pkUI6P8MvGZOjbnEYZ2vi%2BTD4rbuNXDbLYq%2FJKx7fi1e39kSBRkOKqe%2BAppVpZYvpg%2F8AqdXsmPW58nr%2BbG1cY1Gwl0YHG%2Bf8S5%2FjGDLQVMLCDmfIvcmgYg1n8ADaEVy6vwYEREqOnEY%2FkXpC6N0T7KawWjrUmwpUqE33tLbK4D70j0wTWZpknHEyNKJXIqB%2Fws%2Fx2sI65l7G0lrR9OGKBfMFlDiKojeT%2BHsI9VrNNCmShiGEjPmWWhMLoGRvWK0MRIbferbShnsgHGQpsAjV5UybZmi0azJOILnzJUp8wnMXkMcgHqbK1vgHvww3cXhvgY6pgGuDP0YHremBvdzu4YAWVCTTJntY6yk0XklBTRqbtrlF%2BnLfW5vfxQVXibm%2BiCxB7TgRkRk%2BhkADc7tlIaDzciFNg1xR4rdDF9UnxUDgMVujAaDqQmaKNxX%2BXy9PUpqtbYM8Z9N64OhYoMi8YcCmY%2BEW4jSToZd92sSiBGmPE1%2Bh6b6EqIJNQX%2BDg5MOyv7u1KaO67fWERMhfhP%2By6f8Sd8vowKcq%2Bi&X-Amz-Signature=59327ec18686b17e2dc6d75a59afe1c3676559636ad4be7819bd5fa669915c51&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
