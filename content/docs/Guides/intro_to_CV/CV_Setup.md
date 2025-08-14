---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-14T09:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-14T09:43:00.000Z"
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

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B66WEY6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCjqUNJte64Yfq0KCX26f3FBVEtfKB2exhiPBoviBSItgIgGX1%2FOAiopQgbyuyLFth271gG7u6wDYCC0jL6cJkGVLMq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDHAa%2FCAC28Rlnt%2FqBCrcA9yeco5Aax8wVEzwWPtrTQ88EOOfPBcOqSRgdbWzN%2Fn7q5%2BisPQ4A3AKwbYeTfrpOxVNtJv3GSjRgXxHhmNfax2p4Mac2EzFVvNR6e6df0n1N8adOs9kTqNJTSyaGvazvV9RYoagdMcexLpU1WofawpXjTuLcM2UQviBDL1WjhhvrkoTvBr41K8j1h17AU7F0elRzVtFjkTvBVos9c3to8OfV398MzLFHqfl64pGmM%2FcjBBi6NKaScIMJBHfcwX3aVqJqRkRPTBlehvK7NdXQC9NLwVdsImLetKBcXm3rkqYZlbk4hqtKppwnDbf1R40saX2a9%2FDBMA6giITlQLF377QMZo7zocEvF8iKlfZuGkx1gFf%2FA%2BX1KOLXE9S6%2BVRg5wVp6C27idf5ctY9FSRKnXI%2FthsZZWc2AiFpBeWfwjy%2BmnAgyZOcyHtyDE8tDJbS1%2B5IGVkw5yJeMdNNbz%2BnrN%2Frh4kFcZGItrXKEiWeUeppqe2KrbwMO5tHBGox%2FsOXiYGpU26dMzTN3A2ry0Yi2eZR5%2BoKWD4f2dNlBlY%2B1%2BafbRjLmGmyrOWbnyRBzpSIGr3o3nFqY8t9GPT1w7mrY2OOHE0YYDsnI7ut6yYaZkYOZ2Aln8GJ9auH%2ForMPzB%2BMQGOqUB6360uY0Uxkmg1HTG2lS5w%2BfdOQ2EZ7jn%2F388hmQQfmxg1tH2gs2XbUg7Fd1sZic7cF85J%2F92WvPrY0mb%2FOI6fEQvNTeoICWCQa9upE0IkuQlcLruwRBeVpw8jvuKO14EB0DmwaTatD9w7EeNMB6weAWRKi7xO3bznyV2NJWKz7Yq2XHLBcmdbCq%2BfCe7SGBBSHbJt9TantCrVpKi7A1jp1gV0iMI&X-Amz-Signature=544f14f5c2068236e76d723716905d50e8106fd448b2bc98b6dcd1ebfcd91ccb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XRURRML%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIDeSECQda%2BNQfzxV8w4ut8GHKyniutU3Or9RogvUQ0XCAiEAwf57ckkwWPanBfTU4UsV3ypK7EYfjmglR%2Bssvqer98Mq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDL1hyQ9Reqh15JoVJircA4qHpzYiLZbqkcCcRIe9WeFeix58LOlUTNRGnywBy3EGnb%2FxJvJk9YqFe2WaS5jwlpR3YMOt7ymyFMkV0lP4pS1jq634CStgGvHIfBHW5zkJqCf4Ci2lpgr4LACxAlGe2iO%2B3E0aI6cqZY9sSF4OKBtGGUqc4gVXu1Fma6z4u6yQlHCGUzuotLhmVjn4f8uQaRswzEYRmB9r35CBRXCyeHmjO5gbrfzMehLe%2F1on9iViQpd5M2aV8ESZSfyPXzaM%2FrvTyylPVEeRvk%2BRIn36eThkaA7%2FmKE3WCxQrPoloWY7f1HVcFW%2B5yRwb3MXO6dqlD1hqQw4SpQj%2Bxt%2F5eVN7sLphBJh6PH%2FqFuwmPkpkI21BNwnwlwP5UV1P3D6lXlIq7UJhakXMSKslHi1UGYusOmjd0ZfpX3HxcANllM94dV8YuYXHX7hOUVchxndsw%2FlzRIm18x11F8t%2FyFdhPK3K608IUZnuu%2BZgZkJ7pRDc3XLwYg0iUpTMK9SAKulxArNwDgoEQJyMz7fH52sxFhCYVj6cEkTlVXWgcg1nb3pn4TtU3TGODCW6suK83W7bEYlLcodpElzICCcyfU0LlvwdSi7oohxNf7jCe00faSpNNgGwGbn2I4vSBQ7fVT0MIbC%2BMQGOqUBZiwkXALTjpca294GLbFCO%2FG5tBdTVwvT5te%2FFMPfPIIXZdx92QXhgl04yfxUZFgcyTHyqDqBCiPior7H%2BafJMrvkyO%2BmavsdforsSodOzDBA2afFa3Vv83tRUEtFxUfY9Rd1m6mSeGn8T40DVevkWAq4mf%2F5EaLkMliBG1T4eQBy798IgCXaTB5CDbeGzFykFx5QHBOA5%2BG%2BD0WLCTPxJ0xxIY%2FY&X-Amz-Signature=5d9a4a890409a1adcaea7131773bdcbf68bde9cc698ed3f239fb2bd75bbd6086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
