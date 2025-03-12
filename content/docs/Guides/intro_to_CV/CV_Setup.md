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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPDKX37N%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCAGTJll%2B%2FuK2dh1oVtaU4O7snkfsuhtoHomGVJVvXAcAIhAPg79IwnV3V6ZECnaq1oovIbqH6izFm8a7ZDuZD3BJexKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJHdBw5iG9hXeYWg8q3AMZB5Mrrn9COKavngvbTi%2F%2BuwiDFLIp3ZBsAGGBSBMoRShDhkuS58zIxgoSGob9tjGI06B15qKahF%2FXQ3mcS0t%2Bqg1dbPsLmEgm39RMmmyW53ewYTRGHCI3EXyF6vGF2fDZU0d6yimxYYi%2B2eIwArG%2FBMsg9KhFXZOIGVzrQUSkYIyWBjVgqQaXI69yn7hnth%2FFLQfdLy2ajY570B6xmSx1%2BN2o5AAIcvIaLPzsjXFuSCfhXuqzPX7YRVam7Pku0zpndsPJ162PpI%2BOoEHqLLhWwUO%2FnPxGY2VhMqsbu9Qy5nSJUImJ4vWkBDYCXcW5352yM1GDrCZ4m5Kk1PbVA9Q3PMuc6z5VW5nuwx64yVCxb33ovTXK0pPJ%2FWoJmF%2Bl4hqR6E3RfHo5jxJnFNu3GQTBddwDzVNob6gcAKVBk1pgk48y3mcLnQIb1oQ6Qu6NkulybBbmt8VamLqQc1oLCgLrq8U82LssvmzYOg723BQ%2FStY8d3CHPht8kcn09IeKzhBmrw96vGF67vHG1p%2F7CCwM9X29wMzwk3RVU0hWQChxciyqnsdL6Rhhh4epV1jaElakEJR5yk5P6kW05jlXmblMR8w47tLNgRxkmdA3%2BjhYDZGImNYonYGFP2j59DC8nMW%2BBjqkAeyoizUX9bpunKKUjUjXK0T%2B3lHckWFzz%2BGxx6clRkHOuNLyyKk5LHoPT%2B3kBSe0PVrDbd77o5SgMaTZAtjx7hhcZruLaP%2FeAVxloGhtmEQgVfxp0S4MIywHsoQ%2BXSIU7P%2Fy48FD3vCpFZpalLRzHEFskw3znq9rVNRdRLXKlgrQKOLD5ej22c5%2FqhZZqYMy0UWWBLKN0IBLBrtbXP8vnHA%2FnH87&X-Amz-Signature=298b7187b9b128c16fc1d31979337731336d8f69f997c31d78e27dce6b0075ab&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SILDNE6B%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIA1hiCHlS0%2FlR3IffdXeJ5T9hRJyzxCW9ib7o2WAO5nVAiBUcsN4qZAgItwXR6Po9ql4gH1SeAWH83uzlsjobZJ3LCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFGWU25bZKkEMyB4HKtwDQG38I1oBk6QKrzD9OYbVTxFxpDhngekyOTHDvY6KwMyg%2FwTDa5NzxQy7xDoA7PCzM%2FSHm7F4RUOWfVQjFQqebgKE9CbA8m6KZyF0YvE7ZeK8JygaSYCpv%2FfKcEWcYyuDU0y%2FMXpvWGbKA4WWDPnO%2FWpWb8uI3zOTWXAcFAoKdYv%2Bg0McD0wbAXusS8mfX%2FuGc5VrRrUUCg5h7xlmByzO8hLwa1XPKvbnTUQCCRULwRVmLJWyiogSXTJqtYpzWEztmSudZoipz21T4%2FPSJkAWdWTlNaZzOcOCgZHfNQVmdkNZnXzvHDg5v%2B8n9XU8If07u%2Be%2FsC%2Bl%2FC1vAArJ7a%2BV9zj9dJFojZiomZSLe4zNVdJuPZL0%2BfATm8f1xTfPsTeY9lfo8sYJHtwtBf5WR5RCJVHlVlt6tvnBKIYRnDTLbe9v42rBXyDzJ8qh2fCRxOM6AESNO52MT5ZMnUiFt2L2XSakdy8PEwxNe2QLYOjCSmxUD6n31c6HgsvGwr59BkTGin7sYKRIpOOO8c4FqaHKR2N4xDiJHu6bQjUwM84PYPCWjKhRoktm20RnpuLaOl2NYNaKxHO9S0aKaCK%2Fx3UOXLYKb1A22LSEdThTb%2BHeIKKurEU52iY7CG%2BZij8w35zFvgY6pgFlCgfk2tNzbqceA%2FyPdCZh2jj%2BUv6p549dw9yk7YRiN7g8%2FRTTnqV6rHrCq%2B34admVLsdCT9f1JeqagbKkajhkgZVL3J3BHW2ZDucZfeRhqDjzxK887m93iC78FkmzHp%2BRaLiDlRQCrpItcLUyhC%2F8NFStUhAWBhEUiOkLRObp6lb%2BJtKUwUuf%2BThMARYrUDv%2BNVa6m0ypfx%2F2ImQyLW2jojNSRCSb&X-Amz-Signature=a943fd7f00e0bd7888bfe7b5f77dd14ed3a7ab0529d26af86dff135e0eaca271&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
