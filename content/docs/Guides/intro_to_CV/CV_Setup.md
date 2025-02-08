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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W65D62M%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T121154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEFVFg5NzHkTXA7PJLYhCA%2FlSdjST0W7r8ToVhXi%2FQJJAiEAnRvB2tIphzCVQWg6Axq%2F0XwAhdaccXHdiyrN3YjWfXYqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCwXwQSfwq85zQtcnyrcAzbDZUkzV2LGSj0dkFZFsk1e38b28xeCgNqz%2FG4qZMo1v3x%2Frq9MXhFJjqLYJ8nAT5%2BaVwHbXz89Ns%2B9v7e8BfbTgkFAxyy%2FqcPQfMtlxUKRNshyd9LvqePmgw%2FpzJXCdcgYkon11N1v6mT8rTVEjbP6j1z8ycS5%2BMz5FbsjHLLmwRb0J4nZIOOJiuv00V5EU6mRZZwQgFhMZxTUR2YPcTmEfYi%2BSHTxCw5%2FIJPNaC53qI81OXA%2BOD%2Buu15UT6VNRh3pWAkBSKVvRf5EKI5xESCcMIrOf1paBNZSVxnw99Ado5jRDznagQdgB2h8Z2H%2FKqanhM%2FAHcUXqnpyUIq1iyRPtwdjOhG7u3Sm4BXklsRZEm7tJZGtNi%2B1NQ7hdtdMrzloain%2FFUcl%2B9aS5hC%2FYVSIiO5wbyQGLo5u9DonwX7iPSR6Ls5j%2BcWGL0cVmrcHQy%2BGzvRJl6MxSzdD6JrWinx9AKDEWtrz2A7S1dMOD3HirO%2F59dEJjLzFS3wbMOhWUlE3P0zwT0%2F0c%2BUG2tB8mEIXRaB9v0JTdpT8%2BG5I3TilLJnCl3LF%2B3QK0RvIjK3TbLqOPKm5I5ry2W3FPTFosPxQKfwIEzaNq9BZwp%2BHlwHrGOzvL%2BLW%2FT3BDQjqMLiGnb0GOqUB9zZj3iKLrjV5fPTWqgZss1U5olS2N9p%2FidfxtEPlE4ewKQrhb1pk2qOlyfr9XCNiv200pCUKWWhCDuYD8LQTNBRBxO8h2oTlk7tPq1H%2BO%2BG66X1e9bqn9LIckonwTi0dSSVclqnz7IeaeH8y6vheUmWc9kG7YG0gUq44WNBknElBWElA%2FvPwlDhC7OABg4agQhgqfzg7jzAGAJXWw1t8sMpgelX5&X-Amz-Signature=61754aaf2ba8cc66ddf40863d9770aa7241b9296f506cf4e300344ae31c96c07&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYPVDT3G%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T121153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCQuxDCLFfQ8SN%2B1z1ZH%2F7TGIlJsV%2BTVmi0DqA9stvtLQIgDEY1ZZO48XqR0aDB2orBwacoR2lFnn2lzZDkreVHtJ0qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4b7nNSlNvvKNx7mircAwAY1NZnqUpRS%2B3fVAfmX%2BCNpJgJYoq1J9WhogJ4W%2FkAypvzUNOYCB7kr41T8MlkIKE6BU5JnDJamJXFTiBzpqVclnMAShxGwf3xS%2FsMkOfJS6DOfh1mouUfCffh2t5Sf82ICosdEIhq0V3os1dw05%2BMB2dabhmQYUFvdrpjvXpGySSYm1k9VAqC00ZZSz4enAfzKiV3jxY8VkoGNbyYa8u5SJndn5cU6T6TEL8U5xVU9eLWZUn7FLYMdoSNawi%2BpO0Q2xhCjdrMli7jiHLZb6HmHZ35iwvTkYDz1dkzQZ%2BrvFHTFgq7eN1UkgVdBrqRfcAZM5oYDHNROEiAccYeEv9wUYKNq4T14tiLpmRc%2FrPVpsv%2B30E7HGY5bTs2TAtGGk051cNskXaI7AMCcTOUJd%2F%2FBXh%2FUyAT2fKPb67Zk%2FMsPSWPmouG7esYnu9ckVUnkqn5875c7nmxe2pysBwVV2Rc2BLKCC9iWT54A5ZJ0i%2FLyzX%2B36l9jFDECyiWyE3j8f7CC9VMw3p2th4xSZZmEBT1iOmvV2czCr12Yt3WN3MYkN1yC7aI4bVh%2FP%2BWRQOGEEOWJyN6AtIM4v7NafoTHLyd1%2Fx12DP22nTqabuUEjHv30YgmaEtu8wUL2FTMLaGnb0GOqUBP4Kil%2BVu1Kn7KCe4yTClBrW67G%2Fj5WfjJWUgIz%2Fqh2zIUp83%2FeDnfVO%2F7eb0LMs5QZXXOKh8BZ%2BVGcV432LkGX5QWZMNly7fvTZNo6GVpOR0wveLisvhAKKZSiO8CeNRXeCa2P8MnVH3iwyzHphbCtrxkXRCyzWp1O89bkrvr6tWLJXHU327bz3FjBsqeUjxCK0cGLnr2u7v7uxiqcoBSaTIssr2&X-Amz-Signature=5600eeb6380c84aae25ec1706c183410781c1d9ae12ceb84689d90156126caf2&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
