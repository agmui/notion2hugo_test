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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JMUVSQJ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGipvRTeUs%2FDEwEkXOyjOJdrOvPRyUwVF9pfkHSCjVMBAiEArefYWfjuCbWoHOS5H1sRCy27Lnf0tLFkMffTHUyH%2BHgqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0J9oeULYs26jFpZyrcAyvFpw3q%2BLdmZpUsA0nepAeXm0KVFx1x71DAEs3xRuJAYE7ez6SEm5zC9QtrOqfkAci5hBjUlg0yKHsZBipyMoQ2MYqQDS0KXAuu0oM31Z7b7DeYDDSRioqcX1ihzfuH90%2B%2FGq0%2BEmT%2BLqN3I23mXqNEzP%2FmM%2BeD8hIcks8yOHgEUpNLgOkFwJvtUKVUv82YskWO6AgA3huIowdWto1G5N1d8%2FMFEyVJoEPMIhBz2MiSfV5rwD1%2FAtVAurh1hNAexcYfL5%2BIrDV58VM2dqU%2Ff5wEO1kuqA0yziDfEwAOcjHLPFK6aeYkbV7VDz%2BcM5IYggCx50HbFAA6KEuSyHY7zMlOaVlc3fblGLC223l9%2F2CbWdyWCcARz%2BZUFGH1YGmEp1zqry6AJ0kaHHp5us7hKnhLvxCtLVilEzxecaCDzAeCyYZ3xafcA%2F78RMsPtrrSC9VzEqDMYEETDtHH%2BNCXWEFFNAN8Y6XGxV563EpBjSsf%2F%2FW3MYEQ4uXTouGHgQg7KfmlgVl4Pf6oiB4acBBJFej8ccSxoW5xBjO6nu3NEX6dzcqTtSkKtM4iAF6%2FX%2BJ8nXsIQpHL0NX082rPDvIqUHA0Kz37ebREAMM9aS78c6GJ9MjYKKVdnfciUtOzMIO5rMEGOqUBG3zCUFF8T9fE%2FzebyyR%2B4zkb5zAQPhrCiGY52zXUm7fArl56lvfl569zsy%2FZLbr2soTyJfBW12yQBcmBriYwzOWnr6JnbEMTwIffH3EItDlUbdU9M3AmlgRkvM4qKhgJgE%2BMg2LRFiGlddNnzMdlufH7w43GX9Ukff6A%2B61sM4GxhO1GbcSTqww8FzJGdCbFt8SpouTzb09LSM8Aj%2B974Hon4K3i&X-Amz-Signature=bfb650d6c8c7431100c532236893a264deb227b2be4534d4e56bc8b971de011f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN2ENXUM%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrWcgFw5xZ6ixy8lisQ5JPrl16DJRtDr1cI%2BEkitaf8AiAgx6KSwsLGtulDCs0wyYX0S6Zj7TOLxIkej2d0RxYV3SqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML%2BWaOIXwSOzeq%2Fz3KtwD6JV2jHXtBcqyeos2x3UDy8BHktHcbpF%2BnMvK0r%2FG3CjM%2BfR4yWVVUPRxw143Z%2FgpFkGsRl5SabmDVSTrzCNtCgseFlfZkbWM0MWS4GOeoyFAPWWHmhs4twI8vnB0kH12tcgs%2F3nbaddVrgkHWOWTzl2MYXT7Rq%2BZ0JGEFEATOdMLW2xsQRqbHc31tCdPHmUfFoZB8Rtpy394KMoM7WO%2B2b9TwimFksbNdaX4KCKymY4%2BDyAAxFQIOZ3ZvfM%2FE4pLVYeP9q0RBZYGhL0LgFVljTEpTAZryAdnimUpNxEo3KnkX9YltZh98mKWX%2FJaHLqCtOUOQpT4TDHoi2mgV0PYh1Xne2kAQlGGT9WN0S%2BB5RzHS8VXU7wIwzPfwbbdTvWJDYKPsTSGjAF3kj31DTaJlEBaMDBEiJ7nCo1I0tKMMb2T62NLTzt8dfTblidW%2FIIlwxZrSJ99yanxl7n3u6Mt98O3M4gdsMEk6A%2FGm0tXYuk7nWWcRDuaz50707W4Z1Tl5qan%2BEPPJsZWJLDQzGjGXRVmYzfNPUiNbXlr8IbNoyAF96%2BQuscA%2B3ixvw3iSbA2ECpSyqHEnRH9AZtJwEm5zqIrh5mm9HTLbTgXgF9GCSnfib%2FN%2F6hysaOau2Iwh7GswQY6pgHse7Fu9Ftr5Q%2FgCFN%2FB7MVsCWcVSkDcL8%2B12I3SxURaiv4beBxRAYdsoFWswUZEZxoRaFAbB5OWDWvW%2BODl6iqQgReqa9Tf0EtPum7gVd6%2BpqjPQTAqeUPDqKPeTLwMeVqdmTkqyD6WAMaaDazeWh8K8Db4vB8cqPmz6Nb35ODpwLEVvziT%2BWnrP%2Bvq8XzqFvzhkjzPaotYBJADYHvjvi7vqQmFPaT&X-Amz-Signature=7e10d53eaa0d824b9b6534ff7c89ac8ae5bed209c60f5ff7b51f07f8ffea77c6&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
