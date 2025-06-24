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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOVKN4OT%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T091144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIGAVUdbUCJiGiYlfp56CqC%2BGke%2BjhWnAZ%2BwyZSyIOIL6AiA12L4PtPrWbhj0dINaBel%2F0OBxqx5kVxvqsNcuuS72GSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMmYOstvu6K5c7uyxVKtwDjjYBcgvTnN4TmHaYRVQvUpNiBkLHa8V0fBMcaCw%2FfKET4fDXJlf15nzgaw%2BQjot8ml1a0o%2Fq%2B2t1Fw8qy6eyKu%2FSAQilVLdn6D40PJal%2FQzLtOcm98VgJtRvW%2FMH4B2ncjl183qXx5rxuBPssmm34du1PX1GRVDSuna6OoEQwyQrujVNVJLrtkVnQFTG0keiq1Eoekdq0ofI13uZQO1K2vDa00VICTSTHmK85fePczeOWbX6cxr6OuTwOkmlqSzgHN2nxoFFHiHDFla6Oyfiar6G2MpHkgAfu4ClWFqeyAdDcCQrfX1O3EHvbM0WKOVaYgr3JuGpAkR2zRJLEJ32gJKmPbVpCoCDF7GCQK5ogMUtvPEOpblMLzf2WIbBaVq9usGwQ%2BAlgclQNpVZvOKscpQfNwuy%2B7dEPWe98kvV9z%2FvmVOyalbb36dtfpxcwNLyMQe0aPlMyS6F0iWvy2QXItcVanGQGwvGe%2FN3ciuzFlG4SeYnq1rpfMEl%2BALORSoHgC0wbsHws7%2Ft9P1Geq3bFXQijZSBVHT%2FH1Cg9UWeISW7i%2F8%2F2Xmxunpx19kio6WsKjyVeXDFjz%2FUQBqXgixYfcEGgyd7clveYHTqLEC0usygadR8v3SX%2F43C67IwxLLpwgY6pgEpCrYyFfAmfIQbWcfTxZAp6NFZ4EWM47HfYQYgd3HmG30Eyz06%2FxW8Bpjp5z%2FaLGF9TWaTai8nmf1ZaA3LY00rPcAE7Frif3y4a0tJK%2FrnpF%2FAI%2Ba5%2FV2w6wWed%2FJNChKPOK1067GHnhpqh%2F2z2J%2FPX8lF1No0haD8Nh37LM0kwiwBiQKi8W149Tge1X4HNXu2y4h4pVJKW0LLttTyc%2FpxP5Jmykb7&X-Amz-Signature=c1378532374a32967d2c02b69d24d46efa2b52afb12d33d03c3c52e517e289bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZITZGMNZ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T091135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIB03uipt1RBopaHaleCXZuO341LK9tRltW7qNp9L80v1AiEAzKpJJdsnA5EEhta%2B9GlAAChytKfuVYdhcPTmlKRC%2F2Qq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDPJZUv9twtmORvh3%2FSrcA7t3klC8anHL%2B8RBSl7Iswm%2BX34%2FQWfeRKPcbhE5ThyzzvFTzPHWm8cdm6FAcmcEi%2FNLFYJaBJ9QfrqlfZFuO4DQ92lD7r1DHrKodPnJYqi6kXxBqOpdIq41so%2BaVvLAIpaAdXGd3pKbU%2BawLkLYyYnCp2Pg1AHt0a2bNWK5MOK7%2Bx2zYsb96f%2Bd3iPlPe%2B5DBLSoMq8kVj6VL8vwS6f5nLJWsA7lIljxfKKlMK87jqhs8cLe0DTksoxBrDId23tyAu2bLsUibG4F%2Bxm7Ap1zFnfJREtqOaXsOGkYluUn3cIj89sfcG%2BVaYWlPN0CC%2FfeFiiSsfTccsUH7%2B7NKtpmyZI%2BJYCb4RDO8lDciRaL%2FWTx3%2FQDny15AjcsHZCvBLEc3vJLWVR6ov3b%2Fyc7vXDpX%2B5veD01OuJARLOW0cbswKTedad0wCDAtc2mj%2BDEbj6Sl%2FeVCJtZRpVIiYgU%2FWReW8jvBImBPkO489KGzqM4j%2Berb6HnFpxZTGtfTsW7D3SwVN4Sl8rKApxqtwkj7IBO%2Fo98%2Bn61owC%2FBIkl6z%2B5Zh78lTl9cY8wMD2RZpn1BvHng%2Btmk6QJkLS2zfYE5jl%2FwV7vSEz87sioEeTJqT8z%2BuWkFLOFxBLSZYuDeVuMIOy6cIGOqUB9%2FvM0sr%2BcHebYb7VEZsQQx5qpv12nTOSWxORQ5wcUip5ZuL55JeVJd4FkNjXh%2FPvBdYTXn3nNnn5GZA7MeQbo7G1jKYYnROwUT0x7sXs9Hl3Lgrg42xeD%2B2kmHQgeN438Ym%2BoyGuY%2BM6D6GOfmCM4arcqzELWheM68JlqNwcAjvdKH25Ei5gccSmEId8RNujj9UcVZFK3gOhXGWDN4lD8d5fpKiv&X-Amz-Signature=7bc6af91a0f8a57e8c4ea7e17f9b817a1af5cf307e4076c4d9f8def2b4da8346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
