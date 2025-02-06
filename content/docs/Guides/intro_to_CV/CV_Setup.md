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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLI6U3RS%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGdivxfh%2B%2FLulTVuPsoQGIA%2BUcTzmcnsYVz1fej17KRmAiAeQOQrxl7lsMB8rAQkzWmdmtagp0%2BPTww6oUmal%2BUxfSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMIa1vUutAN%2FoNgEi%2FKtwD0etMSVytpV49xWVGr%2B%2Fit2%2BPZ1V1tGoeslUll7g0g1fsK8%2BSZd5QHcw9zKr34teH0xhgn0LPMxcrq%2BgGKLYk85vQl%2FRq4HeWyoPa9y3UlPCmBqjYxXySJvoof1rJFDfcFKegCtr1jSqDZHChvsFEvCGgOfsJve6L9gIW0OqFnGVQgfcG45zQSbMQrY%2FwnOIddV%2F6Mqy63l12USrFM%2Be%2BoQN3YG39ucggCcG6cue0wim5vHUNwEgy5Iw54naTj1gVPZjQL4XmnMZl6qK51ATp3Upt5Bbo2OroYaDznqHK8vh8fm9RrIdAaMEpVoIET%2BnRXhRkzI9%2FduUuIqhPPa3m8z7kML6KUiPkITLv28Hi%2B9BD2Dca2VpkotCvwGY%2F2C8gg2pHbjXgoJC4XHp6iM2GF0GI%2F%2BLyGhgcUY23U4IGPgoMl%2BpQfUGa8kW6qntU6yhWCMos2tT5RU76V12tXvV0qIMm%2Fsh1ld%2FWxgIgyosrkxdEf9PTMvhdOJHWmzk6Pxt3KAsFW1Kgx3CJ8QtpvPhMjoVFhjh2CMgEOZ3zR0%2BHbBSo5E7iWsDr%2F03QlrNNNemTPQW13uNPbOze%2FArCk3m%2FZ14KN5d3qxSq2mna%2FfGsAaTutuIg2Xkp6Xka2nYwqP6UvQY6pgGUYWIlTDGBQogMzj%2FglYBN1QR0809KWNLGUF89wHzrmfDGDk3qx9FcKM9yHe2zjY34Uo3EXI3Ov1An0gIwXADrqcWooma1AeGaUF70bA%2B38%2FF4wehhvSztp9j5rtqNuf6an%2FlmFpqFd3KDfL6jq50rB6eNt9AugpNjzzXfcHe%2BmU%2FKBzppeNWxYlR4IK06BqQJbhWfj1dKUXd6Zw3yDmF0AjusQ5Uw&X-Amz-Signature=7940be87b5198aaa8eb9627d2d8fe1bee56ccce11bb942948a225dd92618a60b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BWOTYVC%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIHuTOBK%2FTEPlZCvu2IV9WIsKY7aEMGwmH8f8NLsyS1EBAiEAgApKbGxU8RNbpdg0WCv9OLc%2BInr4%2Bq7nkd5NXMMq060q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDB1deWYlX%2F0rRSewCCrcAyHSZY3QvBKBpIinMPkOisZpO65ziJ9CuaJLTb0E5xBATJdhl%2Fn3K7E73o7A1vT8cXrlk%2Fe311hYbEKFJMwMZ1KR%2B9dTdaUTUGYBeXNHW7saOXZO%2FCU8nAOiBjdvyLaul2XGLU%2BfpT2G7HK1yu6Zyau0WJtdCgmno0m%2BGpvVJtUMMNxPX2j38ews1MmqAtEd3g1eHsbK4y7rHkWAZqXGmcgPp721Yw%2BNG8gC1SThu3Un98AAeiUr5PkTeM%2F5W7XiresjQNAdAB%2B8LPnaaC3K%2FQMautR9ELLEGcbYG0%2BsQn8bofrqUe7EOHoxLVJYUhEp9e%2F%2FsSB5k1nEqsW%2BTLQkN4nHeGgh9E9gHts4JkC8ZYl%2FnN0w9cHwHlH7J8BE9DpEWwAxNHoxnSrRXJSRR4U49Nzv79IywmL%2Ftg8tbbK9qkMyDLCUUkisYGwYijrPUKsFMDFImhY%2FLxtZrBu34GfW2V8gLXOBc8rn3Q47cp2Bus4vTlTxLKzsM40SJFQp4E%2FHxPh5Doh7UpkFe%2FGL5U0c6LxoPM7bJSAv7yMGZ6LRYtmd3vmmO%2FPEGvTk9vL4PAQ%2BdCqvZZPUFCc9z%2BbiVGgXt2g%2BuGUAUBgjOa%2BoBeozN%2BpFlSNAWWPutMH7jKNeMLH%2BlL0GOqUB%2B6H54%2Fw%2Ffz0PtDD7VRyBCOju2lNscc1%2BshWj%2Bnybz2YEDkFr5rU8cCpchWaCnbmu7TbSoR0gx%2BXwjXc%2Fa%2B6OCWF8uPna0FzRkiHor5Jtm1RlgmF%2Baunt0f7CyO%2BvEBvq0DhtkI%2B9vV2f%2BSDGLl7f%2BZCsUPvujKGGmiZ2fIh4qVqxdQ7InFBMR8AvXSkE1msK8i%2F%2FsD%2Fg%2BAdhjPNvbaN558KFmCww&X-Amz-Signature=d7a38153604450fcb44adf21a109dae13df7cac7e6538f1fe51340ab86b1975d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
