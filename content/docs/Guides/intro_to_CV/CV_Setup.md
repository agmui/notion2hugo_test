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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466244S5X3B%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T200803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCYsKC7rjhpjHnnWqpuyuUg%2BYHlnyJDPEZ%2Bl2xAkkbjVAIhAPihnCrpLEdAQXcFotUTc7d5ja7R87a4xOsIgPpq2O%2FdKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhqwVZTWPZbY%2BIpk4q3AOGDPdGLE5AEes4MTcnetoFQPDPkCNu5OgWS5jGE%2BRuqa2BS8Lc9eODHaFhME0WdZCOJw%2FjKSpUwzlK9Ld%2FMTPl3buUHfOA7FQ25D%2F%2FyZoLVJ%2BcP%2FYuAqUI7XM8kTkY5sFEG70n3K1oLbgiTLepU3K0hpb72Ow5rckeaMnDF3wWESefCgZg5Qc4X5D8NzuXCahT%2FkW5N20wsRqxCyfHPtgVVqmcXYP4Wh72dLPa91V09xdnPILJLu%2Bv2cQKUHGwnu67AWqdt89NGSqAWaaIouBbBanER%2BGL4aXA8bombCaIaWQ238kxWaorFYXyGO48sa58of7Aeu0whHu1erUJAMS0MmWgLUIk%2FJ0Zi0gn87h6WbMD7aX7ARk7fiTtFx%2Bmwjje1indyJXmx1FjZczVZJVF8viQQjbFk0KzRLtGzHgD3pZf%2BwqSN5gpgJ4Lpq2WnyKpmOXyrPAuPmO8xTTaljh%2BQDk3El5Z0R6odBFcUwBvu9ikkCOhNXj82DxWyn525nC%2BGPKXia2DZG2G%2BirCmvnAOLQkumKT85T84x7Sy03hUk54B5kJQ%2BKECtnvzE2%2B876Dglat85Z9YOwyIhoUWOgwtQINqtc8biDwn%2FXXMVLCnSEUKfxCN54XHbJofzDNmPy%2BBjqkAXOuJGci3iS5cO5mr37Iq3UjUxO7bNz7piNhgdSuuCkplRyJwxuhp6ZEJBNETj7cRdQrYa5Ii9lpE%2FTgiCH4oJxKwWlkQmjK33ZmC9BTrvXqPeedVycyRVsT1IO7m08TQN6EIVU1EQOhtysj0hMkZIMJtwP9IENLqlyJFxGdjiv9ORdlYcgDXk3vM6NaBJv64BNKGFd8qGzKNy0y3XmSaao1PBtB&X-Amz-Signature=7dbdf35c57cebd5723f2c07b2313132c5df0dfa3ce5d77659cecec2f15556cb9&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654JFEDAR%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T200803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIDvTyQVhv8xFQWKI8J0SkSfUfORbaBbvxv9DLZLZQ40wAiEA8R%2BGAzu6Qs58HUAKmPXOaPWHUsFmkOjyJgXNwO4KJC0qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPlwh1eY7TOj2IbtircA9CoyFyvoHgrwzzjVMalnShxsA5FTnmAgZ7d3%2FBw5UX9N8BTz%2BeorGeE5I64xFX4ptQlICbay%2FosdxgZiJWpR3eKyam9gZenAGrLkYlGSTBKIoCEnns%2FHNJmMLXQSXEo4FpKMkWkdMQ%2BUrx1%2F%2FNN2gY11oysRruHET3FTPFtvkj3j8HWQisBNH6%2BG7SPhKo%2B1dwQmBckeCUGaP2JNBAN2ghSMYXH7oyXslCC4s9LE4LhzmZJw4qkxojhr6xHRHCZhiDoWUGph86w4eEcKuTMQzWH5m0m0em5gpzAHZyZd59HTtcCP8ALBnmOFifVoPiu7v5OHEjcumpOprZ9Ptdap09enkEMwYRTI794pVSItTKx2rlWruqGd3fxEHrcP8ft0O86YyjP1OfgJB5Rj6PVLFn2HDg5pHl0HKKEYwXRrtDhxnO1v1pUG%2FgXFapfCRPJCsUtl2syIAkbuJ4BPsU709QvJmBaSnhrae6PFKwKo9tXVW0uIjcS7a2B4ivsYxItWNLushtNYWJu6g9w%2BSnMrmHRuhx4IFAhbp7j9LOuKkIJI%2BO1Y4Wa59apNGEbIlzACYdNpanDo94b1Xni9i8PI4nRSJ9YcSFvN%2Bl8XLeJObU0C9u3ZmlCjbnRwW1lMPiX%2FL4GOqUBVGiFaB2aYQTx66Mj%2FVpsYv7qtzjHWBt9pYwko8oSxRdVe%2BRIvVUPQ6t8kX2Cu5HS3ImwzIDGjxqHFUFrtWasxjVf8QTsX44aQ9L02%2BcOX%2BBkgfm6ivrCVXpbld3nFtuTlLxqVXXbzkCJ71UUVSTriPZOcKbOEz6%2FakEz8PiYyriNKoCBgrII1oy%2FjKNlSrdnKNVu2lWMKsfDSpzlIr9ls7mjqi4k&X-Amz-Signature=46d6935cde4af80ebb537bc530fbc84d0a5849fd0ae576f9f69b6cfd76c03c93&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
