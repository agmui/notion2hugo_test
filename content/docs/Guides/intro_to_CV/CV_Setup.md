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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3UCS2VO%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIAxecc8%2FJrhbj52n4lKW2LWWPfcp8F%2FrG9g5U9iIrLWUAiEAmLtRWPSzWRzJWo%2BL%2BrO5M4FMaDoO3tPRpFKrsGPf6D4q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDBeBYTrUINc2MyWqCrcAxqdv11J7CavRv7O9yF%2FKs%2FtgS47eaaaUX%2FPkJgq%2B%2ByfzGcux44h%2F3Vt0uWm4HaMmkfEuGZbCQ7OjHjsHvoAtavkvTtA9hGIwRa9DF%2FlCQnhh6NIFJjHZ0Ma9vjhZx222ASm%2FjX%2B6fnjby685%2FCbzTmTehrwagbFaG14GaBEyhMuPJPjR3hZu6WU6iQ2ti47s1IwG3aKrELt2pRN5vzEdvObC81LtdPynSU5ceMq%2BiziYV%2Bd0rRBOHxW1boS3aubCsTOFY35rpApeORYzXRCZprZij1Zjt%2BrFyU%2F7UWPliLn7U8hKY%2BZAOb8n%2BiYGNvD8Qs2lEdzjPHLmkyMfpcQ5RKr456d7sxpHbTqaNE87GoIABWNEN7uhxxcd%2BSgajQB4QgKqJwsRD1pazCd4rQYTNrSr1h2zwrMaH5ddTlbSh6a%2B60qkfo4z94KrPOqDibIYU5Dg%2BqS2R%2FgSZVkWrMMNUUoyLxzftbkeuygaenQc9Gokek%2BVLcPGdLHuQEHGRCH%2F8qXtKXk9oTrZ2vVV2rCGEVUfAlEr8g5RCNP7jP7uD3%2BwviPMn9JsjLa7qiCKra2CV9NWW9s4iInrBf9fsn7kkvf7LVNnKKdca8ldKZXXAtLliOzgYoitVijTtYrMOe6tsIGOqUB7oOWEAOGK3jZTUzuY2Rl55l0Md%2FKm7ocBMfEiutfSEI2Q8OrAbCyK5lYMEI5K7quh2BqSJnXGNlAltieqF04Ss5So9JpqNpnuZvasI8qMz2j%2Ba5gyCkeuy5N4DNbHTOzGguRd%2BYgh8%2FqLADHXyqXyjdS%2F%2BKYCFFGmInw%2BxzG%2Fvr4rzEY%2FmDFt0XZWwe2eVv4IeayUvVtzG8rcU%2Fx3VvA8wIz8Aac&X-Amz-Signature=2ee251a65168630095ec1489761a4c282aed9b4decde461d63e3dba73103137f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U6A4DFG%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIBe7sXCDUJw2u7lLFM44x4nYRd%2BGAxfeUqTz7H3cL0wFAiAVtxhqIArIRvLnP65i1WFsBFX4vJqpnGMji%2FGi6vCukyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMBumE%2F8b5mxdDSHJ5KtwDqksgt%2F5OCwzhhS8Ioi%2Fu2kcisb99j9yWdR7%2BwbJ5NzkebFPCQ5u1VMk6Lv%2FNwZfTg3u5yBltTqMmjo6XHZbh3XF3hzMl0lJuK%2FY2YQV5a1G2lACHzZk6aUtAyW7nomZmRd4TmW%2BYOpp4zHWn2xlag6hGklG8tiq1JyyKbjcHlafmZI%2FJsX2fe%2B4lT1km9tDEO1GLPOMtINJIRlr4bXyXQDddxGwlniNM5RbSpOFnlTJnYfdEfG1aJFIFJslLv1MemeiQxex3YotGu%2B%2F%2FioxdHFWqz8%2BcrFwyrbhoTaSOkzqBp4CkEFp7FwxCG2ED1tMG4M8i3HOmiZ02aZPHApZHU4ixVxkAU%2BRWQmNFv5SXbMaLUmOMlxqsZifKwU9%2FEpBUdd3dC0VQ5Oeb6C4dgdBos3K4L4OeHDObuUO25PI0txkg67YLbOG4nsrNEywAQB4IaV0tyXSj%2FuRLW9mZ20QFTPhhyeH0MLkIaAVX6aKaUDOUAhUdFYDfyy7Kd7s72JeLxdZacF4GjfO%2FV2yNw0Ap%2FAd6QqW5nUiEUwaUn2RtFVShBjNiYnLv%2B1Bq20Oey0zp6RN12IQOo70bd%2FLHVtpDsCBxiK0hS0W2nQUKFduoyrUm4LNKtCgPOtJMftAwzLq2wgY6pgGYqGa2zXRT35n6W%2FD5%2Fb9VuLIxEEV0kGmzrGsl2TFY8tULViEoeovwRBOoyqEnJpZyW7Cdzh0cTiyKvJyeT%2BvrjnfkejF8xHZVopnlrjlVPoXdrdR1xKUJOO%2BMVVFyIgKqDOqSXLwxzgAtME4AUvWRAwUOfNDW05CxGmLQjdxcG1FKFljpvZc5UNdku6YsuFjD3t%2BCWEp13Jg0LQksFn1N1OMFsLg2&X-Amz-Signature=466fa90ee7860baac9be4f194f68d465f49267700cf5a17ed7d6ee32fc2c2f42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
