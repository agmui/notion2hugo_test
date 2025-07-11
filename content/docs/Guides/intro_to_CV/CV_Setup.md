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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP3A2TC6%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB3XoFcv9urho%2B06mh87j0SchyRVVfbE5I6ZwLmsOtSsAiAfIsaEIXjJfNd0Zke%2BxksfGzyrv8pePiJXO7SgYZ6XSSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa8mTQR3VC9JUmUS9KtwDV6c1axgjQTVv4%2FLzsypB2cdrcoLDjZ98OJJs37DSOBWv1ElD4h9YQLVcsXbJJ0JAqbkQ6iRl8xiCullIwZDFO%2FH%2BfUmNar8jjm82XZI3B%2Bs6c9kbIN4oIfPTuVYF8fDhsdKjdVaHakU4rsxVJkrXYRQNQ0PrfRlDL0xAteCdyFN772FHjPFwUdipTV4qi0IrLIqrAJwwF4E3BLynQusVJwzPM8%2BWsIPA28bcnnH3xPCNZ177amzkoAYjUjKFvM%2FBcjRkuboNDcfISfQXJ9DRqeu7GyprY5f%2FSx0CDAfotonBAXAnEDSzNI43MQwwQylypaymUZqkSQZn8mfnr3XfAjSW1xH0zuuR%2Fyq%2BIIB6frWUf7m2XsQyPkhjJwvG0N7F0rRY3d0S%2F4hZ0D8HwEYriMUupWgKgUzTLmyQ186t34JePxCHR9Am42xet9%2BETxMKHn8dqnbK3NRgUGbx0RElr0ndJFG4pKZYsKs9i8qSBAKScc9gNedfeuZYow76GoaSgyYIX9trfQhS%2FZLAm%2B9NrupQLjssT0y5peh%2F8Jr2opQeuwp6AXgo%2FcEZXeO8YerUACtwh0zHYXdm9%2Fd%2F6gzevNBQM2aNUP6dK2y9rM75eIvySQX05rBGP7CWBkIwmdLCwwY6pgGOvZ0gN0ieDYJyhe747DB61gfMbT5TJM40U%2FuhRmb1aLIub%2B8jJAU1HkAajSSWTmYb7iruiVsacjPHsp6j12j4Dpx%2F5Kqumim0wPB%2FcvswiKsSqZI9w6ncFyJpRDF0oY3TVScWt1QvZn4VYB%2F8p%2Bs0bIGiHmMWF3pMDnqz4ax%2B89fcB5OIp6bxT807JZahAje3mypz3x%2FgnoVP3g1oelzKjCWwlaG9&X-Amz-Signature=2ed9344bccaee9927914ebc050f74bd3a88354e257647ac6aeda79bf687e04cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663526QOXB%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUrRhpmoWVSms5xu%2BkqqdMGXFaN9sA2Moe9mhvzodm4AiEA9%2FBPduoaQADsrguQMGZ82JqN145IhhvVdDcFnOOQUIMqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwHcOBr9Z1jj%2FFJrircA2BbyP6UIMzKlt2dvg3c3EQsu%2BhmHVDUq9i5EchN%2BcNcFbDMbIFPPOkXJsE1KqHaPH%2F%2F2OJZZdA92R1kl5TNXpvI0%2FrjpXy7brAOORVCEqysow%2FS%2FnGo3oM9sqIkHxKEk1puDA1LtyK%2FA42I7qzMrO5%2FIV6KxgmtDbvCmKBjKSpowCHoTWRuyNDSWRNAX5I9RyrB2JbopG%2BYjLlf2w8Tcn512Y6T%2Fy4ikw7oGe8shF7eg%2B%2BUw7hDRr39Kl7anSwF8DaQ0kXAmqbdbhPv2ccyxkoRzl9YnHeoUHkK18PnyxOkLJbwoJ9jOpZYoSErpkcs8PZ8zuqGWGCOwqmLKwCO5gnktX7AjlKcfzVQYoR7v72Lhtj3q%2FivPKMP8GdkpUHxPuyTevcAP8yfjT18tL2T7D6YFDcNt%2B9uKbmcpIACQ6FTJJdD%2BbbbEQGDtyWkiP9TACNBrdhy3HqDakTntHesW4UeI7rE2qU7bQdkuc6g9EwgIOAn2JHewj%2BUcl6zFZMhRYm3uQVq64bP91%2B7wA%2FwS9DeArC%2FP6Q6qTkIldGmdURoMIwFq2Li2Dnhs6SEc8Jv1PEZ9hlwBlxcjtYblSDf%2Fm3BwB9BrR0%2BU6evnLAOdC0mmdoaRopkAcH0avZjMLXTwsMGOqUB%2Bgad9rnW0ZRLTPJ5fzOwMT2pEF7CPCweIKZMkGDtEfbSPr%2FxCDEowxXPbYiZqLBJVapJ23F2Qamqb9ZdBjq8YTx%2B66GzZeysIr%2FZijrHWp4Qd%2BLV4rH3EGRiyDCJA98FWQtR8Cdq0%2FVYL8ukbVj90Bk4zZbzqOQ08wrvTlQLitcbyhEuUbDjy6cYdmrw%2BfSj3axthqr1OrgzdCJuRVN3SUuEj28e&X-Amz-Signature=995ccfe19618e4ea0e9e88349ed932a7ea9b1dd82c812970de04c1144ec96ce5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
