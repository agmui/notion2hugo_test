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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFMR7FCD%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIE7esGT5fRmeLz4ErmgB%2BTlIy%2BVZ1hgq0DnYXSMlsjjtAiBu16OGNA6VjKpklxCkzdI%2BmzHVO9u2HG7LSMQ0wHfeXyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZdiMYefxkDqWyxX6KtwDvJqvULjk6KwyqWla4mmWgYyhv%2Fhnuq7eO5JU3%2B3Hs5tCKuMBffY7h2E9CuRXV7f%2FygayURpT9%2FbA2hwNjaN2G4A1Bfm1SBxZDK0LI4b0f4aMAMjOPTv35pk37enqLgRElvMdvKJ0b9N%2Fkl0xuJLJNxSlk%2Bq32ApWzGI1yX8xgqJEwxGnF1YUNvc8fUYTXh%2FCx0QQrN1Hc9v%2Fw4%2BMOhoOvoU8rtfmmgKe6%2BiQHkuBPC%2FIxUJfigoI0fPipL1w5lr9qtDZuLl8rG9EQ%2BpC3WJ9YYDAyVDid1zdxBy7oGAnTctCokVtVf3TypoH6GQod9weoebh1jrmyMp%2FECt6ZqcEPfDtShf4UjfAPZY39rFKo8mGzAinonwItjuEZyf9N1VMBGq9XmftfjGnCipSHLzo21ZAm5Jf%2BFr5Xf%2FxDPvkNgVuAwYYuLvKwG%2FL6mzXbvaSi%2Ft7xMz5M08QahsTt3er2BJVtyBdjbwk9mopyjayli5CI65eK%2FeusBCCQ3iJpRhp%2Bdv43cY9blfMlR0jB%2F5fdWd5EwUYBH7yP4FASFtd6527TlR9BBUoKYLxJpS8%2BPfwgR%2Beq76%2B1JGQ9c3M1mlaoaOiRODOpUwt%2FisdVzywF4%2Fu8hPGUN965Vjmi58w0qPuvwY6pgGyXniHhVkyKL8KbMe%2BByMQH%2BKjlH9jIUVcwBpT7WG6f8IJwsceREKR8Md%2FI%2BipQRnjLzCDPLKsB%2BC1yQoZG2RdN1ppdqYlszIlJcyqiDYuQTbjfuZf45TRp%2B953H3dqogRbpxKVPHDfokxFuKNDE4NkTPZFZ00gXnTWM2x91RMgPG3E5rRXGOFjitut3aOAA5I0sju0SFwCX4QHU2%2BCCxUPpCyvKAE&X-Amz-Signature=3ac8dd24b5020e37e3e3e98536e4f58571cf58a2e0964ae049f1df1eaa7be9ec&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU3C7VNU%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIEKIL%2F1idq4eF5NYcM9nqsWKpsPRCrCwzdUtOSa8Ur5zAiAB6b%2Bb1tqnOc%2FACUNqBfj2DQQhorSXhCB8F2VlgCoN5CqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX4Kg2tLCXCDcNsnxKtwDch5PbMK8zIiP1TFNLjR5jUyNLvhBj5lXhznit4cqQw2ci4SNqIcxWJGBdvdKITj1mrWklc2HyiXp7cZOXwhx5dZeUbsF9KjLzpE4HJxCSDRJr7eeiJpxpPBGyYY9OXlC60%2B6FRmzmlXnmnL6o0ttC3v1UpS776%2BN2gLfvrijqhE6Gu7rvnQpeKray1dduKEph3HELLBQka%2FK1tdvfHAZBZ%2Bi7Gt9s4mLbjx4ELvxjU5D8y4nGyHmB1FQzXYEygtuj8xI7X2hJQ0CBm0uOVBMQbEfflgls4uRXFb4KxZ7vkblx3LDmTmHtkDHTkK8DPljmQvPfV98GF%2B1X8YxlGPhwZ8i14MOzO8M5d2Q7bJrUZwRPcXjUCTrXSX8TK9X%2FJs2QERB729a5uv8r0L6wTYilHsMZQq9vOLDrZlPmjsyebdLwVfgClm5cVLbLwtmgEXYcTCJhoxDUq4Y1s0oCGoQjL04SgTaRNGtlYVbrGKvyH%2BJeFTJMcCimyBN1u6IyvftzX%2Ffcam2GOwQdojcFIVk7ckhFedDctCmX%2BtjrYt3GpaJKYHsz4ZYXGa5MNnvel86OIM%2FtHlRtYBm%2BGc7bXjPrD%2BNbG9fJlN%2F%2FErWDsZxxvUtqqgwL86BmhHfHpowmaPuvwY6pgE%2BKVfZSAk7ay72IGi4tVBTFhjJocnZm28ILz%2FkscwwvzJoFDOFm5yYREE%2FjkxarrkEFHmmWr1t%2BglA4MFm3IA629mUIazvMmK5pfG%2BqH9FVZe8BbB7yKCHHKGm5duMyyw2%2FkI%2F2ELixu5D72K7lh%2BkJlliO8RzkXjH5m402LC1tvGCwMndHxhnxKnmfwGTvhQnJmTJpNq%2BeYdmrbMayeyDa%2BmAaDWB&X-Amz-Signature=73ecfcccd7790559fb436ceac68b0cd5d91114f1551f405e40b93b62cdae09ca&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
