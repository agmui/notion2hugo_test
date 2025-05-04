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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDJEHPUC%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T033752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIE0SrYbBH7RATGCWphvWgdLQ7s1yBEk4xyqoxBWB911RAiBI0ENhWLeCUT5cbnIvEDDrC%2F5Gz0KjrNIobocAV7rcISqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJY0Vs0UWhQKFVgNSKtwDpDceX1cItCDTVtQGWEPkOdE7jh8Crkq3cACgpxiLAzJsOKVzHv18pW%2BLMW0JsG6Yl5oYZV3hKuFSu0GKutYy0gfHaLGDsCDbhjRjFKsuRANl6ZMi7FZD1E3bhMO2waA8A%2Fh0yPQv6PyhqFJnyFOHygTNg9yiPghACjWdWW4gkrW5RqOH2Lnks5MDsA0CuXi9TSIDxu6PL1EsUCwtSA2ehaPFWgwYQYtuAFSFIBRJ7MVa3iJiplGAgqCHKDpj9dBIT%2FqXXPDiKNum9W%2BGuiIDHLFZKZULUV3c9I%2FcPeB48lqBfGbntuseS0wydFGtGXhB8CwreNq1Vy%2BS7jj%2Fc5vk5kFTbiZDJ%2FmYyLHO2TeN%2F0f1jr5y2iWqzEPwUcN3niCPIhvsxBw%2BK7xLVqMQsdzNfScYQURvH6e5%2BEhdPLCYlZ4Gr5DBMhUeLAJhzhk753g86tNX25wv6JAxA3%2BIVSHI0iFLW1LILS9zcrJiGQbn8yFcirpIjj4TIfqNagFNqpCOQmAMJHxpUZ6ffdXpUtySkk0Zi%2FLipNt%2BjIUbS7oE%2BKl3JsXLwMxikguUUKWe22FypmaB%2Bakp4yTfN7b%2BE484yzeBl8QZuDBDHXmq%2F32pftUDCgHMBxsr4jqkYmsw7vDawAY6pgG23f5PZ1P1%2B1R30704onX0qP3wsw6YbuQI5xmPLxpY%2FGoZte4%2FAibPsHb7jMq%2B0ocVCC1GHSKSCVa8SKALhH3IDQi3u49dkBtzT6ryfeYXhmckfjHWRmCvwQdo8ibrcOOMVmEFmv9ya9ujoyYcWuVQjj%2BdrE%2Fct6O%2FG5WiCc2S%2FGMpabbSda55Q%2Fy9aGWaVQ83V2L%2Bl%2FImndesMhfAdOIXSbFcXcPB&X-Amz-Signature=febcd71ab8d53a0fcea4976e55f7f8cb26f243348e375c0454b1035f49ba2d3b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YY57GSL%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T033751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIBzy7K68n%2FXjfApmHRprochhFwtqKkQ%2F42ehE5Of6UuxAiAQoBnrgXq4OWOIgBVCtdo4Ikewtj1yrQcwr9%2BVOGSRISqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvYfPVnZzeFmD1nGYKtwD%2BXVk%2F8IVOALuJX%2FneGAblLc%2BtVwTaeDWcejDQI%2BboDX7li1LZF%2Bj1y0Xj5HwOA3g4%2FzpWzSO7agp9%2FFTxMLVDF0zLHtj6EhtfqUJNytzgMcJYJzold0OQCHbacr4fnhRATRciXGryj1%2FgSElW35l%2BOnbJVr%2F%2BfiSDwq4cpGsx5Qm6TXNkjLmp3qJ6m2ez5Hzpi0ofRZ4E%2Fcd4fnpSDu7ptxNrjUk5esKAnNQTri%2B3OQhQseYLsRc0X8txMO%2FdZMNCKxobSv%2Fp6j3x1cv8XQWFC99l9%2FU7YLskeHlm%2FKssUzZnFdbTGn6CMpWcKQvACA%2FHw3XcmilcDT5DjFES001%2Fjo8hHTrqqSEYLhIewo1Mr%2FCyQSdSX3vu9qRlFTs3EthwPdW178PXsyyVfLZJHkv9q2HAwfhvf7YA1nnbzaTQGZfWcHP2cugPZ%2FAEJbpZzDW%2FI5vUYxDUqVhAOQ4MI7Vf4lsM5ht01jSCnq8lS5X1TIhGxP4rQRtbAFOUAgkgqLQ8ynxhxtTuU2rxfTZcZyoIN%2F1aUmjE9PBRIOH4hJH6UGA%2FfPOPCBil%2FEOzMZXu1ZY1lldWYlHT00BtHR0C8SuasEHqygHiX5wdlxQFclFWmpzEdd2Ln%2BM%2FGk2CF8wjfHawAY6pgE%2BRsWRF5uE0VtU93EYsMcO%2FZzaEgMvvBa%2FvA6t0ptxuhcu0auX%2B%2FAhF6LnCSAtWKddu87gPcyD1OtX7QwNfbq9ieogdRwI7GWJlB%2F7dgP8ZBgfhBVz4h86BGb29jtcJcCkkedtatjS2qdcwqs65mROMfjhwAv1hfoxaEjxwUDSKBpGks2HxmhPNgRnAsSSg5T8g52vfnsTCIH0Jt496M5AMpDvBRQb&X-Amz-Signature=0d4a0c1962e3d45613fbb2b0f20543e451fa506cfc2feb760fbc9eb44526c726&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
