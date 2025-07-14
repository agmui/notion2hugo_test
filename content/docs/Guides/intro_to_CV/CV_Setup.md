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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5B3UUR6%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T004753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCsrIFNllzyjvjw8rHR2LwxsoBQcVf7ObYuv5AU5xgMuQIhALW6uNZ7tIzMdcLhaEPfeHBla%2BNyu%2FTzIlLC1dCENntWKv8DCCIQABoMNjM3NDIzMTgzODA1IgwDuGaeURuzIpCmctYq3AOK3EsPrbk4vqIr97y6qZ%2FVh%2FqU0WUWaX5LgBIX2Z3gupFayqBBH8HsFhV7kbqvRZHwtlWdjhbCppZshvrt8sUBYC632TGlnGVLTiO%2F6iqkXKV1JKuYXeyPN7KS4uzpJIXjtfFqmLxRldtO2eBBj90uOE3xKdk27LLUnkGrzxlBnwNgWSF9NIGGoDTfjjeafCvV85swC2WNKQtliqpLtVz9Y69JTWcMHVvLX84%2BYUYRS5cF8E2%2FJRQ5TRY%2BkF6kXMpnQPmL17IoBxIxU9wtyjc7lofZoSyun5ppyudscqCg1ujjlD2LElY%2F5E5DcaeUqk4gfPO%2FhTrUeRyjkQXoHNHzppp3CPTmSj3zg6DqhOrFQF2ZKFISeoiFQFo60QucLt6SJBD%2BUfAUCvFivBmjNgl9QaqS3aFl9Qj0MejcDH5qY3Sit2BwmZzolhFFxK9AQfQ%2FOKvxW2HR1felGPMCvJkN0Pdisayes%2FA5uqBVTOszDGuHWj8CKJo9zvj7b6VwVWxS5RtMa%2BCMZBELb9vsif0RrVTN5xb5TleA9MkNILrP3zuwQ8v%2FHEyHSr%2B4I6oZyuVRc27Yrh%2Fk6A%2BmslmKSRlKdqjWOnZtQ7rB1Qa2MSem1W7KJNttF3II9irFNTC%2BotHDBjqkAZCRyMBa1UqazKojyxjbiGs%2FQlfy19F9M7ON9JiCZxWXdD45zNeiYVk84br76uiFkebhI1nrkMMpDnOPY6zSAgzFUMyz4%2FnOB2nOUukN5ZL6gJCx5u7911GEACeKtEz3gLLfp2z%2FLbTYcryJV1E7DyKKR3doBASPiRlZNeuJTTlI%2B34GZvcFdlXmBuE%2BVDO9yObmPxnvWyGtW8EsgEQu9Hp5cXvo&X-Amz-Signature=207553ebd39efd6c7337e5c272c24a5a3b8e10b2f223eec1f96e97f8923b5b05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZTJ65EN%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T004752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIFOBWEJRHfu%2BFGBx76%2ByhAJPJhrynLsxik9G0yX%2BPPXEAiBYkv%2BwDgVN1DStaQ%2FBBwg6uVc73QqH1FxgL%2BBgMoLrXyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMvyZnncl%2FpMzlJbmYKtwDOvIQM4QThpMPLAtmeau6G0FGfHzNb%2B%2B3njkuhrIZJc23ufHMU71xvM0K4CuDs9inhc5SHx7y3jpJ08OROSaw5XBwVeRuoA%2B5VppLsm7UOpbiwj7javUhKHsfZB2kYp5mG0aT3Wd02WaMQyfrXT90KpSyqLYL7%2FaAj2QnxsGWg1PtS4hFYVU1J30nkfX9Xal%2BiZayGutmK8338qMqblDlUgfukPBax0m%2B5mWlsCkBe2c46OGffGZLRAcxK3T%2FB%2FeUo85q8E4tqLf8yD0%2FvQ3NYV%2BY4gq2TpH4mUDekqBw%2Fz6ybaSXo8XaRMsM8LShrmBUgLOu54VtV2wWCOyK%2FgRNjhCWOIoG2m6N4yz0pGhTsILhTBgHvTfwBaMzdSWLrGKGaVFrozYXheIWO8J9orFGBAEMbOGuOchd37Jbzr3DnknO6FOYLRZ4zMk9Cvkw7DR2zD3NcIT1uOdQuX2uGFj36kNcrhd1yZcuYDYtQ3%2BfL9BRerH6ATrNC0wKYCjB2XPPlYCx82zN6ykl5YeNE4EvId3WYdksCWE%2BHMzyfQGdklLz8ESrZnkLtqnIy6nyLDR2UGVVQiK7J3wkbcWtLM4wPrUZg5Km1b1XV1SJiv8M0sMfF0%2BAOYbuwX5e2wow3KLRwwY6pgFYPz%2FjegRN1AwBSySPFzVLOE7ZRmopFzhRzmJes8qtt4wjXVAUnJ9GseajgnBxsz4cMN68%2FPl6NfwVpsk8GVr1VDANCLEjKZRhgcdiT1qezU%2FYxNIFkzEYeauQlw6W4eaSMq%2B%2BNM1cnhRNNayBnq%2BTIYfvxu4ODzGj9f7RG4oEfIdMVd%2FBMp%2FpY073yFqClnXUCJvKurWN%2B%2B5HyWFtEouXErkmDqOB&X-Amz-Signature=01a58421ea42691eed575de804eb91509dbed3f25ec8630bb082606b72560b66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
