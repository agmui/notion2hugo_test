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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW377Q6R%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJeaF%2F58J5Qm%2FwrbKnqAVGpu0NJLf%2BLHuM8exgd1AaMAiAtpBxrwCMxJKSkqexVKE57BfKrTEs%2F3EzQfL1LRe6%2BRir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMJJbTTf2ntikyMv62KtwDydkXTlYpRG33hdx8fQhp9DYG3dNoxvIgNB4PC765y2b95DzYFw0mrfJqtPUTz6VsIhpfExPm99KG%2FbAIQWajkhTEg2YG%2FE3d5MRFp11lnwrcyegg0X%2FoQG8DBJ0zY7e2lRWrLUyPMIJLJ%2BUXsQmTqm1VxqkEWDtqVeF3zih7j%2BdPmm9jzqMXGJ4%2FfIFcWkbhGtT9Ls%2B6aSnkVP%2FTnrJcWLa34DGwf2nlcsCArdnfD8LwhIJ8ZFgnoKHw%2BwYOyREq7bFc4EUJ2b7q9mecgvn%2FALdNl0hMuX70tTFvUXj5ubmF68EkhnnpHqq5RD14sycc3Hnm%2BQa5D9J5Z2y5JqmkA%2BmU6umPE%2F%2FDhjpj4FDbeMxHAAbvqJYLC3CZg8nlG6JT2NeXH%2FffAB2x1cL863KrnbGKMKoh0eG%2Bl3HjX%2B6%2BnGO8we%2B7hK6pr%2B9UEtvENjnBIrQA3OaTgYhzjdFGFdV2uCwxXSt6qs9CnEXi86lAdxDBY3MBQIFaCfxGNW%2BVzwq1KFB1t7SQBfYS34X8Y4SOaD%2BURPeG87LddNnuKHICGAyuxi7s1%2Bb1woqWdZWtNlMTV6TxMNiD%2FEJI%2B2gDi1zhctpCnmvgw8Li0jUF73uy%2F626oQkozm9%2Bik%2FLl%2BwwhpzyvQY6pgFmuT5a10dZ%2Fp%2F4xVl6f5wh%2BwWc1sL5HGSECvMUSGhf4kv9BMv1ilvHXkfnhlaBPVODr1DyirCmEx6mSHvOPs0fyGHnpGrzCyerYlvIU0ameFnEW99AaVboJLjFrZ87Tpq09Q7LLJ4Tt1TnimYzcPPQnewNHv2X3ImXf%2BxejFYgS%2BRjCJZEgM83kx%2Bk4rsr4D%2BGEw913LhysHkpOSfIV%2BBp%2FYpX8T0H&X-Amz-Signature=6eaab98247ad4de805634d0e4be7989fa2d6c62eccab07a68641099e29a76dde&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOKPVTOY%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZS7tPMKBthV%2BdKT9EivbtYWFb%2BwvdGfVkNws3GdPBngIhAIp1IURZQ0gij2GbBKNi93vXDVeeculVW1E7p1FICPF7Kv8DCDAQABoMNjM3NDIzMTgzODA1IgzwHmRuQX7b2zTE0UMq3AOfHYK34AKlNzmYlYBP1qi1y%2FEN5J%2Fp%2BJphT18Lcz7ps0a7NbV%2BZ47i2wUsjCmG1dFFI8mjFwRorp4eigpDrZsJoh45PB8UGDhAdJhl7Q7bWGX7JruWHaplEdzrGwjrD1qeKbRjpplG5%2FKSqBmFN%2FmCOD6bW8ogrIF7cFTI5OyiqQ2bapmP6%2F9WI00fz%2FALcRA2XgCORb6CN27AY%2BxQoH5raFt7cmIhHtkuIsZvBSf1cDoZ%2F28j3tVCrWnypgdfe%2FxjFY5hSEhBWB%2BBYWm48Z4UkxCCYAuXfrotYo82l3rvcGmDWKQC%2BkbCbFY2iz9xlhi4sTAqxL5O3idqfd92C4kwFgqw%2B1YGzfrhO1aOlMwoSRCICEYBh9xQZgSpauJO0dhfbEVSOUZb8B88ClA7c9fh3O8Bs4DAGe%2F9RbrPkDeq9nmRmbe4lInxe8OGHAETwit%2B7DSiQf261JVUXYRkMt20MZye6UTwchsldtMu3iAiY2glH%2BTK%2BUovWnaWic5oWWh4HSa1G3rzEEzc4QZZuoEJOPklOhZBe%2FfgastsGp5vm8k%2FfmfHAWTGstmQ7ZZ7WByZEoHSz%2BcAtZcEir6YbFw9ploUBAh%2B3vw%2BJbjbFcGCq8u050C5z2qMsIn%2FoTC3nfK9BjqkAfXVathgOtlxu%2BrYfeKs9%2FbI4q44EfJGfFRsWd1gDBhTDYznALeHbx5LyGV6YaZTP0TaE427udUHot0nr7bxZPDsFybxA9T4uZn%2BhiO0gfXaU3oyehbX%2B%2FWnD4jrysYBge1YD0huMeWIAd8NboW68aBPzx1P8OFfaG5PdVsxOkjM8iGyJIBi2JTcD9Y5%2BWaXhbTjtiEtGthV%2BywBu30RJGi0lq5m&X-Amz-Signature=ae23ad7736522213f813433cdc4dc4e0a0da539f2355d3db5b42c28c0b565948&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
