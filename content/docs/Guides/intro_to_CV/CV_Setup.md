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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRORZGUT%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCFWvkJSJzjCbRR8ewGS7E1%2B2E8D8UYVVclouF1ahwFmQIgQQckoT4VKmcpjDoMND%2FUXRhxgWkBrsTOLg%2FcxpQT2LUqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJrAKzdGFSrKIjMbCrcAxIjjHl8mDgmhDZ13jHbzSo67F%2F9Qqkw1R2duk11SrfS%2BqEa75nESNvjYpmi9ZUO3GL53R46xlaENloIuU9A05DRofMcW5vw0enK17ARRl4ioGk2MTydyuK5Xl6fFCWeaOjWDh4NGT1UG6XvIKpwaBIRqy44wjLY%2FcMh%2BYNGEY4%2F%2B8MsL1irKI4XUbBar0UxOQSEO7PbZvhPzOXaDXuLJtgJRAmfSYLqVSpUmpX5WbA426Wpy3FK4GLJVI6lb7OVHSUpfR2QBnmKv%2BlHgkeMz1xRSvxdmeL9q8B2NrmNfM4h4pezhKcBeB7492EpCNzLOOrNswZv4l%2B2Xig9LvoI8hsnMuwvo8kfimfV8ePe61Mo60kxndS3LsKhO6%2F6lr5DsJJJZdS7J%2FBstTPZa3LTfRqrLOLq0Br9vkPNP%2BHG8prv6oJ8Vt0ZR72oTJzFUos5u8qsrMH3EeM20u2WmiJ%2F9N1Gtbiz%2Fo6K8U0kezCEHeYYa8vCVJFYybpR11BgLkXCaHUOJd8TABSTIVZ0wzc4wXpvLTGMsS6V3Q%2FsKq%2BkmNZYIkBGY8mdD2%2BfG2EskB6G%2FCEABebOXnFG4CLionn6P2RRpMH55UVVCjfBFuldNmZ51V6TDOVzgaA%2FGGwrMPLf2cQGOqUBRK%2Brlhn5pL9m1yRvHbLAzD82X3aYAFtj1S1epsxK101fK2HkNSnZR3K8p4EoKU%2BdBZILc1KOp2z7djffdCTux1hd%2FKmPZhU9TlDKqjfDO4cuCOdziUC9Tr6BzXh%2BgGUjOdqbRtZB0NoiwEdhHzmgngF%2FpFxyp3V0GN1HDg4nbUDPqMI74560QqCX5VVbBtUCxOeT2qeN4lDR3i7nMqs2RSVvJmXF&X-Amz-Signature=e166480c5fd650e39d53b03e188d63b694004cc6b5a8553ac9c8297a530c4b61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJBW3XGT%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIF%2Fo%2B%2BT6EcZ6Z%2FbK2tJF9Q4IG0smjG3L%2BnuNyxzPFFDlAiEAnS5%2Fg5MKlBajTYyGIaMIPtEW3u8KssKqTnQqFdlQkM4qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtv0UlqmQuaHWkZlSrcA5BKuXJJQqvZeHV3p6oMuALD%2FhW%2Fa6SzeY9sZ3aDAp0NrU9D1bSOrr3yQI6LkzkAuStM4C%2FkihpV1%2Fz1kqERWPQ8BfPHbB%2BE7xfBcq9xvCH5MWpzIkUUAWeQJGl6NqB9pdIj8RY5RUeueOYa8g%2Fz4C2Ds6GEJbY1IaWPOHEACc5f7VbTqwmh%2F3nbeim%2BbUJ1iL2UiH6f8Wf285dd8LieCxm9rT%2F3fF04n8o24fg%2FEY7Hp3QaUXRzEvaBhEi8gL5bJ9Rd55RYBYWg0MBUTAg1WBiCHPO0IQwDOcwPnZEj46tW9t%2Bw1GTFOTV9qYPr%2BqSM1ch5ynDlKyayfS191%2B1RqQvaXWMqD358YhbnXvmyxemFJmBFWBG8LIpIfn%2BTQ3G74zYxa55njHeg4A3nMcuIEeNEx0vEUsRJD9C3anVdeISK4voKVbD3eQSvBpYIvqIR0%2FLuhoIN7WoS83AOPY5MG6896LkyZcBjtLUQRzvPcfqq%2FxcmCqtiTTpK0q8RluyxbncMw2i9WKzH55QYdzpJv2ZEic8sKgSxIaXv0ZffIZbkD3BzZb%2BQhsQ04O66IRCL5ataph3bn2BC0SYBvyd%2FyNibEQuFMG8%2F%2BrOgeGjqcqVoI5I9jAeBGgxhSeOoMIbg2cQGOqUBEgpHndGEX0G958psKVOP%2FjAPKX%2F2iTrJwZ%2B9xV45I%2B%2Fd6DVdkVHxlU9IV8ZxrwLmO5Sn1RKFaDayv6jFM4f8pvuozpV3KyVhhCbom9sxwctgothZEpkBZhluF%2FPNol%2B243IXT3QZdS228Updq9%2B%2BobT8YlL8l7yu7rigQl7rWW2pWcjIOT%2FM%2BNRIm4DEao6d2%2BLFiG4WAPdprVYBAGWoli%2FW7X2t&X-Amz-Signature=8f576c325ed0c2a95a64f6fb192c72868ec8f5f02c70e8f45534ff4af4fd61db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
