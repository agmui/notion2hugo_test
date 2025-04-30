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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VZ54QM5%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCrKunncUNVDDP7U7TJZ%2BMjazd9319MiWG2FA5RPDAQMgIhALGKUzteUfYn1CzKJMsit3foZjcw%2BGvQ5dKYOmQruoF2KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQsg2b87XmqnZChBAq3AMa4OBr8K9wrpK10EYUjeCrinZPb3CYmjSNQDs3%2BwVreygPRsQYtxMMbe1gAeiXDUj%2FQIh%2BXGBeR7kzYnIGOPfKMt8AUhchJuAviS%2BHYSomlh3kxI0Ax5wuYmLnqcqyw8S9cT%2FcYoDD%2FoxGJqi3ouvq%2B6GKnPy%2Fm08Itx3bj2fLW7XLBWKmrsJ%2FYOowBd6FEx6I3S0CVK7kRwJ7M6BoXeEdR7BvEaWsE96%2F74f9ajU3afjIcd2NA1Q%2BT8mtauh2lUBMY2wJLMiaLXxPZtQij%2Ff4dJUo3LPpVGHjg9YE%2Buc%2Bof43qDIf0khzcjewOuow%2B5AgkEB3eMVoxCPzrWpt37Jf0Pqlb6lK4cBHn9hLcrKhn8o%2FVzpQ0i2ygRsmGT3JjZQtav0cSIaHpkf8N60afajNfoK%2BfZUVG2a1dqd5bPOXQ1yx2SQA634rsHJI3srTUP1a7l41lE6%2FxS3U1pmtc7IR4CCEsK%2FyS%2Bakj%2BoFlQPg8PvZIcoXhlk%2BukpJzUmRs%2FZK%2BAnYuGRDfdBPJAeBuhSxoF2SyWLaGqw%2BKwKc2JxMEv9paeRTkVyKR%2BTfrC9UJWm92yCwSR1p0BIaK2dyToWD3yOlgsn9j1kurHFfRkQv5nHYvI2Pdat1Eabe%2BTDHkMrABjqkATMxcTn49Tj6VCDSXOqgNr1p4MIneFAuHlk%2BBWGq7x8aj5%2F%2BokRdft8vQLW5y2APBX%2FQOJH7881UZFyQDFeJTFlBJ61Ml79PO4L68SL3o0qubJItLbpS%2BJmQzwMU8R3x2ZocfMosww%2FwAOIf0zvxBUB%2FUw510V%2BrSbHDBBPejXChyzngIvPgHxAYjbadiJvYMZ2kk6Wm%2Bc96NPvbRGZSjCAuEAdX&X-Amz-Signature=29ef37e3bda7ccec53ba9d9b250b2526da75390d928d302ef380079d9a8c6b1f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5IZ6XI2%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCXc%2FDVoHeh1rBfkRbpeirF%2BWDAbjYDD8FCdqbhxgH5ZAIgJ1TTnjmBv1R3MkrJDH5lQpDnlqpZ1pcVK%2FzwlPFDZMsqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjVOZN3yTnVo3I61yrcAw%2Fi2hjWIiGDrzebW%2Fo7xoMGkVvWThubx8en6MZtU4sf7X9%2FNPZyh87FHV0RTfl0sSJFQO0wGHcSgSK%2Fvg75pG5boLTQNGS7H1pD5opQaD30GQeLA1IsBcWiJS1MPRCmZaJ3tGR3vr0kdOQ34pSvR5tIuPhzk70U2Je0cF7durqtSEwePdFhGvzweK7y9wtwHcd0hl6nZaaK3czfxu49TZZRf%2BLWJn6SnoalJbC6dnqvk%2B6kbDnYACxHCdexyLVyk6oP1nEk7SQoU41UT9zbpin%2BCjLYwuFTU8LK0yy2xmYLRS2pNx6FzxbYKm5eObzbVYMyxL9ggdv0%2F6g5XPkM2QtsTYxjYd6yNZH21OBYn0BM2AydJtf4Y%2BU1plUCGzL2kQpxrjiYBZONaCHP58JDVl02WlPz0VcJrXdtHQK2g4u7WYUAQbv6rvEEH0h%2FAivx1XfIlQLWWM2E%2Ffp0Sbx2qXInqZfA141mobRZZ4LppI2excer5EuZn0MKatq23PuYmWQlf4lxTN%2FnPIOieVsRAE%2FpoTjK9GDKiOhEb%2B9xkT2lfRcSKbbE8It7HLVOWVzlDkPKe6XFIeVjwqIQuQV2EEdBdnoqk1WPgFfIRMcxdvwPv3o%2FGIjsOrGVErQ8MJKRysAGOqUBTj3JJ4oYsrz8SsoxDRds9zNTuTNODAOv4EelNRVmxnkcaBaVLS135jBbEEDvqomJlrtEqV3P98X3dwOQFDlmS%2BtqFdFbQZEOIH59msm2Ze6spvWAqsVcM5PYQYWJClR8p8C4%2BP06mbS3PK6gijhPW0xCVu1%2BWnbs7B%2BuVXeIthN5mVr8euC3ALpbKMCgPKINTxUpAClBSwfKBrNy7M6lqaY%2B2yer&X-Amz-Signature=ed1ecdc2ad5bf23694725937b38299f22bc6e86b5c3753e1af7c36accb9357a1&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
