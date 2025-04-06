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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH3OKOTY%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpRY6%2F5WDeuHz3mAerv6U02Of5U6VIa1z63nU5S0lIuwIhAOwbLxeA2iP9dtu0%2Fusdms6MQUGVo%2BcN41Gce1WZYqk7Kv8DCEIQABoMNjM3NDIzMTgzODA1IgwSKf4J9xikUt2Qgssq3AOEeirQubb14gKfuEWq3Gwk8Fc23mIg2Eo%2ByGVCKMa5aYKNfyn4RmGGTigz3w5dTqlofreM5y4b1qeDQKqVvu%2Fj%2F%2BuejU%2BiIm1%2FWomeopSVLQGhQubtt%2BqUG1m7VU3c3PnpcVcGHMaOnsOX88ag%2BfM5SbB1ECexwZnD2MYyeUI3qUlFTg9hykcnZ4ifKPd4fUAsDmJR5Cr9%2Ff%2BiXJpRvUVq777CsIbUy%2F6uBeIHCGxpRC9NBsj1qXxPa4nW77JVaHPUCbGCpTOhfwWiw%2Fbza6PaJ7CXwQx91WVhxyrtUpbR0TJeYjpp3HGaLCL7Z0NZg0QmtiCYMCmLkAfId56%2FyzzXqnbiw47pz2%2BFJl1dAFjQS34zz7W7twUfAXpjNoiDGJmWgtbJBf%2Bb5qsvH8fbu7fkU7ScdxfT6JWymEHS9ckxA%2BjkaBppdtsVbj7DXIXSPP%2F4Fuj4nZLlaqva%2BxUlpbJW9onepLXvLGCyDaw%2FZI7NWvxG7W3H5IxggdyRMbzYwkI6H1F0WWL4Q7PEp3xpZWaxC5GF5%2BIaYtLVks7V8qUSNOX9nDryWpI3KGGgCPyxSYqFnWxehoP8HIVkM7At4Ydhkd0%2BBpktrqOggUt7PhgZv%2ByKXc6tE9o7DxmM%2BzDA%2Fsi%2FBjqkAcDjiQnVWLAqS1PM04ltuM7FJhYLM0QFOeevSO%2Fz1u4HT61RiltLQ%2FCzBQql%2BkFbT%2BuL0zpz3yrjVz3p1un3wBqja1hQ7NEE19G7g0BH6Exj1ShBvrQAAe%2Fz363kX%2F79M7iVm4s7fiJbduwqbMImQj9WDtLDEcnOgkxsMURTCdI93EskK%2FFvR4nE%2BPKhigw7qYA9ve7f5btCjrkeWppg37s7%2Fu%2Fw&X-Amz-Signature=f2c12a06801f6e37a38167c3f4f607b008cc68a1a9e54577711290d40f1e7288&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYPZW7VX%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCJUaiH4e5dhEONaM%2F7r6ZKebCf8aBAfqhHmn3v9nVHwIgKcmIQRwyvuoFrWqUmq3kDS34rJ%2BQU1Sojc9FPUtHdLAq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDNlgHo%2BhKDogd7BS%2ByrcA21Hqu3JFECpOc%2BxJZ%2Fbr1qVSaMRUzRRDx3siA3FcrCCdQ7I4H1MfBMGu6AlOrQ%2BXdmLuGTeHbOcgTklmXoR99%2B76GSj3ogmSvxOBVZonNCrcMkMyfMJy%2BEk%2FksJYKEGYem%2FtacABgpAJwpkMS%2BGxtkUMMek8COZT8s%2BucfkFSWaWRY0JS8o0GOhjWqOFVC8pVkP0x6z%2BUSpC%2Bbny8p%2F8K8kxs7xkNtxZ6EWzOf06UcQ%2FlawkvL0TQ5zLUDS61kk8ZI56o2sDVFC%2BvAbmk1hCnkfiD%2Fz%2FsOoIfafKWi92B8%2FoL%2BMOUIbwYL7ZZzKEyAcB%2BJvBTY5rZlfsorQkYIvUWuBdiuKxUqCSrKYWZLnTRUoycYyYYopTzkZuQ8VWxT7ClXUWX4mUELaSjUQlhnBm4sts9f6Eev4xvwP6sEAXyLUomuPmU9p%2FJBKUNqsDRW8btrd9K5Su2fEuVNK7KAEZRaNxXTsarnwgWZj10Hf55dtt9mMD9WkZg4iyX1tF16m3hvrlzBseJp2veOnoie8bsOhumWyfnOmzNT%2BsOdnbLgFHSYCgnHKyAj6mqL7cpRrEOiJsxdZfRPDoAUaAfL2hBoxZO6RC6qc0HNd9%2Fi%2BlZM6mJPmLFoahamK%2FWXTMKz%2ByL8GOqUB0zI4AXA7VTyfAU6qK0YgfoUxMg9Xo7mEb1PXznD1mq911ydsRuVKn9s8ue5L0TSDiiYs2ef7W%2B2yQTltD3bI1kSuTBRBYQcahGn3w7pilIwy%2FHMon6cLTxhsBbo0DwpuSZ1P5kwI8%2FCxVeJLUkTqAdc82WS3kO3GAVdNKtFA99hOGJ8GmkB%2FtZsDRaKMnKXq84mrKzPbb%2FGajeSi0A5mjcLJERbw&X-Amz-Signature=9a1913698cbb7d9800e7e56f8d8ec323630d09f414eb2a38de329acaae9b48f4&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
