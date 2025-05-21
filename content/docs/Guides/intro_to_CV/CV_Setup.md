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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MXLROKR%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIB8tw%2F4v5fMC7gp9a8OdR0jCW5u0gWarQmG0EtlcbyTrAiEAxA4JMzNXMG8nFqgAqlFby0xRkMoYUY8ynTJdnItPWNcqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDj4vpeHfXuIOcp42SrcA8kKhh5lQKEMHIdEvGj6K5EhreovHo%2BDoWH3V5xiBPKB5q2QdQMWjDH62%2BH4VITdRD6WjK6%2FjJsiBYrBziV%2BKT6NAAmB5wQOWDWFkGT4%2BBx26sJNgwTj9sloBbMTIcAbPkoTf4MuSJOKHb1rzLWqc%2BQxVFeAXqEsxCikz7EBqLCNPiVj8X6C5NCjty%2FO0Xp3eMIjDghnbi%2FsoFgyWbzBMKtcpJHPKCdYbfKp2fcNzz8jVM2TOmZYlKbHcBhj%2F0ey06XGTDOhvQkI63cGcjDFozbZDh4Yw6wl9mcaCRskIbTqb1na3Zz2hSAekGQ2lPegdswPYBM%2Fp5K4Tkz7hiH14eJFW5sUM052p2mjtL3J57aAOvyH5YoaKD0CYtOzMpHADHH1DgvVUs%2FVYS6wtnz10cp7j8LCj4rMFX9qOptztyo8HfgGs1ZjWh6s%2BVoyk1nUbHSjhNkXa7naNZZhHB6fra%2Bw5CIWUJzQRFub0woJLIW9azTwso%2B4GTtx8Oriv8KUbBxAWBut9nKN4EQ4MlsrxdicBq2OIAOMY%2FJ9LR2syzBB1ft2tgLGe5z8YcigFhycKZoL2MDfUEkoURa0kWWbkJP6ap7hoF1RuBEnnWd40q%2FJVWypNKvaLASLYQF3MO3Dt8EGOqUBtJzyC3c0Slttdh5PhxKdSZ4UYOvSoV9DGORAFSax7f0Z9DEcUZZa2PgleTCE3iF%2FJ0CFxqm%2FpsUeE1l7b00FxTNe1lF9L7SaQgLxtLl0dzVWOvgoMtwOuNs2v%2BvzHNpuNXYrhP5Cuff48ZbBA385R6ubAlPQuTzzzFJEMLaiI%2F1cj39X%2FlN7NuhuNRxrSL1MrJQR36gKRtoRooZr4Y3Y3Nv0Vdja&X-Amz-Signature=adce7f24675b0f34b1b1401b3c3009f88019572421fcc6e77f39b70eadcde5b1&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GO33MTB%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCXeNJ7xZRkY3nANInTyAwo5Z2FX2gCH2ToHMqaDjbcTgIgI1BUGbS5ZiU8kfGtvGNu5dlxLGUCvaV%2BOUipK1mUqHgqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZ%2FoKm%2FQ1GwbwggUircAxtVBwDcaI9jMwjVouj8fYq4t%2Fu3%2FOA6anqIeKwQVtnE4MYp3RpSR3HmfjPx%2FndUgX8x4h2qi61uNuHkinPTB8y%2B27qF%2FfUSUw%2FMBnY7QfHvNwhMupmrX7QdnK8qZQykSyix4mNPU1xUu%2FlG7WqbtIj%2BrE51b2lkJHyf3UcuafxtSvZxvPC8B7v%2FRmEmqEBgPqW6V4xG4F5xdTP8oB18r7tlwfla9eCkADOja8zYU6B7XqxQdhYvHVMTGKUUv1usOmHw3bgsj5j2xstbfOwLVPMHB2k2FI6Z7v7nxp%2BGY4uSw2DBb4d%2BT2y8pP0GFmzP0aiA%2FP9Lizpi45mWfy8oPOhWt%2FYMB8gmuXJPg1wIbvXVTg0fCRwhuHuRhgt6E4PZqnAcMt98c3CscME4xj1P%2BCwjAmBWjFJqi1rNWFNsJle%2F9b8NYpurnAqOAajkMDaSE7ynKZ0xopLeAAdlwiz%2FKr%2Fy9ikxJhsEcTgAOm5LKz%2Fvm9xvsbwiG11D1tehyaIGwqBgYe9LglY18VJOfXIDowGNQo7frGLZsusA1Iv%2BrliHljOcvrtCHKdsakTh3rGNW1RIKVqEOb9UaHAzZHl%2BziUSB5EmM%2FDxJmCvy%2Fyj9fhrAU5SHjSp3SZErtwQMN7Dt8EGOqUB0vLrJKQWEj2iBkEE37Mg%2BA%2FJvwddgGO3Dwr1Ft6GmNZ0Y7si3OZk19p5l7TlmMTQhmU5LdN5uIaLLhzp0Z%2FpT2b3t3e%2B0XNM54rzjRRwmT6AwhxQBEZMvhh6sAiaUJ4JF6KKbw%2FM2k7nIZ34LLmfkPal0LIX3gGT5cBWRszolAOMXwqbB035lkRhkuMqg6txH627%2FHZeKq70Z3iBCyjlMeOM%2Bqpo&X-Amz-Signature=de87a527ce2555f4947fcc66e381847d6aea46bf1dd5a61b9ceaee940b06c33c&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
