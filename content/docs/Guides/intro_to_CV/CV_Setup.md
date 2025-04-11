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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QPGS6F4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIDIQw8oCgwCnDr%2BbrR%2BUBu2DyF23ot3x1YNUjC25Tml5AiB%2BGxwIeqOrslPaFSVQ5eTfBfzFzmgbOC8uUx1rIuGeUSqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwouQ8lh8QfpFO64jKtwDMVmZodXuswaBHPRmJrB9XIoS0KeVtXo322qHRo0d1c4Pzoewqidrjlye6GsuKtKPuTWHsF2ti%2FVCDoEdErZRlF2eRIHY4yNdqOvfkLk0vyxVcE1Z9uT3x3AXgxToX8Oecjm%2B1dNV1tmyPPh4dv%2ByB1lUaF2wp%2Bm6kSORPF3dL9PWXHP8dCqM9FOl%2B1kRuZGbVoIDz%2FR9I%2BEMWD7QODpB8a%2FXLK%2F%2BNKuebCXSvUMzZsLlauhMj7mloBqCvaby%2Bjn9KQXfxEwoQRYHxyqzFkGMXoCh%2FG1CviakZQAqFsu%2F%2F3mE6tnoyZGA%2BmLQ1GjqixymVDeLGyiCBmJDY8POeV2cwQ0zTFt3Wx0kRAn05xadzZzPSrcRxX15S4i8V6f54JcBPkuarX5a%2F1nnkBM%2BxvqMm9mqQByQmHhiNzF2U4CEK%2B0UA7UuA4lPcWDB3rCAROxuZ6z%2BHK1pZWrfqdUBKYZZfb0dkufwfG1sjGDW1hs2oCNpjcqMBmWuYklacZOLnEfhlY0AzhXEetgUUmWKAKF%2BWSvYZ468GILjHFHdBRO1e89HudxPhjgD4eucZpiaO%2ByMH1Iq6fio8GcpFpihCyqD8X9%2Bv0F4KzDnglMShsFq5E%2FftFu25A%2FYNz6FxxYwyZvkvwY6pgHBfux7GPLhvfkuf2Fts8kOssh5mx4jR8vvvxF%2BcdVRUFh0caxN5FtOx3jrOh9YPeDwZlugEsRYouo9Ojme1YZnotMm%2FhX8ultKTsHqwa4QsbsHsAslzBsKITdy1e8uVurbxAMRwUW6gYbzN8eUe25hkL10YoDZPgx6koxo9IK7Rg1vn2qxDg%2FbPb80287no6yRIyWDjz8ZHDQJYoJlrqeAHn%2FlOu3p&X-Amz-Signature=3052283310edef4fa21c9ab4ffb74e26b98d29eb7bec8d941273f80adf388285&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKNNITMO%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCOI50Hjkk8woeJhikrZzTd49iC3iC%2F2tRfHBjLfrUIGAIgIFN0ejUF7vnarN9%2BJcxFiX9jkEZDPuhCJcm6MaIX12sqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2FwCtuCLWYuwITgxCrcAyV6YwcqQtimibOMSem5lykPcGQBiiXHxi88iZxEDsKMQ%2FRZ8su6M5svU5mxGGVNIyv7WGnFoSLhQUSqJs1dr6%2FufzeE3G6eU55rCkSSaV%2FRq0TRzEzfrcESRaZ4s5x7LfzTOlclOTpB8ZUFKoXGplJP43FR%2B%2BkTUU%2BRPDFCz3i3NPesz7juwzZWV6D9u0NFfiV3YDJxpba3%2FaQZpTWwFJC0H%2BQYFN94HsmAe%2BgyIRJKZomHDH%2Bdz0xMcATreEz2yQN7i6WsR4YAA0LwQUhxITvZR2Dgsot0WCu8Pa%2B0uG1dSA1QphjmMKLKNI5o4JgAIEQxb6xbp9p4GbYDn4Z6Iym3%2FlMidM6qHQ262qzoRseOMBAbpdXooxWymWAK2vSj1%2FDHoMDuQsl7YKYfBivwNXXNLox1AuQeYo%2BQ3OEDx4WiGVKfTUYVJlgh634Y9RcLmgC87EgUc8q0Rse3x250E405oDYT1jatkKI9eEAe9Li3DtImil%2BGVoeeYPpyOehiuRUB6m7cdC8U%2BxtxAXr6PX02Aq4w9Qwd5Tz5gE2%2FGJhNeUO%2FL%2BwJ9pQlnQ2vUVOvauAJlNTzvrmmQyaZlTQUYLzCRljDFrTIKuy3ROEgK93yKtgDQSX2RcBkIjZVMPib5L8GOqUB7kxHsW90IG3tT603N9r8LKU9A5iJG2LVj0wAiRsSLg4L6cOsNFrgWj3J3lwU%2BD1fiTxbP6aduWbtNHDE3SWaK1Ax%2FWUmk5JfYBjK68%2FAEHx65Gmszy4OLN5Mncmp1hSjL5MrksvoJn6O9Syt39ver5EpYTydAUfzcC7IC%2FO66ZJcgW8HjEvpTvKZK5TE5%2BYjQs3huxpsg2iaUyoFTn1ZJDOhnbx0&X-Amz-Signature=1f6bf6a1808d2ab414d11b17da4f6d2e6dc25d3444cd5f9c4392cb477ec709ca&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
