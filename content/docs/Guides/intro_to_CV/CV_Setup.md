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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QU2Z43D%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuKf3ojCJMl0Yt%2BvO9jxKPTrl%2B2QGyD%2FrNiAVDuztHNAiBz6YNDJdHXNCIzuhYC3DaDkJAueX0x0ZrvIazAasHlmSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMER6FCuvNoT7C4LPHKtwDPXGIcbpnPKVNbI5mzIv9tmqc%2FnTkFsG0kMSnSQJqPSYPysJzFAKuvirdYWzKDERhchavE1PQbUD4zzbZ9vkMLV%2BkpOrPfwG3k7vJS02lfPtmMMnryBLDRKmDiyWBHU7aHbQ5GBxmzeZv1y%2FtviNirumCgipZHFYew3yw6QMc7e0o0hoo%2B9%2BI7y2BwxXQb%2Bb6L1aOzv3B6HyAR1JgNMFyi4rTmTryiF%2Fsd46KVluvW5D0fFg%2BPl1KmAbIzkZ2DxK6yJWgTS86l9%2Fjuk9ujEDn1jX01KwqierkZzazEQCvq1m2SC9zYNCJKUSvKQEh%2BOb346eRQGEqFA7xlJDQGFhx77umysMzKrDdWovfVAdUlGsV366570kKFd%2FcUS1bdeAgyKrP2QiefjvS0otyk7hNpOBU67yTm85O5aERAx0nkuf6YeFkJOJoaopTqNptkVUnGYIHpgu45cjxmRHT119mNlD%2FHTHIG3fYMXvP2BkwphvOHGIykn31U8CGqVq%2F5CsXa05MXxrZyfBj5ODefV950mxhLgEAXR3OWtaM49eJZZvLuwYvTiMKue3BVRcJi%2BESzdQPFIVyBjBenkUYq%2BMobyavUPGe6bCm29OrTMEbBjHxaEMtjO73ElaD40Iw0PLmwQY6pgHSPeBLT9w4N3VxLRlgOgTRdYGs6ZejV4KiJIUKb1tu%2Bdzr5doqbcL3EJy8bu6TpC8HNGg3Y9WOPXTlIT9X3g%2B3Ki6wVrqRq5Tu8c%2BCAcqRDOE66gg%2ByanHvDRzKvPZ7SURhGBUb8M3gNQtXUjgTR%2FAYTaWXGRXrs9z%2BShekexXrPvZp04wKt5t02GNhCLOPL%2FXgQl8V%2FUYXhVIOYvBBpV6gPGOoHGm&X-Amz-Signature=5b4101ca07e1f818e9247f2b82717eb989d14d5ee246e4bb31af2e50acbd1fee&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZULUQCG%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6srU84Sl600m1jusDW60vsjVfbyzZWr7RFgGVoD5a%2BwIgBdh4PgKreertvpJnPbU6Js2XOunAlr50oKTPHeskDAYqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbgGh1rLBEub88whSrcAxXceIhKIOBJ5f1bDt4%2B7wiTb%2B4iRmfUZTheHP8%2Fn9FSlqcbx1OwXq3T%2FY3tBDdJOrXmpTBMo%2BHgNmXBdGXBJTAfHhfJxDApkNaeX2v0UWOnnlzBK1VeftDYavMOL%2BaLeAWBytJXw4Myme%2FHANkGtelSR4ZUsEqPZSEl4%2F6AcIeGs1DYdPh%2FkEVXN4kuDiVr1OHxBO9GllJggZuSjpO3tY7zLuzXs3Hx8C%2FfDUSBxEddDi7kNR0i84kq0W7I%2B2uufOl5vNDILi%2BKMEmqu0h5Eo5TRZreVk5xGvTUwQiRopq3YeHVN5fuAg8uV%2B5vGtpPd4Yp7FIMR1lXqIQ323QO6BFXuCLdWeCi2SQS6o2CRMNIgCu2ZN0VQuGvn0hKl9YY1pu7LA28vguWmcE%2Buqqqhgz8Oa3L2doLSOjJ6x6bWxXOpzCdwrAoVrZD5At9uQ5S%2BKjD7RZhaBKeZF%2FDRYTnaFLpAyX0EApEGMjoesk2x%2BMBlcOMJdt5zenXDDXYMd5lfjCN%2BbiS2IMs253DO1DzdqVWgAlHYM0TuSDsEN73l0ytL9ShhdOK%2F94rhpTv4PiCNASzYSomGcRegBxBzA7GSHosPjH8pbZA0L6Xr9nnbeZow0%2FlGKdkhocdiPTiMODy5sEGOqUBUuOQaMb7J%2BlJnRuYsoDCvdFTC2Lu5Uls81bMRx8E50IAe5eBV3sn8%2FWGlKgrxJemAZiblaAUQoJecuEN1OeCoJWRS6xb3tJRxSpGuUwFZcrkKzdudmWkPdFXvCENSjFT9wryVCylJpWQICO6ybrt5m256dbTP3HezoI4TaibYhshPyglEm9d3EbEAEoRwHY%2FRv%2BPHfim7EwBoxZj%2FBFuHN8UiA7Z&X-Amz-Signature=1545285e7cf62cb231f807c8133299ce2f28d18765f3cd18171d75ecdb3aa383&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
