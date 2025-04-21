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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZCHQEMT%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQD%2FZrCUb%2BeYtmcuRFI1BWDXG4niOg97Kbs7eQ6YG3tIigIgHWV5PvheBH4th2yWgNav3AfpoyAVVmgxUAFhMaLiVGQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2%2FW%2BtZ8PNfuoaCTyrcA9lNHXysupk3NngU%2FTgHGdyFTcbMbWer6lt%2F3BV8XbgRdw7AgCBTgn5fqFgMAmtSGynReTakQ0TVGWAaFMIJq0HIGdvcs8eFhe1jVCkCY4R3lHu0FbV7k%2B%2F21RPGCoVeaAVNvSLtczH5xbLgAd0f6ColhTZTyPEq%2B1Q57hbwi9jLsp6uhLflbyjoMsWxiOKidMGzHAYAa1lqwJpnexKwWNQAtG43P8GFRcRvt5%2BcP1kDgSZi%2B6jzlpxK8ilA6xThXKHXNvuTJlzRt%2BGxh62XfqCd0EFjCJKkyddtrniaNfjY8wAmxwFoLMyf2L%2B5UBuupCVpGkAF23XFHzi2k3Dp4Qdu41GuNvdDtRqdUxLYWZ9Drw4qH%2BdZNij%2B%2BV0McmjAFzFhgvB3Lngb7FVdtHOp3b5CPWtaLpHdBHtd9D6cgtloesfta4YO%2B%2FoHl67E5BhINQ1GDMf97zzTw8LtoxQB6OSW0TDzYnZOiWSQRXlPOGNKP04R6LzQpOxLrKg4%2BXe%2FUCe9ciAkfAyse5ubymwKlRaoYHuuPbGJGrNq3hd8XBX%2B6b%2FD30epsN7yevgLdJuuJjxCSg8sJTdd6knwif4fhrWgT4EtEdxPtnvB7hI5ayKqeJlKroc%2FMpis4xGaMJHyl8AGOqUBgzOilUoxqlJIQgHU7bULZ1ShhcSMkTOLurN94DBM8VD1KargVgaZ13NPMLCfMLovHyv8vOBUYcR1OKOCHNDTosIzeffNB%2B%2BNejjlXXNkUJonkEX%2B8K%2BXCwouD2MIfBcjrhU%2B%2FStN60oIZEnh7%2B54SFnmz%2FGT2kSL%2FrBoZHqkC%2FQVZoMo8EF9XVGfpyNnGNyhX5Jp%2BkIE0Odxm%2FrWkieAhsuf5BGQ&X-Amz-Signature=b5c451d518f40135bb9311399ca9923ff1a0cf4a7304bf9bbc3c1f08c37bd562&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UALBPBL%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T081245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCE2VgGZ83Bi2GT%2BcYXvgPLXT38wuWX%2B0bGmtIHI4KoywIhALV98ZGYbfjhMwzCFyYVVtM6josg%2B7mmrnls%2FYxxDLlQKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytbCBx3JQkW8wB53Yq3AMkN0PjU5banfYdx8F%2FRZlIC80PdpaWc9%2FeN70j1a47rxnU0%2BOTWydS08cHjHRcIrSHEcv7x5hZc%2B42SoXAWbIFEYVCKr0BuSQn7xRHlBnr5w0oHfb3qv6HhC1fWff3iuaxaNEj1%2B0RNZ6Oi1%2FNq4FqZDAtJkFuXs7LJK9r6Gq4Ifxlf5Z4iKFnTVAEetHsifR0zS%2FvJXNwiskyr00jULg1nGlJW%2BSobl3QNTMR9KaBYgLm0phC9JputfZgEgfZpAjmQsgEi%2BnPIT7JiOeLnputnSLqxfvwcXS7OdmrXOXmNi%2Bja2z%2B%2BEEfDdiBaMyXmqno97i7iVGPevMH2wb4z5iOyEI0Xad1hycsyckmCkcOuny72AytmU3hBUnVRUGLJ4Ipw88T4KVPOpsXNuyOmZ0A4ui5sEpB%2BHOI1cDdJuiyuulfv7F3DqyNIoXxh%2Fx0jP01id6x3D8zbQb%2B8GD9aYYc%2FvzYtymmCtee%2B%2FAjb1uYaRBZwe2Ee8gP9QX4WAhGHeGajB%2FFjIr2da84EliaEUjmBSDtOBkkcDLVb3r0lvNbJZcclrVailZsXYxoAOJ7bSwzr3%2BFsuRLK%2BEMcg5Sw0DrESwpHordKl2ePSIaFf8zZCBtvaoJXAzn4bVq0jC48ZfABjqkAcKcVvxePcRAFym%2FW%2BqLbcY4s8oBPG9u2Oe5k12piEl%2B%2FiHDqVtBETYOx%2By2ZsXEu6zsQ1rUWAgwSxX0ThQ7xkl%2FtUdiox57U8kPYWLJJwKn1mpJ0idxX8BMBg5rNNbIgwDmLNfWHNqXRSwn4OmJMfHhaFSwgI2R75GXbrtVLH5w4y9Og2RhIWb2dHHynNhHZctA7V1ANqp0iDSQZnFaAWviRt6k&X-Amz-Signature=7c3ca8446e35984d95a47b59c67e09d652ec84a0132461469d63edbfce7b70f1&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
