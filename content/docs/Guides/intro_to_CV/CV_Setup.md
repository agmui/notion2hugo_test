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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPB5UKTN%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDDPcvWGonUgoDL%2B6yIHknj2k3niJW%2FMs2etJCLMJCLFQIhAKI6GUb8o1HDvWjhOf0WT7EL1CMKMs8kHAbdksCBfO%2BFKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXsm5LMxQWysHCmqgq3AM6KArPEa0mTwUxW0mHNilI%2BdKQOhCmmPqbKzg5Q%2FeZGc2cw0nzvHAW4dJQXPZraXXNcEfUXOIUk4TFb0skm5KTQqYQ6bQTmqH5SE3ecAf8ECeEA4XUWZzVNuacgJcl5R7G46ItwmqA0L8HdVD3pSFWXcmzjmVv%2FLjVnATk7bVYAg9wiG%2BxHdk21iw7BI2UFxUx0MnhSokeO%2FY8DimdDMwqw8fWV5TeIDPbgm00W%2Fxm9FcI34J7bD9fKQ0hGuMchyS0ZPj071GORuK%2BL2UroVokI%2FPX7uM5vofxeImG7PPg35n2J%2FtVh1UlIgzQB9rqdQgqpnh1EZRUM2DM5T2LAc%2FF%2FO2IWiZjE4nQgyyQZK7x7qAoPEJeVT10%2BMP%2B%2BVMD%2BbZZfMFVjtnwv%2Fe8TQZVFxf5QlfCxjCUrQmStHtTyFlCyuvg3MeVWkF04pU5gAVOgrAodeOdt%2F3J4EQFo1w3vmYzyNrCzQEyWVYPB9oeKykHzKT4ctAzqag5iz4cZFUyLl5WkhXGqOQoxkGi%2Fe3z6PNCzn%2FNO%2Fv0gFrYQO2KAMlixoSDLs60MNRI2ckho1EQ25S9M1LjWAxIAg4bpCg7bpMZnQOfNmkBnF5YqUbiu%2Bxf6a58nM%2B72bdNyX8BxDDs%2B53EBjqkAQU%2B501afmsIknWe89SwUBaqSyVZ9WS0ay3zLHpn4psTW1xro0om6fdEkyCgEOQapFn%2BwcnIKZJLdUBsr%2FtaXfgMCwez5EoHqgrxRGOgjVbWbaxR7%2BrbAjtc%2FccGPi50MwyEsHmfs1GAqFn05Tbpx9hfiGN1eBlSxNWx791T86LqX9a4aav5X5Uir2hPO5IbxHuBRsNK5NjqsTDOD8fAmN%2BeRdrP&X-Amz-Signature=d25ffb88c9cbc6ce044d7b44183ac612ebee989093f922490272125aed0ac923&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNKJXF3V%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIBhu9nTy03YZIzxQdEaZsR6fj0o6tuXEpgaxTefYjq0MAiEA4jLHkjfKySuupPujlZPYqT1HNZ9Wzn%2FPEGZ5cJhCXGMqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8uXSd%2FQkYKWm9ajyrcAwmurqI2bO8iizLU55B33D2NPF501Y7KggP3c1ewkt8SP9i8DTD2jIi%2BEesmjlmCgh8scGx6ds9rqDJ6oBgmnCXP3QJJY1%2F08HbKcFtvI4d96yri%2FYqAdn3stIPUAFCQVjkqhl7YDWTZIhjqJ%2FUvN5FejgggsWP8Txtz7xiDv9i78A6m8TWvksIFlTO6o7FK%2F%2FF5XPwxu6yLEvC4TbOO9vkWoA3BNTghE%2FMHPnoNi7JbNrKAD2I34lpEI0xoHHEd5NhqPYLfDueesHlljHtOEeAneKjhSuwXCwu233WLNQrf3bWMxPOfSgFHdrLIPdx9Uf0v8Lx1bzwyYs8Xb1230sQDrF9rfQtz5NwgHnqMLXxkOupxW3%2FvulOIJyQXl8Gb1f81a5oYFr9K9KPsTMKO3K54ANn8gInNaCkYoxdx3ArSX0XQG31EhYxnC2tacgaixM5N%2FWnpZBxq%2FZ8uuIyO6kifg2BlsyrIzbRA%2F2yv%2FZVvCJgRBGj50npoYoB5x%2FZOoC9e9QDps9TqG4sYW8YJZFuFSyYEAshiOQDYlSvIXT1unQsnOb9cA9%2BP%2FzsPBQugFzMlNdNO1M4YEOPreMaEp0%2B7vZBzRIFdn7Nh8qQ1uNqYMFZOcXFQgA3Ip99fMN77ncQGOqUBm31Jv%2F4bDjwQkvtTeL9si6hz5UVgWRlEjmzUD9tdGajuuL0l%2FVwNn6mA5ItVWydc288%2FY9hbA1QvYMu7kvXGkNrVXQSqngD1R5hjdtCPpq9LbqHJsP1hyj%2FkedxBqdOiJtONvlC6jYTSvgVGUnJexAI2IRxgHf4i463XlXvKGSXzgjPZaGti2VnqO0v3aGKQTgG6CNs4DEWQYy%2FnMUs2%2BmFKhvLT&X-Amz-Signature=d441a9417aab75be40ef8cde5aebf392d034140f4d89b3c6a8ac243b7e9ef652&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
