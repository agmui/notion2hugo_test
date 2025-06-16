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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUXQQTUT%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T141018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCICDSOoW5HF7eUqjtqNKwwESAKvc3P2LovNwTfHSlbsiIAiBeBAA72u%2FpmHPPlm6LGZdYlWR0FvpQwUB2W17kI1xaECr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMy1LNYCBcfvLFRaq8KtwDVEML8sYiGLm5fVRs3%2BWrtGuV9pLhOjA6Ua0JqSoOb02jq581Nqq8fAmlHn9M1ejV51Gu5a08us3Pn1avR1VIKBk%2Bdm8VWgN1Mgrm0%2By5tcTOWTNgd4oO8KHiOvA%2FztrKkQ17Xo6Q0VFgsYs%2BhYu3%2BaOp%2FYtBjm2KX%2BGwR2%2BC%2Bg%2BwNGd%2B2WHYWOLpswb3ssm5GnnsNFMpoOfkqhqSG3oaCauA9PMAznqRKv3tfR46dbjn%2FNwouQHcH5%2Fm3aPRqmCl3KdXuk9kgXQ5EqAqHWT8QkmhuLTL0DbhyD%2FaBhH6%2BliGV2ZbwXgcIyCpp7wFbPJ%2FLKG0WGsO8UUaEtBP%2BQhoJHF0XoyUvIbzKkOejDIxTt%2FK27B6rnaWrJ6gDOJIw9zhftVomSZRkC6%2BpiIjFOty7AHTfGpf%2Bg9Z7p3%2B6eWXVxNWvWlFAh5v0om5oNtJ4o18tsfOPtWJ5domUNJduai%2BcMnuqyaznBzs7osfbt%2BD5kJBvbGqnyVSFdMOvmUI4fDS%2F9897jhiW417pyO6eT%2FMuK%2FI83ef%2FTMwpU8jQdx8rjeRsWpI0sk5RmQYinFgXKqnyyZ%2F0nzyVpnQzsfx3%2B6xgV%2FzJSTvLzHteHN2ekAzT8LIpGfJv2tvTKhyN3Aw%2FsjAwgY6pgHCRmmlewtJb%2B094oiG0BY0bJ23ZZn2LLtbp18FhqkJPlOwPRZQjrHX3nE0jfI0VdPsD5kTor1Zqm7Coqly5gF%2Fk%2Fj%2FRB%2B%2FFLGF0W8S8JboSBzfmiPN83AR9CQgSPJEW80xe24G8wuvu1akb5%2FezFlCYY9xbk6eN735geEQzQalulcy67zxryIVYrQREJO1AF2i9bgECqx5E4F0aHfdcOAZHgmp9fof&X-Amz-Signature=2123a1f1565f352f76ac896591f71f2141e474f3a43186c8cfae5b5201a675e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WX2IDAQ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T141017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDDKrG6Nj%2F6ppGvPCumnmGRffQNEt%2BTdGCxCOKLiBkE%2FAIhAIJ52nBHe8bnRfcn097%2BbKG5Nw%2BoazFnIkzfAn4W5SJMKv8DCF8QABoMNjM3NDIzMTgzODA1IgzBM98NRieX3SWuynIq3APyxZ%2FY4kmAwoyYmRU%2F8HT%2F0EatuqxlMzx1kYHIVQvQQgS%2FG0Mj7jiP1UHmfodoqDb5h4R4t3DQ2FKOvdnzhF0SlLjNhBN3tqlk86MGbEbiUxyZW%2FLaPaarkte6eEzlgYKYurqlZTUf388tMjAQqz3fvMjf5B0GCNBbIylKOqnTG%2BiPNID7x5JawbDuQPJHfN4rJUOHZw5YuNlnRlBEiq3Bl9LMSDhnHGVfu6hpBmTaWyxkmBHb0QnAdtWmPAwbvLlChFRjg6Y6CHx%2BgSk07qg4V8pQcAw3vJ9RLsbuXB25XwiPed8sFECQsKw3sA8hHuulvbXmADGGQ9l4vyaBnMuaPGyNM2DsHCLqPlhmYH5AfjnQOpRPi43aOc93KSMeOt4yicnQ6x6gv6hooOSBHzXSDzrLv5e5zwPIJTMd2m4mppgWFsGPLhWnC984PCd68quDqc0%2BW%2FAvfAy3KQgXZYKXocwh5SoMPuDtSxb3kimsUHq5x2goh%2FJLTrNY%2Fernimf8Ss5lPUV%2FoeBxdlDaKvgLV5qjS36U%2FueBKUos2P6n7hjaOBabaYu1gDXRALN12yuwAldVlsIRGclnynCE5Z9aJCcdlgf1OOpSCqVC4JFMIM%2F9nT3wFhsg73TPNDCcyMDCBjqkAeQf%2FlLfZcImbDpJrw0f2D9Fe%2FwXU7XT4MMuAIQAG%2BxJOT8VCVPUWV7H8y3y3eqU%2Funa0E3XleQ6n1Oj8pyA%2BJUfTtkschbi6gQOVj1Z%2BZ%2BBAzA1bTYa%2FGx7S3m%2FUSMV9zH0vPQNairVUtPmiuHMRpjOuYM3x2r9Tilg%2FqCBMo8u6drUHwc0ysZ5RpzkA77poz3vIG8TC1TBAUH0C5lk7UGkreoj&X-Amz-Signature=b3ce375888aa1984a47776570c8e84c31c4576b8e35e26826b296674b0c23641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
