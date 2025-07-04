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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DWD35LL%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T034144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDSVV61YibzilyuxYu17MOXhvqGNo%2FkMOMWXeUVRsEtfQIhAMT4kOZSUrXQi3ueZKUwkcT4mFUKgGBIT59GHOhCTXbCKv8DCCQQABoMNjM3NDIzMTgzODA1IgzlpMgrZNl2jJDGI6wq3AM49KME%2F%2BVqf34Np1kuM0%2Bhh1HuK887yBgg4g4L3P2SXc55by39QDL%2BLvh59gcjCMDOkEszbrCEypEUl%2Ff7rCOfmMk9NwgFQuTBdJUdEowch7Ctu59hx5%2FK9r8S9wqle5Mt0MSLeAES4d00tg4pc458S6C68GogllwLlNHvKtljZj6O0TDO1rQ87l1bs0ji9QViY6r%2F2nFUOvVxFj8CwlpN7BaUUhIjckPoaDSdIWJM3sEsSaRCvoVtxF1XZuYMFvO29cOPKn78KhOq76U9bIpiJfLiTsuqsORXN8%2FzcT3IrMLlk5Auc7F4okHgkqj3B2uD1rTl%2B4JRtrHg6bn2Az7swCB8n6oHHv2wu%2BQZrrCYsFHq8yh1BdSM4RcHz%2BWfMsi%2BXGvD5%2FJq94mDbFe25g%2F1%2Fs8MrIV4EijDwvGN0iP3QJf5mCBFmLcwi6PgbHhRr7lRBXKfM5j%2BRo4sqFUt497V%2B8Ie4SNltaKqrGnMgfK1yhqeP3Z%2FTo0FEXe1vOCcDzv4K7W9wlTSYP0%2FihRmdud7Idmbi5LfYszSMh7j%2FWh0X7%2Bh6rwua7b8g%2BKb%2FTugZmVSxQE%2BUDbXWCWj9sfPlrwMbqBTyzYATMDEPYDGd6j1mOeis8XepqldS37nDzDLjp3DBjqkARaVT5poieoyy%2B3dgkCjI9FfsbVClrQvEzy4SO%2Bzj9VVvZ9ibXXBlgJ4lvO1qzD40hot1fbOSUO%2BA%2F%2Fjd22sBcakiOE5znBLou%2B9eD9JvvKTQ1fTDk%2BQR1rXLkIipCCs6n4vrxiSgY2A%2FPTK2Zvv%2F4ugty0ZY3bMwI4L%2F2bB9bKE7eMK5EF0ECqGuh2v%2BkktueIRe3Qh4HQQnOLbPaLxd9Yb0n1g&X-Amz-Signature=515900f95d811128f150fa3ab1acdc70a74198428df2de7ea090cfdc8b215e42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW4VFM57%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T034143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCImA6IUasLLPU5%2FxGYLK8%2FTYDPHjpPWxN19JAL%2BLGrtAIgGDUYlT56Jm4DOdwHxCQ%2FBRpAIBfq1GWD04odwfkQuTsq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDOsFWee5eYGvr8VzOSrcA4Mnq4jZNMvvrHqL0tPOJcg1rZgbeSsWI2RHZCgvl%2FVQ2uEYajsEunX4gJwrYliNbapzYz5EVhHjPq1o6uNijgdL3oqDDjThj86u%2Bl%2FlpSSVvVWQJJv4AuQBzp4x5ORg0KOOzcy0m1NtRQGxjYPgZNvDVYqjlcGCRQ5ac6Dton5LCZslmwAz99LpWdOVbdG8uhtVblGEVxPdcTS4Kv0nshXQzNOGmEFJRyW6f%2BZOUu6q%2BxYELKBiJ9Usd%2BBN0bdDFDk0pn1MYBEq6GCSNCc8Ijl1xBSfPuZrQaMteuiDHPyIfN%2Bw1vjCnVVbHLeqrzI584mEE6iMhxi8%2FlU0WBlETnb914SS3ECGTA1qEB0Go7BbMtkdmVOxGH4IlwGHfCWZNV%2FFAi%2Fad3nuqTb4tdM8YcC4SxBGnPXMf%2Fg9nqc0PhrpehxkStyljiuXNkcKLNhFV9UzpQH5MJfKXsRcGvI5ckElNiTjMPECCGPw6RHXyEb1WJEtSG6ikfqfps8I5Ybj%2BN8QNPwFXQWn7yTm%2FGQBMK9I8gIoVosT7Gr9GKj63S1wzU%2BICGtAWsxf%2FZvhQP0DPsPMQeUX%2BSPzFI7oV2TgVEXm%2FRxAGjjNoVzaqO8UWZfmabgZrgIAfxXIEskOMN6NncMGOqUBgoJ24iRrurnY7BKDPqiiom8Lw%2Bbph0zsLCAFqj5Ip4kmEFrf25BkddF03LEavutCftPe7PSsUBQj59xxFb4F0lYZrx0mz9J5a2nYyBtuLHfgYMLnXbjECuH8rT%2F8dZWQaA5Vk5SYg6TZrKqiu4uw8JEEKSFmJ9Zje0NZH%2F7tDjExpJS4nzPxI5IkSfcZBmNn99CJik2K8N0iMaKcSkFWuDMcjxnh&X-Amz-Signature=9b16b45b00e8a9db55995478252bac971e538d04e0c373a71f01989feba5de12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
