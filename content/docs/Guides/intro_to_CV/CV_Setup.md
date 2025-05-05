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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I7CZHUU%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvi9oJB%2BfrYFo6%2BionVTM0j1PxarNmqolgFU9vkMkjtwIgQlon%2FGU9yQkXXvro1gw6jPy2%2FNZnnWMtm9Bk6e1D6QYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKF%2FVX95GKEdtRxiXSrcAxtS1DwrvNAG2vW9vyjJskd0o9q4gL3Sgi1MxtEDJ3bc8Z7vMIdvNDxubJMMAM%2BiIWhwX9acCfozhX0ewpWbsu63MmIFddymZ%2Bytq1vPmjTS%2FdjLjaRwTT5CDYU45Q0vFAZha1GK4w94bq6x3XudGSZ4mpiGJjEnb%2BFkRM%2BYRftuUHZl6AZWALv9xX4nDg6gzkc8eugIx%2F05Xr67NdwJ3Y9Qt4frEcTjTuudhtjR2T9URM4PUkA2XqOdCILvkemWa4AOr9eFcxODwsESzUAF56v1ByfqmV5RhPrzhFmuefKk9q97mYf8XAiAwz21jobH8AAzGXV6hktwsz0usJrlntpGzZlZf%2FaL0Go1KBivxpne%2F74PzD2tOfMLgU97raVLilvf6CjPpr%2Fv2Mvx4SxRGIfO4fHQiZXXyEcXt6f8H6dEwCKWMuBZx3j7X2uacODJRQVzHzC2dcpjs6THBeR4d56w%2BYcULYY4afZgN2kUn7FG3aW9uGzNMY8aXknWA2o4m%2BCvtpVPmpMinZbw8KqPrPrapoRFYT3v4J2bHvxnrA%2FoC%2BkMnw5zALd7Hdjmby9tpxK9Ni6JofTUrQvyRMcJH5LxJxYOwaZBte3U%2FjVEqenjiN9sMIQFqv3JO8ZMMLXl4sAGOqUB282VHzwNxRG0RfZ96HKmkbBff0W%2BMxbTLQGcmBdMeI9nVgkJ0NoXqNFK8cn3WZNz5O%2F8LQMIL51UQxUXBuAr93bcBQLvdpkmeGhqYMrkUAi1uIQ%2FsWOnQHWElOH02sq2VlPoUzk4gOu41OCKbu4PA4kIrgsS7FXbWgY6YOpzi6us2yyBI%2Fs6I9E79WRKYzw5AQLOJ9pcZAfgbhsqT2CKAscpYL0B&X-Amz-Signature=5fce7a40b385c9bb1eefd6aa62519ed88b5c5792997d16e3a1d155c80da691c6&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCTBZP5M%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYOnSVt2d42CqiSPFNFy5X9UWl1isSoY1kQFGdeqvysAiBZh9zibP%2FzhJwDJdRVifnmnUCgGutjdwEefli59aw9Kir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMjCCRoVQBA9tjzp2PKtwDkTtB7KAeIECcJxsGRh2l%2BfScKgpjmlHSWvHGerqTPLOmD7e2Ddv%2FuRMDGj5FffRCnM1BSIo%2FCp3RfEdmPKXwQPg1fq66Y6yGiGxWmGSQGsWTmafVUSmmLr%2F5nL%2B6xPU7mPV3nzIqcpEAAaephy1sEJQTeN27ycbKLAYWi5pxG3wajRDE2lIbqnRM36p5jkqLvLP9blwENp5%2B1HdXctKhiegHgZgh1Nvc1WJpqNAL5lTqPmw%2FKykJJPjoiFfwjj2jhFqPGtDHtpuZpmnCijjCLvdfB1deRWi%2BetosMm50b%2FyvX0iBOxrmzxQiCHMwvxC2F55qAdEZM6PLf5Gw12YOKtEZyF8VJaZTajjld6Ux9RLz0FEAHGaGD%2F3h1RlsN2htmaHIVfK6oODPOH5upW%2FHcJqSu1LKgwmYaxU7E%2BqSilUIEP1kPO%2Fs6HYQa60w65IqNGC5KjSmVenunk4eCb9Yk4Ke%2FkImHQa6buWqdkFtzi5rGLYXRBFnEwG35k6F9i8m%2FyjM1gb3KnYqCZ%2Bwviw45zgahVx7XVEPzi8ABz1%2Btob%2B%2BQIxA1Dvult6dojMZuL3crsSGbA%2FtZWelUE50mMGBOPtTdkbOWZv%2Byhcm0mS5gcVLaSkKQ%2Fujg48yJow%2BePiwAY6pgFlWO1hb5vO%2Bmsej%2Fw5JAVtIpzRSKS%2FkkNgZUIUWn32KQVTRUkeJR0AUUsp5g3TGfLdiO41UCQVTVJ%2BIIhSUnotqkdZF0XgTHReVm4%2FGAy9exwrvcHqXXSm6SGnfvPc4y%2BjE4Gw7SMr2YF7qqpTrA06SAp1u8yCQSfLQTn1NjUJ0ZbnVv%2BcOjxdj6lhez5lF43cbFuuUfjvrI3JOawu6BVGMjfW590B&X-Amz-Signature=fd7f2e2ce6b61f9a25b72254df68166de932bae82ae504a1f5683dd88a11b54b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
