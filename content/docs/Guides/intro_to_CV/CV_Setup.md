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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAS4CF2F%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIFJTQt65a2e4CjWt4zYP3959BUjtiA8o0npRDPnnQywhAiA29HZf1T%2B%2BdtxtP0KmXALDKiL72xc27ilgD9NA%2BwG1%2Bir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM0cdFcYzct93dAUDnKtwDuqI36gEV%2F%2BdsOk3lgq9AerQ6jHEZtMNObj5LS9i1aX5gov%2FiD%2BlJqYCahQc1osC938a7IOyoHMaF6FtPZbAcllyAvmyN%2BKmsMCnwVaYnzJB5Mgslm2JrDHAW6Vqme%2FOuW7Zf9fyVjM0iAolqMQ%2FTdnOSosFezKubRuholyeeRJpuMigmDpw72t4d5x5UhO0cfXw0IgaJ1PYBn0C8tMwugAmTp6KneaUq47mThTnpUqMxd1IB7LA7c6n1Zf8ZfrWiDPIBk6xpkq9jOHgyj77adF2V2BDnSRJVB7amM12woPTTq%2FuuX0BPd7YI3mVX0YhMF60Nxa%2BIwLnQre5QfgDuBKRNVgIW067MPd0zPS8OzT%2FmjxQYpKbTHzARQSd9RBXMF%2Fp0i5xlAcTEjCy9aWOeJPHhRAj00mWX%2Ff8hG0DsryJkbKJNJ8UFzltpudTfhMk3TjYFBlj8Tg0gIada1e42E%2F8vZV77i2YNe1RGgg3lCKC%2FY6lQ38QQmK%2FE%2FQYL5ce9wNBK7V095GN3CY7Z1Z4DXT3KGGGzDxNcRQuCjihsBeOnKASmauG2n7oqimRilQCGGuinQvUb6PcQNGrs3faGPKgXVk493wRoRNnOdu%2BKLrgqKPYRjBN%2FEEjVYQow3PqSxAY6pgFyxzGgLsXpGrhhM7ifX5Nt4AH1q3xW%2F2VLYaThFHdQfApqYyDAfxoTHZ5QaRwN27YNt1%2BQbg%2F26v5wnYP0cNndzF8udGWwnsV5xLe%2B3re4tmtrBjeD0fzNSgNLeuYOtgvsPYxvFqbfpNtFWk0fHUXzYlmUlL%2BHtnCj%2FE8bwvVhftflAORGDB35Ou7Dt%2B73XKgrvdDTWZJfxz75iGPxRnnc9TAFgTk6&X-Amz-Signature=67d1e685fe818252766cb88fbd7934ea8e34ecbddd7be1e9c389c90e7b6262e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZE74I5U%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQC%2BYhUs%2BjONVAac78f179nvFudxMrCI6r0Ns8V8IwkQHwIhAPcA9Id3W7nCPonUPFeL7rU3of8KCAJ11nIaQJ2L9NGsKv8DCF0QABoMNjM3NDIzMTgzODA1Igzq1FaZJAYGP4NCb2Mq3AN6Nfp0esuB3xWafwx2%2BQh2RdjA0AkKHtt7GyATu4Hw4mWccKgipl6%2FBRael0Wlqsqm4%2Fxgy4ScMFktcHI7mPsBVE%2FNa2%2Bt8uFxEQ1k6zNmcGeOnT25Pvzv1FRgXFP%2B7vejvLT67QGIdEL6%2BqX6dySlf7uCWfd3gqu0iL78Qa%2BmpfNFSypvgWqxOBDoOQrsxvujU123Wt4rGzasKCR96uNYHSyvrotRVcEZy6OC843GG61ZKhZjNhbC4KUfxlBP507mCi3lc%2BKVe3oG1HSLY0dZPfSXw0DkxMFe%2B14HxiqO6w%2ByCiUQ0Xgi6Ay5Os3UjFTpXUDzO2jjKPAVHEAFeU9NCT5Y2biJrgoNKMqrJY48KEj%2FonLRmZOjKIp32416dy3yVhLjNlbkO1RG9yE1%2Bcs6rck%2FBkni9sMu0%2BWytQLyC8xFQNnRjGzSf8toYgTNSF1xfgsO8RPu9eRhxLnZ2GLTw0lKIsYsbTyhEEaslmbd5B%2Ba47Me6ZaA%2FjjENXF6oREqFe7GepPl%2FoWnIFkmUnmZSLE3qlCEn6g8Qd5j6OIZ9%2FgCKpxDJk13FAuZP6MJpeB3RpUWndPYHtq56DRX3bVA3IGXaWfMhSXd4yoDtSUzLJGtVTAW0jvUH3BiNTCa%2BpLEBjqkAd%2FKpf0ss2TsuENQ5%2FSQse7y7s%2B0iRaPbQtCrGMgJYKt8Ngq5a6Jp4sYxRSu2qIXdCWhy3n3I0UEERiZm8BJ2zc2%2BsLUjRqMwtOcE7MVtKX047qTp7U76lyMGnqLOxGhKB42Z79UfouNcmc8NqktBgPCUllfx%2FsAnxHfwxBfvktISkkCgf1xCWwqkujWAhRxe6uJZGOuV4Se8oVJXrd55tp%2FZVL%2B&X-Amz-Signature=7d2e1d9a438294a84096ea27f28fba893012229a71cf2c925e7960d423a44626&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
