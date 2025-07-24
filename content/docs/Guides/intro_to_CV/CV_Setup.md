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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKPQV3QQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIC%2B1FzOBPqPCQai32GY%2BNWkOvVdE0ZB57MCEGofLSZqsAiAIwRZmid3Ihi9d32ryJu00Buvrc4LqZWn94VpdCCBYOyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMoc%2Fh6BfAXIT9UQkhKtwDNRztWxekJHBNZ9Hm4JAeASg8o50xjHN6fw9mRkz81BRQ9V0zZggtDrIRs4gax7lUkt1s5kpXeGqayZHdinenZZzdnDtfUKjnHqc%2BchSqG%2F8CeyN2oB4P99k7lXnv2q9n3jdaiInzYgiqTPPk20RPjA5YGJSrVcuwaFpPKvWHzDEtSYxo%2FrP326phwtm1cGwjodNY1LTOmlYh3SbQwpmK13A9gnb4abeyahQm83VMOFbqbD3ENIK0HC6ZRhUHnxtaZm7Lwo4e8m3L2iiQEmZ22K%2FVbV6fhVizO4RHsUiULMcXygRs%2FPve32Acl9W1eAOdVWTgInAzV%2Fa0AU1SaCc600x5DVVwwzIzyk%2BRd7UkoEuq%2BwYBmeYtn7pOWGQJnthuvSGh8G2%2BJjnu52tfwiFeGEIDmoM8oNL48BZDPvg4vlOOHS1SSpN1UUNLpdbsKgk8y7hlDSqYvkaScNsjVW68945MUadWQAUagcSUpGafn2TS%2BqgS1K7hO5N2SG0uu0nPqs0PU7w89BoUKGHIxvfevHMK0cx9iQKlUq1R8Moaj0dCQY4Ha1IxN06wxWBYP7%2FEalsm2Iuzy5PzEmybqKsCz0h2SbZcCwrbKdesewzgfwaRzY3MaiI9j97yjZgw5deKxAY6pgFOXjv9w79tDkaONwm679xoEg7TggjwyDTkMdo2SGwJxAUrBJxSm%2FL8shdw2pnEqjzGkiOwS39WKNcTmpgX%2FwcYFVTOnA80YmsmtZJX3D%2BV5HemcRGBjop3wqSp7O5ubl1mobKYII7IntbCyZ%2BWy4F08rRJgHzsHy%2FDgoi7y7ybR690jrFFtRPddlUXF%2Fc8Bn%2BQdpr%2B5T1ALU2zvxvAfDJy0pgyxTOG&X-Amz-Signature=088febb1c58e6e9fa0a719f74d555969ccedf0396c07ce060d5f1a2824fd745d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622SFDB5B%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCICbvi6mvV6yrTX1QMGsdoR%2Faj6h1tb1k8aEGFacwQUgTAiEAzNJunH7QvHnze%2BiH%2BizY0wWxFYbyz08s0Oz3kUGHVQsq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAmS8KmE%2F2EQvbkT2CrcA8a2c6%2FHtvrhXEydUI3WFtktB6vxjYosdBvWdk73%2F8wq37IG9FlWzIbrPVixpzSzmXwdhfeYTqBV1RXSzccl%2F84VUDaSShJChIvZBXHf5%2BDNT%2FgnETnvg8bJj%2B4whYKKBvmxZVsJcH0vORDl%2Bz%2BankY6dr9gyhbk3n44Q8VxJTsViMndx%2Flgi%2BgHi5D5t9b734dAJS1i4bQP3uBf5SwDwwtX1ZFBi2paV%2BxUMXZHBVHEYpJL6npmFgOpWT3VuDnxy3s0E20m%2F1Y3mTsPmvbhKc9FTSthYS7QaETdAnL0AJcdasQocM4LvitKuGiSMMBo8KpVY12%2Bihhy4YPmQz%2BSiJuEzgFfgOlJofBpbDON0JKI36rLiORCBHZW4T9H9oycYA61v%2F8mAGFE%2BIXJKjSeHojcRYr9s2BuMPIismzvFZgGJNWA1FM9bPBgZneWlYXl3%2BECWmiac4DlTifVspIo2B%2BYWHh00y4edAnVQ%2FN3kAfN5Ubsf51cFqh1KzPP%2Fx7Z5vDub7LpSUKbAF0glB%2FWBCQ%2BttMNUc8q6r9IfyrZj6H42jUXHFLsiDQtwcfhFz6Vp9%2Br5cDrWMZhUfMyUtxx77cN2OIRg7spjZnYXTTA7w7X75%2FOc3LmZ4c9CgTnMInYisQGOqUBhA0cg9%2FapWNpaph8ZmrgJyGzy7nN3zgKlNIUtP2Uae%2Fg9k0sQDY7WTsbm3Sh7ZzvgDVBzlc8blDjXD7UAFhziuKRt4pq8lss%2BTo3syUyaGemYpaOGqfsp0Q5oyLYvOPoLHvSWzOBnC4UvE9qoNn1tL2cpEhBKME1tvC50JOHm4LnMnFQ%2FdQU2o1lXAuTy4qEqGAES%2FjFWhRvonx94z1lyQDO76NY&X-Amz-Signature=186415c1f06828a389765d31f3e38bc6db48eacbf0562c4532f11f95d2ffac29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
