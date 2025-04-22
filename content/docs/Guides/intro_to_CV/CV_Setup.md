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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664URPEDCH%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIB7jOTQFT%2F7kfxxkU%2FH8cr1VGOMWKZcWjO0EIRljbA%2BTAiEAxAfrj2LMmJvutmOEk1vUNj0c2%2BkOg8ZIAFVWPFSuAygqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCE4%2BIRzPy66NABHVyrcAzFuSwwn0hiqLUQQMTIHaDDjBlcfNLYIiIufeVnJOCRHv9X86GimXieZ0UOXhzUPKVX63RKitjXBW2T7dJmPcHcO0q6ElRUqzzYUY8gBdoiIkEAfJwAKLBtrrHb%2B0n%2FN2KcFge%2FFGst4tQxQlzerC6%2FhwGOkJU4NIrU%2BbFuSCmmj0Fv%2FAyFjMBt3ypAQ0up76oiMATzh4x8JoytlTpY%2FGzzGQkN4nIq4Ih42E5DBcmO3iAt%2By32EH6VWhIcCZ6DuylqQNt1XwhramMrsZV8sV57Mp45rtKRNGYxrgWl02xIst76pXK%2F%2F60pI2s2PrG7Wp2sO3RZ%2F586CIStlBw51yneSLtLfd2L6vHGctb8M6RJXbsmR8PZtxEQNWnDaQWpGJvfc1kKbTXHZSeRgmRqL2fs5eCY8jw3%2BVHTQ5GyFFyCUva%2BQQ9eL5pqy%2FB1GmVvoz2puIWZuHRYieIpN%2FpbwmI1GeaEHzN6%2Ffh9QFF7DW98DmRcOR7YBQnPb10ZVhEY%2F6aGWmGZVd3BgNrh5%2F7uP1rzYcln9e8n3e4EBb68%2BvUyw06EvOBRga1Pv8kEyYPioaJANZNTs9h9%2FVjTCjz32o3pcXiLdpeiD6x0kbD4KRLwef4K9OEgejJwxvMaGMJ6LncAGOqUBR%2BXeGOC5E9mbXeavjV5f%2F6BxytiDiV92QRrUFlQ7dPNMb58E1FG5ljR1tc2wWst9koNT%2BVpnL52PTUpI8MR%2BkAGk%2FL6JSbecYA5iihlRYJIDaVisw31VYeJpOqQVjDpLHKWQJO4E4sylgq2FUxcnuOMyg9rgd0YTJZYf%2FzuLCiptSpNJeHKwD6M6WBkGpG57zb%2FyWnvmI%2BDp4PzVNRmT%2Fl4ab1sN&X-Amz-Signature=a4b09d76c85b9b85632f076f72b7de06b4ccf02331c8423d245a99661ef187fd&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTU36KS7%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDNF7ABGlKp%2Fr4bli3UjMLPTYCgPqH9FZc7ieXOoSyJNwIgZlkXrchTsr71d0foXCsXu2kVSCD3TzF7khvbwcvPKycqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPW2zBezpHVLwQzWyrcA9PZq8NmclX6VPfsLPHjTaqs8Tpsv2GXTeBVsa3vFtkr8Tql4QNqUdNfxZs9c4USqVSX1vdnWi2BEScJ4LinjOaP4d82C1t1xrHo3DpVAi310%2BsQ8hsIUUZzsCbM8qzSoy2tn0pYZJciUKDZUfQZ3R82OKoSEWlbZQWYrHidh82v%2BrZTcT%2BFBbij1AY5Zp8P3c9QBVR%2BzV8qPDoYo8L1coEf2bjIYITkG7mY%2BiGKgFv5WCbwQbEuc%2BtfiNl5TdJETgPFYonvasdqDEZZDyGCPwz8VFpqNRv%2F2%2F4gTj%2FQnhjJEvYs7w0KewOzMU7pVbrc8riQhaErwkkQBKJfmCTVwyvcmwV1iVykAOztAghb9JibmYyaGF46guY77rELRsKoUOhBNscXyRsQMGl2Q4TzRvwsa%2BrFpbrE%2FTEVAbQbEvOc91UIR3Kw%2FdVaVvEk3vOTEYFqOomhpswRK1722ErFoy8Wfg8YzpJ%2F7XMkjE561RwiNHVzqljN%2Bz0jXGDFZbz5wZ5cFhQyVXRBrs8yVPiUheMOyP6TsB8oNVWzBfnz4LlJYcDKg%2FWkIHwmIo3L64ew9O3xh5E1FinXKC9dPOOx%2BdUXn6vrnVV3zgWUAQ0%2F0TX3VRPtRJmNLxMhYoOGMIqLncAGOqUBrM0UmeeoyG8CyOLnTNitUnxX88ya9FKpIjhIN5JEgFXfZdqTLZzAuENBX66hXOR%2BRFoCJWc1dzFANsPN%2FiM%2FEQtD1dObvXu35je%2Ft9VS4IhI8vllny%2BTSpLAfO6MrXHjANzPR1ECThu%2F5uVkl2f8cdLcPT%2B2HKQejtZAUZA8tX4%2FFlEY0ZX%2BRFQ7TZggt%2BUeoYg%2BcTzCGNUL3dHVNcUUIjuZvkvo&X-Amz-Signature=d36af1950379f3773b232071b42fe54b70de728645d9e063074b62200de49304&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
