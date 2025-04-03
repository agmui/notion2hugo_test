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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644FFQRWK%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhW8CAhqTJ5sjZAxcDKIoLBtsFShJH2iJNh4F9BtEVjwIhAO2rq2OQSdGZgWDvFBGpsCDsyTrmOX3kETCq2w8lMLS5KogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZay1ZZK4fOFj5CT4q3ANoE8l%2FmlZf5g%2Bb5Lv3tId4ZaL7N8MLVqe7HoxA2QuyosBt9OBJYUbVE2oAQIBiSG4K6BvNKfNxGMjF%2FKhR9x%2BprALi9VSO9NB3KBB%2BaM8VkQ%2FF3fl54Q7n8zG6uOxcvsBImY6FJISXjZaxJVBHDC17xr6gfWmpkEHBa5N8zxlredtOcv3DBmojWsrPLH%2FkNH%2BaCYRp0xvKO6uFFaQFkKbv06NgcRMPDhPsV3L4FS92K7SYtYPY7kA2pPvml8tkrkB7ndyGG8VPNbcUhC9GUMha3iaTDEf2F1%2FAdMYWM1sgzIX2jLciWofTUDrB6iuYnxu0DaPHxNo6lg22x4aGxxxM3qOEb5eoZifU1YTlJT3HpnF2QjxmIIhD6W%2BT8oHpB7AUS9xt3y6d%2B9NC1LFsVcAkV%2Fp9iILKAxHlHFyiI6eP5W0WNEDE%2B0ZJJ2pOBj8VQgxsgwQffJfjynPXCVB3uw%2FI%2F94woYqCVJgvIynO5ZclLcnHEgbEIhqwRIIDN3cvtG80N5p7AOMIJS3hf3XdvLYVl%2BZudHVNzsH1w3edn9tFXicb0LjiqdLBfdp4Jrl1tJM1KJvcMaDoH%2FzixCnY79Hr1IEyOh2MM6qdb%2FNlQ4xkBTMQP1T%2F8qXjscn0TzDW%2B7i%2FBjqkAe0Q7HbUgs2qoYjB4x66IeBirtYJo64krE6bO4ImKUpLqfuLMYWMOMGS6w9eRkU7hPJFk71usGh51lDamPRKaVjpWQLOuExqMavmq8QAz1LME1kum3845V3Lj28TjQWu9SqAomfBXoaLWXrevvFajmZacP1U9jqzrCFlNznR6AkzMpOKOpje7CYpIbk2NZ2pg1ivkhLogHTllcrvlYyQY5fNkiEY&X-Amz-Signature=b7fa2e548b3bedb3dfcf7e31b346d219bd0e6d83468947c0c0431e6d822ab325&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDIMQUTB%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwcOZqJPnq2jcOxQEQDAqPPYL9lsSy%2FEb1YVZenoDsQgIgKc920yOsjDQq7d%2FqGIl6v0CW4ZQkZl6rURKwKxtIYf0qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmIpM%2BHGEc1ctuOEyrcA04qr5bVU7yOH2Iyp74RVSed8HDQhBBzdcAcTHpEyHhL7fj4a8GNiwL2r6WobPJzPd7YAoQvSQJh1EJxS3RZqP0a9yIln2xDVD4t5vcvFHpI5SBqZGpjWxW6%2B1BOLfM9faf6c16cnjyiw5s7I3Tigl44RDM1EzeOv5F6ZZGZocy%2BgPy4ETkEWFfEmmM6kFKmrkbyllPlcqvdt3mv36vs%2FiKz6fgZfMN0H%2BxefHy5oH6QsPrON1c%2BhnFHUyoNyinJDp05BEF7BV4rRxb0Ix6XRUyKADC4%2FmobOyxsjWVX9LzaQSa%2FGlp31TXJaOoTTqSpKOmZ%2BCJ0WJT%2F8VLQVtqmPKxlyLSZ9qrnizZuKEWan%2FzMFY%2FomSr3EuYPm4eV%2B18Dw6mbHwGIXJGLwXw5SiWsFo0FAV%2Fa3FdPVMpinFkvZ1H70YfU58P1GyMNgrHnlyx4jbF0lVDRLCSXmCftO77fbNxFYA1HVv%2F96pyeSQ9z1gL9%2FqaDU%2Fa5ynIKmEo2RMLq%2BBCgDQASkXZ70xIkzhSKSSAsxwwnInBXt2Meg4ZnKAEFK4iNGV346YCtew7%2B3qKr%2BcZl91jA8aMfbEJ54xMdMx54Wkt5KaYpTgtjZ4TWj2DL2TIXAdh5SJCZ81twMPv7uL8GOqUBryZzpf5SgQhe6OySybVboC4Nr5wpSPjMapP7YKWHUpxv4shPtYrTnBiRc%2BEZXBpABZvmFJSfnWszzB7Q4hq3HMM25bhFHPGUpIJopDi0IL2W60RqslxCryvezjo%2ByGMwMKqPn08XZysfep2HL5umMpBEDHeCSzLBdm0lX5lzvu%2FCkM5C2ZBVBvPALx10gXTKr8E%2FISXW8nrrdSH2H5stah6wnzo1&X-Amz-Signature=fd5f38f4cb20a5c0fbbaadd7763275558726c1db408eb260b22250a188d8ae12&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
