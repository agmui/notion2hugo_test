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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EDPDGIM%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK9Dg6qTHFXbyJJy744KaQuH0YbQ3mw3tL8%2Bkm%2FiHn4wIhAPYYLKQDnliL%2BWKMTMRC5mFut%2FXRdJyVOsLUbxkCIZj1KogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQU9bcil6tiN5XFbcq3APGhaLfabH41tp%2B1jwKqEL26D28px0g5fMgLdm43Cqy0rQaZka%2BNZgHZVwlJixhoKbCPutQz8f1VERO50H10gPI5hg%2Bb%2FvKDqVzHEnni7De%2B4t4QxR%2BwDZ%2BFNOJiACzPvAc%2F1CGA1CGWFEKUk6V8cqH5xI2hsyC1oHiLGxW2%2FeVFLPlNh3bjeaicP7myan%2FBHw6Ui9aht3TfFtvimELElBMA22XwBfY2Y7a9hmZJW3ZfPu3fRHLQ8zKduImgDPtx5%2BvjpDrv5bnhMGP3FJ1Nne%2F1zrHcV3UGZf4QPDYfsYia0Ce9820hNv76Tkp4JKGVZcl0K2RKI%2FXw0bP4EOzm7attgiDRcxMTs7ctwgY5dDPdaLdUBHzxWCLIbbhEzxwBC5IIQZ6r41LvA1i1qRg0mlWXiC9Sq9i9sVazDOCwKle68XGQdPdbEcb4ck2qKEW%2F3j9pAdh%2B6T4QOnSQdqS3LIxBBYCg9qlXitDWte2qPzJd%2FopasyX3lzhXsQrK%2B8hgS51RvbamQuTDIGibrtQ7mVvjJZKWdDS%2FpUsNKPIlsJ8B5gr0Im0KdZgSVwoOYboApX9MXf1A8C%2F64YcXPAWUPvkEnRKPYVx8CO6yRKor7jY%2FhF4UswsTNjFgTZS8DCkpZO%2BBjqkARMi9VmRGv8%2FH94djmG6DVjJyJiyybt3JXZl56SeoiOUVYKEFW%2BWsY22jke2nwrW8Ktu6jSayZgDPjBoHQ6vDw0ZB7TvRdCtUPSvSWwWuxvI6kcjBYCJ7ESghTedyImXFZ7D0kCKRb%2FbzxIsIyzWPllngMwxyCPwqsy4QTtLP7dH0u1Wkfe7iaiFbUrHVE0VZ64mfswnaI0OAouJNJszqg2z37CY&X-Amz-Signature=ac176db34d32f920e21baa316312cce76cb499236c50074d5fad565523b5b3e9&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGB67E2U%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpVz0ubmn4WU0khh6HT%2BOTPoQFHsft1R7eqCfF%2BzrFqQIgK2Zu%2FEwggq%2Bee1G0NiTG1ZciDTFsA5m%2FDkh8zmdsqH8qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgbD4qiiktUfXbPCSrcAxiG13p1O7eDXJVTdBh1rC%2FoMVKudT2qF2sYzPr0Lihgs8gAz4km2PT9hkmH5HcFeK5xE7ISDQneQ%2BsHBCrwyQxAp%2BFMaKXXtAbwQov9PJ5BLQU3r5g4Cur3PY%2FLxFpcFuayeW3AvyrS5eIeZz5GdH9ZzXrvcGnFwbpRZ82O4dD7lZ980WzdtWcHGufJ8fXTg3VDW6NSpoJWVJEpwCYWYY9m%2BGrUa6tk7XSUT7sy4k1xPFgczuET5utzUiLhr9p2XWDGqxmmKCnanWI%2FKTGspjhj7IEbqSYHVN3NBH8GDFrkEWkCoL%2BNfRUD5iTL4bsY6xHaD%2BpYHbkbpNnLQFD3%2BcgSal2JABE7TSIDGoy8giCxFQB4OiyW6pU31IxjLnxLg3GiEV4lCqLMR6PhI90qh2azeX5Yy%2BcbE65dmDMqjG6f3KJogZ2fANhYfBCKKv%2FBoCP5dhG194ADe9qYIuh1niav49yR18K0B47MZdGJjC8mKHYGcxgZry0Zwu4l5jtsCddVyNWxHQUb6ZWolZcUOutpvAlJi3VDuLCTjfYy2CMNKuZcSGG0pFgts3jptGEsIBJiBNjDcWIe%2BQnVYdWMw4DLwIGHNQ0f%2FrxxJJQXePE97OyKzMJZ03uCGckIMMSlk74GOqUBxntNkOF8H7b%2BAIBAJN02h7soSGgmGR24tQnXWMD%2BmIQcEprlHB%2F%2FzS83yrOTN1sWYI3KLD0yCArjZv0BRCzR4%2FSfbtd7G%2FBiXnW6uM3HbTZFeZV%2Br223degML0pE6HwqS6wTy2U5yKt4DBRXmGjuxM2PB3Svu3K%2FFrqHHzc3cmjQyf4K6wTFfICijKMn7SUvH%2BhREyt7gyVGQZiBDcbsbSsVPm1m&X-Amz-Signature=d1c65950a957ba4debbba43088f7ed1b591d87a723731be33ce9681353757dc9&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
