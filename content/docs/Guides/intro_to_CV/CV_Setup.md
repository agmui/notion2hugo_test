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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOGXSGF%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T004229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCKqvOOcGmJnPuQ7AXdWXMlBarsOdF99BiJ24w26XTURwIgZvBad6nBamDpaQ%2BXZdTChoukwwlCxdsMoPtNhIrmHFwqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDN%2Bmi%2Ffc0FBSbezECrcAy4RX1uEL5g6aeAn4ZLFtPd2vz6nwkaaHKMe%2FxjI2P6Mcoz2QC9ktGgdQ8Sy6k6YhWASaW9mhjvwBSWqha%2FvuhlreRl9ETlSbyLFvskyFkk7N7FtK7zh97cRxjoXtPEt5P6vCywOcC9FidALXrirwKYidIhu0%2F9fuo8ULbPAVWI%2Fljun6xLHDsrpouELnIdfcjct53t%2F6fWwxTUu8Yo16JHWPm58eCefwsn9Xq0vnoCbtefQBMacGHRypxXyeRPpltXOnB01zfj3TRuEcrbPhrsQEs7OUfrXJc9UlBp%2FrEM9ZiO47%2F4%2BBhIkKXXbALLLFMTZm%2BxQZBGzuAlMC5HZJ9lhBwOFxlzDhyMCseQZh8nRq2mSTwz%2B5ZrfKAQhar6FwNqAtpZwO9zvyg5tII8Z2BjXRd9WJTukKM6dZvmX6S67f9%2BD%2B2JmC2PiekUMsjJYMoJVBYirWoDYKjV%2BhrNVrHvPL%2BDSv%2FAMg0bImCHD%2BligPcNFqu4xrxfeQAv6pHV%2BEvsgcsjnpF%2FDyq3%2Bn%2BMTJf%2FdpU5YeDziMlE3IFzPWi5uBcYsDZyqR1VYD7I5%2FeiweDykedizAyY5QUrlki37H8pOKqP4xDbzeTuXXWHCxnylv7QLJHnFowW5kxXvMMm3qMIGOqUBpfI7cmYBoi0dOqjm54CQejrQLBQU%2BlLZuEVojsvU4K5D1Qs7QuLrGgMRXetlgX5W4xYn%2F81TAsY0OAP9oz2ql%2BblPAg0S7sfGfkdF136Pcz4WwXnp2sIvKd6Wu1%2B%2FGpNGtQcNwTzSLSxAEADl0OxGbGERFdPFW3DNnACRa3zf5jrbmk9cKiSNh7BA5XyjkCa0vcvcbz%2BcVVMdr3k8U34eTxVFhaj&X-Amz-Signature=c0d352ff6bec9c167b7f05dd96dc016b6da67188695b29208c31b65943ea2507&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL4I4X7G%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T004229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCxuA9QhX1HoQ8cAARLEbWXghJGjiaFA2kQz2cyYSV%2BhAIgKSSsXxCWDBeEvItrwi23MTbPaEbZb%2FiDfrgbFEz98XwqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgRRAA0%2BCoRE%2FkEcyrcA6GbGx64aSbnl4toesuE7cWUw49Zj%2BC8jyWabYoTuEEkAHbHa19k0kARVH4pc3liCeCxi75Jjd1vooV5EXsQGD%2FAhe%2BJX%2FnET7Jck%2FwKvb0YpxUXPQTGaax%2BXN78kPetziN%2FemVKz2mDJduu%2FB9fsZ5sG7RVLffAARLZjyCn0B031DTpAASgMO%2BS7G0oZBZrmHMvKVYN%2Bfo4mLiZnBbvnWq1t9yhXgVPZcjBHxZh4IOk937lzaNuGz3sTAOEKOynlYl58dw%2BVLhOUmFScTipg4MB1tfoGd8vF0H7Q%2FDjBywVZ%2FpPsT%2FY9LkYJ0UwsnpPr6%2BNQjeTRn3EjwoMlB%2F2OueByzo1qGfslVMQkHBp9S4YDhQS8lCnGF4M1Kyyz8gnjpcUzm%2BerM7BbGZaR6LXdoSjOYY1O3nBx3MNWgIQhiWZYORtgvQoqbwLc98mLmtNfx0fB8ozpshBd%2Bk7o3ckoqHcVg%2Fm7mDdrCyiUfGlxGIhq3fXaCJWXi7te6k8QFRha%2FfF11ccD4lcJg9Mvc2mQLPUmi1UlKWp80OZgux327bUcqRb7BG4z7OK%2BGeLvGzia9fGw0gLXC8YT%2B7bKGomX0Wh%2BBHqAhb9GpxqNvqwJb2peon67ZuUeifUnYkDMNa1qMIGOqUB3dixBu1fGAyDyALL0%2Fal2%2BtCWSP5THZDSrSitAJ0bRteY2bc0vbLlp9iEghUYMyZydYFltDfz7Nluk01zfB05kskWoXe6UQVVQIYe7K0VcPBgotRNxb%2B1zN1zRv%2FNpyyyLq7M5gNpkQoB3Vi7ETPOLqUFFW%2FzdxRTkvceuFGOnOXe0eUYPI82AZZzwPqZCj7tU8%2BT9UkEoa54Hl6jNhBcmV3qHe7&X-Amz-Signature=4991858dc03d9c2811595095984431ac661328661106b8503f599f4f14302b39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
