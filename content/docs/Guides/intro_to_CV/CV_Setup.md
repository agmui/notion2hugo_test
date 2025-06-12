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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LVQA2Q5%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T034002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQD5%2Fx5TaiNKVeSDXVBDfAuTNaKcf4AhGEV3tERdxp0qjQIhAMH3Us6MkzD%2BkkoyDZEqPucbV9wvUZpXeHuV1Rmhnj73KogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmCl9XNYkJO63iQQcq3APR%2FA8fKTp1mzITxjCtXGsni35lu5%2B%2FRMYLR2ArCFliLMBR7sotvcMSR2ir25GMqHVdN0ipnG6FJEkputJyOMR6V8kShHyb%2F1qfdD7iPaNDF0rsU6uBqwYuP7Rhlrj0VCrPPffqTPUFmAlOaFJ%2BICSmg2JRowR67wucIRfxhaXrnjhcpKCQEabvFSEeEtRNK37wCfySFDlyjBvXxrKLz7vaaKDqotGrq8iG3WXo%2BGBrfymxuw2cwJESbcFV%2FCvdojUPOgvIqREzH%2FsC2%2FfH6aU%2FQUMi%2BHXjnGPxHXUiQorRNeB9BIgtSZkkj%2F2xIVCK8V9XlYw5ff3o3QOeuqyFV9HHr2SpH9SQHB%2FsMC4d77G4sDltZP1qs7n1FSNUKbxaylqFIEE%2BOJ%2BJ0EqrABVyXmo%2FIH2W8%2FTtI8ENPFseuF7JT5r%2FemEZnXFxRgtJhLquHZbpRKuqoQtTRKfbtKVHuifJs%2BwJOL3tOATYDQhhQ%2FqhVbttemoQy8RxpQagnrTY%2FhJh9NWEdE9fnn683oTM449gsX2MddQH%2F9eb5wYQaY6nhXb%2Bgs66peyIlTntllyTnYiE%2B0PWVP0wXXnp4lG%2BA60Baop2WIDEKTqT4aVjb6XlXuooYcZZfgEFGx%2BFGzDdk6nCBjqkAS%2FEnXRkE5b7lt25h1vCJQLTMnvNUivSRu53p8kBag7zL9pZG6LG45vDzO06kJT3tIpOK8chCklSW8hmrdzGIBVjt%2BzT4p06DbwBnxcQxmZmulfHn8Xv7h3bDlQbsAN3uHskrRk8FRWmYMbXAD%2FgPJnTXdyOguq4fGnzBo80ybAOG1UnRBd%2B6ccOuxwbz%2FrDaawpC3F8xoxiizyibncfSGGnJOF9&X-Amz-Signature=cbf5a9892e27b840a4f12c92b896cecbb97ff9303b585c30fe89bd001ac7d7f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYF77KRN%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T034001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIASzL%2FaelN4OAvZ6kr2X5PQ1ul%2BB2JWuPIs6ImjhGwANAiEAvsVOnhPU0qbTWuaOF5E5LF8USdT8lNzz%2BRaNj7cIPa0qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2FayoAbbE8SnQSbHSrcA%2Bikg4cjdU8CnnCEyjBIRYwldRFUm%2BjtVAAbdfSgRryAPCltl5JAaWesTwZrHV7yV4B1cHGipD6nnRM43xPleRVTxeFU9HhkN%2FllVtnJyLe%2BsHH1YG4rFF4vVhBlM1POCV%2Fdo6qh1sPSNfTeg9Fs2ewx8Takg6v%2BnTJTTFc2EsUkyI%2BogabC30i92wv6cKGtQT2T06eEACd7TQ%2BpKO4UXF7hBM803LUeFc6G5b7kmcO0kKrjIkKs3CTd47%2BGZyGAnijnCgr38obMKRN15zIg1pTj1YFuzN%2BjlP72RA%2BOy9x%2F6CJi9GqppXyAa6nrq0UA0kHJDNFjbirYXQNldnfQ1nvaNFnOw%2FZNlFxrfbwGIjClEKobMCPx0GJRaM0yRnextkZIQs2jNGMHLga4OmFHn5Xz4O%2FPEz7AAJ9Z3aghrtrUaOm86PKvz1c7dQ6VS4atYpRizMOIj0SHzYrcwBPjyNQaN1hx0aaPhUH5sFSzFK%2FcAM75%2F9Ih%2FDmhyPHwu%2F%2Br3mRWdJ%2BOdnR4RblKJUla6a8VVm7wYd8kKEZ0K6idv5mIHe%2BWdIw8I49WaTGmTwVsq8lpVxja4SRnuAqOIbLZMeVF2lwgAL%2Fn3nCq2TvxBwIkwPtStpsRHCTJHX6DMI2UqcIGOqUBP3iBWmaWEDpXjfB%2FPzq53wMQv7cqNYKU8Q3Qs%2BHalVCKewYCMUt9BpKn%2F%2FcDNODovCbFioKLEZGXuIPF9jSkEXza23oDoYqTQEtMYjjcgUYJRc3nsUGmg7LvhKXjvjSlrkm2CEWxRU1wULQzjBAaxAH5vbF7I0z7H0A%2Fur44GAnt0hjWZPNZCbv2SZema9zzQe5DjGg5BVX4Q824ANO96TfVyvgx&X-Amz-Signature=0289d753e9fdf647b3f2b813080074cbcb07aa658c5081ad9430dc474c5ec4e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
