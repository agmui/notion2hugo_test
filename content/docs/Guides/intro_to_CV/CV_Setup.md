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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWPFRKJR%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFumjOM0gmlazDRR07877Y9eptp2pzBIc%2Fe6ARDPoVf%2BAiBqSHDBFucWEztuymZZnLN08g5IKAGn8%2B3Kz68PrfN5PSr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMvBlgLPa4%2FTRZMFNkKtwDO0WBY2hLD0xKMQnK%2Bcrcu7bIkubGOPrl34UOHuNPSWxBeLh%2B4VNks2x%2FhzSVtEtepdWd0pq6FFbb5QP%2Bw3MHfr6y1ig6Gh29cwnxOCwZ5dFI4TNdqFQ6H8a8aofcrQsdkzAb1dHCMR9%2BC%2FA5QHzJ7wfjCBbP2ZVGHijos5AX5aH0%2BGrZ%2BUc%2BB%2BlIyHXz8ZjAsWuYfkL8e7BPBC8%2FADnU8A%2F%2FYxOsodoVZPA%2BO9M2FfbdfUd0lvrDdbqgptDz9hbJFvukFHgjPRoabQLNALnMvjSzT%2F6ZUKrGlqvI91AqMM%2Fj1na5RZDJtXnS9z0YWxIogv9lb7mRIbly3N7luWDv0138iZRst1kiNz3Mg1ii4tdqgjo7Q6EPUieU5gJsgVC6kPhB48jDRiH0WEJvdHKHm85T%2FpFmG71E92JDgnTu%2Bv6efUsr0xirn9MXswOEHnMCgAx9GDXiS6tTCjveyDj4370pUwtrT4XG28oaZYbxh8uSZCG%2FIP2Zu4ir26IxSYma4nNQsavD6JWweLhq%2BkahXaFXLU1sy9Fe0DtkX%2BEBOMONXYKqqeJsg2Ccst4tv5obxmdC5lpjGe6VoNrTubAhdspOz9McmlTMqvYpYkylTfIZU94xssHiFn4y3tMwiJ3dvgY6pgHiZzga8tLQ1qgTStGBxxh6TQvj5gm5yPfxf6XN0IjAlgvM8VxY0uHC7ZpZ0kxGoSQ5GvhB1kuFg0EhoOQ1gfZwHKRL%2BDonWr8kLpAHz9DgWCO0S076yzIfZjCb7D3O9rRTtOViAy4w9e2eJmxvI6OyxT%2F3tIWBd848cmztoGjTf5N2FcQIg5QymLuUdCTOqnlVROhdX3Eqn2ypGhHF7xIwcbYST5gz&X-Amz-Signature=c6a45042c6cb23467dcfc0e5411449115d717e6a6484f1f5e3ac8baade340b05&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AEOAQZW%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBNEChV7NorxhpG3dy4zVMEksO9UH2U%2BUXwT%2FA1oLeJwIgTHnlhDJcQ%2BYvzzEo2rSWMsQMyiiMAF1FxiVEjvW5%2F%2Fwq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDFOW4ilL9b6yac%2BL4yrcAycP1CP%2FwYxhza%2Ffm0OyXcSRlb%2BenIxQXLxugY%2BfFg%2B%2B7%2FygC6IhOFlhHFf6l4BZhkf3y7mTQKKpsDyOPe%2BacMSjBMp4KQkyzHqZ0iS8PYJ4giJ%2FaBtlv4YwdF%2FRnbc%2FJLuLda8SPbWRSI0bcl4d4Kktts9FydEC0XtyTapKkYd5JK9dNgJYM%2FhaFeOz%2B3G8Pg7ZSAWuXFx02N8Na%2FRcaYthHKLwsZYKzKSSalLKuw2u6wDrAWAEnMUQMxVvuRSFfanUGaA8y7WXx7vbDQHMt9Lg6t16QmIlvD4Fh%2Fadnnq%2BvW%2B%2BQDiUivxvx1E7GmLidhaDYhvFXJfI6GrR4G6Rj7mKIwwitiGVtjrx0l6ukGd2Z47aOcIHgrWRQSpRLf4clwVKxObpPI3sB9ZGlLt0JbGOr%2F9mpMqq2UXMFZ%2FJh%2F3NJQCM6EF9pBtnOBQP0oSLZHaN5qJREjweUWCDDzELGCHhLEb5QQqVdajqyiJLhn2Yr8cCLfNS2MabgpUwzeZv1mBiddGUAGj%2Fdarch07evQhFD%2F86WDJP3jkE8LEFY2V1DqT6CEqaeAgLmrdlInn3S9oU0JNCKnwIMcpwhnAFZwLaOlK3DM7nsdAw1YR3QAd2tLf7NK7mFohgTNI2ML2d3b4GOqUBFE9FMjg2TH%2FunZcMBTuTajkesdzhQ%2BYBYd5k6nYta3cPFmjN0Q1lHVDzSXNcptc446xbCa%2BURVkW344UJCPMJAlKbH2Ii8pZlWynXEv7H7LFTCjjzwpw8b0Y0s0c9oDMK5h%2FWBejZ7NIDFycEmN6u%2Bn0qIQdDbgzSlsVJtq3b0MnwOiYE1j3V8p9IkOEMr8dvA0pyvORbbgCIKPxd2o%2By2mX8hJJ&X-Amz-Signature=7fd058e2c98aa091122a3e2959cdf5344bab3998f9502d61f08cfb30ba618495&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
