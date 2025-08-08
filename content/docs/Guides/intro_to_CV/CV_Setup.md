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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJJ2NSK5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCQ%2Bc34USS645Ee3uLTJN3Bycsm5PvIpNIEx42K89hdOQIgVv5TdX%2BKaiKpgcM82ASuXsATWGn1oDLBfHYb5utTFEEqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFIT8qM2qM5VP%2BAxrCrcA25tmdS5zaGCKUul5GK16rc3iMF8YBkHZWZxJ0xWC%2B0Nk0iUzFTezAuX97ZzJCCSosejHZ5kUhEejdeI9cHqsjNqvBNKXCEgsCrPmcnvudoD1vMosjRqpr8jW4far9CziRjeyJnjKfkuIiZ9s%2ByKeDV73CyfmzrbVRMCQ85ghM9LttHPo7BAPp4rAHpCBABQTFgSku2Cy1rzEmC%2Fzn2lgwPl9pZxzXRJlzB4fyUZaRpPXEkTsrUbdFosGPcSXLwL%2BBoRJ5C3QkEOK913JQMZLlKCFlYEQsdT%2Brim89c%2FWH5OGQHn%2BXBuRLTdSc7lHQFKrqP20pY140ASSnB%2BlEPX3kkXBC28nogaJCFHQtVsT0hnrB%2FbzdZz67gBdJQYdOyLZRVHH%2BlRsWo4D%2FGyQ9KNfwWuW0FcCpi01tAwpWBGtPb2fw3p9%2BBH9O2HWE6QeHAAnMUQmhgUoWLcUmkgR6Jfs9QgK3JINmSTM%2Fugox3qDKd0cBf8zE5NzK%2BnurFd7kDWto90QMx%2By4sK12sCs%2Bz4TZgcrMLsnUr7eNMxm18iLJ8bLBez%2Ba3E%2Fdd0AzsSAWIPeZ3srsowLerfhD49VM4fT2fedwEbfgTw%2FRV4K1RxpCj%2FBzKVof0mAlTDZuNtMJvt1sQGOqUBoW8Sir7EZj3o%2BQHFvU0%2FHUAYAkSkjYBdX0cyUxCJskkYqx3KgEBT8Qsd2PKK%2F8gA36LdSUxgs%2Bk413jYhC%2Bs10C0FMOBm3AYOr4EqfXLAZsXybasA9xYDa%2B2yawkDXwu%2FJGBhvRzrvMphe20sikFYxjMCRm6KJopWnA0FjFC6cltIZ%2BdJuD5VNzIYN6%2FioPa5Tge1LXzg46PIvYZFKp9c%2FwedY4B&X-Amz-Signature=b686cad28e50bfee22bcc76ab00a6bcfb5ce12678b5da43c459a66cd1e0fee71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4ZA7CH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCIVbYWgsHxlh8x3H78v%2Be320DPZPnFOeWAapVZM7I%2FVAIhAMJosOfFQTYHd%2F%2BnIBU0FxmupwgeR8z9RuFMIRywLXTWKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD%2FQzMlbXu7jZTxqkq3AM33RoN4l6cFYKoWWtOZohvzFg%2F0D5OtFeBqyczZgr0G8%2BkOzLJ3gKrnP%2F78qVCdMZ%2BQrOIJDo%2FJPNVxBApGNP1HdJhh5sgmG%2F76rlW8dezyhiXYTXXLj8wAyC5EBsKhLTNK7opdDlGhT0mNzaQkyYwdcEwHXwAIb2HIGWFlrkaXeWgatemmthYbtFdl15snsEcNRwWd5sf3Sgs2WxgpdAd23qdXdFTsAEdWjb2u0I4kd1ZktJHJLzIEqHnEyqwO6n6Z3MPTjEV5Zpa3%2BwPd0Cw905F%2BAPvdXqjn23uH%2FKSkJ6QaVXZWceK7%2B96eHCYPMIqPt8zSWeoGOa6gXuguCGu0QaXJJA1TbyvDZuquUZ7vooVbbt29%2BMha8CqSHgmJlvxs6z2%2BjzuOEOVOm%2FcsdnZVf75NtCWAWLqoy9iDQnLGoXL7pa7TZMRo5aY4ZJ2lzOUgG0grrpPNQ0dcOP%2Flvpv56zPaSOG7Ic%2F9R0TmezobE8uD%2BYxkADSzEa4nCXmplY4TYgu%2BNa2MGG3ECaxduKpu2u2V0ILc8o593mIraW%2BGUYClWd%2Fhh31NS9vURUSHks6PsxlVVP3xQjxQfC4eX7oRvrLCnejoIeyjKLOVZlegysUuYLiRoCEZoPKajCu7NbEBjqkATxdjK%2Bvy7a%2Bxa3tIIvYRjh0jHsP8QxhzXTo0ojD82u7NqYmQBX48V3O6EeL0hJGEVfahAma7TRv%2B%2FTPbuWjbyL8ErA4V5ISvmHjeVEKugUv9vr%2FZalbdBIUqyRKBcH90k2I%2Fw5g2Q3c3Wv1E3yfiojQ%2F%2FMTgPpY%2BeSeTpxzzery2NDWwbW7V0IhpSNKBuwskMohMfCd6NXyT1X%2Bggl0k3%2FDV9j4&X-Amz-Signature=20185fc8ff889abdcea6fec93885a013c5ee8832788ba4016a555afe0fcd9bbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
