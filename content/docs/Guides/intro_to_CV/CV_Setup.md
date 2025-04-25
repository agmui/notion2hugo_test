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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR6UZTOX%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T033024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKGd2zPU858R9NySAMIz9%2BKVN0Ozn8NkCZSY0BXDZ4TAiBH1B4wU%2Bwec1XxXxCAorrJKLw1ga%2B8QPc2MHv%2B1rRmrSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMzErdQvM2jYDOlqdtKtwDsYpo81pCqbDxdW7V3SmEDFQ22BW%2BDCSe1WXlTWeSM5smFHEySphRnjRhz80uqwAlLOUxGpNoxvp49Z7NgzPEC3d9y7t%2B4tEAWCZRanZ1nsEQHIN628C32f8M%2FrINgRBd3Fmkelf9oW2MXbdBN1YDntmTjP6tZg%2BtWUVp9rxlqL%2B%2B0lrdpjmfSoZAYzx7%2Fce7A1Rj7G5zR6%2FGSZl%2B8exdOU%2F266JnxpWpT2nerEzDtNGnUjzquqFxLDUfRh1unN6sPzfKHIpuIMzpE7vT8iCqgfBX2ANuZtk3JxCvVHhpwMA2ubo4rb9%2BHsFX%2F86dHDpy479%2BO%2Fc0fbyYfLhSNcnmyz%2FxD%2FYbUXhBplr%2Fx67LVkyGxxUz1etZ%2FYZY9cGJxeJAIYTiuKJMhSDvpp0wCX7%2BYftgXA4Kw%2BSungnizloESWFHQ2Nn8B3lDh83nh6l8XyjzRHnouno8f0thdcFmeDEZUvmT3gMHxGUnxqq2WiMRlbjWm%2F2Rl1bF%2FRkBHt5%2FxNdE0iT1j9UQ5CycJI3fwM7vFvIH44KV0nBgLk1QQPQilprrms0JYro56WMRqw8eOX0F%2FhQL57LHuCs7Uc5bOTFC8gUzrMi7e9VN9LvcA63dNyXOqc2em3a2MH1l7wwkYCswAY6pgGcpCnh0u9Uy7vyJaRR7xB0nXlNA%2B0PYWvjE24D2J8sjqK%2FyDL%2FE5Nf48e7tPCZy7aZv25d2IxIHQjE1zMvnQw8yylcM054vMr927f2ARJujrSdMF5nT0UpvCxQhTT0Z6CD2cwQ4IZzBWkwWcoTuQDkX1vJKKjUmWd6S2UpIx36fgPRUK5wcgSjDx%2BTqbVNmtgsjxDrj9dlozdiQZxNe5kL2%2BD4daEn&X-Amz-Signature=7a29b2319f5338ee05d85d248a7a4daf35f2e75446cb80b06dbea9b337977064&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKR6IPRH%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T033023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGdD1%2Bo3Mb%2FB9Kgmv4H0BTzuPcgi1SQfl82rkPcjb1swAiAMkpEBYSfF445NpaKBzGBYOCS%2BbTQf9Y%2BxffN4cWwd2Sr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMXdGGbwSvkN9R0Mh%2BKtwDEq3FaJj5Giimsf0crjIQOTyyNPkMIKcP%2Br5vaSexf9RX5BAXsEY3YjvI0ZC2XPb4wg7mUp4j1YlJO3GEngTyTmYTiFSLKf70C3NE3KsfJUUcpB2fdDjK4hRlc6pj6ODkqe6e%2BfpNmwgTo%2B1uxtrOMHWFKiyXY3xb5oomyVKVr%2FwQFSgzKh2lwEUE%2BzhtBwaElJgfYF%2FDXOHXGNcAOUxR2FLtqwpjQ855IMDDvWj5yXx6OrMPqUd1DYYd2%2BqJUOaFMR5wJ%2Fjx6alxk980zBoE1SB2k0wxUErqZnQykLj3HvXPEZu2SvF3F2rBOG%2BiWPT%2B9TXknrp%2F5tnMurLMWTb0PBf1QPre72hWnreI1XWBD4PYCj7dFwzLVSmbTFrqgSaYL83kEDOSA3rMiTR90Etq%2BQ0fjKe2WX88BnN98fYomqUCohszAWDBflI%2BNIrco1hn7IXqDVj6daVmPMO3Abkl5cK%2BEbLfEGjGt6xc3I%2BgSzWt4kMhh1qxif65%2B7AmPaAC8ZLC0EYa0wN7bV8qOrwsVM%2BbJ6Ds3zMycRCKaonjIO3kmgcJo3PY0l0TALWDZ8QufZp0ZhuKgpU4uq7E0e0cWuwpJd7XkPMfLlRyN1LfkBHUSSrwCjH7BymFs4MwtPqrwAY6pgFBrMzjM%2FGb9P0%2BCb9mIcjioVFny2Kv4TJ%2BR06yO%2B49Rww2dXQVIaDfh2DxOMivmzOwktes%2FfPWNXHxbzYDD3lTOVUVGyJqQKMehH00V4ZKFxVe0YQO3arz7QQRKR4DeOfrb9jizaHMWGr3ycz73cxDSva4xxMKVBpGJ4VbD2p%2FNHU9GIxGMOBCm5QBSBtPcKMJHxFlqJ7gBraJpPy%2BWbaVc2%2FaSpYg&X-Amz-Signature=d0c186f34af6610084323a19286084418f14bb088e9729024f57ae4c7972d008&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
