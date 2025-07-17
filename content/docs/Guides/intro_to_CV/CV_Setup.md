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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBFWZPVY%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T140850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCNXpfMt%2FdAANQENmlonBjzAfgMep520XtcxbwDzVBMAwIgFZzM2QIv5ayVC6rK5x7k%2BZr6c0rGJ3a9WE9%2FZOEpICIq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDBJccfKoOcMwG7mBlyrcA1AaGD%2FWZo9Rgxg2QvX2%2BoeAVzjS%2B5yGVkT8YoAKtehkMPS1KLyrScL68CnEnCPZO%2BTwy97l5GAkRZYrkU%2BNYz%2BrFllXwwEBtvFir1cAr7hiliERpGyE4%2FthEDzHn2Q0pNuoAisYK8kKtb1k79B%2FTO3eJEq266hrQS0n1gSuBSrQTzMyo9eUkx9KtncVX5SyfluF9jmXGpWPQv1tvB7L9F9GJw1dOj06LcVOi0tdtycOPAP6w8mhgkDQ7puf4S6AhG%2B3MDhNh%2Fh0qtKGRt0Smo25NHjVO9vTdryWQ0sGZMq%2BMqzpFGi11dBTncmWBzDChXpka7DoTJc6t1sZIuuwBnuMJj8wY8NJPEZ8AGp9gyR9tVzZvy5%2BSEsfFyiYuNLEmC9ZkhdFhNL7v8qcYMfOD1hvPBprbzYIffYuGKrC7XPwtphHbCbFTBmc%2FUSLihSh3Mughy%2Boo7oSixEAQk3njZElOXGkDjiWPeV0iN5T4BdyN350lFW1yC68n4zvvgsxZRdOQ%2BlwTk%2BcQRP9CnEPVBBV6xMsxVeRUkUIfq8uoVEKppNCBllESt99hPxc%2FarcasjmTLeNrvGumRgAdjc2jS7a9mML4baEimpKZACU%2BQ2umPsTkbThnJ2qZIlJMKLi48MGOqUBpilYX3yDMCLymRFwHnAZuQnnB7bhkfIMJS2N1ut5mQfDY7Mtj52eWMrY1TTarFS1ZAXJpz%2F7Poy7r1%2BwTb4wYZW8L4It0yAg5Ae06vzlEYomtlvvCGEY5dKkp0nJER8vqLxl4r0ZawQoKZCPgz7I40EcjD6dhmcLB97bSQdm3KAjnJmkGIWpI%2FQFb70Leks6KiyEzUkdegYtQpDzQa4eLFCgPNFG&X-Amz-Signature=94152299f9bfcedcda918e1d4454e5836c368ae84a6d023b2809598209184cd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGJEGYHS%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T140850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIHqtYH5LYQWx0MwMQ8EbUrmYK03t61sj0P0Dlqw%2FxY%2BeAiEAwYxN7JVvWvGtApgXmlwztyEy%2FdTX7tcwfejL8LNhmJkq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJF7mEskTESVrMIz5ircA9bbiqtRJuw%2BM941ONd0Z178q4j%2F1WSyUxLxcPkLAj0b6vYkbQPzfi6eniISpZDgPdlcuGPZ7DTRHrJ0KtyCJtX8vaidX1rSCEE0xCZQAVvJW51p9LVEnMVtnoKpktCOKHGwwbwD2%2BMGNrmqDrr3JPnEloVQ91THDUvebDCIU4ARwrvfogaoXIf1syQQLptcDBRDYBsNsgrQbX4Ikc%2BmDEfDpdCRSowNjT%2FaEiYiMEHB3fol4SHWNv8ya%2BjF4rObhp37FjV2e2fuUXIDbtVcp168DUiw8KKSoBto5uVWu13k%2FNHPhaKt0F02cdgEG26sFT8puUESIv9FU%2F96mltuT3Fkung%2BjVNWqRYsMfo%2BFlMLVx%2BRRofl0wfyRLMkhgMPK9ayxFQQbJE3QPkY49kUjWKD4synqkTz9RG4aJ6WXBSFcn2GmfM2YYWAJA60kvXCE0hHIk16PJc71eFalAZLzsnuzmhnZkWmm7z10OOu5CZUf%2FwoLDus1YGmatT%2Fu2jreQ%2FJqolaCXWstYMGOQTRR%2BrQDyNIVfVthcFGsTedYjnOeorm5KZDBYi0VH%2BJgr43nk1FNJ5y5CpdQ%2Bu2qGODmTuk5KMbtX%2FpboZWylIwA6MEZ72VfI5e10lslnU0MJTi48MGOqUBUcrcbnr13e77BEhF4ndYV4gUz5qvuPAKCJ09NsdL1LBsFWxBibp458I%2FM13Gj8KUpOGaU%2FtW1g4%2F37ko1AsJe3uhNevXBJHuEjDek2FWP71emphQHLgDTYLWIOr1jZBLS1aPefXWzvEz3XBYwuOqV5GFwmGyBfCLax1bTveL2FytA6EMo2yYnNKiFuPGjudArBG4jJ4Pr6FrUzotFdSBVJbVbwNG&X-Amz-Signature=4bd0c9c4dfec0cc1947435bf008f63938aa808dee40a77aa21c7e2e60feca180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
