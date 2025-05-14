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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDCK7VX5%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIE3bxfdfRH6rb14XxeJC1K15TX6JVM%2B6vuNpmjGDxAwWAiEA7BjQTvxzlpR3iHAw9OqDOHZDNnVr3PQLDg5q%2B%2FVtoWcq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFA1WNYCpl9EdoidwircAz5BL%2FOc%2BWZdIy%2Fzpm57Fy9971xgdAbmH1FU9JHvZcdFz%2FO7ik1jGtAntV9JImADYz7T3iPv8sdTh%2BYYFjTalQ%2BSa8ZiIWfoGsqPRclaMksJzKRf%2BULIpcKtrUeQvZYT4pk%2Fibma25S4WYfY7159eTNyMTypWrU0yCGyb%2F2rRf03FVJEWuiolVWpKfmOI3GoDUeKKj%2FNjnXnNtTThl6aVpPY6gR69IiYry1iRJLGKnMfsGDwOYpHiOJyIF2ecCreNJlsRBixy3BXI2nWyoyJPexOBEQRwxmdVpwUUZQtDXy%2BvKcMuEZJsggGqDAIP4dd%2BSL7zKT2Hlqx%2Bb2etLZpjTtuFqrI77ZW36kvp1veFVIiHh1H1b8qECu9Citp4XDh5fzGBozt1wkGRByOOp%2BKFLylaCV8spX3Kc%2B4whOIILdqe%2Fw2R1bO39bCD9g2LThGwq%2Fmu%2F%2BfAp4PIk5MHHB7aQHkd%2BPIBCjwNt1%2FrMTj994afIJBQe0sLLrYMKqX28I7KWY%2F3eAoD%2FFIiJI%2BLZI0VoON3j9hD7Z5hFXuxdStH7kSdJ61xyu7Dq416M0LUsaJPyStLv4GSoQGdpnkPmstHMbcEdXetG%2BNkceOc2hUVD02ZxFTgPqeY5NK4HbrMMu6lMEGOqUBfmBSO2DctljyJ0JjFilrD7fHUnUB0rdkN4ieIN4jNeSA%2FNzRDBwHiA5lNtkMNR1R3NFsB7Z3KTEhx3w0g7cVKkK7YnvW0N6Q1DjHCRNhH5JZrbQXioAvFKatvw1nBp5sa7KNUXiEBuj2srkW2psoftwXzQ%2Fs1TNqf%2FIsOfaBHeBr8X9JUDLTu0OvBspf%2F079YKabdxYBKL%2B7yAuGn0zxh1w%2FcVVP&X-Amz-Signature=7a96b3f9f46c58ef7c48c125b7600f8efe2b3add34edac57a10bcab17bbe5a9a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647DELXZ2%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIEEIY7OVfXKJaTvMtMCNlgAo4UVo1cDkS2oGOxXoHSpWAiAR1fEqO6FmBbWlJFnX2DcejsLNSqCIfRaN9KbmMdl4CSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMEeyQKYdbMQ5nacdvKtwDw%2FHak4cpSou6COyKzM9E5R%2BUK6dEKwvyKuQsRNijvvjaA3VlL9jLDoblJY3IAlO6uyL5vxJntjx5m5f612WQC3v8gixNdGQXugYl17u4i6gsomYsd4LcBmabrIX3838KVOJ13LDvDFdFAvTanYDKCkKLiNd7FA85AJETO%2BTnITRGg3ltXqPVafYGr2H%2BsjWP836uoIeIGAuPedXsLWasvuttLgfPCSXuxjuU4a%2BPzqPvAQJJRHpYYP3mGAvP%2BCT%2BxHu3yzqbvsoUoANSW5f2qyMZcqX81K2A9zFqBrnXgsidqb40tXZZ6F8YCyeOgReFJx2QGLP337hDwDs4x7%2B0x5LEDm4rCTG8T5shyvtv6lLDLVRb6TDj6s2nbkuk%2FWvdRFDBAg447qvo9Is5tGscbLZFXHKy6u%2B52efmbiTdJm92rUtEP%2FT1H12%2FIazwHBwkX9WOA3SLqmcTnV16f6HpiJKcj9lKnUcX8xpLROYEsYxkYAJP8nVz1z3eY%2FOHjAf14rlahhl6LULVOCuRweMQQL9hfdw1ezoK%2BG%2F0j5OM714Fop3g7SpiIq6ITEvGiaWCeCdT0IoDABZq9fuw3jFO3baECONEQxC4jVIjq%2BQm0LHXuFpgZNqrtvR99NswxrqUwQY6pgFVuZtwoN1sEGxQqrE0MPNpF8RCNvvAU0CsV7YJ6gwsT%2BBmapE5WYeEg9MpBxhMDzAO9gVujDk1KYjGCsg8gcdZwnuCGacSPgy%2FgfHjxcxiOTmMhsoluTFSD1lA5KK3gDlIG%2B5yZa2rZ1PFmY6Ad7fHMLX67n%2Fq2DCs6g%2FhPUbua6Gxjz5dflyUIwcAW1NoTZCUPFu9iVqwuBeA%2B9eSmVGkq8Bfw%2Fhu&X-Amz-Signature=8b0d4c8da496aab421e31157775b6922e7feeaf8a740a16985baaf8543bef542&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
