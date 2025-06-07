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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GRUW2XW%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKZE2sdXz%2FCx84SUvg3eBXNpEwzReV%2BelyFVO9atHAUAiBYUDsKHHtZgO%2FflK2wFi51L4M%2BOChrPPdlwHYmY7Q2FCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMZhuiLP5oF29WbusQKtwDOpjefyionFUtin0WDVSqgclG%2BFl0OUpHL%2BmvglcjIAXuvV7WPXApeLEVKEfR%2Fq1KGVrf3iad6WMKSPfRis5Sn0loHg3BqOE2VdsFOIVAJI9HugOpvCqI0JooAcPnRJv6kg%2FjJjc1DN3QrpujbdTOaDsDUMgfytmUbCwtSd12zVKei518ZNUAFZwmJftTTirXb%2FbCa7EaTJp3MvmYIri9TH2N2nLVnDQHxyaFGBN%2BC70i19TPbI4ECGbUYd9sbAdmOsg5bAhJYm8w7mgieamBqzOrM%2F1KB%2BuEsLslUvdQ4PEzBiQVmn0aTxq7og6WQJWappRrPJP%2BJwx%2FU%2B8MVxIny%2Bq3Fg1qUIJEgx2qocQJLMCvmVfJ%2BAoiwwwpPKbQJtpr9PDPuMByvndF%2F4vRq8%2BIRwq%2BL799uLcateEmdaldycs0X4XE8Vkx74NDTSKqPaJ7nCIenA41B9p8YE20BQVUL%2Fr56kEZMdBd4%2BOkRMhKiD%2F6RyoIcI0Sq3Ipgr1jnb9GERD%2BkQXi5rKSvwGp5kK4ea4XHwZUmhMtevea%2FPgSVB93a3ZzYxXFZhNPhrDSyquHF8Wdc%2BNtIAtf2%2B2QLQ1AfrrMk%2F4vkHVwD4xNjf2WpKmqI277uMH4nzLrldcwn4GRwgY6pgEHwsuhl1MLYHuvRArW0bXiWR70ujGgLhpVQ%2BuEtp7LNccUsMwQ0OSiqZnvIbs%2B3%2FzT1XGkfyAp2XYz%2FisgoXQfGe2DDBAnr6QVinZUhkXLjtuPphKp6ka7Q6Mf5njLXui8AQTQp%2F1flB85T8bBqfwYzOMPGtux1nnEVMD5DnGwr3ccX8hKv5Vc66ODtQe7RMbdRo0%2BH5fFvP%2B0AwflI5vBgkWCzYBk&X-Amz-Signature=0d9e4c6784b645ad08b183b932dc1eb46b2815bb6d67d7f22b54781faf4cfbf5&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634TDQGGP%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkYlTcb4CtDgY23M5Y0fB12HqR4li4JScJLiSnC%2BI3MAiBnN%2B3EXlCR7WhgIWGb0xZSy8x0Tv0ErZOLwgZ%2B6Gn01ir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMOJqOAaV%2BYC87%2FNFpKtwDRQv%2FLyvMG6Q0erMkC%2BKv9P3Qv4GgylX3yAQz%2BKAMjBuZWdrXwywScWHDFm5ccGXeMVuuOXafPhurr%2FYGCmugxgvYH3wVnmXHiYkRLja%2BbyebDFhDIbHupu11zMhTC18GxIRZfYEmMDXMf35my4R0I6IP7UQX3l%2BR7EZM3ctUUlLULQn%2BCX%2Fagq3N6IBSdZD1A2g7xSQ2f0seIHBInbMh1KTO3lJ4lJNi%2FGHPzmlcpc%2B0b0aX2nJc3B1iuY%2B2%2BidKxLbsU4pv5WvnhyJ5VKdspnSPMWeS4raVE%2F46fEGTwyJRjzVocvnROXYNb%2FH1mGrAJ2VhO1IxbrDzbBeKKVAXw%2F2y45XmeYIy5xAsDtHhd3b5vxH7hCEhWmKuXSdeDhHE5%2B8CK58oPkKWGp8AzA20XO2CqjP%2F5XYEcVpiRdThOU%2B7IsM4acZ3MgJ%2Bz7m%2Big7AMp34WJttiCYFpotCNA%2BgM7heY9YtKn%2FZI014yHhFNBk5cD7XKoxOTdL00xn45eGdtlslPW%2FkAqqUzY42KLD%2FTSn%2BSjerAPqOctwcHY8sGXxWSWO1jsOlnT4eQuHSPBGZSxjqnjUQwotU45Mp8%2BX3h86BLgWqEdDmKlHp9xKESH%2BsIkRhsAFu1qz2qI0wq4GRwgY6pgFWjBiZJ1%2FaFr9Z9SEMbvbVjL33pYuikqr%2FZXDxeaVg0DMU%2B9VaON%2B4e8cPmwRaowQLvw3plqoYAYNmd4I52YHU8TYzDY%2BJTfDvKcJShflL93bGTvaNkXAeYLxj3jKrLdOmqXpu4lmFVjhnMc1NcS9brfNQnCmgXr1wNaLH5m8Z9FdJJ1rAjEpw30cwkoO8n8RLQxbJCYkZHKZRLT2wlfGmpEDHdAfR&X-Amz-Signature=bc8a8053637ee603f01b7250a41eaa3634b0430b8afdc5adec4f20d4bc8dc143&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
