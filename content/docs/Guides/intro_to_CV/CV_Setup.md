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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2Z2GA7I%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDTkGQ%2Fk%2BpdzuVt09YQN6PKh40b7H4efR9mh%2FLB0eEb9gIhAO46ssLN2O0lIpbS8f%2BPsY810ZEC%2F8F%2BS4ij5GS3Dqr6Kv8DCBgQABoMNjM3NDIzMTgzODA1Igy%2B7AYtk0S6Lz4Mtdkq3ANQvVW5vb4WQ7oyPkvDWonXfFUDbn6wbEMaE3tcDv%2BktP6ZT9YfALIwxQeUjoAmUsETr4vbkQyfwvLdiEW6Me2hblpu8XdvB%2FI%2BgHGmho2yFjixJuqfXteU60nLUuVTzoKuaDlOYQYVu8b5isGIZakVxK9H4VUy5k6ts2iazCcEPGL72evHDHnFfhBBM%2F1Z1zAQanp3i%2FJ3PjV8a5BrPZWEBhBUierZybVNP3SFnUgFfFF7nUKUda0eHrI2f8FTqFfsoIB65EE9oWKUhgdbcQs5arIRfzA0cujGbXWDmxfYBbOSHwyg2vUNr5fcme8kaQq4Ty%2FXdO2xH4NV%2FlPA1RCmI6dS73kSJoY7K5Ym%2F91vudoWkoMfrxulgfF2wOPAKIBB7XteSVCHCaKLZUMLl%2B9NM8VioB6tvD6waLFWjmqbkjo5%2FiPZVXSVoScfoNwa%2Bim2Q0v%2FxrM74qGM2FdjlzS55QEq1ln%2FeT6tPXfGmJX%2BlNt4HS7s00HQ%2FuCQ2vHX2v1tYqiaRNiczCWufRvjX6TqvVSZW%2FisaENC4d4larP%2Br7kek1p9BNPJ4anREJi8FQF5lLVzkJt6RTcY%2FTCnj3XU05N5kI4cHEytPPErXwdecmQm0fmiQlUraMcdaTDhuZrDBjqkAWbB3RgMGl8S%2BLrWWSZRp1cbbARbDDEAe7UZbVzt%2FT6sTAVSZJOZ22UvgV47zBvS3Pq2ODlidXZ%2BrCZ%2B72OQpOVZT1dIvQ8LnRlODPChhV2AE%2Fw5dDuQLQoixf%2FiP2b1rDrrABSRFx13%2B5x3Yw8fz7YcIHE4QKcmgcKYEIX7lKptwvhTjoc2i%2B3RsMAZH%2FyTlUGzWWGoO0TRuhGS9xM%2BBG383Yza&X-Amz-Signature=8dd1ace97b8ae9422292d4bc7df3d5bd0bd60915192a4c5743ede7c348fd90fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKESKJVF%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDYdBhfnku85Mw6TrLzHsIgKt%2B5ZQTdkWNGksoF9mGwUwIhANcdGQulax1tBU0%2F7xSC%2F%2Fd2nr1VL%2Fb5A9T%2B8U5%2F1ZkYKv8DCBgQABoMNjM3NDIzMTgzODA1IgwtqcGy4XQ7qWRyUmoq3APgXtPodqAwfNIItonCMSHZZCT5vQ2gnrEz33kRaJNu454CSeLG3mJrLJZxzJqUDeaBSkjXu73fuCY2ael4IFyLk66pWQHq4xqFuqSCxh%2BuRK0aQioGT%2BjXNlp5noAnTk5NvVowo6Af%2B74xsOfH4gYI3eTXM%2FwhjHPgiFLznzajywo9kEzCloECgINt9ONMIvmFDy6%2FGZiajtdNKl6QenvW3eMwAn1f%2F71%2B3cD5CCoHY0%2BkAEHjMrE%2FMJ0ph1Z7y1GNy0ZHK3jfZqxb2QfQLdICXpWuyU6IuV4RLS%2B0%2BM6WENNUjbwgo05HTXvHEscy3hXZgrRjJTu1JpDVdcuMkHZ9ial%2FXW0H1NF6ZewibLs8GBbOrxa%2BXn8esmlW3YSSzOeMAYfIGbx9Kq8jWEmiK9JgkqEZuDT1%2F7P87HqUN%2Bl%2BxImXWDAvEHIPTay3y6WB88CmXBYDAKO18g77hyvgPDIpH%2BVD31l%2FQdORd9YWJ7FdFfSuzjQmfOM4MTrWGwdP367RdYPt0fL8%2FnwlpaAQ1YCzd0LG3BhTGC0tn00gyMSjd0yYUcHTJcRRPJHPBNB3NUodSrqfkp3Q%2FA6dYUtU4gJrIdvRx6GMJ%2FeCMrHDzqN0vx55s7Yn0Sxm5BAEzjCHuZrDBjqkAf2OewSLAeLNu%2BE%2B6FrU7qnLmw%2BsrrOjoMi9ENv7EGi6JCfIIywngj3Ni8hH8J9WWrHyCnMYaoTwgWaSd3LKE4y%2FvFTnMwD0M1imJkSy5wz%2Bp%2FFjMOpEpf9rxjVsuq0OwuDZSaW0%2FvU3MuS01xwGhsNuTcgK%2FWEUntM2%2BbOkaRWIATMfGbQR1MD9fF4DeoJAW2iUJTXFP1fKbNmWfIZ8yJ5DiosL&X-Amz-Signature=775973ce9bb3614851fb3ff4f8e81efdaf6aab43d4f36177be3374fa422c3d20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
