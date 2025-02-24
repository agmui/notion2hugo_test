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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLAQVGND%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVINohYP4AquO%2BfXKBIyqyHpzteINBAnd1my1CVb%2BEfAIgENBSPRH2YHcRwS9c%2B26cZShCAK0sofPZVAFrs6qV694q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGgMQotMYBoZF14KyyrcA0xRZkw4BTG%2F2DODm1TeefBDDGdcQbQ0P4En%2FNzl4m07CPbc1bf7gmpIryOjwe%2FAthYljAnd5wY9wxuFqZhHN9Xv%2FYN3SXgJH7j1XKWF12DRHanXFYaOr1XYBqfcTcTNm4chWqNo1k5hhPt9j5td1XAjeO0QpmMP%2BKNC5EhhvFFDOrXu%2BPkZBAGH6Pb6a0p83WwWKw2VIjZiX14I9zwnIdyxJDnMOKIoveu37aM85pERKFeOyC2SDiijbQAmIrpbfh5igtVQG9CM6Xijg2nBoVO4E026465YTz%2BTtZ7IMBnqft1SC1jClRHzGzKi36CpP1ekOXmGgwC8bHhaBSoqNqO%2BgoFiLOvXl%2BNaalHRZwFBtrUYMRCqoBBVIgPiRQvQYJtTpF6UVze0%2F6u%2BLQVJz9MFqnjJrnDB0iAe2krH0lZxLzTfctZh19wSDq4pwNS6c9fjHYyt8Az2T1iauzL3mxOpoQk8ywZgUpKx5DmZ9P3Gzo9k1sNpdge%2FJg0Znf0aGAZhx1VmOHfeApGgwcvQboo4fvXYwmkzgoJolUwg77UQiLcz%2FN6p3kAT9GG%2BOFPABnlY9Gs7Hj79OocCjN5F9j0%2BwCcRYUKOmi%2FwoxnuApwmXnPRS15Xebexj04XMIvx7r0GOqUBcgjx72IRb2aFa0xF3PTTgXdbPa1i5ZJvTt8EjZi5NvHJFVgKdOZ2t1b7Fy68OrivE3QMjtg%2F%2BOQRmOOCIiMTwMj3F7st4jqTIkANtDktFJ3YK77hVgqTdblymPqpMsmeJgKwSDn7dDa%2B8Ite1jo%2BQsn2ubv4RAy7O6kvv%2BXOtPVGu%2BgKBJDRxXJjrW1JWafIOnN4iMcN%2F24LuTS3Vz2W3%2BKMK6ki&X-Amz-Signature=75dd6586ab573cc91ea0fcad652ee91ca6a74b42bf42b3b2dcc509716b4e577d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OJOIHED%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCWo98jbh6NVLrzacAnghDWGMvVWlA5hyfDyzO35lZ2gIgSSn4v%2Bw17d%2BBc4vwuBCMC9tNlohmQx7mHwGXjgUNwIYq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDNh%2B6hFzNnDFT4kgRSrcA0FOvb3VBRFPhmshy8%2Fwj9iy%2FT7brhBwbEd7Tv6lR5ibeoIrtMIi5fNWbhyR8m18elHfi%2BQF7BM%2BCsIooLxYOq9Hxp3UBiBeqp5bcGqf6lYOO1IMOyFjBwy8N8dRQPXDFdbruEwdZ1RHrXH7zRMZaX0ZDqQoVliyj3Ol8CQSG6OOQvSBijLD2bTw%2BkVtVK2Im6%2BiNr1rYZWfKauwZXcOae65%2B71GmuKBOKZxcO5uT7eAndMmO7VCB1gl4N%2BYMU%2Fiwz%2By8PFKcyUSO2rZNS%2FA2UsKB6lEKMZXwLrRStEy3EnBDvRhx6i4jxyTj3xr%2BBBGC5lFKyttFP6ZyCArAf4i27GIjDSj%2FmYrsMEhvP2JE43rpeydHNz03DO7jzogFIsVcQ0n4JisvObf7VQH8p2CxV08Jpzww8T0VFWpitjVBHP0xxhevFfroSQzn%2FhUPaFipGyozARsvGWb5MaKg9q1eTWhQMsv1NIWMvlVuIggJ8RAK8ZKH%2Bck793irIYgvZSEsUAIXkXBS7o5NV2CqSvGWNcdCQmYkvKckLII7hRtyfwdt8yiSM%2FU4R0EgPn3%2BrenQO%2B%2BO9CInCOLVuyIGigWzzfT%2Fxe2QJPYUQ6N21bc7Zs4fKZBwPQXAu5yd2lhMJDx7r0GOqUBmOlLpCsx2SKHdMhrCHQWrUFcuuHCX4UM3UJFMygHNDHC9SHmfN9GQyhGUzeruAlEcIUjGkgIMbMB0eRyOUqM6uBQgyLJYJuBgJYveIT7mzz38TBwVy%2BeXsUVeWKijhSaflpfxR%2F1PnyalTN%2FX%2F5nkGQBxyt6B0ISKDq7e1qM8LbLCzlRPosVvbM%2FEOc2q%2F4UeGx2IdGqQRljH31%2F5X8IGHJVCrFe&X-Amz-Signature=0d003b1b39b022785d2d06812e23fea9fab29c59a8b525c605f81b3e8b269d7e&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
