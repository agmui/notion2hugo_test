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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD62M3UI%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIB1qpDn5v4JLRHhOEI2a0t2b6xVfF24xs6aipo8LhJ2EAiA9Evd0zuwQKsYr5PpNkmMvzPdIpyYMA9q766weKhBO3CqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B%2F%2FzjZBcjlCWE0YKKtwD4Jl7rfR2Pp4jjaHgk0N79BnIhWk9i%2Fkd2P%2FIirqKgaZXm1p5M6b39wdruqFNh8qaWLqPT0WkjovZokxCwdjvbFdsZeYv4pe2ZGgK5F9WCRpbfoQ4DiuEwlM1owsL%2BxBK5ne%2Bn%2B7JW905gG%2BtHbQcTwADMGs6LZsD38EnNy24xvKe9r471yc%2Biw%2B1VI9g6NcRRWTU2jsDQEhjsNnO5hg225KHJU1CMHDD3eXDRI%2Fe%2FK5M23qMWLXhUVtwhEEyF668qptD5w9NBYfD4x6IgyfeU1GfZ7YDpWkT%2FfVu7Mqg3lOvTuFHSX%2BDZkDnHIc5rOv5n6mt4sAP5mGerEk9rgy2m4E%2BDeKjadyWhumKj94LdPOE38MEWERUG55wxbcxz0oRo7mMR7A%2BNKFj03KSuscUSBATRfncNJKtBQa2SOid9KAa%2FUV8GnXlRzoyCoQkcKlrPJlNhI40ReSsBRCLzSXf5dKatqtD4oz26DsOjcW0qLGjFLD%2FaZoYCXci0Zgp3cZoRN%2BdCHPeWavEczigZmxjZd3hWmHM79Qa%2BJP9RXLj0cgQ6BsvPGzcDZc3sBpnJhCGpisDogwYeOMKEWylwUFF6bLPlYekW3HHVa0MYeJC0wBT7O8Y3dy6LbTG1wYw1fbivwY6pgFvOTWiR5PeC0JYJ7LWmq5ZxLMvlxp8wLL5Jz4nO5yUmkDdJvwx0Q0676waiuEQlQ%2FnJlhH%2BbqcD%2Fy1ZSRVKzlxkuQTNyWDSEgUfqReNhLdQGMLHGYWg36q%2FnV07I6v1oStbmov%2FEDv5xULNz4S34UqXveFVAfPBd29LNTTmw5g6SNMfJJwrcvqhcxeTOIpK3%2Fs0hNmkeswnxu3aS6QK70tfkyVX1o7&X-Amz-Signature=6381f43502358e4afd1941c015f147b7833fef1158a6bf20f9ed635399984fcf&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQLVBGFP%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIHn43FMTkXKHUR2jTHX9Kyewk10dWP0Bc12%2FLcvZMISQAiAdwzCX83vuVZp71Rkdm31%2F2qOWc2Il2i4dHSuvWm0mdyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA8jcQQLCcosgkdfMKtwD33H3F3iJKFsyK7akyStzBfka1%2FcY27PCgyQ86%2B1IeF%2BDx1VjMEXEvAcPIpucrolNcUqvIC0YP16IET8jEqTT8A2GFBSnhEvhFgM3OChVNIMBlttB%2FcBkTgmAqF%2B66P3iisItV74MyvfN8lH6bOLbGm3LFBc9%2Bmlpqx4RDJRVS1bCdk2tPIwLByPTrXPUMcGK94ZnYoRU%2BIYx4H5kWcQdw9jkgrw3l1RtOa3hpHjE%2B4YvkqFbRz0%2B47pU5AywUWQ16LXngJo6mA05y4Awq71fCYazR3pqpdtYC3AjlUo0hliqPbajWZCLdGIfdnaofAG48wCVV%2FBtgR0eP3GZ0igpzAG8zaKlaZNZ4f4524JEcZpZiwCmE48gZDAAOYF3IgLvHeb6ROIkVOk9eDQ3QMRiotmHQWhrQbmuddcbBmb08th7ImDB%2B1H274FvdQP%2FPluh4QA49nKVF9WDn2W87AUYO2iPaJw4HGGschidKomTWPd6Pxk%2BYu9NSMIPsAMh8Zxi9grr0tdYm0Alrqw64qqiqvD4v%2BF8tQHRBZfYYLclSwQAWN0DNkoCI0XEEYhcUInwKXETvLr2Cp8A6crH2VIM5MAprUR%2F9cThCDQllYxTH2oxVfhIx5r4pesyg9IwwffivwY6pgHYYlKIpHqQ7z57fsle3gZidTy3cplXXgZXz3nQiN2nKqFdhZ%2Fh%2FKoPKt%2FSzl%2FYpkKBgVX%2FRwVIAsUJoTOGr%2BVgvZ0cPacKF6dpK1K%2BVI6e3Ip68igRBtFDyrt8BnBzvr2Olgbu%2BUvY4axlvncGMrDz3dMttcBBwWJ%2BA39zThJxE%2FZ1iLmXE%2FA6QLiYY%2FVHVy1%2FjCNv9XBNYzKoMonxkhlLiLCCF11v&X-Amz-Signature=56d67113ad358a2b378fb6d65d8631866c756f3f4ce3a9cc3505a1c850ebe89c&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
