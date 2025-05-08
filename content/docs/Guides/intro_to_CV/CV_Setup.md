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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLKZ4CZ4%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T101006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBlU2WHFFXDuj4TbDQpYRCj1qKkJfg06Rs%2Bi78D7nJA4AiAh0BkYXUAxSLOvCgcHM6jrZ9hEfTSKg4iSZ%2Bo9oJ5TvSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMH1SpoRB8WKruwiwkKtwDMl81HhtMPwAYXhymFY%2FlEX1MzwujvNl5fm%2BRHisWSPstFKiXxTzm9ecxKAL4zkYAYvaTPvucYTT2CrKZt9fdcwM65e9B4oXU%2FCy2QyQs8jryrxMAnL6nXotC7hxLx6EU7YkuO%2BDmfroESY5pvkpGbNrkabOYYt3mYxXQ3d3R9wHFyxw%2BSQumDYDWDAO5EUdrga%2FykB19bjs%2FKl6VaeZUFpMG4glt%2BLLasTBiP%2BjtFNfrc5WYRQi0JZB37SkeGoYatfigrEUsovvf6bExYZkKvWNxPMC7c52HN78us7Kfd4QSCjPD8T9cmnEUBDiCTGG05xmf7rdrph7ALMb1DoG6lPjycETDNaU6R6BcJy%2BJhiB8pJstzSRGmfjv3frKkWJJkbl%2B%2BAHNqyP8wGsVGm9DPRQSc4vz3FVDahP%2BAtGOIwQnlqxkkanKjEbxFRuCPsqppI2qzraTntcK6PGjsy6AoEP4NttJTktMDuLJxTKzxCot9NAiNsYv%2FR%2Fgnh5exgh7sHwiZKmuAWJIYnPZ8LIIVL%2F4zdbftdXTZ55Ykizx6mKcGeYs2fPV6ZbeLZDP3%2BoYdi82gSs%2Bz3MRddFCDd4XzbMHZWKl4nK3u8BYLBp8k8SfWi%2FpOC1rzNqLJCEwluXxwAY6pgHnzlHxC2BNG66my6NDoqXy6rJSl4F75GfHIf%2BGUiTCRcmoePt07C7fxVspCuqtdGzCaBUR%2Bom8ScHR0S1QzW5UHkrqWkJ0Ej73Syc8%2FRDuTdk768%2B2OeB0yXk9R6xl85ClKCszbW22nqP1LDp5aJSNrTf0KOV%2FKccYjQxO45mBc4rpbBmozAX4VFMmrp6dIOurYQHjTRwyPtMNPWew%2FFulWy1%2FVxxl&X-Amz-Signature=cac9fdd520bf7c0e8195e31637e221491f51fac56593d1ae98663e82f6a12c35&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOAD7ZVE%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T101004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe9V8iDsG1W0imwlBVL7eeHwVmPispDx33a3%2B4TyuTNQIgE%2BVWz%2BIStzfGOhNpqq1j4F%2BRk7c5t2fsjLwcATxMsLUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCGQcCqqWa7pqQzYrCrcA6ODZtUOgL77SLfYzm329hYHoSIR16JDuywIQMs4JIBbqNVrJiYSBn0atjtk9O5OiTA%2Bda68sfCzIczrv0EmxL6o1zCFKkYVthzdhAHlDli%2Bvff3d7KrNl7cLbHW%2F%2BJJesgkzz9Oj2PCO3SRHk%2Bm2VUheYLmHkrkS44UbpdHYVAhKGRVJn3rNOtyKM%2Fthh9sJ7YJrNRp4tNyxCvISJjnDSQCVSyuAyVVczEuYJf2nv4%2Bj%2FXlH4YGhTi7djV3XILvt75dNZxfE%2Fa03u2WY3wdtAMODehdF8%2BAmIxDZMWRAX2L7JHFIk6V%2BnGT4iUIJBtoop46zWoNCasFktTTJsHzruXJe%2FjrjuOW%2BcH%2BcBC3YcI5e%2FHsviSsR43hO8u2AphYqD4FD5sQpMkJ7ZQGEImLhu7fptLcTPlqgyKVSVLRCuXIBRfE%2BVL53CbubeWR%2F3Kc7RnrcsY4%2BwRVD%2Ba3pNgXAaPo8mz9AxhIOWrgUYrSFXuhy5wqCdW0enph6viBra7CVCCMDgXM4KgXqBLuOxo3AMQ3nzEzvkIhw9457vFMkE55hAIi1jE%2Baw76NbDtzmBTKfSUmgUXG2ab3MROYiKtpbASn0wv1IX%2BvasAYUkRVv4NE61dAU2l%2BVznozhdMKTg8cAGOqUBq%2FXD%2BW%2B8S5afaBELIrradBLfNlCBehLLOh1v%2FdJeaW5tTrp33%2FuIKLM%2BVHOkJ1N9nvry6K064oYh%2FvFP%2B1uAWtuAOr8hMC7WpfzIi0VZbJB8u6QMSCufLHCRgCHboo1SqXHB5UHYLauFdgjnnA2j8oQ2zXv0hQ%2BIaAJ45AeTo035AVR0%2FSfhPdGIxuMMxfK5OaP5Fi7uYKOT2jw2ArNK1%2BcTvz9l&X-Amz-Signature=a6b843a7656b73de72d7c421fc465850a51cf7cb88ea7d2932af989498731edd&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
