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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJE4EORP%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T021358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIHuoL4q1vwMQd6xOS%2BV3xPGyQYMmPzZLYw%2By1emmdxInAiEA%2FyOUYP7qKycaKmDqeNLdJVMl664zWOZVCjVbtZD%2BdLwqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKj%2BtfketXG6pVUJQCrcA7R8xKBEyF15r9RFc1TsndiIFohHMMTOZdrwBCe7Os4g5rnDHZljalwEPYKJrqVALpxAnkHtJstTE8%2FzoMc2qXJHCtEHtpiLNYQ%2FZdD0JgUVWnXknkyJi3iMaM8BQ4b%2Bzx%2Fv18hs%2FzxB3ssEsOBp0dAlsJyDLZBbUAKGJFBv0iRj0Q5NzWnRuVkfG3GPNU5NzyAEfTDcbGgLGpo7biZP6T3DJIoYqnJZzBge0ai8axGin5DrvqRoeJwM47LSv8LsUsxhiOKV%2BEdQA0Y3DSZuKquBXT5BzjGPrWLzddkaDGbhsBAlwnd%2FjllxGjhzblfpNan0rSB3%2FxdPF1kyhWXxg6IxdaKt3kMwRM38b1SO7TyOs18W3uajBgor4tohODMiwRmK%2BaHYXNjOsxhE4EL8P7Ej9DY7NNmR6gdDUb3V%2Bq3Hjjz0c%2Bkwu9X3AcGG7OmGeSCc35c7vmVstYFgSVpaYOrLdiIEVLHMu1OkOhY4LmBDL8zYCdlJx10HbyInszRthwixkrKdfjAmRgKAz89RUdapxqNolqpp7KErT9KjGT%2Bh0K%2FCgn0Pq%2BFrDUvqp66vYvTWIrz5gSrlDw0CYFqAQh0zWHIDZose0y63c80gD8B8TqFC97NgfLMv9qGNMN60hL4GOqUBNv0D1kJRsZ%2BmodE8ro6MZHQN4Nxdwa6Hh%2BuXl%2BOZVHoRpleaz3XGkPV7z6K9BwE2RPjFbDZA8XmnNiut9Xro7Y%2F3xtF9jp9HCLXYz1%2BEztVN5az7gZqe4GOclXc1kdbqL8PsWp6%2Fw0mpJl5utZYEQN5Y%2B7akXrCPgmyQRCKH7XAHlsmfJY9LQWLwonJk3%2Flz5K2M43YQFqpW2V%2FXBARXJiauLvlG&X-Amz-Signature=f8f7b85fe55ea4c35bd474223298e8342ee9c1eef4db7502a801a2c519d22531&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX2X3YTP%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T021356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIBLmb2dci3Ufo68ZGFrRg8CsfnjZKFIuB%2BJ9NquQaSEGAiEA23yMb5Ub2Uulk5Md1Boa7mViNvEx8qkkp6QCnB4yKfoqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXM313dMfXvn9FGPyrcA6IBUltqhsnO6AhxMqZWzUv1laTBckFQSFi53xjenv9EGYnuo9vPP0p35c5K5NIS8JMJKpZA2slFcFUFpRtRA1uEL%2F%2BBKqRJEXMBTwuQcOvXsWC5s4BG0dPYfehiGfFXzy3PqdHgse2NVDAhw5q4FWm6XHAPeQpHnJqLk3QUgzwF%2FbKayZ6pG5K6F6ZRYi1uRtBo6B1Zo2Pr%2FvnhA9WrTsk2%2B1M5TU9pwFOAvOevV6jIoZDNyCTEVM1MqzOxvbZxFkZE25YKaFEoFCH%2FwBO7UnThsTS8bW7sPh27U%2BCCatDZtduKFc2ZrYE1WUtLgQ7n32jkKyRsCEokIaOj0T1aiBba294XTZA39YxvwV01TtbPgPGLGFXbUET9cJU%2F6fRzNwGOPbSwSeGWqE4Oy8ITtTU6bHfl8j%2Fu8RdxUw%2Brgb5%2FiKcRtqLljgGJv370rQcF15PhFcLCjK41yaliEy6biMkzf9hw1fKkAlDjaqrKaDCNI0JI7fuh1%2FVaTR2ElOu3RxFQKnJAuJpLffcyBOuv3JJEv0DfbUGsyaqzWlqk%2BPJYNtMPg3B41K%2BRrCfy47FFKfz5VbaeVC3o1twqMNzPIBdJDzwvo20la%2FTWftKRIDZ2KBlgUAlnjwSiqzlVMKW0hL4GOqUBlTpd1jV1F0AVu%2BHsqXsVWXx5VeDATHYQjUFwYwhcTmzghYusto6VPErzAJL%2FaQVvU36VfWBhv9m6KO7nwaCXLngLnwbwbuqAT081DLxRKBUEWJz3ljIhX6gzwMC577z4%2FfoP6CuSpba2vYFND0O%2FIpiG0HZ2DyLeOKiu5CS9rLDz%2FQwbVj51Em1xvwFClnDw1P83nr72Uohp8O85FzUYVueYCe2s&X-Amz-Signature=2e8c9dcda48dbed1fa37a3ded590eb2999fa1ca3b082a8100c8a42bf7d73d1d2&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
