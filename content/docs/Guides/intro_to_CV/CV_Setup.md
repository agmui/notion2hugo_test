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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN5NRZRS%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIHY0l1Uv8uzG4x3a5sPYEodRv%2BVXbg6ZfnXUnDs%2BVAaMAiBc700QQcCySXaN8QQzYxG5IV4e40tI8xtuCSlXfdHYTSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Gv7nZRpgayv%2BEtaKtwDseNHk5YZK0m%2FgjhGc8nNFBYYOvsFUbE4hYd0Z2u9fY3ES9Cwmrteg5i9b9DIf9ChmvhtftKasRx7UOAIyJ55ZD2UQZKtgRAvfzWLRLienxa6bkXkTMCogrfMtVx5G3IOU2kTl%2BMWudQct8iSb%2By0pbFcojS3c%2B19OM7NBxgGqGEnXAo%2FwWPctB6zxrsDRQi2hNJKlHtScguDFcz7tDhpiRqg6TAz9VuXXrz6WPOBx%2FpyDkfVl0YTdCqcbSlp1dH5cP7V7vPM%2Bt5Q3ytKFgu5cWefwBfH0gb%2FJzDBav7ywfVezNaPlqztROkwUEqInWcb4VVqiSWqZtFWztWlWYybI6duel%2FzobpORpbXM7FLePmFmCo%2FOABxz8wWBFRZ5AIMKjaTJB0qTpvYChjC4k87mTp2PfeMpnus%2FVM0gcyM22f9nryMQB58hN0uKVMvl0joAzROQ9LK364O1ncNvVwWMQn9AN337v3BwSGOr8ZrDfy0wNgGVDyk%2FiUslfOHCmAUJDTebONmXQuPspMCmzRkD5tcGuq4LZQEnVFdafMJhIh%2B50DxNyoDLQRowLPuKG5Hxen98AwaO4Pfk29sinAHIGpgUckv8osY%2BnY0StujsDTTT6dmFj1ONjur%2F1owrfKLwQY6pgHiVpvWD8%2BvctBYQltxJu9UCCBBTLemW71dI1aajYnCx5sj5Veu6u300uuimAQMUGp8ukp5lsNZk1DKG44EeBFKhliK2ccAI3gXd5YVrHFSsqHGsQGRZ%2FHN8iO4vWaj%2BefQP6RS1sGDrtEppBV0S1roZXUP4CipRerS7SRM9ef4JTnLOiuwmbVSBSAQplW4tLLckHlmhASKnpgmXHKknpfCQfF6HEc3&X-Amz-Signature=6d40064a764efae2811de8a982d6cd6e0a6c803ed1b381712618e6fb3d11e3c9&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL4CZFK2%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIEs4rn99Ew3HtdyjN9zVL6Qq7%2Fa3Y0ynyQtqI46TPATJAiAZ9tWJi1YNR%2BY%2FBXHGi9ZDg8gXBG0%2B1rwrQ2%2FYLYGogyqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkV2rEeuN2Gnu6FIQKtwDou1vbJoS2yL32K8uq3Hyx4iCUe1YpOO1UCr5q5kxa1tY%2Fxy63%2Bnumg%2F3P%2BsVV3sqO7chi2rPJQfu6DZ%2BLqOMFk0jQuNrad90BRReN%2BbFgK%2FmoWMIKwA9HJi4Lp34MdvuycrC2qnkizeT9fJZfG7es%2Bc4phlIEoXCR1KJkFmAodXk%2F2Q%2F5lYbkwYjI37vdAP2cjXhZ7jw0NmlilyvKBpldd%2FYtAdqoYE84Pd98%2FzKEMDUpog5HBK8ICWYAH0w1Npg5Rz7qEnEARBU5xsMcjBESZO3mfRwlbgFlT2IOUbOA5Y70i642eLpPeV0nhVxrLMxdR9Kl%2B%2Fs7nirKh4TkV16FyZZjbnnPkmC2B8VBu7rxwEsGy3yXR7zm%2Bd4EuRup%2BukyfvVuqvlNvPwqQDH5L7FnMJHZP1Jna3246I%2BVXJp1%2FQEA6t97MmZI7epKPV8q0Xxc8m9YSV2pydWiEJlO1QM0lHORFqIrZpQEmriRsP4NXyT%2F0g4MbaowNpy9I28nExFKwbav74NplLkohjBFzHK513YkPmQ5IuYUayXSKbzPJeTOOWSSrhGIq%2F5N4ZCuo7ZByX8Lj8ICNatTdDO721OQZcOhTNcif9xoJU1O7SGFXCGNMJ%2F93T07hFbq%2BkwrPKLwQY6pgEEOf2ky15ikTghttuCEIGoUy%2FBADEtpx6Ufdr%2BB9erUzjsVyBnsRuRRvUb4AmKgg0Wb5uzmm4J9VMcsY8ROHFCIdsnP14H06z3zUc1%2FNUNBt7NU1R3%2FeueD9IqQPwr86KQZ2jOpJ%2FCvEMVJtacl8eVwcS41kcqvQSo1fNTf4BeFJsyVfojihDn%2BvQxgj937fat0FPc9hCq9%2FhR1QrWgFUvWvIRFlM%2F&X-Amz-Signature=cc5793d8cdb8b299bea9292782898e8383b517fb55d7801afc94a2439d0e877b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
