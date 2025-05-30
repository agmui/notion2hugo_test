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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KNZJRIO%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICW87827c0uRUUtPE8oujCe1qwsZX%2F4SZjBB%2FwjR9%2BZRAiABc%2B5Ux67%2BgPY0xDZTXKecZ8Tu8gNa6hL82mO0H%2Flq6yqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMffwoE%2B3G4SuBOOlxKtwD5obLPUZXLmwnXs8IxV9LuLD%2FOWr%2B6B1IyxKPIsPtrZOzblqzTtr9gthDjZHtA6ux0DFin3Ag9dU0HgT%2Fgz7fMrRN1qd9JPjeLYSUSm13jsW%2BAaYoThw71c5kE0EafiWR5tSJDBYEF3FluPrW6RHVsJNZQ%2B%2Fj%2FX7VYkUF%2B4QP3FBKKNCP1nbntZY%2BofrHDgLT%2FkbHebTI2ObwY50lZ9fQYSvAbfZW9e9qeQG9AmLZf64FhaH%2FFja%2Bu4o8mPXmwvzetu5FrIFW99OmA%2FARJQyDl7y10UElrrdCpavrW2QiG8TJ9i%2FlCJHmpH5NmmsJtC8dQykDT8ugi8QzM%2Btm%2BR%2FqVjXuQEGpo3CvFZu3YjedrFCWTvHciQLRK4loY5qVRs8KxhUJ9BEq8weoBrtK0JVnReTsIsdCxi5Hf0YKd5zwbkBj48ep%2BKYopwAKfEciIxObNG%2BNOASZGs6ot3YAB6KXTb9XAZq9rOlOasWsg56fmoddeVk6eNU1Sp0BfwtjVjmf76zI1nAOBa76uvK9BFowuNCbSrmdzdGC8iJAJCopyVK1RHb7ABdibDzNguQjJU%2BIkpVRAEoo5XyeUzbxXQh0HBJDfmZRMaoLteeUA34zlab5TriWoqx4iQwVLzQwwPLmwQY6pgGocgtSWVSuhr8ose4iT3JFsm%2By%2F8M%2B0pCPZ5cn3xkn5xSPho0C9Wb3bIuTkyVxd2deEwDTkIjAV04OT1mfvqPH3MKDjL3JibJ96T4lePcK6lwYXo5v1vS5GB13293CcfOYWqA6BQ1kxbcc1B4eiAL0XK6Z3a6GfYv1W4nC8GZmlNMviPIPCo6wrZkjJ1iC9CM6f2NfhZgDiAT1WkTXqTgz34kvTf5n&X-Amz-Signature=764241f852a55cb062d93fe00f6e46f0f7fbac2b794b88e412ce1d0d95d0abd0&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPTO7ZDA%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp%2BTkUA3kBfcfN7%2BExDl7%2FtJ%2FIrw%2BciQf0nlB2BgzV%2BgIhALpgVG4lMiDhbo%2B6fx8Ci7A0hpTltvhBoB9ccH3D63pBKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl5lvI6x%2BYbjT50cUq3ANRH2V%2BS7MXW3yPzNUsZtq9jzw7%2BpfrkkLrRJjT%2BTQtoWVuOHEwisqbYZ3DA1uGPHKteerA7%2BeB6zKB%2B8AreqTssjhcZyfxgNc3Qkh01h05qGBaM25qZw7ejVqOI%2F0wwqIQ7XO7r5fISP2g%2F4GnNG0S8JdhjAtbYTaMGAxtyUSo%2FhGwibMiP0XFvfciJe4Lw172RLZF0aasC3YHvmTa2p2V9Sq0fXZRn7SiOK2F7dO49tdJHRU32M3VfULEH7M8aQAFdfSgmO2Eepy1At6Dfq7eXCJC1o06uC0rjSWKFZ%2BwOTzCQWvN4ojA78qLT9T%2FjMBVbENpthA0B4AdHE8m1VNNcrFTzW1RQ6J5WQnNWehrWDJgq1giBiETDwomaB6CzEafRrRWNsNk5nKxmOilFGv7g50BS204e1uHpbadiCIUv9K1L5JMsBP5hwS%2FuGJmfNoT%2BsR75Yr8KbAc6nZCUCruT%2BLH8ruKG731cEvrzQSkQsDhZlmUcfM%2F8jhsP9UiWOky45xxjZux%2Fu1P9QXW3JD9a5jM0BjKoFJTsvvVO59yp1FS%2FudZ5iyC4si58nNoWSHrNddU0rorOzrBiLKauumtwz%2Bdj82A8KNrVWc3NG7oq35qf%2FROkTOkn9j7xDC%2Bg%2BfBBjqkAd5ISoXiOXC7GTaEDJYR48WWbFr6vGjvMXWvnVMGvjOOv6JZZ1BLeESqOmfk9d9hWptjYPTSBbnek260HioMS81UxjqVTEXZ9k8XPACSaC0riK%2BtD4aUoNq2E8l5az5%2Fn3kMNAqjgisBXrzV0EW0RG2XqgjVjVTEAnGvRKSN7K357SWf0vniFbQCn3jYm9XazYpgf%2F%2B0kgmikYTxUllVg5VvaKpV&X-Amz-Signature=e6cd695a468020e3c563104a0e21e1fb0b1754d08eb591ea12469cd6c73c494c&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
