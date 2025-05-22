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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2EV3N64%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDMiwB5C7n6%2F1nzycYM6xdeJNcQkvZzQC4cGRRH%2BATN%2BwIhAPQcyn4ikXkworT7pXNmp8twlNoyxoDbULoRSFMH97TsKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAVo5otCB58qBS1asq3AOBZuY61fxrW%2BPcNhYM0mA%2F5%2FQzICMpqPIToZSThTSSKu4v2EhREKFXb%2BNuts5fHN2M5Ds64fPwWGGmaAkMm9ZTui50ytlUWoEwOAbT5QGorMT%2F1quHv2QkoIha2i7LRdqSSj%2BTfw2SWIvHYdse%2FPWGr8hRxoy6VC6%2Bx9ehg1CRWfAOxEbOGhNEeExtEtaxW1e6ovyx67c9M5Nl%2BO%2BrKyThYcLpaP5tecPr7MflPE4YToqqE48w6nKrN0dsSlRjDCRsARPS3puJCMpsCP%2Fdh09cYdR3mBoROw8vwbsmji6L1s6BNJ66c728%2FFP57ET2nWwF1Nsk6wO%2BbBohYIg%2BKOcj1Thx0%2B%2FgMFwvr8QftM41j9zXx3n5k34R%2FXXZ12GR2Ho%2BHCk78et11CRBBQcxHtujTkAVTB44PVaOyvc%2Bsazgn%2Bz2k9LuwyOGTpegLrDu0bFCeg9XvFihQNu9NbKIXqQIYX%2F3ERctrMEtDI7%2BiXL1sRC361IMxrpb3EkRV4QdNEeDc5nyzpdSIzCwqH10f1QjjqUAkmULbp3qmq7jkGItM9PyKm53f4FngrUm9q1m6AYf1fEzhpa7BLmXKR2UdYOwAXoOH3ru4I078Z%2F2p8KxW%2FvK9yjyc8dDiAy5qzDM4rzBBjqkAbJ9QuAdLlleSAyrgBMUc1owrv7baDJXaEG2nRVJtNRbo344N%2BGFcW1rcijK1Pvb%2BBGh3R9enXWrj3z6fh2EE8XLV%2FpM8qL0VmuLgyk4kDAl5e14L%2BxrDBwdqQAy1uyGyNZN8CD9a1IjDUalCFcmPNptMqob1ccZMTaaKwfm0nIbhEiU7l9Dl3S5nqDuciBqje%2B8%2FFLN7seQ1Yg8t8XOQ8rzt8nt&X-Amz-Signature=f61232280b56b3d37da62a5ed9ad1e1f9683ab8ed7ef6664ba7c7ead3ee55610&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DXQLI2A%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIH3tQz7ty9WHWxGyCWdGthr%2BrAy4TtGZ%2FtKX1gUzNbe1AiEAtwMj0knG2Mbb0oILY1fjXa0foABMu8g4n%2BRrMMikvO0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmToqqTcJvMRjfj4ircA%2B9O9Cf0JR4tLftO%2F%2FIxao%2Be2PkA6Y%2FZObHjLlrhBfkaLnVKxVR1IYcPBxisvD%2FnCU9oAZQeZV8xvY1L9g2Fp%2F248%2FS2HNvpHTIew%2B%2FewL4%2BrAEfmGT3vQpJD4S3r%2BO2SSiNVi%2BVgjBAoxmcvCl1FuPX5McGO9ZVJWQa46ek1T7eHa0VP0hrps8XwD7Ml8%2FjAlN3FihtLZi9rN%2FcgEyZW5VTGSso8XV6fkGfhIKv%2F3fYTMNo3%2Ffq29GOxz2x87RaOHqfEQUNE1%2B53xatF6GbQ%2FiSlRhxG3lFKGaOehvGZEKAUHbBKoWBEA6JiKKTj2d7%2BvruteauhVxakfgnF%2FtSoXqxxBYbnM5O6KoU9qybG0OmHy%2BGmqZ7VY2GGT64nNjhf65yxCiMVFBTCt7cPa0xmoWXzXtkFjtKbqFbj2MfiFIO%2BWXvNb%2FuHV2ipjG5Qa7hkqZLqeHp06bk%2BDPw9Yaa9OVVHTY2vnXi7bueW2NKxFTRPGwmwDUc5A46%2BRhtvKGGoWKcD%2FHkEcyP%2FBBxgq2QU188e1DgOU35ZtMJGxu4MwkJpum2Yhn7byl7ac0Dh9EagtroCNGA5XaCwsdhmZJeDvTP%2FXSFBzzkw7d%2FNdZXR4segfh6VicbhA4QFp5RMIPivMEGOqUBF937Kn%2BNNGjR8%2B%2ByugAHigJmML8vgUMfI70qQ0NEURJooQaCJ1LuWkw3%2FvDADvHsSfUADxmTPW2YPy9W2JRtGlzVmDy7Krvi57cV9rc19jqsER1LOi1SAE8s7RN%2FlEv6iImf95X5y8QO8fZ8iUKCJh3Xp1WxJIlPdOZgUirJaLcdmkpNAQLXhnM5KpdL6z5txXO0u0NRuHBZuRXnfe1qnL7iw1Ye&X-Amz-Signature=6dfe2aca8014f012c5af7d21e3b0b7f6d9377a3c27e016a98334e83b357fd34b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
