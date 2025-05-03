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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBGG6AIV%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQD0EaTedMVGRYponXFlltpAforhvkyUlTbBAc7ZDeNbaAIhALgyRiBUlp6ytHxYzSvnclCK9V7RwyX%2BmjT8N%2F5nvmz9KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoWR4iEV3UsMBneUEq3APjSdD8n1byt%2FjeNvghk0BDe7zExNqpIeE64yI3GdhVtneWDDSCCd7xXJ%2FTfAhFZ5S9%2B2jmUSwwhEJBHVlrqUTdt9dAZUudn49voMcaSViKaW2mFcooVuvofSPzHDZNnaoYyaJkygl8yw4p%2BxMIE8qrXQu3y8YLgmjMQiUGVXo%2BMki6mNrbLC0bZMgi8iLpirogN%2BFUrEqZhCK%2FmJEup8%2B%2FS112XY1D6qqAVR8RR38T%2BqmOFFVSlWkKtbvUiLMj0mCGHc%2Btx5uNl%2F%2F6buBWdAT5mfnwUf4FEOcWAYuRm03EDqdigohkTNXvZKYeEjhi06AOPnCuy6M0IsjlevxMhKM1zI74hOu7E8iC2v%2B57PgF%2B6gX%2B%2FxI9P7nRGZJfZPORahbFPOhwi%2BZMfjcy8shc0CQKzh65a2ik0PgxPeIBK88vLbVP%2Bon8%2B3IJsc7PBfzGYBcoPjlOuwPcY7aCkygWUyCnhjuyYm0Wn9lkTQTJckTtmOvtg3Cw9nHSMy30%2BZ3GGRID49bD24Vdi49xR4VwusQ9CBndXc34IOqZxb41rTPh8HxdVgNXVrla84JsaZmA3Q4EAozqvBGwzx%2BFas20BQS5sZGZ%2BqmL%2FGCwXgSzcuwg1r55LsOklLCadZPwTDb3tfABjqkAU1qM8UBcS3T0ZmqV2HYOFTj98J6pz4pCb0tlb5Um%2FUfmjTwKwvFetD5V5dewIJ5XBqsT9v4DgZAp5iX8GI19UVpEuYho5tUi0bgmhoxtjY3hgBI9sA71TmrVA2a5ahcyNXFYFgpnKcLAT5MpwkuEly%2F1ddFSIgjcufI2LNkRXEr9Y7h7LDmbpXnLB9sbuHEM5E6Fo8tu4G7DT8STEl0Yk3%2FzP4l&X-Amz-Signature=7a11178ef6487cc08a87ebb970a977be0610868c8c9c091f845b4097a3c78754&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637MSHGAA%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCICCEoygMLBNRP1lOUcV8LGhQkr%2FEICkbTKI3%2F7EDLPKjAiAuAYfszqGJ5KCqw8%2BVQQwY6PvrgowWNBAZ4cRVwNSX1yqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuua7qIGr9pWhL9BxKtwDeLQBUZRQDeI0xaI1Wd27b%2FnEmVp9UnDVW%2Fr9BUkYiJ5zot92BmJRJIv%2BcmZUa2tBKy7QOqFvUwNyUA2%2Bn5vEepEjNffSWY3zjH7vMnAxwS7Fv4NfCGuSlHzShtIX17i5nRYWDJJgpR0GBL0ok93a7flFpuwCrbm%2FZzkLv2t2MSNAD2L%2BbFKQwtUyBcPMQqcCaZb2SBXIKcCtSZzwQ%2Fk96leV5XyLh88ZFUn9zHsbQNpI9hiY1nRx5jrJTazbz5zTKf3EGXhAUB6rJnswcJk%2B5FLUOS1PZZXVVWIqXAplsJGp%2Fw1Wj%2BvAOCmnmXXzhv4zfC413wDwTuzVWCMcsqJsBmJuU8wwMEl9MYnIi5yNtPGSdTD%2Byq4INT1Nek1ULVMKnD%2FXFOXZZZBqwkmjDcZqfIodR0u0zbFEcOCtv%2BW8gMZrzNTjH%2B7Yd6kAOIe1cj4YJZE%2Bi2YS3jwgzCSdsxG4eOrdl4KlquaRNSQWzVpQn%2FQIaf2c3PBVsjTLPDqM%2FG2Sl%2BGXdgQOjhptgeibKs4qi%2Bw0Brvd2I9X9zICvtwlCoJyp%2FydVGBg14iqsn1zsDaQaoKQvL2YiV7lNN5Rvi0ub1PRWzPUo3AsifAX8M5G%2FaLMFdkMHKvCnMzp%2FrYwtt7XwAY6pgE8DIWigMaVLW95zH5y4kfFWgUhSUeMBgwgzsz4%2B3rRoCvEcGPz7zumjGCensBC25g7cTxngQtJ3UKEPhu419b4oZwAuhMFwfmNIppMqVjNIW1wykdExXiW3u4FIrNQxgOoaLBHZB0G7gIftj5uD3KNHc%2FWp7ye%2FWfkFY5AGmTrzM819jjTvnZmTp%2BDZ8PncZY3P5V90XKySqC%2B8llnS%2FqT2xOgYH25&X-Amz-Signature=d7c144422516cf115730aaed9b8899f5726eb4f9cfa53d18d4f83d24f963c86c&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
