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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466546SZJGP%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T160840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDImLqGW5jKd7XRMMAl%2FqgHBQsw9zHTcy6PToPuS9xzgAIgdEXFcEZzRO%2BqlnvC%2FE%2B%2FH02YyBq7sXiUm5J8BAUKRt8qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNTrfpFEv9TO1IJGXCrcA32tSRY8LrmS2OqIF95aYtmevRF5bUumgY0U9lUnIihYBwQ%2FS2QiEVMiEA%2BZrc%2BnHv%2FpEPlkevsaQ04WkHXYKNR8Fqn69GM69mzOWtWHZdEvuWRKWrOlXcmgkpNfJPtNf5Iv%2BMMw9LslxNpXv801X%2B5mOs77RoAzVB1ro%2BZVPMeQBVXZOxsQDeYze6qtYIu%2FbusKesqcQj6pBXLuDFtOUSWoERDiWCJQJsrE2zPC4QnAHfCclTC62v1zRLUtYlMjlkOWNibvKmq%2B5ds29q%2Fvbsta8UqCUV0uQWjBeoTWFg7zKmgWyUU6YsTOZpIOSz5KAoD08iWUNPhUZghBcaIjQXM%2Fn5i1QfrmCNq8RO4tVHuB8MKECRBw4erTpdIKgZVJU2F6d%2FSAPHCrbV9JVNCaMNua9addzIMxLCsKcuwUE9icCHSketj2uReK6WwXs0GTnjOIu7pzy7bknFDLAhAqn36eT178%2BnqM6iB5cpUH05UHFY9FWmOsN0ZoB%2FamQum6G4qJq3KqvETll8ut840mhgV5MJ85BUfCpMhrKVmMd%2Fi4coLoZNHaBS47uwAFOpESlC26kuPtAVKn%2F4TUhCe7EV774OBHvv%2FE5HJVgNBB6rGsTpWbT5bd7DWd0g1sML6LvL4GOqUBKC08lQTqg1TFWB8sF14HQPHsgMcgtW5Q9gdgBWGcYufZH7PiMtYR55Y3lum%2B70Amp4Wv7tiCJVwSlOGo5gcCcYqhbIQr4rAh4vZPFt7NhUu1zfBlrpAlDx6CO9khBO5yKNWJXJgXpTI68trTbLnrb0imX7Mg%2FW5UQJEMvM3NfQ9Pkod3sV%2FBpeFaDcyu2JF7ZI6TBDdaTHNScT2ni3QwhaQjVn1K&X-Amz-Signature=721ead1874e3c6d759f39819ff46d5da153b5e961acc867ca049ea0fad709377&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMUTDOHC%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T160838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCuQ8z1tt4bSG6EIUroMOAnx7F9ErZU%2FF0ytLWg7pd56QIgfTs9wVf%2F9is%2FAAWSaZqNqJAyrV4BCN7TRJrXn%2FZBqocqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMNA61vy8hzAxyJKircA0VRiVC%2FEPGg2fM6aTFtY310fb317tfiypdt22FI6KIqBIQ6iUnnn0U9l8Kpzxg%2FAmzs6uAjvv4%2BvzpNMMtQK0gYiiFKlA5vlsrCDvMiAUFfDAyVj%2BX2CyL%2FHPWlnhece0tK34kfPtGja07Q07%2BEzQNlelpDfnOK5QsuPnnA4EZ1%2FfY6HtV2LCPIusdNUfLPd0KjboSyfqYVl8zgohkEAl51dxW1Q0E1Tf%2B3JYMLw%2FzRzkPmbZEjiHt77Z%2BYlr55sgUs6UQqTgmGkVuysBp0OiNBxp1AF%2BsHFPdDwo1DUA0GuFv4Q1MIxXI3wdqblqzM93gHVb88f5JSjAqgyzteYpT83k30WpTv1CPpTqwLH8MxwHUhUrG0mICXcxwrZQNgG99AODe4LAOFIyPnJoWlg5av25elRV%2BUIXlQ0yk5W0STqZGreK1TxWa4Oa%2FzkJWMSiBkmb9k39NzXRXWqJu%2Bzm6iqQfJU%2FQq3uiyTevAQDx2j00Y2Tb%2BqpvjYZzu1JznLKMj8uKL45ENBRrp%2BuH9hZyKX7VAkOreUTHk63ehWUiq3Fig6A40HA1tbJZmwxxMayoe%2BB2WeLGuIh6m%2BK67X1YLgDEZ6263zZG3Vuy14ufRJegTWpphE1oPQIo8MOiLvL4GOqUBxDrABv9ftx6JiaLWLbfQHq43woX%2BXYGVI24guUxDaFpzj4wjCOXs51DSdoDfBaXfANHMEgbkXRS9ULE54%2BFQo8C8Mu3USL%2F9RQG%2BKz3Dsz6OZaboQLY4E8cv4vXjcYmN05ZCzArJj406TdcvAX%2BVAjf37XPxoWfEI8gwbdeCfxcjru7tKYbDCfWr6t%2FMR4SLD4ysGe11J%2Bdua6UabJncfrHu7aV5&X-Amz-Signature=3a93e5f0508ac1917af7528b2705446b66cb9942bf0dde1e5c3e38d96a445769&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
