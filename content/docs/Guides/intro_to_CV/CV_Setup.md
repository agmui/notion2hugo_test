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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH2TESI2%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIE%2FIO0cFzskoMur%2FGlapv32q4C9wv8hnRx7dbyqnhsuqAiEA5I3nhM9DxY96FWnzrhm4zJjNA%2FzsOV2tDBT3cCoiCZcqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJAUw1Bf6CdU%2FSAZ3ircA7e3fiu%2F2pSSnLrg5xfZ%2FXZNU0e2jSYj11FumLkI96sABiXYrr3BmVzVw6%2BsL1zZ9pU42v%2F6YmEqEf%2B8WxkZzvzjx9clVL3ansu%2B5npGOBHlOjGP2JP8HE41MKW8Pfg2niZvPf5GWDNrSnvnTaoNUnkzV4xp1L6hR%2FAMHrdc%2B4YiytPvnEEQAlanp4ddyg8%2BKpzEu4IkYSrVfzxAKpSaShdvfM1BbEFhUJdmFRNjhX7BVKRHzLAqhgEbdoWN4XTSOMlqyMZbELqP7ogHr76ckXZ7jk82h03fZ5lqEPYf7ecUb90sqhVNr%2B4s%2BVMojl9lvx%2F6KcdbL4GE4FVuHwHa8Q7zeHH4UmiJc8WHi1Kzy4FgJ5S3X7YF2k9bmqoJfcbDbAtR9FDjJV%2FWWsjlwmy1o4kXi3aRlAupeMuOh6LJBoiopVMA1JFEV86a443yOpoSeVqat%2F7wmQ4cyEzh9kRpRKbS2U06zQvLjiQ3eT697RP3nesKEOyRE8awkKTjjl4xtOq5rrGRtuiA6GziYXtJ56iOIuNnGkL5NWyxSsnba8Wly%2BoMFWeaFWT6w3l3ppeT3neVnGr8iXVKuDIaGQTYPP%2FkVNey6omhzFPwbEcSERZ6MJwTh2Orx8njJPLJMI3skMEGOqUBtvpy%2FxuJtOLeRZlxWKgndQUbP7Z5cx3gtWy8UjZpmpXsV3UktzbTau9udTaFmLFGxCO5%2FjzRdqBw57EgIBMBdp4upW2%2FhNv5pz%2BRpzG6UIlOBjp3SZAsQJSIBCTZNA8E6rtm5R3%2BJRm6WX1Zgn8SvSMVd9bYAZzyC2hiAifviU2%2FQt2kHMmf31Mz81XBGbx6wBgVOYzlXAA1xwA7mbFxIQNj1FAt&X-Amz-Signature=6fedc299ce2f795433d10468ba4c321eb3b7e9714e4f691d91a07196244ccfcc&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XKFWZMZ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCxdUt9hZ7a3LorLa4LqI4f0Qb4YJpnBgTIKjywZvc6JQIgIJ6fsBCstDIYl4KsYBymqG70V2AcjA0gfpnR6h4F6igqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWkizfR%2Fm15lNDyECrcA8oeZjPs3w249gAfsl1RAerHuIKVejW4e6gTco7z6i0EGcXffMw%2Bg9jy5bUfkz4LZj37Vft5JzcytkRTLtBCizetBrZCEMvfZFuIa1ChWDZvE0VP27Sjl4YU3ShGvGpHEYtb0d2BMdJksUaaWJnLi4cc1BztgDVDdDGj81DVzi5HehUNNptrvvZtH8%2BPAPE8OwiU7gGHNgS9Lw%2F7Sk17T6ocSdx2Rcvl%2F2bA3Rd0H3pSQF9YkBfAYuR47zP8AkDh%2BZg8LP39pi8M%2B2wgtS9v%2FNuDP061qkbznbK4cPjjhn%2BxwoPzO2qSXEU0adgHq5ifJKgyfJjZcISitdNf2PBnctepR92g44Q4Es0Vy8gM%2BfRlQ1udqMXNkKBm%2FJ30U0zgkAE5suc1%2FSZgkTEuWWSJKT4Ag%2F2v8EVUaOWB42lmRr7VT48BJRIJDctuSr4itvULfWEJuhEB1A9E5kHS0KPRtsThWk7dlRneTQA7KzaHLgBdmC%2B7xA%2BrPTsWidEI%2FDNcBZfOi8cMERqSCl8lkKtTPFbWCOuUEMwzPa%2F8geR1HCObOHBDtaZS6vRwfVEgIRjQ6ZVo6x84RffE2aYHaNG82qpT%2BqAkXvendiEBc4lbh8dcsdqMRflrc1ojobpiMP7rkMEGOqUBnLzv%2BjY2B6nXSRmFkXaC40QaSg9mfDPYv972dggCVQYKNt%2F1dd6LzB9149OvTu48x6frZA18QJ0KxrKu4ZDzdmEN2gFKHPpDu1L422IV%2ByUZ7LbEyWg2zBX2ldqEc3NKQDKnwFB%2Fz9Z95NHAJ9SpS327zwXXk5Nmw5EBx0m8ZE55v%2BEI6F%2Bifz%2BE1OzyjnCNTvSnZ5Y73aAIdR%2B4BBeg4OA66%2BfM&X-Amz-Signature=b78774ca3accd752755e0440787b3088ea441590d0a54e4e9ebbb99424a73687&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
