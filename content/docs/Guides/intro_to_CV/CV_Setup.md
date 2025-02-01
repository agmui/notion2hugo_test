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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYOHWIAE%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYHJ7hSMUffO9zMgbnziwkrUPUq2LMisVpW3pi7tEdbAiEA3tIcwoOeWuXxdzqNDhxPASu%2BtIx6XSp3adtA%2BVrnzVMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLkrwycbGAdCNBpbSrcA%2FpS4exfSsXDRjwcvFl89ae1jm40BO2Dq66pP1MWwSrGNrWIjGIANqAhWXEpY0sKb4Fu9QyBa3Pf8BxA54IkUXFA584H3vzC8f47YiBPhIWNIEKLPz4bHhqlSX3L9ptvgxEVPZwZ7mIVzW2IHbr3Gvk530zZqLtgXST0GF5U5%2FUqcbhXwoIlLwowRWrFh%2FUtH59QRPOg5BqAL%2B9k7A1jN46nHkPr4fsewJizjrXJfWAHHeM3XAS60sL03yO6hmj%2FhVRTnD6%2BRAKb6%2Fq9XeqNE3GDghWT1HM%2FC0hoh5FZp2r4Xmq8HNtrxBzdptf1%2BjB8GrxzCAHBrky2UfFW85djPzjpkLTXMhWSIBrpCLjFdLlizeAl8p8A9VLPMYKzYyrlkU5BScxg24MfRqwiOHezeI9%2BIUgXaRmnpuaXeWiZzbdXXvn1wSWp1WTj8GzkwaiLKCGHDo4AHYsZvkVhYrWT%2BKNR2j9DuwE6%2FH1v4ZA50tQhlamTvKl5ezGpEaErcWQT%2F3G61OcAYgjVPhipRXwBU3HtaFG4eZDMIzxuFfM9oAlsTSoRovIvoqQDunjRy8%2FSyS951uKFJPX52a3IaHB%2FI%2BLgqCbIpWYVy2WNjdZVrwobNGhOJL%2BJiln92G2UMOTL%2BLwGOqUBSSuh02Pmt4bWdumpiOphgiVJTyLk150nNag6sHIO3760sfb4n358waFsisf6wwtVNpuASpze5p2mvdH7VOV90cHOZa8l8lm7eykLt3nabuD4n%2Fq7yYym2dtcPFq5TCyec34VHhwBjFq381tWUf8ehhWXrOLt5paudmqVa%2Fu8QojQGTRLRYmeH5CKLBQt9P1ZS9mQTiXTTKaFTSIrJzxYOFCUiHh1&X-Amz-Signature=fb07fe5ba74b68b8febc5c990723eeb26bf83e1eda5cc747fdb77275a3a76967&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJFP6ME5%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FpaVQeKWLKUZvogLKMchCwfSjl89N6FsdiG4%2FZEJECAiEAmy5FNOfZ70Xwid8GEK5w5FnRfUtirG3gDe%2FRlAODxAIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyLb6zKVGGMggX0nCrcAwqISyYG1q1eYJSHmaRXJL0pOgaVxeHq9rlODzFF7W8BrtIHN4RxYPWZK66L0zN2LbymXxM4zQVVyeaxRUZIyI0zjmg%2BjlewV7sJEu1j7rS0225yKhr30Jnhgkfza65yqF5dFFwKryjVNUbW%2BGhlTi3ngcRqbhDap0vwKZdVwE1hUy9PdLPPvPlr%2FFCjH22frtz1qWAS7Yam8lR8xp6UnTiEEfagCQPb7ZpxZbybgN%2B7E7gjQv3w2sCwH7mUfqFtTHwefYRIjx%2BCNykJWJ1C1nGV9qGeLXRZ7grGeYwhQ5LLbL3kj9Eyw8pUCCNekGc7xtLukguHbHTDzYIuI%2FPgP23D%2FZZxGIanM6KVl4Luk87hn8qz45HvpJ9Ndp6UItkETlwW7w2%2B3s%2Bt%2FJlM2yQc%2B0nkXtrLBk2TnJhgAHcWba4zdOrAMZos4ibv2utmIKknaHSsidiIWy0mlO7J2Bp7kydCYdleE8MMb32M9HUnIzislknKlCAZ2tttzcAXInMWFjOHcIXYkOKEqYJW%2BHlMivdqmOp3xFvd%2FI2lNJfXkxx1hUMdcZnejvdrfJpcRv1q2IF91Jo%2BXSFZO68eJ3xbjkdAaNa8V0hgD6WBFq7%2FQQcWHZc4ECuukDYksWVrMNXL%2BLwGOqUBy1SxX99zUBFQU5kB%2B9CP8oRAtpFbEhcjKYpzr08JUShFp%2BnlWyCxhHmiBaW%2BP0K7%2BZPh5MCVNPt9gJ4yItQvoJQJh6Phpb6N%2F3mmTBTuWDqHiY3lv8a3viQZHB68Oi%2BaefSmft7GKUzuZP2CcWP8ocO%2F%2Bm%2FBwozQy5vc6G1ro4mGSUgix1vJGWgJ3P2o0Es2O5PhjjnAs%2FT%2FZo9oXrtDxh3HaZJ7&X-Amz-Signature=23997247afd59029c3e6a56160b22664b08892a367e9df1ac8b3332d5db03f60&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
