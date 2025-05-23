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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG6DWT4R%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEyNKKzKPbmAfZiuxTxEBc%2FRl6ym5HeW5a3Xta8V9Zl0AiBeU7nPCZi%2Bi0%2BpncRhMxNQhVuuFyiWErprdcpq9a1rhyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKQDEKp3qTz%2B%2BhZ%2BzKtwDJUIa9pfuAJEeuoAKq1o8ZF1lMtiTuviVSLo%2Bp%2F3KygDin0QY%2BPbd78sLrlfe2%2F6F6vhvH73v9hCLLhYGh0tKj1Tz%2B42fGv9HoqlJnIQrp6Iii0c8K%2FHKFKLo90YHcXVORG4BThO53iiQoPZW9h2BFjvrhb5i9CT7%2F631EPUXLAaY9Gthmt6KGoM7T0V9j3dS%2BTIjwfigokWO82hVBFBane1feo69MYu5gPpzlJAJvhI3w2bxGrWl5dMZdMWMX80GDEl4Ii%2BKiTKasVC1W0mPPLJWuA6z67hO9VJqS4H1hHioz%2FRttmBzvdxKMXP8HIxqMMKf27iSBiO0jjBMTFFdCzjV0jvQpkFODXpOYBQrwMg5prbHt9XeV%2BWunLuEruNQr3AvbS%2Bz64e8K8%2FFniWJWIC1wr%2Fqfy72Nau1oMoJEsKdaJAY3Nf00tiWgseegM1H3t0d%2FBGfe9DEhnwoSPn8yJWpwlDu9VqM5mB79%2BR5CWd5J91DhAz3g7a28HWts6mJQH4eTfqF22BQMnAcxm3RXbvJQCfWmH9jZKWapfCAXsCod4m9paT4jhMMNap3Tg7jm19dtsVP8qnhBkfXjBcs90xDs%2B7fKZrLs%2BA8teBZ5CLHL7NawnuCVVtL6Zgw96HDwQY6pgF3gy5ptNNH3PEzALUQg%2F%2FnQEW6COkGPTD7OWe2bYCkTewGiV76527EwMjyaA3W9x641j8f3RP1xJcB9a%2FjgYMYAbLGOcNDC1DvTJVNvQz09Mjq0nbw0ioO%2F7c30zeBz62rGScFze8a%2Fc2xpguqyie19nqDIHSYkuMCJBOSjTeTKGBD0vg27V6Fe3LiiBU8aAh4EvyBNDtkzvVXu%2BokQMnbgqPn%2FNpS&X-Amz-Signature=fef043514f8a81a04d8df09a2e382e2988d1d93bbeab337b63054db8073273c7&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FX56ASP%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCqgyhd%2Fgv1xsdDJ6xOugEehBb1Ioq86r7WthW1kyjWIgIgfQH1iayHaiaUzy0QnXrmBi8UYkyhhMjZkCla%2BDYJz9AqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFe2i6nBTdesZAqgircAwKS4tDBsBeXbZM1MYOEftCPnMEzLiKHEb9aGLrqvKgdALBlfU3BQCKvTqFJm%2B2dJDDl7pzR%2FBx4DyvNXFBci3F74BJFMHENyh742kvza8aFxV2CX%2Fya1S1a48ZOWj8GzXBWyPyTuoHlxmSbQpxNZpKs%2FSAOq3xcp3Z%2BVIKkp4BDgi2bIOUMyaw5sNl9mC9TL%2B1npdV3h1zpZZBFx%2ByKt7rVc4bat8PgUuBYs1D65gi5kj6Q4e6LwVtgqjc5ytnS2ijG50H2m2zxfeFjFxSrd4Qilb28vc5oJO3O5TuTbZXrot1%2F4vnc6H1Z3YLFqlK2FWonkntUdTM6yMv9j5PcFxH%2BipOU%2BEzY69fZ5wh3rn%2FKteY8WsoqRFgOTIo8ZnbcrfiPgS1GvuFAL6AcJXaiBaXl3dnQ40CELkKRmlS7hwNPmAIU%2BkwrofRKQovFnCHlInCAoP%2FcmCeoCjZdMk9HUj1LLRc2rBuBbj%2BekLmkJDu6GzX3LpA8HGKdBaFW7QTQlm7VKJy%2F2Uqq0GweqJiXwMv%2BZ8YgHSKDcsyDepDTMCLi9p136nZ9zQp5ZL8JcZQgSP%2FiJ8i8UhFOraCUJKSR67bIa0OTyBQu83JbXAmWw4u%2Bn%2BRdlZNFJbB%2B%2BSd6MM%2Bhw8EGOqUBbZfAHy8y0EXjpNdrH9iT3%2BLR713UkaMcy%2Fzka12%2BdAPYVXmrR0JkL10sIx%2FBxwGQE%2F83AnjII69HP9BgLRqUgjjTdbxZ%2F3HDQONlNZvSzynGQsV%2Bw9Ren9Zw15KAF6aSNtrO3hyyW9c0Ixf6YpbhBgpGiRpnrxuJ5MQJKyEgXiNvU9aEuZ8NGR18%2BXZazFAg%2FgXomjrlWvAEiXsZOjsS1XwBIMOP&X-Amz-Signature=3b19d439a3f574f92b76ca73f9e02ddf2f13ecc61dd4b5ac518cb52e42c5a6a8&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
