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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PNP65DG%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9t9HwBdmcNdIu5XfKtXFy%2B523YH8u%2BMapof78TH00KAiEAxzFYs5dDuuCq4grwQII9%2BEYEWVOc2pIGeVPbvGJVW%2BQq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDMnyE5kg58Z0wFMGXCrcA5CPI%2BrfPKRJJxdLkicupGtjU%2BSgSMs9yBcW8xRUBugZ4uJ8u%2FCb%2B3luMol0viAF6kcRGfOrsNhBKEWsNUOmmhv9OCyrgDVp4uAs4YWwNv9jWeUQnZvEcK%2BT4iOqpsgYVWV%2BvvH2vhrJmD5TGX7ASrhryJcoObVYtBBIQfQ18jAdu8myt02iCLn336uKRB7QbKoYziGNHLWIvTjCd%2BqRzYQXwS18EZl4R4RLK%2Bdf6fMmjSq%2B45SWZCByhavaKJJKaBrhtMXgE5NsL5aV939djpafdboV967DDxNqZTrXZ5BeNHZn%2FM81IRQQehmblnimoCLEmuJU%2Fu3Fan4IPMWZbjpC1q45DcoRWreIuk48f2XGsPZQ4VnJZVQ4FsrOZyGTXiCidvFXom%2BI2RBcISAFvI2%2FqFy%2BVqqxYpV47OfQn4B8Ii2fi2f6I%2FjbElsRSSNBfXTyaYCHzvk6szu0q7pgh0R2XLqlFl0T4n7mP9C5I5CBAOMLIfSTZL79qWD4KI6Ho7CG1gxEdlUznePZo0%2F%2FrcQm20H2YEx2CkYrjYcnZ1luWGDXY3yvJ2h4KtTn0Hh1hrrvugt%2FmCg6wBlH1Bwa6%2FbENbg%2ByUCfonRNBq2xCwudJZUnjElHm5UnsGEuMNDP4cAGOqUBX8PtfgGC0PA9g3KpTT07lUZZ3fxeaTvSyqhuGA7Zbu%2BfQcK54aaFpD3A1juFiQqg0FlQEgSyP6QN680lSAbJmHe3Gz%2B3WfLvXZs5fG5%2BJumtRWPyk06XiBZsLcpUYsyF5thCFFBYWRDa8o%2BzEQMhTOX7aYorvQN2iH1qks2xoMHR9LhASzo5WYclabja199%2BCZsw3wNdFUHsKdYyWsCF2uYn2gT4&X-Amz-Signature=07899c1fdb29bda7656ab60c7aecfe43b04e9cbc46851eb1d0a69802e40205e4&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JICRW62%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGk1dyKRJylUpnvuNZayJzNid1nM9QhDdJR9iI0shDQ5AiAchPmO0hnLxw8Vr9sFFckJSBwviGDdHLIeaVRjtF821yr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMPGE7Wj2HgPQlPPjbKtwDiNafxGJumVMKnZ8A8qeNGBs1VQpvkh6GPGyIHkDVEK8%2BkwmWkdyQqm5bUTI14FzBNn2rZi2VbY5rOT6b9vQfKK%2Bh%2FtwiscigRXsxhIcOMa%2BN5qdyRHvS8Aox4yxpqK3GXYg9ptA%2BWBPWlTcd94mFLaHn9bstOpxTdtZyCUJJbJLnCwuw4sVkpXeHUN2syHIPIX58El6CSd21Q3v845Vut3fkf%2BhSichqy9g%2BXGhn1vqmJ6bPhwnlPAzEzDQRspigeBgVzMElwg%2BtziRU4bK2ExxpgVH2s8UkRmeiwaFFoHQIh3B5UPOq85eicQLsSojvzz5tIc7p8S%2Ft%2FkT9%2B8TdeuKjeau9SATMCpJpheZxHADP3yvcCt8K%2Fbqy7kKTey2TrBWF7h6JOGVV1O76jE6rDyOvDuCLzIP6XCQbprbSnBHsyWlqAqgQC4PR09JJjDBp%2BTszGSEIX2FoYS9aZ3uA2HJOUsIq6l2UFxpHkVb7cgAuJWT7f6v%2B%2F7duAbrPudwDcLMz0IEwnwfOd%2BTp7qBV7qTEWvAnomGw%2FksUT2tzGrK2xiFEeyiWT8bTauJnz%2FDZT%2FhSRMM3cv4jQTCuyNfEA480mfBErbOk2DJAGE7Mz%2FjcgEQ333RqDMA81Ygwq9DhwAY6pgG0GsMQKSe%2BqzxI8on9T8ZnW5KKd1hrx7uOP6MsZkJ5yY8%2BskWwoJZNgybhFjmPq0uoCqdiMf22XywXhqGHBTsYiIQ5YOGN6kJQZaGuU8r7Q2%2BMZDtSh6saJA%2F6tGi%2FOrRFLG7MwXt46FQmjzWVA5zxeFlCtt1ChDhqRSHgbz6VW7QrCEFNXMFbSJysTL4ynN7XzYbq4u076AhBhggTrvAiX0xshWcP&X-Amz-Signature=14aed09f13fa782f3e9deef2d1ac25430fc427d8db1d39d94684118c532051bb&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
