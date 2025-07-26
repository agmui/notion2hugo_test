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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OGCFGJV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCNnFDBbbgcFmVqCgNc6dQUQxJbWOD7tbkHsPEwZp4JfQIhAMQnKQsv14AaAhXEVYnIc8PMrgTyP3oJUXCkhSr8rkW1Kv8DCF8QABoMNjM3NDIzMTgzODA1IgwZQvjYctrxyo%2FAzaIq3APAuE1HdbQKEI866mt1sswer8WvfWcVz9Yz1MKS2xXuqRHxcId0txE27v90Mt23KcAoskqQAxkSU4FimRARSv54cYVC2%2BqvT5qg4ixswdevKHLCvMWlcF6aFvlHUX1lW3UiuXIsi%2FYDBbyNO%2BLBAoF1gMRBXAMZeu6OBgs6j8%2B0VwBE4RGO0NFGUGNK5J2%2BPXIXb1qFUhIw6irpEH7%2FAjKoIsbKugSa%2BJj49DkfOf99Ilhewi1RTUzWKPuXztCJsj%2F7zhXn5l7RKApekJQ7Xt8o%2FFqaCy4BFBR3wZOscOZ079ZjHjAXwLk%2Bj0MNhBTC0hY%2FmW4dAXYpYzvqYTufr0cWQnDfr%2BHtmYdHS2g93KuMCAcwKyG%2FTmcNZv2TMklpbKY9Mpi9IdqmVba98I1BZdcjfdUAZLLRMfR2Pq592w46J6JKyXnHK7bc%2FTrd28ZWuHGIkZ11HB3byH3EEUgZTMwEYTbxL8E6Cu%2BJp8tNtalN9GqIa2hq5XGXfavYerCDV3rab1lEoPU7uHNzA3GFxAmDzoghhi9NWe9AJcJ%2Fjo7WIsQH5P7Rz2pOF2x9o7ofirEIQvb9nqLnpkI%2BzZLS1s0yN8u%2Fpsz3tRR5IsTc4yICtpSSGHADJsSPFt7HjjD%2FwZPEBjqkAfzsY9pzj3qs1%2FEx3RAz982qNomkmFYCZsTNZcFBV7YFOqF0j3RDJCSkzHVzqFo211Y4KCH5lyJ7lts8YyXHU02KpHmLFpsHacVyohHxMDZxLnYwe3eZIxe9TCbao1%2FG%2Fe1Eqv%2B2WwoeqpL2%2FWjfF7QkjsPllefMa7CJn7vNlCCfSKm4euynOP0YqQN8deTAXN0BIdKGUDQBibKpMe8xI3AsQMgU&X-Amz-Signature=003438eefadc4ade65e3c1c7f9660bb2f3ec1f2957abe48eda0230affa1e7c5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4QTCSJ6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIF3DLTMyOCajuMwCLr1TIkAABy1B2Il824Jil86IsaWfAiAg7L5wt0XFRPoeQbeoUabrUbsooJixk6DAQuWRzbK86Cr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM0sa0IZfJlzVJQsJsKtwDOFSRbbBB4f2MqbpZsxujM8Anb6CjDR8VpxWBwlenEYiusG%2FFEffjFyvdI4B4e%2FMSaoikci1gxPtMMTxttdN7aBafVaCHVsAp7tTEjbcfUaJa4oBlAvTANEQImpKSj9LbjZstAwdBsEu%2BQNjOZd%2Fn6nlsWjbVbeDynevlySauVnoF3z2nbla3tUWvwTZ3ANID5UfPqSs%2Fop6JR43yXi6YeQBeUnxsBWrwIwnUsQuPWH%2F939%2FW8rvQsUlaaLscvZgrY6OS2%2BE%2Bx73KbUo6i9qyJ%2BEgN9LMptC3XFj31cXtLszWcnatbwmR2BKAjaAz8uUNyp1cns6n1ZFCLmuUw110IbIbTqldrmFSHhR2b7vY3hr61XJN7QLoGf1w163KOhQPewlqE4kqK%2BmrceJDBtZKZAuGpWzb7%2BPJMhbVNAsaUHl4Slyp7X%2FBBMUQbVszqd54v7bgGztZ3xDlec99gF8Wykns8X1bkJvipJwGPYBjHLDSJMfMBcOaNgEADkj7f22pGslboNhFsXblgapImPUUHB2k5kMRl3sZgwr3ExKmdwS%2F0FdERyWT5FPPZVwXp5q19WXvA0rJL9ygPNLwwvXk%2BPXTETwu2rQ%2F9ZsvS4VXQ5k7tjJ1%2F7RnIdgGgfowycGTxAY6pgGWBpzHHlginmcd3rRMJ7gX7FZAQtT9qU2MM0ryIhZ50LtNQ0DJy1ztBc2UGRD2ExE%2BjPkm9fhoaf2Sr7hs8tiqgcN8%2BpnGnA0OsxvESEb%2BcAZkI3tSB3y8BZLpcNXCM6Wo1PNVTsA5SVo0xgCmhNtCVM24gYbfoR3dKqRlavkSvS8xomNNyXrBCuEQu6kCJ8bnqfxjhg%2FBH6kHkH3cipGTWtz4hyhY&X-Amz-Signature=779ed72c5096d623936b8fa89def2f7822819b8a310dc3dfbd568a6f5594af99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
