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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLLSEAHM%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIHx7vLliTD6EaG5NKgBd470iK4cT16NgzXWMWJhYeQY%2BAiEAn8N6d9EAveyb0F04AimD1a9DzzZpE%2FXp4H1Ff1oHX74q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNRZbxJEun0DQDHFjyrcA75rp2p4H3RVGTVaHnAmQlbLS0l%2BxKLdnYPYPqHD5I%2BwKDFI8zQgp5VanRKVM%2BQuA9kFodznGilqlup9YSqT0Bd%2FSkT7kQY3nGYEnYs4TNlqQmQv%2B2DaQdsjhlP4pevp1yNVRmaZYEuVJtrIszGYihbuXRjxcCWVgRv9EqUWFn7RtBEs8gPXOj6bb6K0eJ%2BjYxlEVUfbcF7zex6RDUNNYqgEiz3Bz12GzLojyX1htEF%2B%2BgHa5sHF0unPTE7AdyckHaQMyk8eZwyTSo7y%2FpwVHpJ%2B2EinNoFY7Qteev701TESvCsXXLFIXT5qDY8OiW8XXmlMIjI%2FTGV30t7fKOkn0ev85izInYSHfObdMaAl2QeWGonkN59bP2nH4vMAOBOegKTDJLp0J2GVsj12dT2lLaTDmv%2FGZ%2BcLRh0fpqyvUuYEMleGvmdZMIfblpz%2F9JW5vXKRDaaEbgArDPrZxnkX9TL%2FoYnyFfgjhn7kxgK%2FSTMPgVajxiANUNt5GxhglzSJiq3Q7NvYmrtA4Ttt9Jqia5p6af%2FE9fnatme%2F3LAUdUiFIBmiisutgdU1BJTWY78%2Bu5IlA4mKLnhJQPfdozKX5MmdfxEgGhdzpabkpaeMMxTwDXbCEsk4t9h7IEe7MLO2lsEGOqUBplf07y3tkLZi0cdNDkjS7UM9SiRzyyewA5C4JOw%2BNBy7BVHiYQ1OBH8Xmn%2BLJdHq%2FhiIfpYqAIprC6f%2BNu8JEvyQYwx6yXSuCBMqMbfCx%2BSVZUYUUYjZu7kOv619AY8Yi%2BSUgbMiDRYZGTSqJr8y76pf1angKePhivTcP52efhdwMFs4OVCkTJ4XtgqZvBBxGHIle7eaA5MPoKLPRpDy4r%2BY%2BL3i&X-Amz-Signature=cc690bb59b12cf296e3af28a0ed40037032e46ed083b8f545b56973dd8d9e31a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ7QX7A7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCqXWDqXtS0m88y8M%2Bcck60iGHQzqdpTa9vdAd%2F3zpdGgIgQdRKSUvdsrTPYREDzBQ2MIS5WkRh6HhqcxxhqCDfmNIq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMkVAQIewbRbDzIwvCrcA3qVSTUvBorkkzv3QuXjXoLdcH6cNDW%2Feq71RRIzHqdCJ1wufvmG%2FahRw%2FrTN7kGL5WFdbo0we81W3t4HaOB6o2Q3dbXhmn3FtNFGkuzq40GOATlER2aHTrhcGS6DuXztUKTd4cc5vJifnf2ev1F%2F%2Bnk3XMi4P%2F91Q16AEkk8UnZeOhaLU%2FLDC%2BkVAvM45V6cV6sLhw0JGXnMGV2WITFTXlniq%2F3NdaJDKC6zHpmlRbcuj03LtxsLn%2Fh%2Bw%2FYZyU73I8xLwnV%2FXphtJXQG19ieYUBgVBGQGNoaiH4FsOU%2BUkz%2F4J%2FhToOJTQOMUwUxsdp2iamj7tPqGWnRt54Cb3YUOdrQz5EWTiyVQHDBWpsdYowZi7wVr5r%2BcQn5e%2Bd0dWWifA0cbjvbzoilYxcqFWtlRa0FyLGXkjsEWtVreN9QUMGa4UFnas8QAbNSYw09e3cn0dWcwOacC7WPbPdaEnbFDmycSL%2FMC4AhLQ06lLVCLWCUSPLXPyUuIsp2hxDmCrivzWhMqvec6c5H%2BRSHdnKHOZRvpj0Ziqp0PTVdKacO%2BErg4YZKeM63Y1p9%2FIIXOaLbZTwcbhD3An%2BXtATdHsuFBFf5AmYPRiBPe7OKYZlrQCWkdwoPGAT9ugLGBhSMLq2lsEGOqUBuQHcqHKcdqqxu5%2BkQ1e7%2B2IU4gFHxWC4q6BCNqJcjBouAvGDM65SwtXJlBCznEF3JZbi9TX6JnmHGsGgvqSb2JzRwTI%2FzzriWBWlyRZ%2B8DDgOt3EapL0shRr%2FxLHwH%2Bz9fplUZoHAMEftDSJ3zR8LxE4KSqWYpe%2F0I10Du8gpaaPD8JAU%2FNAAnnIFNJ3sxVSKDttAJFiYW0%2BJaohUQ1hk5pH3R2o&X-Amz-Signature=2adf13bd8a8ea9481e552546c3213adb4428ec2b929c71b24fb02b1c797063ac&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
