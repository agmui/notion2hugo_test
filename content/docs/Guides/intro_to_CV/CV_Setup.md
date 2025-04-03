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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE2I3URT%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T131944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBjViJt22gfYnAe3boavSg2KE1cPr%2B2cujn8xt%2B0hhVnAiEAnoa54woq3FnFr9JxTz73%2FveWPfQr05KjgAaBzLXoTBYqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDObnDhqmvnph6bEN8ircA72PiTea9aOj5QPapv39UGYLZqFa02IwLoNuHsileVa7d8%2FnSAtRcvnbbb6zey8NrFxEm2VUm5GsDXplX5%2FDLQ3EDLdpSBE3dVOyHeTLN0NZvE5f4vrTnqFouSfJSoUsE8xeT%2B1H5xO88%2BxqoBBxxKmwt6UHiRr1VvXxQ%2Fhk%2FPQWX8oVM8SCerfGu49hPPlZ4%2BbnA3GwgTSI884Z5ua1fSzlakH67qUJqpWflzLLIIUv84hh5KvfSXnBfY09I7nDWBB44OdslXSRZnvbqDSdZch8fRo8qQio4PDzkT7Vs7CQF5mNem51dkbkDFfmvDAV%2BBTDha1KB2G%2BRYTCX3E%2FJaA%2FfXgP%2FisuMo4CAofJeo9sBfdLHZJKe9alQSFQ49%2F81cNyQaGlc1BJFIIP1lotA7vcP708cfoqg0NyrMde8g9tA0J92GHIHYiPplE56AHD%2FW7Sen3uZE%2Bb1HKlTH5EoW9VSnWG7yRRCV%2FAuCNpmz%2Fy12FrU0fgHd3spNURLhD5VWVRqdiBbHZAxNZkzId6PvTKfVZuDUYE0T5HbjhciSpBdk5iMDGclhDAcYYXghkS%2B9cIhLPKKeXhElHVX6dnMLOhk0ztDF4yvt6XslUntZFh9I7WXG7EMS0hT%2F%2FRMMn9ub8GOqUBCQ20fY8ucji1JNhc0GYnJEmSS8Qpj0UwwoCIHXcRblgzdyTHSNjh%2BkOQqcExOMJA1BzWMvznx6NKxDsEURuEhOjinQEFixK5d%2FmQ%2BkVtWVJRboXnc5fZRBklHzLbsQ%2FvEwxHqfFD5u6NoFpCcsp1u1uHIcR2J3nJJv2U9AkVbKtY7awN5iMnQoJSWD89fJn8D1nGvXyfSTaZ%2BLjKfDxXqf0AozQn&X-Amz-Signature=ea7de7273e27e6d3d454eaf909330da04e734648bdbac76df041f08476f4a7d9&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIAOZTPL%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T131944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBGexzj9f3HdJ0uP8BOJZ%2FikHv%2FZkptwjA8tl44d%2FxpwIhAKF4paYoEH7YJPwhqOWVpvDerYsKcg64LC7Hghb1N4niKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtsga0UoR%2Buu8o0QYq3AOUCbbAUVVoSlQnIQgbKa6gld4z5dtJlLQeovp7Vy704YyxDtWYmZeIaw3oetKQhGjZi6ugPjLNagSmDs0JZlV5nv0PRM836lWqrvCTl578qqIboBauTGmQk5dMcklEfIxfFWL%2ByHxdpGOooAnyH8pTFmm%2Bg%2FKw8UErtiXlRAk0tnAYs8GHy0R6qtYXwSMcy0qzRr%2FypQDvMxyXRYYzRDd8KT4MW7UFovJwQagTX0aQgF0pPZzage%2F4GD1nE1GPh95SGHswWbqeJ4bSzBf%2B4%2BFof311V1F9bpsgC51XYCU7s%2FKAJ2Q%2FwNXL6oosdmcIHw0ztkw%2FrsaXpS%2BDub7rHH5c5n%2FxHugOcj%2Boso1%2B1H7f9bXA1uZCIC9q0VA4dFtlGUlTSNZaXRwVe9PaMpaeCvAxGvOoyvrd7fpGvY6PeX3L6kJ6E8yLGRBSDbIDk1CKArSdvzO%2Bs%2Bmdhs0pxixUmj%2FvgWm9qS8lhXRG%2F%2BHzj3ZhUxuWFDPNprN14mdFli2MQcv%2F%2FRIypE9awy8Qj0Y%2BOK2H2ne0mmQkDvorbtG1Ywvbc6ULZg6xrUL7gfdABwkt8fGruiaLjKb2aBhRo7uiL9gdbF19EnEysVNZM%2FvPVPHsOTFF9f%2FWrruD61KaszDQ%2Fbm%2FBjqkARUcrZ3OuqegO1Y2CjT63XmQYX0Q2xfdfGPc9i7EYaDBYjYYpN2oua6DBHpsjumEaAYtIKH2cYN7Sns9u8%2FZib8E%2Fj84BTDOwgdvc0tXq03oBktoVPYpCtvhjMj7vBlCwpHViHtsGYoKqdrEZuGNZVy%2FkoHnS1ELAMa8bt5uBz18wonHrfPAIVTGjLFnzy2E1xksAdrW5wl5760btvDnxHtLXGn%2F&X-Amz-Signature=4e5e45a53cda2972f7998a03a5f2b5915209b2b34b4aaecf417552034c99d322&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
