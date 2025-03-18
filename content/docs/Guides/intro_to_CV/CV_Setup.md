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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYUIUYX2%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIE8ccMVf22%2F1suWjLbRlhhyrsSI72VWOzt1eyHeDIBV%2BAiEAmXyAjIIofGQlUJUs6LTv%2FY%2Bur1s1Y7EgmT5cqDE33GYq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDAnuVicGfDbCc5A%2FMSrcA%2BOmkx20Zhe%2FvgbpOFzQpczDwoND17bmseD%2BN26HXWL%2BXJdnujjB%2FUf1IXN7x6eO80COixQININNTIcLiEKP9fwuf993MZDF17A2hqCWbeeRhxv%2B%2Fgfy1I%2Fa6OVE%2Fce45S3%2Fx1lsSGTbdlHHgvOOlbJcPQzO8%2BukNVbaChdlmaAXFFQ4XqNKSr77hBy6ly92fhExNXUcnz%2BvCrcZzX8c9yt5%2B%2F0xXv0zTcrPCoQFxD0JVdHh6542Q2%2FDzw0%2BqCjIPSdfsC7%2B8UtzLdl%2FYOjmTyvWdytYNogcCQbgznzhwAoqQBWkc3iaCyECBE9qsNmrwkHIba7ozRQVWqkf%2B9sOiox896hvPMPyz%2FCU4a5OJftXSQwB7d%2Bjrh1mCDTKIbpMOGn1QVoIE%2FDPpfHkffa7rYhfR7jUkm7MgYv%2BURT3AZA9HQCirybtm6XFzh52W2kssybxNVaLiN3A4tYjs1W0440Jw27UvhwOSW04W9gN0%2B1iEtlG4CzvM4zWpZMlHApORJ8qeHCnAz8Wz%2BBqPwOs10Xf129Nt2V3MQpUaPXarKpRydafHwWI5dXymfon%2FMSCOYuTNcnSJm7gdrQ%2F%2FF2Wa%2B%2BXgB%2Fg6pke8TU7chca5BlCHtvs0V6wycaEZccbMJf15b4GOqUBfFjAtzQBiN2m9AVebxiDm8%2FW7%2FPMsOEm582kzs5r4XF9ryE4%2BNojdEeHIpZ5b%2Fj2FqkC%2BLb41OfaRvp6fdEtPEvAi7oDFmFVCa6S%2FCuyFKxQqiJJdzCPoIl2JN9vF2K7RTcKz%2BShIXz0bb9bD9%2BZYt13jBF7Pok%2FT2nDs6kXp15%2BAKXVfHZkzNlyGs6LJeom2MzMNhigVnY36KQqvgeMOSvutV4r&X-Amz-Signature=978c9dad41a4f246358f35637bb9e992b61902481ca0bf631bb85fb886481eae&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FUIECWO%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIFpsr9LSTDi%2FJu1CdMbMUedLFBJTmX6mBivHhe0FUbAcAiEAzp9FQemSMO9DUGbFOxnx1Sj2RfUgrstpm0TKp4bGBakq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDDS5upvg3P1FTzxJuCrcA4M2gWU4VKPGgGi015Xt7DWKhfvylTif49rWYS1k1R6uXqdbmsebilUqXcZ13L08tfZWypFuGUyuXpJ0NumMcDQdhIDW8p7aE4JDxF6T4IUbeI4nQZOb9JoXbj5%2Fp9fIlY4L39joj4Mg8tLbXHJOOtUtnxdmilPGiDAG15yhSItAZsbXGzxZTHRvCTJWwuKclOMIMG9laxSEajm5JTBzjVUEdLGnmzb%2FQj1P3eRXzWg1zudiaSUhzQ1dl8U%2FRceM1SXCCqbtLXTDPu5e9To%2F%2BeBxZ9tnV6owxnGRM6ReQsdmgsD7CUtjRJ1aPBa2ZMjb%2BtSY%2BgRQm0Dujh3HhVV88pm8UMWy1dLHyo23iWZsmsOJm4BRkLX9HJNxF8WsmPZ8cHpLpiMSBxQtmgBziLskgVE3EppfwW5X%2Bcbzl%2BHmfZ1%2F6bIdffRpQMqTmUfUlSvlxxbDLGkLC0MQq7GKKHmz6YOCEtC7uzSMGn8%2Blsi0Bov2irxus%2Brl6neXor%2BnMRaVx4R8nJfYodCbx7U42Ykh%2BjTuLYl1ycS4zEW05VxDFqmbjKxwI2RuTjJurboCfBF4fLQk4VphcP7HAjPPJRXNmJztN53iOBCaXsC1CUZUxd6HKcKGIDNEYEBefkwDMNT05b4GOqUBiyu01e85cE4BicO0lGCPipVWNymWYt58B9ExaeiytxMppMW2RMTYHAclV9zfcwdM8bsBcpYGcFYvY3gbkzDXsfAd%2Bd%2F96WRANdvJP0Ogwy7FU416dDHBHYkpwzpmgGxxfn2g91UKw1VWDHinKdKevU9onU8qXx7ULFRSidC3M11ZmRPWxSryb%2FBNe98w0Y7FoVAaYgVPEvCCuBPYV0AgpEbR6ISC&X-Amz-Signature=d048f4b358b5f80efc2a0c2e431c6e3ebc5658afed9a9011474a0ddc322978e0&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
