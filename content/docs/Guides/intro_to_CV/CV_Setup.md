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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PIHEU3H%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCfJdXJQi4b4%2BeUmDxtyzEez2yhn9PONPCcHQhnisRchwIgbSCBOcrlwyYevy%2FHxt20UaT89FfICIdEHRIvU2pzudYq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDEq7QeHiuaC8r1t6XircA3I9xw68aHUE0ivnaJEKkovGuuZ2gBpMdiGRHmdeWVWe%2B4n%2BjUtNCI3OHYXBWor0QlMGrx%2FLMFbASK9bRscTgSdTSdh%2BUGoVO%2BIpfbqUxqsYXfeSxm9SHmuyA34fzg19%2BnPBJWnq1k0I7AT0uM9fVFM%2Bbz%2BWZUdj7PKX0W4Xmot0TkvcLoAnltR5Vr%2FguWsfRzoG8oj2Y44ZyrdaByrVQjCJwoc7TYmIsGCbzcNpMeu7PJPqidR9iNZ7qB99%2BqoQ17KfUL1OD21WpFZhtfUwDTlkU2%2FRHMEEunu9h%2BBmvgT2Oh8xZSWJIDgGrm78VJC4J2%2Bjys7oKt62uyfrUbKf4tcuYgjMGl4QYdU4OxzvghUwTXbi6%2BGtr7VKvyigZD7dzPQBBKSnnCVZMx9%2BMtvfD0itCyDrN9RMOrqmfj0LTdvGaWomWjc%2FPCHeNX0jjYDGhnB%2Fc8S97vn9u9UlkadsdP145rD2HxEzMD0AX08zhPcVNIkqrSJA4GsqOST%2Fch%2Ba2xceUyMfDTigzFfNSZF0fIUOFWRdlyhogbDjSoZTgpCz%2FmZpPfULqxY9ZiDpXDiyTaxt9P%2Fnc3Fz4GgE0XsdSpJwEnBCLiKPXmnrRugmPzUXnzxmen%2FqPJ0nDmImMNyN5cMGOqUBvaUtQrCmz8ZypsVUG%2FatqQdMREY1D1%2FHCjGZ2Oq9h4wF%2FLjvuk4iIhGSCyWWkb1MUPUY65nATalLDmDDHUqy1iY%2FbPtf720HM%2B%2FJuU4NlGOWeKGywaUy7OEOG9pOIyodq%2F1EGCnj6%2BfqDZ9eB9Q%2F%2F2RECxECdQsHIRZmHelYDIfzqozO7Tg%2B1PVsOU39p3VkkvctSq1VEVPyST7cC0tqqr41BWGK&X-Amz-Signature=e7a55f25d2a09f65849830453b8d86dc9669aa21e5e241b3b391ca9882a4f45f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3VEMRC3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCBqzSulvpYnSM7WMmdAqpfh8e7jG0FcXlUA26AtteJKgIgF8HPppKGpblnjs0y6lfoIjKzvWhv6KhgYOSr4lTlet4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDNWD61Ix5k63H7B%2FpircA%2F4LSTHhW6tI2F4IAjHV6MGCJJXj%2Bh8DJxdb0AaTb7sAP%2FMBuZe2zbXOODe11e7enlRKYA21j0bUixgkGnP4g%2FiFGRv1%2FYjkSevI8zQsIz4tvic2PubhF4smSsjMWzpNMsygivE3v3%2BkL5CCATkeNKQT2NzodMTkvByLd4aS67AkQ0s5xSygZURn%2FlPN4wbsg3mMjPHO00upddrWhrlA3Y7fNo9t0t3QoearXmAz80O7GquRwqFB416Zlh4u0RsbrKagGSQs1q2EMxzujnhNU05cfgkhMDRW%2FbVwf0zdSA4yXVBSp7swGM7Di%2FnLsVm8yGwUK0MccQ1mzOzhMckRyftt%2BUDmQAVhmP%2FxeXjskcOYgPScGILShaBqu%2BeT5yeatVP8BY1Jq3hvmVID6%2FbkaH9GrckwZLV18e3oshBQ%2Ffu%2BnDbi%2BmWE9eqIecRKm5A9SNHczmvqxTHnwmVBcVuQbKqpNxCyYkfuJWSK4z6lSNRALsSzy9N%2Bb5uPcYVv%2FNTtE0vnbowPBS8FBZC6XTDs0B2%2BRYMhVVZC5rtrLwvZHABuz9x%2F0lfcKTLTUsu1%2F0XBd9pxT0Owstrb6njUCDvARF1tQhQwV3ssVc2mlMC6gpy8cgnVQ9ct7rX6ROiuMPCO5cMGOqUBfQgI%2FnIIGTYmwZb7Hi9Dr2qqQokJkw%2BHi6S%2BBHXH980wvaKi9khnpFaWn5%2B68cLds7hOkLsqoI41CZ53jpakXc1W5VM06cNcbIz68Gfl9HvfMF38BneSuPE4LkwO5lGMno3gTY2srGaC7MBhA9lT9FlnbZWa1vFUStU3RjAkgtvhFbbRfizUCu%2FMDxsjY5VgrYpnFk9Vp8du8mdQ72jlO5YNPTba&X-Amz-Signature=3e5503e4c20481d8e0fc5136924311f4ab69e612afb5383b2aab33318b1698fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
