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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B3PLZGX%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCze3IEzJ%2BhmD3bZZQvTyphXctvS4OELhr%2F94MK%2FcPKvAIhAMFQ6yBCUUazvI7OtQSwYcfKeAF3RfpJh%2BRn7YmvMJMUKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEGJd7oUfpVkCXcsUq3AN65tl28eHLZOtN9dS0Moyq9Do2vZQzcElPidrYzCmp0kitDSzgrpCRaWGySqe0mLym1D2bnyscOg2K518UYMMRT4COj7zYZY0NEdOxEOuxEePW7rstlQ12E3qjQ4GMDIRJgF8cX%2B1JqO%2Fn6L9lrkTa7WomWhAbAWj%2BC5oBNwwS0LF5F0MjUle2IpRN58C1Ej3qqprmzXpS%2FrnJsE3W8Urn6%2BDMGJKo%2F4A0QsPL33cl8VBylWnji2iQYivGibVOK%2B9x%2FiIVY9REGCDGR04JCmUbYPVfyXBd9nUxNTVR9WvJlHi53ECVRzX6%2BIxNTG0QioV8XShghSjDqRmM7XyujLAbAPCkQc6aCLypNhk5wWIZ6NAcjlt85IjREobIeoqvbIl2bp%2BnB%2BQtlgGUvOWzE7BoLaeb7e5LbYr%2FWnxNesRAddxnaCmYSQcScPzr%2F5iKYdMabTJ4VeWGCfTIaKdLwfKHW9hlOcvDL0S1pXRVDxi28rAc43Ppkjb8pI67lH3AxPu662S4KTmTC6u2oVVvzEuqiHibY%2F9x3oKpj2lDQmubcs05E95Nbb1GeF1Iel18VhF5QOMYKNsJcC1KLgCPR9vO0MG054zDnzCD27b7ikN0QChXxdYUqmZFTW%2FiWjCls5bCBjqkAS594to7fJkdEFX7xL%2Fu4Sw1pk57KgonzmzArdHGBWbkEEXEK2LzjU%2BN6%2FaK1jDlUEkcjpQoUxi3us%2BZtUH168mbNdm5ErSIujtT0fEsQvmftZvx0Z%2FPxNfHjnTO3%2BZ1FgsflVKTPhF1S7KytyxY%2FSgeGN98eKan%2Fqoi8wViUuz6NCw8hLEtdcqucO3KjdmNYKNzkDDOmz2lr%2Bky3g9BVDiDqtPA&X-Amz-Signature=c0bbab7d2bd24f27cdbdf87d6de5a34966c892a82b0759ec441a04b310896868&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSKJ4DON%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG10XApBXptIJFSeMuaA7rQgLcuLm3sCuzxNmWvzHstNAiBt5AR0IrWN20l8sfkQFNf3Hm%2FWP%2B%2FxU0tvLPMWIRiPiiqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FVqI537reVSmSZ8iKtwD2lFfbvfSIr%2Fww4Uj0e7Qo2n%2FM8n3RV%2ByszTA%2B1bkzAt%2BQHO9BAE%2FelyecbYjPy%2FH8xrOkJK7IOtvIMS0f4Skg%2BxVG3JXQEh7k%2FPuDyYZ1I8yLCCgBl4AF3o%2FKl4Bhpy1d%2BLwC9XJ%2F6i%2B9EVeRbw6sFQ%2BaCvoeOraSXbDIhKnfqRlHB8wPJit6GbqZl79Y%2BzB69GOz%2BGmVBVl1%2FZddMbYZevhZ2Td6Xp9ti5JGM5CeZs4dm%2FklAxo7tIncB3BjBwo%2B%2Fx9r0xpKyIaI4SeZ4qt9HQQiWp6NSdHruWLIRkl%2BGWtpU67aOSVg4zEoEEbNNOEdQ5nPKVmNMW8iHzyzbN3KpGKVsJWkk4Qiw%2BRiGMNFkxlTg%2BZNtAwtfpoimxz5aDfc%2BavOYZE49iqcNYP4kVJUuc9XpYeQup99kLVgJgcIzka3zxXL6Gdfm9d84A52pY%2FcGScZImhtR%2F0YXJxV4pOY1rBrlRA9sJc8B6qMW5IyaoxEOpbHJzoFXQfOK1cZDToYDmJ%2Fx8QFxohJ1BdBcEkg5TiWIa1ZdjvQ70J5opiPAtYQYmiDltuip%2BdY5ndzOT6%2BzdtYg857sHTszi%2FzPrKC%2Fi%2F2FL%2FOsPM%2BWVDZTS68fjlzaZKhWj7mh2EUqsw%2B%2BmWwgY6pgEW9aqIzSBI7JHJ8VyL07FwPzYE7brtadFtM6mVD%2FEE6hrNAH49OTKvgOZFfvK3ppuiELjVoBOhwiwNwfiqphlCNpN8jbdPCrmm7Qd%2BN26X2E2wnBT89t8Bi78%2FGXf%2BcdrKM3G15BnSTkTZ%2F%2Bc35GeJJH6h0gWV4xpEIl1okau9LVFa5edDy4%2FZH0X%2B5ndbsLxNPfh0cfV49cj1bgZBqw7pZ71BPykN&X-Amz-Signature=e491a8a7dcabf8b66ad3afef83e729977db8ea7616183ce8d7964b55151fcbdd&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
