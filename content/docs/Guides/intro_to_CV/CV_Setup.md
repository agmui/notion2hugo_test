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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WFGWQHK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDFJt%2Fqrh4aV%2BDXKHSF9vjvCuVgAMGkIjhtogVFv3%2FtFAIgPRCEWJmb4xnzTPwqzLC1pC4CS8sM7WfXu85QLPhMXhUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPBU0BGleTMHUIkxircAwGxox9cvQ9lwh2vK%2FupaWk7J8eHyPFTExtqC9rb2mR%2Fe0CQZ3gOxuFXDPNROhY4b7YrzpIRc6JPzfvabDGvlO6xMug3h0LLa3QArBcz1R1UADbjYzvxGu2%2FnBDlX%2Ff%2FT3O%2FoCkkiBbtro8AccJTbWLYNnomv%2BvLOjf7U7efcmIVEOJwg%2FkEAyvW8mGfdhafK2qWk0J%2Bd3rLasqDW1NN70wFTCGFRgmXJJijbw4TDrRNB8Ao%2FZR%2BgZPKh%2FYUe%2F4qUI5%2F4APvInx8ajO%2F5d3Up0e3o36Y6ZrKoVUAUPWEckHW%2Bd9UtT0YnlBJ51JIN2QxybEwIAiilC0HmQAWTLpQXY2Ck1jE2GONEYa085CrQ07hDDquX6OJC9rSTID0XTV4lmSDEOfgfFB30AB0pMUwHgj%2FPaapPkBQjjboccArvDUKhYGg893VpMZREFnrfY2IS6DQ0Xro7g6bZMqYtjB7wXwhQUyhszHkeeao2o870%2FKRfjjQCuBqkSK%2BkyL4wuXE8erfTLqNLOl%2FVwMS%2BmyP8xxx1cpQzKLK0%2FlWzkektx7n20JibJqKyCBKlmVDdqwcFEqxpgrSat%2Bv%2Froq2kcvJ%2BzyQ72aH1yE%2BLIkHakJTh%2BxTL6%2BzYm6axuwc2HiMJ6foMQGOqUBWAF4tIPQdVrCoBpdAaWnrjXOKOaIIs5QsJMajPM0Dx01ECt%2F4ThTt7A3rgjNa%2F37grJWUQ3rBnnZPzNJUqQxn6jc4GxoxOlOM1Wo7hY3cd5X8pG7SCQ3ykxd%2BavTbwmNhRVeUcuYfMZAuZ5Kgib17ed8B%2Bd0wXu3b%2FvWU3608e07YqVNJTjfN3u%2F6bYETxrjQJq08zQtNAdgs4fCGn3%2BEJlh%2FA%2FY&X-Amz-Signature=3739b859f5d9603a98b4c5a91fa54a1a3c135c963eda46c6c66862d358e76826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP57TJ5P%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIF3ma%2BnnxxlAixMkJFWd2CWdlR3fxDo6eO%2FPMXzFeaWbAiAB13yRQWr%2BcY8sEuKLtevlzb0p0ZYAprX5g%2FhSwFDOISqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdzl5u3tnh2yckP8IKtwDegx4txmh1hBb5Uqiw0wsoFjVuDrxVcCnDWxjK2o40OtdcDObHbuyPUOs7i6Ii667KYfQM0PuGYNU4TNggXZGvZIWbMk9VPasM2TQP07OJgMvgI5MP3ohYxdbGOjZsExiuleuuY85hFUCcLCH%2FjjKRF58dEUqJkN9uffksCdDNj1r09xPdrt%2BdXoMbJuiqYNhfIFfqYFFLkKIS%2F6bHcbBhL2O3kryFByyyFj8byK8lM4y8IdgEcuZpvnsOCIfVj3EiVM%2F9mId6INQfk2YYav4Z01BZRh6zKmeRiS0WzH6bk1gfuKoBlmmPJUxftJO6B9C1bP2NWJktAttw5QuiYwHpKN%2BNDky8yoC%2BxWz7RlXHTIHbScQPRWydFtiNonhLTrLlhfezqLvYgBwpYJu4ritC%2Fi6j9X2z6BrLPdM81w09XaWZSTIoN6z6G1Tj%2FfaLAga2gbH%2BpAoA1EpA7J2mEekP1AQyK1qSbB1I7EEPtBm7IrPP5LyO41iUKOMN6CMBim1CyNDOA70GVXPov0NMmzZUzhukX65Af6%2FLoQsHv9AgMjlPbKei41EVxVzyasZzBTKEUMYYN%2FrDNV6o3I8cB4j1YYJPgjlcRz6jgS%2Fe2cqCX%2BkhaMf4gGX4hLDMsgwvp6gxAY6pgFSno9m06IwrMyt7HcToPbl%2B8rf28dX8Y%2FOskBwH4oq8AzYiOYH9uJlBTnN483lRLYPUg1qRxh3RFnXs4QtOzrxJG5bxHviBz8g5GRgAjyBtS4AQ5aWHHTENq4GbPzWtDp1UGf1%2BZmP035LWmUbWRIJWSNtI9Du79S35LpygeXHIRa3NKoYyn4PjHsnFwMO3gLFEZG%2BuRc3StwGHupVeAHVU8ZQUKjt&X-Amz-Signature=27db8932c0fb79a179d5471d520512305ff5d9517f0702dee43a3968f36a2fcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
