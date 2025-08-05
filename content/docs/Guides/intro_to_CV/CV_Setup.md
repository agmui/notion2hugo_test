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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTPJQ3HV%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIHZneIyHTU2SsR21CKfZqFcpZVnSc307cUzhf%2FrBNWNvAiArbCQFS7JIV8GQ3WA1k%2BF%2BNFdZWRSewFWH%2BtjX2sPQwSr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM3zzgfgtl%2B89exXfKKtwDA1NJ96sJFXYgaouvglQbGRxqemp2b%2BlFVDhh%2Fep74wJ47%2BSOIHn9j0DuttmLc%2F980WYndxIzv%2FfaknoS1lJE0xGgS9fmzCAF6HR087xkp3R0FRt%2BMQN2bNNuoyulPmzlf8xWQjfuNgYkRNHrqthP8Vemup6jIJ73QF7Y%2B5CUxjp5D4T23xjEeDNGXHPpVzrTE3vBt7ZRNeJ%2BXORN1i3lLy83z7dx0DIHFrg5%2FGl%2Fj933luGKizuKuqguk7NvKnQ%2FPYzNunqPiEcZ%2BkWRMY2rKEE2YsdG7x2BGDSM5SF3wDPiRf1ACBw711VawtOGptZvUHwr%2FomYsbu%2FkTY12aaXXddpPiMS4ugURU%2BcsK3dxdN7rlk0HpSTloGgUGC4LVoBen5ydhscUaCwgEJ3KZujrfDF2ZlPh8PmfUQ6n6tZOa778LoTBgWGV2rZOBBSbvKkmWhiQOc8hMIYW9tfOg8h5pbNP2rrAIqQNsQo%2FNF4P1sxPLG0KDKEdCycbOGrP7FawJzX8A7X7eIH1tkjT9FZIaztTA8x1CvmoAAw2Vx0%2BWE75eNdtvmQLL9pAiyGCXXIu1PkxQTqAEHZndBtd5iCkOi1XyL0k5k3qZSPV%2F1nfzQIzq6wZ%2FWsnaQBxPAwotrGxAY6pgF0QfsvFSUC3%2FaBnSqjQ%2B6103Kq2xQpwqSHesV5O2IAdaK0TaVysClOvLOueYJv8bzrkGH91aniH3YZ5qaQ4cSK%2FxPvnl0zEwFx4CQclGsZx6cnIDVPBzPU%2B6j6YNdXQ49U%2Fup583oNPjM3vn2Bzf%2FoJX7kAH3c2fsBMzdqSSMdBLczkSnHxf4tkuifsRe8k6BTx30kHeB5U6NSUMkN%2FIEL1DLrdG9l&X-Amz-Signature=3983c9865ce35a3cb2287f13bde321206874051d14e1c5f33816e2db6838bf14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDTPCK5J%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIEyRKwxceQoBExGlveI%2B1M5I%2BOhgZFly3zjZbylJnmhgAiA%2FK0fNT3gzz8e47aQZDLJ0%2BbzOe%2F2n2FFJNZuURJMj9yr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMTwjLj9K4XJbZqDuAKtwDbTkyok70f4SnyTXKZAas%2BX%2BehuAW4zc0Wvnk4m%2FV3kRBm27N1%2Fuc%2Beh0YzPsAHTUDaJt1S385LWlnD%2FVZn%2BrLbSCkvAYi6mpQs5VO1AOb6cK1HSwvZMJ2mUi2Q8uDl3UE1UaMEBPVWjx36pHe%2FEZnodhjnkiRqBxorxpJgT%2F7uIXkIsi5NJ3dY6hfKyR%2BUfeU1E2NRNC5RH6ZHB6xhPNzk1oRAX%2BNf4JHhQeMiYxDweDBHkujh8Ed9JQMPacNoogt8NPGtfy0PvkoGtMgxHJDopyCq3UryTboiwS92WBAdQrK4JZnjhFNmXwLjF53a4LgocBmG0Vgwwu3wUc0pDFbV34gWRC9rG9jLY2P1VTOodevlt3Ci0Blg3j62yHQGPvGsRBZocthzyjZAD4IxzBN%2F3D8UmGvd6ZRB3N7QwCiufkQ%2FFQhcnnSXBfTZUs%2BlHRQ5tOVaqrt%2FXWKknHGXq%2BVxmdJAe8YBg5l4BgkViW082UB2CU8F0ebaMs2ytxjH%2BseOF%2B9PTGocJjCYytex5HP8hrGWNuYTAOBzJ2vAL%2FvYjvLzgNfcbhMJafr7vfs4%2BVdZMbAUCfqEuv8HG0sPvL477pIFr7iWReEow4UGLU20v6MJpOOqC7TPHTxXIwgtvGxAY6pgHPR6u4u3l%2B94KYKugrqOH5B4NL3jBqhI%2FXKg4uCPqcM3cuOIRTe5rR5j33TEyeJsD49E3GHslFnK%2BdnYQRoH5wZFx7LU3H9JkzD6OMwrTOJxLcZVfMVXDSBXTDMalrFVHeS8dMtxrKVRCVPdabCIoQ0ytuMDJWxFN9vCnCbtfMzf6Qvn%2Fbr9ELMqaKsfMQSWfjzx%2BqFIoEZy0LuKEoz5sfJNFhlq3R&X-Amz-Signature=d4e527dd3e027b7c80be86c17c35be3babf1d0aed76e28648783b8404cb10ab4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
