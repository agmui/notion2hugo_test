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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q2RVGCN%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDwOI0MriehtRXm%2FzW453976ulzt1rBt7Uisn3jZ67FSQIhALkxFitpb9rog7%2FcZFhMMuKbbmPfou9aTij0NUCL%2BEMLKv8DCFoQABoMNjM3NDIzMTgzODA1IgzjWYClvL0uoudHNUQq3AO%2FTs7fGGbtnNEFWVge5Gf%2Ba8VrnMV%2BXHHV%2FrRsuK%2BGIyESW0F1yCoKyhJ0MdILGH6wwyTF7dkFLg9yc%2B5A4Sb4fNAtwVnaBOBrJcONVuT4rsmw5uovzbAo1opndnHvUmjl84rl64sVXCESvQ3nHoHns%2BP%2BYqr5hFoT7epFAcXXD0I1PaW%2BV3ZxTH99yM%2B7jEChr75V5pEcyNMxVzu%2BoenLK9v08Uhu4EOwcAnv6oI%2FPUnMJDDjH3tfPQQ%2Febu1gC4waYVVUuJZ%2BDI4LP13iK3m8jOHyKlZ8AuPvvQnw%2Ft1TUN97c%2FEF3dIR%2BczdnWwu7Ht%2FIU7e7c%2BStOg7tlzTOk6Y3%2FKj1zBEQXD8cyRJJB4eTPhgXBUtzfktvZKR9%2FuScX6zTi6frCuiaEGPjbrEyzEtvxa5zRIFBrxHwQNwurPHx5I62rJi%2BtSeC%2BOND0DV6FIJ6yIODfIiiOfiFDeZ3SF%2BL0j5LKUaqXoFYxE%2FDQ7eHZ19L5bIbb4kfDoaessb3xwGBjaH8wry1pYwVarRauyYxXFdt8KpvPGUogz1J4I%2BvWaApB0IPFgdrrBoBJzf1CzHOFxhNxQ5IOD7YHKSsb3Z4nM5oU8UegywfRAIzjJQXyiV%2Fg2TPjU6ThahTCKtL%2FCBjqkARm6HIDHOoWCrZ1YOt62bcf05uneSnACKUTprotRzFQBPm1XMliNQL9b9HiyuxangE5y3N%2BL%2FoJOvK%2F5ciA7YROUiX%2Fcg2ivLViMQSR%2FR9VUuFagCYJPI7uiS%2F%2F%2Bt7ZT4iaHCyo6WQWXv9e8rld2QZIyoQUEIe5txN1IA0I6Iu50zxiE0jx8dKcO%2F6hmSCh8IF69Z5oFS4xNZJhXFdJ9JHkkRxBr&X-Amz-Signature=5b75e6f538207fcdced56283308dd7db52bc76c6980517842754605be3e418b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6L63XQY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDJTjowF038fQkQ672zoBHFFR5UcQJAwtclZ73aQ0phlAIgaWeP7%2BLkUOsDevqiLeJmn7rd3XyHntJGSpZNVrBktrIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCgfuaIBNx4luNEkbircA0RJUfZzqecbxzERBdvlSgbTBNUHjUuieAgu5JYql9YxuGViUnhnq6CK4piVKO4DTgMB%2FgnzZDLhrE6p5QDB5eoz2nvXipzvUwNi0FTcC6LfFiMKTYOb2uyUJmq4j7egNMV0Pm5BPcUfcalzQT%2B8Rupy%2BxO89y2qHoiyNvXJwysUXlvXp1jqlpd4HkiPKVNQLoVRTV0OQZNaZPm9AYaTsqUelml7x3ESNqXTh6krR7cV6lPKJ87ZF6YiFkdZrFiQE8anC8AcDO2VldDmyvbWOZ%2FaMhfjN1dIB77FE9NesaQDXEuzOftcKPHCmybpmyiOO46%2FVzZh7k3KMHqJWMJKhDHSUhMmKU6zkyUjdQxmaFLoxSXL3iwqCWd6rZ66cgEARzQoYEf%2BAM08e8MCHx%2FTnArXJNEL9rcVBDU6%2BK7fcYJIRMIlC2fBiY3dQOGlYPhA%2B5aZ2Jk4DQZ4eL%2B6uqJSzxa9CzcjVI4pSnRe3xDoVOxDQ6rcHzhsnd%2BdNH5VMj%2BE7GZZR5nU5n1K%2B1mh%2FpYrTG9CYfU7%2F9xBFMNoK7fmddSB%2BFIhOe5jzFMPwKk1rL9Kt6%2FuLEvbkVenkLIA%2FS6sytIGnHnbgh5HIfQS5JH6YrV3wuQ%2FsEH%2F9SXI33u%2BMMWzv8IGOqUBe4EZQ5N8NRQj5zU%2FM%2BaHuj93wttefdKqOcceKegi65aHKI7cSd4iYFXXD49GEf9AFwlZwHjMb753%2By2DmVpwGlv1mCRmIfrDX%2F3dK9yk15QwHy73EUqgO2TxUPkThXGmQlqvQV%2BFgny1hus%2FQ2ubmOr5esJMog1f%2B0cTWDidFhitZAo4A6PVHMgWf5T8z5RX%2F%2BCNs6mm7jlxcFFaQeYlT%2Fc8Ow4P&X-Amz-Signature=cde7f4ca9a387422336ebd47df0086cfb4c9be59ba8e07e3fc4aa53f062530ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
