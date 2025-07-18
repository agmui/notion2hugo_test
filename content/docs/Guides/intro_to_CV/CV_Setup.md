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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOIYOXDN%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCqoRZdj%2BwFSfDNWQkcirDWUey5ayOtfSkWq%2B2Bh7JIpgIhANlWYHhVvlOaXKC3CHhQwrha%2BfCmUvqvWn%2BmZkQQ5O0KKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcXytZn4N2VK2C67kq3AMIf0%2FaZKmQNoguODVqEbAOx3YERe6ihvZnzQTq0UMDp6Mndfm9yi3AT2fKR2d9lSJvbP%2FYgaMMO7YCmm9dSNm%2BV0C6Xk1xKNimwqcK4ZK3UbdosNYj%2B3PcSjNr1xhOpkwLmdUHARjufXNKtHpHFvDuYhf315r92IlBO%2FxH%2FDOWypsmn0oxSjVjegRmlizaEj0FIZEIJiFnhAMr7xErxkratKvW6%2FjNsXod7bz1yH9juH1IQnDEFIZ9RxATz1B9ISBb7F7vqP%2BJY%2BvPxGrAkh8NCa7iBjRaOzC5u5oyT8U%2F3QS6Fbw7nyVrPxNFdn1hKWOf%2FdVIJAcMpRWQe42GbfkDnIxRcEptkA9tVnuKlw0v8zY1HbSf1AtilvNuEUldLotPNfTZwbvGpZpEicVL3HiQVkNDgChDQDVgXaVr22gt1XGlJlaCLLEFnmouFSKN5%2BKb8qkhumdJhS%2F3I9byQoQDWVxi2Urt842%2FdV80VJsZvROUv08W6fotIoBZ10rXg49X%2Bme4cDXAPqJQTtfgXEiYZ6NWCM5o94frhvOrOVTsgfCiypWK6u6ucsFAFfyHY6gskXuqKXSUul7fsQiWHdCZm0rwMb3m96gF%2F9hEe5lsLJGnPHlBociP86JYRzDGiuvDBjqkATNFW%2FBKymyDzd0GUIleObFGp2PcT6YNie3LXP9%2Bp7t7ReGFXzGG3ZQzrbAIZa9QV1cJ1frq%2FLqcWBMXPOQhevmQ8r6%2FNAtvnAqlmjSml4fW%2FX93eukgdi%2FuUdSGyZc%2B6a8Lppt93%2FHcksJFh3RXBj0UxvVjNEnT6LKxNx7SDWqMjIJHtAPz8ZBezFTW8MRxzZqjPCbu5OrBvLazwEYa1PF09NWJ&X-Amz-Signature=3411d36b36014e2dd80c79844b3dc0dd3c444b3fa3e0ad52dc94926241adadf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWGLLDEF%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIBK83vmW7mKjfgc9y2VVxtUN2lsZ7iqTBpqOuvxcShR0AiEAhqJrDvn5QNLlZ2YQrC0RlgU1bTDKx4l%2B7%2Fcr%2Fr6ak%2BkqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjz4FlcWgm9MFDBfyrcAzfu4AQ1t8MUmcpijzDJb1EeTjW6MRXL4vK%2FPTpRo%2BwGjRauS5%2Bf7mBYgPPAjhu%2BL0hRfSF9jU2XqQzUmuuLkZ57gr8wgGN6Hz3wYsFUK4OKIYfiqGZmhhfcYzB5zzsZ%2BfoNmOheB%2FFT8UUxl01BRos1LBf4rgJhuVCdrX4tYE7qcgnLeKrQyJVNlYqwh2923Mdgsi39WEGneOb4OfrHDP5%2B8FE1BibSbiio%2FZPyDP%2FCN%2Fmra3kw4p%2FcOD%2FqDsVW5XKQZdhCvyDBMgS6%2FnsN7SWiXhqHVthE2VAFIGeSJwUxVf3D76o65GqdNfb6QZeT0K4SD4r6H1nodiy3G7Kjg2rAoI2xkSRbR1yD8N%2FlvAApAvtIRv4xgB0AQYyOlxdgqny51TvR2OSnBYq5Tpf%2BNTqJErRmpxWqeMLED7pbUbZK5SEyc6YDQnoyAS%2BEMJYZYNgP85bklyY4t6CP1FD0cWv6cUcvoklrcOjt8AMe6s3upCXC0k3FE5XPVbq0GesQHop5Et%2BKl9cjSqE%2Bm1BwMsrNe1TkK0tKA3qKRkH1eJkgyoBcVK8hDoxnuRQGsayeQPNLmNXJNArLRLzrzHCm6hRkpO7zSk09YpE9MRz2XGbGGbXEjmSfAT4HnefCMMWK68MGOqUBTmoQX9MTTYckjn36ODeKYqPQX3BBUkjkzcjLeAU5FDmGOkTqmG9YOiTeC2PL4JRE8Bj7cEq2zo0lNYPI%2FXTQKglMGoNUH1Ks55QY6%2FpAOj2PE6ftY4Iyc3jDYWxq67lrGLPRKW3FqLVDfe14PAFKHaxMqUHHS3zB%2Fkr2Ht8T2f4DdHRsC%2FWrtBdAj9y5C%2B0CKz%2FCjQfEYV0w4neBde7On%2BlISCoY&X-Amz-Signature=98ae72bfd9f84975f9768df786f0c322aa9230344d924d67969bc6f34c3d3b0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
