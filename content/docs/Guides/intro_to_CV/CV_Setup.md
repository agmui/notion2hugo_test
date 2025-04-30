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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHLBJDX3%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIEytpzOCzj3m0AQziENDXNwrZD7Ld8RzquHen0dKDwwUAiEAvP6ZSclKn1UKU%2BoStBSvwhbN%2B%2FC271LRUmCMR8ecrvIqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJ%2FZDiIJNPOqoI3jyrcA7XQyVX1XAmvyTtYdf3OGGMWBtMaSj%2BA3%2BxJyVnLTf3yO8cUqoprdz4PgOQBx0xHBevekkdC%2FmGifocdKAPNXskAatiGOA42jgHG92hqJFBDk1B7gvRKikwzrkaDq3xhJFj41UQCZKXje788iotA0btzY7r1X2yJxA%2F%2BjAu8fKEjV1ZPBOBnklsVghfoWepCNxh6GFCZlQMj8ECPXBtLnF8UQhhlSXIZebiunRNhf1URjZmaeNDquBO6CYhyKgX1UJbk9nCBoWboZNK1qoTPcS32LPMRvwN5QVqs4g8uZ4PBsT8ZqaEb3vsqycCODLlEdY6S9%2B8bWq6QSTjPI71nooQJlsjfjehd7f51KENBwnwPeAyWl62J1%2BEitPSGivLDfg9rox%2BDrGvwJjlN7pECeCJFHgsVSL13%2B2vc8LCcW3jAVIPV0tExxNaCNTsEME2uyebeQBLA1IUwSQslwEpYQfOUo3Ll%2F6D2rAYegyCa%2F%2B%2B8k6jN6ZL8w%2FZxbAKItLfgTTG8lRhXvNvXspoyQ2T6DpFxurAUAJRftYpSWkkjivSPbBCRU1BavXBSbUaFaZb35BO6dY0pjRb%2F1mSIHhEv92p%2BH8nzYpEWK7JyDgo6JvqH4qmlzsTQLPKkVM%2FWMOHLysAGOqUBjAU8xb2S%2FLVLYbf%2FyqsIlsWChd8wZeZp0CQjc8tRgaDSsFgR8vpKkuMxavFXSOmMxLQm8GtiptkQtTUWfyq6ScECAGiWVcbtLz2IQ9tSeRgTTyCbCNzUW%2F7uUIB6tsmKs%2BGmRd%2BzHeDgy7AsSA8PZgdJpRfcXhcNkkYf1v0YkpyyazAwHCry3H181BJfxw5S6BnXOaDw6XyPcq8%2FPIE2YY4%2F8Mi5&X-Amz-Signature=59ece9f9b28d0dedb836f1577a1d149dbbb229dcad0770c13c94833cfa9bd2f9&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNRWUCO2%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCICpLXO91JvP4KFFBmklCQvTgkagLBMQXUn6iCz4uNbFSAiEAuHL8p28OAk63b7Bo8%2BqksGWMjHe%2BX3bKmuak4DeFC3UqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbgHGqM9ngt0mTJKCrcA0AfQfDJQLAugWpfTJP%2B1OII9oR6tTSy7RgWbbK%2FqcuD4ZF1ILYjuUKmPWe%2BHBfya86%2BDmKO2A44GCGw3B9q3k2FRGdIiDOW1r1yVJtwUKYO0r8Y6Hu%2FKEcqXtFsaXHEscGz3%2BLkwJGl4zpNbb9Iiobn21h%2FkBAS9kf7hJ0tzwacsOkjzhu13JknwpcYdvKPPgJjogr4JfWkpJF5ifzEq6qiC3ubJwQBsEEwSvRwOF5FkeGcfTMeXDLYFlr%2BCNJIek%2BiNSQ7yaapAyZtILfRUuDoTkqdifxlWYxgUIf52e4%2Fk86yzoyshisHqaiuAOG1s4IlbIcUwGcJ3BXRoNpwV3NFO8XHo7QyUsFLY2x%2FknZcJ9ZDIEGrhKQgOJuzlBimgj1WDeGlZogkWc2aUve2fFvqqF5PkvCyS4fi4RM5Ms9txdkuHSqpinNuTKgADvEa8lV2VCrg%2BTrmVtLKZ2M945me8S3is8AMlED0DDVySV3WYzxaDL2jnd%2FYz2nB35ykef95U%2Fa%2FWUVhxVEs5e4gEqZvThZ9QwuOqrNQwaY3edjAqtLhfdANzoQoh1WkZ6rWb%2FmlXqDHcQlKtrIEHrLmjNDMIWBKFJ4JjkP%2BNC0TqodxItzu134pFOT0kxq9MMbLysAGOqUBWkEZz5BRETdaE%2BYJ7u3L6yOHI7JFREoaCOqEGnvJtudBHB0CTp551g5RRs1E0YKW73n0VdSBGrGvG3VUoxAwezZwh85jJiR2AqfbyDrcKQJBiuuT2larPnbi0Zlqqjau%2BLQulLl26ngpgSePW67q9ckbNi%2FbrOj8BFq5LSu%2FoMQrbU645SGCSksYn2MpEKm9Ry%2FiD2xIsbJsQaIRBLSOaKa6qNAi&X-Amz-Signature=c69e3f4404907832312a4a4bb3b69bd9a6d89ae9b141f74505001a099d1a6db2&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
