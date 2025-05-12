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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNQXC2NU%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIDZ3zTV2EADFXlzCqaTBNZF7JB3p5Rgm9D%2BlT8hg8V6AAiBCl6zS45lSm11PL6n7co3iyIF50hbkU3H606e0asVLIyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAKbn3y49f46ADr%2FjKtwD0s8rtinpUafVpNVfup6O8CocaiAHSwj5O95Ii4QQjCdIUpCX%2F0C8xjaEjoVy6RYxC9DKuLMFOevPpVQsZrlZZNfONuZlL1mPNo1WI82U0ijXt%2BOEaO6ixG5REsY3j0JY0sgrOOwGf0h%2BvTCdiSpjvDtRw2W%2BdGTSBQfv5vAlrY1pQmRqPsVQD8a%2FAuDrApOACwL7OEVDwjwulVdlnQ1rbCt3rxBX5iVCipUJ15%2FPhIseJP5Trpkr2WKvb4srCXeCsG4cTUJg8%2FiuZ2gO5d3BUnL1oE1Eb%2BRV8ga2j8baZ%2BYI8xqj%2FBssRY48PlQN%2FnxOvY5037sU5loeQ%2Fiphb1Ew2s2UwvvpouFva5oUXDTHvLz6b90IUGdr4k2mTARsKJ8r1fuKrPWJnKMAQmkK8KQ76g7Xf1t6sMUvHQFy%2BfpXXNPTQQpEoOhFr6r%2BbdeOuHyFkVfCoBGNBlkx6gpxO95BubT0OkIag%2FzcYaUSbG4NvYmg2lcjFEQ8bNMDOx8VFGr5CVQhyImec%2BpQxhY77Q7EKTo%2Fwm%2Bv5aVWdT1zm4wbNoA%2BgcFPFH1DyrMEHtdv6d4jg9y8fx8XEgGMiBeUalp42y1pV%2FWLDHwspOrgpqeYMA3aNfdvMXn9KUKk5Aw%2BLeHwQY6pgGdrkLwJlQbOmqKjP1L%2FQ5VguFURzxuRyyMgj13VVEHLx2l78F3I4KLFwz%2FkCM0pl%2BGrhnkRXS5c%2FsbClvEv1yF4ZCAKAa%2FvnuwknhhgCGZ4NAQ%2FqRhCvO943pXPRrBeDLqXjo4cXkZx4Y8GZKzWdzTiIY0%2FJnmGgAN%2F8PSyquM72yhtAatr9iFby8o9lOI5s%2FQ0nEkcfq2Mk6ekymj5yc%2FvR8pwVej&X-Amz-Signature=a6f7e77a2024b9e46e379ca6c6125bab1e9c4e72dba9b3e69c78b8ca97a67352&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE72LOUW%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDNWuQHdE911ofjEKJCgYTPRt%2BMH4%2BtMDnCfE9jvpqjYAIgN0IQTCLzzVwNf3d1J187%2BNMOosg6CnTlh7SBRYzG3esqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADQOCN8EQQ5gir7qyrcA70M9noESWPq0GQo4FMhVQNb5xih6CVHVQWy7zo2kKLwlN7YrYHaCMEw%2FdX%2BU%2Bw7Q7HY2%2FeTQMR0GTx9%2FUo0lsI%2BZSbyiw%2BIA6niDf7FVSX5LXxlpjfQ%2FbJkBRCh3dfKEMtRW6w1jZ6Wc8pxx4NOGyiWThCxDJ8pyOZxVI58NnSKaom%2BojhryIfQK%2F6YSzS%2Bv5u3nuA7%2BWV8sQTntb7qY6em0vfSCklUkIiqtJUG1jxxUsEfuUaCtMvJXhcHFGWaexdY2rAF3KFjU3Hq4EJQkAretf8rWAFjK9TQ2aPowbeUvqiLlTcFlVTTJe4e8Hqb2lbwbEMzlCyFJu3tonIePO3K3LRO9UN4k3uPyiGeJlLVLPnHQU8HQlQFqUr0dg5wqAIx%2FnMS78fBzzb7GpVe7kT5X5XIL%2FG1nC2SdDs0kp%2FBz3YahEkhOBQpPQtwaUVqdvCrMY%2F8GL4vCmC9wbdoyb13y4GSe9A%2FO%2B8FKaAzUIEJ0Zkh3gzaqkZoGH3ew%2FS0o9djVpKZatuuiPNmw9EEu7jxCJdlb%2F7e5W58V7qn%2ByZ2ehnRjcAjEzCl%2BYAD%2FO2L11R3qeT12cIc1BX4yzbBS8yXSFPURph97ADhWwuKIgGX%2Bvbx0MkDeMsVrwG4MLzOh8EGOqUBMnKeLWR6MQ%2FAbQdYfYtaTf%2F5RuvAvXFe16%2F6xLMU4lpeq3wRdsoLpp1zSJbIF7rX9MXZg4FKce2SY%2Br6JnefTTblaugJZiOvApmi9NQqCoLVzqcW4%2FdqTwIAi2OghUlSaIJEhlaD1uW6AKjk1odFjjZ56QE8hgifN7DySn2mGCiqZOgd%2BCCmFnQIBzT3a2UxAl6SVzCiNxNZwNwUGGJwMb5bHSer&X-Amz-Signature=bcc3571cd6e96e1b87d09c9f606c2ddc34134d336db73e3eb00b73af68638777&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
