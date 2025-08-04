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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3JFAAMJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIB49UScX%2FSU9gYg3CgVRAOVBJS3J3E1XamxnNIsg3mIXAiBVIhZSebBZNxL8L7F3gQtDVEOHImPJjot8O2SFWOqYoir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMyQsHmaXWARLGN6iOKtwD1n814xVm1MJEg%2BcW9ZWkQpK3BmJcz0y%2BODjIcUors8raLqaf9LtICHiEiDnUwtvurpTBLFaB2JX5BtGCHy8pKAS1KGDaZ8%2Bq5VWOsrVXJxVBfNE61qX5CW%2FIGKkbcGDP3EGC9m1CW3Jhr5oqBeJ6EGane8XJNAegDxXsw%2BY3bQZx8XYS%2Bw%2BYPqb3dkuQcwCT80qnbmu2U%2Befuke5sUvgA2c8xkWiim53xscVMG2goGXHnjKv3kGICzd6smMgcAsWuXNmgXFbjy1DsxijIeRtfp4kQfs74oOTiKpPO5Ep5HyBwN8RIEZ13HYdvN62%2BDfAu9cwEN7CWFxSiPnh2WXUHTYm%2BDN2ToM2AEJKgxRaor9U8ltz40NiUAP25AsNo2cP8iLIHg8RylOzXhukfGKrl2lIx7dwCPAKZEXZZAJkkU644EM9oKrQiUnKevYjP8ZSgC%2Fv7L7QgNdFX1a9oQZKkBxYGLuaOsx4lBnpow2lmu9x6Wi9H6osLODnh9KIP%2Bi%2BpbqCwxBbQQqIWleRXQ1%2F688tQlIdzD5BBdxkosDicwnzco0KVZ6Hep52TTKVyeO91FWob6Y%2BOhQQo8iS8GTFGRkXxDcRV2nzCdIXPG1nu4SgiKWcniYJQljheWcwrLjBxAY6pgFXmOekI0Aj9f3dOpPm%2FVVZy1Xa%2FfFKHQglJ%2BTFwA8zf3Q5Wf%2BmgeDMvrHvvEw4sFCeODkAjEPwn%2Ffa9KvfrTBPjjXBwj%2FNMixX7qrnWxnDjdedjVwT7YWNUGB7UbnW5nefXeJpJQXB%2BZcWUf60YaWEMgpVJI0c8yESDzK20nLCyEG5MsTUr%2Fs7ns4jRcBPWhG%2FggoM5vQHdllV3suAyLzuETK3ci%2By&X-Amz-Signature=cdf498062cda2aabba509bb24abf4c3013e6db95b9c301d32dfff926c8992d6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRJCVQ44%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDz3wIXbYS%2F5u0gm7cbyS9YBKJW7Lt8sP%2FhS5q7kekh0QIhAInJ2DWVITMtN1pyfMY86%2FuEGHr%2F2Z0RzUuA2n7fn8BsKv8DCEAQABoMNjM3NDIzMTgzODA1IgyOMA8wghFdj%2FsS3agq3APt2V2WmfBe5311px7oDsOk8wOSRYRNQZ18ZYFQvBmS0uUwtsw6CcpZUbHTPLWzmtH3iaF1%2BgSlIWOXvCUHxyQTe%2FvOnH7zOSWyKhXmf7wCSM9q9HlHju6%2BrLkfgUXyrDh5jT7fNK9wAUgPS6ocDhBMeE2TXZ0hAJcmMSW0GFmWQMnKOrrUYa5emGfiCyaWDdZr46yIcmUaWxWOMrjRD7rHZam%2Bp9zrQav%2FFHccCmjxjnDqapQn878CpmtdgjYV4PLa8OwHEeHDfgw5It256BxN1prXWayXqHGIMYozGSOQ9pY2ovaKJK0BdGk0NL1rAiaQ3Op6J2SqdwgIzIkDtyicbTFzPSKAabL7ZrMDPQ2kfKRTH2deCr7RgZKptP5fCtAlEmw%2BpqA8J4a80mN3r10zg4ZchUbOwjFkGwtec5k16ste%2FQR8GIwFkEqjM6VteEFlEk4uBaYKNw6HCij4xWW7AwHpIsKV6lDdvA2pLf7Xk0XIOXH%2Bzm4bs0qxEyOjN2EETKCe5Ild26TmLrnFNJXUDQi%2F10s%2BoeIe1q5YmmNV1%2FpDcqdYySluSRzsyfgsx8wQdVEaEZMZ9Zcq3vc7TKf3ATwLl8DRXxwhb0e%2FMO2epxq6afFefqK2ZDXRxTD%2Ft8HEBjqkAS%2Bv%2FHhf2AlTPoiEntKHQ7a4Vs1oWTHbLItW9BjIlvO2xyUnCnfeiCDdVmnJnPjjnfaO8h9%2FqZQP7ApVK3js95nkbUjFwKayiR0znB%2BlyZrW8wOudRQRnUO4kBkVVlwJRyZZuLhUbz%2ByTwOfxwttrJLj60qRDOvFYdSy6HGS23650UKwCQxCL7DNl9tZXn3G3bH186Lg9yJRnIhoJkGnRZHoUroK&X-Amz-Signature=9ad9fc473f68f2721833392f2f1506c48ac76c98003aa0a75addd3898eb15314&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
