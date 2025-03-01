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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJYAC52V%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIBgzAxjpSaYlIa%2FHVw1QUS2l0w1gwuRk2BxXdJoKKoY6AiEAj4DTfTitZ0ww1orEPXdmtWWH926qIxafUNwYtkO0FxoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPzquEx5JnLUMipOSrcAwtyX9sgWCWvlSXIsoIBmNujNKVs8d6bN9J%2B805mBFOqx6m8wdYEdl4tXxUlZtn5RE5krMd0jZqhkS93PjpBbLsi%2BxBI0JBQSLfcuLKwnBWjZogrSwWD0I9vmsKrw9y7qV2d4r%2BoV%2BqmfVu%2BAW38DfOZoJ8cKB%2F1VWs1L6gMQK8jjPUqAvtgxFTo7HRJaFfdo9h2NEqtWWsq44DeZh0r%2FUPmWQh8CkvJv70ktd0wjFw6ahL1CT4X84%2B2wEVyYKnKZtLbkkAGOq%2BVIF3PJUCcAb12SNZQ7ncXuG3Eov5WeoMID3%2FXg2nR4ZIW0NmAcnJVOcdkbp7E0vAuUZs348nUIVRIfVlvvhDtYhLbL%2BqJ6Ko4Ja2pBWjrfSn%2BIUwkrH6hn5cS82nZ0Wkhfg69Taida31%2B6eSrerszLwSFACUL20mC%2F3Ha6IFemKKfSrHTqkU%2FKiS6pBFeVKaKNz%2FfKkgXQUuwGCxJuOwahN7jhNWIgB1CIH1SaISHzrnLb1MMMos2hiiG4e7%2Fl8MhNzrAgfO%2FyCzYLtBVqky11ii9HiJ0bo8hXqzLtRwCYxmrFxGHEP%2BgMqvOKECXCHCIVYuKjqJ5mAq8zBTQJxEUzJ%2F00xnUEcsxh7DrW2w8uNB4dXhTMIuVjL4GOqUBYwwEp%2F4B5JNNqdTquINTEgFy0F9HpkVoooJ%2BLIpqMQY1WyeYaKOsZzyqzmTx%2BFa4S5d%2BKBjzpBISunw7EQe%2BC7tUCdTM4Jl9S58CjmvxBOFaV75eFhkeb5v2L22TujkcF2P59raE0INReOVPphLSJQD3FmNxr9GxnymhAJQS4diNQT56x0qgOjWWQ2r2HKRaK5ciDDRkDmC03YxQKThRfgltcvVK&X-Amz-Signature=5ce302b0ca52fee8f560ca4c88f5bb4a4be6a4d138dd609868509beaac6f01a9&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YH3OYVW%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD0qAQB7rDMunpCtEnoduI1sy%2BQfpek6V7Qr%2Bt4ATyAzgIhAPJpVnTY3MEVGhiawLl9reEcm%2FNuSVDsdgtDAe3WxnGrKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyxMRbxNdJ1%2BbEuFsq3APFUC82OjQykBjoKN0LsWoG4AGktQmWVVqapez%2BPFI2%2F0iawE5KXIWqDf20QxlbuwrwLdCqTdWKuoAq%2F0CxZrOo0FiX3ND8uKvbyOXSeDaWqKIts0wt6LQFURw6cFRUZwK%2BF%2Fx2LL4ekaWYXv3vEjwRNWhjmw96zI5VbEFRyIBizvpzpcdfAj4o43xhicI%2BSS2TYJZ571IQ41khzZXMeIcpdE3VA%2Fi4EmnL%2F4rPAG8%2FEySY9nVWTVELH9tEUvA9Fm62PNY89unQW1u67w61%2BztmaJrrH7XyVZuqvbaQXCruD%2BUuFfvi0HmIVLZY6douGybjWBtLP%2B%2FcXN8iH4%2BTCCE39gCmIM87CK%2FSChI8RXIQKb522mWI%2FDZpptWhnwEzz7fqC%2FvJDNkxD8h9EbBXpJ1%2BdYwJKn1GB%2BgFEPdT5Y6Zd3xZMUQ%2FkvNmbN6ovaGB%2BQAUSdnMdxVrS1ZrBwx%2BSbBbSww8n1iQ6AXOTEb4ncVNK%2F8lI6a0SDczdkXovrdBY8ZXvWQP9JSOF8SnwSzu3iYKnySvtkU8HFEdfXbRxnCgTEvSL%2Fe1n1AiLVcoWnCOLay4oGRCkmD1V%2Fnduj%2F%2BGcgNkHkiUddGJ%2FN3uFuij8vhbXQU6rnJhy1YUElYijCblYy%2BBjqkAeIgb4Ibzr1o92AepwxbrXF1mZWgUdgjmuQRWEm63TSxkMXnj6lsuHzPxCBeyfWltwQ%2FuKkdAbhjH8ov0QZVa1r16HLHfFhnQvHpSg1TRtLjJj9Wnl%2F1CH8qtPDEDuXahigjuKgFtvfKEioVrpc%2FFE3zQ8hNd5VkzKPebQ6xzGHzSnz%2BGD7rQiKrEDzfLageHH3V23x3BMDYEduZAIzRdewqdo4V&X-Amz-Signature=6111e977e643dc5a1dfd96d0dfdf1c1f77bbf63d23d2a0c932485f525ed7d744&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
