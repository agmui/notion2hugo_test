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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I6DQOLL%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T070804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCzzkXZ7H2edqY7wQYUng3EI%2BJ%2BI3UxU87GlExgLE%2FHEgIgFBfqtEi7ZkbhRwj2ZTSYEdKYdWjigVmrUfQ9EtinKjQqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcHIPfAzZVK5g6aaSrcAz4HyfH%2BEbGYMxQDqhFLwymPiFGinw6UwrmnRE5J0NsijZH12H2OnvZ3NjDMN1UhArGcGECC6xX1NoTxkhskCFuT9m8FRfmQmR0qRo0OVk38S2vbWsH93FZBUS%2Bc3KNsLm7%2BcxKk3F6IxIl1FjLWNXyzW%2BP9GaH7%2FGPyYUkppV%2BXNgfpX3VLcv4MW%2FOTTthiWqLhxH1IQJX8TQcM8%2FMjknZjmcf7yv%2BKvvF4y5zDNZT%2F63qkzkYxc6snnwzXq3Qbk3qAtmX9rss3OE%2BCUHNkJTsU3Venf8pZluBGt6n%2BITFF8KGOY%2FkLZyHX%2BYUiJ6yZ0ShMg4XD2fDbsVLzznnFGAbphH%2FhOiJJ7F6fyzFou41zQKW%2Boa8OtZPAXJgBpZJ4X0eW3ce70J2G5Zh%2FrTIoB8vgRYbjC4wx7sJEw6yjPHNhDbJ36u2BcML0Yu%2FW3uBN8hQJQtbVwr0BLZKQBPKU%2BFZpHptP7n9ibIqQWxmK1thp%2BPivvEp8ps0KkYHeHrJaWEjR9r7OZfTimdYZ0erLT8Pu57i8HvVq1cr6hc6izObO%2BrwvNzLj0ug3Qi%2Fa021akSwhmh0IEuScybwEOwmd%2FhidS8U6Wdr10Rk7RAOgKIjjuaJsf6ykIj876gACMJ7r28AGOqUB43xQ4jaMTDFrg8nj4iv7Z8XShczv0qXemj9CScQszMtbGUuzFwMzNFcP8eHZbwVBdZf%2F1Y%2FvuCM9%2BSpa5jI3fzy35Xh5xZZsklxTZBn3EVzVwlWW7mQs9ivx2B2fyQzsiaY9tqQeqaJwzG4Mcd0jtK62lQbIW7Yz1sk3C93z6tf%2BLjiP9ZstjbgiZaA2Huyl9Ekq9y6hz%2Fy%2FlsWH8Nrk6H5F9Cx0&X-Amz-Signature=e55d2021dcc650378e2168806513949f68cb16bfd37e5b758d30ad3e784c91b3&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCTCPNK2%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T070803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIEI30iBxkDisdOIp9YfzbzTghK94woPttvvNQmuqH4jDAiAF4lDBRsSPa7NFCqv1gpXBzpxAi9%2FBKnYAjrnVw8SUqCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4%2BTRS0SCSXIL8tAnKtwD%2F9jraSEV%2BuOig3TIAmaTwxsRsssZNjBzC%2Fs1McmtU%2Bxcl20y8RxpDIDwApZfL4kjWl47PInKK33ZsSj2uXPaRpr%2BAhFobZrE0FcyLdJkggQv6xY1Hy1H2uyB1mb3Z6cBO0jlDo1Sw4tXJJugEL4v0p4%2B3SYeIYcPDZgSAOAnXi0YW6G9g605Sy0BvwpC%2B8OFs%2B7q9%2B0Nb%2FyQ2qdR0%2B532Pag4v%2B8TsUxoxo8jmgsBiP4C9IkLJ0d6YtO1n1AIiiLFeXAPuUyk3pN2%2BJWgYS6r07B4EWscKwzTAwNl%2B4uFfNRrjcF9NYfyBCbcc4zUU2zDpw0L1brfU0yfbEzhTQqm4ZKz6sFND8qf%2BCe0MmSQocq8itd25azMh8G1fRYlUB74XkpuS5Cewyyy9JrtUz9VqI5CwogcYiQSEikkc94XCHPsf4QTKTp%2FGTOPqKE3%2B7JeUMWhSY03k3JYOdOB%2BioHb8penW2mi1VaHuKPkG2UEJCmiX2JRXfzMwxBIIXJyuMasgUTzeb8Eqp%2BxSJdXOvVEZQIls64ku7hpvirkXyEwV3se3kwi%2BlWgJYDMZvkQrO0Zr0bf4PN%2BjjE%2FuuF1bFm8TDWVje%2FZurdZXXMSU2SJ7rF4LuzsQbpGQSD2swuuvbwAY6pgFuDiYRu%2FwltreHImrZ6b8fKYdMznNzLOFU4obpuTj4lGzoresdgrwQoD4p6UhL2vTRMuw6%2FP6Bxato8Q08LRF70qEmVW0KgcNF%2BwLE9cnivNB%2FQCw%2FN6ze%2F5HXUgZUhRygJaNmIGoJT3SKhfabJQQOhQwxsle%2BhxNC1F9v%2BxlDmRUFZzXYRlidXqljdjHGzS8Lw6OUbbjKCVpNyGc5jhbmyDsu8AB8&X-Amz-Signature=8fb9bdf7ce64d819cc37a8efa40dbe500ef9e3b0d5c45ee5e0c7bccbe1465418&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
