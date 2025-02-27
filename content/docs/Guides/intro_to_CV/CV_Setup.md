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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB6KVVIX%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T041016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIC1xr1oc5%2FQJ0sv%2BSv%2B8C8A3Tly5KU4wV52jvkOPv1v4AiAUGDj6oU%2FOBgPiXChocZWjCcGsfa1DlBbwFVVakLeukCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMyzYNyAT5jF6BtLHUKtwDFYhU%2Fne4SFICIw6gr7C%2FRTN0ZHvRLDfxMnL17eaNcWMh6jhaiYg%2Fz%2B5SYhR2lrYf2xhMXWeLXLWOhUI4jkXctAcKzTg5JWgvL%2BQCp5e7Ti8iuWuWuIE4L0%2BkNscKj%2BvsF8nIs00mQP2jJG2HbmKGBfbGZ3iW%2FujGtKqyLP4J67vnUjseMrOc9EgkfgHFUO7gzyBsqNWGu4Za04yO9ccMPuaN45dUt7Vvw%2BTfUsRsBuJCqE%2BvWstDUPexFI%2ByHiqJ2LnOR5i3onWzpy0W1cBr0xyA1LdSCnp71Oma7EALcU78SmmVtKnc5LZWcPBG3gyVU3giWuUsUSg37JLeoIdfa4PwvnvJFyKmTDKhWMfJOaTOYy3LEH8U20IKvHv7xT62drD6YBkgUclADkH9%2Bk3kr0qkgympWuw4GsFYZSrGx1U89s39sDGBY1aGMDgKziokIZaZCCPh0D%2FgNWp7YIqaDgoz3Lm8w3aHseChMO%2F5BTC27UJZvLEnkJJiJU7SF5gjlU6NrOwI5qcL7ZVmOj%2B4l41cNwu3ZQNQK5XFaAAuCrW47vB5oRbaNFoYWuKW%2F3YHI5yTOlD8XvDiPAu%2FHxh8Mlu7WlGIA9cOc6JBt1zsCGo3QFwQsb2FRfUds8kwiLL%2FvQY6pgF%2F3e0gbKw1w54ftADUKAxCH%2FRWd%2B%2FWXClaHJf2gPdPQN0lonTxvaPqL%2FQGhoBBxjpru23ui7IPwaOBO9vlEij5FEQ8uPp2CSH4LZ0MDJ9JoPK0ItSCN%2BJNrzHFmBbgmfxd%2F9hdaV9vWJEOL2AZ7dqP8j%2Bfaz7pbCT7M9quH7mNUhZD4NQaeuTfJpUY3sYPBSTgKdBI%2FpMpN%2FgbiFxsHtBmqL7Ng1S2&X-Amz-Signature=2cc2f63a18968e86d58d50f8d66f939112864fdee4cd23fd0e78f5d53a3376f1&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BS5ZZRP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIBopIHBsSs5UrFo5gBfgdjsncw1lGw48eRJD1VG7sNyDAiEA%2FYR8Ksq2UP%2Bo%2BDuzFkpTnLHakCPBqVarGwNd9nx3Iocq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDK0XAjtxr6eFT2LFYyrcA7Wt1GCsFRbzGFhlgLH3BlcZrwr8DAfHSOqMQLXrayGwa6holYyadzUvYcfupRx03KLcw4LtW7AhUEVXTxqVNRc7ZdfLpVeNob7TIkma%2Ffp3AmrpA0dagp6Qp8px5rJ3C9wQOVUE%2BGS03awId63LO2n%2FTJliieH8aB3T6aSO66Hld%2BwBmHMQIupCWG3fxx6YROc8Hquwy5ppIeSfGQ9aRZLo%2FY7eCb7%2FSO0aXrp1owjP9LrGgQbVT8i0LlG6qoDgFd2JEYQARwerkzH0R%2F%2FPp%2BxV8ij3LtnX13pSlPRdg1e7QFHlWVOfxJiJBCNQt3DmlvHeritLwvA3PXYcsIXSLKGHDdY3XCXIlrXKhrCfeD2eQlF7MSsa4f8uzloaSlE%2FuO0DNtmXG4cD5a0A2HQ33fVo%2F8hH4UkBhUwA9jkT2aVs1nQGlKcWuv5%2F7XE88JQSrt8uORAYZnLLzMmgfTGLUrO9K1l2Ci8iKX7GPPU55B50wEOFQpH%2Bf%2B%2FSaSrtQrIxw2l%2B9jooF%2BqvgIltcX47xd%2BMqv%2BVlu5WO3oNXBf7RTE1n5%2BDntW1%2FbYYsc77Rtcn1XMfqMj8HxCZe5Yrm9KPfXkj7c4kQy8XDRLU674od3T0EzSCz6gi4JNjzz6EMIay%2F70GOqUBu%2FAtAP8o8ekPNmfEiIHDWFzmFWYYx3tp%2BQs6gqviR%2FbnyyYxiH6I4lwX5NRhEG4aao7kgeB0UYZ%2F98DAZTclyMz8qoXHw9gckjpIjciANYdhapzjvRNsUNoCsZiZEXoZY9TdSVycZNAc0EA%2BoJmJS8p0MfbalofzbzD%2B8SGKv3x%2FbzBcRyLMkeEjt53sM16wY%2FHrXs4%2FcxYAdxcqGh7i4ElBNVBH&X-Amz-Signature=6981601d2f6776b9151db4ae44e909642b5fe1b06f427bd69d1dd47105803422&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
