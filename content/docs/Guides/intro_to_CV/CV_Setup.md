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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636YX6W7N%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDohkLFMl7VszroqJ3e5ni17olGU0N9O7m7q1bsy4dCMwIhANlA6vQLb40t0OELpCwdf8b72HrX%2BLuUtUGe22H7dRCNKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGnK0f4%2B0Ai5%2F9OaMq3ANZ2ytHpyjhg%2BVwhgNQnvX8qCnKMaFE30Z%2BblX%2BhQNZLPoIP28SOp5gNYEfALVx1NxNaFglyQRAvmkNyuidRjNH%2B2C8oNeZoW1SWNamohxqoZWtl%2B1%2BYfhq9Aj91Aeou1kPPAxtjvIDaQB3zwyv2npgqMGYZ%2BhOdWsecBJcYuUuEXomUz1BPZQy4%2FMxd7pR1lgyq6ChioMaRgDlabejJ37ObJmdmGNGLFdDiKwR55apTuM0cgjukcp1di1q5OJkYRJVEmR1RIZbQYUdCWmJy8t9ZLOE6%2By4FbCAL9kaL%2Bswsrc%2B6Q2T8mzzla3mO3TWfZ3oY6sug%2FAaA1Xt5sc10QBG5IZudnJTIozHlpJ1LyzD%2BIftthlzFziHryTHumCq5b%2B%2BuSp3Dxgg8ButHk5o3UNhf2PXnL%2BPSw%2Bby2oUVzFekxeRbck%2F1z%2B54BdAA8rDF3Fk9M5WVFm0zGWM4%2BQkPItLW9hexAuWrKFsFSruRg938w03dswhljvJbuI8OmltWs6SFJvrSaYFks%2BdEfmpioZy9iHcTUsTtms3Txtpa%2FCQVsCEPHkrDzWxzT%2FEm8xIMfzCWNfWN27yLM80WnVUy5W%2Bqi3FPN4SK9wvubrE%2FoDnkEcQwQGrJ3TTnaHV1jDe97rBBjqkAcqCgryYp1KePzeA4ENklaeerUGaXDUhNswwZV5Emi39kcp%2FiBsqV1vfY2GLpr8w5lgu6L3Ehuqr3WablPmSe25U1Q4oQIrQKsr7%2Fc%2By1u60oRCvanfiV%2F%2FUQ8KcKEADJQy8fzcnPA0Tu1yGP0KX52euZAhD9GfG3ljCG3dWg1VK80QOGWS8rO3JwYnEZ7i7E9Hb%2BTa3jXCws7JF9UhjArTUmdqb&X-Amz-Signature=bb48f9b8620e2bd4ef3560ab41df6cc8c3b4b81fa2ae43ae60d4e754767f617f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XLVH4XU%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQD68RsU%2BtsCkc2y3ovfcRuggva2zYhSCKo8UBubDQLXFgIgc8xfoTTMesa4Hwbfrp14X6DTDqOKwFNH53QIkvuxaGcqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDirLjdZPTrK5TOgMircA4axTKc5ROHHDFvEE0%2BSgJut6DqMwlaGC9AR14BSqrLHNPVtjctZ%2B1F7NGqXbmxmqky85aI23QmnSgN6BrDzDVo6SGlUuVN0QmQb44iLP04WBvCbP9ndW8KXTVb87Jz7Mg1i9jOOhzBQHB6e9oYbKi6rkSJlP14MPgJl6%2BPpRME%2BS99eKVK69Dr9cAB5CMV2OXhxSCkH9mqum2epf39xex%2BDz5viabJqX4iW%2B0bcoA%2FKnGm7UgfV69FlGWl5yDTr3avQUVsr2lHce%2FdCnEdI76NmYHutqqwi9fT8ojL9LxUgjyjmh5kvucRlwL2CEUGesIJpHdCynmkzGkt3tn%2FGER4yeLbu%2B%2Fm%2BMSUihzUw8TVe8J0d87nzGoFYl4wvOSKm%2BE62ubvV3pS%2BmvoNhzqUBcGpOblP600qnyzMe%2FszWYmdmCv5vAjYhpULgt8SxjLUStl4JgCN85hkhs%2Fl0KdRBnZ55ZjELjcmPlN8jYZRS4JyYCxkpkLCPg3Dc%2FOdTLU6EdsP%2B4DwpyshybC8jSpklFiwbUF%2B5dCMJGIrQ0Ia9LEuMEDkIPEl4w91B15xf0vFxNVnODi7t79a7NJcUhSqxdM%2FxpjBS59ezvOTkGXnZz9sxMsmHUpyyOsZjHZwMMf3usEGOqUB3g%2BW8bzD2VcY7gdCq0%2FQxmZPzmAVF78RGcwc32iTjStBXJ4ce5icX5%2BfyOwjJxCn%2B8QJBHhNr44hvFfur2B8AWabw25mp3uL%2BMMhE43TQVj4DPXBmtE4o1tCR6KwIPV%2F12K6L4%2B0tBnAxMEqL7D7pNU4dv%2BunkoDh1AvnJu%2Fb60a3lVGOcPIb2ky0Q2YGfCRX37KI6JozXUHjfkz%2BKayDiQmzUM0&X-Amz-Signature=dbb616cce42c0dcddf67ce2b0614006bf402f5c7dd6c90e8fb593821f0dfdf39&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
