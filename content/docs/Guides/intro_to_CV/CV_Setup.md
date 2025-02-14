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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHZUIK52%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5UBWVMXllgeiwq0QcnlOxata%2BGYApyHE6FhcFjuP5ywIgQiFwGjxJr0UqhzINELWzCyadtAcYB%2BasaTmotMdw3Fgq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDA9YG6WL83eRHpDZvSrcAwnLexmru34vFg%2FhEHzMzVknLHJ4hMwLOCtY0tP0jvgD2s0e%2BS7kulIKDfrJY%2FHgRd1u1hvy1J3KT3okgqKkicHd1TN1FEDyNBMFRK%2BsebG3IG58KxpYKVBzIeLwphA4OlGokC7Gk%2BAqQ2%2BytrfoWFIfv%2FB6nWXRAjAVEMhQIezn0k1%2BSlF0hQEvdcMgfCf9v3WCWjPZj%2FXJzegml0%2BvI17DjdBkA5%2BeXSyygPTWBdub7urQhxMB6T1h7M9foufe2Pj61FWpWS7u73%2FCwsry1jW95fcxXX7NpCG6CZYUjRE9%2FFtpvUdGd0mTEcImaecxdZeHJBohN4mIkT2%2FZgCDJoC55j3wfJ78zuHrhqR7%2BGIrTcSr44luevYH4jF9HQ9u3dYlNk0mH8ae3QTpDu0leGX1sN2YD2ioAFeS28tgk%2BXnU73ZkHdyJrZNbVaIFIDxLjeJ6tjx06L49cU3lVBa3hVTtaWAoI4uSmCH9qGEm6btUP0%2BIRhigJp9RmMpJSsk0pWu12o5Zi2Qj%2Flzgp5qLto6xqf9vGMeR9fWSOQQ1qWCnSN0dsyEJpzf6T%2BUp8xHaPdMd0tTeuuwPm%2FbzDgzD1S5YCwGhNBm%2BLbSVdls%2BSzlZSdn0MVQxQeHAPHhMOPqur0GOqUB762jPzhcF7wYw6J%2Fz9okITxLLKvL7GBtJ9mINi%2F7%2BJuxGVaEmrOvVTf8cOti3RVWFlsXrc7GwH9AbVtsI4h%2FsJPR%2Fbw01OJ2HkhaRcI1njYWArmO4RuQh%2Bb99OUP5f9fxnqDKzHnbn7s%2FWval9ULXGTYAYqTfKEtJpUsADcM02gtFh19CGe9Hcmou56JPzUFfZCHRpP%2FY%2Bf9aAgzn5cH1Ua2zTy8&X-Amz-Signature=22200fe7109843c79b2b0333d7d56dfe1edef9860309af3d73d7538010449185&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCA4JEZ3%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLUOcRMCCIpQCNpYl1qSxRL2FFI1JDZtTS4Sodxsw%2FLAiBXt32j9%2F0S4mQH3dDV9cxRTdEwJXvE%2B84N1oDyDj91CCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMYCG6od3Ec%2BkaE4j6KtwD%2FeQbUTXtotOhUyGC3KA28dOLOrwEiSYVNM9APvII2U%2BYkZcyLr%2Fm%2B5DrJFymCOyjBYmKUGXH6g4%2F%2FuGdf4aSMX4HRZTXatBOk6x6EEjpMBBdsJZjB4ThtY71Tc6FUI2P7rtwmUYBVdLxro%2BYTQarknK5YmhFHjzVmREdLcuvVNp0G03tjtpRfXWgxxj3MdPikezvQQZVzX55JneSicStTTaJupqrAjq4N%2BGSgP1iQE7SnSfa3A7LMCFpIQumuLJ0LQJT8Rl7v2BEqW%2BycHuf027EWWp5bE04YEDJigcsa%2BaCvHU0vNhW7jJlhBTc8UU%2F1VT43Kw1VqYjgEFRJrdTKm2I1u1mtNNv42moxQm0of3cqC0%2BefuIfmvCUl4V8vGFJYvLz3isJ0lkCMyghzXFf%2BBo9sOacd7zNZ3kHUwbVG2B3ZXJYFJ0GJkE3gpwj0p4STdKciTv36R4hspSBMWJQif61zlMX2QvJoPk5vqFYz%2F5Uhe%2BTmPMWDcoJA6cjUPNd3KP%2FUVe84kBE%2BF3eC8HTK39%2BI8nUL6e27QAHMIHUrUvopoz9Sff5V6aaZFCNLndDGwCvQDianGrLtWzfBZqvDdeUNBH%2B%2FI6qkSUIZ48%2FFnpgeo6JUUoTC8i%2Bh8w5uq6vQY6pgH53WMBarhCWsz0uBbJnjrIlDRFMm644Cad42gWq1TUTyaNZF%2BX8yMxZKGXHAtUGS9GdD1HL4x89gtYySeIdYwouYUYfQMvhCHnDtGWQpdX96B8Ze7Tfz5naDNGRhuOyOFjAezJ5hxPKkdRKVe0s9EEnuXp4iTPeWeiiwMOQ%2FkUlNwsiH2peyoTshBae4Znu282N46ShtRJl%2BT50VjFR3Y14CHYkzhF&X-Amz-Signature=f0ee5313b284e3f7624e7f3d4e3556e9484353747c2dd73b8382b41e8f7c8f37&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
