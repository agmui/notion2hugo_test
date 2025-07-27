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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRLXFVAF%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIF%2FA6%2FHnZmam0IXi2lY0BqtoRsmWhCL%2Fo%2F2EZGeNHTelAiEAwWwi8i1Tx0bJKwT22bWH9hNwCPlYdfu7QSiII%2FFifHsq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDP4HQXffbzLqOCxlCSrcA78QPbpemBr38VU2y%2FAplLs3VcgEigUyIjsb3MWlRLVaolg9kyyD3Cl%2BrrjqSBdVARSwOThwi83YfF1PJWkmb94cJxSaKbjCU%2FZEnrbTSt%2FYTuXjQQEKw8H%2BsEXkY0knOL%2BXgo5FNLUvuXNuu4r9yE47WyzKCewkb4jq%2BvSmxE8%2F9kidtJ4X1Ui99atVVtDA46s7XdgjpcwI70OyLJ1N%2FqRk5qMt7Jf9K634yf55%2FIzKycaKGNUvScUwX9nPo1tALnjcrdCzeFJGrJrI2kyUyj89NB%2BK%2FB5z9bqmmBM%2FPjj9Xk7EYyk43jawMV2qPGb%2BHL0HHHJXKp1fHqbbeh59Dpfp7t9%2FCqPoKkFuKftRYt9PWk5X51Vw8bP1MkGnp8rQDuOCQ0w3qDQ2F7wWU%2B4qCuIEz%2BorBTHIA%2B4wFsyzqVUP7DgF3pd%2BFRdNuyE0Iy5Kt3A1rnVQhhmjDl%2Fy7Cz9V9he6sBoZu52Bxykbed%2Bl0l9mkaopE95HMlkOvYctPf%2Fv1rdEiSTvqPtf8L2WgCQXRu9NtM%2BimPZ%2B%2FJUxm2xRVfpGPQ8JzOOKwAO54z6aFHJBhqmWCkN5SZWzLc%2F2JDG2%2BLRGN%2BzxxdRRT8obHqub9pLnFY3UDW5J%2B9SAakfMML7mMQGOqUBRtFEhvHasTQmSycehfuvArbmEcyMJaLYQg0hbYwS%2Bo%2BKfZfLunlRqWZPH7Ykzan4P9AhJwS6M4jSCKkrzhMj67Slxm%2FjSk2pZWfYFTUneBJ69VUQB0ZXU9R0ZCwU9d3kbEaQm4gc9WtoOpi%2Fct1Puq8nK2d1QVfAzpgwOa5oWA6mOLwueGb%2FES%2B0M8MyMLGhe4YtVzxim18rxVCI15dANxK1vyGd&X-Amz-Signature=decabe795695f49a778bedcbd9bd3712856e513d3a77ec564ee61ca8f53850d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UAG2ZXV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIFFnEotYQvcQzjeDaUURmJxWDVgkgUnJO2wfxhymeOgEAiEAop7qh%2FrpA2GWK3BRpdidSo0sXEtRw2g3bytn2Rov9Toq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEaWi%2BBavENIKOgfVircA06Sw7eaNRiJnbGxkMnhHFIciXdJ%2FcDrnc20klhs7NBflkrRw%2BJU1fxlgX8pQ1JvmHpyrvheYtPyvg8vADOdy%2FAchc%2FxcBYCG6MKBmMLg2sFN6rfYwa91gcJ9Dle0wcL7FNzlLN%2F2ebEQ2oDOAswQJB2EysN4fwcIISNKKwLxehmJkuylV5XN1LiC3YrtGZDLDioAS3ZCKTNLkdV%2F0AR%2FoFcQ%2BTpTOwFVWgmvRAN%2F%2FyMAW0Of9ZsSGbRwBOMBEL4pUwrgMOOwmBpcZGXVjD8ljJrT0MrnZt4H6EilyBnYdoAu91oHDxq%2BKmXiPaWiBJaih1HJ5%2B3hG%2FzjbicvvDUhK67zKPAJxcK9XcLMHZe%2FWRWMdWc4lbDc5mn9iQK3kKCaJUO7uQuRszKJCLPjDtr9Q46sdnsrrXmjappsW40pGBdw1JtcpDzmABJeSV3raNgd25Ed%2Fu1%2FASRr6ZKm2ryHQGFB3n045cFNDaHbDZ8gWjsr2Lf2ISB8NoYCyK1BitHbn5nMD%2Bzh5Y4nY8z5PrMrJkauz%2FBpZY8Njupy2AJxPtyIj6DfIslMsPtQqPlCnrCgsNeDS2VzG9Iw%2BVeeJCvL%2FvLR1odDPYjwHs89p8hzP%2BDm%2BApiWxndQ3NeeV8MI6CmcQGOqUB7kAFdHNaIw3kkqM0kujLOzaCx9zoLsq5yZy6eecvBK4r6KlHJEje6%2BVbf5C%2BERqhRsktI0TI9m%2BwwmCz43z5y%2B51pbqucTKm3fLp1pWi%2Bb%2F9986ChmO1PuvtY56uTL9xv9RsEj4wviaWCEbtizIaVGddjPUIGyMj2z5KsEFEYvilYlk7g2z4la7APiskkYeNXuugxg0EMz1COdQknKrl%2FVdrEW7e&X-Amz-Signature=50c7dddcad884b1de8256ad41767bee2b1558cebf4dd34ca83922112de34854f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
