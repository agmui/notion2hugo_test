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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHQIGZL7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDk83XFVYzqgHLSIpJaviEnwrQkasRofhgqB5kRvidZPQIgB46LKbjTBvb6vnotv7s02Ujlnc8tCe0uW%2BPHB8hXtN4q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDM%2Bowc40VSVUjCYBPircA%2B4CzTm8kuW7%2BzQJ%2F2CMwEmuSF6%2FAYf8Yhh7ZxDyPVkq%2BG5%2FT8n%2Fsg2HK%2Bx88ls%2BJ%2B%2Bk5YUzXSAyAyJTLRxm1qAn34MHYjyi0ECHScxskvlFS5GJm9JkYkV4%2BI4VroK%2Bg%2FtA01Y42LT0MyzjlnX9W3U1KWjYWheYQKUkxX2OBf2EFHRxVpUkb1gNfO%2FM70DyQo0avddA7ws9sYWXxkfP5oXMYtynQjyUIMMVV8i6bmT81dyE%2BTJ1g6nLa3zcSKn7IxSA7osC%2BgcDWumgLSlYMh1rGqd31td%2FoatUwb8M1LYfvWzS7RxGrXkIezRjF6S9QfkeQHlsbRv8lwRpHvNlyqzPeuJBCkzLFXkCD0qAHdSKx57s0OpR4pBUKMlidWyoHyyazG9oNZZ%2FsqAKJowxE%2FQTB2lyrwf7LrZjY3W%2BRuWoE0XxGjDMs260Mlxz2yq8kIyTKPy83GUO4%2BVjbWDHx4uxaEyBVBj256n70NTBkNiYhwxLYSLfPSMGsCK8x6Rmi5u0rcqsuJaJra53hb1lpOniMjwlke0Bw5Tm1h5ptnddY1%2FC0wGVa1NNm%2BJW4lV75m09SycecjE5a2WrSVxnknzeQZ%2FOdFfq9n%2F5Uq%2BYa1aPPtUQXOOIbHYmcr0kMMbqvL0GOqUBRteiWHa3SIaWM7ZLf06nCuos5tTntbM0ifod07suFJIrkFS8pw63M9sdxBYRseUumZ3XpNlMnhwe6IzZgoq5y5BA2zri9JG67fzj%2F3%2FS%2FGz7%2Fum6er%2BwOpNyBl3NBZLCcWiuZCGwtI5DlHllHDfjaXPs%2BPr2OWb28SeIUVLO%2Fs2jOFGwVg26IGumDMsJajXBEH8E9Kt5Wx0tE9CYxybZ8c1h%2Bg5j&X-Amz-Signature=1e2288922dbcf3a9501bc8252694b429d9b49bd7e0718443a1eb65718e72ea92&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672LC4AV6%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDsv7c0dnBaWkDZV20RMoGE%2FaP5juQsTEcE11qMS4j6HgIhAIPxuklxIKDPRChgWiyMCCPNsaFA9B00g22Ra%2B3I80mtKv8DCC0QABoMNjM3NDIzMTgzODA1Igy0%2FXHVyQDMf8aKIi0q3AM84B5CJs5pakLMG4p%2FIuAeLkVy7eUCbJX%2FhTSc6VWeY7uNSmwenxiKf1moJi8ud0ikH0qMj%2FEhBAM4Zd6oauyEHuOdZSxGohT6L8DsJePsxf4lNZkffD3pEd%2BFt7sz15GAb6NFRzULMT9pEo4OXHeyV0GzYOhmeqdJ0iNhAKMDtiyZPFye2F8x5Z2NUBrSCqfv4T1miLnqhU0sr%2FX4s0osbO1zMEB6TNxRi2i1cAKj52vvYqaRfc0Urc3yLYLJ9y29AjUIZBvfCLGGjNc5wpDbl9VTrMIunKkRq0T1ud1ijRUoIwRQ5jUxSx%2FFKnVWz0blUCocTUSf1Oo6pG%2BmJ4tKPXwXYjkG5n693WbIA3fJl2AJqIGVLDMPyYOBCUetL62yyE3huEw5V9ME4XV3OsZbrfcLrCiyZatrYHLhmzYGKB%2FNJAZc9fZRl8UcEIOWDnLL5vusRNBJp55qPG5RW33bJhqukQ%2BmAWcFyF0zFV8UMUheY7kN7baFIUeyZ3LQeuejBqWP6dHEJ0Jaj4pZA5FS%2Fje%2Fevl2E%2BbWSG0mVDERTjJt4tSr%2BOaybYEmRT4oiafeF6p5V1I7nRv4D5NYDJBtdWn0Xg0MvWEo4QfLvTI66jK5bu6QWbHhN5VMUDCE67y9BjqkAVduXxILI%2FXwDnBf8HK7Cn20Yd%2BxaLe4cYig3odKNbd%2Bogru%2B4l3flmSbgLtNF9oyXVCjE%2FUBU9vWv8pwUSDnxCnpK36ligZUMrJHEmwAdDvSST4qW8VenI0KLwp7A%2BFR28X4wykFAqm91QCuqo4A4D3tPmeqdhpeJKDOUzwwKDV11C3MNguFV1dFo1v484P79RUarHas4p%2FTUtVStCjmIBZKS3U&X-Amz-Signature=261219913c8403286c9a97d058293c460a59b8883ae6c89e3a039ac01becda92&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
