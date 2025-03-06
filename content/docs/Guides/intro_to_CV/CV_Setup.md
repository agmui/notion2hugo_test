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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFSOJTLT%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBnFMBwSIc%2BsIUXIYIo9Zt7X0XBbsfCo44VBljTq5EzAiBTYZ0pvjKe%2FPCE19mQ2gc0WvDqY4uQKMCXoW4jroF1cyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMEy0dPqK0AMvG6qLDKtwDx0icC0rdF1T84MbCiu65tjjs1lTKRV3YASBlbd%2FCBV3NQ3kRc6J3B9JDKiRmjPAsSYpMXLRrsVax4VlZjrYImkcOzqddEcH1S%2BSxU0oifz8KuSSSmwsOWdos80OhEthpFphRU26WkPho3Fu%2BLgU998PBipyEztumrw6AnQdvyfy30HO3aYF1WKpI5k8lU6IPtzsrJpAnHDlYzrCDmg9SLYZNkc5jwk9%2F8F8cVcsQq4L5doj7JS8KS7ZvBFA25hg%2BoeCtjNCKHM0DTPuo1XgMYfZzIQ6QRpWu17I66K6tQRHGOAanz2lAOKIgSY7%2BO%2B3LIx1mQD0s8BF7I%2BaOtIzb3oIlErjHs7b1f7%2FZWogTADiCMGODmttGm534FVpmd3UuR4lDPs%2F0tp50oRK4gDvbx2LrTehskXxsTijj5AzYbbS5HaUodOjS6dQPqUDeFNGrOCthVxfAHVD%2Fj6sKn1wFUf4sIpyTFPfpoLP%2FHbRiOnHb%2FuGvWXegv3YBZ7ZmZWH6knkO7go9oKS1wjsc4XkXeRvDR31FcpU%2B9H3fKIa57IvXcL83W2pZJ5Z%2FySwagnKcAmE9rBF7DFITUjzPGWx0n5A9QT%2BcJHUXn7nttU6nF8HOq%2FEYivsmsjDb66cwnvakvgY6pgHX2d2eZ65XqjyMo0usd3eNOzGeOyuXjuclTumYBU8fuRWTouQxiSXOXlA95fWQpNPn8FhR0D4BZMJIi8TjvDoSXRMidSEOiZHpjOXgm8iqB46IC7kZ73O09NmRJftIE%2BkvdsqesnXMAqelvGS7OP9v10i2Sgae3RDWqK8a%2BF3Cc7Q36BjGH4QpSIhP6%2BDmGSslTsyLdBmhvJJVMo%2FxW9ygjS3zeUGS&X-Amz-Signature=2e1fa16b19e97f1085c014d00336cc5f8d05ffe73f45aa8da4afbac57fa9a0a9&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5MDFQM7%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAplrpVoGoD0CwawlSAyeQrUzFq72Kq%2FtZbaHFLze5jgAiEA1hlSquE8K4wY2gN09C4DZJPm%2BG%2F%2Bq96LWkgToIPLEUoq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDI7jsrTqT%2FVG9eAEGyrcAxeNI%2Fzibw8SgLmPryUA3FQBj4zb318%2BEhYHBXyE8d7cTPQjfvsQS4%2BFqykR%2BHnLv0GsY0F8R%2FwxROsWi7cRTAviAQqPHUAcd5nqWsywUhVZYbgD3TVLRV%2F8n95kn0Vdu43tPz8zDnf1VmB%2F88pdPJdi5s4jIVTdiQ9IYXJz7%2Bcym3LF1uByJ6P5SPuzKqASEfHD0YmfAt%2BuBiVtAg6e%2BzF%2FG294jISfQOnqm9JbUWk7nGqZDGzXVgJItszQRrFXDinwef39AaykhpSnIz%2BCd7pV%2B%2Be8jHZdSKKERKwXkoGqO1U2OI0xr%2BnMbu6zsJ94ap%2BplIaFccXKESHWfTHpg99FmhW9Pba%2FqZEQ7rRHXIt12zZ2E3UTv9cIfBmAnEL0dOgdQ7Mvp1NBtUCxQUjDl1Ql16joRSfzYdeYCLpWH2hPxYKJAI5842Kz2qnB9S1yjTj330MqJ78UI3eInJ1bdxnDh%2BReTGK1GGbM1duU%2F%2BP3jPa7IoZs2YMN9P%2Bd24d0X3EJaoxIHX6mSv6LTpbgUjFMcrgUlCbjOjf2O29H7uzc06MxThtiX0xzehCibUQNpiB38UHpc10rzBUFURjVrbQfh0DXRu0u7f3Oz04uB4oMMZREYwUdB8Ic8mhoMM%2F2pL4GOqUBJEc%2BubMRJGBq44JOk62celPAz910IQMugX54%2FvX%2FSWR%2FvQh0p0RwibRV3wT2MMpuJEwvnDwlpWIAONm626UT5hNrecF%2B7DXg5Wr7mDGMSP5Y0wKFskk1SDUQlrsGIXjtP1oGnPhyoDLxnz%2Fql3WhTQwjTEE0onIv32jrdKRDLn6Kc1UKWh08kQ3aTjDtYNfKU68yZoLaB9AVi%2BLOLX1q1sDruW1X&X-Amz-Signature=e6354c401224ba6ad47922a898bade9ff4aa2641791591cfddc7c5b92fb85127&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
