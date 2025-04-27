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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXXXEBCF%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYXpdUDAov%2BuWXEQo930e0TmC%2FADTQ3uZeQ%2FKtXz5XfgIhAMLQyVNrm3DE2pgUHg5uybzOyXaMpuvl6Ts1llwD3uEYKv8DCGUQABoMNjM3NDIzMTgzODA1IgzyXPDo5gT%2Fkyi48ogq3ANTKE%2Fax26%2FSLmj4NLdUyELIN88H%2BsRo2rsE9UzoMktkHr7D6WWr1kHcJVAly11CyZW4Ps9mWbzJbK664PkNcdh%2FJLqUNpq%2FSsvYl3EJB1DKXPr4ElfJYAAE0MFRIqjzZKmmH8YSQ88ija9ASXn8jHVhKEAkqdaHX9SU0JUQgx3UzFlytqLp19OuVX4ujoTYwidt519%2FY6KMqrQ71KWKwdGyG57pIRKkS9NC1XSfpPSFzQd6W5SivPfeJ14Hhsvj9ItVP6DGB%2BdPhR6O5Y3aKoSUAyS3s73bGNRaovuL9OaCt6%2BS%2BNs3ZDcp5J5%2BqgklKRMbSeRMK0D56g0B4lQf54nKzQR4LXNuP0cHwEdv5oIBbks2ij6Dn%2FrFLFgarPY5weH2kRRL0N2fSvnk5FqPOFy%2Fdw3Ef4mH9eyPRHHsyZWd%2BdgdF0xpqiKqy43nt%2BDwm%2BnUU%2F5R9phHWcHx5tfT93fTyfqTm0P9S80ojzAGfWEFeGYBN%2FY4OANzn9sqRkIMr5QWQSofy%2Fk941efMtvPxfdl9VE1FHklqJhmmvp1rpkiZ4zjORT9jyB6c%2BJF%2BXwIKn2vxMDLxzaG9yO3BbJSUg5Jx3sqhK%2BkB8GhmrvT215xRJ6yNQiwYCPrUWfzzCVkrrABjqkARMtxXqUFKHl6OmRPl5bXvYXkAkyi4NHsREtJId1zItaEyh3WeT%2BdS4UFhrfVXLA%2FRLa%2Fv5fL4TgH29u0YOY6%2FrGAcTM1LDmidlOehas1BOR2vsWQ%2F0zE8MTmKO2Srhmb3vBUAWGHfs6BgftzOdE2rpNlTutZbq0wr38B2Rle%2BGQKGV7580U9Ro%2FCHLS3xAYd%2FB%2FudGdaFpdW%2F8%2B7%2BSBzF69z8l%2F&X-Amz-Signature=92c955287bf3a94fc8cda052ed644172184b03742daa8778a5a7b27f05d91285&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN4MAB24%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCOkpcSpKnWwOmbdfWm%2FqdiUZhQsg0z%2FXjMOzXapAfJgIgNnO75LX12C2qNEbWQEB01Dldm7rn1LmAHEvDMpCKJwIq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDNJkyEzMG2FbsMl0TSrcA3h7INbzEWJD4N8%2BP8nhILMUr9EcDNe%2BMK8s6tK5UF6XLtBeqzlaHoMbBXIETLSi9fvz66%2Braytlv9FmcT4IIhlbHDbs4%2F4wh%2F942hjMqObgO2axqG6UG4d9DCnnG0wHxTx1%2BwJA4okCCyBvgIwj0IwJUUWzvH2V3UJKmgzJLWzzCSP95IpgjgljO8ju6s5VM65TPQRMti2rmAMKWnvfwmnBy4vmBA7bUqYL1%2B2Fsxi%2F1%2B3PM2GR6bvToZokipay3DqRr3RD755B3NasfLYt9RbDB%2Bq5yINm4EMtlsoZX%2BGb5PDuAqZK6n%2FjmNp0ftm0RCxacvHX81uh9Sq7AF0YRxJ6OTUgOUph89bibqMAt84hqOUgQjSabLPb8quhZ8Z%2BMe5GyVi2XWxmaLOgPWkrn2jjMoFPXK11s7ZgItqyjndKynbmdXQ%2BqsGVBJmNXuUrlma%2FtNKUghs6yMRujegwZPK%2BXj3rqFvAaPNJ77qlRW105M6KLZpj05L35nNJ36O3i%2FWZC6plLz92IyJuJmWA7T3BFAxq%2F2LlO9vJ6DR7muf0D%2BASjyUoroZXRp%2B%2B8diShOjRBeB5flSm8gYstn0NFigFHXwv590IKUkLcH6ELTePEqVJaOVbVDglNkb8MP2KusAGOqUBhv7oD13ypR6KzAu5%2BTtp3ZQ6s3RObAEZB4uhHf4UW5s5Pqr4HR1Kzsz48K3%2BzCXKZUznLQnLsLxgW62XBH2wlBR0RF5r43%2FgM%2FduNewG%2FXVSgtLxSabot0HvO8i4C6wZXYKFgXgWEGDQ1Eu0aZ1ZGFe59osQTgmRZBdO2EVH1loA6sr1iVW0o4I%2FzeHBBwQ4HN4M5G5reM1tAFZm0bXckpKvfR%2FX&X-Amz-Signature=87b473450c25b8d30755e2907dec22e88d58deb8a6808efb68b454ab166052fd&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
