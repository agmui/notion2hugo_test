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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6PLWC7F%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIEOwfH0oeKN0Z7x04UH2Ya75rTUqpuXfwWw6jGdtWfYUAiEAriDAYe6heqw3JhePxyIqrtHpTbPku7Dq64OXB1jDQGcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDDRu4UOGN8uEGlk25yrcA0qKp7Tb6oHu81wgqTKE7VvLs4h89shwv%2BCq6Bh0WAUNsdKqF1yWqTD3lmlTVKN7M%2Ffsj12NXstc9UyJ90owwMO2QVLLVyNrGGUKUVsfEmQzcUIrS1f9iwmaDFw0g%2BBO%2B%2BwOn94lC1G7W5ZsRJ6LkYv3kx%2FXSh4%2BYKN39bDpqtUvERhuF%2FhkQWno2MfqtH%2F1C8mtp%2B0FoMgCfBKMRXlNujeykYsAu0c18OFuLnhcCZmAU5idZbyL1%2Bibp%2BjXFNSU7D6US%2BcY7EjrFuOSKJHDy8hAU7bHRG1ftmo7RjGlv4LEhJ2eo8dn4gn4wXAcHV7ey1vzI9JHZoEo4b7%2FqG0QzBZLZpwtvIrRvsOcIXaArWMa9vXCVczA5g3mbztCJgedQNRHE4einfRaMASe9b4WIxz5cKl3LGWfcauztR0LuEKMeAwQ%2B8MRQ9nm7AuIot4YK%2F8YGvSwcmTY0NUfNwE4gTDRIrIH3eEKedoE9GQK%2FRHVQ0cIo59e9wJ%2Fz%2FOb3iND8pf6ybsntvbyoEBXZy4oYph0a2ak4FNOq5OSJmEREd24eR4h7m1ftPT7vvEZts6R51y4chstMal0r2riBv%2FEhvdVibPuULY6xtesfAtOe4qGJUrmvEXmmYFlvx5nMLO5lL0GOqUBGEptUKLTakDN8mT6dlU7gJGxGxTQgP%2FFxSYw7W6m4w%2FrKSj9QoFOBQKvCPrtI6NbC7YH%2B9D0SFYRo%2FkxJHnva6vBSApHihaWkgGh8RxqADH7%2Fq9U6Y7vylKZYlz%2BmSdITC067fY7raht3Ud3yvLyKWk%2FhKVVHbsMhszLOOGAirZpNqW3n6gqw5XgG7ljBe7vxZHNidPTMRGaAZiXx%2Bbiho3gIPWe&X-Amz-Signature=99b451f7b8885ba41b5c7fef77bfbb95ca866ff8dc12d57ecbcf17cfd80b768e&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MYDZPJX%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDFODtLckq1yFLHZMSgqDzRHprZwdAN%2BjAo3b%2BoQ%2B5CjQIgavpJKp37Zf669iJ98q1gV7cMunbWifXaye%2Fsg%2BIprQwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAdt4WVDJDHVvb1ZCyrcA%2FwlsVJF1%2FJbaIdYWn1kPwkZjT3Spp563dW4Ay4MPHRt2HGGZKoydcGh9MVJfoTPGCG5cvVbs2gJ1O6ChXefVcsR3t6LzkkCGwyJm3t0gUpKuuwGjF5SuV%2Fye6LQYCCPnloq8yJbtW%2BM4C2giPoyNML%2F3nuS8hpO8LCCeh%2FZ0L%2Fbz06Ud4GL87GREASuiuu%2BNTNW6aSf7mn7DFkR8NrusfVmJrdLADmj%2FhmdP3EApZ33lJLM1c5cpoDOsAD3K5WVFaItAjKXs9bJAdD3SN5jbiR6CPJ%2BS2EbS%2BVOIGkGKD8%2BNfSVvoj%2Bh52Q%2F7TN1pUJsvxAL6G3lPKLbjtFrvnS04AY43d%2B%2B8W6X9Jahr6zIh10RTA14zH3uL0V4uZjcsiVxTaY9onDL6FKrFlQZLsSYm5nvdFkGfvGnRG6OborAOoubIN7vvsPFeMzQ%2FNe0JIw5gxtTqJM%2F2fc5paClKv%2BY%2BQ9SHaqRnLqpgoJV8Jg7LAonulEd9mGox4tpMRjb7z8C7HqwgfkB0ocgZ3qAQ7lU4oYypDY3wKnmTuK3PU8vBhSoJgOZBPLP9aWslW3TW9G1UIQMXYIKhnDCacHuRdCvuaVYtAvLxh2lduLw9Ua2D2OFasAgk1V4E1mOURxMKC5lL0GOqUBgRe0tFZIKAK1njwKTgoXVri0a9CoVQUaad8Nq%2FC6knREuz19JZL7lqVqvgyC6DisnF22akgU8eXKGS5C1J4l0ZhUezTX79YXAyXKi4FgUKLkYDiY7tIhquO6h49u9rymP0rFeYPhFNE%2FphofIn8UWWr%2FWHreqK1dm1bzkAvKjzAJFU%2BrDBr5io9vqxJOTunAYPWrxwLbmxVg3cCsKIa7yErN5y9A&X-Amz-Signature=4300d5923db51cc9ecb4324e51a97b2cbccdeed1b2e9c06f2af28583852b9358&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
