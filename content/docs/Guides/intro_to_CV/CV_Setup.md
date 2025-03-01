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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGHSSM5M%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDiK6vjU9CHLielmKBXztEeye21BE6eM90AYnBTQjEJQQIhANbeBonf%2FR3tOti8%2Bvuhp4MhQkv46uMwHihP3jHmipALKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnrgTfaz5ES%2Bogfiwq3AMRKgagc0HjnDiIxjCOYGTWIKQ5jJtqLGRYTcvTXkwrZlQGve407gPK8SWI2HEXKwMENUAQsJjtuC7eMolkuRjR8Iwm%2BnNdS3VQHgQG3KvtZ2VSAO8VlCpnA336O4HUpKJ9iGp2fLHMvF0U4D7DfMHMjtz9OtrA99TJ%2FPMqmIBYX0XjUhFDdBGza7efnRCfxe2bv6yU%2B%2B706tzThWtmLMwSaUJdRPodYlNA3SXWiZeGMYtiF%2BR9xWr%2FpgA%2FYOi8JLtGEq6TKQW34jOFp4H2LZHIvsvPT8T7SDMsM6HNCTNqznLo9OF4%2FJ3oZU%2Fbz4yPqAQ9a%2FbyJy9wr1Xbxitv%2FxIKkmuN8cjLO65H5Ts1uwvsGurfW7InQBVXN1j%2FVClUR751tl11ZbTb5k094T5NuWmuNSvXxI%2BTgQkfVp0xHYjoB4GxM3KnosswaOovT4HBMfmqnoPwFYd3meU3DGGp59UV%2FJTHCjLwv1YBxSspF%2BUkc0lseUV63cg2N51E935RelB8GnurQuAfdCTjJModKlrDGLtAQWeES7dMlGtFm8kKNFLH85G64LfrjTltRO%2BnrkF4um33rm63qd1Tnx7RSJRHt3pqD6qOZcg8MCK8yTDnBy5Etuetr4kORRjtcTD9lIy%2BBjqkAcY6ARX7a%2Bk4FktJiFvnC9SyjiWSPMMbNIh237nvsGc9QbD9WkZYsw2NjuXL5z7cOnyk053aGkeN8Ph%2F7aKtmzCuMGLQaxk%2BwIoPmxeQCbJK6cW3T2mjB%2BCGI417%2BG7UZV17gNNe6IAEgaXC1%2FQljpUhAypLCvtCaXEsXI0n22Fbw9Jh0IwWQA8a0SiPUjKrEPxtXUSyGIur7gFnGTLmKJ0aHDAY&X-Amz-Signature=045e0d8caf8fda9798bbc9eced19ef9b042c28705745f5b22edcb41477710e24&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JHYLYGO%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIG%2F8FLmG3iX767CWS6SOQtZJ1zcyxX81eRYjEQ8TZAnnAiBoMNiWTu2vNAGZkdpR7r0MkUkxR6xhjeVBb%2FZtPvofxCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiGyHYMiJ1TRaQLliKtwDke1PykgKFkrb8aLNzgfoYZqLtQkhuCWoiFAXsqm2Beo8X27sdhmSFfzWkkCRjQNqGyf0r1%2F7kGiQZ7rpVDVHlXIj2Si4kTSx5%2FH8i0hgDLz%2FiyA9HBAOGBFUafk5GzgCo5xwDvR6jCWEJQx1bvldxEgdRiJfgYjeSUYK0q2JNP3eyDLUBm%2FdLBf2ySRACu84%2FRx0C%2BeT1L9gdnb1wm4zSQktUVXz%2BYIllFh3sLkopRanVD6unbrqYPrKwB5cmej4zyHTq9%2FalZLWMtyik6BFps12Gf0O8swZ79dGWdQCAeNYTJVduqbyi88hFt13v0%2F%2FAVsQWGi3azSErrwFDt8xZecHPZIzTUzE1%2BXqWZzYEMX64Wk8eet9HhqyTjEPxNe3p6VEoqauA1%2FBoRQBYevTAczzqlasJ5r0U2y6iLWgbemhSX4OtzqKNLvAd8fHRa0lLIPeBDbMvq99HUEWYovJRATwXNoaCp6PQ2ejN3TM%2BAtkD2KAl5Ra5gaX8xH5LX0wO%2BowZkpc%2BvbOLAkP1G5EYJ7HDljyfHPVoobngPOU5Q2zq7tbnu3xvT0IQVNwKefWM8g04KwVXQNjmHwVFEvoUCf1q2aoSidFUzoQIUAmkSDyBWGbM5xb0ofwmc0wsJWMvgY6pgFxdnExoQmyV45P3Y4sUhIt29BKE%2FXGK8EBSaSqzux2GLTTJVGE7JPMDQJoXh5%2FcpQi6Nmzz1seH8ECZeHrNOyir86Jp6e9PFhpHnDsi9Pb5PJ5ybLA%2BsPpXZwe3wT5ejmibft%2FPHpPCrfsxGIZ9uy3kb%2BrkHBK%2Fz3SmBGU8wAJvaPiFkxB2hxk2tRK4u5Kd59vy4TyowFgyofbXhBGchQgsJrhueyw&X-Amz-Signature=e78155a4901ca0c22c990e0aa2602306e012f719d6df8639b31fb590c16c6284&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
