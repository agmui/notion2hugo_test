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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQYRCEJY%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBnsamvlRLQ8uK%2Bud1rXYtgXkgEt6SbFkM%2F7cb36CpBAiAH4CdVwDMNVWvV3oaMFqHN9etot1%2BFpfsydc4EmRG7Bir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMUXkXYT0%2Fm9gFsE1ZKtwDwhSb4uf1Ff7UqqCdFi3YydG8IVr9WZNkjxzelEsdrQ%2BEpUs8pYmOyJAMYGp6jK0xyA1iuJVDbHeGXP5tWIYCwLBdsXVX9%2F6GIlcKfSC8XDk2hS38B09ij9Tjygja6NjdzfQdTtDqdTUKoi2bKSvPTFsN1pw%2Bzy1%2FNH7GYLGIk4HtKSuIbEvPp2qE2yCD2USBCfpxhWpmPsiZmC%2Bdnb9SxCnQLWKCVC1BVRhXvcfBl3JG5brnSosqZqwNuCVIHKd62QQe9R9eXr%2BdV673cRCbnDtNxiHqUUJx8ADmr5xBEhd4MgGUCfST4Lcu%2BGm7wiQZk4%2FJQDaB87eaU6mg%2FHzNw6BYkJxlIgvm32Ll5mMMyw8tBZu3BpPYinqakz%2FmwJ2ozhIQh0ae%2FXkdt14raCuk08NzTQn9yHU2sJGN0b8aUlmaajhzi81q4Rg8FOYAnQxly7akIcPDXqish64uVwYZwQn7JsNlK7XepoykRmF%2FIXwOlt9SiOF%2BQILx9gqQQVeRR5IliFIOIJ5OHjcdotRNJtnYwXGXXffv0Zc6JlsZBRy4ED%2Bm8aRR6Nsz2dvxRFuQt1Gw5F46JJjjdeqdr%2Fdk4T36p%2B%2BL2afu9way70IdQj1NNME3tK6kxNaGCJEwsbyhwQY6pgGw6DFi1cQ9%2BfYafJm%2FxV6iIJ7jhn0RBjfXvwFi7n4yCJGWVMOJEPIAZcTOuqPclslrZgLj%2FqUUf0RUo1Kz1hldlm4oj9lLeGnY11oidFf6yF6Y%2BNtrLRElzET4yF5RkrWm8FsX22%2F8uHpfOzqhcUvKCVtxI77G63o4Zf%2FXS6ZNLib4EX1bIfvf3tFWu%2BQGRRZNoTYnnDVRgpOHW2kMuFg8UMz12jY9&X-Amz-Signature=6018f778643540ba529bffe980e31011cc97b462f862efad3c8ff62ae63bbccf&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJZLDQ7A%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BfgtK9BTsFxA6qzHdv9Y9vKqbcua5OgGzsNJK0ZlAfwIgW965Ajtzj7Y0TSiPgjVq0eBY6YZwXHm74NqPF0%2FQUlYq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDFE2UoQGt2VzQpJ2MSrcA85WiooigHQnXes733QiUFTFMYw8mbBTSl3goWM7qOgQbFRkwGLl%2B2v48sCiUi0EFUWXRhIeK1OqGTnDjfr5vxU7VbumHt5CNuyAIdcbLpCvZ38PQNYB4r7lgpXIMegQjbUwX%2FPgZqLU3b578rFvf1WOqn%2F00eEY%2FmNp1gaxvnWGmTd%2FcDHk9J5VO0TLL19YWU3EwslY6o5RNx%2FDXaVDbGWnah6f1224kFY1aUr1q4YW%2FX1%2B4g1JgKoEzps7LA0jspdq67hmi%2BEQfXdjBKZ9ogUqLxybhwj2SaiXSCAQQm4KT%2FHi231Ha5THcsRHxnsFZkBOKwRqS0RAygHa9WtkfXcPPZGFNBdUCwuKN%2BOFUS6pQGjl9BTG2gF0D9fBOB86GbxrXXW1rSM4CgVuH8Zj1zj3KyO3by22883Ou6mNGkSt9cdpVnRohr%2Fg%2BW4r7Jpn4SF3QREuyeCo9aAdHuUbbEtT1YWxyjopU9v2bCRtP8qAInzxA2EQLo4%2BqQoy3F%2BD5%2FCKxz4b50fJ83Ddqi8CpCaAl%2BcQE43UvzEWom3ku1JFziZJm%2F7%2FjFLCY3Nokfgo6GkGdsSsFCcIQ%2B%2FwtZxj7faKXqy7d8rDwdWPkJPrnla9ret7EPvDDSSwCOakMMi8ocEGOqUBQXEBDVJq7gtcCcGLSONhvf2%2FAURcOjuJAL%2Bw2veSbcNKIvhPXaPsgdE%2BXPWITIb0fxosnu36ItNlpH%2BdXdIGfFTwiR8nFHM548igtgzapeHxVU3OJ48a3aTdFwZhs1%2FvCyXdQcq8bW%2BWbZSjbSv7j9nG05KvUrywFaSXHjaKODch2IHSWzzmM4b%2B9%2Ft%2F7V4Kvpgbd5nqM74i0U%2FxtYQ0ci6nLNxo&X-Amz-Signature=7a3f361e36dc17c306374937a298574ec6ef23287c8fcb1ddd50778db23ac951&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
