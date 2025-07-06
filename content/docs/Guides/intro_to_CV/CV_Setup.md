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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5WQ5BO5%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDp%2Fg8VrwkxE%2BSGguHDmwXKOx6M3F7wJHcsdD%2FI7P4EqQIhAKy%2FmhTUrcbyxQarSl9N8rNKdm5rIoXSBhC7sbvOtVs7Kv8DCFIQABoMNjM3NDIzMTgzODA1IgwICmA5P7djiktKpesq3APLP2tN8X2YQ89Lvw%2Fr0TUh3qObt%2BczH8QnrKkj2zoNm0L%2BNL%2FnLosTZI%2FW15D08ArdmwqnD62I3oPOWAOrh0v%2FVJ4S7EWpUcfyD3iyFeY4%2Fd%2Fc2HiNTHWYIT2UdoiE8DRb9ADdrpVzDTLGpDOjy%2FPhRsYw1dvCcEM8fi6istX37tF4eAwa5bNrQuCLkFsCe8CJV4%2FEBWybKi4d9C7KjmrJICSPMrvFVmkV%2FqsaWVPL7aRfdRzJV2n279EyAgorS84fsWs8i3fxO8T2sEiURc4QdHFhEw%2Fit0wDztRWb99imNl8HNRAqdXIBkK7lI1Ka31RBmp25s3hjhPAoJiV3skvBjeYptmVlvRRLYKdTJUTnzCXxw3C1i%2F8tkjahOJajmxwfmKjV24PN1nWQJPE8CkPs4aLTHS6QlBuGos45pzcjO8qhXcJ7UYsHxnI7XeU%2F5gpgv%2FLMHIajkl4S37y95TsKQJVowx4YT%2F5qhKyrxYwdRm%2BdCWCFCQtcTkrN3cAimyyF9%2BPuNjghyl8BYCa%2FOfn85girI0da3TM4NqKAo8OOdamWwR740cU5uzxnG9znt0QFQTwRdVqwdjUJxjgCeueA7%2BUBU4W8xQfqmLKS7ipH2QwUUl%2BV1UwUtR5TjCnh6fDBjqkAXY5WGyp5LsB86%2BDk5BclOKcjEIxalv9iHqknH%2BFX3g%2F3rd%2BajoIsmAqoqhQRkbpiJjTcI%2BAB7wYP2qguddAUEQ3QVHXmyUiTOQ9wYdkBMObj0cxGZxzaM5tnEHyd%2FcoMRELDPYQGbOJ9JS%2BW7di0ymW8MfNSyNF8y4liZEItnbvzbO8Bmq4h752%2FmJ9%2BaymPRyUU%2BSN1EdUKvPePNYVEOdb%2F%2Fc3&X-Amz-Signature=c8faa6d02dc83b231e81f829b3e2ba93119e8925ddb9dea5652db06028643fde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P54NQ64%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCcB%2FyCcVq%2FfD4Rctz5Q%2FJo3ML3PbMfWr7puMZWemLcggIgVHXGSP5Vo3JvLvtXqMi5LcBRe4Z01QLyHMWpSC4e4pkq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDIjE432DdYgVaPnxkircA8qfJsDFjelCdMxjtg4qa6TigElg7s8TtfHcuNUOg9rzcH02%2BkHFeasuMEQJuBqPz0EEKtvdFw4%2F1WR2vlz6ErYwxuvE3wOdc23og3fPsIkZOeoOuJqNFr5B8js7iEsA2mQaGFJp0UJu%2BAGy45EGo5dD9HeXqR1LmCFWeb1bF3oiNmgLoSLbiX4wS2zj8NxvriTFiqclDD%2BKFBa4MEKecsGX4gylBsG3R8LEJjc48hVDq24lykRBpAVUVvb69qWtf%2FTDPpRpCwP9zekz6%2FWIu3uGLJ9%2FTFIQvaCCX%2Fk0kFJJ3bNSBf6E5ZPTopkQXtdK7I7utz8q65GKjDeDBoXGu%2BGDpQHoIhV%2FT%2FAMpB%2Fn8JxJq6Czc5Nt1RKUE9p0BcFBGCbZFkJYk3n4ekIAV6ABtTuhLCYMbNCWJCpXN3x3FuTZPhG%2FV6p3QtBDL4ncD2laFZkc6pAODupIpkoWWHr%2FVzlcdymIE1R2CMqn1mIKgA6rhYwjRk2jeveaVBWctS4%2BKvMVi38mDcp73nfb3elI7QLwpVN4690BZRxu7F6wHYZq67uVZU48%2FSuLfGcVg9PsYoRYLOZos2gZHOqV9PBhSVDb0EeEYZ6lchDDAUlYXCCmHcwp63d2ff7DuzA1MLfjp8MGOqUBFih9zWjDfwAQ%2F9WYYC4IlVoV57D%2FvhpdOTIXctw3P4ZcvFs%2Fc0PLGRTaSy61CUFkkKg5yCAo8kSvJ2DmhfL7xzrJvnBUCWRcl0ajscR5RawXjYUpcpCOY47IBANZ45YAnAv6a6%2FKLQiw%2BFEa9K9iKF2o5DUplwFDKQiRWLwhn16D%2FkjeNpKZXMd3eSOGhvjC5y13mXOECNcyDmEabj6IS3BHR%2BRp&X-Amz-Signature=2db9170f8a3923ff3cb9fbbafffbea8c0e56b44e924eb5fc83a9dd80cff1b0dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
