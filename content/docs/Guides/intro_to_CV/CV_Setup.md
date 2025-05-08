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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGRFN7LJ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T190713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyMN94Ys2U0aWEtHy4mtiSUhFMGG3T1y%2BsbFJjeOdqcwIgfK6HqjlMfO%2BWMLbGRWMXM28oimygNw4wqmOV2BwV3U8q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDMhA6%2BbTR%2BynkqXKESrcA%2FAOPSK6Wl3PM9sxRtAfcrHJj8DUnNcsc78u9fdGaF19aB3CvX%2FxEQpBteF2op%2BxF3hcqpMxgnesCFe0w8HfrdwoILHo9ALpeMZFkTVFMA6NFTXQfIc5sb86%2BkUt6fIUXemFEcXJ6%2BVUPY%2BRjs4gG2wpwIGPafD23OYZefuo0ghbLzqYImHNLluPEn3FytoEIA0l%2BjGDMaTuX3vF2d3NV2iyC98PhCZlGd9ltKMo5IfRftIMB2v2GLwtX06PSHHgYXp5VpakkbrUsbgFqJnFkOaAHjqruLMPrn5ai60S3h7uP3jqfvBm2tIN5esGMhaPoYVu5R7UjukJOw7EC%2BHcyBMuYMAqksw22TBPm0hl1RW6ZSaMOM1qEcDFw%2BgHmue1JYw%2FwQzjmtPxHYSlCcj1HLA1sN%2FU%2FADe12hHFhcGQIn5%2BJDiG8q9%2FAgS3%2Fk7CddLpweu8AXi%2FRHE6YJgxuYSoXle966Te1aiHw%2FZzj6NP0JX2tx3vtJFUwMGAnms8GL5YR8IbOd1z6SWrrpuU5kJktLKO92Z86RysMNQarV%2FAd1goHngrVnqKx0wQizJtH4593NYzxBWitC1F8PtE6ytC%2Fp0E4R9qLEN4T%2Frr7RWDg5iwenCFKZdwJRj1R2DMPL%2F88AGOqUBp39Z%2FXDAQYkqtFPyx2qay1gzNaxyCxx1%2BalPT8O2bmjj3l66WtDCoBVFE2RGgkeyNxdbfr4tJsQB2y6vhtRkvUtNein%2F17v9TI2vqm5tGzEGXDT6hK1aVsIFahCZSkD8hv7P0j%2BTsaNDx5A8n4TkhwkATb35CdFimrMpvWncjERoGLwIDw8O0yHBy8ie%2BWj7hVa8LlCOwFp8rU1f%2FjyA5tJS0g5y&X-Amz-Signature=ff999f439e4246504c18581963dbc8ddb0edbabf830d3534d4c66c4bac9ead19&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF7BLIG2%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T190713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF2sYUV7ZzK42nI5SfUhMmpbs0XQwNIBymMPM2g9L1KwIhAOm8P51Wz11VJqec%2BX3ZVAgdgSOUkWFQMbxICyIXJnGCKv8DCHwQABoMNjM3NDIzMTgzODA1IgzKokzMagS4D2I9GcQq3AOe9VbXoWpB8Cmhst3juoktkc94M2Z%2BfRN9g4hTzSBIq6Gu75KmEZGnC6xGzTigcLgA4D3Mxhl83ONz7UenYvEeIjpI%2FMe45XyDY%2BiX%2BNpX%2BIzarko8h82CqRPTNVGYERLC1%2B%2B0NGZs5uVsHGrTcyyLI2pXLSLTigvRtspc25HoBOeiw6Yonv7UaV2%2BXXoSJSmhMXaBXtNUxMy0bKFNZXM0oxHuRF34atgi95ThLTHuHRZN0E2BVd3Mb%2FO1pOPyOJETeNWwkNqhfu2o6b9oUA6mc0NY6zAtpcBBROJKveVjGAIZnARKtPXyfmNy11D7%2FnJ3xlVqkOzAPxjdqcQf3SWRx5BzqZaQdvBqQNcv0zwRrhEZivz%2FZnbjZqHSZh%2FhA8zIjnZDQNpGY4xorRm9r99GwuVe750ISw0m0fQEoTYpEmZV59oWMYKl8151biHYFkG9NqodusFrih31x6TtGhICCcXRPcoxSDGiXJFyMUsIQGGCGPPA0MKvxpAhMZ%2FGTp%2FRfFjh1072dlbODiUOBENKw%2FpUr7yag2ZMTZkPVJkWpOYMbxK9kkUnP5%2B7WioHZ0XK24gwDDaSJ9aUPZgzAX5ELh0t9GfGWIF2%2FiAR2F%2FHD26ArJHJaKIJAzsMYTCf%2F%2FPABjqkAR6FNSjJ%2BvHkUTfY5t4pN7enVpbYWKb5W4uSps4Nxx953NvvkC8J5Md8j3U78bxMT9nPSZa4Omp3xhz85P%2BiT2tJy3AKUsU2MxQBptn6OKYmtkouUBR3fRxnORc3qF9VE9M78R7yL03KisSu2y%2FdReT81eBuAozqK0t44S25NssRcLSBWVxB4NInh7swCY0U6Okq2mLqHz%2FyWRDPOha1ctmx6fi3&X-Amz-Signature=73bca270a3b871e42fcbeeb0e46f653eb73b35c0835b1637bc6fc94b42228299&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
