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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBDZDHEZ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC5dFDyQGde2yN7%2BwWRKB%2Ba1erBupwZjZbqWUCCFzvTqwIgLTrgTvm7VI6ppAnsmsIkxYCwEeWt%2FvZOQzqwhxC1UJYqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENPaQwSnMFzyj60qCrcA%2Bp524im764S%2BnS9Anp%2BrUgzcOkf%2BSTwRHFo26Pd8vbaCVgvY3ya14Pze83BnJRgdFNSIvw6fDbcKMniKFYdXOhJOndTtF%2BM56wxktdnHLNfgnSkhPeiATaOdiuw5tqi9fD7o62KKtCHcl%2BZV7eLMIZrk3FZ4SANCM5XCRRZDl8vaRoEGe%2BvJyYyaObbdIKIRPwUvGni%2F2NSNvfPCpfwgiepf%2FdF7NL13GvgK2D%2BFLJPxzptykz%2F9%2BwbismKjz%2Btfi3NTYQ%2B4f%2BjMjQ7eI4pWAX14Rf60PnkOVAeqQwH5lkivUMSF2hgT2iOz79u7NOk74VigSW7OLiQMPhj5nKNcqa2udjlqfnM72ocMJERByoK00%2FFjf1eC%2BgJNjAM37JidlAew18j0P9iSTerZSw8%2BscVZuJJyR4P%2BGdYXyn1xsBeVDcTZzqwooMjDMyPelQND8n27vfngl%2FOmc76SfQyEJyG1ErG0DltjoGqgmGZWU2U525cMzHMg3KyVURfASEirMb3DCWeXt2auTrOhIHX%2FkMGuFIjOUPKepfXzZbzBuU3c8UAs4he2G%2B%2Bz3%2BaZ%2B0louhQuq7yhZ5Rt1zrMqPA5pOm9rNHKpkTLm1VA5LnvDMceQBsflJ70pRlQh4TMMW6i74GOqUBBn%2FAcqKWwcn14Ix7TT2jSVrXECgmSFEOwb1zrBfm0siWvt%2F%2BGkZ8rLq2dLT%2Bc14ICFAkT7gcnZjdEVkhTATLeHXeCM6VXlL8QrM%2FHFHG%2BxfJmNrQJl5Gfq162n4XSXEqzUBtKOdEA7L%2FsLWu7t01at7kJgxlbIhnbIlWNQPY8ivNz%2BHvfeo%2F%2F4GgRXDeIG9EbLwHMYF0JPNvUobHje9VUEqmGXt8&X-Amz-Signature=ea3092a6f9f00a8f2f174ece1a6ac66c922179b9c8b9946e29b5d13ef05e367c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUQXWKPA%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIDu5V6%2FyBwWJWDLvrlxnDZO9zdzuOvF7Z3vuwbjAnsrmAiADTCSVfH5qmnvZuPKIYihwQn6BHFLwrt8ioM7h%2FBpmxSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3qeHE%2BWbOxXsf5bWKtwDrcrRH%2Fyu0qnArydLTeiKXsPJU1x1MklZsQ%2FPcNGymDosUITac05eVw2QyRZthqMUQl3dqjcyCqQw3IIfJ9i52ZUzDeZnUIDQ1UI9BUZHGnjHlyuIITakVC%2Bk3Waon3A7WCa%2Bkp5%2Bnzl4YTTjfRaCwMjOb4PDSxy2ffWBMa1ZJGS7yg73RdcCP9X6EAUUeC0RH%2B7K%2FynNSJ41hOyUYcXwj49cp8MPzgAqNjy1EJbjk39%2FkVlm6xyLDV8kiMWiHT8rPPXo1YRv15wCEjVAz9j92dFgEXGHyLzHsULbstboF2xVbFUyqvSgoJOxZkFTadEVX4G2A%2B1AKYZBr2T9na9G6qLyNE1dt6VCdCPUlBoKJ46HtLszofarCmhUpfUOyHdIV7GIcUUG7uxgj%2BCo6oyKxugNqjEFQ354Xqa8jIxrFbFPKbKqgg118h8WZdUr4BE%2FEgC3Vktm9mXp9iC4aZpJVktB4fIPghTDqJ7p2ZMqKEuWIj5idspVDyAagaghmX96lQyC1RXMQa24WnAX2cqDX1Tp6y9IvjPLMdbZA3IQrGqMBDDtQr1FJDUkFhmZziwIkcbulKfu1tAYBNBf2qH1wzZIFMjv3M5tvzD7YoKueVoHgmVil39vZnyUFGcwz7qLvgY6pgEIBa7PQjxw5TKsAADvlodaE1LBj91M1cEguLxBTcpJ1F4KxYhZ6XzSW7i0aZ257eaEKOlBTAsI6s0k5WIJegDT5w6N2BKwtv%2BhJUGk%2BTxO%2FSM5wY9gno1iFh9CgK2hcgFhRmZA9nqLsJReNwqjqAXsyr70bp%2FJfKeh4GY8sCdPExXPR1H4Kos07ciAD0KNVy%2FlY8hlCQon%2BsVAFh%2FXtmqJssYVTG9I&X-Amz-Signature=b6b99f373771c84f9f8727e30aa4e8a6d7136765237a02028b48605f1baba228&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
