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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SHQD7N%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSqIlB8ng8HAd%2Bd3Sr1hJBBz%2FEURW5PxXwVvz4oZk0fAIgS3S%2Fa5ks7mD%2By%2FFHLSDJQuDreAwq6CM3b9piaPf23%2FIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJqA3L1HEPGxyv4QCrcA6UsIaF6K%2FJPVjdpdb3bbCtMkW0miBqNtYBDpLPKoiaIFQLcNvINRJdZfaz927Oy0kRSiy%2FGHU8zmZBz6g5G1Ho5vgs8An71I02PaC9eGkZe010NfzXPDJWMIrs7KWCURk9P81nrlYXHO0Vi0iEEg6Ya8WYMn4s6nECrmZUFOkA6XLasXwSl5jbIZIOP3BiWX6G33vsXsNMkwR4QCjuxME1jHL%2BvE2rLBfbnUa%2FibWY41%2F%2FTkqfdwBTvuE828Y6fSc%2FrIxwpdndZ5D%2BI9GBhZbgcgd6mg3vBSWfUIe9P94rrRxqEwjeAmUMxier5JOnOQqn58iVxFPGZJsDn5gEA%2FgFEW%2FDK5Tpdvfzk95CgoTiEVtK%2FS2bVQoG7yyxUT9MNXSuPOlBwcDf6aeuuMr8gvGhQQPleSUgir%2FBw8ADaDzo1AgcjHGKKXwG%2BBte7jhrD1f3iOjIiKsOmvSr4VP24gRWnJug3osltCzAq0fcI2fGLerT7nTeRrSweFEtQQ2W2huCCBg6XLRRcfa2i5m9Le08ZXFQYKRUXMXiKnzhBAhiMqifj5EBq8reetfV8MVf42apgZYhCExWEKzMf6F8tsfpz%2FXtBgcf4e4cnL1GnOib9Ulp%2FJ2BdD9N53VICMPfF7MMGOqUBwH6NSi%2BFxJktVfYVcaJBMce61%2B8ptVwvkcMr6K%2Fmm7uGof2bm7DB4Di39HdmnUcj64ze1LuwwuFaVdzck30YihodrpFp5bhmPrIsEfsxArRzY7hIkCRTxJ9r1%2BGKWQ%2FBBWgOeKwxAIXQF1PkaB3ukSiI93rOI6xrqeENPrunukt46GzIKmDKNv7ilFt63qeTuJsruvWFuLVtze2Incfn8QHqKw3C&X-Amz-Signature=272b58858b511857d6e385505b3238492614e6256287b05478deb9fdab437423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ARTWV3B%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEk5DoXs7DyM0qIOYod8THuiGP72O2FIzDq4v8F%2F28wQIgbhea%2Fy2rXM4cCVDT76rnVD61PnMUCwZ1ughFbmAQWXEqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPHNrv0knUXIOGVjnSrcA8LtSgc6CampNYTbMA1HBmmdhqqNzNzS%2BIpUtuw4ZCFGecivnTHBGzI4Uy06V1Kt7%2BHHJ3oJWaCsNO4PBPCAQdLVtXtJe%2Fdfpmzm6e5Pn5dbNqgFR2T%2BScGJMizosU9tF6VGaou7t5mbbz8o09K8DzROCk7eeB9TVwC2I1gx4KDOrTK6zsIulagRTU7phU3%2FiTeKmSfKGvUW50zKM8VGpC6r4DER1r8yaq7q6Ntvu0m0XVFcyYpRzA7Fd8ocqK%2FvNrW%2BcaHnNzNEyNtyNKUgVERWoVEieE%2Bfd2LmoVfaYektt%2Fih0ySw4JDDdB%2BgPQz%2F8EqWsNWQkh1emVYd8ygB4psrkkJbgt%2BTG5FjU8wKd2myXZ7PU%2BZ2CJ1kHsFZmP7x962Nr3tHl876nKPAdBqU6RpcpIKYmlbdwlUXNQWpf9GWCEBE6hujkVcfUhyIKICa0hDqYEIqpHTwbrADm8hJMf0yU4IIOQifj5p3jexw1jCo2UWW1tGt5oSnTXgIlrvGHIrHPTigAoJSA83sZpdaSw43SBU70OEeZYaP5MUyvKm%2B6D2MtpctsoGJUlkDjvOeq6iufHF%2BqU6GxvAVxSPjaOPpNwWMhOe7pas%2BevCq68FloVt5b0bj7CPFZNSkMKfF7MMGOqUBkuuYXX9QnPhU477pNFRgN7obyRpMc7hw8omlWBPR5naZdk%2BDn0qVb6QK%2FjhO%2F3bruxjapMTXitLLpHzibLu16vJpQCPuBFxVqoqwRD%2B6Bhivx7%2FZ1CvQhdVQqhWoQ6eoDgh2OIdmJtneoo6dsHvVf43PrCtjdI%2BERveuV3OoXyaf5lwNEnQUItBp%2BgvGKTn7xusZqkz%2BQgFxe5H4BAiYWnwyogpp&X-Amz-Signature=6e3e75f90eeff26b61ebfe94d68cdf74ce111bbfde0a6e09bf8a0f775293b1a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
