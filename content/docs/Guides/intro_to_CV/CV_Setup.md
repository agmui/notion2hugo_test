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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRVFOTCK%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCPLWea%2FXHSL4chA64Olw0RpFm4X4GWaGkP%2BqHS8kpk6wIgGYEi0tAaPE%2FI2eI%2BKqXl2JVWiD6KGOOG0BQHVTbJ2jcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDGQq79cQ9k1je8EGJCrcAwJv4juWJVL6uF5BJhJBvA9Fr%2FniSeMz49c%2FMeOqs6utsplMEqeHRAEBrA6w1HX3W6b4EvmdL7AaFLoPR1jxcNYMC4x87tgwFTQKUdiVfhTMqbOBR50vMiQj6Mm5AxINAACMC9wwvrnAO3%2FM1qOIRmdBhTzeWNAck7m6YKW8bJ29X%2BD0ixz%2BCskXBKgq19TuRPJHA5rB2x7nf3xxJez%2BUNy3slN38OjOBEhGRjkkgEWYiU%2BhcbYLlkYR7cOVY1rv%2F0iplqdnxrvrpoc0fC7nuFK2pNzEFAdJbQ93ZmvbQA7a3q0v3JODPxabemi3GjhPehsB1%2BqJ6IdlcG62at%2F4LbUTaPTy%2BF5gIV6gCc%2FCnYtnMBD7%2FJsThkACfBG9O1SMixzRL616zPjFtpGhlTN37R%2FnEjRqBAyd717U4RHxqe%2FghioS28yw026AWFWvP8aZKn1Erpvh6cCom02lFHCvcp%2Fp5TfZCLwBT9iHOXAVPh%2FPyl%2BWAw%2FKoqiSn0Z0zcM1OGqTeJzysz20ICg5IwhkqrE7RchYDaDYJFWC9zYnyUlvMjn4XpaqPAqsv2x5cQQoVmXgY4pmAXPI1SZwP1i%2BGNeHJxc8cmxhwmnnwLbTrKOvg8hZyqSzZjIvJCD9MPj36MIGOqUBiYqdiln4ZadipRM%2FxvfiRwgREdAfgcpKARP2MkXF2GCw680Kp3lyO8MswRRzofCxR1COUJaZgu6Tv4xj5ifJFt2ZDXxvlD1cfxJNhDiFw%2B7WgnCP4Szuhrwb7V8OFRbM21cjA5e7zeMW%2Fx9N4%2FKSXZ7NtWj%2B2wdgMMedRaaqMkcyy8HX66h4UL6%2FeDfLVQdkyBcTxbLD9hLI6%2Fw2YGGq1wvgTl04&X-Amz-Signature=0b0c8e3681085af3c5e1601c1ff84eb75093f5271dd7e94f4341aa0d60760783&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674PEE7YZ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCK4W7Ey8aFcI8%2B%2F2KtzWtwYTtWN3ZaAmCwpkmaVc%2FINAIgOohd3WBkC0zfeWXrWhxJEPp4SVcw7XRlL1YRTdLllpYq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDLXptgOGjaIRF5uYZyrcA1ZG1gOEUDl%2FC4Fxgvb7s15PYp3Ofz02sDDm2i6NdKr8NJ1%2BX%2FhcTAv4OBneb7XnmYM%2BU6e26%2Bzz%2BCkhQW5MF0yf%2BGW8vBqhfdvskTK%2FJgQdyeyMqJL393A4LM5jBdBcgtfNgVKURkCQZKRRFpn9B%2F5WvkidRAaVQFlfUJZ9e7syPXRWIiEe4zGT%2Bz9QcOvntJpv%2FHY7zv0%2FB5c6Vz8%2BdTRFRNANe84rQ%2FiM6ZI5JwuH5uIGHvIEvg5eTP66SbI9TyT3QxiVsP762WqjGlM8KpqL1tlceuqzezHvr2g2MhkXcvvE4qpEjB2MACu%2FMFhYLRu2aseSf1MkEYE%2FfbcHC1yy1KV1Ge5aZeUKtEqMQNTZvhEpyw2delQSl5Q0ch9Y4GZ0kHxL5Sh2Tr1gBmvD40KJxC6ThMEGxpGnXSUAoWDd1p7CdJ4ioklrdUbMdehzcSQcacgIWpS9bhMyrU%2FKUlU5%2Bn6zpdqXvuxfiIZrE46cnANixregjaFQNPndvU0gW%2BwlVjNft52ccS0NK4u%2F3G9ZLQezkLT8nMiKkw2%2FsxrNYNXqbDj7XRZWsK05%2BOClI11uA4zvtdk51Gzac%2FnRiNVQYgepsJ0UYbeBK5W68JfwRM5N4oFCnEmyTczfMNb36MIGOqUBo9PtUUhOszRmP8il%2FwP6kJC3d9scfnZun%2FZOr5VFAc%2B%2FJFz0256YPkjSYQrbh9CQvQbuC%2Bi2osBE6djb1xUEvni0Bd7PHnt%2BgJfZr3h9juHgKfJHWrs8DFU8mbLxufw3CGnF7fYaqBpQFORRYifejMEXJHGYDCgIVFzmXBt06RldxgzWWoiRxk161w0c6ZAh3ClXrDPRZwkfJpPJuolF%2FyfkITje&X-Amz-Signature=52f95b80d6a1f2261755db2b1de4b2fecc240efab6969f3484abd877f001b301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
