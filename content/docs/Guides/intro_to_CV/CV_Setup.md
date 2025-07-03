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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3Z6TZS%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDPyf0bZK0u2ty9UYXp5GTD0%2B4OuvoEKagGwT%2BrY44ejAIhAL8Oo5OR%2BnMpcuW5nWZa%2FDAibQ%2Bf7vbruc6gunShJj9hKv8DCBUQABoMNjM3NDIzMTgzODA1Igw9fBkIkjg05tZuWCIq3APc%2Bcoa6WYExI45P1jjS2PKJrkKlNsRo4GA6fOKV5r8R4nmXyA7YbncfG2EP5ebIuXv7TOHEneOE51z0UtZFHbszR2dvC0ezu88Os8VqrgPZR%2Fzx0CpUdaX3LYfYF07h5ZhwghqIh0Rft3BHbg4Lv6NlyxiZWb%2BGtO88RRqR2%2BtIVz0cJzAqHsvLfmi0nlGZhSaRWubegOvT%2BH82sBl2qK4VJCEUpq9xiID36%2FYlTIOoIoc%2F5uTEUxxL60zZ2oyfxWbeNwihmOxJjOqboV4HN1tIilRo8HzfthwQ9OQN%2F2RpvpWtcjoQ5ik%2BVhHVKnj0dTmR0utPQ3IeC3VkEq57TIAtBlIHKNDxCunIuFU8FX5KstJS6fWcZCzbiSX3NMYeISIowlo8g8o9bQ5dpHmkKgkOhsEw9Nhp6EO95m8BR64Eoq5NahbeDDiSivkFGiLzv%2BDzQsMnhF8LNix05cWqRP3VrlgWPz6Wmco8r2WVcdHPsbmpGaLl37yU4xFrR28LdA8cgICLRo6bQZIyAU2GonLukTqeu1of4t6NL3XQuDWKB7tnRt8eByi9PrYJR42vi3%2B1OUjmvaxQsUmJXMj17PkHoTsetZCm4qFRMKIaIePu4mW0zZ2JbYeWI4QijCw4pnDBjqkAa%2BSf6uP%2Fsruk1sE%2FrIobSYHzsMJCuIEc5fLNzIuqrUhVElRkeXG8gOBdMtv34f0gMKu7LSo126yv3QmOxXBPFU5uQeLdGMzEWe60yn1H6S5cnlA0pU4%2BgsmXPzPo8IKtKbkSaguy6DdrZyfc99ZS2%2B%2FRpy%2FtRlVisvT5NGyUVNTzKyerFDXBPW4ExHwPT9lFarp5SHLkcW8Dbfo5s2oRf%2FOg8%2Bv&X-Amz-Signature=ef80064be51192940f0abeb07bfb9e71cc357d0d63c5d9239cb260a9063c5fcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W552WQ63%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCpc%2Fsmk2ZULG6SngSuj%2F%2FgsCZgp2eVMgA5X9yjjWpluQIgBth4FdD0FPqxfAE39iWL4yreQFf4VPm4SkKNOLwJUjIq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDB0V1LM2VSLrVM7gDCrcA%2BG7%2Bp%2BA1ACsQA2%2FL482yPTtNu8J1H2B9PcEEH7RNvL0nA8v4sbSyJYxB01QvyycV%2BMORlzIRnhnK3zzvQIFJE2%2BYokI6DWZuqdbYlTj1Fxi6Ev%2BJ5lCozzATWhfPApa6igJDxZplW6OalPBgIvj%2B5IPEbv%2BcMBOvNUoFkZMLpPh3DeaR%2BrBpe2ziE%2FH9sA%2Bo8H%2BJQYk5NZT7zlCUToHE3I9o7dNDZ0ZF10%2BaW8JozEYEVKGWQi%2BcLCFguBdn0LAYjylWfRdEkLCVOUi%2FqRJ3knFijA%2FiUDNQtxv%2FzBkBROnnMp2fHfIguLSG5Xl3Y2FVhBHI6H2AkEpnM%2Bv91%2FyHR2VLGlEk%2BVEFl7Yu0jJJySOMA%2FNLBrRFmmv82An5SwTyfNv%2Blw1xPfk968N0r0lajO77V5%2FJAKtxOedUoa%2FIDPH0Lbqb5agvvT2cYH378VVa824yJNJ9YVBrSJ7%2FKqLis94DwNlNoaCJLNoLNDjKP8yVimVjQ41%2FdTIb2KYB%2BBqCvEd%2BRZs%2FQNmPnmQP%2FKskX3rjx7qS8u0LjU97elUzqV%2FC0X4X7Am25zfgJqVYo06g9zvcjRSZGssJdEkjvd5JpbUgaA%2F1LbQaZ7qB7zYG2z2wuvGHgRrpowj6%2BLeMMjhmcMGOqUB7GAvzO6%2FauFkw1l3ITxqDgvy0YfJu%2F8cr38TPHErvcScfsksB1ft81B2CS81srX8R0Zgpia6CzbzCNkSnocuYO%2BRTe8852AXEBAv0O4RMGJe5Igh%2B%2F8CA5IvkwMBPYGSkgj%2BIV4Zy9TxpzHecEJTxJGrFShp4oy%2F7Y%2B8Rz5FdIZxOi9cC%2BbdVgHU2YIlJgs7RzCkcDcKgp6ARjnRIdn4xH42HW0L&X-Amz-Signature=eaf1c41695d69828c3fed016b5dea3cbbc2ddb725e3f82c03a2f252d9ca56394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
