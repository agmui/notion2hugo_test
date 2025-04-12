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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HDILPVU%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDrnU8hC9yCyW3VxkCWCjsq5ZnlnjM2i4DG4r89qchiNAiEA1T1msx0fC%2BgtzeiepqWnDOoHok18kyikjKcsILKtuvEqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLo8h9%2BoxkbZ9tQVxircA0dAXDBhR55anZJB4UrUTFOVuYtxvqPDB3Y12SayWofQsceKUnIOfp51ucNRbh08IZ6eKIIAhmDoCF9HgPpViDLIQUm2dupng04Tj1IpDxTIiSHyBKt2aastEfCdnP3BkWyPSJYDJ3Gs2VkHAm%2FzZ05eqDEUJnL2KclCh8aEHMwS1xaBCMw2%2BbgPWk5JaOukhiKq5CQNjYFTujdmMbOfWh0bgGETfTZV3xbkOFKXdZ0xYEw768XnVEznzACDhj3Gt72i8zTARJSQsVEUdxNCFRRt4mdq54jwM%2Fd%2BBugwK7X%2FIgt%2BHxs0YL9L5C0F%2FIQRmKMpI7ziziHZlv18Cwzw4h5Dmn3W0i%2B7Kg91fZ782XKDJKmQHML%2FFYkUSHPhR%2BHq0L0GAERbJBc39nLGCX9vAVkdgsPI707kXHPscXrR6M79cfPCzwSFot6icEShNSPrQuliCpxw6YcloUOg33cqrjE7xf63ZEYMRiEH31yRI%2BbKSAjEaTbDKZVhSBb6htDJe5xpvn%2FjTpS4SZRHUagnjutLiQdj2%2FTnxPA9aw7tnXZXroN2ruWg0h8h6M4NY5exAlu8Yo97M21TWCBXeGK67WtcfaJpHe2VLE2%2B0Haebnv6iwYWIkODzrHr%2FbtCMLbK6b8GOqUBE%2FKzZdA5wj%2BYhDUrS2o31ROU3fllYl0f%2BtanYyAM3SqAYTpEUk%2BOX3MJT6gMhBR80XYavSDQaxmj2h5inwyhRIFdjgG%2BYeP9qoWsb%2FAfNfWvw25FxfUOYIxP8smyUg1rPst0rtfgl4jSD0%2BDI1aZc9oRnoWHJWKqKVOFRLe8XJAbwaVQB3ud8qlQVxMpTsW%2FaVmCnm3YXf9yf0E%2F5Pr3wu4lY18S&X-Amz-Signature=a97d733e57645ec139bd4fd8c1d590e5b9f787d10f700975789514c4098bf35e&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NWXLDYC%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQChVeTo%2Bcdh5e3ey%2Fa3CboyrrB1J4ybThTshspePaw1iAIhAP10dda6TBamTRJulkeGO8QFWNzFFBkKvbq9ZAFXfVCLKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqRkdFxerL6le4waQq3AOQnxdm%2FKgu7wLTdXW0qNXwjjer3jFbGIs%2BpXL%2F54d8apaF9icmZBKb6LRLvBIbuv%2F4PuCAfm9uaUd%2F8yL0U45ASl6IJigKjc5jXZyO4BsOXvA1sZUFoXFg2CnYUSm0mii7FrllGa3KhQysI800z196OrJiX8lDdJcnhewsDZIv6v8hSqVBNTlIEaeVOpWd3fXNWhjHLRT7Z9p3hsctQfTUiCUUNuE0xYnWITsc%2BXebZDaSU0iYbJvWxK9EAQe93fQMPz%2BoGeHtl8zP4v%2FPlm%2FWtpzwuhC6gAQ9QWYCBe6s0gqhsPOHbX%2FbCPPPFn%2Beo3OBjP7gKAPob59Pw4sQ2aIKbZX2zzEdK%2BfgSrYKqhMqShdnBfGGoOoy29oR01NA%2BYLN1DZ2fr3LcRjp18uFL0Q3bqEMsIk8R3reWV2YqXSO4MDgDso9M1m7InD3Gj349%2BkDBuDEPtqb92SPF1XLsGnW7x6NtcfKeEngbTHb3Wva7jp337L77PZzD5jjY0HqyJP4cJakiiGzbtZqTi1Ha1yS8JmgNyzFgTCXEFOcH64Rgp0mxWvosR9UoI51az3J9p56qHu9McEJObM2EqeCbwmaHuW5%2BqMn7JRLDipNu%2FhvcAodP0jOI%2FPrrLrFIjD4yum%2FBjqkAa5EIuiIzE%2FbRVT6d%2B7FHIEa9eV4yMd78cQTIA60jyxHEsIjqcrx69%2BBXoybrSPWHHjmouxWrnQasPGKqjOKti1rGgXwvh2WvZUvsieqmpxw2KuY1dk4YgYhCt0F6OVoc66HfNCw8kYxnx2Pj%2BerQUfEHxipKO6HdTEDMx5K8z5UtCVA6DlbDoCqclVv5v635DyAQa3yCuqNBukBAjx4qQh0jtoG&X-Amz-Signature=3fa13e04edf3ad353c223e8d995d762e883c215e41df978c0c08a924955e7c0f&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
