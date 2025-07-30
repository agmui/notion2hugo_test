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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGX45UER%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnqZNbHQ3ypQ1WPQdboJ%2BSlkHAT%2FJ7WqQeG4zgB3hOtAiEAmXN7ktY2YO2bi%2BFv41s3tyAiwLBZjxVsQdesWd6aiGUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzp%2BHROihFXJyzf%2BSrcA5EZrQLXy%2BrqAmKtMYXJYvwYmIOEHjAvQ%2FCLe2fr%2BReh41n2agGoP3450hjaLNxEQeZvGBep0MPFWWqeLYVNq0agFcey9mumkcfA45z%2F0G0EkbFLNa%2Bx8DW45AfXdPbVmjspcck%2F9khN%2Ff0jO0DIj9KENAJUdM%2Fhw6TmdSrzhyt5qUo9rr6pfgOt23rPLnTRtLQVgwiDiZbWfO3Ong7NxqFadsJuV5POIGelTLA3eV4K0KUT70VESlA9yruLC4LRfOSCE0lX21hDUi1WOvlD%2BEMiynFd5%2FYAkgibSMxf%2FUjk%2FdHcs0B1ICfHH1c%2FpunT9Fyje41pEsxVGe5XJ9p226%2BeZDoOtFGrWdHUdQqoLOsJfuIa0PvB9GK66ZasVSrX%2F338zBZnbnLPPT%2BnDgDVlUy8PPpXzUjftCbucPg32rmyH%2Bf1EyNdDVP78SitxsS2R7b65BF8EBmTUTFaYRdgOeH%2BKZmumwCB7hsiiQy1DnH%2Bui7POQdn8bkeQ9kjA1FrTa8iOx86zGzRxIr1wIwT5NivlpNkPbPYsAYITNuy9YyZH4n7%2B13Kx71VZaS8FMkU1qozbcxOzmssiioBpGKzRTqhzQyNARyaebhyLBAoRcUmrPREU07JKGvP3BlKMPe3pcQGOqUBPLZ9GVTf8kYMZ%2BinV9XFtDT%2B05ivn5q9FMHbXeQNbt8O%2FiBJG7pgpTfE6MMdPZkAEz7lO1gTbG8GVHykERFCr3IsU7wmD6dPXZqDYk%2BZgOqbU1eGe1piUjYOMPmux78BFXO849suNSgGWVtPlcoBgT0hHk2U79CJRh1U8plEgROo4jfMK6sB2dh55x8bFpnLAayucMUwaX4CKN0elOsNY5MRWeJ8&X-Amz-Signature=9ea49c9d2b5c37da8ee1958162f6c145ba117ad595f4727badd6e7f97a0ca647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466534FA7Q4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFj7aY248S0anb4pbnSYjSqqlzxEhkjTkKS6gz3qOm4XAiEAqcBBUfbpNS9rEcjCOGU1xCn3U5%2Fga2b1nt7ylchFsAAqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvTJNuBzZ85g4WMCSrcA7xAkY3tJrSHJM2hmOnpUc9LgUF3q8RQtQQmJ%2FQXyr26zFZXwMcgysXhRBrK%2BNg3h7DRZEGH%2BBxMAJf%2B8TOLIjJAwbDkYZPMl2XraCyKyOPs%2BUbXejUdtMLF79PYb64eZ0IiIJJNr8E2Av0cxK02STa11qVn2bJ%2FCi0gTWYo63cBtmUfRl8Y6TBspi%2F%2FGBRnwB3o14Jjo72inCZlzdp%2BoJ197LOlfmER2UK%2Fw0VemEmVm9TaqtSNqUpqZ3VwyDom6kIpw3ikpcHCXtVOoOdEgzadH9rPi%2F2buQCyBNFJcHy28QyQxU3FSQAzUVVjye6OhKVJk%2FydKUmVOq2mO9ZR8nJvdTHPVSNE9oBpBpjx3QVfbHMluoSCZzzIMLL%2FA0b0A30nQIWPtcbIsSJhlAE%2FC5JST0RtgAJks78QlWgI%2BXfyx5gZMbybOd1tUhsVDto1%2BIYCgvmCjXN5pa0QI81BLJF6zmczMbIXpsgTw1JJpR3c1AFLt3kGCdL0t9moQY1sR8p1z4NKbNecdpdb4PYO0JSjeim3ZKkzxEcJWuQr1LqAJZzyMakelUf89eF7znWcLXs2jxFUo7PgKfYxJ%2BUD9h3CHrCJqbdD%2B%2F6rS50yjl%2Ff8%2BN26KeR1fQdgkrNMOa3pcQGOqUBwrs6eYtnzTbnGp1Vi21x5%2BHB76LUfZtoszOLdeYddg5E3fC%2B231Z7dppjRW7MkI4mXrB8IPq0cXtdy%2ByGR%2FX9AHArhhj%2FYrgQFYAKxdxR%2BN1yqqwp86zXJjf5lV6HL%2BD%2B8AfoDGB4ZYD66oTNpEX%2FG7wTlKs%2FeVA6a2g1WZmsLJltBfoXiigIcvVqndLnmefbIMMpkHudGafFBe2DBnJSdnPQlKs&X-Amz-Signature=fd402985c71e624170b155cbbf0bba59d12dadc0b24ae44b21545c6a958992ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
