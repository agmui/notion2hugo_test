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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPNZHJW4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIBs1sjEyHZR0M9C7cWn5QiJcnJfWTcIsuE0o%2BH%2FUIfZyAiB%2BPPNziE0tQbLZipUzOevKNiiy43UqVtatOfV7q%2F%2BJLiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFGKZcXX9s1RKZS2gKtwDTjwqxfjjVQtaPg1CMIm%2FnLjQATr96Y2gwxwI4ayhL6jK2gECDu1zjJMYXj71w%2B8alSG7F64T2S9JWlACdTpJKnlguaoXKLyJ2hYvlYDKOS8Ec%2BhQYwoiYU9%2FsZpnBxw2VhiItO3dZFLZcaWEKIdgSALNuQBPlVKrG%2FcIMYOjov3GezvesZqYtMBAZL%2Bp2851we%2BSUw1W7vLvOsnPXlKtr4s85XfX5GZ2EUi3JG78u1j41SKzCdeYhRcQ2kPkCdNWJKkil4NvWvZRkB%2F5%2FE3LGtvfgnI1qNcU04sow0IJMeXiTT%2FaJ%2FL9V9PdY0UYMfviKnEvRRG53Z7PX8qr%2FmuHy6mmBKpSj4LGH%2FFwR0Z%2F%2BHHuKKjqwuSIG%2BaidvjhzXY2AdZWy5loLCaYWOHlf3pYYrg3W4QlHQdTrVYYfZCD7J70mm0z1wppBPr0UtYFL%2F9XO2EZox4VK11nndmlahJUgWcXmnWjaqWHPp4kXyhTlYT2FpChxEJmMh9kTfNOgN6zxGpJriAPkJxbmhdHemJkekWg55y19%2FLVc%2Fz%2BXy8zSEC7Wdlv%2BUVowbvPTvFrlDdGr%2FES2%2FAhIyKwnI5vQ0csqc%2BV4dj2IQ%2FVA5qDJlmzIuVBzKWfj19lHTmf8NgwooqfxAY6pgFxPuVYyE9yXQp%2B4LhSua9yHAQPXOFNCHNDoobiNQuIVdppPCnuF4VuFKyKPTUAK8O5xQgm6PB6ZbaFq%2B9vzyc1EJvjHT0RJZsCjFuftsxnUvjhFS9luiJsihi0iLNE%2BTln410tIXYs5GVMNaBgeu2IDX%2FDCTkJ7Q4m2k3Nf2tJ7CE7GAlCtynzlcsedAsJ9vXUQlyf5TqNlCBxUG6CQ7BZHfqXau1W&X-Amz-Signature=49b10592222d775e3812d4b2b420c215e3970f130406d7823ea0bea599f1f3f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZISCN6E%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGCrfduDdwYN%2Fv8B0LrpSYUzPXBNSvcbhUJQ2TO0F3aKAiBpdoi4WKd6OdZq8ZzIHaaisI5xkphoHJtsvreVNeSb9SqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjRbk8%2F62Q6WTkjyJKtwDp%2F%2FkXJfNCSfT0rHqlUkony%2Bv6dnRbhbqV8ylxcIT7vO8SLNwHp7B4B5gk%2BOB1Ep5ugZeUkwdkKSf27mbxHdVdFy1%2FT1xLlDWr%2Bw%2BvbFuxbzHLAYPoSLJH1qIf7e9zdf3yo7aMnCpVs%2FRpgYLrfSqI0UY%2FjfDDMVW8RwD11M4s9cJfe%2FZjBnS%2BwmV0Tur%2BTC3YJSa42vD%2BQCYyHVM5PrFspSveqBacFm8N%2BGnMNLEZ1Np1HltGDp9cR3zwAZ7zKZ8u8KMH530rBy1NfwHCFr4flwnsuFbO1Gp0O6a4ATdywICIFBQUxUhobGBD%2FFPKFftFQxfLMsjDfPANP8wSkKKMCIdlZ7aASKiWYvTQZktBVNDbIM1x09Gt3TDdDk8DjGtzyE1H6C%2FaECYaW111crqSVTUi2bGWhvI2ZDbaHrDYI6qV60a2dHRQjxhFxaITR4Fb0YBil6C%2BXQh875FP97NBVP2JFnZQn95U9AwHPzlfIG8Q0yOFMtaiYt8vKutsXgbRX5OBIZpi9MYmDbMl2qNg7fosR9yT8Tau742k%2BMmQ%2Fdft56Qv2RmcC9RGtbfXhrYHKKKr%2BqguRdhQ5WyWKX3P7gEqDlaE0CTbyz0vh2oSy1r%2ByvT4wHpOtF1TQUwt4qfxAY6pgEBFgoFecim7zNhlODxKYw5Ku9fQ%2F1HAYoLzVW1vPSFQiFgp6KE1BIgV7Ht%2FEuHn%2BYWHlbolaMxIHHxpcSpHbwfuVJu7HRfmgIPal6XHerYrz1s%2FOPkHEDXDk1KgbcJpQbpZGuebHMIDOVu0%2F9jnukHSzMWFqg0eCL4nBXGUXQDwGn0xOvy0q%2BD76hQySN3lps0XfNWJneWEyWb5Wqn39onY9ATA%2BTR&X-Amz-Signature=d30685bda82b458279594490028bc62e53ca3a3627414bf2aaf09354a76e7f80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
