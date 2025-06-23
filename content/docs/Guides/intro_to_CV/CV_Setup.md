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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCNYIEXY%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIGly6v8sF803%2FOKjn5aXF9gePE4d%2F9HUGurO14jlEpdxAiBVG8N7vlM%2BXviJXBgQfd%2FXNaNePYDAYqECAgBjQsQ93yr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMTIhxeRF6srJL4AeCKtwDgVsForcAxA2qjATbdZUG7ceDTsI9XZGcnsE%2FoxgtiaCl6XIjZJouii57uIBZQojTFgm0p27SewCCW3nWCuscKCxlPvte9aRt%2BAT6%2FNBfcvdj67Jp%2Bh1pkHbv1JfhP6k4qwFD38kdnzSq6lMvZsEI4ZkkmoXZzSJ3MfZRnXMFlekrcvTzAkb91Ks%2B0CZZ3x6rLWQlV46hXIg904Nbb2dkZGosgE0Hxw1buBvvX9TM%2FL6%2FW18DOUN8QQAAvWnNTnpuGd1X8tnGSCXjt81Rg%2FIAzzIqWbF%2F1X2o7j05uRmpCHoEy5cqQMxNDDp7PxpeyQDcecBRcMzw5sa3VO6kZad%2BNVuNlTdI6aBDvIppvXucWE9oF3HpdmdcEOhag4%2F5DatVuJQp%2BLK6mSe%2Fj%2BBivJcfbOupovJ3rMqp7r55eqdYqPOX5k%2BPRTQW7mYRaXcnZS2IzXzQmUkNXpEP5m%2B7NcaJoel2HIc0MFafagfMnJxI4Msed2bHJGxvmTEQ4lIt4jE7vMhHjTdIbj5pa2d9MjwenTVk9N1EpFMmCo7tFfMesgRA84lLPmLd4Z8I9RYKcGEHtPQXu%2FIDDOJaKWxmANOE95cbkMJAFSb%2BVZcThn%2BHoeSBb4SwtKAdy52n2ecw%2Bf3jwgY6pgHsIPrDxbJLmpwD5o1a3QvOCAO77TJCV3FfgHPk7%2Fil0dYRQxIMuce%2FjAz0YwNgYUgH8C8nVTch%2BFyT9YgE0GfKI41CaFFQE12FodbQUHCMJgzyu1XDf51DZcdpCM3rAMAI5bW6nHgD8I1DgOdzssnsCQlz1TlJbxD3QzKUDT6tVJ8VqmUDVgl21Rme7yfm4pTLxKFXKphztyXYl9rPqARcirduFyG5&X-Amz-Signature=30cf2aceeb03f01a3ba6f51d8d7bd822f866c7b6a47b8e7a5a822fc5393d4a69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKA5H3LD%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIGNszn4NH0zVN9wv8eQwUzMIuxDZ8Mie7UOcZz4rCg%2FcAiEA6s8nu8r%2FFJGoTiCFsH9LKU%2FV274DueR88aBobuFabgwqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5LITl%2BkATm4rcTpSrcA1ft7TYvaJTNjgXbmrdVdy2GTOA4cVCnBAwDVWvSnFqpvjOTHimxDMyozyGjyhmLlfaFTBdXQ6Ng6TAiGycDG2BPTffLoBC09qZyXJfWAAy8TKSgeRSq6a%2FhhaUez5QyINThJgnmbrbdHW1GXKSh7LH%2BPPJ1Yj5GQpfyGsm1MPpJd8WUrogoMmi7VL464u0%2BSjQPpyrivmJSYVQj5FRPMq2jAYvdGwvFeXHYNUyyDXBCtpUP8l2zCW8QvXGdajM2XsLggWg4d34xCCNWCC%2BpQk0Z404b6kT1jH0aVYni81yf9uDBeX3ZX%2FYMECcLMUD%2B4C4%2FH9xHBqbTBESubsA9sge6Pus8RMxMHJ1np6xbw1cFK9ftBX1VwGNDPSiPu8KJfm10CmhiS8TslrmSb%2FOsjr%2FroNOyssYdXeYIPPRa7ruTtyPyO5uRGjndwKqyFxMCuNdEhMBJLDzSgqIaABTClg6FhbQbr6FOo5lyBPHKq5jh8uPetX1VsggLQJ14FOB7lAPs0OEWB%2BoSpz6nxxAO7aNqLkqzV5BOuiUFywJ%2FjYzPneTjKfJfZVvb6XYGpCf8VLMrfDFOFmOmApchBzgn%2Fy%2FVZiVPlzxQo%2BmJphcdpNV12PVhuNztPF99Usw%2FML6648IGOqUBJtQNmotBUwh7c9nkPsa87lUrzqPbHY4ygOAE4%2F1Z1b2IEKodOrf3hjD6KvNhc1QoZkjC6SZ%2BqthI1NS5jWohpc1CJ%2FBfdJVziWdaA7Fd4ydW74IDxRGncO5migb7g0D4SvB8HCABjEfqKgQzv8K92ZWB0hZZyvDB9GjDRtuctiuZcCUMLhyVzguNA9tg4SsL3%2FVZZqOvRGMr3bN9uNJKAQ8nc0Ip&X-Amz-Signature=f2058ed6f64b5e7f10a29408b5dd6173ad24e48460608fa4461a4afee11bda3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
