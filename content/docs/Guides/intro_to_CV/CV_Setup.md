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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRQWPLP2%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICqY3UTcCAQawwEAPan84YvdEF5qIC%2BpQsgBhzQva8DNAiBQsIsQDcOwDASi9cT1biuv3hJhIEjNgKS5IUafQfQlByqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM708vRuE9eUYlDt5%2FKtwDGl7NPiAzVpMZbO1gLg2YBBg0bM1HIUPULXuU5Vw9w2UCCyIOb5EnA5VTcw0GvZtu9A3Hg9w6hg4KpjNn2nnir15y1jlxSdAQURgUXFjSpwxg6SWGWtmMuT%2FRrscmkisbHAWnSzcE0bJxLOTSlGZKAtkM3Y%2BG7XM3Ec%2Bxxt1i1cNE%2FVZFFsHOIypDDXkQDNsj%2FcfBJBdxVfJAF4U3%2FpKFXM0UObzNiFrjCjyvqJGsT3Cw%2BmRB%2Fx%2F%2BDqPhYBhceFuG9wEGuejp3e%2FKYSag9l%2BNDKWEeknXH%2FTChqnUrPx%2FCy4XDa9%2BnO7Z9oYPnKzLVy760Y0NW5%2FM54wPZ8PALIVND%2BmcEMBeROZwIvteeJXFC04EPU9%2BOK4GwlfAeUzQ7Tdg78dt2a2pnHqwVCniCams7V51M4vkwfJFM4H8IsbBGM67C%2F8BtRGrCyye6NpZLeHdLJgvut%2Fcp0j4dFYyZz9j0%2BAA8RqKFC7epuzXEEsd1zj4p7UbX1aDAXqmxBcyHncdy5Fj%2Fc3esKZoQtJPYypcuRbdwCdSch%2BgHwO60iTvy2fp1jkk0P1ULDeqfB4d%2FdbjwlG%2FF2YvxeV8t7qtPvCm%2BZiFqD17DHDwMP5aySlNFWMIUD%2BpMmvL688AplMwieG8wQY6pgE1uuqxZurMfmBVENpMR2y3IMl3iUB3OTMe1QurbSeoY7DpaxI0PAy1QpmF9LHSS1QxRyOp1%2BGBaF3W2hUSzGM4yxh1j3xILLkW689On2dGmR2I%2BULcYXovGbz2nsdZkyl6gL9hlM7ZgUMERWayv%2FrUSrAkwOtWLcuBoegMZ7REDNlDq3mgqlCrEcvi8oJjDQn5qsw40u1wlwERbo6RiBpI3vy6sBio&X-Amz-Signature=a0d4e6db0f1ec99527ed42f5a034493d9e249eeca1ce8ba780c8c6dcaed34612&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E77PBJT%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD5Pa7U%2FwqrX1JiUOCqI66NDsPfUu%2BUe6wVy0YNjGkvoAIhALjpxJkNHtgJ6fwDyjkysj5suJPyQjVLNLbYAIPq46ERKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdJNt49px2nXwZaiIq3AMP1KUXKQr1yojk3lk0lNKGuiRVeXTJwsgDA9GEMugmJj0wHfnDFvnL3HYckryW%2Bd0LrWO36hQM6y%2B7aFvNOuUw3g4s15cbV0CK66J1oQBhB1mi2Js2PCXHs1RSb%2BS3DxZ%2BxcEsgDwlPJ79eRxaA05fHNuQtiof5ExX0xjkE94DoEMntscnNs%2FDPLaXTETWLNqz6wfjf6%2FMGLFyI0NHfBHVD1xzyJms12Wr9Irk%2B6YaorsPDYTRIYn61JoVFbaI5J4fRbf1HoOVp%2BwRAS%2FPujxuJjeBTjvXOw8G0WbBhHHoRrkYyLdOq12LrfyRfUq2auLpPEDT99q57IB7WU7m5b4oNGXfd9rR8Mn9RpPNqfwgpmuworJyQUJdynUwtH6EzxPKRJIJ6DPOD2%2F3PDSlr%2F0g023QvvtYj3lisOys85tr4rcw3ezA%2FdBZ9beBex27nXJ4SJg83piB%2FSNvZCoa8i1APkJDDz0XMz6lqNJKKAG%2Bk96tQU3NM5iUaXH4EeU3kqvoSyBFP2GqEF0fWmtkBYtuW8Q6KRVtqeTCABuNDulJYswW35OtFbuzCy4To9voNw%2BlwEqZD%2FPH%2BGH9QITMKxmJYWRNqajtmUHWNLVgRlMf8psB3MsZn%2FaT0jWJajD04bzBBjqkAUlgTgsBXNpi9eGV1xBmfN9cVGCCQz%2Bq0stIlTr9VHrVSR05PDdkuzepRbO05iPUMjoaCp14OWKS5EMwhHh1p5YBQIVgSMaN0Tw%2F0%2FCf93y6qhxmLtW3XuhFWCXdGpGEBPZNNDpuT2S0j9Aut9z0qrXvTvWiJ314gJLma%2BIETZNR1iA%2BF6VtOk09%2F8WuzN8XOrZplXaH8BrPfUKOvNlCXnFojUTz&X-Amz-Signature=6c0b9b23e811ba44b5342686c4c8d87df14fa5ed86ae3ad1107a879127bbbd3c&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
