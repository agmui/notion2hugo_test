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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LYMPH7Z%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCLTaA5wFMQuuwfKhd8jf2lQs39ClxDdllLtfImvFTAtgIhAOtAASwEMasWppzEkC7r%2BOxKYGxdI7ReQStY3dtpuWeTKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDsYsQMM2oKmzRLnoq3AM%2FDbIAKefx4YLmqRwvhFHxBRkjiOVdpmmPH8ZO171huZcifgfrhpyG9CsRPFO4qzHMm3GRxc3Ajf8m6uFI3nTlnBfWa4qY%2BOn%2FXW55EZcTaCKLesBFiPYDAz2eDCywnxsxaHaO5IkQex9xt22Bw9c9oOWXCH1xkTc1R%2FL47QNGyfCs5Evde5bMZ7s8WtNZ9hud1aHBBxpuDmtC9%2BXTQYLH7v9uXaBfxxltR4CwE1VM9vmgFjulIjDYFcZTeLrGUbY8JiM6EcUW%2FQrSUTyriywgqRleB73RYbHRYYluJQ8bnuJlyE3njKhFZXZeIpLZxlGV%2FOCvBYD%2B0E%2FZsMhdmXg5KYNwikPf8Qj3oVzn6a4sJli1z6%2FABct5IsyI60iJMQpCFM5bKIljiJSS%2BBm9kg0tjJXdwyW%2FKeD05nugDvqL9%2FMznHWkoJu9wOV3bH4mA3uIdeqYRJ2HDc2p%2BNVmJW4CrvoPHNDOKyzx7XqPD8TluBnLtq9fRB2HQRdwU8mqv1KmhGGxTUXgPAhxIMwugu3jbWyLJuqV0sflh3z0Yz%2FSpLm6TpZTzWNMZUZgvzxDsFlnRh09IOdSBrYAonowmqMHokPEwrZ2Bzpq43MJjzD2fKpiLAsMlceDGCE5%2FzDmgqLEBjqkAQ7IC97Dn2QAj7O8ltRePHp21%2FXWXEcOcDfcdg1OziUGYP2n2COfbBK7rsZk8tkL7jQm7zLK%2BRwCaTMtCY8HKFZYWACPLYoYxBPANjYB4Taq5h2MaRYojltfmEs5KE7HLmLdUjMi4J4GhYsW5o8pkBv%2F0DIAHoqARq21zxMf9LND9fMFqGfFcagqcTq5S2sWTwSi7zrIleOk1bmqNqZEHmf1uD2L&X-Amz-Signature=60c659d0e60321eeab6a625b4cc2011e7048a80f40f8805229d8fa63c9ef15bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZGDVW4S%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIAyCBtaETBqrIkIUdEq8HlnwvcfgYDhCjKRLo2fETr0LAiEA0P4B1sKxeckU2zVb5siNc3ydYzVupXD3%2BkJA0a%2BM9icqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIy0PKjqrIHgz7neSrcA9yu8kqZ%2F%2BhK6zqVYrh7Q7gRiPXFc2%2Bh9ZdjFWg4CokNVIyDY6FSDP75z97XTRn5q52yyK0TLbWUEcGAPGcNm0u0iyA5s3NiAx891OZ04KPueoQcRjVLN0blcXT1E399aTF1YVnawGVonWTeDed2znkYSAk%2F9w%2Bh9KEXUJ%2FIGQ7JJVnqcA%2F%2FDHyWOIZ5N70aUsTVrfgoJsf3Gi%2FoRWWcCaTC4zNa41tVVkMuxViwCz%2B2qFMggwYbsFyULKLopmXLAiWkUA%2BMdSqEvbQOT0pNpqfn6h5Gs6Ekd0sZA%2Bud542KrlC2scKW6RhbgGonMDWiDgKeBEUqaV2NitsLJymcWXyBgBGpd7InEmUrsRytERXs16lkTXtAYXMKO4WPUioQWQkU%2BcT%2FNXdYyIcvVl%2FhivLSbP%2F02toYL9Oo2a9g42pT5W3mz0i6p9%2B%2FoUGwFYZIOumQyEvvlA2MbT5c%2BgJ%2F1OF7XlCRaF6vQAuEUEaohuRWF4KY8GCfnDHI8WxYzJeVgxmVwSGPoESeU9Rx5Q3hObJVCHYfl%2Br5WL5ewSpvEQ0y0%2BVVa%2FA%2B%2F3z2z%2FaJC5uZDCNyLEyZw389hZQVUq6pIZjDgT8QNUi2A6D8vFXvV%2FxvZCJM3f1YYgzm0wKlMKCCosQGOqUBEAzMrCELUvYu88JGLDXgoqaRZDYWf1OkhyStbRswQSonJNdkG0DQFG%2BZX6T91EZWgQYgSwUmtRC6W%2BcAUKW3tZuydhRyIpSzISJYRECALqwl4sVZxcIDDwY%2F6UWtBxIqOD3E2TNIXQPgtTArpDoZBnHxP%2F8CvEqTf004CH%2BI2nuxFAEZe%2Bky3TjIpDB7UyYCQ3U5JnULFCyf8N%2BNgfF8PsM5Fanv&X-Amz-Signature=55dc26ee8d7cf7dc762a017b460edc9972098c8f67bf6d1f6c777fe8291ca812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
