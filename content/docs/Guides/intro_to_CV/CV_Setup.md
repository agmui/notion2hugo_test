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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624PWXZXE%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T131018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDqEoPBxrDifmIrUZYvQeUqXb2eBzvdBp6UAUgIGh%2F0TwIhAOpXhYvdQgcouVnT62T308krZUWbEzQnCvv6ybmxd12yKv8DCEQQABoMNjM3NDIzMTgzODA1IgyGrAl5KS%2F7hyWQMncq3AMRJyythu53Y1Qb%2Bgg5zg2iHgfFZ0%2F12%2FvR8dDP3fW5%2B%2F%2FMSVQ7Oy47H4KmSXBxs3pWj2Vj9yzo%2BwWl7nkLgXR0QzjesynNLmlSlcHrC7D1sBlLOIHCwxO6nrh76m3fIw0dG2ApVWTFRU13RqXYbMcYyIirF1Yaa%2FHlvSX6PPtpp7fsCVKXUzQm5XXoNDA2EpQzZAY07D6yzs%2BFKWHfFWaDYPgWQycdz9hVlj2POEzO9k5YbG6u6mpWY%2BXAlmGwQch7N3ubanFff9A4GHHyHUHFYVgPf3LjmGmpWoW0FsXmjndsWv5i087vSmLdShOnXNEeRHaGFY%2BT3K7TQ%2B%2FskSQsbaqxU%2FiJCNTwRNmyyLvT9nsgZjWZQo%2BrxhVgkTzv6USzA47DcalEsafPrQMJCckLHAicsDJu5PNZWdE%2BUn%2BxcC5b%2FOiC%2BU0r4bHXtkmXtTvlxrZfnJfg5ra7vw1WxAKYa%2BrbmYz%2BWCns9%2BqeFgkqYyS3HwoO%2FCoNazDN%2FL7vyTz7TRCc56sRkcnORKp9xiFuNoB%2BDiKS6Blw5UZ%2Bkt2le4grsIAZBPMkdyMWLvq783UGhfO2ZyacMZOy3wesRozgImSZ05wWGA%2FZNo%2FxMVjDAs%2BZswCv72W1ZUWiGDCZ7cG9BjqkAWkh8ALQ1%2BPELGGPZ6sCqIW9IXpAIp%2F55HYaYvxyMVCAaVIWf1S%2FUAVRgZnkQolrdfstJRHT6ggrdbedrLm5ka6ov8qtGV8057fSTsSQsXo2BajKsZfbjEnXqy81cRWeNGRt1v%2B0aihfe3hG9OSuZ1Yi98k902cdtTJpdkPEMlBYCvYNWnIAB%2F3Tsiu6z2tNBNLCWfKGwl6o0jz%2BflS207Pq2A%2BZ&X-Amz-Signature=fd915abbca0123ce5953ee17eee0fc7c7474ba7c5c7ae97bbcd0ba2966f765b2&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BWWO325%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T131017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIEQfC6Xk%2BG%2FaZSb%2FpkKNM7CLwOfpUaWg6CfQ9ghssPdtAiB4C9y4FsSr7dq%2Bkz%2FwXzNfyF%2Fr9Jq4Gd7C9OfXZBbjqir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMJP3cGeB6YRlL7nYDKtwDEcZA%2BRQ3r6%2BGclqvdaVLLGFPZEbIfHh1CUEerytu0oPlDvx6ixUq1dxkqIsPz5LqUFHLR42%2Fx9rz%2Bsr2CEDea8y6Ar%2Fc8YSPiFVBZt7hIGELFBtLYQDp0XQsrgB0WOMpgrXBQ6obs3jRXb0HAWsuDeEmAHGWsQeERGsdGavEhfYdlfVp5WC1IV3N5LBWdYAQYesjYCuIuc6NEz1%2B0fx%2Fyx%2Be%2BtQnWa549Sn7E5%2BgU6tMRxgMFU5D4wdj7EjCDCPqWFBSyi671aoyrlrq9GP6043RZUHM5c%2FTF3NRNlyl%2BQn%2BbVGQHD1%2Fsqqsn6NQD1r1KLO18BsOoBSCNKUEZji8hDHSgGwwmogP7OsxGJN1nN7M6%2FW0PjHp1wfw5VKd9kI4ASpO6RAKg6PC4yxfSCDWqvskqdYaYYpnh%2FpsnmQx4KCKAYge%2FM4hslX9%2BJiYP7NdVsy5DURkNlq%2BEqLO6IHMjoM4LZ4XyR3nXVOcGJSpxRrSrTxM%2F8zbRjKmNodyApdcYSV5IDSxMW0naSsfsI6Yb9on5WsMURwa6Zs%2FdYGTUSWJ%2BhNHqqqN%2FRQ%2BCnxnNB5tyeuX04TwZldkr612MfIH3FTq7NS1lXqgaTTEILRUFxiIULURzJhoa7wdjQcw6%2BzBvQY6pgG29PYGlCBNOmp%2FmkWwRv2szbzUq2119bvvljrL%2FB7akvAw6YMMvLlWUaUTb0gWfMGbZF2ubeCFph4nIFLQbLlTvJnxz0dmiU6ChKVD80H5TjC7akOGwCdIwn9NpN7vOo55pbFCekHDIo307nGkILV0JDk9sYzM6d9FFBcnf%2FNraQ68dp3NXPNzDkThiqs%2FNV80oFsScBesQ%2BI%2FHBMEg9cowrpptVGN&X-Amz-Signature=b84f78858cc234498265b2b71e4b5911383a7470c3fd1ad2e5d00264db63d822&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
