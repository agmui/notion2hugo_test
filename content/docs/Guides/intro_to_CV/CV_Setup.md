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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNU4CQXV%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDM6uu2c1BXJb8VzebVaOQrGt6q9KQWapJ3ka5c5IPGkQIhAMN1JevCD8j7zCEzPE0xI7mD4qvWmrngFf%2FEjxkkcqWMKv8DCG4QABoMNjM3NDIzMTgzODA1IgwgOKMHIPbZwbUQ7p0q3AMiI46J%2FslAU9j2VsJjNsEofM5K1%2F%2FBqP1wsN%2B3LwDBAnJs6i%2B0PwZWSYZKNjjnQYhujYPu9Simz3BSiShVgY5qAWHHqPkNOFmLREwnebNBCLDvuWg8G8NlYuLGu2THUHqTEfGTzAAWCNl8i8C1w%2F%2BirMk%2FQ52UxLoBRdtkmA3XeLGXn6NPfcl0AkKBDt%2Fj3M8jR1rSnJmoLPkxOpr3Vg5olllWhGGIx3A96RC21Nco1u99d7zz%2FIUIfZSemmyU2f8ctKX35TEQkRJmkiFHLzjzjlusmPbG0Kd1U%2BLCaWRu8phuscoRM%2BdCl2rUeBjxGvMlLj5qxkokLdrCZxMpp22Szx5XGzY%2FTAdafQdR4%2BUPZcoABLgA2wpiU6k6IPBtj30Zwxel7Qea%2BhZ%2Bdaj7gMkU9nnEJJswmS8V9UAj2KjH17CIGY1rdCJ5UjQZKcDEPWYo55rS5Nd43IU6PrquZJsrbPc%2BdKw%2FTV4X4cJci2zyRk8QUQnn4vBnGr70%2FzEMUAYMB%2FbOS7DLzaE%2FPl8mNGt4qoM75BC%2BaRilcJVA0CkAF%2Fkac7JF7Nhqm7j8LrtA3TFiWF1P3yns3%2BIGPJ7MpfOa7vRUxJXCQyqWo9oedUyW%2BTZUp8RiqiC0BcFX4DDbx7S%2BBjqkAXgBbRlNn2iKJnaCw0zm%2F2f6%2BOiOTRyfAwNVzjqIAn4rtXDZz7v72ETscux0hLSbZzlSE0RlbS%2Fd99jdm%2FtSv60i7lvsRlQKEqCxKY9oVzE5DweGlqCo80RleF2%2FgOnJBiiaQqc5GxH1ML4j3du%2FcjG%2BzJUn%2FYxOyqFrLDZSCMvsDGHg0NSTjaQO1HxuFYvu29mjEdq4EGyjSzKJJoXZEmt6kAys&X-Amz-Signature=c6a4cb50aa130671d4ae24c2df69abbed76c08e61dd663c152a32ecfa6bc2c33&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6YJSTER%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIGbms%2FVJYaII%2BTNMMzR7%2FIpadcyh7hIaXSAui2g6h00cAiBDMFtAViebZRAP5KXMnmE3Wf2JC8ogW%2FU1lc%2FKYI5qgSr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMc5DEBlao5IJywp%2FGKtwDG9r3TNLaLNMXp5BsrTdSfj3zJhIMsgsWRf8VMFdvcqq%2BinicpEZG%2BjMnr%2BexSCqt3bdopdqoqy5zITai0uuGt%2F0xPiH2n24v0h5GWnDrqJJXGkt69ZvuSRB3QDNNI%2FQrp6XHHP2lwnEyeiVCXZz7a4NJz9oLOrd0d%2FrL%2BYenSUTJgAniTQJG48zAvkIKGvY%2FsTJIPYS6TRtPrUGYg0fM6c04uz%2BwEEaFqWROYQLoc9%2FbAiH9%2ByyEIx5Oyt7I84VeHWFpakySCBs%2BfFWz4%2BPwQFARd7oiuKkZVeDZ55DW5%2BiPpytuj1SM5TdO1tP8GaCgxu3BJaz81csW4HlUMWKAEyGWY%2B14skebHeZuycXNxQsRjyJlDuMiGpnOvPZ5OM30ThPQanUqeJnsaQxiC1ChhO95SJE0%2BSZJnQlWNP3z2kzlC%2BxbuAi4%2BumjIqMsy%2FymA9Am4LUm73SFz%2F25p9Pvy5cipJnR%2B9kd8Md94WZgpGeCTJhoiJ9kjoYY4J6qT2DV6XpEVCQG%2F6wNnr%2ByiJrFGpiemxszWoGW%2Fd17iH4iqzv9g%2FO4pN%2BO%2BMTPjWi%2BJ%2BfQPXrGKumSLNfcHnPdqsZGq8zeLAn%2F4Ylq9zFRHlbSg%2FLo%2F8m13%2F0agvMQkfMwjMi0vgY6pgFMNlq9uTREz6SPA91ShH8AAnu%2Fnr4HI7t2QtDm%2BfDSCCNVpuyQMBNVBM9o5Wz%2BkSzXB5%2BuKwy6k1BOd3eQzSngxTF8fuHRkPan3sz2yWe8pck8qG0G7gui4hjQo2SL7UOB31OYEuqvnSrXIgA59gXHqZf7IpwWexjWQeng7dFg7WKtr6nLg62L6kctICwmo%2BlNOqPASmO3Dk%2BfZ2vJtIUwTEo%2FNpOm&X-Amz-Signature=ad9367f8369df589015c426cdfeaaf26cd31c854a55e22472d2492e96ab84cd7&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
