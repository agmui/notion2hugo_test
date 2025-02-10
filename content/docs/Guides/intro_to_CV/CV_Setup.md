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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657AM6JSU%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T121400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBO8fns9e0c3QnQmyrOQBY9dhoWkWaRUsNXBuqlNSTyHAiB%2FcHXUS3xw%2F%2F7XG2VKc7tn4UhkpDgqfFNsb0RZEsug%2FCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5HgkvW7IMe3Ea8h9KtwDXzsCPIqgblht1TwbxFlBIyinQM046fYdBjCqeO%2B9ofV2iT1%2Flq5G02clGd4gLL9d1Ibn1cSZ0HDfuMZ%2BgxVvgwzHCwbhcpgjthASm6O3jz5UN7cHND%2FXctLRfEzRcO%2F3YlJsJMg%2BdIOpyKmS1eHHkErQJb4o2gr09xUWJa%2B0ZFX0di1YmfWcAz9wc6nd7fCacerD7Ei4yiNDjxgpHXLvVBz3gb6GBUSgt3JigLvc5jMxvu95VBg6%2F%2F9tojGDtXWL59UqCT0OWbm6DxnV3FUy%2BgPtZ6q1RRu6SF%2Fjyqy%2BBCnQBdXBHWsMeHE%2BtFr0lszkE%2FqlFEyZ01SI913xZOmESoiZCVjOw2JfklROKyJcvags8W%2BCFGQiz6YrHWhILUw6tv2ArwAJwBFjp9xQRCJgwCCad0SblEcLZw34LKOmCx6Uf7N3worbtdJ2pLDINSo4wE7YPGDzIiyUBhKMFc4CzGnFjaVDH9qGWwA2zAWlcLzTBq3k9xZWlpPxz0m2Ho%2Bq7saECuMSzY%2BQmT98lv4v5ufmKfygwZeHrUorNnkXwk%2BT67txlnHySQ9x%2FWxPVuKRb%2FJGjimI1Za31j3vt3Vdt92Yp2d6EuXhc3QpKSvD1hh5qO2qIBMoHb1OQHgwq66nvQY6pgHrjcL4kwWExIsGgxh2LQAlNp%2FRD7cLleRFRjOrFjsi%2B8A46UG3pQb81ehetFk5j6gvBgdJGbghrkS0U5ME0PDpoLtI5FB2QGSvGX50qeBLjRguzBNFh3yqjLABeAplJyBG91shmvZCwGf4FHPKcWTDQCfUUlh1fTrtpmHeLpcVMk0zT3txfYt3vWg1jDasZvZCwqAfx9HjlfQ%2F4kLDlNaz7WHP%2B7%2Fa&X-Amz-Signature=fc57430aa92e13fbb3ade8e930e0ad14d3cea093d347d6b449537a487dd3b82c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWPY5XIK%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T121359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvMJIRrEYFT4jmYlPlYYDccIE%2FDkxSP11DEUgbdNRD3QIgYuhYvRyoV7AtYHrcFe5QIbxcmj0ddSSiXV2oCMNw8eYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEt2W6bXKnurT0Fu0yrcAy3L%2FjeBigu8PBOLCcGrDf6DE8l5k2b8DWAItwPZ63aiZ%2BPQ8eaOErJ%2B%2BvpGU0XalaUrfLYy0vrlFaYbilc%2BmjGQd7yZTNsnT97eFUDrsw3%2BRIsOLBcmeZw2uMtrxR1tqzHnAS6XTvtol3ct9dY3jikMtZ8VhHqdmWMDIAtpqes%2BGBHM7Po0OqN5SWHLJki322y%2FtfIzrvvVfaFoW1%2By7bWc%2BEvTWznqK11SOT6%2B0fG9zwnPESGIDJ%2F8iY9V8xOL68jq67C6GuOnY%2Fyh0AucFPMD%2FoG7XPBv6Ib90KsyDK6sqRxnm8aNDBaMjzBdE32ZihvzMz5Y%2B7fm11HRLURscuhuQZVDk8Zes3BLTo0K5npKH6Jp4hzRge5gEvnYcsw1lswkENmdsso%2BIDZDR7e9hElZenH3Vh7h2JmO7S3F%2BxtY4%2BYuhWd4g0I6UxK7tVpFyenlXsWourbcNEvrvVg0Iq7C7zugeav1GFR8RlvIYFuJISa1BP1eNkbikayZYYjqAOi6lcLfec3yPhy8sUGFxttrcw%2BGLa2g85%2FVs4DAcRmZ2ksdQ8tTyaH5JxJ5Krh7Mhrzo3XEhDCPYhU8fBrTvcqP0A7JK5AGcW1sYxUsljR1sUav5ZUKIwK5zbwjMMWtp70GOqUBhKX6Fia0ATKjEztZ4vJ3huIPHXTAOoPVvfm2tP0earsg3PX1lisxyMCytMRdwFbvWBknY%2FYOhDoN4MeaYsigtqHmi0kgsHRmMgPL23QJ9GGftXlrzV9ecUTZmR0DSeMAPzvlaPNZ0yu%2FRcjrLZqUS8khQ9MzPsneFd0dOQPJO8jO81f2g7JLAzpaOoTanqHS4fpYg6k6mQddDxYZodOp%2BYsH9HcW&X-Amz-Signature=df8a388ba16872355b743a77d3113fce3d9e1672bff645c0108908ffde7cef7b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
