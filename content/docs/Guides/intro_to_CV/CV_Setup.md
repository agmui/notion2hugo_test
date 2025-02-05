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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYRZ5YV%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIDZ%2BUijOL3%2BONPhUDe5yistIbsQktmUEecuItKmiogDLAiEA%2B5IHzRZVsLn%2Bl437jSiBDD6qsfSA8mjnt5i6S53jQfoq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDAZBOTvZvH9Hpib21SrcAyHH3zBooWrgP0rlZ%2FAwhwvGJjaKwArOAOGLD20lBz6F8DsNCaA3H%2Fa47u6JnzTGHEn0WFfO7gJwe3D%2FmVOUfDSpL6ZNXW6g8Cz6%2FVVY4jok8aUQ5IOEWFaYfixfh4QB1Ej5mGGuBhc9ZeZ8gq1zAdQlNkvUubH%2FT5GF5vwioRzZAushFHCoZ9EoZj9jYXr6Ntf60zP7qjJqgzwo4vmRAe1yUqQhADuMu9E9K2aMK3Ro0O6gqAT%2FWZVZ0r1Rm1f%2FrfIwtXJuE8aTpHD4aGuhAPRj73KMWgyujOl1VFDB%2Bt1hhOTVpsmRbq2tvyWVRtXqELPs2f5s9UvVkGAiw5iMOjk7zj0W2fHh1JLdQNFLy0iEfu4r9BdwGnlRQ%2Fl0d2iXx%2FNZQsB4AL7adzUqmM3B3Vyst17%2BkceMTteJJhBdo1EIidFxSaawPL2pMuBzniPYJPeZ1UuXyfMMyvAs47%2B%2FUJ3gRz3XN%2FraLrYJLODIRZa7oEoLNvFsydMJ3%2FBIXSoC3VEyhHZaZ2fihagOxN39DRnzFXeqJ3eOgI9XspJdxNhJJknab43lc7rmD3ZGeGHl9L0xbwiqcq8rjhuK8pUzzy0JnKxGBqjbyTMp%2F9ccJG61Ca2WEKNKN6lFRRRJML7xjL0GOqUBImPJdhKoPjrX3VDyaLPvidet95bho%2FpBtfphpLUXnils38nf3dmKGhVTvEb%2F7ykHUt%2BEJvjn3UYZ9qb6JjjdE1v61tpWa7b9%2FqXtXuhoFtnnqjq45xAKo86Wl1GIIxB6Nm7Tqb1NEoF8K%2BRCRNmt7zHEbnLFUVrBQPRtonzcppP7%2BDhmM935JILjVY0ZHuNetiYB0fRlXq6JNZxvHw7NoOuxtKT0&X-Amz-Signature=3e7ccfd707719b6681645051fcdc110cb408d17983c0a7fb5e708217d2626957&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E5MWATV%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCX%2BGmqKcmJosPFFqG25BKESqx3R8v7xCgz3n49Rfk1tQIhAIXZLX%2F%2FBQyCY4nDoboBFLDtPEimUO0pb4GLfjCypr77Kv8DCEMQABoMNjM3NDIzMTgzODA1IgznUMa4AaH4VYwOX%2FQq3APuPk4B3tXHsESq0%2BnRmtoUdL3b90JTOF47fyk%2B7pXlRqJ6iCgt3KKDaOpTzCs%2FDXfrkbthkI2%2F0cVFqaHxuITg5xvsyGQwnFQbqbg5IIXYjdZJ0f6isZULtglkkSFhqHrSJKjz3klZw%2FMYDJjO2JeqxJQWchmmViQOwXM6QoVQldfZlGUdaeMGjAJSrg9RqCm3gGoB6SIBd%2BfTMakFlx%2F11O3Sh0%2FN6Ew0LAfWm7QQdg9OV0iPxG2evfpbb%2BIYwWq1VERdWV3uWvOxtaLWqGSjFsH6iNr4oG5WP024dLjIcVEDPHKgpFwMRRYBuS9SXJEqHt9iMR1fVWUP0fvzKVqGTGZ3ro1TdOgnb1u8d4PyRNZfUNsuTPl9vPi%2F7PIsMvbGTxnwm7rjZb60CtJCJG4RKPIB0C2K5DGjePjFl02d8N0pO9fOS3SnKqz17ZGEB6ccWdZWtx7kyfLw8CNM0muwgWADoDJPt2CqrCWZfNOjJkdUY7pfesNslPR6S0zp2w0RcRar6bos5AsQAObRUc%2BZMDIsd3SibxojgsvghcpqGtqEFqmqn9oZX%2FdFLx7eHYYMhfgQCiq1VYQjHg7afJdQtM4qNl367RDt46kESVuXUOTfcNUGwwXsfLvp6jDR8Yy9BjqkAX9SuNo6K%2FupswlMJJISRTMG6pwfcIWFt%2BRq6yT3RS8QsnHPNikJwenBbTuqcH5NJJ%2F6T%2BgyOJa2qAKAq2QDawvkDaXOL15idkQkpnNldTr01yxlmU3w4RYCpfkpBMHtSmBubF%2Fk8fMfplGKsDwzvW8GoUG9rtUpooF9nappd%2FF5DDSHT9lLgoBY0jWflxhWjvDCMNv5WND1YRvZC44niBTU8%2FaM&X-Amz-Signature=2ec41a58a85e93ba8cc16bf8986b113998acf2917d5d6e261971d909cd425a8c&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
