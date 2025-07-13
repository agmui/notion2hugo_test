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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNGGCBBW%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T071035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3OGk0pDm08v7jYZxSZ%2FIqtQHVi%2FDhSieLzWN8awNSBAiEAieh%2Ft6518RCaLu%2BzhgOuR%2BArypWm2exGxVmr1cdWTkgq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDLO98%2FYjBSHUF4iJGircAzMlGdJvJ%2FcinpL56SxuXtOGHIHnjUkudA%2BSPBDXH%2FCS2lBnXwJpEez74bCMtoMNDjVKSQFM133JT7T0c9A3DEWhpcgrhR6V9w9tQnpFEZKK%2FCJMss98FGoGPAED%2BBttjjTHED80Srsh2sQbr3zwF5xjL6yxLV3aiHLuFaxa34qVu3SngQY3wgX%2FiN7aDbdeV5LfIlCdbghgkv6P3SmSK6ZpvC1Ql5Npausstj55UA%2FklG1qGSvX4%2FxTRZVtkITYAvPfKP2w2Qdu9YSywHpj68jqDaXiK5HyFxlB2c168%2FK9isAkqDBWpyKjFQYEh0fkA1auEcZ%2FU7xrJSWoduJT%2BFKfCb7Qk9bxn25yFrlUH9CWxEQ%2BNsgbofZvx8LEl%2FHEZl%2BXtBcLz%2Bxb46kzDxGbb7QkcL27LBagnaQanv9hii6fx0gj3vgZxnHRyQelrbwssmySSnRQjTrZMsDRu%2Ff7I9VbuLmKOi0DL5NGy8u%2Bq0DNMGBKgUpXkrju3IqZLEM%2BC7wC1ZxH2vKpq8Dl6yR00QiHacDQZyj%2B%2BTFj6TIH3vQLBRgo7GZohYN6cbJhbmXG7D79YZ3HUFHYKdfzm8bonuPOrxv9qsgIhXB%2BLoBJJcv8u3HMTpLlKyhqEo8WMOukzcMGOqUBIEMLN2Vu%2Ba7cZNsUFor%2FeEhebsR7N5cH6oF5c0M1%2BnYfuBQZGzK6fjFZyeO%2F01tS2bJBQsAaBXiaY6S0k940aeJOQpmzkDx7HzSq6fKwrcuj3qLj3lIparjSOyuju1wxqk3m%2F1mCxqPxkf1O4OH6xgdhkkYZgxtXDgLDXoKJGGnT6op0NtSyiGy%2BXPHMP%2FBB1UjzzoS7pKTh3AuuvokVZ6gNieuu&X-Amz-Signature=2fcf95863b942b02ba303ab926b90b7e8ec454e23b15cfa2272fbee390763552&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO7TZXA4%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyfTYO1PC096EFOhcid421EAbVJ7ocExpT4AIDDww8OAiEAk2ONLHPW0rB1eBjQLHidXYR%2BLxhjmbVjN5R5PApN9wMq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDI8a3MzWanx89ZPS5yrcA%2Fo0r7wQDju3fk3GYzAvZTTXJ2u9%2BewntNXe5C90LV%2F5Ia3JrqEuv0zfnF9G56rZPAvEl4ibjZYjbMeVqQT8WRrE8hBNGGdjCgjVeWE39W7Bf3OGEhaeBNwucKptqcRYzPKWZeB4FgYD8mmMdWP2FeQqjfXxeTljnzYHKmuNHENRtS0mBPvhVO7%2BD%2Br55%2F8KFG%2FFi5poVlViYvUrIizzvvUpAZFMxwqsVXxNqHAy7TsteEPrDVlyaOpyEraKTkC95NDtDF4e0ioa1R69Dd11MZAX1Y3vN6ZwUYWvj7wOeY87IWRI8MjWnthAnVepAS67BAk%2BGEVzV1KBS5AbUO7TT6q%2BGgVRlGfs505pEyoopBpcbHT6BmSuNU6r%2BcuM%2B9FcZ6jDr%2FII3JJy1b4j3wLHFFmFHDjuz%2FAeE4MA7%2FEkd1zp8zaMSr0aA0t%2B3%2BpFvGfaXLFOIuhsbzEV5cbUdaPMML6uTvVBNs1wnd%2B%2Br17NJSYtK7m3v96%2BSYufuDehi70Up%2Fx8usoln7RiH0W2NYNO2MlWczla3geEebiSU14NILSGi2MiJDeiC%2F%2BlaZpmyatqLxHMRdXSUgC1Euh1vwokvlx71hl3inUHFVCVYybImHstldQ2AMJPLRMYjUdNMM%2BkzcMGOqUBA4IgNhepdgygPUKVuvl%2F%2Bfcy6m8PTllAk5HJImlJ3mPD3i%2B7kppTGycOv6aqaHKN11qT5y%2FUiG%2BDGbSX8tuZutu56yVWYk2jdJ0Qmyg6hakEDO1gmmwHKHcDxItTCuTyOLDQAgRLrbw4qK5kaB%2FDZ42TqCRpiKb4zYO9mLemW4EC6gwgfmnv5xy6xMZc09FlyKMbfnseYSR9yJQessjoZKVBkmCm&X-Amz-Signature=66a24dbb4b435904e5653f16438553132b5d42c12b716309c016f653697e9d09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
