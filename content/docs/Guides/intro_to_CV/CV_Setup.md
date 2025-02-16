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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MTNQYCZ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIDLf4VMIq31QO%2FOO%2FD%2Fjc0QBhBiSHBFe00vFNT92IG12AiBZi4u8EuxkkjvYE4KJDbVLrY6%2FERNv%2BI2Y23atsuHwuSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMOew0fyoo%2FPCuNUjxKtwDzMhLkMoNpoBlrDhEfFNfeoM8bKfcTAywqc9f8hXpdPP3IZDy2f7MDT8VJdTyy87oY%2B420P%2FyRtsWRVbWTMOL2xU%2F2%2FPSc5Upznj63BrTEJwxlYoK7Od5Sgdk5mB%2FBLHDV2TF0qJSjzcfsq4LsSgth%2F8mCWzX%2BM%2BOytniEUWzdGPqqy4IR%2B8eMLNgTptkiQVZBSTMKOS9WdF21oMEQ%2BWNqDF6UDzE0lD%2B51plcDI0pwjECMmeBGueG4tjKdwdYlm8joOR%2Bv%2BpNO2VkBGK0RcGLFJ8Tk%2FX4kPX4bMUlFVYkmojjSkP4y0OtYDQ%2BcbGli0W8bGyWVGk9fuIgza0xxOYm3IRbe10NEsoOfkeMZoQuU%2Bbr6x2CIvEJMXHjjp%2BNG9LbPPZsiErMLcz%2FCxModRwxbVUkAqQqG5AOo725rMPjmnkXVBq6kbQE2aEWY1bpZaKfXlbstrj%2BqNghcDg24W%2FBHOpFYduKWxDh5vBGc0j12T8F9r3wbfRi7JCkIoK3tEseoDbqpT%2F3%2B1ESOCj5Q7hOd3MyZPQPDnuwwUUYWkh7gmvQCQOD8CaUE0B%2FoJHzL65aZzu3qflso%2BDJYdrFrvi4PfPzpeGsrWMQqXh1B4vr8Th7yBrhGCYWdEp1rwwyP3FvQY6pgFp5lfsbO41ExlLI%2BW%2FqH%2B4rEbveqKJNDmtJgKKlFrMrMF0WiaF27z3P52dpM45O1A1CoI4%2BACLPbBx1r%2FuNL7ABPvBVxFkr5RGiIuhiorzSMAeycM%2BPsqoXAXid3lmLy%2BBYwHX%2Blh6uZMJRR%2BnvPOrzjR2F8F6ieUIuWuEXk9Nv9qVKDVF5x4DjIzRiWQUvy%2B1ww2cwb0xPFvOlAs9uGr5%2Fb9wuOyN&X-Amz-Signature=c7b114672027161e18225ce8971b849960fddd4520e118e033f3e4ec2bdb12df&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NOPQZHY%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBf5u6AO1BqudIl7BPKSbZ3f6Q4MmXslwmBACHpARKVlAiEA0ateAXmlWSYHc1tvkO%2B8euplpNoSs94tLj6fsIDj5R4q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDD64Mo3grzPJ6FljRyrcA3gXXsyK9D3d4rxWKeO5dDbEU%2FdFHo2YGCQWhF50gr1KVBiwp9VyhVkZBMUhlXj91P3qvNmQvEp3atY8gixLOnIUm7QgodKCBpRyKNmkUFpv2jLi%2Bwrqw5wpct6X1Ce%2FWTJ2oeeijN3KuIpPdDAx4xsU4Y%2BWajQS165OPEL62xwVEPz8pN6381g8DYxXx2MD4S7pUEstjhOH1FyCW29VMrBgfqTKdKEQxBMIOy5LqNTglLctIorZ1yGS7IINp7eSfDRWqpuZfgcfQLWr7BE%2F2K96opyX4cyRH10l8CTlXcNmwabUhWBPlFdiKv7WDYrDJp%2Bcmsctuq9qo2MRG16szfZMb8RBRaEdJNVdcXBG15DqSdVFZMRN5oN17Csa%2BBl6J5SopWvOSIavsXn1d8EmGPgQmv95AANwiM0d2kxItS6VoIEjrv3IAVZnOaOqEmc4qlxAoDk%2BuCkdY7SK7rjWFFgOakGZimvAC5pEp5M2eg981a4PSrRI6JggNsBB5VgtrR%2Fq2m%2FzfMgOTX2zXRKpHr9LRpyB%2FZgr823XnsaUvusGa%2BL9q1z8LBOP6%2F1AO3zhEc6V18hI9PJq%2FMcolvcbDjhAshoea29lecEhrV0ciO8CT0Yp447aQOxdIEMFMKz%2Bxb0GOqUB37HB2KVT%2FJUbyRvVijHSkMS65d2G5rFdIHOwQ49nz7mmculoekWzBFZbwXTxZrKlwrWe5hffwINvN3A5nb8uSBbWee47f8gRoxVVhWK4a8PkNKky%2FugEYqcmn1BPWxwW2mTGeke%2B5umSa4BJ9PPWaJqJVU445TAWmjT%2FjUDWLHorBBbLkrYrmGoRzI4PW5EAMsDHwP1vR5IFgr0jSDQpnwZHXNaZ&X-Amz-Signature=619e1734c436070ce4ec1228787caa3cc39064b8564296cf0ba09c98c861387b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
