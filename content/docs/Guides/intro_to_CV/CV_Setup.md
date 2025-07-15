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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYS67RWV%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCwtHEuX84kzBj%2FwjnkBd0dzl49cLRilPqWCqHjRzjEhQIhAPnUxgo61a9%2FgIhK8wOWSKE%2FLs%2FowLV4xTY05hoI4TMzKv8DCEoQABoMNjM3NDIzMTgzODA1Igw7zhTUjtnA7D54muoq3ANg9j0SSphTFYssDclwhmFaevTRXst86WmpeFu8TE%2FuZVh0MSam2gz%2F4%2BTz6I1Gc7JUKMA3GabfVsix07Ct2Kc57%2FZcvQLKKwJkSVjZbOYLhTBRWZoAa7cPSSHwBALIOs8x%2BC7RG8cg8FhdpQMKQQ28OHmvmP97pVv5uX9oDPG3Le7c6mGteG0YCkbCmxdZ7CH93HSZYHzkzXYGtxdWkkzwbK61oZnB1qa5jgtJRwygmtoRxn8KKVdn6MvqwMYU6De9ot1KC0stiJJu%2F9grLoU1autZd9QvErJ%2F5X7JiWCZcpPtx40pgmGlcHgQA6VyaOVRZ7lhhokV5L1%2BmCVc1scbiVgSXZrphTQHH3XPKbWe2N3KcjcZP8YkEI3RbWCr%2BXvCr9T4GECHF1SlL7NrCARFR18o0RPQYBryBPB8HgygtnWe7YF1fTgylJQCbg6MvNcASPMJN9G2EPjeaKaMCtJr6PtyGEHGyAOHp5GDUlVzxPNSvN3Lsap1oxWidtVC6Ao6WqgoQdTXUhBmeMn8g4q7T74WsRfB5RjLB98RZFeP1Sy9EWCcirASCfe3g6nIKR1RFuDlT1h%2FWAf2YystpzH%2F4wC8qkQWUOK3mTYTshNqjf4Ufakl9O6y%2F6mIBDDrhtrDBjqkAbEV%2BOSmVoz5cFXGPFgecOFrfIa2Zhg%2BjFSeVB6UQLp3m4ATLoBnH9zTrMohUXl3K2o0Sm19Z1bc9UTMMZ%2FTZfTjlzCEcExZBUlA70ZjRYjThIPY9ECG7AJW0055XlQyN%2FDpJVKvit4i5WmIlqvY3U5%2FCx6ZPcidZqLOS1ZdOXIZizNrv4mvKOGuni7c6BKrNibelqCnNfzsuhdtjXPg4ef%2BVcPx&X-Amz-Signature=873180202e3a03dc213a88d7581c8ea9585e1e6a4b51822d3874c73c49057c07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K2QXGUD%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIFjSck9yxq5%2FiOIHac3W4m2rgS0bFRM1DZ8Qs4%2FLnWWGAiEA1TZC3BAUzh1XXkuE67a%2FPpc5hdnVkqelUABNuVPrspcq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDF9EId3aCWg%2BHkAVCCrcA3hTJo6u1eoXRDNml9FiVtO3wiaWU5FtwgcSg8qQELGKKw3fQxLtw4n%2FIXPyobqHxIRnrImTQDgYxqu9u7t8fyT7YAELZhPTZQ4SSt%2BPIF8SaQRqK6uKKxFAxg8m8DIVfOhD1d2fv4zzOd4PjA1LgvdZa0dpYHK%2F4SNaWJwztbcarJkX9CosX94CfjzEoZ4PmpEDDsIrgkKQ1WEMs4Uz5zJ1BeVd%2B%2Fd4C6A%2BrM1BqpQ0J9NKZFlXndAUAn7e4RjGEfiPGNr3YFM%2BUqcXvYkD6T0gJisiB2HW4t8663jGtlhp737M%2FtRt38pkV8TCBMymPtRmklNMpdwmJPr2PtdGXCT%2BW9F9lIxmh8c5HGrrarzInP2aQ7%2F%2F0xmNbEAhmg0kxgxdD5dz7UeFvNow2mVi%2Fz7n0hl%2BQsZmcxkVsoGGBr9S4e%2BM0h6DYzbOy5WcpZ94hZEvq7XhmcmoEaF8azEHsxhO1IlwoIQgNIOdUtmoXZ4KPP8FqZNAhY48584fOzV0LJ7P2LM12LaY1cnvfb7fRF%2BKpMtlWen3K8tsi8MksycYzLYhnwYvxUJS5Wqq4kWFfkEEF4eXWrjcfNcBoIPGzqFYRYpwN1d4e7rb2936qww2WmjN70n5M4wKr9CfMO2F2sMGOqUBDqSf8KuRKIkNqnIRqKWAFhdRajKC6OkD68Vep%2BIrnnCbEBOgbfvMWv13l7TpvESNLyE3mZWP8arCDyvHF7PKxhRKTqCCD%2FQN5knWMRJGe%2FjhyEdnyu916BEhY5GJ1g1E1iImXQSeLS9NYk6bQPUeXoEmdNEuRRoSS%2FXkIR2sgTAjIDk3bdCKp%2FSA0rM4QIhHW7hf4uZvvWWKJ2kplic9UpM3nR76&X-Amz-Signature=66cb46345d0c93fdcdfba47324f4f3323ebad697840cca24d4db2d84f6045f16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
