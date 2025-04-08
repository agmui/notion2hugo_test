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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGUWHZIJ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQD7TZP8wZOuaxdgeIpkqDweSGPZ27wxNHspWUaV06Da1gIgRrbJTEaTf2Iq9g3rgmAcKxXb2uiXDrfp%2F%2FxlLS0PhpAq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDMh6VRZkFnLd9OKbPSrcA6WW6Nk1TD3zTvErQ3TWpBY8dHyBvtDAdk2CQPEvGVfljHbqnjuWhcQK4MBv5dpOX8mzYI6AE7Qrx1HnBVbLolkSzQhB15oXV0cEH6XzVJgyCn8HxTAG2ZQYEow3N35zYRp6k1JYP%2FwjapIcTlZqBEdglZsmpMpMkrflmTsPKQuUMHc0w23F71vLHb%2BE13RtTS9SAvuObZnzKM9OxrVdBT6SkRQUmWdT95JZGuhQQxwDfcDpLQoNCsGyrnGiXnpin9Kjns8EaoriSO9QMI36J27w9z4UUYtq00zA97uwdl6yuvwD3WTquUvQ%2BVfPxT84sLpG10pEcWeKW59oc8OHr1cIchELKET7DKsNLRsnTtI7wsbVNLigcVpOZ%2FX4%2BEpTuh%2B5rTCbHO6m2zw2q7a%2FYLI44vxJe36NpWO1SeiR%2FLYD5ghgJRU7GwT%2BdGF4jINqmSbrU9XNxaoA8Of6ZTbWyool6%2Fw7sByzjJ5CgNzqLmehLukvY%2BASyEXGRY3bhhipHot1WoGwodTXs%2FewY71nowrXaMqnLneBT3qY8G4nJlWFkvSzChRLaLE6esQ8%2F9FSWVpq99h1X8EZXYhQraAHdPoxgO4zgdbrSmoWyfDVzfo2ylKVEtkEmbCBWkCEMKrB1r8GOqUBemL3XBunSurQUHHc85hv5xaB2lSzpxoROHGfDrWUmBOFS8gZ0oYNUPVyiCnxLUPeT8p59NVe3dpuN8W1zjJKY9le6WAwpKFsisvFlAXD59701VmWK5R%2BOuf2RwBFsy7mDfdJG5zb6XHTpvxacZpIqdybvEJFnHWqD7cWDC7MJnsHWeRAy5F%2BEY9SiOTS%2FtMyZOnjD5aQ356hZ35mm70Ktux9eTQ%2F&X-Amz-Signature=8db6c4779741c4b1c01f0ae0678f6506d0be7789e787207b773b20b6496283ec&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFRVWMPS%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQD6h%2F%2BxAfvsr4rVmJ2i6%2FIUYr7u0TSSyDggfe9FMfqQlAIgL4QwkCfnxmOilNIltYvVMn9tZYjDfo3aKivWBxlnueUq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFid29enGjHpF0Rk7CrcA2Qy6H4%2B%2Bm%2FUaAZeEanWJpiKZaKsli%2BLXgZVRZYGMgxiDmyjADdTTpIX2a9Uxyxj7wjP1M6NNQUuooQXnzSKbGZHe%2BNYFk1jrD27D3%2FUytjU7QR5IDJJdJWxVgo8CvwpYNmPzgZepuEQ%2BieQvYNRnuW%2BDtOEcNFyKla71zjbtYnD9WnUQPpa9e3bZ230bcRZIk1dS0%2FNclFsa9cB5tUOgUbUj8RISW%2FiUa%2B3Ac1mA4p68NFPR6Bmi5t81n5cnMH2CC2RNp%2FPhNCxmo07sehzb21pd8SygeSidO4aTg09NyOma9hLtOodzl8kkM4nAWyDoZyFMJwl0YIvX295rxzJBC79P37rd3JsBXVLn5OhXTEtTd59To6FvKzpXSaX0nzieNqmXHGPS%2B7BmuMT7kIWGxoQO65YtismNAup%2B52OEn1VXEup4h26QXqUd87ritRc6Qki66eAlBzNfBtl%2BzSZVu2IYePXgodmMd09X75YvnSvfRm5q33alaR5K86vquCd%2BXbacZJk%2FeMUctiR53RJ2om9X6uh3lWibVVSS7YdfDmbQOiIYVLjVbRQMs3fUoy05o3G%2FkGH2aAIIvIh8%2F%2Bfc1dzmeF1mRkLRxZ3jFwUstfLC0ODyQmuX6IJe2y4MO7A1r8GOqUBYtNmjGasqQ12%2Bh0%2BO8Rfv51avUd1o%2BdKIlb%2BparYonCggUme%2BEJg4s3Kuhb2KdgskqXv%2Ft%2ByW6OkPihBa9jw8VApW7t4F3mQ7GxNvaHczD%2F02YAhQGXYtXs6cAU%2BYcNlt1eAsYEPhnHBNAJX%2Bh64SQi8FsRxGl6WPWez38FwG91Ncq9n7eUQC7VGCu1%2BIGsoEQf6vjCK2V4VF7ncjt9UOsLICmiV&X-Amz-Signature=b48db8ea196b4873ea01ff2eece9336323bc7ba93d00f5cd8a64ef0831c67c4b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
