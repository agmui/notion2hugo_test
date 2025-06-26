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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXSATH2U%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIFZSVX3JhEYnpgsk1kNF01LhUW337KdGfxixTz6%2BVMt8AiEA%2FjZbP1pZktvtgmtOOpbL1qo3P5BTJPD28TvWQICP%2Bykq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNurhDCzE5HQGumYzircAwyddwClZxH3ACa47cR1OwbU6kFlq0sgigH58pT4pZrSw5LH8Unqn62zTYU9G1JKfFqf11wy%2F6Nlful4Li8hYSiQjuEvNoxmY6dLL8uVlW3MmJwAn0LuW3k6YFRq2bkGIsG60m9tDvNvoNO4c9k0agkeJTBue78jX2CEfIC%2FkcIFDMLl7LU9myIoW11zbJDLIv9TV7UfsVojiwjv9RFzC834mxICV86OB8%2Fm9d6o7EIr%2B7Rx8AiKt28ZJUE%2FEZmzY%2Fm%2BdQjlbO%2BwPax5EgkyBnFofkwIIlivbt1U0LNyXf6Qrjfnzl0Sdh2BYjwRb21Cj%2BDH4SN40P428Hfm3k1Pbyl6%2F3NfKPgTQ%2FSCn2JPkqynxmiilmSclqWCnEb0WjSPbHN7vmNk0ZjYYGc%2BVDhP%2Bt5sD82yrPtQfeyqZHNicUA1zybpxh30foI4w1grXt%2BZf9rJ50YLXaU0dfLmQRv2TadawpBS7fvJKohm%2BQUasfLP797ewKDegaPEawQjbhANv%2FUcPxkmzqBePXOaTAjd4Xbppm9yG1eZqGUkxidzJXQMtqHJIyGeXDQgEp%2F23JLeUUzmY0spMkkYi9p8%2B1khmpbS8L%2F3ZdcLu%2FJWy7nh7Ponb6iETWVmF14%2Btz1dMNGy88IGOqUBXLvIFU9ikT56qShppL2DoLhKIkCdLVRcLE%2BdYOUcVoTKGH57ZPYPsUZALfTiqF2XRD0XQJbN5M7EogI9wq4ZxY5gw4nL8cl3c9sjF0%2BYLFkw8iHCy0b0vsod1M1T0n%2FQH2%2Bfb5yk3cxvv0sTbw7afGJ6o9YbBFImnS%2BYR1QmUkV3hX4lh30i%2Bl8uGgwgRzCNvePeXL7BOLflDZ9o3RVEflIcJhVf&X-Amz-Signature=ae3cf1adf06f9e5c0651316f7ab255e019cf358e4ec027277a6476830a77efd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRPHKZA2%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCUz7HPq8wNGe1Qr8hDttRMsWe5L3lzvXUhEZ8%2FIueyEwIgCIF%2BuQH1tOoxxzXOMBBQzOuOLHumNZCCdXPN1fWzcTUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDO023ZWOihasfZMVMyrcA%2FaRUiBJmkjOUIx1CpMLcvjxRy2rhvYrkHr46ntgEa0edTec1gmSUi%2BOIp%2BNbqE7YWkY6zQQYxzrlA5Gy4RZ9nzFOUBwXEChGjvO3Aa3eBNxTMsV4wYdcGkdEKP0ieDlL%2FxJj4lY%2FG05qMqrkVXZ3RPjgOq800ZdOM5dgNqbTnnx9BuxHScKZrAWAeGR%2FBITvFQSmVZEGHy5kE5IlfPlR0CFheGWAf8yiLBuftEJ8EZjgOSIoBqhqy5mJVB1v3qO0buKVuHOtgy5dAiym6j%2BOuN6Y3PGN8B%2FJ1YFKq%2FxcYCGo38kjymMri0VJrd4h12Rw6sUag4QbVzkVo2ElnCskRwTAP%2B09qroi80T2R8s1wM4ieHBbZ1PgBXa2ISEFEv4oS7NPzZ5c%2FMkQsGApLE%2FSMyAfNbs01jjLZDenWATgPsMzeg3BkBvY3Ln9fUI3VrKFqRcNeIdx5F42KX0U%2FXidqtqYGIUjpSfpI8qyFUaJkaSOkuDvlRlztucqI11leUgW82pvscpLFxEiYveYI3so4yuvV%2FP3KZGP3CnTWqp4bdpxTm161HvqNrgj2r5e7T5AfcrHP%2Bft0%2FUgeUA%2Fr%2FeOvBTAh1auVptpQY%2FySSvlgtkOEjZtOfcpcJ28sknMOjN88IGOqUBANN0CG8%2BRS9TPg5RQvsjT04n%2F0QZrPF5Qpltf7DmvC2EbDM6goMcR1redeQDayp6Re1o%2BRCfCbUHTFfJiCvsnomyaEXs4NJqrJX7shXqBtCyDqUiv1ZDeWyVf44qawAMoJywbQurvS9IgB3Df%2F9bZsv47L05kMYDTa5DucWwwzwPKWRSWz8Lw8MUhzCpdJUr7rXonIgF2Mob0paDYqJj3A0vTufO&X-Amz-Signature=9aa05b36ea17919a956f4c724b64e331d3fc7513d66fa86a6874eb5094770256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
