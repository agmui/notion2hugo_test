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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYKC4IGR%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T061337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIFdHIL6j%2B2Qsq%2Fwtu3qxuZVePj8xDzsGIMY7IqDOOlDlAiEAlsVIV82KMqrGjY%2Bu8YV%2F7b76c5z0w4SB9SDHgG%2FuIsgqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FSmD%2B6nlFH2Vr6mircA%2F9ap7FbMJNQfo1fneaSnR5rGKUbGyLAYRzdTwuhxBoyV6mMCD%2BqnU%2BbTrzcoow2vNGccNgWsI9cRbs5ZEXRBIk3jCTZofvrwSf%2BONjzbeAkJC6dPaqX%2FMw6PQcHyTHR27ogKajKT%2BZwu%2FUU5djfY7ijPIAXhKG3I2y9q%2BVugNVr3r7mmpHUwhYOjOf9QlhMDCms4w4hb3UJT49yUySQnKCCOJvZGtHyjs1agp4R9lLXK2IChItpH7HAWUBVrFdn1AadszuXU20sqk23dtJ3gIB%2Fc8y7v%2ByfpkcuFcP0Yuh16LTtC2pzVeoCGnGLNv7L4NavbEMaRNQelu5KoiHB%2FQHic0JNX%2Bk6nWHZ%2BY16GEqSDuwxvbHdvSdnnRra%2FftopDkmUzrRi744htTED1SYfexTT9tgvZjQYPaZgX98dTwSUD00fHJK12Iv2kowizK0xLBGF5Oioz9ML2THUxglP2Gnom1%2BuNFh9xThVEKNjec25FDd5cak3iNfw0n5DLC%2BZYD6Pn4arnxiHs%2FqLNgjvoEORfMHbM1HC%2FjEnAdsI7hUUh9w9sRGmnSV%2BJJHucXngkD0eE1iTTxBBJEkavn4qoRp725KTCLYrvXUJqo6woJFv%2BlO9gtHidoeQF2MMPH3usEGOqUB4jcE%2FVacW9URLhmrk0btr1LZt%2FFBCH8ofC87emCBpRbsfZWm1M3tDWUbTVxCwhQpWMDlfPnauEWgK60rzsGwhXOnuXcBYvYbbueVqrvhvB12cVn%2FQ4UqnnS5v7nziE%2FXEK%2FsTf18mrxd4dAb74%2Fg4iHhVqgay4nn40MVh0%2F3sfOvAxitCUYVIQL4hchcto39VXwy3t0HdE4uk9%2BOjXiTNaV7cvRJ&X-Amz-Signature=8e0853f8eec27990d712542e141540d0fe463bc3311a9a5d4cd439657d3ae897&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA2AJYOJ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T061331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCWDPu0GFWwcst3tacygQ8U5Wly6sAU9HM5c61kyLhnsAIgacEerwxpnC%2BbSQflEC5AucbQDVnU35Yo2ZPcLNKrsXIqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGfVxZ9xnY6K5WT5ircA72u6iM4MIifw1yC3FzzkNRLANn67nbqkstAatUfSyevcfIelwu2bpkWvUBO3PAvAXL27T1cSTrFPGIzJOaMNA4zCiTSAE9INAHS91QY%2B8p9ELAXjy77EVfcfG7L2mLH6M1KOUK1JtyfDUFY5JEkSi5LFdAWZi8y5kqXdvUmZRx5wJn9rrAQqKvyvK1SOP8IcNUgAFcGc3fyY4kZu5lmG3AM7PbpDSQxvu%2B4JPzyNZ8AB79T6WwIAW0sL68mQqjxLJl77pdgl1%2Fdr8vKAc5zMqWwMj29mhITUPWqucSmVmX9dXkNIUdFoH27C6vUy4H9%2BzJv6b7xpW%2Fz1YoxmQigC5Efkp4esuBRYuW7arL5as2CZtP1jQ0HzM1M7c6azmDqBebVBxbGzKR1P5569HJuNn24GQLPA5YePHknQUfR5KgSSyMYaIxuKMGoCIsMW5mTRjIqVnCqiaK2oK6rVXvOobI7wthRgrTjncRkUHPat0oB7v3U48AUnB7Tj5WmW1p%2FuTTL4zFhFMXHNfPK5Ava%2FL2%2FDS4SsLo26rVJ1dwycbHPeAVjSEq8bRPNw9XWmGiAUlf38OVdja37Cz3WyBy7YBbwaM7D2rX6Ixjr2Zk4PHzqt1aUZtiWvHsWnAXzMJL4usEGOqUBYZUgKfCRfqiFE2QY0Fb5GzLEM8cNfl6Pl5P2cH6Cj6wsZo2iqYxpLireCEfidpi8wgy0Fxksu0Bvl1KO2s2GBCqLXFBKpFe4eYnjnmmVooxa4MLmU4hyHOu%2BkBy7nZnK2RiNoAPTdCx62J9l%2BP9k%2FGP%2F2w%2Bpi8Cks734kv4QxolFjF6D9CE5b5OjqHxXnpGUZXfWSs1PUjeXxvpqcof1D4Sg8Qfn&X-Amz-Signature=ccbc1f8d312e43afe0a4e34a6d00c4e526e0fa5525d04530c9108f20b93b0996&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
