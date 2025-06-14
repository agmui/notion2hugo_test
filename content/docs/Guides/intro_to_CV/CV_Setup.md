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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVGICHXF%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCfg%2Fzn58vEuEyw5EHca4zxHkT1Xs4IhE21mbhuDiW2qQIhAL0DzrBhKccvmLlpAziS4wYrOyQ6vXSFHgBpoj%2FcS8NaKv8DCCcQABoMNjM3NDIzMTgzODA1Igw%2F6VP0keGYjwZgpYsq3AOAbRNp2sA008Elf6JOHMLr%2BmCMewfsKCtsJBbeWTrtzK8aFqIzvImxilUU5hKvNcoh0QVYPYKdvrlOFXyIvZLO887lrRFVLA2fcK8tc4mEfv88dRrr0h97dmylQqrNncgk%2FRdJPl9w3jcFACAY1vdPabka1otjECNxjINWLXS65vS0rl1pjFj8nyy1qdduZ6p2SjnVeHjxLYQIdYSNmh%2BCWOHu24yuAOJ5MmqAXduOeM2myOEX9wkF2nm6GNVRATFUBA5RAoW0f4mN2xG97ibNYsnhZoZPeqq2Na3sOztQH7QUnNobttaAYQNlVbs44DMxlW8NqWbQWg9LYhekvyy%2BAhEHNmrwjes26PUFYTN0w8zDNtsNWxbf55K4%2B1jGUUXDefCkdrkwd%2Fy6ue9Tn5fVxFdUtZu5ToMo8tNqjuuIxZ3js7kTKGuviqP34hbVEPv1amD5MrTLA2DQdPI4c9su6ig8KlFWNQy5aItMPHgnxqBtoN5q%2FilTzFZI8rY0kLTi9A9shjFh3WEfCZhXQe80mz12g1WKTqBy2B9UEVV%2BQDmFhtC2q7I0JIa1KoGfz1COxbIqXWbBS5ThEigiXdHie31IVC3PFmVweOq2H0%2BX9DI7xJwnQvbsclN%2BQjD9k7TCBjqkAQf4LINNuJRBWDTo6ZMKedviLylwosJlF824JiiiEFmJtDELxyBlAfd%2BeKE5guq9C1YydOg7F4P05je83cvQ7cr0blDPD97IDmjS3tq9PUNQKoTDXnrRd%2BfQgm7v0WmPoajIhX2scFYrQFAIgUxmTXGl4XNMDVlTeXvWMfapvcD3%2FLSSaplxHzcXtxxQbMlNBJday7z0n4Elw0x5P16kgWkGa0j3&X-Amz-Signature=6d9206fb505f820d687f88067c44b4c96551d16e89289689bcad2bafd3cbad0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4FFIRPW%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIBecCqk5utd1Ir65h0QhbU6GF63AMVk08cuWlzEdZ9WrAiAYC%2FFu48FqcH9y1%2BhK2BMD6mN7tXmVlA%2BtwQCQZHXjnSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMKLqhYgdJQWenGqBcKtwDjSIOivB0kMKpFrrbARzZfeE7FOf%2FpY1RQkuaGsAFW%2FJXukE%2FvuOQXI9O8Xbc3Nku4hD9hcGnwBTXSll24PPMcgmAJYLKRi7rcoSK0Q28ugiR4ZIhrXaT007nKJsRAEQ1i5q4Yn7Sh2qlXPO3P9oiTrNySqjzoXs0k1CgzmopSVjgbeLsSa6cIzIYtn%2FhV%2F7bKvD5c0qb4ezisTfqbwBySeR4dF%2BEbW8qTHX3vao1ovbGRKU9tZyx0ZvSmU7Ioctt%2B6T2gEr3vXZhlbsZ0KIULHEJkO5H0aS7SnKZUEBrPWA7igLJ%2FTr4teWdjyk8ayvqSX%2BAO3F4qvvx0xXSnAkJ8xKhDwq6PKABpTxQaul0fPdBc50EFaL3N7wn0Sw7o%2FUvNeai8tPnMW09lFCYO%2B7ngHEgU%2BJM4Ieh74Wa2t%2Fe%2ByrpAFPApwqzbk7X0v1SQ4UCYjKI04c46xew1s8o5kZw4IW%2BTlv5hD1E%2BSB%2FnC8kGlKBqq3d%2BUM7FQldILyfMLzkIMC%2FDLeeY%2BHEDvIxCXOkV8DPNeAx1dhAN8D38S%2FboCPPtWfIL984WXAU90xueCVsTE8CiyiSBcSrq%2BZSCfgTNTAGLJOCgISY65a3CTbScynGM5ghvXzNpUv0zi8w3JO0wgY6pgEFY8FvNr%2FlYIZnuvH4sSgH0BT7nS6yU7388zMGypZYaszA9LjZdlKLsaOP%2F3Fn6J8zKoMhcZsroSmfU9%2FjPAhZLhU7JYDwbSfcI3S%2F8Z2VFHs%2FD%2BrtxDfPHIH3qjTO%2FFiX%2BGLyoolLQ4Bp96CjEv3mVmCuR5JCL2I62sf529h95BJrtxoF8VnnzkpqTtD5JGqyQaGVTmLfuGGhl59I5y2%2B%2BDIE7FOp&X-Amz-Signature=b0e480092132cba1b3a9f57d792a9aea196e4a73986a68bad971a3241f781b1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
