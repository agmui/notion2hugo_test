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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FLKS5Q2%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIFE8fY3k6jSNODVPoEymO2tAPPhdUNcEiVtoVm0uBvJEAiAKOujgno8CsyzekthvyCrof085IxRiDeKqZhQEzD%2BC5ir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMmDuXJbLvq6U%2BnQNYKtwDmS5aeeDytuD5U0i1q0ZKZsRvPT7OvkaiNjXr5UILtuW6E%2FWM37%2BNeKfF3HERruJ%2FvxYAurfV8j20BoErjkC7HPCkC8JcYw9k%2BteYr3FDkNYFOa3%2Fv0EPx14eTur7EmL5FkUFM26bv%2F1X7XK1IeIq5iu7N2LmJd37wXqtvQfHAl03Q%2Bcm6D6i%2FYt2sxJzMF4Gp9qM5G71ggz6Fh7HwezhlmHsCdKyLJyJb8mVlj6D9HVtP9mPEQgBRZPyR9%2FUC8TB6D2YNVNn4IS%2FJt19MHO%2FKZQT4eUD1wECVZykgPSw2Srtx0HfXnuDFc3g1%2BgfUuiXgmLWqylwiakwxNjPT%2BARDCNb5sNJNMGUxRtN8iEAMQk%2F1lduCl8Qjv%2BETa9RsrbSpIMDrLrpm7oTInHp6pwZk7SIQn3FmHBMv3b1aC%2BbHLW7BolbSpsaipwx0ALOfZJSif4e3mG1ppEw%2Fy5PQHHdgz%2BoSjRieGrWqMu3YDgw5AfUAI3iE4mLMuCbIg4ftg23iJZMbxi8c2CffDV4zBEovQCe9n74uImXw49j66C1DNEjX4SGAh0bfTj9dpaMxWlSgA6CCdlfeBLjQ%2BDmAvCw9TbhMTL%2F368QD06baGaB2lv17SuKR4GpeJv%2B7I4wr735vQY6pgGLRLeRyCKJ02igCVYcqHk7f%2F74%2FvSqc74mhM%2B3dh%2F5dYwPB7yj12mIdMLn72mMjX2QZL%2FQHs7cMe17KcDkrHy7fxCxKn27EXUSlcPZRzdjjW7i6HhTRznOjj7o1W1I3iNUVLpqnaQi5n%2FF4rKPj1YR61gZztw%2FF%2BCr0zvRCl8169ZZKkvUxAUK3bbtYtTBwPRAQUOC5Zd47Q6s7K6kL2QmFlJOQgGh&X-Amz-Signature=85aecc20822ef11a561f7e5a4981a953a782fc6e5aec26be7ab4a72bea73485c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG5M26SP%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCrVpUfEWxIW%2BqXD0QJfT1%2BZlQyXtVld6EC19oy%2FZd9NgIgfVMRFnkCFKRYJ8TxL%2B%2BCxNOEwFPIlLcmGez2cExEKxMq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDPrPB9G6ayOFrwrRrSrcA0P70shlg0SNxH%2ByFjnzFgmEd0OAaG64s2QbcV1ag1PBZ%2BGKRh8yEdVzyjgNty3ibqOiiJpeM0ss7hjB0t5a7pEPI8Cbw3OWFZbI8WBcEOUm5iLWVp4Il9XYQi1%2FTkqg9KjzqPmzhZrFyd5JURkmBlvGSpZExIsRU0V%2FxptHrm8rdc7b2HBaaC3dntqTQsT9yOwtpG3UQp5ore0j8OhEowhk82bdvkTBnCNCH8ad5wFaZ6X0IlVIU8nPhudmw8WbhgUxSSi78GqAdSafmnjWCVrHES%2Bx9Ce1LbgJyVvz%2F9%2BCxKBHCiW4uy%2BEjDwqRutL0B9yr7f3VwlOUPksRZz02cgtCJZYc54G5Ucjv%2BtLuRkS%2Byg6aEtFhvunjq8E7bMTlwv1NluWVah4iJBjcrg6KVsIv6FrK2gULcE8FRfa8MDi3AcfFQp73Z4ImXncrfO14rcmPc7ZZtDo9sef9b6yunf0f%2BiAVaT2TzBizWjQGJbtNii0F34hrGZIx6GMFTvvB3Cbedp2CTQi8WbLkb8l7dgz1gpAGsu%2FDQvViWImX%2BylhGdRY3Q2mLlLbnlxviXhxJm6yTHa8yZIEwG47kFzFtRzWM7Zndh63olYkmDpUmoLFbBgP73MYSFY694tMPm8%2Bb0GOqUB43trMS9TuVmRB6cDsvUh6NAr6qE%2FW3iXzj8p%2Bh4H%2FalPIBrrh7iVzjA%2FcuwQw%2B%2FA1w042TNKEV8Z6JRwUA0bvxlfa1Fh93CdUKp37kniz5AYlODWcAZOUPVJ1lH8F95dfx1CQwX%2FQ6BundKIvHsmaNUPHMkIhwS4qj1eTCyK2RnqzPBdyOJGkHQfvciwrsW5yst%2FV4UENrRFFW2FySkZq6z7KOoQ&X-Amz-Signature=fc53e0e99db3d0d8c07e101a151e738754c61cb73b3f887bfa34d4cf972ecb6a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
