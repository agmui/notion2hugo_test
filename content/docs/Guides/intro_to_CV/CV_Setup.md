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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EZK25AM%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCICOTWF45oaCr%2BRU%2BOtfF6F0m038OV%2BBzhXZfoLH8VYRRAiEAqQcvS9z2Q4FnWlP1Oe%2BRFouQ9lKjBxHqRavHp%2FgTJiQqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhMWRhhFW2%2Bc4UWzyrcA4wAIV3AZUR02QgW1FlULn53YpvR1yNqnm9Sw5VQr6i%2B%2FZppBH88V7sqKmXPA72BusjvWKdkY1XQCa1voTfNPoPTKOMJB4xL2ccDqcCTi64USwAl6WAS5OmWxJSefiLipp%2BL1zp3%2FtMb5zP6nVIdeBxVkWjQSTBt6WBPxCYOgXVjTEu4R9CC29ldrz7F4%2FW%2B%2FKMO2VyV7q2SA92PqMuuEMT62imAEA2kEli%2BJa7Q1KHvwkutPPCdeqvqJFbuYqjM774LMJoGqivfKxeuuaybxiy7ZbilmRjInMSH0N%2FTPLWFdQ7pYEB6BGBIRsUZkKs7twhzfCZkYIjzYzHCjuFnDgOcXU1l3qE8kkfycbuy9W0sdMxXjBH6XZyv5IXDhITIAUGYn1NsjMyi%2Bnrw9AzbCKx9oGXU0lWoe%2FFAaZs0%2BSUsDfORQoApsC8L8Fxfzx%2BRLI3BjjHkTnJAk0gffXitOc5OSm4g0ht5Ej%2Fjh48atClQ5TnHctVnE%2BT6DA1oH4ZyRJSxu7QqxRksS9iyQw7Wxf2kjmcFk3rDzY7F7thsyLY%2FmSBsCY%2BCh%2FZhgvcXb5k5yG9Vxlx2MhYfRYG99Vv6V8E7p5DUgsKroTs%2BJ54zDW67Zt15FaQhgjC4PppcMLOpsb8GOqUB9pwKML6V%2FlBpB1zIsQI%2FRIAtenX4P9KvSGVP2xF3o4JieYX3qjP3DF8rtOpI51Oa%2BDTE4zHbeoXIAnvlXlrOeGtd2u2B88ywua9j5kVslzqg8jzjBSEnM2pyIxfPRaxh32Cuz9U1ct0l0gv1G4PzqP3EVIoDGWDSLHg1TCzwdYaFu8Rl5s%2FpF8OOpRxDSfSrAI59Rl0x6qiyTyy62IQ55UIfLPHZ&X-Amz-Signature=6a07d4d98f8d3026d9001a56c86d5fd51538571cbedaf21377919fd60194418c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFGZ3BSU%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCdaI81OibqlGOHWKgSagYfYnlAqj7VLC%2BmIY%2BgHSF3tgIgUNbP3ioESpaGtMDxPAOv6a77GkakexRIIj8YL%2F2l2hYqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKSIN78codgoBP0QircAxjjedlqZO516%2B%2FZMauQqbqgXhFTHiR02CYh9Mlm8TxJkhpjX3jHmr5SQA55j1eUWfHzbiPqZXj9lwkf7u0h%2F5uZC5rYHDSEHei%2Bv%2B%2F4%2FKaEcbKKG4OnGP42rJ%2FdrWkxYk%2FaQQvsEY%2BXLMD44u4YPuqnxUW2v2GpyZ7bNk7%2BEzIA%2Fkj96UBFVQd9dAXbGiL00SyiB1VQVQGSZcSqIYb7ADL9cD1LwD3iWC7Q1NnDQhs1RhjwgGN12VYruHSrHHWgP6ZvXgmUjukP3cvD2gkGt0O78ZPksZXxunv0WUZQgX1IbVNt5cZ6xr3L9Rp6%2BhDcoqh%2BJQ8dfn3nWE%2BodGqvwRFK8kEhSJP%2FYopWb%2BRpt4Z%2FHHITvlmRqqItTeEWNGplR0QppsfDfeRj28t02CVBDjbHu4evEhMJiaxO1m8MD7hsmROmB1ddhg%2Fl3wRZv92RSSk087SiA5UV2JoloWLy%2Bus1ASJ8BWPDEQ5KGtokMRKTy2zETQRr%2BvCrWSJtcKLUb5rKJbhnZf%2Fx8scbOeOe2gbFDRN8mSyztrMiXqq6Xoij01xJNa770Ocd%2B9oeS8%2Ff%2FBddzMIlVIC%2FWf6GhzndFz5%2FM%2BeZ0ynQECs5K8vWP7qGl9b%2BUNgDza6oNvKWMKWpsb8GOqUBZVGRx%2FeCLPw6reRRJHERTTjciOy3LEX8zHfPv8yAP7zW0WuM%2Bi4BTZmVqzC%2B6ZbtL%2BBhHHkEyNIbbC9IOiWRKy73%2BpOdBPBSCiKqmB0qQmkveA%2B62bUr3Zq56tHaY3h55Emnk%2FPo0aF%2FylOuFjEg7FD7EZHBdTf2ulICKpZRxK7XWrx77SAKs0Wi3ycoQY9Q1h%2Be1%2BhrcHXnGoA7yW%2B6KjNw59%2Bx&X-Amz-Signature=646121d80fbaec393a1e40d651a218064748eb1fbefac53e54cd397c8df180ab&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
