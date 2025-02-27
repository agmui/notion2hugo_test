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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EEHSTNI%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCI4pXuRZYoeAHXQ%2Bs7Iwlgu2dN6uOgnQ%2Bnv2i3%2FmDPSgIhAJrLUsSHIDQAFjRy77DdH%2Fo1oDNEiBPg2G4XG%2BHvve5%2BKv8DCHkQABoMNjM3NDIzMTgzODA1Igw1A5rbPACHkRnK2EIq3ANRbjmRhHcJpf%2B4XrVAgP0pT41xz3fq5QfdYO3XEZq8sM2BMnrP9X%2BBxsqlRfvLcY422O6G45kDnfkQ3AL7mYPZNfHOLpSCB7T%2FWCGK94rkvTMWkV7HiNBGnCps1kMmIs5eEwDTitei9t9eTzPk6nHeh3iEb53Gt%2BwuXcuS32cOgSHgT%2BwoMHws8nSiWZLHoLyecjotA1aXeepQDlVxWkqxMUHnl5tEixj9BXOW7n%2FPDtZcCUR%2F59G67TvUarp1dLdvGQmk5Pn%2Fd52v6BDqguLBty7d3tPBRmLCwWNCYvuoEMKflLEE4bzVPLJPoJTs1pNbShH0IZVPLdUCU9XU1kYMaAatBbZiBfhz3Q0DIO%2Ftptj%2BXXulUhGilv9scXyqS8IJCtD95WzEzh5n9zatRtW%2FjuoSlQu%2Fddyz6e0d6hQLrZklm69kwm2cSUqguGbr1FnD0gAnG7lP9acqoiT1Q3pxiC6ew37Y4I17UcJcB3Tr51BKsdDW6nmhUxbIeKRV1bjee1M9VPjcQtxMgG9FsQMbDR6UjTizCBtMtBOy8mPocVz%2By01hmQdrLeJxs32OOrJYgcmQ9Rks%2FIovqNI%2B8xJF%2BDY0znZ5a8KbCwrGAKbIfDHfW%2FCVf8PZGcUHDDCKjYK%2BBjqkAXpWu1ocTy0VVVFICpiON8UGDI4x%2FGlmJ%2BT7yIHI1XR6l%2F54HhTp1dgMkLGLc8wl2mMpXeoPO4XbW2JtNFpQBWgyc%2BMm7JO%2B%2BZYn9haxOSShZBtoH%2BG%2BgsTz0KLJR9086Sqo0Urziy2SoFh8K7sxXhobW0L1BV29n9EKsIITlKeDMDLN6N8yZlHHVDolcSIjmiZwErnchGYPxbY%2BkGuKxTozjeNc&X-Amz-Signature=5bb20d2ec05c63a3bbe30e3721ecafb9e3e057e43681eb5f38faf705ac5c4cb3&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7SEUWCB%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDRJHlQkfjvMI9CTG8sSWPL%2FRtqWK0PbBffHzGUcj0ROQIhAIbLsmvj6Afdbxskmr4hqcIKJOuiJrlt7mbVHqWkgHFsKv8DCHkQABoMNjM3NDIzMTgzODA1IgwKlCQJ6YILhGInX%2Fgq3AMjn5ujfORVa4xt8c4kJDIsPSepZ%2FfWrE5EkOmwyiKjmjImKvl%2FF7umAa4izAm13SeaWUB%2Bo46%2F9z6vtE81LWWPIMS6yLXyEK4EeUc2fSJmWtX7fezipZ5%2BtGLy00S%2BdZJCs9cILwIGWeNY4sNce7wd4sQhpuEaJqGCMuDInYU2XRGw%2BHEtbt%2BfaFc2uao%2F6aifiMa5N8Nh%2BCU0atKeT05VpBK0ftyBLbtd8BBipT91hFlM5OXtn%2FujZTAN1Rbr1Wp%2BdEQXJeRLG3CBkYNlH8IBZ0JXgMWd2fbZK%2Bd6aEL5mYZsp4bMgxoaPkkVf6UfmU3YSDkU4%2B55gWSUgvE0ai0bgmLIgn7MwrvSlV26zG5gx7NsBxAMaqgzDozD7Im21XpwpcVRg0PJg1w%2FZQb1rVJ8Go1OnvJnaVdtIl7a2VjVka29IFOxoFDmoUEU9soYWwnEZbBcMtjTt0ZrVi8syCK5u1csQPJsi5diTXpP%2BWvjFeZlJeP0TbUhHsHem21bikuBSWsHY1U2qrZ4IOOFgWQ3g4r2hbSwBxGHlaOh6Tkh6YCT1hM6EfNzfKqL2R7RD9vbWUO7hjF3T9TOwWDDr74c8xnN%2BuOlgbFtRDCnSVu%2BI%2BT%2FSB1gFlKcLLriDDCmjYK%2BBjqkAemmYUChJ5oJDmlgZy%2B6OCxzJJhikjs7oX5MHrCM7p3%2FCRC0iw8orFgWRk0Cd9tM1jKNVibEcc8%2Fq9pxik0nLNOwHFkXXomsambxbjf0Dz1g2XxN0ZNCtr1sJX%2Bs0Be5c1OO9RzgOaqIgj%2Ft%2FB%2FY4nLSRsqMFHBfNRzfYyKosQv5G9SnQoOVi%2B3MWQGjzuLvIE6B8rWQOuj3FVidfoqBy5mk2jZ8&X-Amz-Signature=1c92a26f85f76925cea713759f25e9b3d337e3540147536744ba4d093150a6b4&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
