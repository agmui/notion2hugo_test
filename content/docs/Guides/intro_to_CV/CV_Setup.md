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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676IPKVXN%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIEJmSRfGaGUE%2Fd5fbc0o4x6xMPQar34wndxFTGpWkvqaAiEArhMGINR1X4ZN2oEhqiPTv4W9G2GL5wlw6J2sFQSlIgIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUgDeJXrH0F1LsCvyrcA%2B7%2F3qXDE3EQoB0oFo0iq7Bcodrlj3sOHdO58J2F6EC0P2Yj%2FCkluTkyBTjXNRyIrW3AHV6QSoUnG99HYJOS51X6%2FDB7FbrjqvPxhJkahl60FPeIwJAcNt%2BURoSDa3rRIinB%2F7%2BIqo6YqF7mlG3vC1CNmEjWaDUhlGAIi%2FbNS%2FZVsAm1hI5j0kiwekZq%2FEj5narSBKEU0chi07Jv19B6heQzsIvZJKTN8pqAZAq%2B9V6IpZvEZzNbqwt4uA69o7lBe3kIMu3ndxUFQlH09kXNLvQ9VFAqfk%2FhY7wp142utUTqVwYi266005l8jfeYxvYoC4geW%2BVs6Yl0Yjj7JuWmESfImQKVSQNy%2FRlshWuT%2FQfKoCqkxrOQlqf%2FLYZImCF1XoZzj551banSqV5JzkUIxCzzYMIXlvt5NbWpXWqtDzB1EWFRq1rn%2BWCQZLK1uso5T4b28Ukx6ABzPYxU2nPmZtzP9Z63yK9WJpcwA3c8lNWWUllKszVG55xBQr4VQbPO4jWiVEhTwHZGXwdqpTGi1uYOCaEwPzYEUD1FV8u%2BjX2GcAnB0vAuryt2TBieF8OSc0K1zYMqHnig9djTQ2Fv9AhtNIYpDQAGIgjkRtEICvJI5HBsCdOyRo48g44eMKCUusEGOqUBJ9evbhCNR2F8Igr8zUN7Psks8%2F7pqp4yf9DCiRI%2B4I5FMJ61%2F7P26feaWsJZpMsIFBo7%2FX4XK2DPNr0S1uTpgkdSpqgCFMrwptxaz9OsKoWSbQTVI5Rbsnc5QCIX5icdbT%2Bv%2F%2B%2F%2BYoNTxaUvQ318UspRsfhseQtRvhhNjLk1K7AKEb6qPvazOVZ9HmlGXFlUZBqMLDv0jeLfFJxKW5%2FS3Cr8ANbB&X-Amz-Signature=e2eab58e5d12d7b8bad45adf7ca42c34cd7dcdf4d5e87d56270c8063e03b1439&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663652MZWE%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQC9oJM0EQa4TswMsQ%2FyYUeqDovTeqBWXCbB4SQI9P0CEwIgS%2FGXHWJmeFo6gE%2FZsiBxn3jnAZbhqb7Jp7ImtYPq2uQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPiv1KBlMzrFxXcpNyrcA8Bs0CUNI9Mjnwo2QnLgpYJMyXyGXTYeUHW5ejFSYe7N%2BbrEsySnLl5a7HsbHNH59x4TMXGvdDDIvIkfFSAN2Sxsw3YB0hhH32G7lmZHWJcC6Y%2F8WjChLqKqc3XW3GrmEXmxxFXKWdb971ZDE0cL91cUGHDs%2FL%2BggijkBZsdiV7KhYKBa%2BdCXc4BVSZUUOd6TWzXZNHCh7s1RbNTqQ0fYcyGVo742BpbUerQAU%2FyonBU6tgT2RBxLUQoRvspOPZ3%2B8JBsfhHa%2FBCb60CkRSKGMMvdqSXy7D8Dl69CS0%2Bk251fN%2Bj1eJ8fQs6TVwAj%2FP7lOOVHUPVZZwIBprwXdjeNn4wrlW3BY7EsIHcoF9BnqXguHBOZjVbgaPcBcO4Zau5ysj%2F9UDgUmrBf7Vh4RqVdNvHCNtN02qpKiHMEats%2FLXL4S%2Bqr1zpQkJGWMPUN8HuNgomhgWkaIHpx%2BRX6UHmUW0h2bKIhzF5uH9UU1xSVAqr926RNEjQLdZRoJ49fh1%2Fg0tdyJUbePYHjnmazWy9oRsGMhHNcDGFlvCNuywnp2wClzA2XqjeoU0ZTbiFXwppCk%2FKw%2FhOffpJQ89W%2B9SIzEZgx2aw8xZyNBpjEOhFJDTCgeFeyO8Pyv%2Fd24g3MK6UusEGOqUBwtzCQe2%2FBpQcR%2FBUrhV4i%2BVT3x9ibpAIctL2s3tDtGUhX8MUIXqZkFDhwvFr%2BIHp5HW%2F%2F4fZGc6fHo7BLqlaA5nqaxp833eFPyHmSsJ3BtJMyje92CEiCeV53ExHzBr6SM2MPgwuTqU818MIkuIKIECUApVXvQAHmC5b0I9C80KnMfyrOf6hAEXyy5dYC74D4b%2BwsVEyQ%2FPrw02YnjbnOUg0aP6Q&X-Amz-Signature=7773100be55f72774ce15160d39ccea63b56c01dd7c74b93b34ea0f94668e254&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
