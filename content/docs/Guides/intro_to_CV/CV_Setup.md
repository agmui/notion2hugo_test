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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YB3EEHG%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5ccve7yRXSKK%2B%2Bv0vGw52o1VuQQ9xO9qZeLutdVL4ZwIhAL6NqGu%2Fpe260Z%2BwJ15d1OwDEYv3EbPX0E1fsffSPUlOKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7vI07gKtem2yrMLcq3ANDxi%2Bi1nurOsbAbmHGmmdbn9zIZg1YWfEUA0eNpCJQGAkO6S4Y1siFoIBWkYihnjybdJ0XIcqIFTHt3zKhs6f7hycGS0IZ39hAdAGxt28NjojSVYjvK0iuAzU9O6X2LurYwuwz1DnuDK48ZnhWgGl8wLLjkEqeGy0EgAM9I%2FQLTra%2FFUTHHY%2BpRQDgj7OZVw9qNQkqnl3SqFBYLWZaaT7CGW149VLUKxoWKwpYJlGVdNrhFxTEzte7DjzrRmPTF8x60JchKPk1CDXTvYZtrlTh4cUchR6wAFtB662rDA7L%2BvpLoLyRjumjGZ8lExy67JmE4pCxoYixFBhgmpdY68AzqYzNKp4cwqdpiC2N4BDwFvqSvNRGt0t2q%2FPOp%2BRf4a2rL3A5fQkgtBS0ohc12VCz%2Bd0bf%2BEfO0xfe11al27PkuqJ6e2PAo0V8gxOEsF8MlwOEybka37ye41Vk2DXi2CWMzWvWHQ24YZJR4fQm7IhDkI%2FR2PAIMUlyzZzXnA20au65Raxg%2FnahZGpN%2FluWkwOsxDba%2FaF82GZS%2BKqrBYG6cd91FQX8K9%2FwHx6jZbHwuqDwUI4c%2FTAmRYJq%2Fb20xiRSsZMgJmi9v2LrY3XXibTcBV4qqVWyn9Y%2BRqBSzCh3f68BjqkAbJCPuSQ0s9fU9PF5dNPNH0NXJqfLVcDcJajmRLCzXKPgig4HU32pZyboR0eTFIeXy7C0DHhl0vis4p%2BNhzE%2BtkBTLrvDgkV9%2BqYLQDpgmQPDpfCWUWALXygCIjmOsTfNNY5DYPtY5aUI7Wmh3xhViH4RSYGxblYetwTu39anlGtTbvRvLV%2BuXiyqyXvlFT9koASrqqtRIE4L7IkephC4ROX09E1&X-Amz-Signature=2f68eb50ffa8988e52dedd1830890d0a3b4fb263e6bb5fda806158f3a3842136&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOUCZBMO%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXiJQwDV%2FWCH3hSjrV0SDC%2FiQe1lgPguSD6QAUC7O5BAiEA%2FOaD9T0BmF5iQQAtMKlnNw3No3W1GQ55lkkUzBAZCbMqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRuezKv2Co1pvv3SSrcA7OVA0a5k56uUlYwmhuzbpkmHIhe7VQrByc9R2a1Bt1uG%2BnzMZCh1tRU47IWBzvC0YhS4eBGzRQ09%2B3E0JF0sFCodj6D0XGPZWK8a3v8XTHF%2FV4ZQTmmZ7Rk%2BMjykdKglTHt78T3KgYYN490M0xAI8ckcuYWGU7056emTqpL0UJtJZtYMI8NTRwTmxam7%2B07rgxoSq8IfFdcl9i7I5ux45%2FPEa%2FH%2B7dE6ewV%2BhPC%2BxlY4JftyXO7eN2FFPji4vIhTHD7MfdoAHKj650DEikMhTvs8a90zoclqgaIk8ZQ%2Fb3gP0V0LwmHNdFLM%2FrWxrsnnYfIFsb3XOshelEeG%2FG8RYuPmS4mc3z5utBLf7eWP%2B%2BZ%2FFKmq3APgdHG5%2BxTY1yqo0CYnz5p4jBTkIefJX8i8bzwI%2BGh4jr7AuwfuUzYdrKQV3hkq4HxZd1M161hIzXRwLnYGQiSCDajWy4w%2BZ4Na1yV%2FWJKvmeErC0OclfBlrLfdFZP%2FXKhCBCsm1jCPpXobjub0HgBnD94DjuPQHys%2BNPrivpPB6JGXK8CEw%2BZz8QrTDLLFLSGwBzPdxp3XOx8A9SWIOmkVzhmNEDfgxStKekb9QQCq1fDHIL8eziyeg6JGAZ8kv28TckzXqKPMKHi%2FrwGOqUBrPdia8Ia5feklzTB8bYXfs%2FZrT3bAClH2%2Ba6vTnhZxWMNN7jUhHCOAAniKW7xpIDPzWIuXUg82SAFxFZIex3i4hLO3K9A50JLmrkQIurv1kZI%2FrL9vaeBjYwfgK%2FZpJLtNZ9%2BzvlPueB8n6nxk4tRzXcnocOh03VypoLO7ezg8DmHJ3RaY639ktBdWNe8nOHFS9vc3a6ozgzVaSIsEnOMsaJ4rxe&X-Amz-Signature=c41b4f7f59980aa8337d20502b26a2c814827d5855d4d395a6313cd77f3fc5dc&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
