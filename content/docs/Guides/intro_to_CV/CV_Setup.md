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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVGNZELR%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFi1JyT25EIX1XyYRWtt%2B9aiwhbAlVnkdkdxeGxXAHJPAiBF%2FepTbYLur9TYVA0qEReKYQz69u0htVVBL6qQlrNxkyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMYC032ftdTXjRE%2ByFKtwD6ZmECNhPjMpMdzmR6NzXVrMt09x55LKI3cwZw4iuz18S%2BwHT6gl9p%2BBU2BoHKhrIV3FptKVrbld6dP4NpQJqZT0IPiEaussEypULRnCFBgW2sy%2BXsysChuUFxA%2BEIaflmWAU%2FcwXjlNfEfF5Um5K1uRXPZsbq%2FE5oOzSQ9HyxGggZN5%2BqDp2vWNqmlRJzPvZvn%2Fe%2BTnqKcq6WapHqgJ6EEC2frkDEAi9eSpFDhwWsBNnxPJGCPd6sl0Re94ORcRFdLkLO9kkMLYmP2jHYrXEMi3i4uH18kq1Dwoys3tpM6qVMfdqEEXRXXgi0%2FZ47weHrGxErYXJ6sKV%2FlzjZY%2Fyv6y%2BtsGChlXklOw7TwW5HGXkB0ZxcQoK8gF%2FkJRsBOAjQfGc2SENnLBpMtbVPvPnbeWuGJ1mqfUt1jgANTK2IcgIT7ATAyHGxgxYezqnLT55vQnbe3lIV%2FmOIDOKjnmf1vkz4Lc1pS9b6%2Btwg3ZBq%2Fhn91pVedxg%2BHZCoTwMZSvCh2sHO1cbTiGFfa6UbfSrJLfyg%2B0i5yNRfHEfPtZS%2FjxSv6zp83qDqhl%2BNRk8rXNxCigX8IvCdxraC2CwrUxtJetTszHksgqdCN0JqG1XKT3I11hdAzqXvIFQJWQwx%2Fj%2BvwY6pgGT54tD%2FZ5Cr57uSupqCpifnXe8ZAOlhFoRFdfMRy%2FYM6NvSdtU480SDzdRu%2B9CRfSTJfuqFY37uOXiOl3ZaBvqbxvUftRwhj492%2BZQASGn%2FmcDeE5mSJPPSt4mOs5%2FxSjazTdE%2BNq0XIVz4KOELiNdN0oHINHYtjHlfHZL3bNUElUdNNoLUqGQ16ruO5pSzUG%2FV2p9D2JtdC%2F3%2BDJQnyC5C2lMsBYn&X-Amz-Signature=ae0719834b93d03c78852bbc1a5942bc80630281ce502ecbf893b30231ce07bc&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WHO7BN6%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJdaZvRaDEU%2BUvhttlIzFRwej%2Fchc1eCTCKke6oaTq3AiB8cId%2F59twDE91soWmeDQzxpOlrAMGb4srwTSEJ%2FVgJSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMFjciDZkAM4I97D1SKtwDOAB8GjaVvNAVq6uERv58oQFUkBQbYWKZd62Qb1K%2Bb%2F1wQTgH6gkV22qxPJh37oIA61P%2BQs2%2BFqJZLTJV%2BlxK%2B7WK4kijoDI4cIIqAsN3R%2Bq7NvY72aUyipU2X7Uu8LbMRuDF252Dbyhkpee1v64OYrLBtWQzS16JP3vwJKVyPp396gH%2FPyYFWdbNLJPgzeApQmmXZlAYOvav6KRNzS9AJox9dwnBJwbGlnZGsP9Qd5msamKpWbQ9d3NDFboreSFfek0tr6d7rmxdyALd2WYSbxhTxWn8NkpyGjQ7XwyO5JRqbwvRQ06EsTjLDkH8mcwVw6mJ7gb8RG%2BWWudre%2FJG8vmtAQB%2FNZ8AC6KfWyp%2BTuK94DIAcbte4CEdIWNruzQYcQrLJcHiPoolwT2ze4oCebibQoD7CZk7Z0kpr50KfsYzFizcxy45jPPEp%2Bf26E6ROv0JDWPJsdy0kioxr3kSHmGBq4k0NsDgM%2B8tLIMGszUUwfeY%2Bp9L97IHSOLzXMlJvQ7KWjlFt45PlAGwbCzMnZ4arFCyrwWTdc3N0Yvbuvq%2BiMTowfnOMPl%2FRd63qT7oIpTkCCpMIKELKpWsxtF%2FBYWvpOSQTUDzzB%2FJyY23XNV8VTOYlnHyVtDwV74w9vf%2BvwY6pgE5KgmpjP2AeU69f8bcbfUYoSWeIhw0BTVTaEkPRLh%2FFdANxi8skg1dGLQ4mkwz1Pngl3omaQPQHWQrUxbkuFa0kZit2LR3szL4il1IAUuIhwHtxtUITTNHJwVLNYb6YPt6Booy1TWrOYcmYf7%2BGcz%2FDYqTiSRRdnvsAQzRlnWTRdyu9Vm%2FFMhFwmYmU39oNetXV6PbG0%2FYIpEueEFPj3pKMw0XtIpv&X-Amz-Signature=a23b805af5905894ef667e20809efb5f7bd444caa9991d30e8f5cbaf1661a0e5&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
