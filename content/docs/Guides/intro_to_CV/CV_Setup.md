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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ILWC75C%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T100224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIGHoijwRGk1SzI%2Bm80RHvNcMYTokcI6zI%2FrcQlUs5VsrAiAZhjSK%2BuIIH71du3re6696Sz7FvTvikBmwSYZmZXmTair%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMiyaEd2%2FXcse5cyoUKtwDA8FxmLH%2FuU4HE%2Bi%2FjQKxqfsZC8HR4TLw7cuXpRzeY7aGHqS%2BEmmLoby8UZ3g0GZOi8AR5kci6%2BG5ukOBzQF2M%2BEFXNiSJAMtarwS0QSRDbVz4jI5PX3xrCQ3LRH0t73Lg61zkdUs381H73iYKCEvxgVEWAQ2dIDz2DnWuYsUYn8g0J0TXZ%2BGeANJ%2Bhsevj7z5bRLY%2B2tiL91Kt8V0VU6%2FzMMIGxfGrezIlWYtdPYJGY9B0gQDliJy4mOLldWgA%2F6mQYe2TqNzxNKw4dH7Fsr%2F7W8Gw11HqpP5HWsWUKmHaJGuKieMmVq0k1ldR0hyj4ygMbHtQpufosGJiPtw2luTbdLEbwAoq8wPd4NPpXyiGWaOuef%2BCjwDCOKQXeZSF%2F0LkbLUxXjsI9vJrKICUjpPdCAI0BDcwaWbD2Vvu7p9vvsgY4FzhzlOUFxf%2Fk%2BoRVAqWDQO6AURMzQEv1GrnNc60eOItD%2F2GnFLGD6Ikh7bbzTd7EcGacsRK%2FP%2Biol9UFysEAP5FHdgRB0MTEyDfTL61eMCUrwjnQ3pmrlWZODdqaoYT6%2B1K7V77RrfxaVNE89B4Q%2FkI%2B%2BHCfUVkFpucBX9SRojH6MFfBPBWoYe2VEpB7GedKeJGu%2BFOCSSU8wxuu0vgY6pgFHz%2BBOp2BYw2eMKTRC25%2FlsvatDF7%2BEPuIFAV5LVXIemvpCu1W8neRdnq3ucHXIgm6RSyrTyEruqW8LePCKV%2FDz1yvY32WY2uvWyFirql6ri7vixvalSTHhdyOULhzOVKX%2Bp4MwYyirgs43wXxAOJF8xq7gYUUd4%2F4pX7u2FqL2uupE%2Fp3DSvpz5QgSsRQ289E%2FVYmJYtBppF2s0I97f%2Bjo3MC7c7f&X-Amz-Signature=440e40b2839c1fb93b056774f65f9f56476d8a04577f2e116bb13290c8cd2588&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OG2CPT4%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T100223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIB3dKKRaN2BAwyo%2BBV%2Fxtj8zDRZxkG3gWZG%2BMrXhwW2%2BAiEA91QR%2B%2FYLKWRiFmVjrc4%2BWcRrMH%2B0%2Fr6JtlwoHDB5q9Yq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBD4MuxxAdceIok%2BrSrcA1z%2FXYAXSlwtOPqOfgnTmxsNKefYGoWyipmYL229fLLYngjHmSQtv4szIK3KtHB%2FOT62%2B7GqjZIi%2BlUG6F%2BqnXmn6vpBvAQKQd04GmFzWpkWwqHLFAGnfpjf3E7lzBXVDA%2FKQRZw4LAb8NqHBaz9NO8n%2BQwK1iHsPKdS0rmKOJtASvW0nipFNo7L64YJbKwD0yFyO0m7IyyEeoQxiGK1W8fqQNSYA4mbLlD%2Fk5Jv0bSIe1FBg4lR0oybvVloMsCrRTnVar4oj7%2BuEzSpdOUtww5nCTfNKiwbY0XrpZ7ibA0KyibGtWAUZMIGMguhH5IbT7Tk1c3ucmWn00P8qNOVxnM2JtiI0oPRbbeqZ%2FOgPd5dmsZaVdWlBEg8r9x2JVJQvl8Zo8r4id1c8pV242lFqJSEdgc4ZpWWWSx1pN5bLmu8vVTmu%2FDyLDJrvtAXhMsSODWkhe%2Bz4a8RB0uRxBnUlqBwMuR8%2BqA6e%2BDFz5%2BnXMB3fCAeCczeG9VaorOIfSK%2FSw3f%2B5WDivRqb5TM1JiLsglJZ6pUOzeuWNvZOvQg55B0YrNG4ZPkQ3kL8HZauGCw1YSOY8iQG%2BqwTIzka7FDJ9Sa2gPy54js7IflyOXKYjF4Cy%2BG9E8vc%2BkvwDtmMMbrtL4GOqUBW%2BMLOAnwfMuRzALcvvP2BcYoJceIQbkZn3a%2Bh1DOhPMjA4xMcgvyjqzBAtEHUUZZOkFGYlUw2KDTYiz0m%2B9Av2yi4eemiXWOaKNNy7xkwRmeWdJ%2FGULvvYalxuJcHrVDXE1fETugI6zv%2FYHlyP1Ew6Z5CMeWgKIbIHTSce1iULRVV9rMV1hsAnvpOr0eEasF9%2FBKNuisz5oVLiV2XDBvFjWzDtna&X-Amz-Signature=5bc08a54b1186b1bc5e9e3df99baf0eba4de1d304021997cfe688ac1a24e0aa0&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
