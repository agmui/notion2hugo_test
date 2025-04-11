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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XJD3DJJ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDBQQJeb%2Bc91F2B2GzwFfr8TjI53M9gKi7eVOM287mHUAIhAODEZewdoBOOLRj2eGFbO%2F6bh3WkhBFCGlUVisA%2B5vVTKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiVPC72ZNSreV5V14q3APHessaN5JcXXwu%2FBQpb6ek22eeFlwe1fKfhSLX34y%2FIiRc%2BfEfPHJQ6mch23QssGjamf7BkCf9AGftxHZbl1X%2B%2Bmn1uoe6VW7mFZp7MckfyrF01hVLGhh2G1vNIASD0ItoLl0R83bk0XeIpI90agIubwQIeN0VcMJY8JChnewmPr4fa7dviQ%2FjE4O12YMy%2Fbej1vLd8uk6EyrmXFZ5ms%2FoY0GxqlkXAEwXfdH%2BvQv1BxnL4PNDAVbR2GQPWaKG5j0s8b3pn%2FMyJBxuJtqe9Xcw7L2JZZedk5Th%2FT%2BeZngqX45p%2BrV615Do5ly1qlf4D7Rb22x%2FowwD0EPXUoQ4T4Wp1aax9GAQ9DXmfBUQVlsPy9r%2FXsFof4bqXNmi9Gcv15zelLcZq6eUl8fdFXygwShdNx1ux1F8t7VOQ3x6R6IXTQ%2FnaVNHhw4JkkB5H7XcvSNAKVtGMLnyabx207SqB0DYxgYRfveaoI8NpA3O7fQLw4vVtv3gWGv6IvPv8jiNvvxo0qVGUYtT9foHvybrElG40VMLMKvlU7HW7OcFbD8DwwG5c20DHmTyD%2FCPv%2Bl1IFRmUuqF7nPh4C9%2FdxrfcDiAaP%2FjmA%2Fpz4XrjC9feD%2FBFagakrqJL4vczKwVfTDKquK%2FBjqkAYA4HOH4EwVXg%2FVdJRGBGcuKBc3byZ%2FiACIJxe%2BNfxsS%2FoulmuSZODA5Gxl8Jr6pavWskGgRpw0OyWQcTStzRZwdEU0MjE3MymG4Elpb3ihj17dJpE%2BByJ7ivR0gOnDTJVnscR3FAE2xPgFRSkOkgtVGXMpTaXQ4xTrt2fZODsxw3rPI3txek05Y%2BItUbdeWfdtXF9D8GqTo02chAfNpYYnCb%2Fv1&X-Amz-Signature=1a9d3cc4a4db9c2f6bc90a96d192938d1d1f56fa807063f0abcc85a26b675255&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623GB6UZH%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQD77Oi8w9HRIG6CPopOdxT53mEKCkglq%2BIC%2FOMys0DxywIgJtoCF%2FUfew4KY07iGqUKC6GteZALGfbdM3X0%2BvPeKcYqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImA9KsRCCsKIJkXFCrcA%2F7h2Hnh4iZKI8ztEsSph9%2BL1QNSstfb%2FyP6wNTOcYquvlnbZJnuZvX80OE6RYPGgVkN4VMrQ0EzxCTn3Le0YfnqeeeTgzHyOyzKMJO4xh%2Fek%2FZBap7h64lBB3Rm4KkD1%2FyTXlkHV%2FA25JFgTWqhbj1TsHG55mFee5NDQJSgYvtp7swRe9slbprrWg5uN5AS3O6XybU0rXVU%2FAgZyNzPWrahyWsaj4A2qrFK0XBGoxIdNOX%2Bnd9HHS2A%2BgATp1Mgqfy51XGDCanacQ2hOsiLqHr5AitHkKfvAysVLUqU13MoZ9bTcZizbHmcYutLsZX7xGEF%2BGcXK066VKwBGhlKJMJe48207JxpIw4JhtgFrO3NZ%2F0HaHyX4KgWReeanUeItWTVYYFPKZTp9l45QjwhqslVCSp2U2YGWzQmugfXiPVXApW9wtYs6%2Fa0t9xcpaydYiOalUKREkC6m%2FX6MRFGV3X42WQAtBt5hTR4kI%2BK4dz08uEmUUpsVIy2QWf6vhRyOof1xXnfU8o9KydmBIBFdupZZc1Q%2FCg2q%2Bofs07EobAnfwG0eS2vZHZ3qKZE%2BtBej8fAeptkve412%2BDa1CdxLHBLIbpYP6R8jKQXhpjOJ9ioyDH986UNvR8Pu1Q6MImr4r8GOqUBiRq4iswDqTHqiTMlvvG26JhhkrSpKJASV7br%2FPRPBeItDzRKQNE3v0Od%2F57W7X%2F6UPSxvJy32aDNsbV0Cgkf8xr2i07a6l2WHq14DtGbfIAKZcap26cUnot0Lh3aA2pd3AtJmE2UYGPI9JDNOs9PPpwALl2Nh6ULij5FKksYWa4AIAJ1x8vFMO%2FulotSfNWMx0tUjBS6xjh6OmHx%2FYPS%2BoRDTGHV&X-Amz-Signature=8f3e9ef469d99cc88afc02115cc52cfe7aef45915ec78a5c52816ab4b30c2360&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
