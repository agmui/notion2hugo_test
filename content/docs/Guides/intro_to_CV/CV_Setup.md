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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3RX7ARK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIEICRyEE7gw7O9S2BRE3msYw4HRuWnFTGUoQ4df1TmuIAiApkkOdltSBRijLOmRWsrRK8LWRCozIA%2FmFZx6WWhJr4CqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkkvkIFq8vN993%2B7fKtwD5C7dMrhG7JaKRCd6r7XAsHyXnwRVQx95yA8V69KE4%2F8j9TyeOLElnL95dRyVeqTFnmN6ggG6IHCH6tbalVoYceBXDCSFNE3k4tjJfJWV2jlEBn9o%2FMsf7NcxnvE%2B9cMsJ6%2FXlKqMj%2BDniY%2FRUbyBKsCaHhQwJFUWvkh8mViWOZXwUSqyvFCwfngeOZpye8I%2F0wGhZClN6IgZ%2FKfhySzZLUyDCMr7zv7K8nwarl1O7dHz6IyVttON1Icz2OF3XcJXFPw3VIoPkKrJ0iqhnQaY%2BCFLcs%2FhZG2gFkAty%2FuoY8N4m1slFWo%2F7nQAHsQCeVtPEO2JcFniPg4qQwRU2ilkM598%2FraUHBr6m7hX4BU7MXsjtbfYkzEbYN7n3dGfMM0aOtLYznKIf9MQjYLDGSd9D7Hfzt1Thia58x3ctIC0DSDf4pSIc65LwTBQ4T3yempzMNQk1InBlPwtQCfXNDvi7jfV2YqqmOj090E3hvFuOPVCJ%2FeZVOPfkPNPngcEF0Qg4Wt%2FwYv0ouyiasQJFo2AntQK%2BsJ8wkih67To1pBlu9yz2KE6fcVwCOViEuBVdAazp4mYSQ7RSdqPqYf7mWrWdHl%2BVAFrwatwZWo%2FbssJbv%2FjANdZmHbYKJJOzWww04XwwQY6pgE6kw5ZJpeaFV0ejbRnWkTHhxpFKmLABtsng1WFdzOF%2BvaBIYEREnjJiFK8pXjGN7VJBDR7md1xjDCzva4Ystjh%2BzS3Aj7rbkJYcr8Uuc9BjDRCA5Ef6yOUB0c4cG77NqrCMzK9Q9bpxusLgIODt4POe6jgbPDQZa1TazVzlfKB2kWreHohuwYBnVt9vIflQipH24ey92Oz91yWP%2BpScR9h9m%2F5Wl0g&X-Amz-Signature=f49f844fafb0aa4d5b32fdcbb920eae34a51b18ab3c4baf6d9557c8553b3a9b5&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJXSC5J6%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDPQguHtdJ1NxdG4v%2FPjDCctAZWJ2eR4kkZ12JNu9%2FrggIhAPJLK6QX3N6we3HIm%2B24qOHjQu1Xc%2FZT1eY%2Fmluyv1TbKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxfh2aXPCk6liBcnrYq3AOOI1ko3Qb3CrA6npPCNpyEl%2BBkldlzWmgfI5Ov4WAm4AHVZP%2FHi%2BX6Q6GhqoQIHUzBFv1ek6RIiEhpdonbcKHGj0xPxFd%2B8sqSPGFLNrOX3BbqVlyDG8O%2FevvvrIy%2FI3xpVcFyBLNWp3hvYlH%2FzQomY2wyQqn6%2BmGFRqNUQEfY%2BVwg7dPmQGxqvhZlTH4ca0f8tBschaAj9A1mCLWODPUdM7Whe47Z6VG1y%2FOmpilcq%2BmutU7B66GuWzNktgoDkcvMuoY5s29vrWmF9WxrHNxlvxbQ68vNYNATRCSOqctXp0tczdwbWUOc4trJ6ayvoR%2BvRVEg45iYK%2BiqBh7TdVg1crh23sPe6Et082u3wUpHAZp4ru3KdUlOGSKOAouKxotQvu5MKPANv9pHzfsivYUAHOqkzIWOeEeCXgCNwB%2FVQlL668JqA8Z%2Botu42X%2BgEGTczHYrancCd7tGXoKygl4GiAB7u9R6JC52foaeTlZOo1h88LxZ7hQsUE9BbnPI26vT5SzXXekdRoAtjbW%2BtVYShP0lwcP%2BB%2FgO0diG7MqjnM2YG43kzTACF%2FrKVq%2BAFbESVLVhdCg1X8UA6jkrqdic60BIPRs8p%2FObYImDVcenaEjRGwkXVdoe73p98DCYk%2FDBBjqkAV6VH50vkaYOYqHiTTE65JzxVOV9jthACaW3OSU6PQBg4hUo2jkFAcrjr9ApOC2Kz9BcUZCkCio9lZf6Ml3DYYv4uGd6VCE9mKUq4kfmY1g0Jnyj4joQUT0%2BjKA0W4ZTF8bkxcCgR7tbBWaMvjglLf3tDEX0b9r5wppuqTs20cqHNH48BaMWspI85sUFILycRtYfGxvjcXDGln%2B6Idoh76FB6oue&X-Amz-Signature=86411816c5d96cf8a8d35d1412cb4c612227b83046b20372a07daf096483f5ee&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
