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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7ZF3WYP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDgm0zcLlZZxxX3gXCrrW3FsBO5rZoAy7k%2BH%2FlcnJK2AAIhAJIq0E6FFeO4d4iGDFE%2B7ZKvhIvrQzs8WXwZVmqyMIb0KogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrtVTL9YKOBhwXMLQq3APRmA1clN%2BuTOKYoKYgLEY8Bb3byP6K8S5u17LqNEnV6iC4CwQqKI3AQc9cAzfVBZu3HI%2B3IXRCgvQilLv6PNE6JNhiW0uBSZpAwQxN2V8rSiYLmjgN8ycE0qeFuolf5H7LYFCyHvz2o6To8%2BRI8RRY2yv6XLf3grauOJItUAK7QLwfRP8ap1I713zoJEMqLNMZVSIzYWWmgqGUMgl0kZWvsVEPJEXwekotklW8Ty9ErcMWv3Amj63Hyt1lHO%2B%2BVofhkKlknY8RpPIb2AhAXEfDtRfMcyX%2Ftw77EobMEkc2vuuttTVMy7a228YOmT3Qq9w0ck4KgPWv5Bkpm%2FHQiFszmmaTwrpxSNqL7E%2BzdXPgveRvD0bVmq0C6IiJrjJF4U%2FrTF9mkHpNVp7qcWoZl7MBcoKXCjnXh9LF4u%2FjuIdIXg4BERZiZIS7pyRxcX6%2F5tHq%2BwhuT6%2FDBiyh6NdxutR6x8InwbTvJfTaN6PnYM7H%2B%2BauH9fJaMI1AqI3krECy9F2f35tQIIRN8EBaukaGQ0bC2kReM3%2BcGMA7PXbQJGgrQ2mt2ewAZRAEy9SSpFvCVoMzCINheOLbBSGWEiAKVQ%2BqBIx%2BXvCZ4wrQOZByKMPj8C9OxxFduQDh5jNqDDK4vfBBjqkAU7vbx3BNPBRPAR%2B%2FP0JCwpmqlOzfI%2BrftAXymIvD9zc0gmax%2FORCKCYMMTFVKOOhvvNYIa4QfIOp5sG11QB30lq4pTVkBapw%2BITp0uYPWdpB%2F8eMx8sbammPuDrr3F9bGfKjp5oy7J9iVDMsdodzNYeoUfGOt6qraIf11nTou1ruGB60l6Xmv8OwVbyYQ%2BwvZLDappi34ZZN%2BbWig%2BqzZfoJfKZ&X-Amz-Signature=1b146c9cb56a67cf6a0aa357236ac46465da40ecff143f6743d6414cdf83b287&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XWKXLIC%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIG20rci%2FKKYKYjbW9IenFRCVVRvcFQaV100zkCUVgOr0AiEAlNXVYjNYXLvPcKwtJKS%2FBPINaidAZZ0Ad4t14e4IfykqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBe1Odol8gwW97zRyrcA88s1uylBxpMPdELv6gc2JjQCCSWY9RAcjp9zrSEWERAyy%2FAxaHD72s51AXKiFEOeH7fhU21430MbSRQLbPnuC%2FvKH43%2FQwm%2Fm8Zff3D0AhgEmH2x%2FcOxBB%2FEhxmOrJzny92O5lixY2aCq%2BCxgZzm6eEXQ%2BwD1D8or1IQpf9zjIGLLsbvcLGYVF7ESu1OduMqrHt0d635bg6K50NqqktMX36YDwPmVZ12KwKR82DQi6rN87dN6ktN3%2BWAxlqnctMxNOUMRTInTFmz%2BAQfe60o11IvaPoz1S%2FuLwlFXs8B0QoZluIx%2Ft90v7gXeCGTMQ8YNAt3x8zhN42SvjTyihinfFjKRCTkZjN0b7RPEil0NfnWAAYFgXuRUhcggZ4KhjmdNE12siYBFsHujU2qfU2poHuDUjb2wAXjDfNXBl1ej%2BJrUgpNYbRybAcKTSEvT7UkbUZSRJ1%2FRfW9nTqxsc2VJ%2BpR%2FUEzUd5x6oQsnzC4ZLJUz6TIdkPOaeedpNKY8t4NjvJuFJRqL3ljo7KNZuqfCxNLQVAUgCacPW9NqqpPnwgRq%2BCMXgo9t6%2FcozP8uoSmuEpQNXrGWgx0TXb4Z94QxtIVxTxJWDsjY1cDo%2BpU62eP6jZ%2BDmJHmM5I7C2MLTi98EGOqUBGZ0dn4iJXxeTYOvAfEZWJytDBIkdrE4ThUB6fhBEZyXRb4mY7LVbFwloCa8GiIV2nj0wOFkPWu9QKe4vflIexzA9gmlAqm6Y2PF82rRzgKmv9gNQw4fmkDIIkqS9Ja1DBKqvZPZ%2FedSvJyanDor0L6sGnYjcgjtQGsX3abYyz3oO5KiLR%2BUn5tE%2Fjwxn1rgR%2BCvjc5vVKar8d56SKSSIoGbOiKBA&X-Amz-Signature=430e604d6b91cf68c218e37043bd62cb2e81d8079ffb5d5c0d1c597d3ca94366&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
