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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP7PFK3Y%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDcPrY7hCG1%2B21KtzT2hYje%2FKjUeURlM9b5akiUSjyMGwIhAKVfjQYxzVgvKKzhBXouKnpZxjLLg%2BeqWFrmMSsctRkfKv8DCHwQABoMNjM3NDIzMTgzODA1IgyzZ2Tif9iVkNQsCs0q3AMYtkFxC5h8B2PSvLbEEiPjZpfAW4UmJGrW2LjH9HrtAIeHOs7nuXK3zeSysagQrk6cByTgE7oXSO1X9h97mD1VAADWcHjNcVKQHXrllcQA77xMe9ZUgkomJh711iiTPRzsbb5p6p3FRqodM2nYqjJMqSj1b48%2BRPgpbuKtswTar%2BjYOirhSiFbdSZceug05zF7fMhiVJTE1yjS7lNB3liawHTVTUXFs5wcBe7kKFryDhCDHkB05rDWSuCwo%2Fnj829emkBwEDimkiFdMfHIkvu066ULP5ie1IYcEULcErB%2FBvNDEMIyH8zN8MeUFMs34S4gdSi8D4JosUpgOuSHUURimfBBhiEW7xO0qyx3NdYS3WQbvgHkte3FBAdfS7glKFAMmeqflyXJqpRJiyRSn6IN%2BwuFTwAlB9Mq9F4%2BfRM%2BTKTJDsiPOtQ9v3WPc2fP9C2IGPdckE3kmhG5T%2BnYur0RQ3uxG8DrihVKJY%2FloI5QvS4t3p4591g0jPhwp3nwLVTQfFGRjiJMxsbsWDcuQVXpk3dCBwnBuVyhfDRthoIeFEnTeX2IsFYDMb%2B8B%2FMOkeEr%2Fq78eIsItFS65ACff7nr%2FXbaxOcc91riqAJVrhdETHzFR%2FPC2qGNMlzBJDC%2Btpm9BjqkAbLEsyqCKGVKY3Pe4RmH2nYRl4X8R87qQ0mUSC4qMKsWmXy1dVFdI542OBxw15JqJuL286346WoEeKfhJ23171zC1gJ9%2BEw0PymRBnfnTDXqK7Hg7x7Eo%2BKu092ftJQLP3c2RJ2LuEKqVBgFL3yqUPbRvnNyn7Ps29BuPEDS2by4vIjF6%2F8tgf8IheKAs1XUAww5EwiRPxEjmXBTGQXcnOId6WZE&X-Amz-Signature=ed7e6955ae01e91f56aa47690fe6d53298def4ef25b16f5e50f359aade9b06dc&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNLYZ74M%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCHy3Fnef1n48Oboj5dVWUU%2Bfvw%2FSXlbuTd3u2K91xBtgCIQCFgb%2Ft3BxIkO7TrBBSCk5%2F35EWuYN9gdSkIywrO5jgfir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMJNoHJhMdBRr12w0bKtwDxwvT%2Bm9gU8Mm%2FvMurNrJzmUNJHxQ%2Fqp%2F88asJ0lx7s6vTJL32Gu7pz4U9JdXBKt4%2Fn3CA%2F9r5PrjNpnjomEzRRslO6iEXNL9zOxKg%2BrZ%2FqcD%2F6vanQa8YsEtu%2B7MD%2Fg7t84hPSuG4rIpafFktbbfVTMJUEX%2Fd6m8fx7taPCro7ATdWPtoDaZM0vPCPktjw8ZP%2BqMWFttDDwA3g6qZBonaKGf5L7BOCaoPx2Hklz9%2Fj3Oj4xaHKuHVMmLmyTvqqFaw%2B851xKISUBmw8wSre5Yd2eLXA83RfTUNGP2SNITAUSC0uH6JeJJyANwyUwFQNlF5k4XdQNeoUlLzySY3PzYSCeWBQc4XtXWKGjlD668eGV3ir0%2FlD478lf0ZXcOh1lATt6fBOyJpFZ66unNqy03M6t%2FfyGcK3ZVtbsRPRsq8x5afGgsVsCZgArc7iNNVN0lGwDWk1XVe7rzMHrMeqR2y6gtRZkSbjTO1zPkqt6wGRVD7BXYx3jitxhpAPfw6XkIlg9EjmPogrxCUnX7vnXjlhof2ZbVRCTsY1VKoD72PdvkCRM3PohHF2PMMvjtBd6fg9zXmlCQ68t07N2Ep89yq0bWhMUcb%2BLoN1hrtpSM2FbuoGo4tS4EECKHDikwx7aZvQY6pgGRgmOiu3M3KdR9nxlzdmIzM2G5SJELX8M%2FxT7RmxLihmCRJYt%2FXMNhTFfHnuEOw64lHHVsr0DTMEPl6c5rueTM4hKj14Ap8WG88PhDha%2Fz2m167R5MTpAdJNNyZkN0UvVvzoDa2%2BqS6JlXTe7xlR3bJhsjdLFvtDq5cjvrHSWFt7iF%2F3ot%2FiiDf7R8XoOaD%2FH1VhQi%2F1AmdTxMuapZ3UUQ38QKYiCg&X-Amz-Signature=3545b62ac64aeec9689879417404a351009b63b9a33e8d62cc2c544c0b4303e6&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
