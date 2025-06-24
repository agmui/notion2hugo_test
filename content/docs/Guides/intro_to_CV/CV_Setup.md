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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTU32X5G%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T140953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQC9oTRWvk%2FqCZsPIGPuzZ5yldfBlAzoOnRmgvl5%2FOxIKQIgZJe4sfMWMhZEviNkddocSNwAiBzDSAjjH4hva4%2B2RuQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDM%2FHoTeF68QJ%2BzgJuircAw1vxDuAAIF07nYAg2JL4R7jo8Dze1JDNQnStOWX6IFe6DxpEqI444wlmjFoQ7nN2lQZ7lUphIH4lgV0LjeM7KLAeY4u6gSej%2FSDW%2BPNhwwAP4tZKLYn4%2Bz77XMrDCJbSQKqsAPS9rqi3VpyPeNq%2F6DuhZpqXWLyHO0j%2BCZImyDzylpvZ2PQlGp1T5ZQN5hxnXaN7SkPOlKiOjPJbyUfbeSqbkOjHBHgIWPmFT%2B4RI4SeFkkTufoPZfwD9Hb8Nro45aen%2B7ykprxMe3u6%2BOd6A56z%2BXCgWICG0MY2mmxRvibMWYlbK0%2BjqPBofr5MAOBgkEqn%2BF8qrU7htZvwZshSXd%2B8k%2BFUhxTTab3W%2BCeRvn9zrvRZ0YKR6d%2BBliiFncOw%2BoByDrEXYFhBGNgCxpByUuHKk%2B6uF1tebDdBgVwr5EpZf4Qomlcq793S6AqqOV7Zqms%2B1tKIHGweskxoa3%2FC2%2FZWVlP9oNdoh0cEc4GvFwtfMNj9fO1SXbMe30NMc%2BTif2nFi8SOVrbmgFExw4Kij8wwqd%2BXtZ5B5MhOqtFqzREG8s%2B%2FkalwYnUm8uK%2B%2FUaS7tGPngGjS4NozdRdhVsTzoe13C19fLhJCifvyR2%2BJuAyYqJJn%2BFNTsyz9edMPrc6sIGOqUBgUBrlrtS1UixLfLDcRi2DJbhoDNaiwclpENu%2Fxt%2B4WQG%2FemeI003Yhk%2BKhhvq1Bgs2lf6U4FIEsl5oIbm%2Fp14mrkXXVX51TK6ggv1EnLdQa38AfC%2B86SrWqqZLTRTMCz4L2kLtDhxAfTXikEX%2FzNdO7brEP26AFU2ticXW4SdVCoYOFQ%2BqMV1wJsYA4FSKLxDDyJ%2FYYq1g1ac7gN3wF9%2FC%2BirDaO&X-Amz-Signature=0890f71e710cd47635bf23426869b407cde0eb48e7475a684d4584e56cee6891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6J3VYBX%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T140952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCHvPGUG8WUBQ3tn%2BQjb0mWRWPhXKlq8ewbvtcIBGaCOQIhAJLrHCjj2JnKtHFTCAInRe33UrYLplCzUYyq%2FcZOsaPNKv8DCC8QABoMNjM3NDIzMTgzODA1Igyd6NgvP4AJdJiLiK4q3APMfVfmt9LPsFiEOaVs588iCVFuwa4HbmUFyusPKNULs7PVfP7dnBSZG8ntV4vhY%2Bp6ZZCA8qA6ThJBUxoTXSJnPTCDOn9CBSts0klwnyZdJBo2CoLLgZLgtcIzoxbi8aUskps4V2ZJYcNgUB6YoxvUwOmK0uWwc%2F8oEZ%2BbMYGn9cffFJAbX7JUXmxUPYaF3bE1mKQctqujSFj%2BijLCz%2BSRj%2BxO%2F%2FP6AbDXU04YdKEHEqTThbYXaeCLiknXmjqg8rMHVjgZWLrOeYfHaWENsxGW7Up98qebg4tLiMdlmlwhkk0m5OjpaaQQl0cmZVb0DuUzmBERTTagaMer2sGxpWapL7lHdbqC2GOvDJUIIS5ttCyot3zuSyUAPgFHYnU0xLgLOr%2Fs%2BZz2bYam7Igj3TDkS%2FPXA3SpcyxPXNLqXAhJ%2FkXJsXQMIr%2BKf%2FNTlmgXe2PVX185ciGdojf1DOZIqKtBh2BGnHZdA5L4VxMu7rzV09%2BKWSmEhD%2FSBztB4Y9%2F7FkVehUKj%2F2lUMgeoxPwBf3z%2BiJzlRVg8HJF5mecZNA5ReJ%2Bdva7F5wAt0QmzkpEpv%2B5AIYlrJJHuSFx80JInmupeGQPqKgC7GCbzfALZZvz%2F55f1W7Wk8NUCCCMZTCU3erCBjqkAS9ZvWhtQ7W1os4KcfBb0BKi3bMQORsPKYJdUeab5JLGg7ojPyLAwjcOzXa354h0SkCRpioDS0JxbUWiwnqv%2FdLang5Jx972fcrHodeOiC7wxqbAm6rY03iLmGejnDIof9cwOTEgxBSQqr1jlU5bEFewdIiQ3KMOnUHOQBoR4vmYU7VpLxJTQXj%2FxQ2yaDc7edj8GSyfJObf4e%2BYHoLZXq9NF2B5&X-Amz-Signature=c6810c01d24b0d0f0198b1c21666774e145defe11ecfbb5e2093fac3edaa4748&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
