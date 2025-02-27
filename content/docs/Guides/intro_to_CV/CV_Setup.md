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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKC7ZWZU%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQD1qFyCouyWGAai70fMQynpmiRIrwe0ndtd5Gch5rwFAQIgDAKgT9iI9fFO4npkLeC4zUyfk%2Fav5tO107nLRgVEjgwq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDNKu3LdTBClDv1tVMyrcA3E7UD2hXCpq2pS3TVyqQ8CRPrN7dAvxYOK4EwsbpPJmRSTWBcHecvCHKEhZh8ApLsKL96ssSmskoPQ8iBHH6kI%2F3Oi3zBptk3dRydQWOkzo93y%2F8YCAAFTNuYK8Kx2B7lhac7c%2FDYOW3vYaoDBTal8MMlc%2B7JwJTWjpXUMgLGjUv2ZYvmhxRSiYb%2FmHAXbxjfMDmF9bv1d0YcGpFbpRYLzil0qeNnmTPngG3pSKpvFmfTsUZUKYg41KD9p49WTMqIkF7Z20mMX6C0dqMhfZKgnTF6vsVRZunjF56Oefv4CsdUE%2FJdlB0brJ9UVk9tPMG4jIKTfUbzI2VqM2Lh%2BcfaaXCGEXw4YOKqrf2WvxnUw7%2FKBXcsve1bA9OCv5Ozy3j%2BVk%2BmSDBwjHKUmPsN%2FWcVDBBlM95QJbzu8ktD9CymjleuRoiKxdCgl70V1WSEbsUnbc0quLnRWHFJxqRDWzibm5R8NWZgroilycO7JQALcVwdy403tGtTfcfIRRJi3k%2Bfy%2BlqTWhY3YfIT7S0UQ0OA3UeTSRl7LDxof2j76OmEkIj397im4Hd%2B91nT0rgR%2FkIBCNUavjVSxoZ35Cxp%2B5guX8AeYFM%2B1fExdcNEz6HH2RXG7%2FmZYfGrt9ugbMIbNgb4GOqUBweqae2t%2BiOAYtbOFVECI4ecvT7FtJl4u%2BrA7J3L%2Bf33P1pdEZ02CtKtewX6ncdSaNW3pB95RfJWbnfnBF00R44PRV2kLMPtfjVeRZ11DHeVf%2B%2BntO9kijp7WipEhaAUNplZwt33ogUGsf8cg5nBa07FbclT%2BVZJeeZpd7YRFyfFCizv1alH2GG4snKUqZr9G9B7IGasXw%2Bq6VlC%2B2jliqsdUDAfE&X-Amz-Signature=fa2747cd576809e103907f30189217b850ac428d34bbc289e1dc64162d8b3caa&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3HBK3KG%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIA4L0u4z6TVK8cjF%2BGDl9B%2FsccfNqvUwf6PUNv3LaWeCAiEAgmPwEcZOkmnRS%2Bi375pQ5iLVqXFS76PuoTD79Zsokjoq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDEGjI9zrZYbcqtIF7yrcA%2F3zdUc8NIhHuTFHTmGg4FjT3xVMgMWVxyDG728aoecfyJ%2BD5bOx5JgbThRQ5nug1Fh2VkHxtDE%2BzYClmNoXo%2FOctAyEStfjTMjnHRLhfiZIrrHbZ209spY2qXbiMNCFZfFjWSyecZqw1EbG1%2Ffkf%2Fsn6VRKte3CnkTJSN6ohxGapRM28GxK9lRZfaEC3%2BBfpHoTTD%2BZNFJ4QNfArjdeiEPHToKh840XKA8xX324K8fvPZhJoyBYu2WPfwyJgFHrcQxXrz2%2FcEK80T%2FvIoKvkayIcDXOzlpIcDynxJ2GFkMwRK2EsTx3TrcG3Iag%2BZXgHrEf9XLikQCG5HAUrxKvnrzB0zae4upBHEe5O%2F%2F%2BDgFCjmlxpXvIGVgM9k1xm4jVLITS%2FXyGW7IAp6saqvh3BmFrJIW8nMObmEyYHoRZCDtOX0%2BWmp1o4QPgZSOqn4NEQ8DqGO6TjM24GqwjBEI3idoOXmU7xCgFIGK6NPXWwF2uepxBIoIsA5Z0mJddJytBQ8fg00a3eifhzSkHCZESjyyJbPYTPkgeKZpPjeoCumml0rhUlfUolB%2FpsDxur60zOiKyQtGc9MOQqIFxkFLpk6Q4F4%2Fi7W5SgsWHvBkaudd15m6AUi5iUiZX2wSdMI7Ngb4GOqUBY%2FQN9PCmUauuNlTwMwU4g6drPLoxCksO1C%2FmjePchDFSv1GdTRcGhDRrtDXhT1CU9Nuok8D5CmndocGZkN4meLESuJAr5T0dZRZV2pGqk9XQEO0jhZM4lEEHPkLcpVYNRAWcVl4vomQiO3D0GmEwpZyb1supl0fqfobf16eRt56hc4Xqroy9PEXRkd4vOoNLh0AIPXeGzYc4FmztV8dUCz6Wcywx&X-Amz-Signature=da0f23aa406ba602eb5206c31059f77bf55d6f2680ed4150a675cc0c5b69d058&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
