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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7RWJXZO%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6nIjEshhnfCgPSG6uVC7MlaPrwTHvD%2FHy2%2Bna4l12NgIgY8m1ZpqSUcDHxMrBC43GYzE81cGfUKUhGqMNJI5KGUQq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDPkmVjPSxzzbhIMx%2BircA6OOznyxxNoplKcW70XyrNTpg3BBXdYF33qItHftf2G9y4QNl7DlJXBydZQ%2FjGgpNQSMpV2zHSMk76tgbe3Q0%2BEv8UFz79DmmenVJGUonBdRYvpRhT8YL69BDg%2BU0OiKSwMobVURrP9rahnJRSrW6PTG%2BMv9%2F9H5y8JAWHDIZg1mPRQKFs%2BCngGzsT8xDiLTZgck1ftc%2F7%2BbhpNdfwO4Mr9oM09LgHU6E87jdBMczU3WUfvMHazSDbtRwyZPwkZ8jCqNE6%2F2%2BOTMfeK1WU%2FbtfX8%2FaWSdR%2Bt%2FgewXFJCRULEmHe43MbmyMK9rxnp6whWJ5N4ovTOTudK3rHkiAbyaiGVH7oae6sQV1h3IsLP5NYx7G2eRZdoOtj4wjMdnpZCwbFucd6fgDvKgRrcb%2FbxKPe%2FtRn8%2BqAOvD51OFW5J3i%2Ba6BsdZFjEo2aLznhCPW05XkfKpz0sXox1wM9TNaWv9H9WdhpfKZNj8azWRcOEDa74GCz7zSqLshPA5R0b%2B76sdoCS%2BGDVHsftVo3kMjnYe6q%2FUYZT9f0nnVnOlq8ud52SxKeURXxXwR%2FDOHGJCHIN7lEgG8v6zJmPXNhP1LtTXVl8eUvT46TkIpQoCTVuC0oO2wAu0OcxNhpHDEfMP%2FnrsAGOqUBxmCRc3N%2F14Nl8QUOESzznHYWKsxj0xDXJp32hGRSYrC56MzEcyLJ69%2FAr1%2F%2FOSZ4Zd9q7GUgsK2uTLrNP8JrWOlxgQnkSKujIcJ8AlbK1mcGAEBMJi3kkp7jOFq8ei0moBssvg%2BVL3kFRUlTKhe5Yt2mzCKjmoO8SO%2BHfTxX7%2BIBdN1exFsganmkyLhrd2HhUlAaL1FzI8yipzceHWkP4YoLvx1w&X-Amz-Signature=84e8579c1a9fde8986c7199f988dd712d7fc9440763c5b8fb6f97d0a6e54b80d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL44INYS%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkizi1L%2BBoR43ZItEHnNHEHLQkFVb4%2FV7u8wbCnzYcHQIgTJOIaDKmJ4Zr3WOjYbh9moSJoVz0mQfMW1bQDvMnAY4q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDLT8%2BMirax220LozNircA5ZiLedlamp4%2BdACed6khCsM0YE%2BQ2BhFIkmXqkN2QsHhMkplE%2BtZGcTxo85%2BGDmcRo11Qa0FTAxAa37f3P39mBs8IXYmkzmTqJf%2FRD1KEP8mmusaR9%2FQYx4YeRu9szMli%2B6VHBRrY6Q8SqnI4Lf4Sqx2VTlFy27RMBwMmR4mjzM4ETD%2BicM4TtUHfDhU6OnM%2FGv4xf6%2BMli%2FMC4TPOLNdoBaSzUkXDy25QM%2FsBNqJLoEry21K902VPsHf%2FVTbMvnq%2B5Yu13JRijIvnUw2SBlH2bUBQ1AjHSj6JwACvOCD2wTRacRhtpanIdfaM6ttn7%2BAHvvGWUP2Pouswl4hvJ3mj8628zy1E50nwWuYE%2BFLysX2hshTRolCaJk9mwwn2Q9e6T%2BJwXf6hQYRYbbIS7pUlQ5LK43pWp6VHVvjOYCHJrhFIObGK9OfqsEcN%2F2%2BT61gI1QYCKg3cuWd58R2fbAuj%2FIV9WVAUSoOrJBBMAeQE0nDQHp9fiUTaMwo7NQlBlwlLEFvm32E1%2BX6GMiCpB7QXlROE%2FOpVxGsUghZPKNDmHV%2FSchBHosLtoe7qJ0vyxBb3dm%2BrlXd2pxvYGbIoxHoMhcgajdjuTUJABGuff3KwbvEXRgdm%2BLDIaTwoVMIforsAGOqUBnwM8YUsWVLpNURaJJaDSHzZQvEvJJddrpIEnQvK8WoqYTbexm6jiTLPMRT1x12%2BVWrtyflNmI3XsrWzQNeWY8wM0gV6QapoQUT7vGHG4RsvO2%2FSyZIF53IsDmpKWdqiJvYrCGG6uzsxBb96QN9%2BgU4jaJLIgwcUsdXQ2RBtiTzU37PFCynr5RJc8DuAwfTjc6OLHCYHk3GZNoCfg5lRzN4SCcWw3&X-Amz-Signature=1993be09cfabc8499a2f1d4a956bd90d2bdb69f6bb881d9e5978bd78519ffd68&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
