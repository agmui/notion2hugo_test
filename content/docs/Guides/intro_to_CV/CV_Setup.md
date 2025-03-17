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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCWPWA4G%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKphzaRgnbhBJCIs5XXUsnpzQSmq0ery5l1Gxcmhtc3AIgdOzCcDIgKorG3OCx3WUEBE1mhkuCHCraEYb4rvdc7Soq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDM95vUICUuHMufxU%2FyrcA1KBPpwCwOUg8QXYVoIEfhcHlKZkiLU6wpD0%2BfOdZgSib8E%2BFxwQEvWjGYj9MBEOuQIF2wr53OzBcUogovnnY4W4M8RwFQ1OkFKjfyEeTbhc5VzlYLKrqx7WGwJGWIy0tHzSidyYFa2wbCg2hQaW%2BZ1Mvz0E0jTB35bkdaLdLnWlinYmSigWAmu7G5%2BYg7afHEu45BaFNfiB6TnlxP2CrEfc4o81DXf0uBOIHSSe63egwXPeXpT91op5Vn4sGdOoM2gxe%2Fl44mApxWtzfESRSzC7Xe8Z%2FjTyW2NFBHc4VB4idNWID%2FBTKvBNpzy8%2F9i1yfyrsxY8Pdftwg4NxNFyhuSIT0toADgrv4%2FBOZDREJ3CgEJOfLlXpbcVGYmQ0QhJXJmOdoX1cs2bx1qR2kJqzKnqd8qCP705hihbvCyzAxOBuloQm9sGCkLa8Q37lMsRUWWQxnOXHFSq3ccuI66X%2BYccfiqQqshahQuqEVFMrXzkaOlwpiezOWMwrmFe6R8t4glCd%2FBzqYv1INOGOldc1EA%2FjatN1mCzTw8bFibAQOS8Q6y1GKuSczZv2UIWYNTO1NirwQMiT9HH22BR5zzSBV11drbkZsHRSNtuUWcvWfmeNI27Jr9PEVad3ccUMLrb3r4GOqUBRPujrdtdXF2%2BGGQVwJeDPuAR9e%2BI0ffr4iiCb3xhWVizhl8vyZm1Q29bWfxKWYJMnJU0GCcfGIMzau7pFRADWO6VacCgog5OFZ4PeUQppjAxRWYyUdelIAWNt8fW7JVdKNMR5GBNsdhsSTbVgDZE6MWqjXVr89S9qZmm4EynkYdZRD%2BbeJ1uwxCjzX57e4nEvXl8iPnTp0JQemaf0Bll%2F%2Fg5I7oL&X-Amz-Signature=d18bcf5d9f819f3c3cebd99d00727ccf33db3a6fa00fb6cdc6f8a498a8076fdc&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMDMB5VI%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmtpXY07UJk2wUaJJBjfvTiE9KWWwlU0X7g8BH%2ByXuVwIgHdCK6e8a2NFxr35H9AIa%2F%2FdJX%2BXwvzFlF5DRRyJk1V8q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDDrq9RELi3UlFHR9kircA%2BnxE%2FGbwv28M7OOr3ek1gREF4rR0RO6uYEOTu6rmceUov3Pp%2BD%2F8LRgCse8d9ydeQ2IKycFs0wUCFRRiG91ydqafhxbRGtsIPKLiwMNxNuYnhfAOi5ZI0RdZZe4aHaeHQfI3wciey9%2BeADp7MTpGxwmQU4Ofpsd0Nk%2B9%2FQ9IIoswsJfAc6gZPOKohma3JU9ZX7ptlZXi3%2BmSqdSdrfJE2NDHgXyr5KoCaADthTuYqwG97RMhgAMmPVSiwA6Su67VSoSwJjgdx%2FE%2FKax9nPwTNxnT%2BbWY4yK2ei7ptVgLwmbsrpSiSTtJSBT4AcWq0TEjq%2FjrOiIOEL5C8i8u4GqOGV0usD8RWhNkX%2BXBFOf%2F3JaLDE4TXW363jBVS4vCIHpKyLgzt5gKiEIp4bMkCYZkqZzxJLMV65P7DHiknTgG1FHT3xvhQLc6%2F2z8%2FndqXWmIgxDQmy91jL%2FlQIhFIP6UpadLviY0EVnQKWcQEc1rxvGgKYJWSogM7Q0qBgemjIX10Fv7f8KiVji7BFuErjJmmzGwopC2up99Zc72fhuko4BdX6KgpfwgMbcFEjrem6eig8MKqY%2FghbebiOuwK39dMYDXEUiW2papT2ihuqGo4ZEKxKCtrpShcTrmXTBMI%2Fb3r4GOqUB%2BUkInHgZlaU8JyIQ8rOFdgpPwE%2FjDYFISbWBI7qeTAhdesk21N8XGpHBtk2D4jlNddFYRqIuoPAJqiMyBRBiEQuKzLYfCFdO1MFfv8Df67VvSD1X6CgjNznrx6w9s6nit3kCichF5oeND5fRvydwBxQfAGnwChp84Sy5FlOnuXxjtCaOvVR4OyTNeQJlYlmHW5aKiry%2F%2FaTlScsaS9Hto5LRK%2BgF&X-Amz-Signature=f06af35ec1213450e0417b2511e3af8f33960cb5ed8c4707106c64184f65a839&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
