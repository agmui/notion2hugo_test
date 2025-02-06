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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664FGNUQK%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDWw9PCGxY2alDj2nhfUGfjb7LnLiYAK%2F3i1rRpBObh8QIhAO0JG4LZuR7PiHltEW1IZoyOTGsv3ipcwVBqIxqGoz6jKv8DCFEQABoMNjM3NDIzMTgzODA1Igxg%2B1f1gd5c22butVcq3AOXcwR%2B09dLvsdrs8T1SrmuYorqSHpATF4uSjJesndsa5VtEc0J5lVqUdbGU31VpY8761kOqktSDv63NkOhzjG0xWSHkluhhNAPaEcD3DC2L3ClP8P9HzLe8xV5ZUpuNVylfItEKdlo5157XO5PMs%2FPv7YCKplTyL54vf39EhWKWd4amzgXlBA1i57wkQi2rZpo1lhDah67nnJ1xBplqrxiBekBzmg3qBPAaEmbbfolOhzi8Pxtv294Nww%2BZMrDgxo445Khtr3Bow%2FmFzghYCqVBYBIqtBho1kAjBJ7Mn1OcF9CY1vnJaycJUYhod80zum8%2B9WwGVPnaRSnejmCReL1ihTIJtqiJ%2BTW59MWAnUbTywPzJoEAP%2BHUvq2KfNxkVZX7V3F7Nf53esNF7CtmioxL60IWFc32b%2Ft9NRe3o%2Bzo3ma3voy8pvcF4kEe28NFWMCV9jLXhEX%2BScgqvN1yehEYzv0mKlrXVjrnAYm7KxVCIzEOAU0w1eYGPXCEB0xvxL3OGAH9zXInE8U4s1PccMjh93sJ54c8fNaVE26NiKCoNZTl5WaELn6FQjV%2FDGFvpQ4dH7PT%2F4AshCnoUpsF9beN8wcrUFHaC6pQ6VEIt3L7ueeI53Il7%2BaaxHpVjCL7Y%2B9BjqkAXtoOjmvyeFEgsazY3DHjSIOGUO2PEprAY6YNB6CgCtEXJxTR4azmRQlpMHWhK%2BolUzWsxGhrCvNAX9oM8%2FRmfSTroVqQz0kvXrvcLYllcN%2B4L3VlaozgK1HcHtksP%2B0o95G43z7wIHiiyA3or7xeSDyAZK6pumSlSxHnDjfeIR%2FT%2BGV1u1ObAIO5CM837AZg4qQFZjX4GBnz6ykzHGqmx2%2FMlRC&X-Amz-Signature=798d373761663d0bc62e837fb1f01ec4e8d9411427413e8aded78985eee14794&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHXMNET3%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIHQ41V9o4zo50dumuUtmhCxh5M1LYZf7ys38CkgvC4HeAiANxnUKhNQ1nQydgry%2BdHz%2FLKS%2F9QCHbjvQpJ87z3OJDyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMR4aD%2F04OLLQMX7VqKtwD4iI6PPUm3tfFL0%2B74YPbLoAKOcjeJYyeZp84VEn3VcuiqITDpYXFpZS5TtB%2BB%2Ba7ws%2FpTJsh9oJ2WDI1EO1wbmAy3LOQX47Cna45ONNJvozeBxOXpDU%2B2QtkQA0TwJFsWN7gU8mxQ0CEn6Ofq%2BbZPLMJl38P91qQCNEMhvXj1c4r3xhvBxR14NF0X9jwKaVSZGBLazmOMap0mMJ027pwem%2FN2xQpsc0TmjwYWv8wdDm8%2B37kQMsn8ts%2FNBh6IDZwg2vX5%2BJ4oZNhJ5SP%2FBgY9cOGzwiWhufLyZBMeBEBca4qkUxN3gSWAVjnLwHkSD6wrh725l7JVpfmE82pPYKuaQ5WUKK2HFajg73RPOuBFp6Gkl%2FDmWLQPHka1lTlCeS4DdV9zOnLxqzGE6aoWSFIqvVwEzZHrIdhDsLNXUjQtX33uNxeqqTJ6B7CiwdNh7Kb38XilVazzTedr1sxJ4g7%2F0zsgkpmjCRQXQ%2BAYJFfGO3sPRA3cNsSS0cFcCcyZ6I6dMX%2BBs9AT5BhVAHstGApJvBI5m%2BrfSIdJOfSwi7pjJaIHwPCSkZQlz3f5aEqunvkmpc%2BY0gBlYS%2BhY2z%2B0xiuAckD6%2BEb%2FzcNfP9WD41mSR%2BCFdf02BwISyZqK4w0OyPvQY6pgHIpYadScXxVBCZAnffYxKDJcnuixLXMhxsbU8bg0D8YtsRjWZ%2FXN85liec%2FcgSGEUj63elapE4VDm2oseFXjYlXn4IyLx6KKZO1W4ASugTliiHVm7PWQmIU3BUwVgtCx9a7%2FNysZKpgMPgabt1%2BzJK4uqsRzd%2FIfGYMG7NH8ZO3ERF4S8P6nkmsoADnZhE6a6i6vePj%2BFmOOwiz9qMzRt6qvxpOVOa&X-Amz-Signature=b100107331e6e01ab68c9805181a3e65af64d7af4e7fee6d34c9ef0d4b7963fb&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
