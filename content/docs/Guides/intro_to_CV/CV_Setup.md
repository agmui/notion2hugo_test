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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6D6SFSW%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDxCjytTDImXA6PS%2BKJ0Borl2d08AeqQUnACx43lqlcQAIgHc4xmaTJKXPn8nveJ2lcuT%2FZuz3ZknubIbxgAHFzga0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDHCHBrEYMJpr0A2%2BircAwyzWP7SU4PeFVR5nZCDkPmdMZre5z4la3y0mbiz%2FXp0Xxb0O736nTxcmNTpNGFva1ujwcKuJhSe24SUlwbTVaJ8zK%2BFFulu4HQ%2BQOGqLhEZX5ohRZ3HAXFsklaiEWgEDp6cTqC0BwICRZD0smfwq1Ug18Fi90P45Ts6aWynRveNas28sY5kKKDxlBmcVI252HsN%2FB4gUC7m9oytpXRK0cLgtvKPXjWHleEeCG6Pwc2ApTez7ESiooiYHDCcBm4XCW4A%2BFO4PHUN%2B0rPhYcyspfgOshVPUjOs0SQYcFs4P1dMsE7h8DneNzz1pa2psM0JryHKtzt4OGedhVWx0uenxqld97CmXvfAXaZgbVyZa0%2BDU0pluVtXEngd2oU%2F2yREdU%2B5GCJoeuzrmzXk%2Ff1X6YaGpblvyZUZgLk9KCs2KRTQ%2F0Yxp89ZUvQKHyAEHWUAsnttqzmU8ZLtzUz3POITTQMhMOKHBrGbRMMAzEGG6TifWe5vFipCm%2BkcRe5%2BDU%2F2VZtf3%2FourPPXPRycKQtKSGLfTPIQZPSEblaspiqW5M8LZgLKmPkTmP%2FE%2FpTiQyUkDtLhNlpIFe5jOB83BERiUdWtkg6S9NGPJrgo3ezalDbbZlfOI1lKOtR27wdMIH7lr0GOqUBhX9zLjwFEmC7nzSpciAW8Q0KpeElHSk4y06%2FgAGKggX8rtqf5dD3d3wsm5HPu5PfCUqkIQyJ2%2FkHxaFgZUdw8PINJQAZAqzF8Ry3tqmCWSeQKMAC8KYkUMoNKx4rYLYzwzs9xaiqCVuQGuMlIE8HKxsZRTiNVqYbaNMwy2jLwUUP15P7v%2B5Ff4HmUncZl17viyndG%2BMGM5ctchOPzbZ49xHS1Bkf&X-Amz-Signature=168af651d793d17a7de0c2df176ad51d83d2748c8154da029be7781bf30f630a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4OH4K2J%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIBV5ZrDL%2F0Awjj%2Fww3dBYqTI5TRtJKHN4fSHn1N0EpwkAiEAyh5tJwuIXvV4jLIU5qRtvMtN09Q5ap62LzBQwvNVn8wq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGHfwhMdG1IIpK508CrcAwosW7GxFnTSwhuQlO12DhU2o4J0l%2BD2cZAZaWWOTg6dZRNb77B3%2BSdR%2BT08EthimWdvJvOBPmbbAm%2BhKcikpZszX5ItRuaCb%2Bkul19vAV9Bi%2Bc%2BS8zTEoAkrXRp%2Bog4ZpX9BbzVZLkFOAFnAQxHFAHzpSl%2B96ha3O0uwuw1ZqReCtf18TJn9302pkwETJO6GVI3zWIT5aRXRlWi1equfY0%2FzOOK7P9nefMiiNN5t0nLUSrIlKVDLOA5v9LPZYvzMuv0mO%2FO43q1xRYEoZ35s%2BzIiA0VNQryLeFM90%2FZSc9%2FIdQoqiOQug3FcoIDTXeAXL8Ae%2B%2BLFJmwQWfTyp%2BUOJ5DnpS38NVKw4ZX3MiSpUJ6vjIDnhvoSPTGPKspIWOCazm2pG8rr5Fo2PQrJpgvvs4W2uGQ4La%2FOTX%2B%2FpvN5uW5DTZrLmx9JvkhvHhyL1PexHv1U9RcWs6fn8FjcULZyFvtilRIS%2FNGIt3xuTgGrCW050f8wJsz9fPF4%2BHVr3uCPayBqH2wWr9dxd1ozZtuqVgw6SLJR54kdtSF1Gth%2BfqtwQ43%2FpU6sm0EERZuCRqPYk1Q1WvCqLwMstqQ5Az0mWmXDhuz%2Bk61KJMf8REv%2BtyZCvTIK1XyET3XgJHaMOj6lr0GOqUBGPoDj5%2FyDgjlOGULjwCqpD3HcG07coc3l1Aaw8vXg0GmoJlsrcqBglW6x%2B8oRPxAJGzH95CsyC7P7EnyEaVVWoRbFwXFfGKf%2BjA6zFscfo2VptWSlKt426AoPmUe3DrG55wW%2BKh2HQBIWGKYzXSGpGFgwkADSJjpJSDPM25uwj83tEO5KrLLnWuv29oLVjZOvdSWVVek4%2FhAfzLDEPLUvg2%2BoDZh&X-Amz-Signature=1d4f994e733b4aa8ec37e80b504843f616a432f1aa58081cd80e5eb83affa95c&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
