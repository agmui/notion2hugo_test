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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB5U2DTC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEFGY7eJk%2BUcajqN3DW4nRyhr5ciqvRhVifMo3chCObnAiEAu0SSI7%2BsSanmf76u2NC2OATl07h%2FpnEfzsG6ZV33zygq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDGWaVVUGCR2j2DxYTircA5mRjTskjQIkAnjiOXHGL4lCNBfWtDQ151YDstaMFdWwzYQmaYNGgh1nDakPuI3GCgtzpiUqCun8ltgSNfCHaEAfxYkcHfCh4Klw4kwqqtJxtJe2jMNzhvRfBs2ilyAD%2FvNY9bR2Bsd0gybjFXVSFQ8e8TYVVPg9lgqsXxMPTNPmsSqQxVJI01mduXlIggkEFAtZUTG%2BCzrMwiL8bxtoB%2BObF4eCZhbdKhIxo%2Fzi7sUWyROUWmQNFSVWADYlkgIbDYyqWbOl0F5y%2FXshM2wBry%2FxVX9PhYuj0%2BFwNRJRls9e%2F0jXOHtwJqoaN%2BZYr78E3iLBNKr34PntFzGoHmVeL%2FkxtlJOwkFJ4nO1zrlV2c18p2lQcMcAOjBxOWEjlNpdnk4eXNFZN%2BiXRfzSKKALl%2FPPuG4E8FDnENURGcWMOjToDyRI3lS7565NrJFipyoOMnb7wUYi27cCpswBj6aYvS0kTpZGM2TfAPOBU02TfSEabcUQjz1mBsrUOSzJZq3DTnSmjv2415LmjQS56%2FS8QNcy%2BuX9lOI5H32weGJoUK2Tlr6e4dlbUJKsJZEsCDIQtXMglMMYv5dgFTeqE83Uh6VMJH9uplMzL5mMeFE6GRxTha%2B5BdmxJPoUgmD7MITU%2BcIGOqUBiyijo2Iwc98o%2B%2FEgUV0tokzKOPz2M6HYCcj%2FFTd%2F0MGLFlE%2BEiDBxJ2bIwW5lehbUsNIcjOdRE9Nv3spFserrYL5t2PqLuBPGzId31vdT%2FkCjYAFmR4AABHkZkUDgb%2BsNACFs%2Bx1ThiplOdn9xAqtiAHWq3RwtJBLLrq8h1kgxU19eetqlIyucuO6puRaSUn%2FxEEYEw6UR4Hu2KSX4xaLz6%2FLQnq&X-Amz-Signature=ffe9ffced9ccc3a46b6c0606a166a28d7242130307088187a4a4d9d2232c7173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM2GJJSK%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIAuKdw%2Bat0dltuBnGjOvOcKuicHI3pY20JM9K133xMILAiEAxdhf365EWln85UeD4miul%2BSXykoCE1FFuDku7eV6bs0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDArEP6KRgFehSqZOKyrcA%2F8V4JeJsVOl4vDCdj618vC%2Bmqn2IumeKUqZwtfr%2BBdxrp%2F54O8pt2WZMiVCZcJZsIq7rYGkM7aoaxW3IoqWBFi8xhPnKLGns4ZE0sHR6g4M2%2BrZCgF6FY1b5HsCqM8ysWKEjsd6Ovh7Q%2FVeb71heCE0CazQYSPucZweDd9OyotXfy7HfD918G0KrU%2BYK5KQJyYU4Nn8t1XlSSiIQnIj5d4xbk%2BNBg%2FOXhft%2FqyHjXn804st%2FIkztgyv6EEzEeAAADDj07zOuqlkzyeQintr3vEVWVgBYqaemn162q%2B6uKtFTqbHxH%2BmGj7dMLnPniSPBscaGTGpEvYRj0venWieMaJnWVo1kMYSlCG6m0VgqHyiNvIi%2Fv47ZlyQacH7eM2Np6xhRR00hV%2Bi85Qx0a5UAn%2BRFkUgMssg2rm6RUSIINMiEhqO1HujHI%2B82ScCqMU%2FW2hH%2BbqSOgeK1Wl3gRxwJkri3clLZehmnFCN3eIc9581pxuFfFyw0RaCM3Sr5%2FKTpOdJSzsmeOJXJMszOyztuBbP%2FJx%2FjpLpVlO9DoH%2BswKEhmTmjjrV1N87t%2FeqOfIoluONMjNJN4rMxpiqFii64wv8rTRWCvO9wE%2FXYIkQT29A6rmgqXcA%2B00twg3HMPPT%2BcIGOqUBpGJv3P6cw2by%2F5Anupo0SMdJoRO3RPdWXNKsz3vl6AznBdXoqBcaqB4zFuTUY6fUpcHfJLEXiLOKVk2mmWYayNW3j2nnmpm7kdesLM0XhpvN6cgFdw6vRc1LJtuLQimWp26NY55rF3lXVBQj84Yfv51bxv38AQBdadA%2FLn0Ha63u5jUGq7hV8%2FAumtdX96WYsfUMcbFiqFql4kWYEiJKYvV47r%2BM&X-Amz-Signature=f2e73bd91c445b47982aacd6a2611fa396fe51798ca7c44e2b2b70264f50379e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
