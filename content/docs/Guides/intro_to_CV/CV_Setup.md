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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLSWLWLS%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjdwt34WS29ZGZi4S0EIxEUauG8IEW57A6SSzeiopJrAiEAhuk0VusjvUTEQzzE3R2iFDgHwN9jFVZSVi5IkwNkbiIq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDBZkf0fp%2BhnZSIfDsircA6nu6DQpaK08SLDP%2FnMcrXt0GBk%2BH%2FdImvzb5c0NlI8u1f%2B3UxWfVbvzm9yQS067Mifu82Wpn6NH9E2jm9P%2F5HWunfx%2BwTRUlT%2FZHLrFEN416wQyG01fAg46KQ7YfKpGi2OIB6jAcWlwC0YuB2KXMR0HmsP9R%2FN7U4pBHcn0vFUwYNSxgg7i79UcKiuI%2ByL0lbJprq1V8f9WcAKbi7RQUc%2BEWn%2FurEun0kGW4k9u3Fs%2BvdQPpoahgDD6lEZRG3BKaDDLl8S5Y%2BXNzCTr4JLHNKQnuT4%2FSp2xCa71fIjbKV9B%2BB7Qg%2FcYp1NPnKaTeQ6W%2BcRGORL1tH4os9evsslLcjVKeho3rf%2BQ8XGy0unHMDNMWeTe3lJ%2BQRvByrgmrsS18AUf5eWj%2Fv6gyL2Ijxg92lrfGSmPSnCKCnYw6bCtX%2F7Lxw1a43RwYXfF5SjjVQEYqc%2FUvFbuHcPplsHu2H75YdOR00sH8WOpkxoPfYYpm9d6c%2BBWnaNY1i3NjAaK7wki1N53PxCFSsXlOLN6ldz9CZWUQ0hXLAr%2Ft1JryYjUPebnqe8lksAZKC9msixqXfF0CsDuZ3SuRk37uwwjhZBDkm0DsqOP2Ghmzjze4I2Q1V1y14kIRWrd9hUahIQ2MN6X7b0GOqUB%2FntyziCRF37TBBWUtmaAMZUDPMAo7Tma3hWHwfL6Eh8WmEczWwrUJ5eoLEgXK67RSFu6xbTsGSYFR2iXhIb6iTfTtBonqiUEsCQGiB2Zv4Cv5xTMBHKOtLBrzOj44D3zdQA5GCl9TX1o3ZoPt7aTT46tW0vg3OlFwg5KzMvj7QnLxBmGyIUg4pWPLjL9gQLZd2J0qvrf0Kf9AqDhLoD9xeY9MERq&X-Amz-Signature=880039c5369b689d8a97bb07e6817fd98475fe229ca986e786d490dc029013c1&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQQUWQNL%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHr8izMrtH9Qno9SVyznKSv4FLnJZk3zLGJD3LZuwOC8AiEAsDIi7ml7YkKSGE5GXSQBFyf8g4ei3CTz2B0wqUBOJ%2BIq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDMH%2F8HMsePwnk%2FGvCyrcA0W10cODy0aj5QF42p3ofcnC3GjY%2F8Be63Gw8YtjNVVMGu7ESc%2BfUryacxNxpZHRyItM6WoC7CaPNEqcjc15IUEUlg1iMbny2lxObyaFluvFrkMHQuANnhzCgWbzvrC%2F%2FyMdzneuHcg00nU6yhAE6Jh6ySbbVclbX3DArWc59vJudQVB5cNsl%2F5HwgHg6pNutytpKA%2BRZDkd9tmsw3qBwNtBSIvF62OMpTyZHN1YY1t6bxvcLLuuR2kEUhL9jGN8IOe2JClnxNm1Ec2jBzoTq4nIrIFgpMQJfSYKQG8WEit3X413b5zpnZLsB0B8UK1qGc3Z6shoir8dQQqI%2F6HbFmCr15roIsEYGoB9XG3LWhsoXblPwkMdcN5bdcDgzZQ2dFpOWPX2zTLaM1ohoXOYC8nB2K4fddxvnkkW2ProDS4GBhWi6TkgqPCgGgxqcD34J5jgWd1ET2x89yBNTAcD1N7RMiQQRbDuyLdSyfDKXN2iBuU1wzYIr4YawqAUrdNyevygey%2B878%2BNDKwEbW4fN%2BjW0BFhEWzQ2GyZdTyqQeK4HKGPBwkFsGS%2FUE2sS4JzHVr%2Bb22oJh6et7BdXhZcucy4ri2SmNpv9nPKyJ%2FhA3q6qRO5A2mvbHihEgPgMOTe7b0GOqUBCThg%2F3fh0h10FBMAiIy9zHu8De9PROwpbFvO4%2B%2BspbH4bgEr4ghjmFla3awM8zNmU5U2xE%2F8zkOTnpZwwKhlNxuQcQaO9rR%2FH0%2FCtpF8JEJAukvIgWX3d4ujah8lcRWXo6B8DfI6bzMWxL2mDojVg7Ko%2BaKiq9m4T3Nzp1zpBQ7HXRXp4RLufg%2FRmuNt5KRKRpRirW4gZ6vuI%2F17CoL2tcUgAt%2F0&X-Amz-Signature=0329c79ba88daf25c113eb92b6189b86591f4a43d182bb17db03fbdfe023d799&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
