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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOJBU2PL%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXfxR7KK5ARwZoBNkahBhoNUaVNjWqitgmXaGlk6plIwIhAO6nF48ruQV9NWyRwZRjk%2B5jKYh%2B6FA8F3TdFSVPliT8KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPsTC0Ys10SHGPp%2BQq3AMplf1G5IzYrYJWfYYthHjK7JdYLBDzGYotA2qP%2BkLc7qktVQ8Fqhvd3snPvJMrplRZAGS4fJRvc0ZT5HESc0qmGYdLHKrwlsHcFlh8hEDnVwOZ863GMFS%2F8bhRT74OL9Gm6CmI4JjKVG2zAFyPEzNbrrUluBQ8huL%2Bi11Qa%2B0Zt7CeZAJ8ruzrAhF4l1oQ86oqC%2FxxsbWlq%2FExmI3wpiLaGzaGvv2NC%2FCIRK72M%2BPx4kkuSflf75lQ357lHSE83JiCLXGGcDO3x5uNB%2Bo1qylien%2FkSLrWRC4KQ%2FTils5xbdz7CceHyiQTn%2Bq42Mp9CM8CQU9wi2paqsOtPwi0vk04tLBKICmgoIMEvVGlJe9MaWisydQkxL0Vkb%2FQNUEBMIU5DR0K%2FY8X3ipoysr%2FRTknwcip5fQdunwD0s5MZ7KMwcz5I1YUw0VbxqckjeXXxw1i8a0L9ES99PkOyywxvM9SNHjCzlX0QrzHIFpgG8lO2seDcyICWjDnFNY%2BvKZXdkHnzltf4%2B2d1QehurXCX0HaJ60FZlUxXyuNhdFFnEqyz0hE6NRqlWAjdaZ8aiGVFJ0uyKu%2FNCNhcgYpFa2irtLakxL5cOQLrW6WnWK3myhyS2W8N8XvilgskMlHBTDjgazBBjqkAVUKVzhas6%2FJJV%2BPwOCFIIqU5DlRFhaEaZVj0vpFGWP1EVR2PCetcB77Taf18JHOifpuPb4oGC1KpNA%2FY%2BDIccnkM95pPvhxvGj5ept5i0iKAKHZkPldaBjeklGCE6toSIYpviBKmOiu0D2XmRYQKvjPB7GwokIL%2BhlPDvJOZINom0oetSeLhKPoVtPoY1PCiLS%2BVUNz3iuVibegVP44EMe4APKt&X-Amz-Signature=0ba74f1ffae6e5fd2e6e18325274f93e9a098446545f226b4bbb5c27d0507f41&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT6O3YFS%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWME6eWUZ0Ba9rRo4v0fel2HDxMetFDfw2ZANCRqW%2FMAiBZZLrCyKPbwM3z%2FHdrtRo3%2FsXjG6vkno0PU8AcuJDkpyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJof0xXm8vGLHqzeNKtwDQ6mCOdr10Y91b2cXIB4K5tj1LfnQQossDRpNmUcPz5JzMtv6%2FjRF5m2Q5WykzPQMrBoM4uun%2BP9wQ0HTRI4xhmoBZI7wNBQVewGIjG0I8YgpZWYw5f8bn6k6dZ69Yc4cAXU7yvKSMmTUnSBdHCnTpiXUaxA5XIvnDYhMyh8NjV3sxVpCQj2lEuNY5dWKi8lBQputzeqn%2F5LxatGYLnmxo5xDafED9Ycrcc77a2jZxxSKF8GJ9u9342dLDyxwMGlY%2FfFzE2dNG%2Fm4z%2B9tE2NvoHBczylTJ8ixL2GbxQRXwoIihqeEMEs2WPi6eNbIyjlP8Xlll%2F7213TS6shSyNOVDza0YDVpSbOVJ%2FrDjXtmzZbJvKENfNuWRIj8Vp%2BS4cjrJHqSfM5CC7ZgzjOxx0lxPVtia%2FOpHN6ltmyJhifDKF5b5ecqLw0cEvk8wr%2BAjFm9EXKXpCeDJejQMNkUXBfnm%2Fm79uHWaKuqd3EFKsZS%2FGB1ed0fSytXfPtSes14bCD6HxwIVkj7M6NvekWhU%2BTN%2BoTvd%2FrTWTEAG%2BDxVZuE4rTqFg%2BifCevp1s7o9xklWdJtFPK3tVXMSofeG6xrJPQ5%2B%2B%2FwsyOipc9U57hucKoOphQuDJ%2FvmTdLr%2FoREYw3YGswQY6pgHPEHJVc%2FwnPqG3DmAyq7c2FJcwmi3pYgmNy%2B22IcnwRjV2PYnpOGpOAML4AnkfuQsIApO4RjcAfwJXN05FWdaqX4Z8OPJrkuaCEDEWnlCq4ao7xdQk161RxmIBOmw94CkqpeXST0Q00WL%2B2rPX4Xkix99qI9tDmSvR0m5aN4cSJS9DC9uxfbiX0rOIUibUChddCd2ru5ZaDFUjdylAbmB5p2OOj7X7&X-Amz-Signature=06169b670a99d4ad86a56a4f268d5109f37a64230b75d8f184b32d93d5c26c42&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
