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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX2YDRZ4%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T140214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIF2l%2F7iTtk4kn1%2B9SeSjJP75OKJQa3GZNpd0u7QgUns4AiEAoJIyV%2BRZnCPXUeSVsLEjkSbgg6PU5y%2BwqdS1OzWHbZMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOUE%2BciUiJjfr0%2BIVCrcA2Wmpy7LNjAEawfs%2BfUZXFFT06UYrCTxoAyfgfhywX5q7jRC1s5FULAjFVdVomZbazf61QegacdBQF5REhyJqPEvUD42SgtHBvvJprvmbC1GCEqwFtQMQ8MKu7O7q%2FPMvNRrw5FFnEuVby3AwTR6uYn5jSReJfJu5PQTf%2FTuB2mRTzYn4s72yV0SI88Al%2FFq4pCHsmyabdQDXBXK2HAahLmlQ4uIMbm7CcC%2F0%2F47EmV1gUwg1YTotlqvtZjUNjPtdrPnJH5wGxrxoIaG4J56WbPWvoxKDa1n3Mhb3ZrGqwIOPxH2XXz%2B6J0WmFwu40x%2FMJ%2FqXWjfTk554I6j5Bw9B56I04MYqqym33OFDJ%2BAN6KQjiBeTkxWXWq%2BoU3%2FiO8CKJETK8uxSoFCYh0SZi1LzwxUSK7903ImLauqqlFHKzkb%2BeoXL9mCF5Or9IkVmGWKAohxhCCnQBeRuuPR5DniyPMsTAQuJNHwSflZO5%2BZrRdsbAg5l1ZFbjb9xr6P9fFL4dXmlL%2B2wTLTSKfaIZc8xYdVO9CZBGp0q4jIu033T4Zb2yLDrX6gJqdCPVc0XGXwd594CTI%2FgaUcZW62tg8CNy1BP1QjdX%2BEQ20QVgTwKSWOXL%2FvkDR%2BwaFEAZlIMPycx70GOqUBtvZjnGIc73KFdRLkTdVkW9V1d6zrSZygP7NcauH%2B4KNvAFr2lObBKfGqvNFa1N060SNI6xs%2FYCMNKSFGMy0JwsB2iCY0ZfonBmH%2FUFbpnzjTRfgF3aVV98R5tH831PvgLcTi6mFq2Z0C7Wn8FtIVvXb%2BSsai3zNO5D6VvowpGQmiAYe0II92ys5GRV5fJmp8ZkHFYL20HWfEoJQ%2Buc39zJ%2FMrBEz&X-Amz-Signature=729ffee63bf760e46d84ec58b233d46d5b27513567a51e37aca9aac363196ec6&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI3OXAEO%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T140210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQD5h%2BlZ51%2FZYthgPAaIQCaQ45OvgMQHaKg5BuueONzdLwIhALZ%2F4im0km20frS%2FH%2BEqm6IxGeuo%2BZGYnXujHKEsrnuxKv8DCF0QABoMNjM3NDIzMTgzODA1Igz0YqTa%2FnQtuYwCRT4q3ANdpkaXuuEN6UEgvRiMuQugS1IHRVaWP1T%2BGbMju7Ow%2B00%2FvX1M8pdetxBe9OLFhnCrCdex3KmJ4IvrBzDpIkikxZUtJDkLvPHY%2F1PV0JET%2FvnfPWwcPb5p08s%2FJ0gt8NYvUtq9fLIWBF61g2B1XOryykGYh6IBDGx12YGGwkDRFUu7nUusncoGYzVgu99KLDJWvFh47HaoJb6P5mUyK7BonGdhU510yXcMV872O5pJ7DUnFdtwalRyd9JnE9weybT8Ok1D6nmifTBaMx8M57Sw4RzgvLeiwP2Q%2F3v3FZ1w6%2FGjph2d7LkaOCHpTxwdWP0ZlS8WHueGiL2JCcIGXMBv3S7Whju%2F9%2BhvcKmHu3QTsXqNDwi0nateFGqgn4eqP7d1OAbrj%2F6ArqhBzRGIGW04E4t%2B0GOdm6kjvcs%2Fgg6TQq%2Bo6vH52TKhfnOBJ6QYhu5QTwBItY8LK%2FIsGkZ456adzsyw2HDPbTR5DZ1LGxWNBBGyoA0ADgjSmJnd%2Bx82YYiER9YAAC%2FY80%2BsiPL0Uz%2FfB2JetE55Tqai5kJs4uCn1GAA%2BzI%2BsV1Egx%2B5rL1XviGSFt8jY6FLrPnXLxYgjxUkk32F1NDeOqVNQVLaO6vFBScjowCperxur0cvKjD8nMe9BjqkAVGAzZ1AlobARuioGCrzINeIIzBO8YdO2jq3YhIxEQOjowXqOrj%2FjDT0ouzEz32pLVHXFTrBHf%2FDg%2FeeVVQohAz1d6fMjl84BYQg3xo69B1uGdsLAb9FwdVcY%2BWIyuQ3pMZnuFWeClqqbN5NRYuoVDxGVYLFOTa4VIIFwH68%2BsUOsKyRidWRwv6MP4ioC%2BFcxfASd81zGPPRlmUenjMSRr4Mta2w&X-Amz-Signature=c4e83c331e1d2bbf291f8fe1c9d210dfe541a3bdb58e8b06a3ec205fa2ea908f&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
