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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2ZEGMYA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjnUCx53S5rC%2B3F1fRGZ4S3nNZXDbfUzztUa6%2B3mhwrAIhAKazzvwPJmRbFJBJpY%2BTtjGaLC6scuGuqF4QqbjFpJVDKv8DCDsQABoMNjM3NDIzMTgzODA1IgyKxkeK1pDK%2FKeSwQ8q3APoJOoXult0jDvoU9H80aeJ8xEeF%2BMNUCT4K3wYwHyKuv%2FLnEb3rMmWeiHea6ya8hNwG3umxcNXQUS%2BnzC%2B32oZ0wgd69tj4hHaYMaUpq%2FQyTaqukMI%2BlQ7y8KlJV%2FV26BINf8nvPO%2ByYEjz9grOAi2xaPW1LfEjkYuAmTLNGSCrytOuPZMvzz5EhNRE0JJEoQQ2bpkU2OZ4snOt8SaTqcvOWY%2FAJH5D%2BXBLfLLxMhRRsnIB0UZzBV6pr4VtBiHC9Gfq0ylsfysLoJ%2B5n3KQ0SYZxRyItQ0kCI%2FIYpbzwvaq6jPDPOjcP6M1PoQVu8n%2BcgKt5demx0XdmfY%2FVSj06sGqhIye%2BpRbnyLecfApL1zwUj5Q%2FVd2wQDicKcHyRD%2F%2B6KPOO0FMKvWitFtHmTtsUEm94GD163VgQAdfwyyLaWuKMa1me3h0vdNMe3%2F1m7Gr%2FuiEXUfTZwuguh9Ba4z3CZl2tZ7ee7HAOc9G8ySUznaZ%2BHU7barUHyix7Ts%2B1ied1pld4oZY%2FvFAQmM4d9%2FLs2ryN0qG2kyaypNOh%2Fs9fbmCRIW4H87oUyEbF1J4FOll%2ByCjCOMYXRenDojUjPcx1wd%2BgCTFkyZwjXzCvIrbGLMyxPs3sbac4eSkjCvjDni%2FXEBjqkAaLW4mx7N8S4bTzX%2BigF1a%2FGLVsBvKdRF7XwblrBtoZvX%2FEMF%2FLO8XG3lxrzbAatX4Ga1L75Mi8KkMbynwZOUzddK6auWkKqQcLHPjv9giwmjQzboAZKOHtmMbKcdO%2BFL6fkyRTsD6JeVNvVKs9%2FXpfr3ZwXldfhRiv1BdCGyZL3tQyXIRQxAOmtCw3ya3Zf0f88w8fXzHLQ7haP8gdiXTpGwp7y&X-Amz-Signature=d5a0d868b465ac44c3d75b4a836238f8e093935386b89b855cdb751611d439c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO6XY2DB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA27Fvq%2BS3c0ysSJPONYyWiX%2FipdQ2n5sc0%2FB1FdXJHMAiAjGNAXatfUy9UwMJ1btIonky1ZdX7KAq3%2FGDkzzQ0ksyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMjraPY0iMDBeC3jOjKtwDjxEX8MiRLy%2BtIw%2FEBMwW6LJbrE8LKFq3C8jJj%2B9uPxsCkLqHVTacZrcwuSEZ74la5YoYIHgVQFePT%2FT5Cj9dwpu%2BIVvf4YkXuQI%2FG6DcMManDvximgiyzNDCV7qagf1laxXfbrnytIun1iPrws1ZzBTfJm7P%2FCFFPitkvj0yOKWXevZm0seAbLNx4MZ6xfzD9k525MatosPXPnreMUmAAt0lnpj1zPdiEdCSIqzlNetZrjFNakWqL3gUNA9xeZtoWS4fcGFIeqj8RijigaXvIoX0uxcYSDTZ0RfVohutxlaXPQRIcBLcIx6LnpO4nF7YFQhqML%2FuD8nlU91gCg2Q37hxLDbewceLcQ2MwiRvQR2tWc0tveTlmPPXNWzf7Q9no3XSyTnCMI2KnnfJYyS3XdyshKyYTq3%2BBxbQf7D61FMs2HPfg9Q6ip4M4ewN0q8qQkTbswvOos34bQOND2Y4iQvwO5zbT6Qfe6YxxwUFQBkxa1Kfwv%2FrBxfY8OlubYZUMUZZI7LXUd9hHhHbD66Fcy5puJ5R8bUrNf%2F7Q3%2F8yw1qusaqkcPoHDOQZ95kkRGolT51F9KexJGKZEdOKK4PsE5NW7wMtyOydCmtIxCyYTgSDlnup5UChlDVY5Qw64n1xAY6pgEObL14uQA%2Bo7nqiXhJFMWjCITiq6m2uGqmULHaZwomOGF%2BZ7dncoTPm7lKtO%2BuOIkUiIbey%2F5O74aEIWRJI8Z4nOVFNGaMfAM8GwA0vs1BJ3It%2BF1ZZEHYK4di4wTI%2FUZMJSHUitOTl%2F9RojhQja%2FIn%2B8MqIYOx2Ej2KFZhxVc8ExGn2bRL6a%2FMGAPPMqcIOdF%2FSHDvxmiueLhAr28zY0kcbBDQVE9&X-Amz-Signature=b43b8b161b034e34cddac67832408ba58807b0bc078b073de368ea782fbcd308&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
