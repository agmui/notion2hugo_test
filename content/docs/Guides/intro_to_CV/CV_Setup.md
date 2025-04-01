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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCWWTPLN%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIGEvD5HQkEzwrmoWbXmsfc9Ke8YKmHJ1RNE4pxX2y91aAiEAqYsiqOdWoi4gae4yFMjz2sQ5tvrf5m7cAFNoI7BHAcsqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd58lw30VfZryhNhircA9tKP1r68e5BwwsdPIhFfd61PCIIRCoFKnuCJh%2FXqKYeEX2Z%2B%2BtqkbaHmgXNObJO8BCEzC6v0AZp4%2F3R%2B1kLzahKgoaLGkgiDi2eP2%2BfgV%2BNEDCeBgWqNXstgMlwhb%2FIPTQkPZei9%2Bly2jYp454YTBdHgDsydbsKThByU3RsSNwgzNit242oFCS3Je3uExGfqX0vzMulVCPILSMjv%2FM4kNNqqZtPK1vdsCcShj%2BYlM%2FvoZb4rccWq%2Fb5wEUFI2k1BokeU1tuXcB9byPIEiOrZycj5tQUAqG3vMZw5%2B%2Frt1L%2BkR8IyZWlY1jxSNiGDBuczWgkK08QpXLyKZXd%2B0xozSw%2BJIR1u%2Bw57afMkGw7gJ14MTxCrTgvQ2Hj9%2F7nhUIib8hSSlqUbD1YIwl4fmxAhBub5Fz%2FSYi0nlFQEcLxUDp5zlbhzYj5%2Fj5BqLlpHK2NFihW%2BwnIxhs8%2BRXSX23pDbW5eDQz2b%2FqTG9g%2BbAmhuE7mpb8S8VzbYCRm7VnIZPfKnN3qXnhdCHwJOT4MAMTACoLD%2BGRRH5y18Prhi0u7t1OZ8%2BXfohZLjxlmq0I1OqUCBZgZCAxy3TP7g9%2BoCxINeZIraqMM49CEqwTDTXpX7PQG%2BXvVEv9t%2FcvuM4NMK%2Fmrr8GOqUB2MhdZ6iTdd5mQmyKSij63Cmb%2Ftd9i1VBXE%2Bd%2BnyCLTgCBvjUFlkL4jPL48%2FuyDWQ2KinRgnDpUsdWLcYcwqwBkkv0g0zMvj468I290cFIQYdBKvakJJA12WLNtRKQTrDXZ%2BP1PFpNlzt7LEStsfrgUNlT1oH%2FgDazn4NdnbSwLju7vBMvA9xrK5pNSPjqW4J46KdzR%2BukFYEbriFEq4EjO6TB82l&X-Amz-Signature=fdbecb0ba2130532bc91d5895a5ea0baee85f756e246a134fa0e72b38babec89&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675YRXBRL%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCHV8T2klG66WZVzTfF4%2B4VUx0RSH8aWJrkrbx%2F2maIAQIgVBD9yDICPETrg8z0DU7SaQva0BkTGPFHv%2BPqINufQ3IqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwmbiW2YSUytZeEBCrcA775P5VMpjumlBo28NJ%2F9WK7NgSJDJHxoDIHvz8Ub1e2yMUcM5fWao4ih3e3asoJ4%2FFI1DBnWed2McbOEcepWzu3g7Q430mii02etjpppPoakFiTIqPe782lpVj9XOd6AGU7gJKlt5aSEcQznZzPqv5buRvlHgNGmWC%2BLl3bsH7VaL1fnUK%2F2%2BlZ1thWw%2BJGsLe8k0%2BocEdOTnIoAFZq2qgTsEQLW3RyOMhEpoRv51MnxzIL0kVbf7y7%2FatTNBZX3AnNgLA%2F9YwMUlqhaLKx1VaX015ln7Vjnm%2BmnNqsxs5wR46WOtn1EtDA70rc04IYKTgSc5AlBbmqTI2mvYUTXn5tNQRUcfa8UBvoumHU6BUFAFFvKF4LJAMJf5tb%2FKNe2HaWGhJ9HcZPba0P6at9aMnQecUb3zROokb2DoSgtm4%2FuvzXlu409xwkxlxzL3Or1FK3XzxMqoKOjxozZm0rAQ6yrfIjTDcudmqNen027lFCCIzi%2FL8lFWiz%2FCq19Q43MaSjwqC18R66FJlw87hBEjI3yIHDhZRiOc%2F7XXWnLtDVgBBZauPMgd7hwRDUi%2B5cwACh6OjMmVWq%2F5kyy0m1MEPuZl%2FGMx1%2Bdif%2FJ2z1CJpFL8RYcrDgfRsO9U1NMK3lrr8GOqUBLuaUC8T4kk%2Bi8Wpi9%2FlFRRlvNphglXmW%2FuE7oHppgEGoOY1hJMMMPk8woUzVn5vZ2Y%2B3ysfqa5E%2FcP1mBp17QUajHHC8p6NX83afcStS%2BaH7%2Bii24NtIS60oN%2BZl73iu4FXaam2e917fNYAQDnjtgz7b2pqu2LMO2QQURK1HNik2LdhtW3B5dcE0dK5op2%2F73X1VFvjxoWLO4VpMDQ8VMKWrILCh&X-Amz-Signature=64085a93d16dc5c338cb1d80c1b43b6cf5acba370011825d8f4f9fd4f657b2ff&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
