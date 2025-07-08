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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIFA7TKI%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T042019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCqC54UdlF7x%2FaVCdQc9ISdUm8wYy9XoxxHhBz5ShF3swIgP%2FGYVGQJ4JimZFIde3waqy1oECkESXX0c1vzueKo6RoqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlh92rbgbZV7mL0OyrcA5zVSNNdmuSngyfjCten8S9IjjFDA%2F0ra4Rjm3KENenGVd2kBzj0p7ehq3OhF4H1T8LdQfIWH0rvYBvJfIqTygxFm9uRT5MOoGI4hHET8IjhQKNEnmmkPzydDOd3G%2FDlVrNrwGwGDArMhW%2F5wodv0TglQxSAjvWRgm4qOV4xhxQccCsWreE8hqvT8gTl%2FKqjQ1i3awDvst7BXhkoFmlWNfP10KLzztnB8h4Hi%2FzE41bOWAMHU18oGJXnAi8Bx8HvOxVYPtRlgZd5tTGb8fyHSbVhnc277NbN7Q36w2meiKMcH5m0%2BBgWJMQIdYvnA07JdoeV1vBjwgPKnjLP6TUVGwBjtLAeMNX6axE6XR9nfgFUML8Dqj0tDgYiyWAbMYho9s2ObBmB4bpzPUDbgxtNNoiulRx2PxPdZheen9tbJ7iB%2BKVyUX6M6jUbHl9Nk%2BCeZpuyDKe2dnUqOGo4tO6T0X7L1pf%2BRVV5574EB0%2BxVGLFzcNxwRdngwTfRemXAkVrr2Nvnz%2B%2FoLUv0%2BAISsIRuGF1rH5eZYw%2Fkulb4XwNPDPY%2Fsf2e6a2pvipcbUiQ0kik9AgK6aOyvl%2F1foiT%2B%2BJotRqBBMeppD5hDaA3eQ77PjvLk%2FA4YV%2FhHR1T1hOMMmDssMGOqUBA5Z5ZxOnuWXnTNn8eEDk8Sc1n583yaFAI4LNHccXGOMLBbivjCaof4Waxm1TJUTqI8VDmngpjae1sN5e8G7mSssD%2BM95%2FeQraM0dilUp2Q5edm6Jc8jxung0ndyS7Baif1hnzC65SFZpGnQJj8VY4Tj1UW47%2F0LaJjsfXZQRbISE3rjw6dsBVNu7o9P59S%2FhXr04prqgby6EcuadysYZJ0X5GruJ&X-Amz-Signature=a43e83f895cec866ef22c5538f5d198cddcc06eb5ebddfed73b81b4f5e0318f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DRN7N7W%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T042018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIAdbLkKbd60fIPllIDSl9QhNGY8fjb9agq7qEKDq2YaeAiEAkMswTB01vyszNGW6VlI%2BVbUA%2FVMzXMsiClzwtJe5%2BXUqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2rftcdkDNzHd%2BVAircA%2FsmiZ1XbjdFzRk%2FzBeElArWrSPlAvFWFd61J66XbA5vqvdx6s%2BY%2FK4O5Fiz5vx63tb0fLu8CcFPn4jqeOyoxgi%2BrZjCzugHvrbKsUxGRunQVxYV2inBgyTpyG37%2Bg0luPO6feJgxP%2FQANNHnXnZVsH0lN53sR27tY1aeL2wQODwZF5qPpbbSfvZercoYMf4D4TpgWGxXv9RP%2BgQ4u9ULf5r03%2FXwgsdFHz3HAUpmznbP6YuNiypOhnBoBwCH%2FOzE2Vu3iEf7UctI%2B4I4eCCkFF10a0vQlXXxC9XeQg3C44RYQ9%2BAEig15HMg1d7VqQRmsfItOPRETZFY%2FaYdujhNTIzl9LOERlrGnAqMKWhZLbiVFqlhpJvQ30OMcU6l99pyfS89EYF3CvH0DaVwoPC10Y7Xdy5uqnyVQSIf%2FTzr9syAIVorQUnach%2FhVbizA7gLZCEqvGIYdCFecd9kwDV%2F0tN7XER%2FKOYnx8FrB%2B3EiZi6MzTUvkKdPwvCMMfxOzUhVp8rWtaVnlJDKwTxHi0L8yfyFlSNzctnA%2FUb14aR%2BAJk63Iv%2F7eQe3iO8MDnk%2Bei268jhjlVWEyqJu%2BO4%2BZbkxoZrgRZWJMPKHV9tr8vPzO9jLFZWK7qovmXwLQMOaEssMGOqUBy2gHmrQdwBn6KRvoMCnAxeLR7M%2FsKkXD2%2Bb2m9QjvilvvkJXzY2V5iGk9WCq7ILQOBErtym5CVs62qmyZtzvX%2B30%2F0HLkBxOP24bLtaTYet4cRhx2YWxNP0kgfpVMGTnZWZb4Am5oXvFFTKhnYhuJrjLD7Q%2FmXEvYMf2wcLp00TkO7UtWN5u2UfEt%2BazFHg9WQP6t5Gg10Ltm%2FurtCWR1bZyt4cp&X-Amz-Signature=e70613946786e7abb11fc312edd5c844448cdbeb12a5ef9ec082f8d7ef93c7c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
