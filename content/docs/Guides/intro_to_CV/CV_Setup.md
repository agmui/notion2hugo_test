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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G53ORAO%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T200926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnKcfLKgMzJGc0jYNgWVJwIMYElS57jh2mNGU4QpUz1gIgSYI9vIcNZ9uJUvjUe3zJ%2BlCbWSBNdPRPcLCnriHJJ08q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDF%2FxPK1K%2B4VXrxZjEircA9FsGHG2nP335kqwzQOl9J2aPBd2fscN8hHcoul3OiIUsA2g38Mo9LvydMkiQITTKReeA2bvysNa3pCpXUnyUey1FOqnmwz5ncKrpS77Yw89Es5UnRjb8sWZd%2F6eVLy9Hq%2FrIvDFxH8ppJq8z5tOvpCRzxrQ2BFQ8rQuJTPIXERFwY9M3%2Fvl7OYPyETy3a22u9QfUnIztsfqv%2FM0J%2Fs%2BeCSCIupcJ2jjsRbqwpN4TnLeOxmm0XsYUTg%2B7ObATo8Lh7dVhGjSByKJsfvfYgud56qtVlmNQOIXsmQOzyO2Uzz4yI%2B%2FeqESZVSo49nGRNM0I7LrrgM6QheRDWjwNNanIXN4oE27Ne7qk8%2Fvi09f85Xy%2FEcFiDPYlLDGhPHL7YvFXUA3XRxTDL5aqHCZQSYZA0fOpy2PoHmCWwLjwFnpCakxZvFNew4zFUnbpdd%2F6j90hIZgzWUkQELDI9qMsQIiQMQseHFKxtFRqSQjq7%2BkGt9XPfzlic2gPoPotBxvnih1JYbHl1zqa%2FVcjlfR4%2Bo9tJv%2F%2Fr72enid1pvg3P8KXwFI0Gpk%2FQzIhoYIQHVm3XXBh1fZJ0piKiIBBspAJAMgGc92zycBX6XSQVlVPZRxVaayAdkCjNnSNfJVlYFDMKL1m78GOqUBgSdZ%2BaoldmpZJGYNADWPMzpXRdZYlSNtMi%2B6e8cMFDUlh7hbt4piBaMbd0c2%2F%2FVCWi5yu1KEw0uH4zQRUR18xGl2960qJOjnh6CSgADuHoKuw48L%2ByV5CE%2Ftp5PW7k7b3pC621dEH6GI1qg9e72xYcczUyFbaPvEILZ4PrGzUatQZ2ufTXnOEaKCX4nG%2Ftk6CmiJl6QS1%2BXbTnLWz3b099VXA1V1&X-Amz-Signature=fa9271bb719fe31194a24cbcd3b689e5dc859644b374b68d86b9cff38f51a2dd&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5EAVMWK%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGYZACe%2F6Gf2wlkHHynjbKEGBRq9D3lHIHlbgqQ%2FbPuAiEA6TXKsHCWZ48mM6uCMDsTxEblNj9tAi%2BIO7iQvfEgDWIq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDJcez5uVidMsGlp%2FQSrcA9DJ8W9IcjJBFLjg6oIwhIMUXxwRXtWoHXCCVp5vVQSQfQMMAI41Ip7Y%2BsQMn3I7wqPSG0CFcCFgXdXC5%2BpBOK09on4brl19GhAyGI1T5XQFFtyfMEbzN%2Bh1z3CovEYjOTw8cbv5raF%2FGKgI2YgfgjCxdN9vYQVNiZrrZY4E6rzBl6ojvbbqjbBsqPbTJbYsT2X0hoXnldbq54KNUQfO4ayC6xO1gjkFD4qLe7SP2aU0dCoHDAegtkkS2ocKHFmHrdZh6NKtc4oSRDzXMLWHnLXCLGQIW30rVwRLTyjehMEyUKwHuyTkMcD8Fpd3oRHJNQL2rdYLL879jCoRLP9DDcAZfV4SY6nbW7YPm74N8n4MTuxNYIHF7mxG6cb1rsi7iCMyKeZXTKqX4oIKm4a2CcR3udT7v0o%2FaL9gyw1cc%2Fo05fxxpG%2BvwSEdwgZhP6TmZaJoVu9qayO2CJ99Gi920HghYcH8eGRGLGpvm1DapbwzY1X%2FYM1UAR5ctngzg%2BKcCtpBX0U7PTPuO6BD6DKoJU6coORfPLDszlCUL5fr8SJ7zzN3rbsCWIewocVIkYS%2FAMoVUthuobb353D7sjLm4V2GTb%2FAsw3nGYFgloelC1eT7viOrf7f49Kp5LFOMJb0m78GOqUBoA56WDQpDmCTxJjHCnamKn5ra97zahK%2Bfl%2BaAwpG2egCE1cgU%2F%2FgCEn8%2FPf99WqgBIe2CYhCjheMFXF3TjCtp3WTHhLh89FgsaNeMZheDJYkmvLnuXSQVt2ED%2Fj50KX6iSN1JdStxvN0kmJt89uivgWwW2HEoiR4qtelAEH2ccYajqoVclYKZwJh339pupHXRcuEOzyDmZs2h81xrmJG3HF3iNYU&X-Amz-Signature=a9043ead5cde2566faf848ee468684c3269e69bffbc9d641f62e48c59e86735a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
