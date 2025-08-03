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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTJHP4ZP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEjbl8OZ7k1NQsfnXjZDoGqL1NANZW4CmYikGQPYC0VAIhALvfuMIzQTIIp1gcL%2FP%2B2nX9%2BIHmVp0whfoKl7nszWDJKv8DCDQQABoMNjM3NDIzMTgzODA1Igwsm6dzTi%2BYHbE9DRkq3AMXpyY9xbVjrzPSmq%2B%2FutuDwzs1TX8dMa3Ju3QWDTX4dzhNYb1NGkhDDWuKfaQ1paR%2Fs%2B5AzBVYwJfzTuhQEj6yAS2c9X%2B8aYhWp38j7NvqLGcOw%2B4xUA72ndguqggjIEeUwjQB44wiSryq%2FDVtH0g0xvrLUvAJkrnwPC5K%2BUv9toQ9o05UebE%2BtUTLLoubl%2FLiWlwqCmsjNqlqNDLu39U7WFpBY0qG5YMIliInkPxeFmUFlwUZ3m%2Fli64mesFPge0Oq3fmCStfN5VJK429W%2BVrgOg9AT%2FOhk6fYR6WXbWzIfUEWModiLUtbgCVkCwMl85JZRgPYqhZowi2evvh4gZfcuZ%2FffGYd5xa6dVnBAKjrZSzq5xPFCAt20aQ6FwLyOn4JlPFiDZEigOCo2oMfjy8DvUo4iGKZ%2FpXGOz95qhHGCx%2FAvuIcyh%2FYYjew3mkeZJE4yhCK0QR7s54rLbTomWaab6FrnmYkIkneVBP3MNlpKRyKcdTvR3g4F8L922V2z5zNFauhWJ8TofNwvCJGtwBNeaOVggXKVCYDt7SfG61zyeILRaD1iH%2ByzfqBICSsz32y3OuWZHmvXYEl1F4xz8SsZoRi9Arc%2FspesRF4IVUqPr1Xj3xQPxVMXARkTCk2b7EBjqkAarddSv0HjheCTuzJWvVLVujLwb1W8sXTmBeX4pMvHlXXWpIA0LNd0rCa5kvX44L2oNRKMRvwSL2a95VEKJn4k8GDfkf9augfdwJDn4h2R2a%2BlET3XWPBQrQv%2B6u%2FcZ3aHa322rhJQXoMJMtuVDNLUQqwZoo1HC5owcx5JCdWqVMV%2BVyJpZzJo65gWadiw73OqjKRMnTiaD5gogSlT8xn7MeRWxq&X-Amz-Signature=51e1459456d1dc977002af6026c4e2eb86ede1b1a1e37128d2776247bc660aa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653D5RJK3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE92rMDcyjZYLGgyqq5dWS4ymkNIRbTJwsjupnHHGcoXAiEArTz6wreWDeommsvn4xu2aNFnvCx%2B%2BW0qmrzYGl25vbQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDLUJn9s8p8C81jPk3yrcA6lQjL1pbKYmEchZdj%2Biy7zHwRnXN8DYTAnC%2FRXjFREXVx24Ly1TGmrN1W5MMObO79btHaFup2PNBDWwUEIVkRrQxpcadtXWCT70O6e2KHUFW2fCpfbcnQFmnee%2BtdCXcrNyY88beHrRbpRnFJMQ1qViSPBNiWg8nZ7t%2Fgt%2F94ts3ugKgk0L4Jx0xGk4TL39a9AXy9SnUNNKizpCQLDkP%2BXUkbYOPjHcfDvdL5IbGxp7QkN%2B9gVk5uGGr%2FzHScR9MH0%2F97gYPrrJkHxlFobGfjD0%2BT1g8tjkuqCOBr6UNB85Cu%2FLzQh7JrecUIjp7L6Xbgf23BbRUL6zbhalqLKippqsEECCyaGMDt2vZfJgKcX8xeY6H9Ket8EWSeQYpysrlC5pCvDMHoEHUHMq%2FZVK9fjxP8zcK%2F7klAAuf8wRWYDw5JLbP%2BJMdLP2eSVRLjWZcr4UxSpuPna2QF8XOXq81VE5w4SfEpmxmtnobXo9NSlPFIW6LacCFP3FsyrqL9bGD%2FpdJfMa2L6W2KtIcJATZnfdfGCSqp9Y%2FLGzxjTNLYz98O%2FjS9knmMjnqRNy7hQXG4xfcKrUaoAye32euT1rPFQUl2bOjpVw6x%2FF6GnS2R%2BYEhWaS8YezqaGKAy8MMrZvsQGOqUBzkvuh9DXtePJykpk00S0ea2tqbzIDNjBCrQ9m7r5DdGDW5PqLfc44WRKzJCQPF2a6AxIDAJwWTN27dnO9DtrkgSnowPyvtohBml63saGJwhTKzaIIkQrkDTSBGo4QoDkW5oiJLmcgWe%2FPTx%2BflUZ8a6S2kKjvEoiLUMOS10IWnvRQ0MbwqF3PAwih0R%2F9zB%2FChcrSONe%2BgLUOi4m3T1EmUyQ%2B%2FM3&X-Amz-Signature=8f1d0341a655218fa7a21afe20d4b348d5517fd696a48ed0365a6dfa6d70f668&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
