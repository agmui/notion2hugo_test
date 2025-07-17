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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627XZA476%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIBSaKch1C8wXOzvSInjcw6cIMwtC6Mei%2F%2FWUeGq0dbDDAiB%2FybYuxUE19GbfyTTaDAqVSXKJP%2BNfE7u8meZsDOJrKCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMlZn2zrZPL5B9aOV6KtwDyBqZKL8INCD4orJI%2BnDCWediMD2MHCnxk8V5yWK5t5mlI%2FjufrNZ8L6Zp6TSHM5y%2FzKHSaoQp%2FK65aDJKjAnmEEXzIStpRpnXtZe26OGleh%2F4ZKZx%2B0LDyKmYo2%2B7JTmUJnEDY60xjuZc8vmqjOU1iM%2BeAJC43NM4eXhMsvSC3gskpz%2FtM8mkqdtw4QHbb3GZTf9fvxskJ5kIgtATu42XmHJWWxk5%2FssQ%2B9l%2FM4kIGe7%2F2LAY48NJMwSMuf3uszPD5KB1qpVCYM3bGgMJcdKQ2Ow3S5OpSk0PRUzSqPmnWQXWAESklA6555wkg0bI18LPkhVhACb6muX84B%2FBRqxTbDRd%2B%2Ba5dizabVor7jCwUyneCZcF0YlRBF8vs3Ftj3a4F1ikKDjeDPMj0RL0VAbkdNSOn3toAjdWuTE3lduY%2BRLnbEnYkakI6VHjEmhkCRPIWbTxJBnPybgBPHL5Pn9k05p3lS6bicJB2H%2FmF6%2BIJXccw6GLOYJoya6aOuoJI5HCYueaohHQ5fZmKJh9yJ7qVyUdydr4O5oizW%2F631Xyi6M%2BLM%2BlKtooi%2B1PxP6w0PEX8hIpO%2BOWVTPiAtUW9SCaVHJeqP44j7eDit1l8P1frFz2yRQqBEU3Ui9cpsw77flwwY6pgEkQYLl5uE%2FzlWLhcwkzymWHFXZtrIuMEmp5kYKQKdUz7FK5KQXyuoqCTNMRz8l7OmOfO3M%2FvXe6I9s2g4Yry4DZepTgXVz0LJnVjuG5yaHdLsJjJYT1FApFAnSqRHvDcofhiEsJx5TUsJMOvIsGVHTwr0z4B4MaP4Kh%2BkBT11m8w4kQSR4ViO%2Be6NPGEyZoeJJgHG0SMFTKV%2FPbsJAYg7l4tR7P7DB&X-Amz-Signature=491534246827747410e4f7573f14507be30ddaeb2cedd3607c359b89df3ab9b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WCCPPQJ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCICMLylQF237XCXSXhN6ztcr7yobad2HJwUsiV0AVwRyMAiB02psEb%2BgM8DZxXb24MyMfrD4SWGi7BkgtyCg4WvGW5Cr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMeTzaYSFzFiCgDkG3KtwD8apkS%2BdsG36zjMc5w7ffc3cfkM%2FmDnlQZrHgnBKC6z5MNmkjDl9wlgVtLNGnQ675ym1VE28dDD6kHSzbVIxikKyJqhglZsziC3qr64wZ%2F86T7qT2CnTXhRqoO943bHS852BTiw9Jrtx1vp1cz2Wt0CPXc8LR311mNzd3wXQOME16hqNakSOKVLheropkx30FFUafnZSf4Xnnca03GtuMskJm9jXDzHU8gD3Mb2mR9N9nFIJcXkafJgZoyyUGizpAVWSwvwBZBYAV7HjybkO%2B4E2vU5wl2ls1QMfM%2FUHBwyYaIl%2BXAmTbfVbnQGkvpWshV7wjr2lrzxjl6cnpm9zN0fI1uN3Znfgw2CY4Z%2BqeiAtkPiKG2bbsDdS7lxBRVo0OfHdzoxJxmpAgsK9fu5ljMzi863ZjMo6eVqVRD%2FGM1oxyQzDCqyryB9f4xesbxMnhbK2zc4AjmJNEfXYj748bNsvBCGLubrsxfFT6w24qxNvhYOErKYFPcHkqJDHdQdMXBwJ91XY%2FSknfAEaxuR%2BucgO%2FvyBCtIIT3YzZZ4FlVyy2EkMlvghkriClCk35dnZXl2pcCj3J46WeUO4w5XhskZsRvthsDvHdw8uMMT2IlH9v18I6MFwAkyivbN8wgbjlwwY6pgFT2%2FZMirzgS6tmHUVbp%2FHokOEliyV5hOzuZ68MXQ%2BZIA3OB13MwzLZZEUumgndYbwIOBzLtu4u0rIAXJwlpKwqxETm%2F8MMVRhVWWd27tVTS2X2AQqaTHlYAW1rtP6A132nPx2XjXpSWeZOXEP78f6522Mz%2FSdYDBAHTAVYIlrd5nze5QQy41CMuP9%2BU9ziawNdMkVYgummPMKpdlmcTnCHpYVdmjg%2B&X-Amz-Signature=e7fd4c3c84ca5d870bc6893ac311d3bae71564b709f3c2955686bc1e8f3d5c0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
