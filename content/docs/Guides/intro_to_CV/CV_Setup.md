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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SYIXBEO%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIFHwYZmDC9iN%2Fw0DlpEV1ecEXnoO8YGHGgTsyyRiAK9mAiEA%2FvBqj6rHZwP0aWoPvi6BTXftASiUIO0yF%2BgZlb2pfPEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDKQrmFgBK%2FZQN2EAtircAzMK1amX9%2BK1ZdSE0izqjWsEhZ8PAlx2o%2FSD9BLLyrIeHwmHbyed2WS1hkMMm%2BEqQ8zolVKkldQx8l%2FyY2UfyoDyCL%2BmZFuXmpsDFzAZ%2FEQoYUSgKd7QPl7UlmihED7BqCe%2BhXez8VX0KthbGkSCjAVmdartCRYTazDEtcvfPkbFcsNRlsM4dRMdn8jrWMXWl%2FUelpBBTXIIQM0sYVlYD26cNFF%2FKmafHNCINxA9SB7HGmPMZ%2FxQg6A2%2B7r8rAD%2Be0Yuuyt9HbA48tR74aL1yuoUaJCGFD%2BexgEI7Si3j1ZtqiGPSv4eWfaPPJOpsMrONU1SNN3En8Jafd0pnUQneU4GAuHNTLyUl5Qk9W39kZi7JdDbf6KXpfjdKurJwf1s%2FE5kp1SZphk1IGXUooNmtLH86HfAqo%2FlgrlbowiWtH3BFwPLZNgxIT3OUTIexQtkCoQREm%2FaX6RXbFsrDh4CFgwk3dyuZEqUaLcTOYUinMaMmU32%2FfPUcx0IVVsG%2BxhCwVe%2FV3Dmwg%2F28OCfOjg74GBduZtQ%2BVNGlbApF56NZVa%2BAJs0gZu7s38NdF42fa68HJhYhXm%2BPdgH%2BlLvFEr8nybA5Z6tWPDoVyC5SrRJL8yZjxeZ43tecU6c2EB3MNf3%2FcEGOqUBz8E2lr6epNtlrXvg8CXnqXhW%2Fu1UXA%2F8vDD18As5qUlEZLsptctIsDBbW8nnDh5hLNaxaJ7R6MAxtrafQ3kr%2FsLm1RZzZ5GaCQc8GzuogIwxGG%2FcTtYAQg7CuxY%2Bn1h0Fa3Z4NkMXAVs0ZPnSkQitrppdR8FVuHnO%2Fa7yopGlbOXtbe8rUJiKXcbyF2de6z24ZEWXbOeRc%2BQHnYiQPoPgiJFliGf&X-Amz-Signature=9bdf6620e49727134453944522e6060d793ee0ae5b91fa26b85ee685d2363ecb&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V75GT6QK%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIGuHQi8yLqAnaEUMysRe8GA%2Br%2BYECzwkm%2FzAK9Mv1YhtAiBGD%2FbK%2FJf%2BIU%2Forj01rLshGsauM6Q2rwNjEQZS0TiGoSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMGELsMnrcWgPca%2FsPKtwDJVf6UgpE6uZ9wabN3XQr5QBptr9h8HsxVfQzT9I1j5QEoiVPMIh7%2BgyXmxkoPfewfpJ64vva9cOWwvhK4QJ2WSS%2FXRDEu7lM0rpl%2F9DiQXunyx5o5GsuiZNe4qHdA2gecdT1RMU2G6TKekT6xEwXofQ04audMxYSsMq3hwgSRylJr24SRV2k9OyXn9%2F7T%2FX16CXW0zOGqeayLjAZzqtuwjjRm%2FcCb2YbrQvFDS2Z0U5h6Fuy5a%2BFYlddqtMdCvrY8w2cBvTe1adIBUW3BNWw9SG6ZKafF0HVzh3Hfupe8zo0OdvOWfmb%2B6OEfHi6Q%2Fy%2BOT8KQbQTvwd9%2FUcR3PlJRNsSX6sJFaOkl6LMz40qq2wa9gJhe0RSmLhiFfs8UlmFXTAfyeEDYWHBCvnm4MLKxtcb71AxtMkIlP%2F1WjxI3bUEDdgddauatCzgCdApMjQUimJ%2BCr0gMgCyXXEg6HDOCV9fn7zNpeMGOVzvLdf3uoqiGXuFp42e1necAllM3mC1yYRyvkRqrsj6OHjrNKGQZbvK0iwAs3zVcvmWDesSTBi9mGg4udUzfR2kfS2BR6C7%2FJ%2F7B99ckdGZxWTLa2FKW9yv2wgYuiGJzn6IkTPHWwKOMkygDldtaMEMiCsw8%2Ff9wQY6pgGGDKvtMtbG%2BhTKB9nYI7vEAr9SOCC3cCFAlqAAIT9MpxzraWiJVnqR3nVfLzED%2B5cq6G9ivH5HesMrUif8u8bMtpaOGX6DwoFaeyWZpzRl3YEY9E6mxdiyntyhsiNFfr%2F65GtSA2jZ51zn3NiTpTcQn04c4YIlVG5GWQDVOYFM8Pfx701JgFUW1M9oVQSPI2c9yzkzy4DrC3K%2BQ4oXo%2FbmeJdGkLIB&X-Amz-Signature=957952ebfe40fd3d8ef5dd0df4ea77fc7b28a4084a8757411683a7ab0c8ad096&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
