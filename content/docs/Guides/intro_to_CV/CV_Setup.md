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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZTQZL7X%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIBP0p%2BnqiMSJIWcjYLiLAKDc2mYqOX7yfWgadElDQ7cNAiEAnig8JvBCOYzUOPe1Pa7Vrii4NnhwvSareHei%2Fe5x9PoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPCd78K0XJ5rfMcvICrcA4pYf1uJS7AGqAenPTVXgZGHPacatkQkfViKauRkIWZyrpHdyCE%2FlslIIlyq5KXNJHMnTNDTpxXPmchZxNzUbEZoz4BINFAcPSpkwikaYRMOjIpCz8rYBxeF5H0Q%2FvST3Kyjd2Mw554zdaIibYOdBG8KVerp%2FX9sBnj0PEzIuWgWLOEjYlU%2BHlYBY1LO0sin2SVXvWBEwB50hTtJMkcZAj%2FM717YYDkZvLPPd5zBUkA%2Bnwq8zylFEiIazosfakfePSZFP1SowZ%2BTLqVgedIoyyYGQyRXsnieF9SWf07fM4b7Fim5CuSmrzx3%2FWoDOxDUwLy4J0ehcyv3uKMvM7EdMJ9zMU0QFvVBIbdsbfrOoy3Gr6UmepzbD1SKaYO9Y%2BYlnKQEk37mhTSZ%2FTjZQMM63gEmR45OYrP5EcpVs8yF3KcMaHzqMOQHZ3mggPA6knS9Wd4xHiDxoAhhJRoj7HAYPI7LHjkJIYZK1fbVlcgsu6wMjX0RC4KTv1K3zoPojRa%2Fx%2FWXWiCnt7dyRYjC1l%2BKsLA5K5F8qy5f3XDIcyV%2Fd5zI0uwgO%2FfWVyIR4zPn7DWKco10XBKIXCyIiatgh7Onp4CRnjFHu3VI0%2FDdfCEbq4T3DKevxKq7Xhq9YAs%2BMJqxosQGOqUBFgwet7FLu5oYViBdaM8UQNKTGdrnSF%2FsKkN7krhW2ws1HGngn1z1Z0hDXgb4iRxlaXN1CeCQrO6su0jDkR%2BoisQN9brCirBwyawYHr1sxjjulmZTdafdUN3UfgjQAOF164ess2LZHf%2Faq%2B18r9eKf4oDYYYlN%2F1WzPci32WoIIalPoBIzDe2YhZtYbSMEwgUdgl5Vc36EYuIElFiOTFZeGElBh6Y&X-Amz-Signature=0c1f18f3323ce691d8ad9c2967629e1695b1b64d6e378bf0e12c3d20a7763fc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UPMENHM%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIAc6dFURnFvBYw%2FCfT1YiitvOP5GdM5kiOpJUQdo5vfZAiAL3w5DH3hrQ9f9Rb8%2BMFE4TZV%2BPasgZVV2SGLMT0B%2FqiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGD3QwC2CeFG0zMm%2BKtwDA%2FBT9IyFSWT4Fdwrfq7JErwt7S5P%2FzRWrE5HdO%2BE8iHouLRsYMvDsl%2FhCwpZq8qf8pJgutDk7Ku78V9MC%2FJacuEUhuaf%2B5lcFciJGI1VMpxyen0BgQNR8Z5WHc%2Fb90%2BotpWnX5L%2BFIapaP8K7T2Nf03G8zXArInTLlEI9wJMYC5wuleZ2THocuYvw%2B9dbiIRI4nni%2FRD8P%2BRd5eAOPJldzsRQnSXZEQ3nwOZE2ZR2Ne%2Bzvs71SCWoqTxQOuXBiMu4xxjT%2F7t6fwpiJfqCLBGX9UTMqcjEGIpJeT8OPcE0Ek0m77KSjbz0l5EbQIFuvW75Xa%2Bxc%2BB1aUi7I3VDdQ4xgGQnFxsIGEQkjHlVjfuXVgKYbs%2FxdmdZHa0508X3VD1IWFOMEFkDXE41sRmlPfJlQPAXEtVz9kWkgsVNaY0CfGVYAKkuJxYx3VAB5d6QLN06gz9IBPGh62CrUOt3pU%2B3YOYzisaQW14Kf5b82T27zOE0OzIctoQekC3kKnjfC2PNKtQhp86FbRSw%2B25oxeqhRykm7ChzoLzGtCafqKjz9aOl0kIQ%2Bg%2FNJOHzZDd%2FLh9gOqEsO5Z%2F8SOIG3PfMf1PKby1EVITDnqdNeAhIp1eyGzhoPg7f1VV9SnuRAw2rGixAY6pgFOPmuGJPZ2%2BnweqmDxAWFZesipJODVAs2dUdhjssHh%2FVJxA0WRi2lpQmY7TQsg7NDrIbhoF2jm%2F1wNeCFUMk9BWf3OAE%2FvLRSCxgB%2F%2FwXngo19GVm8vBeZbJUF6IoSX22AG7EFmg0Th4DpFtVCkB4zQet9wbxLjbEzyIK1n%2BLNtB6%2BpkvnRkBR7vaC3mgT7J2AtrdkT8BoIhAAbRK9phChuexJR6pj&X-Amz-Signature=a5dd5f9996deb646c1bea148504fc1ce3e262b338b7b4f085330574316585b6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
