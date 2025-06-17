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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UBX4UFF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfuKKrAvfKUJXatjm5qyZtptHLahuKn7IWzyS2purG7AiB9lg5hXr8u1L6ZctqAO8oCPlL%2FN7GWL%2F4MXqUIBqdo0Cr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMu%2BZfxwMe58QuG7PlKtwDRHzyrzAyZ3s6G%2FxKMdwFP5uC4MSjP2eH2xc5h5%2BmrFoKO7AJv%2BkBW4%2FIaE3DMs08N1VacbeKBrxJtJVjWAEYOLTULbydfVQdoMQHZoBM1gphLThfqboyAGo%2F61LamjcqzRwDjiPTveEtLq7ZSDQV6iVy2%2Fi86wPyrCKtNtR%2B3%2F4F29fBqMZdc50p3nxjRG0qQj7%2B%2FgHhBXJIIH9ge6Og5KHubkrB6Jvaz8cO1mIFHKVeuOQBSzx%2BRm8Liwt5t%2FRZXAmDFCoAmwFvAKCj6dp4i9o26zMa6sSnzWM2wruA2UhT11Rbf3RXB%2F4rBJvhdAeg2yxBPKkES6ulkUPrjQIdE20Vm64AWlx8k7S8oXq5zpU5HB3CYTq9v8T2vREwx6Qb2v9kusVKFl9mD2QHXrvsD%2FWft7l7ATBCtDjRSV6bETS6pJApXwYSA%2BavoRjA4%2BxWh2ArvdHuAcXFKj4WadxeuHI5JayhWmKbkaoPmbO%2FETmqVtfhwi2K2Kf785TykdUkHqK9xGTG7GGWFJuvLCCPMYS3Vu5ox1UAcDFUbEOyeIV0mwIuU%2FdBJQlADlwP%2FTyxrjRbEr%2F33W%2BO8YYmMpWg%2BfFT7YrXyVNKwDmRlF9kVcR1fN6%2FN43s0BrlIPIws4nHwgY6pgGR3KQw5tAbFfQRK6YMeOVsDZl%2FZleuQiiNYzhTGfg2jRvc2nuogaopBQPJKv0Ks42Qd6fykXM8kcE1XOpQ0e5Y5xLv7%2BWKob9YKXic%2BrarvOvhSnhQNJd9dXcVLJ3nSz71HNVk3yIgehKv%2B%2BNA49SXmRrXWypvGTNA%2ByhSp1KE4KRcOQVM%2FFJQ7MwDtZC9N01h9KuGDYfLc%2F%2FHKHCRjRLthsrqkf2S&X-Amz-Signature=1eafefcaa9638a586ac78b8a74fc6752229e738e9c807546979b05241c4d845e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNIDK2U6%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrZXyRVaxuitdVtm17ER2StbjgWMc1R9XSVk8NiGdmYAiEAz%2B9wRSw0Thf%2F0dN0fsmxbuJsTmefSuy3zLTW5IoQBPoq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAcWezFQLT3twEhu1SrcA%2BjsbSU%2BJAr6ovNGKEJrQwrTvCzodaAVVMpM1z1Ygp%2BFJgLXMqHaHuQO9%2BR4N2oNy162Ey3XaIk6%2BvyDLZi8nflXMnR2aSLpW92COO83STKQA2ItupfxeoswWs7cx%2Bo9i9VAlLBf2Ohl258QTcUPDIvfj3Sd7yeSvctlBfs%2BRd59eezrRAl7XcMa0qQaud31QnVtCvdn5S1JLaaC0%2B0oWCKuKOuItviHV4fWZast8rqOYI0AIuzy8xyA5KoCVlezRQPemcfBNpI8yoLiYG5hQ3%2BJOi%2F6dtICyU7%2F4jnqkRA2wxGkEkgIRJY0ORcYvj%2BnipKZUgjQ2NVFf2sakbliZFvFV%2FGRnDXNVv7FZ0qZqvNddUz3O9lb5qAC5HFg%2FLAH6H%2FW03tYnGn3XMdkRmw8QQJ6VLu64po9CS%2F29TuYx8tJvj3%2BU1tx%2BzxrFK3Y7a%2BGWAfrvcAwb%2F%2FmCFag%2BN1QdcQckCQg3rPAPWuS4txqXjScC24UWC5OY%2FIBSa9NgrpkwqXlgOcXtElSUwn1kswCbm2L3NDN%2BmROKorY8XqWw912CqZtluZGsEO5MrWdPQSg86xd7j%2FDNU1XvxbtAwKpHsIH10hmdtpAJ2NTk0MWzuXsRjfW8f%2FsgGiEqZh2MIuJx8IGOqUBz3t50kcuFX%2FnjC17qCg4yf7lC7mjiWggXkZFlLTng%2F4BSLw4WvnOUyB9M%2Fd0cT1pHLLV0NAF%2FrBO9YCp3mE6xRFKU9deJF6ilrbttnIcNUg5XM%2FnzMIgYCt1lLcdCIxbl1EvrwSzSvMVdgP1VQd0typTB3Lwy2MSwwkHzydBf5wUgnfBDmtXgJd8oxYwJ8hbRHIdSkpYL9RLxfiiXpNcogL1YkwL&X-Amz-Signature=c4cee3190eb1071d763b461b9c78bc53cc38765b3d30d0967ca7ed8ae44365b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
