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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGQWLH7A%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCyxpxO%2BuANh%2BG6bKoZ8UjR1cwwpmU9Y7lhOMbiJBsK3wIgME%2BKLo%2BUaTgfuR5c3KSxPdSdtXFNC1BJA%2FPfTYhaL9wqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKDy9qz8hfeXTVqbyrcA2%2FD4pTe5NZJQDkhpz5n%2FrwwcvNLKY0q5Fv4S8lUXWPAg6P%2FUCxHmG92A%2BFFY9B6e46exw5KS9rOjl0fDNzGwUoetY3Dl0Ef6dW34QfmTC2EtRZiTumJn65FtXZz4fVPKa0SR%2BOIOzXmsdDXnkmVMb5ua348dPDEZ%2BrJ%2FDPnEMzmCyZTIfO9YIPHv%2FoJ2KPKmDHDDcWu61Y64T4xyPxUh2swN6wPizrvw2Z1kdLIO5nNFU%2FOwn7nMPiRdK5aSV8xDiPt%2FxURar0nWqSJO0T%2B%2FSse%2Fg94iAH5g7YdjaUIPhpO2tXD5gOiXD1aafnPzafBo6ILsQSt1ukPrAsKRb4w2XRl73hgks7JUgtq7%2FHrgqnBlxSXHIr4%2FFBZJlK8nifYfBQA5%2Bv9Ww%2FG9tl1upU4Zt%2BEOoX7NFlB3UUNubqE98e7dLuHubrIyjgRdgpBVnoTyRtdM%2B6lf9flz7fcLaVDs1FgYQCR%2BgVAlDI6aHSav0TuxheRZ3OM1745XlqlcMtjkYgHyQzYFyiD1lz8PjM4bKR24lXPTGxOKQA0QRglAQICc%2BbQp9g7GDJzmVSjrzqH%2BWt2SaI41fCTw6jY6h1IPA5OJ7%2Fic3gBIclPzkqONnsksA22o5fZ%2B%2BV1nuHCMOuKs78GOqUBdb2PQv3yQLLnRbs4BT2V3BT2uDQnr6F3qTRBQvZTCxvzZ2FAwxa2a4xaXcQipgH9IrA7E5eM3wwn1ThcpMLo8h12sjKJEeMBoyjfCH59e43OFshOAqDA1qTd6usBqhxyHcgxGByP63gWUGsJnVDtpqXlm182n22MIIQBWgFnVaKCpa%2Fi0jinVbWSOK0psDh8ZexefjzNMnqO%2BDCqNJVZiE2qk7A9&X-Amz-Signature=b3db338281870004de56dcfe947a917795b6a194490182262adb74624bdc7488&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O722IDC%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIAq6pFzzx3iT2Eq5hkAWy0ymNWg0QHhtE5nFyQvR%2B%2B2uAiEA%2BOJf6ssssfHKgIShQiZaerwAyFwquWIQPwnrIflnfzkqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdBNVtmsbBTif55MCrcA475ki%2FrFKnU5zEDsJX2V7tUE%2FSsN8ol4VCZ2fZn8v%2FTsHBULEETsdKerZ6C61DUA11MHlAuVasAGyai5ukj%2FoHxzYeAzvkY07%2F1ECXDc0UcSYRvuxqN7b91dVyNXTE6c6QbhLbgUR8HuS8UUsoiu4gq5ZvEwsMFWtAUUeU9CjleyUp6YPSkk6W1zeW6P2S5Yn%2BHGV4oarMHnA8KQfoS91QgN3Yu007YRrdcWBpMV9Xh7kJYhF9VB7yRLvyennZGfaU2ZEKSynJ89QlKn9YjfGiC0Sx3zyCsQlveCHwFONmTIdYlQmVdmoZ3YmackWrXv1c0HqXF3XUCOKALJDFK7%2FMy03kckoHMnlhvE1EbGnZribW2YKSs7N4O5YXF%2BH%2BSMLTio0t%2BQCgzkotENc8FpHyMOIw8d27mlBkUysDzM3kH9UqV7UMQGtGBH9FPNHWPQ01EpM%2BQL1JCXoyXQqVjXgFO2GQbvmD%2BWzqRtV7PKFtSAJG5yuLCKKoqrZExdp4eqkOaGle6ZA5KLzqmnV7C54zYq08bU6j4vjp9YiSbj%2F973gYFqcro6gtOB9Yu2Yc5LM6WI7js%2F5o1d6wtxD24cZ%2BqRC5m6ev8WjCdUxv5mnYHn2oW%2Fp41CUl0oSL2MOGLs78GOqUBpLoyQO11b4j21jYI%2BSPDxqAZw5ivZ6UmjiFGTcBGDZiXXk6K7rd%2BkPwVy76kA5FbNsQswtIzzv54hCDX9PpqKndhhOmI27vcjBOcgw5LtdmidHiV%2F5%2B4jCDNcuUfIZDi6hF%2B0vxEz8L54yzPFExDsmHfF9QjGNl7l6jsiUWGS%2BTbuA7Xz9H2b3aAAFApVifRd%2Bqvz1HmvJvV3jiZQHuqlWjixZMW&X-Amz-Signature=04dd51df94e199841d5427ba3cc95d7fdd25490e3ebc3aac2d5ae74ae86221ba&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
