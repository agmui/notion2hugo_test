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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZRFV756%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T032323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIHNUbqj5alyNCcCzxDt2hlHtweIq2LNZZD1%2Fo6yLP4IKAiBCc0o9qY8eoTZ1OY14dLNprJ4kgzJ%2F91y%2BLqNVavXoLiqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0QQWJmw5BjMeTSQLKtwDHAOxh2SqUXn3rbUW4RKQDqj8bbTg1o64bnX%2BvVYobEgIqlElUUC4gEjEBGE730ViAgl30EM2mpbZr7575eAltGgTUYv6PQG2iEkXscaYhTz7jll9cWbcTDjeJk5TA3Z0sBqqo8AdtoLd8B4rseNSA%2BSpFQAp8faxP3lu8wjVlqEQl3rpx%2B%2BIxUGYBs9%2BCg3v%2FN1YNRQ8st%2Bam1ZP8Eg65iYc1j%2Bs%2FTpepjYuse8M87FfOtHh%2FpbhmEVC%2FdLeezKcn9ReBxlQlOZUjA%2F338AvIOQib3qzmVL6f0ZQ4dEQXMgF46ubflpfM4zL2gzktmqtJk13aEWAPngQjgLXz0JP10bAGUDDQmxumjp2KiHlyxjMDSAT92E5TP5R7NvL9DAtoydkd9wzEkyhuhaDd0shZxPGGhuKp9Xsli9uiKK9I%2B%2BIUrrtB%2BEJRJhgSOwkoIKNEnnOzkLoXZEp5VYfHS2iBZ2dRJJobTIZNJdZRISqEKeG7C2kwV7ayN3MS1jrf3ZDkVr2tJQRoJFgaCvICSAat%2FD4xQ1Asn%2B9XmopnFuxVFIiXlExSlANXwXZyCvC5vFPWXkCnKvBxyfK8EwEu7v68LG0v%2FpdPf8z5cgKTCS3Qqg5F%2BPnhjkkJPCh%2Bn0wsLfnvwY6pgH%2F9OLZBY3YtKpae5AS5ZKY8GPpfwxoX2b4Ocaogq0F1%2BeoyADgaPNL4JH2UA2pWBlYN4b9p2v27ERwM02ic2O9ILR1chyzcDMzEeiny6WJXM5wiXDHlK3YKYtstfiNKfOXmLbSPliQBN0n5K8eNPD94Gs5LmqE4QumN%2B%2FKwVB8379MmG7JV5kvcQCFBprMLLgFiddtc6K5nA95kvVeXjzOPdlnx5iB&X-Amz-Signature=c082beb94b71a4a61ee22360ee131254702cd5902fdb6f54df65e6e2d76d5db1&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GBBHGTC%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T032320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIHMhDVHog%2F91MVsFdXa6cczvr7%2BkzjCvkUe%2Fwr%2BDS0HrAiB%2BJOlsv0AJWXdisoAU7h7cZCZ5ayVYI2AaKyb%2Fdm30pyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrhqTNTVN%2Bp68JcX%2BKtwDekb4bgRVAYDCL6WwpCrlL01%2BK7sXp8YldHkJr1EJpu1LMIYchmBml7Tpx2QyxnCNGHye2ICp1HKne4v4Dc4ZkwUyCzpxhTvIBU4WxFWP6M6bQ%2Fw8g%2FfK%2Fn3h%2FTdMdukUU8%2F6DfrV2IUdFi8e%2FV5Bms2mhtrWLNrpbOzkDNUTIUBTBiDwjqjombi9ZZmgD5UBFRnqMKW4JoVMKHc4LEzxSLE%2FbTk8oq41m8Z5DWVrH5fbFjeiAHSGHi09g%2FXcXqyyjUrO%2FkQbreUXhnnSKyTbehnrOgxIrFmbSb%2FxF80QdovT0okO%2BgoJ6Fa2Q5qJ1rQfL%2FAtzKe%2Bn6l48081627Dt3V4X5YhLXhAUxySNMRVYz59RABtlxlbBt%2FAtjEYeDsJpzhOtxKTrSnmSGAYk%2F5hA%2FKAGDXoDQV2rLIu2vojimmLO76ZmPACtNGFOcBlYjiWocGTThYv5Q2mXsNEJ0CKKbyc4tUShovP9eRo7soUITl8R2XTfcRkuKV8TPn3Rj0O40Zk2N0tuKc25dbMKHknZuKOCA1OqbsAnz5Srvfdfq%2FO5YrUes8qwKQtokGWYvu8SvgjotgEonNApLY8FJa4MwUu02z5w0FKLGh8melo1cIYxkUlVRpXDsUNkiwwhbjnvwY6pgHr02i%2FMYOE9LbWz8Xuptc1kyU4g9eEmB7A3o61DdoM3bJPbemI76gP27Aze5HBFNLGAtJXTHjGGzHm1meLjq3XD2Cq3hm7PufUrn5bXQhhwbFf%2FTS%2BxYQ7V4JgJYHNXXZxtMJn2jMzxIsNPdUbzj%2FToAyFafhxquNwhvVKWwgApHjb5CB7TDKcuIBU5WMzkMWklDsLmuL%2FxZD3FdrgvM%2BeTboAt%2BDA&X-Amz-Signature=164f792d7c214f4e3d64f31ef1063bb1b44ad5f66b3fd35ac9eb459ebe5b31c4&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
