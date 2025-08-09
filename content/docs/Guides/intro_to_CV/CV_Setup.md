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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU2RUMEC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHgjjUNfgoZILzBqNAfufPGDpfsVKyxs7aAOCWMJH1FmAiB7Qf8iixfImhddtUJe6fGqARtlvI%2BKUOkZFFx71z0nuiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO2wfo3qDRojViAa%2BKtwD%2Fny7oHhHvILizoQ8Fe3Xc23409DOqzIDCTLSQ5wikCt5R8qUQV4yhF41CsVGgQ8wSLPlkg0QfJlUGmt5UmS9MoxNKXEDD1xMkJOCRifXsWgl8L6ku8VUM2X0UNUpT5GjD2UarpKNoGbFIok7XsQj6QuA%2Bv2AnDWpRN0aUzDKD6QozgSbaBT1sjUdBdaqDyAKD5MPCzoY851gQ39cXKs09GMr1%2BVdYQ4a1d%2BUduSi11hQ%2BiayWRYO%2FwqslhRJWaAtQi2RzfePGMJlX%2BfVfDml3a%2BuAf45TXWyt7HNPK200dFrbkOu2dxk1cMwhc9Y3LlQe0nPVXIR9vZFFBQr80nqL2D9QF%2FpmkFBtrJlVX1%2FRuavrRmrH41yzkjxiBt0U4A6j0SHYlc24hji7RzuWxzLfYcvLv2phgFbRhKymJNAuPovbK3%2BXy9jH85djCb0y2PdX%2BtpuWPFHoamwl3S5wnC3W%2BgGnA9noZfEYLdAYpolS3NAwSqRYECpUJsKlY4GwWQXzvQ4vUa4xJuZvnZyv4KhbY4Qm4Vl1MANblvRiNmGlFU4eYc2WLl7%2BvDCo2M58WWBoR%2F7PvWlcHNg5T9klQOU4zwAod5LXvVYXz55rcu%2FpaAWJRfOYoG8LfST24wgvbaxAY6pgHve0v54QOOCucaxlp5vdcRPS%2B4GIEM4FhOJacYxWo3tdfiGZJj%2BJIdEkRR2eSW5AkK0Uobow7Unyfzy8Ow6USckpdMBuzJwJey1v2RZXYYC8yn8lE8b2MltBqR%2BYIuhILONPkghywl5T%2BvayVspDQ6yQ79Pyutg3YIi6mpMJmYHkBy4osjYwGYogSiT%2F5B4dahVlFWqk3JXl6vQxQNiTXLrPO0fmP%2F&X-Amz-Signature=2ad9b31568953bdda7e7c968ab5007bce21b17a4e492be38ede77fd70b3f94a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IR4TF7L%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIBZ0DuIhoiPSAxdqfqpIOFo3zVbcpZu1Re%2Ba8yPG2L0OAiAoL4ISdvrGv%2Frt4HwoVb9DDKoLYJ73OcTEjLP2eYe6LCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9%2BRP3BlGT1tDWqKvKtwD9hH5hKIOSYCEG%2BcTIAX65kBdpxsKqaDLNVHZ%2Fv%2F7ZlPXvTA0jQbUadKRftAi3iopiLYg%2BBpfPHnTP8%2FxJRP3qAVnxH2pOGSkNb5owmlZ1JjYSamWXskQw9WA1nDBTZ2NXH59VNqmh4ifd5StKOTxA3hszrBFqavvExvsjlJQUdk7So6bfBDQk%2FZFa4L74MTzG2hS45wnlysF5bHqe3LRsjJlv98lfn1r%2FR6nCXBphz9BRlOT%2F%2F%2BrtTn0zxnGwzhS4At6ts0oR6wW01ZVv3WO1IKf9lKwj%2BFEwfbObvzNOvyv7hySiJ6Rfhs2%2FteChTw7HzynjsgcS4xpo0ldX%2BFyH1qAcQl1bYbZrmVleqJj3FfczlX89rIaaY4wx%2FJsg9YeX3uWA9oMezNkPRqPwR2P%2F2wDRLNoYO0NH2k69REJJY3togokQBUue0SRWtMcOvxtnPrUow08xzUg4eryO3nKLjCnEIeGVygEx5Z%2Fv9ki81QXGfbxwqOsD7fDkJp%2BTRBDDgYqLNt0fy93YhAhG5MGNj75wkagfwlFxQOSiV%2Fz9MdiAAv1d3VNQJvtGjrVHzjHLm%2F%2FcAJnieLim8E5CyAqNnoEAO3ILcyp7VB4iwUu6CBAgmKvu8zWGUbQzdow7%2FXaxAY6pgGUS5PTYkTFbZWofmXvHarxzlydbrOD2fejiVnaBWj%2BDRYUSR4wayKs3LGc63vOrOGAjMi%2F5JxpVXWLEcvPgNwzeylcFOzlmZNSnZ3%2FXzzr0%2B8G%2BYm2rcveD5zjqwTDHdMBFXQngyo55tOPwr5nlwk2Lt6bJWpo7BZvfi0nloYa0dFpfiGxvtQa8zpyqSzc8PJCbvSAywV3lQFdS9oBm6V6yoTFsZLl&X-Amz-Signature=cea93254fcf103a0b2dfcaf2fb615493fe12dffcca2010b072e6a11e3533eb47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
