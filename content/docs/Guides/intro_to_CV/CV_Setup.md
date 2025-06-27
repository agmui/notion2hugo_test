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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMB5NTXQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIBk3xfLN8Veh9uXGmz2zInIDCCEfwzhvE6%2BUiwvMLU3uAiAUeESemKZ9KvSn7ef8gpJjNe8w95Kv1bx%2FDPjI2EfYqSr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMBrvui%2B6PVbPA%2BOFTKtwDt%2FBAUqE%2BilQJBlnFNJ%2BuHzv6uWPf4z6gbboHSp47c6kYqMQ1lAxlKy5Bqc5Ts0fPgq%2BEQxBga2CRUNdxJ8zhQx3azYL%2F6I2wR%2B8GLA8JRNyCfsCsqM9YeHsnfxS1k5CMXGMUqITIQgNwCnb5bDx%2F2bPwP3huWBn%2FIsDvigF5w33NR8JotoM3Fn0gmeBD4ZMPye0esYEyfX4CObtZ%2FQl2dQTNvbsUdJa9beTibOeDUiPjlkDIITo9NfqPrFnFnmOGausE5ZU%2Bx8v04t4fi133cTkq%2FB8pGma6AgcGNwms4WrwrMEXaXOeXBLlaRVY5q1nUVEtzIVkX7x0ali0LrbcVOB8SpCtiJIySWmffBtX4EVPBU4RrG6M%2BbCSTo7MKOydaD4ar5i2YtZwPSjU9DRi%2BYIABoKnXkCBtgxuFW%2FEaJOX5FIUrr%2FyWdhq2QhRVJV%2FD15GcET2d0m3HihGywf9NBnUszZyW558sit3dTKymdFwgMs2tnaiu%2Bbi%2FB%2BnVZK%2F%2F9k9DG%2F8wGS14vuLMgvi77Xj%2BKdeUK3aOx1IdDxHKEkKefDm%2FqAj5AN0N%2BqrJHXW23lNMtJBlw9epeOnyG8AduGAG2W6Q6ubDDi0Q1w89qoOMGdvKx0VhAQSHOMw%2B8v3wgY6pgE%2FiGFRsx%2Fq9St4t6R9oN4g0NWzDTWEJLUVRCfNlZjHKfiE5FRbtvf9bAMBNwjt%2F8Xq2SBHjNomKK9LL%2FrcSBHA25vv2hidK%2Bz2SQXH8Y9TM12Cj4loR4Yj8lXTRLv1rNbuHqvV5XPf5rmq5AZZcsVdJbJX9Zpbmz1Q4pSyMOkPxPPyVL%2Bwts%2B9l3uk%2BPBPh44i75IiHcIk7rVHklQXDqjyUAc%2FMsTP&X-Amz-Signature=082c3f91df690ea008987dd63dd7cd1865c53c9f91a8189af43817503a3f8efc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XASVOHFF%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIBHjL04Fna3eV4Z7W5m6j2zyiBwLuqkDA6NtPauTtjA1AiAddEBUo0sUIiXCb2ZYW%2B4F1jXt0d3WpPCOr9r58m1RuCr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMytb5OOnnJiQxhDuGKtwDumEDCcbX3AmCkydbBc%2Bj1Os9PmJBUnw5Bmiatx06PjenZwk0jETaiEk1iZpn8%2BetcOwNOmdys0cbO7g44EA%2F%2FleBD2XsLUM743bjm3sRU%2Btv6LoseJDTAl9sMjNxKMT40Zo3yESGvXYkf2biC0Mj4JhqPfYBUUlmKldcDjoX3VAUfLaRCBG4%2FFq88U8bGkQN4yYFHVXq%2BaTTDg%2BT%2FOoEc0s%2B%2BylClhLVF21Pz2wCeP1pcSrMPG6TdWJM6z629ZGwtwGSq3ro0N8d6YjUSAZeNfvMlnxtvB%2F8b8UZFkMx9xChJja1o3oW9wGPCBY%2FwwZj1ocigSuOe3XKPHu3P11c6WMvcl%2BYCzclLqILhKoeVAFgSh3I1SRRhc74jvte8KVvdE81vHhdQak%2FBbwMzjJWOe%2BNZvlSqK1QYCbTNgFEDKgWro8axbi4KvQ6xAsnKBPDODgYRwcdjOecEsRzw4L9FQXwADDplSFD9p%2B7HaWErhCtICmuZ6DFtzYlyc%2BxdFxPcUgDBRa2OLLPZzJgvFitmSsp4Wh0tsbijvzKlFXxGH3bQxU36AwnqgIw1t0O5U4i%2FuDBAa5FnqLZHEOQT7BpnbSHaPq5lDEjPAFSnw7%2B6jZHNmyvqe4MmcebsuswxMv3wgY6pgGtbGZFCSOX5y%2BB9bPEgT7VQEDnhzxlDn%2Bu3QSI8oOn0y7OBlEPsIs%2B%2F3Etnm%2B7GQ5lZzhj9irKGtNZkmQ0OieIfC7ZLKcqMvSztT8CLxFzoFyo%2BzxzCpgZ3BjWkIhW91VLSphYFp7IxcahuSIPBrqYvx6bE%2BBv9MnUa9R8iiRkNvdQxOdS9j5L7RQMMhuLQeZRg8le5wcMAWH1k0oLep78dJyfMHvY&X-Amz-Signature=5b5f3d174a98f4ed785c2a6f6111886b172950e5bdf7d0cb82b789b2e9aedc38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
