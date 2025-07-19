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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX3DMYU4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9zlhswcmbznzrvuIrgPbG8zNaH9%2FPbljrNyPKZB5AvAIhAP8I8cxbQRtgLsN7kBXriDhgHc46GEE%2BWDR%2BLoAJnSqPKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXG90KmPTRo1Ai6FAq3ANTZAYAZay5JAJI4EvDhS9u%2FndI7pU6A10UEjip29L7Rj338DLwGeUHy6wx8wktZL9lHvocmGxXg9t1Ni%2BTVLRlpOOYudzH6km9U7FJir4p68BHbj%2BJgVMvlErIuUhbw2uxNvn6vHy07KM9eikwnRf%2FJ%2FdtmB92KV8IpDHTWABymlUFLcLQe3wBqu%2Bw34wEG8aui4xgrnxKfdmbYFLBkuj3mmQENiVuGzba4TRR%2BWf9LaQIPnB8V0HxvU4FqzLxfucLFQi1mbSFS706IpR5U6KJrd8BAd67w9ihhdMo4PBSdsOxEBKpBER5jg%2BySNvv3bMZ3z1uqHI%2FLoXxnlSvSUXkWawMjrCak2umwRhQ%2FYLS8uhzdKLooZ5XAzA63i%2Ff4YC2paWyL6ySVDKlPvb9iHrSjDdXcmprjJezgS8d2uOxTPxW0eaQcVSK2HnbryuxPmNxGTsf%2BQTdb9Os%2Fb73N9o9jvPyOW2WtB7zF4fnKAsxbjgPlnOdkbWNlZBLbPGZy3avObyYKneAuE7%2Fr5wRhyj5So0RcZVkKJSB2XMhtP5WZEUlBZtTQ%2B1YtnUVzzWpcgvXqmvr9dii7vaBoOjW6mVxi5tKTFnM%2FYO6mFZO4HOm2LhfQNv9vL9aCepcYjC94u3DBjqkAbx68iCNENlG22BEjXOx4fjzQJeMYbGe1Go%2BSH5YhS0YGsPhBK1vwJuGPm0GSspgIuO%2BFXmK1iUAS9IxJnuxPRl3Nb2zuFGWsP9Y%2FPHldUIDf08j4af1ZKGe8f2IkveOJFc%2FKGEmKYb%2BgCvlzYG69GmPqhiBDcb9UyzqlobTK0e%2Bqve%2FpoeGw1A5mE3E9OBBIQnPxvgIwQJXPvIBhQydLjO6Pozm&X-Amz-Signature=cd1a0dfdde65ecf75f7b88bf0f35bee5708c41cd54c5c909e62d78be024fd9f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624G5TE64%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtzF4W6MKMXfAW4v6%2FJm6oMJ3%2FbDbS4x6Vyf2%2Ff4YRXAiAu2MRoYO%2FUN2HzT5WsEGvTpGy3s0D28x3fTZoOmQBL3yqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP07y8KyWldQIMaHCKtwD9AKnjL9AKdWm1SsSAlKqWchcyqnMoiR4cykwjC47EAdI8miW4B%2B69beCB9kVJiCW%2BH7Ym0T0kCjRIn75%2BruVA6oSvwRzauSTFZ5mKoJMLIly6iPBI1Obc7CemdP%2BJq4ZkoSQMfOXvzwT%2FC1kgiwHWjdr12uK28PFd03koSPuBBTniXpe9Oe1yqzMshyjoghmV3PJDIFfOaIVpm2Zg8NaKA8lpBnjkORxSLBnPoIb2IEqhDqYd8bKGxFhZy6hXbRW%2BVBgUM%2B0o8WME8J8xG6%2B2NAXBPeh32TCy2xnX28mAMJS07BSFKDQOAZnJIGNeNuvDmUqUtBGfJfGAAQw5KLWrCv18MSBiVjGvgd%2BCe8Gr%2BJ8%2FK9qnFTyfGFstSNhKRKwuJm%2Fbxj%2BMbUuQbhTfcDKeWLORza0zhtaqNtvD4PrrUS6QVzY%2BHKEp%2BZi%2BciUyrXbqkciXASFUH167oqeTdLJRAG54Tkcd1VWNiz056IdWtNLHL%2FobJC5b0lfWS9mLx90Yerk1PZhndIQC53baE4VHp0IkkScLBn0X5wIWz2XVKnSam1nBHN19CkeXtlYoK2kXRKdG2GqlM5HdidsibrVKaD0PezHBaY%2BVsp0YquGtlSbs9YE8yEbfc0MuUwwoujtwwY6pgGpCjjH0hW5qlBLjKq8JAyXxhoyaT61Xt670n7u626Acgj5KexR%2FxZ6FoD6OYb%2BS1D897%2FiNpfIsdlKhz47wBDVmvIs1VSCCEaBbp4AmSJ6wpAJP5x5zgdUM9cxw0CsHp5FaYftlDaA9MbzVHweUEzPl5kQFLaxYwvkM6bmhArQTDwCrUfe8CdMB479RD%2FU4tEkSeUyWm0XGa3OaaiCIqiCia2Pvb6%2F&X-Amz-Signature=78255823706f62c6781b9a4bb5c28891e2a35ea627e88bd309ef61cd613c95c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
