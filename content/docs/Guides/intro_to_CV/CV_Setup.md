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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKHPCSSN%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T061317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4kREeSb0%2B1eJ2xbGyNMP%2FgmcvgLSigkp7xwsQfHlIMAiEAkB%2FoV06nwB8KUoYoyyVAAX7GUawopqVmiGSYjS%2FDHFQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBd9KDmbtq%2F4PN9SyrcA8Sh28OkzXwSmSfNxWtrf2bOiDiLQVyHOqpX99WttK0vLlkBmMGoaabkxJr5t5l5CZbBCHig5HmNgNevHeu%2F6kFQv42wkyXGHCgClk3qyzJ4Lav3Ayn6RRRHWxTqyVpUt6B6Nvt4lMtr%2FS9uyxTwwYYFjJriTc30VbilpOayh7n0rB12WNAwc4lq5sZq0vEa3D4IcdcKQgGz5aXXZ3F7akNKAMKyNYOS%2BNfIj517XXTUTJ9oAhhpZshxXE%2BW8AzKDdXN7nzoEzBwhaMZFQ3h0BbScDEQhE27TWDFOUnyFLywOO95%2BUZ%2F4jGG3OWHm%2BUMR7%2Bb51ZFkjcG%2F00Mycux5fxEbqT8k68DXj%2Fbd9eGC1wvyWPq5U09TqAa5DW0zwlUDnDsFqV94xo5Nr2TiNS2tS74NhI4WGfm7gQqm2ajOkBJZN%2FRqqNlf0eK37oZHuSz4jhJVI%2Bt3%2B3k37JcJKWQMyFnZffPSLIKGTz92SCpZtE5TZchk7agDmlUcnr2oaT2d22hHGLdenRFJSTOLhVpzSNhFfB2rXMvaim74Y18dGSly1Z%2B4wSgD9aff2cfEU0I86ELHAsyijFLjQmuDkBWUk8VVUySw1QPfDgEw45s725aHL5bw9UawrgYOKbHMIGIn8IGOqUBmsksX4HRrVaAiXmej6kEUZ1lky6xXXHTh04NKOFJEx7OLCymHTmq5%2BYzUv%2BgOI9hOKyueFxq6QfsGxOUhSgcTgRf5Di0D0yMHXLlvttKCbOBYQZRKRScC6IvsrT5KuU3PzOsYvGli31Cxh5lTiC%2Bb03XXPklP%2Fx5LXjtGY8UBZEc1aQPLCpwjOhY4feJoMuyyP3BcboBSDZcmFfZpQuA0QhPFXyM&X-Amz-Signature=24f982921f120d8184f34144bee4382aad91af5003f482aa972256bec1921f2c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGY2MRBF%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPEo3RPXPzTrHsIl6K11uO3GBfCFny7MwK9eBeLkAVCAiEA25vNvLTFQdCLakSHBaymR%2FmqiLVkAFxvzkgfrCEjbf8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOy0ZSVidUFMc%2BXtAyrcA%2FUgsY1ixW20%2BM2Er5YGYfXpJHk34fIPP7i9EpBGFVUr9EQfGptKz26tSSEM8jFSuOR4GSf9mfdABe0LxzXl95WgpYCUna7NDWpuEvE71%2FIa%2BJon9WzQ6wFEksoA9uTV4XxLI1cZxqIq%2FfM1pSmB%2BgzMkRr3%2BmxSxFHmGebSosxqqLx%2BMMh7K9yx9Ns8Qu3FJ9CSLJldzIjWv4fqIBrTuvZNfYme47t4wpUoQdbrxGj8ZGoKis8t%2FC2D7ygaLZjzvtRJzcc%2Fo9dOk7TbxZKsYe%2BOx3hwUWxfziS2lIULhlUiXPFJyD1DPNeNIcr%2Fsdfc1t%2BnjzonQ5TXygmVARzX6mCtqjtJfHVhPrvxAD%2FXPBGPOFvQjFRItxR7BvQ0ERuhz19DtGdG00ZegwSc8ht91uxKa8Tc0JUeqOGY%2F4OBTo%2Fr%2F7vuW5h%2BlzTXBkI6lqa4LjTWcAoFd5fMYpqHiusoQeCzYUBg0Iu2cpBHMwjoxptzwDhJI0rcwldDR8ZOlOGB48Wq0So47qnzKUn8c8xMShUxGBtLnlPwwVMcy9Xua7oRliwYkETLjiEcds1BzphuQ1G3LLztVdSmf%2BG3w5JVxRDPEfhc92BPRyYITIre%2B6Srl%2FmlsLTcWLqbfFeRMKaHn8IGOqUBJoPOoTN3sf9WrWPol5lZAaUiXFcEgBWiz40L3wQ6emTn2Dc2O0xur3vc8A6xQkfyba7mfLYX%2BnCBJIcpyOn0%2FZEblaul5AqKzU5hkAYLI8ES%2B1z8bqPQdNt4Q2NAHyR8fV1l2SImxcrU6pr7n09in2t2L%2BSWnACaMz1Zt%2BVugFzDqFPsJo7Wfx6OkNeEn%2BHOhUIWWOeyxdaPnabcdc96n5SCmE%2FJ&X-Amz-Signature=e8f2835eb8b5eaa2af7d16de1cffc54adb49a162c0c467d8285e9a82d732ea7b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
