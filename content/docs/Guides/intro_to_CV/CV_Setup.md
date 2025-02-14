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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6TMHGAO%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIGEmnnr62M5BF4QdFYcxnDAuIVs3emRqBCbZl3i%2FQz7hAiAVop30IsXUyrnJsTkiUWvyUYZkwYuaS0AV5%2Bqu69LQLyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMMNza%2BJblFvzqNoizKtwDnmV1gruU%2B0Ex9SKi5lfnIW1QAAVc3xHGtgqHpzEL5NmcKXXxYbU%2BBCQXldpxglkC%2BfpbEynnenOaQ8pW%2FYfB0208caNptOGJWAd%2FFQSZI3LA1ePBBS0VyayNglpqNw9vTEEPSPvE038kX78cDp3%2BoaZBYNccUFvdSbKeoUzXUt7bbGjrNbBvioLD97cKTP6i2nCmr4%2Bs%2FQDGDv60966ffHq1SUxuVSglWGRM0ALmGUyahNMCvnterAYl%2B03vnoMpXpBMu7snwmuB%2F1zwg5u20n1jOnIZiLhmw5Y6kVkMSEBWTNNxFdohLU6nJqaahL5MC%2FkEdB%2BjdkHMgeSrIUYhtLJbMGlg%2BiZSO75h9bXWJxLSocHKEbcng%2BxP2anOCfEqsB98R%2F1Rwj7QsFZWXOfJGU65w%2FEXv9YVAAWrZuhqGcco92HvxqxlG5cGfpZC7GLsdEvfsMp9BK%2B9b%2FEjWYny8qHD9dvyxGUGoYqr7E0lLI38zXpA4FJbi0FH8eqAZQxzg1y5RO7lQPAZbZmOM5tEzq6WWtdae8eknHoN3HVO5%2BIaO9oIqR3aR702HvSYoIouAosHl7rIW8b3%2FwJcnBgtCCcsTQYgVouiaWJpHI784qy1gIp78wV2McwgWcUw8eq8vQY6pgEvEI%2FP1aBXWNyfTM6CIhIHyAKn%2BhOqcjGg6ByyyTtZ9UjyDt67lSC2WJ2FxEypKhRBM2NnaWNj3oPaU0laYQ5kWTNYyBC8dDQEerPs1o8BTHeiUVImRcG2D%2FmYB00tlo4COeHcttqPatsE8GcVbzlPYjiZe6zVPo0Z4ubsGWPlQdSnaMnord00R6r0jr5nfhCBzwPhdVTrwHaqVbA6knUYSPlbns6L&X-Amz-Signature=1649ed69359a8522037b9259944cb2f90a3fdfc864befb1d556eb51e6b7f42e2&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHFJQE6D%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCICrCTLfL%2BC0fOlm%2F%2BYkm9q4OagNoNKK02N59eiLHtN4oAiAUBgLGJP0EFOLMlb9KwVv%2FqaR5NZNN15Qu80DkG84giyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMZXPKU5E7ToCtMz6NKtwDZMsGWmAyNF2daPZIN9sjlQA1eZ%2FzWR%2FFdjzc%2BNBAO3G5CYmKxfwTUVoekPTCNh8NhuiNsMwx9Xy5NeZaX5vPFQYbHkW6EdjADCevVROJeGOjrv8uFkA2oDwsuMVnBO43q3T%2B%2BX4DNv9HKuvluuS77qH3hjavPznXzunh3vbVTLrZK%2FWRBH5cOkAz%2B7PYsACAVJw4JMP2FsauylyfQ4nGoQ1qKonHGt8oFSTI7AtUy%2B3UrkJhNS3WFq3dF3CEZWi3pJpZMraUn7Tt9NLyyOZyhT31dyZ7Yyr1WI%2BJzgZll6c43zeFn1u3dTM1RfACEW2G1mExU83w7Vy9R0zn0VsFRUylJR1z13%2BqvWDQ0IQ8C3rjsJbFUfUBCV9dYW%2FY08KFIk8q7%2Biermt8ILdCWbMLFAMRLq3RH2V0uMEvix2DE9m9kOCI1s3Iqrl5uU%2F5SJIVqwmmmqGYZL07n5GJaPtGTjo2hQPW2m26cFam9PRNMcuvyHrGVSEkrZMQcaE3NKJLOuC7WXkqKCf08UWyU1hTAxiSZbv3SJsApTHabKLQeFzLYmd9fRp9GHHdt%2F0RznKN82hco%2BV0rvNzu9gzzXqvbknizdBJJ%2FxKAZQ1fuva9sEO14Lpyrt31Cegjusw7Oq8vQY6pgG2UnaZ%2BxI1hoCT0EdoHbGxBy3sLOkr9%2FewhgQ5Mi3Lx2PLp4FlHod8%2F6YuDRV3vi1W%2BuevSfi9NmedbjYoj9vP%2B0Jate1S2YkU58m39aIAfEuiXN%2B0tYw0TXdxtV4TOnb5K5RY1RRlEWjPw8y9My2Ybj0qyalzy88BJqdQ%2FodFXNwf6tYVs1%2Bhd6LSbWzMECze5fdGU8ylyf2Z2RnHua5byiIzpm0a&X-Amz-Signature=16b415927974902b026fa16f7d6449db226a40d4aacf74bedfda3b823eaaa6c5&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
