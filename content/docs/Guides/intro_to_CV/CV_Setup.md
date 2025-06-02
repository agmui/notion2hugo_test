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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUO2WLAN%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T181230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCICTmZ41CxYsOqbbiZMdxN4QvYO12r0kkbv3yTH52ch%2BUAiBrnChWOq2UTi%2Fv2e3XSThY8QExSnOhB%2FrhAp2jP4BwIiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC5QS7gxM%2FTBx6kbfKtwDmLVNovRRvK7YruIAAWmdFqqMAvkuBxYJRsUHb9uRVYa8uA6QuU9uLo0dlHNUERfEvJdVuBmy7epMskmzBDJomoSL2aPxuLwMltPp7Up8dlgKeynYnCC%2BDXtdijdfdOzL6PjUknqPMyX6aNrRvFPRGX87YcNot%2F0GU5pcWPRfqH3tk3Awcq%2Bh31NhettdT1Z6HZmgV4LdO5pdtqFym5UqkBr2HDyAcSdzte2L7Ei8k0tRXU5WxghPMkpmINyEE5lAqUF2T2O085RdOrD3dnohtL%2BFzDFHJAeVgr2AiCZwtPTZeXafzkKwyLnX%2FVrWQCWQjhpSqB%2BoAVTkF1YKE8VD8LUlpkx0qbL7exEfaCDxwGCeSTm6%2BC8EU1hsMCemcO9cZvJcM89acDldIQx4cBWFMzxkkfxhV9tRS6ilnDelfoRwBjV33%2FDhBiJXh7ubHDAYJQI0MwmNQXo2HIZaeNgkjxEf00v%2BGb4vxl%2FHlvYNDV9hTifOTgDwz3zR2r0pKw72iz7Fav1xXGs5AieWgKpyXJmEwrLl0%2FG8mXQV%2FrUnzQeUnAcag3pjiaWbR8IEeP9nqoqR4W0BPmUvazMITyuQZ7ARm7mP3Sc19AOARIlAxUvGp1keqMl%2FBsRsXH8wrbL3wQY6pgFBBlGM5txqqqOeJT0lS27%2BUcJkZwyiPkH5faBTFH8%2FVocMhV4K7f3IZUn8oAZZakW2MY6TrcBLqeJGLUI%2BlfWJfpDMHSg0BvphuYyDroRjj%2F2N6BJLyMJdgJh%2FifUIlbc1zl9UzQ%2B5hnKYOrZopvcs42YTH06a5bS9mfvHlTBiUDT%2BbTXfvEjUyc0h6aT07N0H8MWS3thoHSuaq91DlmJKx2DAGUyo&X-Amz-Signature=4f8da5185fc179e14876f276700af1367bdd96f8ae1befe7e7cec34cf1ae605e&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDFVQU34%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDGvfuvN89FtFQKm05EBbKJiEukajjcqTLhqd6CmQb9TQIhAOhoDY0rPuUl4YWzNF6mnJSwdfsQs1X6djitoplbmVihKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCrYradv%2Ftql%2FnoHQq3APzkaMhdnTxSd641a%2FJhnd%2B0G9oBRRFQOloqQAhYv97EG2LwSEkj4gP%2FS%2Fpo7yk%2BQD120nPnEFlqcxkkvZvGcww%2FSlq6qfpor5HKyO4CgmXTS%2FxAhixhWzGV75SgWV8A%2B8LTIEXyx%2FaJD0sEIhAcaQu%2FIk%2FJ0r8sJWfuHgaKtDp36dYdy9RLOvLwoHCrmkS6xMs5W0YYGCZUul4isfKCv2bOd0%2BvuZfIayCnh7JRQnlaNs9%2FPzu3NWNn1ps0UGFYtkzE7qfKFhpOplFwAKAIaeOFmaUudobZSc2%2BDnCrJJ7Dh4cd8DwLlI%2BQwIx8ExVvg5Lj2qPNsU6quvN%2F5LXWTot30CMOnR2gjDtphsLbO3g4TghTo8HsrhsbrjXZOPxjaAlpOPmux42CKIN%2BeJHTf%2BPiuHW7ho6GeQv8Pma6zHV5R4CSpMsj0gNOUcb56Knzbmz3z7tGOvs%2BXzUHt2hnt7ydvvXMZxTY7q%2Bm%2FoPWrZHCtdMiVvBEmPCza6NFO0xhOIWPS3kV54w47JtXUCJeQarxRjgu7fuWQGGOvgqyWjW06eaUBpzWqN9DErMXnYzfIYIyUBt7vGFbsDtmYEmiM6SH8iOFrRVu2%2FN82%2FpB9Ojt6Tnucp8VWMSgse0%2FDCrsvfBBjqkAQH3omR7rsH6vm9ZpJ22CJGQ%2FasDEZxRyIX7aOZWf95D0MeEC1517V%2Bpxm7HnFoOtRsOb2854818hCznCxzib9xwyuUyB5ARLPj23JEYf5QMmkfzgl3peksZIilrwGaar%2BYbkv3xvMpNfwNdjqXJo3z4vWZNXmXTg2UXP%2F7guXbBEDRhJ35y%2BP6idkuYDKzSsrOsN8pcAVJLL88b28X2t4mdTZhp&X-Amz-Signature=24caca71017b2a69eb679d199ec80c78ba44e7837eb5be068d5a16c3420ca0c2&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
