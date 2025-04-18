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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YYNAFSR%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaRIeWKkYevlTznBFtjo559lTHpjOfKD57SzvM5ledZAiAx%2BQ58m6LV%2BliLSgCfw4%2Fn5y2A7rh7P3TuQYghF6cJDSr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMeUAwRCZLWyV5F4QuKtwDSXy%2F7XSfVfmTIlb0Y0rAkYMQ07etXf3aIlop8LtaxtLhH2Cb3wvDyxQxVtRRuGDaxBOG3S3qutRP64jWoWRWn%2BfUiwUu6Y7T1go2Y4vBVtGTlsG6YsBRQ2%2FC4liCLPG6XbbT0kPLP5LxGYPJ9qpH5s6dVcv0xoSHazpHqiFrirnhgesSwhcZIA1j4IIYkGwW8tqC4ikuIzt6gVgMB%2BnvGpCsDIbNL46EiKRit%2B6sYBn7QlT6Z2C6y%2BXBXtSP%2F58v2ts1aXLUwsULtXSuyLI0Id1J0EgpT95t1YnaDRtYHom7PZUuII4EgPd6s3%2FyzAvNmMmnKj2IsyguP8wnmAk4lXZ3Fnd9TvoUYgcuFxF7ITmHikteMnZ8M2hqERQUiwenVa3W%2F%2BvjWsG9%2FXlOwB5ag8HMffA6A6UfMRKAWizWO0sZsn2iwhzQeOu2hXBCXvpFaeekYsfAnXiUzDDXxaZ0rehc8TWfcIeturcxSbPEFPWtziZ%2Fa7ML0hFLbEZUt2Mn6p7MK6%2B50bDGZCprAdwJsF4e7w2z7IQwL4DjitHAKjGwlzM3wY%2FOkyRFMKsO%2BulT5vTyEJoOgw21QFGl67HnB8kpOZh%2FYd8o4bXSDP2HPRqNJwY%2FZGynpgbrBJQwoL2GwAY6pgG1dpljrq6uX1UrJmMgiM6q3krxoLOW9dOXWyhCJ6erY0axFi2epKxj%2FI7phx6CSOJ0FS2KoVOlaRPtVX0L4z5ZaRWKsJayMi7o4eIlVFqjoqfiQSya0Im5MKU2qNAioyplLFjquVXxlKJG73U7rinxEPz7WPRbyKV%2FqposcCqF1DvFuNiOnPEAhG1OIehre58CfOfA5iTCJkKJkc7D4iVGJ8xrkJwA&X-Amz-Signature=cc46ed510811ccc198b8ca1d3e3246798d248423f09f9eff7fcbe1cd6d8f9594&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RG4NPXQ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD96QjQ%2FHg81W8AYvR7xYKu2qDNJqh392rWGvgCY9JpQgIhAPGRoMcCdmmTvp7Rqz9oBjet2ejj64ngv4WETRXn3STxKv8DCGkQABoMNjM3NDIzMTgzODA1IgyfVnwgcqjOwdwK22wq3AMi30q%2FbyMQ12YEhaO3jpf3mFVN0aIpFy3vSBjv6sM9CeU4hlBfx1lZvAdXa38t7r3FGLzSGZZgvWpnQ3Ac32PyiKT2Ke6m1Nhs2VQgNgvTtSwartLs7CWUVeRalBhSEoV4LMHpOpcevHTkT8R2X%2BlvGCy7pkZ05cgcKo75Qgv1W%2BhZy8evIl%2Bhj01463RA2GGL1Q3O%2BLcbhZWtxx8XjJZY8yb7Kf8xChvokr2Nnld3vbM5rVTIoEyeyUP9H2BTQcFuyLco3HWZOQwRpdjuTXzdV21EOoReLb%2B%2FXwkAOK1gJkHgl43VhFUbphUF8qc2%2FCrSDCy9%2B4srmpeeC8hyikXfYijE%2Bd7b8Wtoz0kUR%2BZkiy3tJjm8941xMoVLyfg%2Br6w4JK9hdIdwp%2FTwrfXbwtThlPKCvF%2BVdg2a70iu8wYjJoF3QhrnC7qjqsvDooppYJ1qOJpT3smmjZU0%2Fw5eC4gJ8dNK1KfilYjniGu6iCnSPtmegsC45BKZKAmvFz3C8P0T8c88qnfs6vFugo9oplQfJxWqzoSWmP%2B70BNfZy2aLK9IT5lV7SBpzCXgpOHL4avtSsk9QczqUnGGfU2gNVX%2BtPrrs140ZDY4z4HcPgKCKhmggX3lPensYq4ANTDsn4bABjqkAZYdS739RXbMp6rfuyoyo2tVv0hn2xBzyUfKQDP2XaumPtZJtCo00Ze4MbWRzBTdGhKCyC9NaPzkwm54oUreOPg6i4h4oge%2BrKh3TqdyLNg0dhfpZnTrzZvSYkxBd87CI4CPKEX6PHyNY9nV553CkbzJxF1vqFtHAAQLJg1AzDP9DJsNcIb8i9nHXTn1OVvq0xWwaWr0Hxh5wOevc7Flw99C7xGh&X-Amz-Signature=fca6f0a80ce38a3d89240852089d36021ca92a7c512c8fd3cffde9e6cca2c474&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
