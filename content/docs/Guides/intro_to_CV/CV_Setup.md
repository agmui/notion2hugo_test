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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIUGQ4HI%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdSEqoEf7FA2Ki01exYrxivGe%2FoLTUntwBIBfgYJ7PwAiEAjR2Di9k7%2FsbrKogFUDStGlwsZthUJ6lIjUAtqwddbBMqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLr0l82Mv2rzBKeX6CrcA9UxVtg%2FRhE2XpJ2QRqPopdXxhqgM2sqS3QQ7J6nHuzic7V8eZbJX%2BL0kA8S4koaUIenR8mnrB%2B1DkSvnlzcrl5XDJmsKSrabEnsgFdRmZzQdCht1t6pRhn7otGUUGk%2BFHUXEhDY1fcQTQaq2GJKGbfd9QiiSYoL0GtOkKXAdTT9%2BcDutKuhmT6uvEM4TMA08VmL%2By1CGIMBXbnSPDVKIuithiKGu8lR%2BzYi0IgVdzbJqA%2BNKnPdjtUx2ukeBNh75CTP5TasvtT8YVy7CLUinDc2BIRuECoOTMSAiuyGEBWgQPA1Aml%2BflS2CXW%2F9YMYJysBDFTaD8cfpjXK98iVpTye7w90CnxNOqt4LTTBDMOjSYbEywuJsM9ohAQxcMCqGrS1nPSKaR0WpK4HT3OPsRyAh%2Bg%2B8ecSeLDH1NIq%2F7zQVJ5Xb7CmpSxkdTAEKVcT%2BMoZ1Tdr62ilanJFAvBXdMUl95JrT2L5PfNne%2FLOew6gV7VnsKa7EmHH8L1DZKlAkClRE8LrpQhuSObA0RBfyFTMz%2BikvBIqINsNaCIFuldOyqTgT4QDXIhPqqXyLejWYHzbktSw2PeT%2BZ5mgkBculePVFRZxvV5j9LnGC2JQD3B2ZZm3C%2FeS64YW%2BvdMJzfvb8GOqUBTod4FpASSeSf9EdXChTkoXMrqDJalmitEG6kiYVicqZ5FL4tyFRYPiBom8aWkhkNhd2UWJqA8XYc9f0zJY9NhIotsxHfUCc3uRGFr033Z6f48RazDMLBXeqqgPPAr6OfG%2B8OEqoPdbWSjBoFcX8kjsD15FMMs9lWc5jqVPkUctuNODfuQPwp8QiIbGFqowV5a8J2ufMhQy%2BOmtSeKqOL1l8RMLB%2F&X-Amz-Signature=e58982e5cfde279d9e58b5aca76ada0a2da6f2734b483d34990148d0c8a3e26d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4TRVPF%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD80yztGAC0KAYcItKCNNt1bFfRST8LSBL7KAIW7vZsHAIgPTaDZhFQ65GSkDS86Q6wxuoYQ%2Fa5kEK7BBne83uVHKwqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0XcM7LJZhF8QW6%2FCrcA3K6WxEdkthuznfFNbEAqup2GYynJp7Aem53MK8K4T%2BsM9wR5Oiq4o2UcWXiN5NJ%2FA0ecF4%2BzufWYvB7vh7j9iUosuHQmEWSYDb7rzbisA7OeYlhonh1oJsRuXEZS9rUY3XBvTb%2B60Hhn%2F2cxwymCVLktq6GmE6tJMDmwFLAvoakH5Yp64pqDSszPhppJjjCsM5srIq4PSM81pW9rz7a1X2QaaeNH0aqkmHNwwQo%2BgFlSR1VwN9s%2BLRymIVAYLvd77jJ2QAKP9emPHU2FbGqC9keECXFbHy34kL4bsSDLTpMQkc2II1IpCCgjxO6kGIvwrL90CBHLCCvsThX46W7v8UIN4c2Aajsqa1ROmgfDzGHNlBqnteKV7IAwvsPeWSfVTQxTe5SDgR8K5zzDI4Kq9qbnMtgjXxdBKYfGCDoCEHPh4kNvM6QvvxY1WcTV4w%2BbhULBTeh6ZMbMi2fnvIgf1TX8FuEz2vLayDbCxPDLDgBjbE24zxQn3%2BVdVrIWvpUDJ6Yc8ZRhafR2p%2BTJWP83DL1udbvjlq8eH%2B%2Fo4GU91YKA3c0btrMDt1A9xY5kG8lNRsXwNc0sb1dHo1DoPqEFlQyIxLP%2BHZKSyWZVLFS%2BWDFOWM7H8Xe16XEaMvcMMXevb8GOqUB7gMLUN2RgY0lYbwUpqLSsJHwt9kLN6OzC2m0cOJYBozNeiGVt9km85LRHznSWI5k0maffuZD0qArndmy5TVHAReYI3IhzQa4jeUhrNKaC8K8pe%2FlnkCH6wC7ve%2FagTZij9edoswrs%2Fu0DCEXentMgkezOFTj9yFWABH6Qj2X43aTVmaHBxOdRAViJigO2KgwRXy59wJtlCEfFANegt90MKwz1coG&X-Amz-Signature=1708e5568f32d0d4e628537f34da944b15a39f39ee33579a918f2c713c79abe9&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
