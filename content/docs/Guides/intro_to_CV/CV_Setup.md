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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX45JC35%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2Bnf03bUBwtd4VYFdR83l5%2FuMQH96BGr062sxWKKLh9AiEAr0zDd0paPxnUY4Zp9mP3TaGtGh3YxVBjRyaG0DBb6noqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdxoq%2BE2iaikZCcaircA%2Fpx9ZqRhL6F%2BIEwfgIlzNWMUJFTSBkfY4iBVhXEIBr%2F2RYZYOvHfP1CHYoSzWgXI1yefkQKvc0yDxbqHYMrJJ0w08qZH2aldCYLJwmT0AGF0Bh5E3PchqF1D1gbfKOpGYzh36P4cyY1WdTRTsUaOTutUxC0IiBcStzcbSKKzZAGyf596Wk%2B6z17K22AJfKjvN%2BbXKjNWQMEXSsUpOvIyaBt3RrFyhz462pG%2Bu1rUh7arCAfrn1B2JQo7VKdlIxiWfhWG9EhU5A1hSfJsuQk0nSIhh6Z8Y2WbsiZus0coXUiKcH7SEFPpGs5kqgfdLfELOYvEfv1oqfqGsD6np5mw0O54tCpLd%2F0axmEPG3zoSdxWpQSQ%2B41EFa1z4vrb7oE98GcJohTm6KAb2mOajwVtmoWmzhIKCR%2F6wgmimGzDIg07tkahXpCtCOBVVCNGe00BWrQJdQZfbq3Ji3Uu4PS9Bu2czEWRi5rZMpxFBwZW2o0YyolBSpCWQJLxzNRd9WDukkuv6DCMXXZnTLGr7B02g%2BnmYTKopGf3mHQ1pgR7X0xqd1dHAtgQegYzBF%2BnIUISyTSK9OVcpYnuHzb41QG1xz9P1nrXRbPQg%2Bszfhl2WBmkTXE2DabMOnbLZA3MOO648QGOqUBKyMPes7X4rGspPwdNFtMtIH6EHsgmN7E%2BvCLd35ojrxStrrGB6KSP6S9RTdpeEvMYgMpLHhEaHPtyhGsgB6rKwzgMZS2QRDBA25mlmimAKpw6KbWdHTZAiiG%2F6nWAfQ%2FxvwaMOXhT2Z6mHfXHSxY0bREuYgUuph1WUIou9kOM5IGb%2B1xXn6APinK8foqmtiO9Q%2FkEZ%2FUsMTlesDsHVULWL8IFb7M&X-Amz-Signature=caaeb113c4dd1b549e335f7da2bb2f89fb64745aca22620ad3bfd395f3a61f5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OJEGLZE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY9PWASObyo5PZjpmJpSYzEDUBCwiBM3CGyEU8J7SLywIhAK48l%2BpbYnhiPSrvNrXymAufsBsL4dD0xru6tkGF9xzvKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLH2W44mHIwNBUimYq3AM6dOqkvBeGSjU8Et8gUzJNTwouRN9RZMdS0AwDk5huHaANOkKRUNN2Js79vg0wpT2O0ZYiDlxeMoqXsTVYqmtMQKKbrrBD062QNycOR%2FRASbqGyGQRqAkZ%2FG2g91ApvESpDMb%2FypLyhbXVlw6VOScfvCCEXh%2BXI4f9H%2FgmhGXQ3Rb2k8Ama4YM90K4bDrlogqZKo31Yg4JiyuLSt8BvLZUFg97Jk0vjage2mOTQLnMNDOqgIDhkufNzF1CidpefM7S06yRfgcMpL%2BTro2jh91EI%2BJNEOh%2Fot3vC2uEPdG9sLrx1QkRF%2FmlF9J5Mx%2FI2AJexqpuZkbKzFgsgLCnFC7IOT%2Fyy74tTKhHoukNi4%2Bk%2BzLgIF3SON5y6Die5wyCe2%2BwhaUALJtRBACsSmpFSi9OyqQYonJKpSGjyWreTyrgXX43FBsiT%2B5O%2BLe3BvMX6uAyFI6NH07SxjOi%2BHXyoO8RFJ6m0KnylD1DWMGHt52GxrEoRgksLblaOjgArxZ3fbelvKzA1dqPA1l%2BavtZKEpCHP75T%2FVGaBHwzHmWjZ3nZcnIKdNitROviZOw4%2BGXmbOA%2Fc%2BnUOBvw1AwWKGwjo76N3NuT36xTCROpBWP1WvSOzTiaJUZXG4BbYJRhzDjuuPEBjqkAdVYDrduXJkX8SWo1Ha4imSE01A%2ByYCx68c1L117BJvYGu66Vc1xpFe5KDHLisdaWV6OTFtAvS4qfEO2vhradNhZAJPuFoKJG4%2BH6TBuWFTmK8p8nZ3qeGl8XCNUvboCHziHGzfQ8DOA58y0zZ8oXHB%2F4VX4hhE2VxXN8jh9%2Bplcm0VayDAJhRmCSJL4F5uAZXI%2BK0RvwLpuCWNc55Dq0%2FcUntGg&X-Amz-Signature=c9d115411663d85e531611edfef243b09a36da7143cbe7ec574913a6c91bc2bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
